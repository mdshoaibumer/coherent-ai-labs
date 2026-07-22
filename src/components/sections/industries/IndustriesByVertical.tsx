'use client';
import React from 'react';
import {
  HeartPulse,
  HardHat,
  ShoppingCart,
  Factory,
  Truck,
  Building2,
  GraduationCap,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { GlassPanel } from '../../ui/GlassPanel';
import { IconWrapper } from '../../ui/IconWrapper';
import { Reveal, RevealStagger, RevealItem } from '../../animations/Reveal';
import { AmbientGlow } from '../../animations/AmbientGlow';

interface IndustryLink {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  compliance: string;
}

const INDUSTRIES: IndustryLink[] = [
  {
    title: 'Healthcare',
    description:
      'HIPAA-compliant clinical AI, patient engagement, and medical document intelligence.',
    icon: HeartPulse,
    href: '/industries/healthcare',
    compliance: 'HIPAA · HITECH',
  },
  {
    title: 'Construction & Real Estate',
    description: 'Project intelligence, site monitoring, document AI, and predictive maintenance.',
    icon: HardHat,
    href: '/industries/construction',
    compliance: 'OSHA · AIA',
  },
  {
    title: 'Retail & E-Commerce',
    description:
      'Recommendation engines, inventory forecasting, dynamic pricing, and customer analytics.',
    icon: ShoppingCart,
    href: '/industries/retail',
    compliance: 'PCI DSS · GDPR',
  },
  {
    title: 'Manufacturing',
    description:
      'Predictive maintenance, computer vision QC, production optimization, and IoT analytics.',
    icon: Factory,
    href: '/industries/manufacturing',
    compliance: 'ISO 9001 · IEC 62443',
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Route optimization, fleet intelligence, warehouse AI, and shipment tracking.',
    icon: Truck,
    href: '/industries/logistics',
    compliance: 'C-TPAT · AEO',
  },
  {
    title: 'Finance & Insurance',
    description: 'Fraud detection, claims automation, risk assessment, and compliance monitoring.',
    icon: Building2,
    href: '/industries/finance',
    compliance: 'PCI DSS · SOX · AML',
  },
  {
    title: 'Education',
    description:
      'Adaptive learning, student analytics, automated assessment, and campus operations.',
    icon: GraduationCap,
    href: '/industries/education',
    compliance: 'FERPA · COPPA',
  },
];

export function IndustriesByVertical() {
  return (
    <Section
      padding="default"
      backgroundElement={<AmbientGlow position="top-center" size="xl" intensity={0.02} />}
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Industry Verticals
            </span>
            <Heading level={2}>Deep Domain Expertise</Heading>
            <Text size="lg">
              Seven industries. Decades of combined engineering experience. Every solution respects
              your regulatory environment and operational reality.
            </Text>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.07}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.href}>
              <Link
                href={industry.href}
                className="group focus-visible:ring-ring block h-full rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
              >
                <GlassPanel
                  variant="dark"
                  className="hover:border-border-hover relative flex h-full flex-col overflow-hidden p-6 transition-all duration-500"
                >
                  <IconWrapper
                    variant="default"
                    size="sm"
                    className="group-hover:border-border-hover group-hover:bg-accent mb-5 transition-all duration-500"
                  >
                    <industry.icon
                      className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>

                  <h3 className="font-display text-foreground mb-2 text-lg font-medium tracking-tight">
                    {industry.title}
                  </h3>
                  <Text
                    size="sm"
                    className="text-muted-foreground group-hover:text-muted-foreground flex-grow transition-colors"
                  >
                    {industry.description}
                  </Text>

                  <div className="border-border mt-5 flex items-center justify-between border-t pt-4">
                    <span className="text-muted-foreground/60 font-mono text-[9px] tracking-widest uppercase">
                      {industry.compliance}
                    </span>
                    <div className="text-muted-foreground/70 group-hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </GlassPanel>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
