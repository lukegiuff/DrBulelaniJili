export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');
  const error = url.searchParams.get('error');

  if (error) {
    return new Response(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Authentication Error</title>
        <style>
          body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
          .error { color: #d32f2f; }
        </style>
      </head>
      <body>
        <h2 class="error">Authentication Error</h2>
        <p>Error: ${error}</p>
        <p>Description: ${url.searchParams.get('error_description') || 'Unknown error'}</p>
        <script>
          setTimeout(() => {
            if (window.opener) {
              window.close();
            } else {
              window.location.href = '/admin';
            }
          }, 3000);
        </script>
      </body>
      </html>
    `, {
      headers: { 'Content-Type': 'text/html' }
    });
  }

  if (!code) {
    return new Response('Missing authorization code', { status: 400 });
  }

  // Return success page that sends code to parent window
  return new Response(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Authentication Successful</title>
      <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
        .success { color: #2e7d32; }
        .spinner { border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 40px; height: 40px; animation: spin 2s linear infinite; margin: 20px auto; }
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      </style>
    </head>
    <body>
      <h2 class="success">Authentication Successful</h2>
      <div class="spinner"></div>
      <p>Completing login...</p>
      <script>
        // Send authorization code to parent window (CMS)
        if (window.opener) {
          window.opener.postMessage({
            type: 'authorization_grant',
            code: '${code}',
            state: '${state || ''}',
            provider: 'github'
          }, 'https://bulelanijili.com');
          window.close();
        } else {
          // Fallback: redirect to admin
          window.location.href = '/admin';
        }
      </script>
    </body>
    </html>
  `, {
    headers: { 'Content-Type': 'text/html' }
  });
} 