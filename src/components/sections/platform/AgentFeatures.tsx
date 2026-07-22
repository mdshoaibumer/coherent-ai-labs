import React from 'react';
import { BentoLayout } from '../../layouts/BentoLayout';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { SectionReveal } from '../../animations/SectionReveal';
import { IconWrapper } from '../../ui/IconWrapper';
import { Wrench, DatabaseZap, ShieldAlert, GitMerge } from 'lucide-react';

export function AgentFeatures() {
  return (
    <SectionReveal>
      <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
        <Heading level={2} className="mb-6">
          Deterministic execution for non-deterministic models.
        </Heading>
      </div>

      <BentoLayout>
        <GlassPanel className="p-8 md:col-span-3 md:row-span-2">
          <IconWrapper variant="active" className="mb-6">
            <Wrench className="h-6 w-6" />
          </IconWrapper>
          <Heading level={3} className="mb-4">
            Native Tool Calling
          </Heading>
          <Paragraph className="text-muted-foreground">
            Bind any REST API, GraphQL endpoint, or local TypeScript function directly to the
            agent's schema. The engine automatically handles argument validation, retries, and error
            propagation back to the LLM for self-correction.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="p-8 md:col-span-3 md:row-span-1">
          <IconWrapper variant="default" className="mb-4">
            <GitMerge className="h-6 w-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">
            Multi-Agent Swarms
          </Heading>
          <Paragraph className="text-muted-foreground text-sm">
            Wire together specialized agents (e.g., a Coder, a Reviewer, and a QA Tester) using a
            directed acyclic graph (DAG) routing engine.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="p-8 md:col-span-3 md:row-span-1">
          <IconWrapper variant="default" className="mb-4">
            <DatabaseZap className="h-6 w-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">
            Long-Term Memory
          </Heading>
          <Paragraph className="text-muted-foreground text-sm">
            Cross-session context retention powered by our managed semantic caching layer. Agents
            remember users and past interactions.
          </Paragraph>
        </GlassPanel>
      </BentoLayout>
    </SectionReveal>
  );
}
