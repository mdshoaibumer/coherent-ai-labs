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
      <div className="mb-16 text-center max-w-3xl mx-auto px-6">
        <Heading level={2} className="mb-6">Deterministic execution for non-deterministic models.</Heading>
      </div>

      <BentoLayout>
        <GlassPanel className="md:col-span-3 md:row-span-2 p-8">
          <IconWrapper variant="active" className="mb-6">
            <Wrench className="w-6 h-6" />
          </IconWrapper>
          <Heading level={3} className="mb-4">Native Tool Calling</Heading>
          <Paragraph className="text-[#888]">
            Bind any REST API, GraphQL endpoint, or local TypeScript function directly to the agent's schema. The engine automatically handles argument validation, retries, and error propagation back to the LLM for self-correction.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="md:col-span-3 md:row-span-1 p-8">
          <IconWrapper variant="default" className="mb-4">
            <GitMerge className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Multi-Agent Swarms</Heading>
          <Paragraph className="text-sm text-[#888]">
            Wire together specialized agents (e.g., a Coder, a Reviewer, and a QA Tester) using a directed acyclic graph (DAG) routing engine.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="md:col-span-3 md:row-span-1 p-8">
          <IconWrapper variant="default" className="mb-4">
            <DatabaseZap className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Long-Term Memory</Heading>
          <Paragraph className="text-sm text-[#888]">
            Cross-session context retention powered by our managed semantic caching layer. Agents remember users and past interactions.
          </Paragraph>
        </GlassPanel>
      </BentoLayout>
    </SectionReveal>
  );
}
