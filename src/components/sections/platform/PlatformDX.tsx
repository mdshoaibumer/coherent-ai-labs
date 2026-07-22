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
          <div className="group relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="bg-muted border-border relative overflow-hidden rounded-xl border font-mono text-sm shadow-2xl">
              <div className="border-border flex items-center border-b bg-[#111] px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-muted-foreground mx-auto text-xs">agent.ts</div>
              </div>
              <div className="overflow-x-auto p-6">
                <pre className="text-foreground/90 leading-relaxed">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        }
        rightContent={
          <div className="max-w-xl pl-0 lg:pl-12">
            <Heading level={2} className="mb-6">
              Built for Engineers.
            </Heading>
            <Paragraph className="text-muted-foreground mb-8 text-xl">
              Stop fighting with fragmented Python scripts. Our type-safe SDKs, comprehensive REST
              APIs, and native CLI get out of your way so you can ship faster.
            </Paragraph>
            <ul className="mb-8 space-y-4">
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Native TypeScript & Python SDKs
              </li>
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                OpenAPI 3.1 Compliant REST API
              </li>
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
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
