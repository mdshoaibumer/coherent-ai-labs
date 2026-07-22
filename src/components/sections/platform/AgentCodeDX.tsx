import React from 'react';
import { SplitLayout } from '../../layouts/SplitLayout';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { Paragraph } from '../../ui/Paragraph';
import { Button } from '../../ui/Button';

export function AgentCodeDX() {
  const codeSnippet = `import { Agent, Tool } from '@coherent/sdk';

// 1. Define a strongly-typed tool
const sqlTool = new Tool({
  name: 'query_db',
  description: 'Executes Read-Only SQL against Postgres',
  schema: z.object({ query: z.string() }),
  execute: async ({ query }) => db.execute(query)
});

// 2. Initialize the Autonomous Agent
const analystAgent = new Agent({
  role: 'Financial Analyst',
  model: 'claude-3-opus',
  tools: [sqlTool],
  memory: true,
  maxReflectionSteps: 3
});

// 3. Execute
const result = await analystAgent.run(
  "What was our Q3 recurring revenue growth vs Q2?"
);`;

  return (
    <SectionReveal>
      <SplitLayout
        leftContent={
          <div className="max-w-xl pl-0 lg:pl-12">
            <Heading level={2} className="mb-6">
              Declare agents as code.
            </Heading>
            <Paragraph className="text-muted-foreground mb-8 text-xl">
              Forget clunky visual node editors. Complex workflows require version control, testing,
              and type safety. Build agents using the tools your engineering team already loves.
            </Paragraph>
            <ul className="mb-8 space-y-4">
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Zod schema validation for all tool inputs
              </li>
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Built-in tracing and step visualization
              </li>
              <li className="text-foreground/90 flex items-center">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Local sandbox testing environment
              </li>
            </ul>
            <Button variant="outline">View API Reference</Button>
          </div>
        }
        rightContent={
          <div className="group relative w-full">
            <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-primary)]/20 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
            <div className="bg-muted border-border relative overflow-hidden rounded-xl border font-mono text-sm shadow-2xl">
              <div className="border-border flex items-center border-b bg-[#111] px-4 py-3">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500/50" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                  <div className="h-3 w-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-muted-foreground mx-auto text-xs">analyst.ts</div>
              </div>
              <div className="overflow-x-auto p-6">
                <pre className="text-foreground/90 leading-relaxed">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        }
      />
    </SectionReveal>
  );
}
