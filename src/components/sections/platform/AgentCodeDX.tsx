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
            <Heading level={2} className="mb-6">Declare agents as code.</Heading>
            <Paragraph className="text-xl text-[#888] mb-8">
              Forget clunky visual node editors. Complex workflows require version control, testing, and type safety. Build agents using the tools your engineering team already loves.
            </Paragraph>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 Zod schema validation for all tool inputs
              </li>
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 Built-in tracing and step visualization
              </li>
              <li className="flex items-center text-[#e0e0e0]">
                 <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mr-3" />
                 Local sandbox testing environment
              </li>
            </ul>
            <Button variant="outline">View API Reference</Button>
          </div>
        }
        rightContent={
          <div className="w-full relative group">
             <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-primary)]/20 to-transparent blur-xl transition-opacity opacity-0 group-hover:opacity-100" />
             <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden font-mono text-sm shadow-2xl">
                <div className="flex items-center px-4 py-3 border-b border-white/10 bg-[#111]">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="mx-auto text-xs text-[#888]">analyst.ts</div>
                </div>
                <div className="p-6 overflow-x-auto">
                   <pre className="text-[#e0e0e0] leading-relaxed">
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
