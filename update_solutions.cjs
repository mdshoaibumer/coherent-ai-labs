const fs = require('fs');
const files = {
  'enterprise-software/EnterpriseSoftwarePage.tsx': 'enterprise_software_ai.png',
  'web-applications/WebApplicationsPage.tsx': 'web_applications_ai.png',
  'workflow-automation/WorkflowAutomationPage.tsx': 'workflow_automation_ai.png'
};

for (const [file, img] of Object.entries(files)) {
  const path = 'e:/CoherentAILabs/src/app/solutions/' + file;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/(description: ".*?",)/, `$1\n  heroImage: "/assets/images/${img}",`);
  content = content.replace(/(eyebrow: ".*?",)/, `id: "${file.split('/')[0]}",\n  $1`);
  fs.writeFileSync(path, content);
}
