'use client';
import React from 'react';
import {
  Bot,
  Workflow,
  Layers,
  AppWindow,
  Smartphone,
  Laptop,
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

interface SolutionLink {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  tag: string;
}

const SOLUTIONS: SolutionLink[] = [
  {
    title: 'AI Agents',
    description: 'Autonomous multi-agent systems that reason, plan, and execute complex workflows.',
    icon: Bot,
    href: '/solutions/ai-agents',
    tag: 'Intelligence',
  },
  {
    title: 'Workflow Automation',
    description:
      'End-to-end intelligent pipelines replacing manual processes across your enterprise.',
    icon: Workflow,
    href: '/solutions/workflow-automation',
    tag: 'Automation',
  },
  {
    title: 'Enterprise Software',
    description:
      'Bespoke full-stack applications with microservices architecture and AI-native design.',
    icon: Layers,
    href: '/solutions/enterprise-software',
    tag: 'Platform',
  },
  {
    title: 'Web Applications',
    description:
      'High-performance, accessible web experiences with server-rendering and progressive enhancement.',
    icon: AppWindow,
    href: '/solutions/web-applications',
    tag: 'Frontend',
  },
  {
    title: 'Mobile Applications',
    description:
      'Native iOS and Android apps with offline-first architecture and enterprise mobility.',
    icon: Smartphone,
    href: '/solutions/mobile-applications',
    tag: 'Mobile',
  },
  {
    title: 'Desktop Applications',
    description:
      'Cross-platform native desktop software with hardware integration and offline capability.',
    icon: Laptop,
    href: '/solutions/desktop-applications',
    tag: 'Desktop',
  },
];

export function SolutionsByCapability() {
  return (
    <Section
      padding="default"
      backgroundElement={<AmbientGlow position="top-center" size="xl" intensity={0.02} />}
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Solutions by Capability
            </span>
            <Heading level={2}>What We Build</Heading>
            <Text size="lg">
              Six core engineering capabilities — from autonomous AI agents to native desktop
              applications. Each solution is architected for enterprise scale.
            </Text>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {SOLUTIONS.map((solution) => (
            <RevealItem key={solution.href}>
              <Link
                href={solution.href}
                className="group focus-visible:ring-ring block h-full rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
              >
                <GlassPanel
                  variant="dark"
                  className="hover:border-border-hover relative flex h-full flex-col overflow-hidden p-6 transition-all duration-500"
                >
                  {/* Tag */}
                  <span className="text-muted-foreground/60 absolute top-4 right-4 font-mono text-[9px] tracking-widest uppercase">
                    {solution.tag}
                  </span>

                  <IconWrapper
                    variant="default"
                    size="sm"
                    className="group-hover:border-border-hover group-hover:bg-accent mb-5 transition-all duration-500"
                  >
                    <solution.icon
                      className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>

                  <h3 className="font-display text-foreground group-hover:text-foreground mb-2 text-lg font-medium tracking-tight">
                    {solution.title}
                  </h3>
                  <Text
                    size="sm"
                    className="text-muted-foreground group-hover:text-muted-foreground flex-grow transition-colors"
                  >
                    {solution.description}
                  </Text>

                  <div className="text-muted-foreground/70 group-hover:text-foreground mt-6 flex items-center gap-2 text-sm font-medium transition-colors">
                    Explore solution
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
