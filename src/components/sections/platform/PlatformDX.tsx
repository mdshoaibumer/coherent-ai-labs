import React from 'react';
import { SplitLayout } from '../../layouts/SplitLayout';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { Paragraph } from '../../ui/Paragraph';
import { Button } from '../../ui/Button';

export function PlatformDX() {
  const codeSnippet = `import { CoherentClient } from '@coherent/sdk';

const client = new CoherentClient({
  apiKey: process.env.COHERENT_API_KEY
});

// Initialize a multi-agent RAG workflow
const response = await client.agents.run({
  prompt: "Analyze Q3 financial reports",
  tools: ['semantic-search', 'sql-db'],
  modelFallback: ['gpt-4-turbo', 'claude-3-opus'],
  maxSteps: 5
});

console.log(response.output);`;

  return (
    <SectionReveal>
      <SplitLayout
        leftContent={
          <div className="w-full relative group">
             <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
             <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#111]">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="mx-auto text-xs text-[#888]">agent.ts</div>
                </div>
                <div className="p-6 overflow-x-auto">
                   <pre className="text-[#e0e0e0] leading-relaxed">
                     <code>{codeSnippet}</code>
                   </pre>
                </div>
             </div>
          </div>
        }
        rightContent={
          <div className="max-w-xl pl-0 lg:pl-12">
            <Heading level={2} className="mb-6">Built for Engineers.</Heading>
            <Paragraph className="text-xl text-[#888] mb-8">
              Stop fighting with fragmented Python scripts. Our type-safe SDKs, comprehensive REST APIs, and native CLI get out of your way so you can ship faster.
            </Paragraph>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 Native TypeScript & Python SDKs
              </li>
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 OpenAPI 3.1 Compliant REST API
              </li>
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 Infrastructure as Code (Terraform Provider)
              </li>
            </ul>
            <Button variant="outline">View Documentation</Button>
          </div>
        }
      />
    </SectionReveal>
  );
}
