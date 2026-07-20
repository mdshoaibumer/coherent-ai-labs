import React from 'react';
import { BentoLayout } from '../../layouts/BentoLayout';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { SectionReveal } from '../../animations/SectionReveal';
import { IconWrapper } from '../../ui/IconWrapper';
import { Shield, Zap, Users, Target } from 'lucide-react';

export function CompanyValues() {
  return (
    <SectionReveal delay={0.2}>
      <div className="mb-16 text-center max-w-3xl mx-auto px-6">
        <Heading level={2} className="mb-6">Engineering Principles</Heading>
      </div>

      <BentoLayout>
        <GlassPanel className="md:col-span-3 md:row-span-2 p-8">
          <IconWrapper variant="active" className="mb-6">
            <Shield className="w-6 h-6" />
          </IconWrapper>
          <Heading level={3} className="mb-4">Security by Design</Heading>
          <Paragraph className="text-[#888]">
            We build for the most highly regulated industries on earth. Zero data retention policies, complete VPC isolation, and rigorous SOC2 compliance aren't afterthoughts; they are the foundation of our architecture.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="md:col-span-3 md:row-span-1 p-8">
          <IconWrapper variant="default" className="mb-4">
            <Zap className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Performance Absolute</Heading>
          <Paragraph className="text-sm text-[#888]">
            Every millisecond matters. We optimize inference routing, utilize semantic caching, and write performant core services to guarantee sub-second LLM responses.
          </Paragraph>
        </GlassPanel>

        <GlassPanel className="md:col-span-3 md:row-span-1 p-8">
          <IconWrapper variant="default" className="mb-4">
            <Target className="w-6 h-6" />
          </IconWrapper>
          <Heading level={4} className="mb-2">Deterministic Outcomes</Heading>
          <Paragraph className="text-sm text-[#888]">
            We tame non-deterministic models through rigorous JSON schema enforcement, multi-agent reflection loops, and strict type safety across the stack.
          </Paragraph>
        </GlassPanel>
      </BentoLayout>
    </SectionReveal>
  );
}
