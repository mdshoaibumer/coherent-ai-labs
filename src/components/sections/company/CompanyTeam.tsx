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
      name: 'Dr. Elena Rostova',
      role: 'Chief Executive Officer',
      bg: 'Former VP of AI Research at Anthropic. Ph.D. in Distributed Systems from MIT.',
    },
    {
      name: 'Marcus Chen',
      role: 'Chief Technology Officer',
      bg: "Lead Architect behind Cloudflare's edge compute network. 15 years infrastructure experience.",
    },
    {
      name: 'Sarah Jenkins',
      role: 'Head of Security',
      bg: 'Ex-NSA Cryptographer. Architected the zero-retention framework.',
    },
    {
      name: 'David Alaba',
      role: 'VP of Engineering',
      bg: "Scaled DataDog's realtime ingestion pipeline to 10M+ events per second.",
    },
  ];

  return (
    <SectionReveal delay={0.2}>
      <div className="bg-muted py-24">
        <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
          <Heading level={2} className="mb-6">
            Leadership
          </Heading>
          <Paragraph className="text-muted-foreground text-xl">
            Built by engineers who have scaled systems to billions of users.
          </Paragraph>
        </div>

        <GridLayout columns={{ sm: 1, md: 2, lg: 4 }} gap="lg" className="pt-0">
          {team.map((member, idx) => (
            <GlassPanel key={idx} className="group flex flex-col p-8">
              <div className="border-border mb-6 flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border bg-white/5">
                <div className="text-foreground/20 text-2xl font-bold">{member.name.charAt(0)}</div>
              </div>
              <Heading level={4} className="mb-1">
                {member.name}
              </Heading>
              <div className="mb-4 text-sm font-medium text-[var(--color-primary)]">
                {member.role}
              </div>
              <Paragraph className="text-muted-foreground mb-6 flex-grow text-sm">
                {member.bg}
              </Paragraph>

              <div className="border-border mt-auto flex gap-3 border-t pt-4">
                <a
                  href="#"
                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground/70 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </GlassPanel>
          ))}
        </GridLayout>
      </div>
    </SectionReveal>
  );
}
