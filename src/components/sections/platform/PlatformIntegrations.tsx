'use client';
import React, { useState } from 'react';
import { m } from 'motion/react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { Reveal, RevealStagger, RevealItem } from '../../animations/Reveal';
import { AmbientGlow } from '../../animations/AmbientGlow';
import { cn } from '../../../lib/utils';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface Integration {
  name: string;
  category: string;
}

const INTEGRATIONS: Integration[] = [
  { name: 'Microsoft 365', category: 'Productivity' },
  { name: 'Google Workspace', category: 'Productivity' },
  { name: 'Slack', category: 'Communication' },
  { name: 'WhatsApp', category: 'Communication' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'SAP', category: 'Enterprise' },
  { name: 'Oracle', category: 'Enterprise' },
  { name: 'GitHub', category: 'Developer' },
  { name: 'GitLab', category: 'Developer' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Azure', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Jira', category: 'Project' },
  { name: 'Confluence', category: 'Knowledge' },
  { name: 'Notion', category: 'Knowledge' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'Twilio', category: 'Communication' },
  { name: 'Datadog', category: 'Monitoring' },
  { name: 'Snowflake', category: 'Data' },
];

const CATEGORIES = [
  'All',
  'Cloud',
  'Enterprise',
  'Productivity',
  'Communication',
  'CRM',
  'Developer',
  'Data',
];

export function PlatformIntegrations() {
  const [activeCategory, setActiveCategory] = useState('All');
  const prefersReducedMotion = useReducedMotion();

  const filtered =
    activeCategory === 'All'
      ? INTEGRATIONS
      : INTEGRATIONS.filter((i) => i.category === activeCategory);

  return (
    <Section
      padding="default"
      backgroundElement={<AmbientGlow position="bottom-center" size="lg" intensity={0.02} />}
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Enterprise Integrations
            </span>
            <Heading level={2}>Connects to Everything You Already Use</Heading>
            <Text size="lg">
              Native integrations with 50+ enterprise platforms. Custom connectors for proprietary
              systems. API-first architecture for unlimited extensibility.
            </Text>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal variant="fade" delay={0.1}>
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'focus-visible:ring-ring rounded-lg border px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 outline-none focus-visible:ring-2',
                  activeCategory === cat
                    ? 'bg-foreground text-background border-white'
                    : 'bg-accent text-muted-foreground border-border hover:bg-accent hover:text-foreground',
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Integration grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((integration, i) => (
            <m.div
              key={integration.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="group bg-card border-border hover:border-border-hover hover:bg-accent rounded-xl border p-5 text-center transition-all duration-300"
            >
              {/* Icon placeholder — first letter */}
              <div className="bg-accent border-border text-muted-foreground/70 group-hover:text-foreground group-hover:border-border-hover mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-bold transition-all duration-300">
                {integration.name.charAt(0)}
              </div>
              <span className="text-muted-foreground group-hover:text-foreground block text-xs font-medium transition-colors">
                {integration.name}
              </span>
              <span className="text-muted-foreground/50 mt-1 block font-mono text-[10px]">
                {integration.category}
              </span>
            </m.div>
          ))}
        </div>

        {/* Summary */}
        <Reveal variant="fade" delay={0.2}>
          <div className="mt-12 text-center">
            <Text size="sm" className="text-muted-foreground/60">
              50+ native integrations · Custom webhook support · REST & GraphQL APIs · Real-time
              event streaming
            </Text>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
