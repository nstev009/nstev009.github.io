# Deployment Guide

## GitHub Pages Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Copy the `dist` folder contents** to your `nstev009.github.io` repository

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Update portfolio to React version"
   git push origin main
   ```

## Alternative: Using GitHub Actions

Create `.github/workflows/deploy.yml` in your `nstev009.github.io` repo:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Local Development

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run deploy` - Build and preview

## Notes

- The base path is set to `./` for GitHub Pages compatibility
- All images are now in the `public/images/` directory
- The React version maintains all the original functionality while being more maintainable
