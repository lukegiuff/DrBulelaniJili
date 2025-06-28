# CloudFlare Pages Deployment Guide

This Next.js application is configured for deployment to CloudFlare Pages with full-stack capabilities.

## Prerequisites

1. A CloudFlare account
2. Wrangler CLI (already installed as dev dependency)
3. Your project connected to a Git repository

## Deployment Methods

### Method 1: Git Integration (Recommended)

1. Push your code to GitHub/GitLab
2. Connect your repository to CloudFlare Pages:
   - Go to CloudFlare Dashboard → Pages
   - Click "Connect to Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run pages:build`
     - **Build output directory**: `out`
     - **Root directory**: `/` (or your project folder)

### Method 2: Direct Upload via Wrangler

1. **Login to CloudFlare**:
   ```bash
   npx wrangler login
   ```

2. **Build for CloudFlare Pages**:
   ```bash
   npm run pages:build
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## Development

- **Local development**: `npm run dev`
- **Preview CloudFlare build**: `npm run preview`
- **Build for production**: `npm run pages:build`

## Configuration Files

- `wrangler.toml` - CloudFlare configuration
- `public/_headers` - CloudFlare Pages headers and caching
- `next.config.ts` - Next.js configuration optimized for CloudFlare

## Environment Variables

Set environment variables in CloudFlare Pages dashboard:
- Go to your Pages project → Settings → Environment variables
- Add your production environment variables

## Notes

- This setup uses `@cloudflare/next-on-pages` for full Next.js compatibility
- Static files are optimized with proper caching headers
- The build process creates a CloudFlare-compatible output

## Troubleshooting

- Ensure your Next.js app uses supported features for CloudFlare Workers
- Check CloudFlare Pages build logs for any deployment issues
- Verify that all environment variables are properly set 