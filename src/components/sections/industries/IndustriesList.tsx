import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { IndustryCard } from '../../ui/IndustryCard';
import { SectionReveal } from '../../animations/SectionReveal';
import { Building2, HeartPulse, ShoppingCart, Shield } from 'lucide-react';

export function IndustriesList() {
  const industries = [
    {
      title: 'Financial Services',
      icon: Building2,
      description:
        'From algorithmic trading to fraud detection. Build zero-retention compliance engines that process sensitive data entirely within your VPC.',
      stats: [
        { label: 'Latency', value: '<50ms' },
        { label: 'Compliance', value: 'SOC2 Type II' },
      ],
    },
    {
      title: 'Healthcare',
      icon: HeartPulse,
      description:
        'HIPAA-compliant patient data pipelines. We deploy autonomous diagnostic assistance workflows that securely integrate with Epic and Cerner.',
      stats: [
        { label: 'Security', value: 'HIPAA' },
        { label: 'Integration', value: 'HL7/FHIR' },
      ],
    },
    {
      title: 'Retail & E-Commerce',
      icon: ShoppingCart,
      description:
        'Predictive inventory management and hyper-personalized customer recommendation agents capable of ingesting millions of realtime events.',
      stats: [
        { label: 'Scale', value: '10B+ events/mo' },
        { label: 'ROI', value: '3.5x conversion' },
      ],
    },
    {
      title: 'Defense & Gov',
      icon: Shield,
      description:
        'Air-gapped deployment for mission-critical infrastructure. Complete data sovereignty with zero external API calls.',
      stats: [
        { label: 'Deployment', value: 'Air-gapped' },
        { label: 'Clearance', value: 'FedRAMP' },
      ],
    },
  ];

  return (
    <SectionReveal delay={0.2}>
      <Section className="bg-muted py-24">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((industry, i) => (
              <IndustryCard
                key={i}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                stats={industry.stats}
              />
            ))}
          </div>
        </Container>
      </Section>
    </SectionReveal>
  );
}
