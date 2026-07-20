import fs from 'fs';
import path from 'path';

const pagesDir = 'src/pages';
const appDir = 'src/app';

const routeMap = {
  'Platform.tsx': 'platform/page.tsx',
  'Solutions.tsx': 'solutions/page.tsx',
  'Services.tsx': 'services/page.tsx',
  'Contact.tsx': 'contact/page.tsx',
  'Blog.tsx': 'blog/page.tsx',
  'AgenticOrchestration.tsx': 'platform/agents/page.tsx',
  'Company.tsx': 'company/page.tsx',
  'Industries.tsx': 'industries/page.tsx',
  'CaseStudies.tsx': 'case-studies/page.tsx',
};

for (const [filename, routePath] of Object.entries(routeMap)) {
  const filePath = path.join(pagesDir, filename);
  if (!fs.existsSync(filePath)) continue;
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Extract title and description
  const titleMatch = content.match(/title:\s*"([^"]+)"/);
  const descMatch = content.match(/description:\s*"([^"]+)"/);
  
  const title = titleMatch ? titleMatch[1] : '';
  const description = descMatch ? descMatch[1] : '';

  // Remove generateSEO and useEffect imports and usage
  content = content.replace(/import\s+\{\s*useEffect\s*\}\s*from\s*"react";\n?/g, '');
  content = content.replace(/import\s+\{\s*generateSEO\s*\}\s*from\s*"\.\.\/lib\/seo";\n?/g, '');
  content = content.replace(/useEffect\(\(\)\s*=>\s*\{[\s\S]*?\},\s*\[\]\);\n?/g, '');
  
  // Fix imports relative to app dir
  const depth = routePath.split('/').length;
  const up = '../'.repeat(depth);
  content = content.replace(/\.\.\/components/g, up + 'components');
  content = content.replace(/\.\.\/lib/g, up + 'lib');
  
  // Add metadata
  const metadataStr = `import type { Metadata } from "next";\n\nexport const metadata: Metadata = {\n  title: "${title}",\n  description: "${description}"\n};\n\n`;
  content = metadataStr + content;
  
  // Replace export function with export default function
  content = content.replace(/export function (\w+)/, 'export default function $1');
  
  const destPath = path.join(appDir, routePath);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  fs.writeFileSync(destPath, content);
}
console.log("Migration complete.");
