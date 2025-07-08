# Deployment Guide

## Automatic Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### How It Works

1. **Trigger**: When you push to the `main` branch, GitHub Actions automatically triggers
2. **Build**: The workflow installs dependencies and builds the project using `npm run build`
3. **Deploy**: The built `dist/` folder is deployed to GitHub Pages
4. **URL**: The app becomes available at `https://yourusername.github.io/Radiology-Inventory-System/`

### GitHub Pages Configuration

The repository includes:
- **Workflow**: `.github/workflows/static.yml` - Handles build and deployment
- **Base Path**: Configured in `vite.config.ts` for proper GitHub Pages routing
- **Assets**: Favicon and CSS files are properly included

### Environment Variables

For the AI-powered search to work, you'll need to set up the Gemini API key:

1. **For Local Development**:
   - Copy `.env.local.example` to `.env.local`
   - Add your Gemini API key: `GEMINI_API_KEY=your_key_here`

2. **For Production (GitHub Pages)**:
   - The app will work without the API key, but AI search features will be disabled
   - To enable AI features in production, you would need to implement a backend API

### Manual Deployment Options

#### Option 1: Build and Deploy to Any Static Host

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
# Examples: Netlify, Vercel, AWS S3, etc.
```

#### Option 2: GitHub Pages with Different Base Path

If deploying to a different repository or subdirectory:

1. Update `vite.config.ts`:
   ```typescript
   base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
   ```

2. Update the workflow in `.github/workflows/static.yml` if needed

### Troubleshooting

**Build Fails**: 
- Check that Node.js 18+ is being used
- Verify all dependencies are properly installed
- Review build logs for specific errors

**Assets Not Loading**:
- Ensure the base path in `vite.config.ts` matches your deployment path
- Check that favicon.svg and index.css are in the `public/` folder

**AI Features Not Working**:
- Verify the Gemini API key is set correctly
- Check browser console for API-related errors
- Note: API keys should not be exposed in client-side code for production

### Performance Optimization

The current build creates a large JavaScript bundle. To optimize:

1. **Code Splitting**: Implement dynamic imports for components
2. **Tree Shaking**: Remove unused dependencies
3. **Compression**: Enable gzip compression on your hosting provider

### Security Considerations

- Never commit API keys to the repository
- Use environment variables for sensitive configuration
- Consider implementing a backend API for production Gemini API calls