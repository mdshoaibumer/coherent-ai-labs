import fs from 'fs';
import path from 'path';

function fixLinks(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixLinks(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      if (content.includes('to=')) {
        // Simple replace for <Link to="...
        // Note: this will also match to={...} which is fine.
        const newContent = content.replace(/<Link([^>]*?)to=/g, '<Link$1href=');
        if (newContent !== content) {
          content = newContent;
          modified = true;
          console.log('Fixed link in', fullPath);
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

fixLinks('src/components');
fixLinks('src/app');
