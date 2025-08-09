import { exec } from 'child_process';
import { promisify } from 'util';
import fs from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function buildForGitHubPages() {
  console.log('Building for GitHub Pages...');
  
  try {
    // Build the project
    await execAsync('npm run build:static');
    
    // Create docs directory for GitHub Pages
    await fs.mkdir('docs', { recursive: true });
    
    // Copy built files to docs directory
    await execAsync('cp -r dist/public/* docs/');
    
    // Create 404.html for client-side routing
    const indexContent = await fs.readFile('docs/index.html', 'utf8');
    await fs.writeFile('docs/404.html', indexContent);
    
    console.log('GitHub Pages build complete! Files are in the docs/ directory.');
    console.log('Configure GitHub Pages to serve from the docs/ folder.');
    
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

buildForGitHubPages();