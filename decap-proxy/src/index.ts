import { OAuthClient } from './oauth';

interface Env {
	OAUTH_CLIENT_ID: string;
	OAUTH_CLIENT_SECRET: string;
}

// Generate random state for OAuth using Web Crypto API (Cloudflare Workers compatible)
const generateRandomState = () => {
	const array = new Uint8Array(4);
	crypto.getRandomValues(array);
	return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

const createOAuth = (env: Env) => {
	return new OAuthClient({
		id: env.OAUTH_CLIENT_ID,
		secret: env.OAUTH_CLIENT_SECRET,
		target: {
			tokenHost: 'https://github.com',
			tokenPath: '/login/oauth/access_token',
			authorizePath: '/login/oauth/authorize',
		},
	});
};

const handleAuth = async (url: URL, env: Env) => {
	const provider = url.searchParams.get('provider');
	if (provider !== 'github') {
		return new Response('Invalid provider', { status: 400 });
	}

	// Debug: Check if environment variables are being read
	const debugEnv = {
		hasClientId: !!env.OAUTH_CLIENT_ID,
		hasClientSecret: !!env.OAUTH_CLIENT_SECRET,
		clientIdLength: env.OAUTH_CLIENT_ID ? env.OAUTH_CLIENT_ID.length : 0,
		clientIdPreview: env.OAUTH_CLIENT_ID ? env.OAUTH_CLIENT_ID.substring(0, 4) + '...' : 'MISSING'
	};

	// If no client ID, return debug info instead of continuing
	if (!env.OAUTH_CLIENT_ID) {
		return new Response(`Missing OAUTH_CLIENT_ID!

Debug Environment Info:
${JSON.stringify(debugEnv, null, 2)}
`, {
			status: 500,
			headers: { 'Content-Type': 'text/plain' }
		});
	}

	const oauth2 = createOAuth(env);
	const authorizationUri = oauth2.authorizeURL({
		redirect_uri: `https://${url.hostname}/callback?provider=github`,
		scope: 'repo,user',
		state: generateRandomState(),
	});

	return new Response(null, { headers: { location: authorizationUri }, status: 301 });
};

const callbackScriptResponse = (status: string, token: string) => {
	return new Response(
		`
<html>
<head>
	<script>
		const receiveMessage = (message) => {
			window.opener.postMessage(
				'authorization:github:${status}:${JSON.stringify({ token })}',
				'*'
			);
			window.removeEventListener("message", receiveMessage, false);
		}
		window.addEventListener("message", receiveMessage, false);
		window.opener.postMessage("authorizing:github", "*");
	</script>
	<body>
		<p>Authorizing Decap...</p>
	</body>
</head>
</html>
`,
		{ headers: { 'Content-Type': 'text/html' } }
	);
};

const handleCallback = async (url: URL, env: Env) => {
	const provider = url.searchParams.get('provider');
	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	const error = url.searchParams.get('error');
	
	// Debug info
	const debugInfo = {
		provider,
		code: code ? 'present' : 'missing',
		state: state ? 'present' : 'missing',
		error,
		allParams: Object.fromEntries(url.searchParams)
	};
	
	if (error) {
		return new Response(`OAuth Error: ${error}\nDebug: ${JSON.stringify(debugInfo, null, 2)}`, { 
			status: 400,
			headers: { 'Content-Type': 'text/plain' }
		});
	}
	
	if (provider !== 'github') {
		return new Response(`Invalid provider: "${provider}"\nExpected: "github"\nDebug: ${JSON.stringify(debugInfo, null, 2)}`, { 
			status: 400,
			headers: { 'Content-Type': 'text/plain' }
		});
	}

	if (!code) {
		return new Response(`Missing authorization code\nDebug: ${JSON.stringify(debugInfo, null, 2)}`, { 
			status: 400,
			headers: { 'Content-Type': 'text/plain' }
		});
	}

	const oauth2 = createOAuth(env);
	const accessToken = await oauth2.getToken({
		code,
		redirect_uri: `https://${url.hostname}/callback?provider=github`,
	});
	return callbackScriptResponse('success', accessToken);
};

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);
		
		// Add CORS headers for all responses
		const corsHeaders = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
			'Access-Control-Allow-Headers': 'Content-Type',
		};

		// Handle preflight requests
		if (request.method === 'OPTIONS') {
			return new Response(null, { headers: corsHeaders });
		}

		try {
			let response;
			
			if (url.pathname === '/auth') {
				response = await handleAuth(url, env);
			} else if (url.pathname === '/callback') {
				response = await handleCallback(url, env);
			} else {
				// Debug endpoint to see what URLs are being accessed
				response = new Response(`Debug Info:
- URL: ${url.href}
- Path: ${url.pathname}
- Search params: ${url.search}
- All params: ${JSON.stringify(Object.fromEntries(url.searchParams), null, 2)}
Hello 👋`, {
					headers: { 'Content-Type': 'text/plain' }
				});
			}

			// Add CORS headers to the response
			Object.entries(corsHeaders).forEach(([key, value]) => {
				response.headers.set(key, value);
			});

			return response;
		} catch (error) {
			const errorMessage = error instanceof Error ? error.message : 'Unknown error';
			return new Response(`Error: ${errorMessage}`, { 
				status: 500,
				headers: corsHeaders
			});
		}
	},
};
