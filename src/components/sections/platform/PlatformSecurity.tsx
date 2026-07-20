import React from 'react';
import { GridLayout } from '../../layouts/GridLayout';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { SolutionCard } from '../../ui/SolutionCard';
import { ShieldCheck, Lock, Users } from 'lucide-react';
import { Paragraph } from '../../ui/Paragraph';

export function PlatformSecurity() {
  return (
    <SectionReveal delay={0.1}>
      <div className="mb-16 text-center max-w-3xl mx-auto px-6">
        <Heading level={2} className="mb-6">Security is not an afterthought.</Heading>
        <Paragraph className="text-xl text-[#888]">
          Enterprise-grade compliance, encryption, and governance built natively into the orchestration layer.
        </Paragraph>
      </div>
      
      <GridLayout columns={{ sm: 1, md: 2, lg: 3 }} gap="lg">
        <SolutionCard
          title="SOC2 & HIPAA Compliant"
          description="Audited annually to meet the highest standards of data security, availability, and processing integrity."
          icon={ShieldCheck}
          features={[
            "Continuous compliance monitoring",
            "Annual penetration testing",
            "Business Associate Agreements (BAA)"
          ]}
        />
        <SolutionCard
          title="Zero Data Retention"
          description="Your prompts and completions are never stored on our servers or used to train foundation models."
          icon={Lock}
          features={[
            "Stateless API endpoints",
            "Opt-out by default for all telemetry",
            "End-to-end TLS 1.3 encryption"
          ]}
        />
        <SolutionCard
          title="Granular RBAC"
          description="Control access to models, prompts, and analytics at the team, project, or individual user level."
          icon={Users}
          features={[
            "SSO via SAML and OIDC",
            "Audit logging for every API request",
            "Custom permission boundaries"
          ]}
        />
      </GridLayout>
    </SectionReveal>
  );
}
