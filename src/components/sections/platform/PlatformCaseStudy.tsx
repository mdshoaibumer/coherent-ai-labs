'use client';
import React from 'react';
import { m } from 'motion/react';
import { FileText, Cpu, Rocket, TrendingUp } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { GlassPanel } from '../../ui/GlassPanel';
import { Reveal, RevealStagger, RevealItem } from '../../animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../../animations/AmbientGlow';

const CASE_STUDY = {
  title: 'Enterprise Document Intelligence Pipeline',
  industry: 'Financial Services',
  challenge:
    'A Fortune 500 financial institution processing 50,000+ documents daily with 14-minute average manual processing time, 3.4% error rate, and growing compliance risk.',
  phases: [
    {
      icon: FileText,
      title: 'Problem Analysis',
      description:
        'Mapped 12 document types across 3 business units. Identified extraction rules, compliance requirements, and integration points.',
    },
    {
      icon: Cpu,
      title: 'Architecture Design',
      description:
        'Multi-agent system: Ingestion Agent, Classification Agent, Extraction Agent, Validation Agent, and Compliance Agent collaborating via shared memory.',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description:
        'Deployed within client VPC on AWS. Private LLM endpoints. Zero data egress. Rolling updates with canary deployment strategy.',
    },
    {
      icon: TrendingUp,
      title: 'Business Outcome',
      description:
        'Processing time reduced from 14 minutes to 8 seconds. Error rate dropped to 0.02%. Full audit trail for every decision.',
    },
  ],
  outcomes: [
    { value: '99.8%', label: 'Accuracy' },
    { value: '105x', label: 'Faster' },
    { value: '$4.2M', label: 'Annual Savings' },
    { value: '0', label: 'Data Breaches' },
  ],
};

export function PlatformCaseStudy() {
  return (
    <Section
      padding="default"
      backgroundElement={
        <>
          <NoiseTexture opacity={0.015} />
          <AmbientGlow position="top-left" size="lg" intensity={0.02} />
        </>
      }
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Representative Deployment
            </span>
            <Heading level={2}>From Challenge to Production in Weeks</Heading>
            <Text size="lg">
              See how the platform architecture translates into measurable business outcomes for
              enterprise clients.
            </Text>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <Reveal variant="slideRight">
              <GlassPanel variant="dark" className="mb-6 p-6 md:p-8">
                <div className="mb-2 flex items-center gap-3">
                  <span className="text-muted-foreground/60 bg-accent border-border rounded border px-2 py-1 font-mono text-[10px] tracking-widest uppercase">
                    {CASE_STUDY.industry}
                  </span>
                </div>
                <h3 className="font-display text-foreground mb-3 text-xl font-medium">
                  {CASE_STUDY.title}
                </h3>
                <Text size="sm" className="text-muted-foreground">
                  {CASE_STUDY.challenge}
                </Text>
              </GlassPanel>
            </Reveal>

            <RevealStagger stagger={0.12} className="space-y-4">
              {CASE_STUDY.phases.map((phase, i) => (
                <RevealItem key={phase.title}>
                  <div className="bg-accent border-border hover:border-border group flex items-start gap-5 rounded-xl border p-5 transition-colors">
                    <div className="bg-accent border-border group-hover:bg-accent flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors">
                      <phase.icon
                        className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors"
                        strokeWidth={1.5}
                      />
                    </div>
                    <div>
                      <div className="mb-1 flex items-center gap-3">
                        <span className="text-muted-foreground/60 font-mono text-[10px]">
                          Phase {String(i + 1).padStart(2, '0')}
                        </span>
                        <h4 className="font-display text-foreground text-base font-medium">
                          {phase.title}
                        </h4>
                      </div>
                      <Text
                        size="sm"
                        className="text-muted-foreground group-hover:text-muted-foreground transition-colors"
                      >
                        {phase.description}
                      </Text>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          {/* Outcomes panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Reveal variant="scaleUp" delay={0.2}>
                <GlassPanel variant="default" gradient className="p-8">
                  <h3 className="font-display text-muted-foreground/60 mb-8 font-mono text-sm tracking-widest uppercase">
                    Business Outcomes
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {CASE_STUDY.outcomes.map((outcome) => (
                      <div key={outcome.label} className="text-center">
                        <div className="font-display text-foreground mb-1 text-3xl font-bold tracking-tight">
                          {outcome.value}
                        </div>
                        <div className="text-muted-foreground/70 font-mono text-xs tracking-widest uppercase">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-border mt-8 border-t pt-6">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400/50" />
                      <span className="text-muted-foreground/60 font-mono text-xs tracking-widest uppercase">
                        Production Status
                      </span>
                    </div>
                    <Text size="sm" className="text-muted-foreground">
                      Running in production for 18+ months with zero incidents and continuous
                      improvement via automated model retraining.
                    </Text>
                  </div>
                </GlassPanel>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
