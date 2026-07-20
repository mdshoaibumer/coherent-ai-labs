import React from 'react';
import { GridLayout } from '../../layouts/GridLayout';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { SectionReveal } from '../../animations/SectionReveal';
import { Linkedin, Github } from 'lucide-react';

export function CompanyTeam() {
  const team = [
    {
      name: "Dr. Elena Rostova",
      role: "Chief Executive Officer",
      bg: "Former VP of AI Research at Anthropic. Ph.D. in Distributed Systems from MIT."
    },
    {
      name: "Marcus Chen",
      role: "Chief Technology Officer",
      bg: "Lead Architect behind Cloudflare's edge compute network. 15 years infrastructure experience."
    },
    {
      name: "Sarah Jenkins",
      role: "Head of Security",
      bg: "Ex-NSA Cryptographer. Architected the zero-retention framework."
    },
    {
      name: "David Alaba",
      role: "VP of Engineering",
      bg: "Scaled DataDog's realtime ingestion pipeline to 10M+ events per second."
    }
  ];

  return (
    <SectionReveal delay={0.2}>
      <div className="py-24 bg-[#0a0a0a]">
        <div className="mb-16 text-center max-w-3xl mx-auto px-6">
          <Heading level={2} className="mb-6">Leadership</Heading>
          <Paragraph className="text-xl text-[#888]">
            Built by engineers who have scaled systems to billions of users.
          </Paragraph>
        </div>

        <GridLayout columns={{ sm: 1, md: 2, lg: 4 }} gap="lg" className="pt-0">
          {team.map((member, idx) => (
            <GlassPanel key={idx} className="p-8 flex flex-col group">
              <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-2xl font-bold text-white/20">{member.name.charAt(0)}</div>
              </div>
              <Heading level={4} className="mb-1">{member.name}</Heading>
              <div className="text-[var(--color-primary)] text-sm font-medium mb-4">{member.role}</div>
              <Paragraph className="text-sm text-[#888] flex-grow mb-6">{member.bg}</Paragraph>
              
              <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                <a href="#" className="text-[#666] hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="#" className="text-[#666] hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
              </div>
            </GlassPanel>
          ))}
        </GridLayout>
      </div>
    </SectionReveal>
  );
}
