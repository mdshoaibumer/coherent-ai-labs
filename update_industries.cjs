const fs = require('fs');
const files = {
  'construction/ConstructionPage.tsx': 'construction_ai.png',
  'education/EducationPage.tsx': 'education_ai.png',
  'finance/FinancePage.tsx': 'finance_ai.png',
  'healthcare/HealthcarePage.tsx': 'healthcare_ai.png',
  'logistics/LogisticsPage.tsx': 'logistics_ai.png',
  'manufacturing/ManufacturingPage.tsx': 'manufacturing_ai.png',
  'retail/RetailPage.tsx': 'retail_ai.png'
};

for (const [file, img] of Object.entries(files)) {
  const path = 'e:/CoherentAILabs/src/app/industries/' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/(description: ".*?",)/, `$1\n  heroImage: "/assets/images/${img}",`);
  content = content.replace(/(eyebrow: ".*?",)/, `id: "${file.split('/')[0]}",\n  $1`);
  fs.writeFileSync(path, content);
}
