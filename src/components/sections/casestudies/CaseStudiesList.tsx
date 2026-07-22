import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { GlassPanel } from '../../ui/GlassPanel';
import { SectionReveal } from '../../animations/SectionReveal';
import { ArrowRight } from 'lucide-react';

export function CaseStudiesList() {
  const studies = [
    {
      company: 'GlobalFin',
      metric: '40%',
      metricDesc: 'Reduction in fraud resolution latency',
      description:
        'Deployed a secure, VPC-bound autonomous agent swarm to analyze millions of transactional anomalies in real time without human intervention.',
      tags: ['Financial Services', 'Agentic Swarm'],
    },
    {
      company: 'HealthSync',
      metric: '99.9%',
      metricDesc: 'Accuracy in medical coding automation',
      description:
        'Built a fine-tuned RAG pipeline over 50M+ unstructured clinical notes, ensuring strict HIPAA compliance and zero data retention.',
      tags: ['Healthcare', 'Enterprise RAG'],
    },
    {
      company: 'LogixPrime',
      metric: '2.5x',
      metricDesc: 'Increase in supply chain throughput',
      description:
        'Implemented a predictive routing model using Llama 3 that dynamically adjusts fleet logic based on live IoT sensor streams.',
      tags: ['Logistics', 'Edge ML'],
    },
  ];

  return (
    <SectionReveal delay={0.2}>
      <Section className="py-24">
        <Container>
          <div className="space-y-12">
            {studies.map((study, i) => (
              <GlassPanel
                key={i}
                className="group hover:bg-accent relative flex cursor-pointer flex-col items-center gap-12 overflow-hidden p-8 transition-colors md:flex-row md:p-12"
              >
                {/* Decorative glow */}
                <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-[var(--color-primary)]/5 to-transparent opacity-0 transition-opacity duration-1000 ease-in-out group-hover:translate-x-[100%] group-hover:opacity-100" />

                <div className="border-border flex flex-col justify-center border-b pb-8 text-center md:w-1/3 md:border-r md:border-b-0 md:pr-12 md:pb-0 md:text-left">
                  <div className="text-foreground mb-2 text-5xl font-bold">{study.metric}</div>
                  <div className="text-lg font-medium text-[var(--color-primary)]">
                    {study.metricDesc}
                  </div>
                </div>

                <div className="flex flex-col md:w-2/3">
                  <Heading level={3} className="mb-4">
                    {study.company}
                  </Heading>
                  <Paragraph className="text-muted-foreground mb-6 text-lg">
                    {study.description}
                  </Paragraph>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                    <div className="flex gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-foreground/70 border-border rounded-full border bg-white/5 px-3 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-foreground flex items-center text-sm font-semibold transition-colors group-hover:text-[var(--color-primary)]">
                      Read Full Study{' '}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </GlassPanel>
            ))}
          </div>
        </Container>
      </Section>
    </SectionReveal>
  );
}
