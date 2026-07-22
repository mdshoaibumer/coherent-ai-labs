import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Timeline } from '../../ui/Timeline';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';
import { Paragraph } from '../../ui/Paragraph';

export function ServicesTimeline() {
  const steps = [
    {
      title: 'Discovery & Architecture',
      description:
        'We embed with your team to audit existing data pipelines, identify high-ROI automation targets, and draft a rigorous technical architecture.',
      icon: Search,
      date: 'Week 1-2',
    },
    {
      title: 'Prototyping & Security Review',
      description:
        'Rapid development of a proof-of-concept against a sanitized dataset. We run initial penetration testing and establish VPC boundaries.',
      icon: PenTool,
      date: 'Week 3-4',
    },
    {
      title: 'Full-Scale Engineering',
      description:
        'Our engineers build the production systems. Custom model fine-tuning, RAG ingestion pipelines, and agent orchestration logic.',
      icon: Code2,
      date: 'Week 5-10',
    },
    {
      title: 'Deployment & Handoff',
      description:
        'Zero-downtime deployment to your preferred cloud environment. Comprehensive documentation and training for your internal engineering teams.',
      icon: Rocket,
      date: 'Week 11-12',
    },
  ];

  return (
    <SectionReveal delay={0.2}>
      <Section className="bg-muted py-24">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl px-6 text-center">
            <Heading level={2} className="mb-6">
              Our Engagement Methodology
            </Heading>
            <Paragraph className="text-muted-foreground text-xl">
              A battle-tested process designed to deliver enterprise AI infrastructure in 90 days or
              less.
            </Paragraph>
          </div>

          <Timeline items={steps} />
        </Container>
      </Section>
    </SectionReveal>
  );
}
