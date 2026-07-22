'use client';
import {
  Code,
  TestTube,
  Rocket,
  Zap,
  Eye,
  Shield,
  FileText,
  Activity,
  CheckCircle2,
  GitBranch,
} from 'lucide-react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { GlassPanel } from '../ui/GlassPanel';
import { Grid } from '../ui/Grid';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../animations/AmbientGlow';
import { EASE_OUT_EXPO } from '../../lib/motion';

const STANDARDS = [
  {
    icon: Code,
    title: 'Code Reviews',
    metric: '100%',
    description:
      'Every pull request reviewed by a senior engineer before merge. Architectural decisions documented as ADRs.',
  },
  {
    icon: TestTube,
    title: 'Automated Testing',
    metric: '90%+',
    description:
      'Unit, integration, and e2e coverage enforced in CI. No deployment without passing all quality gates.',
  },
  {
    icon: Rocket,
    title: 'CI/CD Pipeline',
    metric: '< 10min',
    description:
      'From commit to production in under 10 minutes. Zero manual deployment steps. Automatic rollback on failure.',
  },
  {
    icon: Zap,
    title: 'Performance Budgets',
    metric: '< 1s TTI',
    description:
      'Time to Interactive under 1 second. Lighthouse scores, bundle sizes, and response times enforced automatically.',
  },
  {
    icon: Eye,
    title: 'Accessibility',
    metric: 'WCAG AA',
    description:
      'Keyboard navigation, screen reader support, and color contrast verified on every release. No exceptions.',
  },
  {
    icon: Activity,
    title: 'Observability',
    metric: 'Real-time',
    description:
      'Structured logging, distributed tracing, and custom metrics from day one. Anomaly detection alerts proactively.',
  },
  {
    icon: FileText,
    title: 'Documentation',
    metric: 'Living',
    description:
      'API docs, architecture diagrams, runbooks, and onboarding guides — maintained as part of every sprint.',
  },
  {
    icon: Shield,
    title: 'Security Reviews',
    metric: 'Quarterly',
    description:
      'Dependency scanning, SAST/DAST, secret detection in CI. Penetration testing every quarter by third parties.',
  },
];

const DELIVERY_PRINCIPLES = [
  'Architecture-first engineering',
  'Incremental delivery every 2 weeks',
  'Transparent weekly communication',
  'Security by design, not afterthought',
  'AI with human oversight',
  'Long-term maintainability over speed',
];

export function Testimonials() {
  return (
    <Section
      id="standards"
      backgroundElement={
        <>
          <NoiseTexture opacity={0.012} />
          <AmbientGlow position="top-right" size="lg" intensity={0.02} />
        </>
      }
    >
      <Container>
        {/* Header */}
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Engineering Standards
            </span>
            <Heading level={2}>How We Ensure Quality at Every Stage</Heading>
            <Text size="lg">
              These practices run on every project, every sprint, regardless of timeline pressure.
              They are what make software reliable years after launch.
            </Text>
          </Reveal>
        </div>

        {/* Standards Grid */}
        <RevealStagger
          stagger={0.06}
          className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STANDARDS.map((standard) => (
            <RevealItem key={standard.title}>
              <GlassPanel
                variant="dark"
                className="group hover:border-foreground/15 h-full p-5 transition-all duration-500"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="bg-foreground/[0.05] border-foreground/10 group-hover:border-foreground/20 flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-500">
                    <standard.icon
                      className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-foreground/80 font-mono text-xs font-bold">
                    {standard.metric}
                  </span>
                </div>
                <h3 className="font-display text-foreground mb-2 text-sm font-medium">
                  {standard.title}
                </h3>
                <Text
                  size="sm"
                  className="text-muted-foreground group-hover:text-foreground/80 text-xs leading-relaxed transition-colors"
                >
                  {standard.description}
                </Text>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Delivery Principles */}
        <Reveal variant="fade" delay={0.2}>
          <div className="border-foreground/5 mx-auto max-w-4xl border-t pt-12">
            <div className="mb-8 text-center">
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
                Delivery Principles
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {DELIVERY_PRINCIPLES.map((principle) => (
                <div
                  key={principle}
                  className="bg-foreground/[0.02] border-foreground/[0.06] hover:bg-foreground/[0.04] hover:border-foreground/10 flex items-center gap-2 rounded-full border px-4 py-2.5 transition-colors"
                >
                  <CheckCircle2 className="text-muted-foreground h-3.5 w-3.5" />
                  <span className="text-muted-foreground text-xs font-medium">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
