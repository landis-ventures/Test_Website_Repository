#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for GitHub Pages...');

// Set environment variable for GitHub Pages build
process.env.GITHUB_PAGES = 'true';

// Build the application with base URL for GitHub Pages
try {
  // First, temporarily update vite.config.ts for GitHub Pages
  let viteConfig = fs.readFileSync('vite.config.ts', 'utf8');
  const originalConfig = viteConfig;
  
  // Add base: "./" for GitHub Pages
  viteConfig = viteConfig.replace(
    'export default defineConfig({',
    'export default defineConfig({\n  base: "./",'
  );
  
  fs.writeFileSync('vite.config.ts', viteConfig);
  
  execSync('cd client && npm run build', { stdio: 'inherit' });
  
  // Restore original config
  fs.writeFileSync('vite.config.ts', originalConfig);
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Create docs directory if it doesn't exist
if (!fs.existsSync('docs')) {
  fs.mkdirSync('docs');
}

// Copy built files to docs directory
execSync('cp -r dist/public/* docs/', { stdio: 'inherit' });

// Create 404.html for client-side routing
fs.copyFileSync('docs/index.html', 'docs/404.html');

// Fix asset paths in HTML files for GitHub Pages
const fixAssetPaths = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace absolute asset paths with relative paths
  content = content.replace(/src="\/assets\//g, 'src="./assets/');
  content = content.replace(/href="\/assets\//g, 'href="./assets/');
  
  // Remove replit dev banner script (not needed for production)
  content = content.replace(/<script.*replit-dev-banner\.js.*<\/script>/g, '');
  
  fs.writeFileSync(filePath, content);
};

// Fix paths in both HTML files
fixAssetPaths('docs/index.html');
fixAssetPaths('docs/404.html');

console.log('✅ GitHub Pages build complete!');
console.log('📁 Files are ready in the docs/ folder');
console.log('🚀 Ready to deploy to GitHub Pages');