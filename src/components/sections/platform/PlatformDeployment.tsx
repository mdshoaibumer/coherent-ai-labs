import React from 'react';
import { SplitLayout } from '../../layouts/SplitLayout';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { Accordion } from '../../ui/Accordion';
import { Paragraph } from '../../ui/Paragraph';

export function PlatformDeployment() {
  const deploymentOptions = [
    {
      id: "cloud",
      title: "Cloud Hosted (SaaS)",
      content: "The fastest way to get started. Fully managed, globally distributed, and instantly scalable with 99.99% uptime SLAs."
    },
    {
      id: "vpc",
      title: "Private VPC",
      content: "Deploy the entire Coherent AI Labs orchestration engine into your own AWS, GCP, or Azure VPC. You maintain complete control over the network boundary."
    },
    {
      id: "airgap",
      title: "Air-Gapped / On-Premise",
      content: "For highly regulated environments. Run our models and orchestration layer completely disconnected from the public internet."
    }
  ];

  return (
    <SectionReveal>
      <SplitLayout
        leftContent={
          <div className="max-w-xl">
            <Heading level={2} className="mb-6">Deploy where your data lives.</Heading>
            <Paragraph className="text-xl text-[#888] mb-12">
              Don't move your data to the AI. Move the AI to your data. Coherent AI Labs supports flexible deployment topologies to match your security posture.
            </Paragraph>
            <Accordion items={deploymentOptions} />
          </div>
        }
        rightContent={
          <div className="w-full h-full min-h-[400px] flex items-center justify-center bg-[#0a0a0a] rounded-2xl border border-white/10 relative overflow-hidden">
             {/* Decorative abstract network nodes */}
             <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent pointer-events-none" />
             <div className="relative z-10 w-64 h-64 border border-dashed border-[var(--color-primary)] rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                   <div className="w-32 h-32 bg-[var(--color-primary)] rounded-full blur-[40px] opacity-20" />
                </div>
             </div>
          </div>
        }
      />
    </SectionReveal>
  );
}
