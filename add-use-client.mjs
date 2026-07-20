import fs from 'fs';
import path from 'path';

function fixUseClient(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixUseClient(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let modified = false;
      if (!content.startsWith('"use client";') && !content.startsWith("'use client';")) {
        if (content.includes('useState') || content.includes('useEffect') || content.includes('useRef') || content.includes('motion/react') || content.includes('useContext')) {
          content = '"use client";\n' + content;
          modified = true;
          console.log('Added use client to', fullPath);
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

fixUseClient('src/components');
fixUseClient('src/hooks');
