import React from 'react';
import { BentoLayout } from '../../layouts/BentoLayout';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { GlassPanel } from '../../ui/GlassPanel';
import { Brain, Network, Database, Activity, GitBranch } from 'lucide-react';
import { IconWrapper } from '../../ui/IconWrapper';
import { Paragraph } from '../../ui/Paragraph';

export function PlatformCapabilities() {
  return (
    <SectionReveal>
      <div className="mb-16 text-center max-w-3xl mx-auto px-6">
        <Heading level={2} className="mb-6">Everything you need to build AI-native software.</Heading>
        <Paragraph className="text-xl text-[#888]">
          A unified set of primitives designed for complex reasoning, data retrieval, and enterprise scale.
        </Paragraph>
      </div>
      
      <BentoLayout>
        {/* Agentic Orchestration - Large */}
        <GlassPanel className="md:col-span-4 md:row-span-2 p-8 flex flex-col group relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
            <Brain className="w-32 h-32" />
          </div>
          <IconWrapper variant="active" className="mb-6">
            <Network className="w-6 h-6" />
          </IconWrapper>
          <Heading level={3} className="mb-4">Agentic Orchestration</Heading>
          <Paragraph className="max-w-md text-[#888]">
            Deploy multi-agent workflows with built-in reflection, tool calling, and dynamic task delegation. Manage state across thousands of concurrent sessions natively.
          </Paragraph>
        </GlassPanel>

        {/* Enterprise RAG - Medium */}
        <GlassPanel className="md:col-span-2 md:row-span-2 p-8 flex flex-col group">
          <IconWrapper variant="default" className="mb-6">
            <Database className="w-6 h-6" />
          </IconWrapper>
          <Heading level={3} className="mb-4">Enterprise RAG</Heading>
          <Paragraph className="text-[#888]">
            Built-in semantic caching, hybrid search, and automated chunking pipelines that connect directly to your data warehouse.
          </Paragraph>
        </GlassPanel>

        {/* Model Routing - Medium */}
        <GlassPanel className="md:col-span-2 md:row-span-1 p-8 flex flex-col group">
          <IconWrapper variant="default" className="mb-4">
            <GitBranch className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Model Routing</Heading>
          <Paragraph className="text-sm text-[#888]">
            Zero-downtime fallback routing across GPT-4, Claude 3, and Llama instances.
          </Paragraph>
        </GlassPanel>

        {/* Observability - Small */}
        <GlassPanel className="md:col-span-2 md:row-span-1 p-8 flex flex-col group">
          <IconWrapper variant="default" className="mb-4">
            <Activity className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Observability</Heading>
          <Paragraph className="text-sm text-[#888]">
            Token-level tracing and cost attribution across all deployments.
          </Paragraph>
        </GlassPanel>
        
        {/* Prompt Registry - Small */}
        <GlassPanel className="md:col-span-2 md:row-span-1 p-8 flex flex-col group">
          <IconWrapper variant="default" className="mb-4">
            <Brain className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Prompt Registry</Heading>
          <Paragraph className="text-sm text-[#888]">
            Git-like version control for your system prompts and evaluations.
          </Paragraph>
        </GlassPanel>
      </BentoLayout>
    </SectionReveal>
  );
}
