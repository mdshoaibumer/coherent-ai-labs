'use client';
import React, { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Cloud, Server, Lock, Globe } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { GlassPanel } from '../../ui/GlassPanel';
import { Reveal } from '../../animations/Reveal';
import { AmbientGlow } from '../../animations/AmbientGlow';
import { cn } from '../../../lib/utils';
import { EASE_OUT_EXPO } from '../../../lib/motion';

const DEPLOYMENT_OPTIONS = [
  {
    id: 'cloud',
    title: 'Cloud Managed',
    icon: Cloud,
    description: 'Fully managed by Coherent AI Labs. Zero infrastructure overhead.',
    features: ['Auto-scaling', 'Multi-region', '99.99% SLA', 'Managed updates', '24/7 monitoring'],
    bestFor: 'Teams that want to ship fast without managing infrastructure.',
  },
  {
    id: 'hybrid',
    title: 'Hybrid',
    icon: Globe,
    description: 'Control plane in our cloud, data plane in your VPC.',
    features: [
      'Data sovereignty',
      'Custom networking',
      'Compliance control',
      'Managed orchestration',
      'Shared responsibility',
    ],
    bestFor: 'Enterprises needing data residency with managed AI orchestration.',
  },
  {
    id: 'private',
    title: 'On-Premise / Private AI',
    icon: Server,
    description: 'Entire platform deployed within your infrastructure.',
    features: [
      'Air-gapped option',
      'Full data control',
      'Custom SLAs',
      'Self-hosted models',
      'Enterprise support',
    ],
    bestFor: 'Regulated industries requiring complete infrastructure ownership.',
  },
];

export function PlatformDeployment() {
  const [activeOption, setActiveOption] = useState('cloud');
  const active = DEPLOYMENT_OPTIONS.find((d) => d.id === activeOption)!;

  return (
    <Section
      padding="default"
      backgroundElement={<AmbientGlow position="center" size="lg" intensity={0.02} />}
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Deployment Options
            </span>
            <Heading level={2}>Deploy Anywhere. Your Infrastructure, Your Rules.</Heading>
            <Text size="lg">
              From fully managed cloud to air-gapped on-premise — deploy the platform wherever your
              compliance and performance requirements demand.
            </Text>
          </Reveal>
        </div>

        <Reveal variant="scaleUp">
          <div className="mx-auto max-w-4xl">
            {/* Option tabs */}
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              {DEPLOYMENT_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveOption(option.id)}
                  className={cn(
                    'focus-visible:ring-ring flex flex-1 items-center gap-3 rounded-xl border p-4 text-left transition-all duration-300 outline-none focus-visible:ring-2',
                    activeOption === option.id
                      ? 'bg-accent border-border-hover'
                      : 'bg-card border-border hover:border-border',
                  )}
                >
                  <option.icon
                    className={cn(
                      'h-5 w-5 transition-colors',
                      activeOption === option.id ? 'text-foreground' : 'text-muted-foreground/70',
                    )}
                    strokeWidth={1.5}
                  />
                  <span
                    className={cn(
                      'text-sm font-medium transition-colors',
                      activeOption === option.id ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {option.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Detail panel */}
            <GlassPanel variant="default" gradient className="p-8 md:p-10">
              <AnimatePresence mode="wait">
                <m.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="bg-accent border-border-hover flex h-12 w-12 items-center justify-center rounded-xl border">
                      <active.icon className="text-foreground h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-foreground text-xl font-medium">
                        {active.title}
                      </h3>
                      <Text size="sm" className="text-muted-foreground">
                        {active.description}
                      </Text>
                    </div>
                  </div>

                  <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {active.features.map((f, i) => (
                      <m.div
                        key={f}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, ease: EASE_OUT_EXPO }}
                        className="text-foreground/80 flex items-center gap-2 text-sm"
                      >
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                        {f}
                      </m.div>
                    ))}
                  </div>

                  <div className="border-border border-t pt-5">
                    <span className="text-muted-foreground/60 font-mono text-xs tracking-widest uppercase">
                      Best for:{' '}
                    </span>
                    <span className="text-muted-foreground text-sm">{active.bestFor}</span>
                  </div>
                </m.div>
              </AnimatePresence>
            </GlassPanel>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
