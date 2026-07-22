'use client';
import React from 'react';
import { m } from 'motion/react';
import { ArrowRight, Calendar, CheckCircle2, LucideIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { GlassPanel } from '../ui/GlassPanel';
import { Grid } from '../ui/Grid';
import { IconWrapper } from '../ui/IconWrapper';
import { MagneticButton } from '../animations/MagneticButton';
import { SplitText } from '../animations/SplitText';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../animations/AmbientGlow';
import { SectionTransition } from '../animations/SectionTransition';
import { StatsRow } from '../ui/StatsRow';
import { Accordion } from '../ui/Accordion';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/* ═══════════════════════════════════════════════════════════
   TYPES — data contract for solution pages
═══════════════════════════════════════════════════════════ */

export interface SolutionFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface SolutionTech {
  category: string;
  items: string[];
}

export interface SolutionProcess {
  step: string;
  title: string;
  description: string;
}

export interface SolutionBenefit {
  value: string;
  label: string;
}

export interface SolutionFAQ {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface SolutionPageData {
  /** Page eyebrow label */
  eyebrow: string;
  /** Main headline */
  title: string;
  /** Supporting description */
  description: string;
  /** Optional hero image */
  heroImage?: string;
  /** Optional hero image alt text */
  heroImageAlt?: string;
  /** Problem statement section */
  problem: {
    headline: string;
    description: string;
    painPoints: string[];
  };
  /** Solution overview features */
  features: SolutionFeature[];
  /** Architecture description + optional visualization */
  architecture: {
    title: string;
    description: string;
    layers: { label: string; items: string[] }[];
  };
  /** Technology stack */
  techStack: SolutionTech[];
  /** Engineering process */
  process: SolutionProcess[];
  /** Business benefits / metrics */
  benefits: SolutionBenefit[];
  /** FAQs */
  faqs: SolutionFAQ[];
}

/* ═══════════════════════════════════════════════════════════
   SOLUTION PAGE LAYOUT — shared template for all solution pages
═══════════════════════════════════════════════════════════ */

interface SolutionPageLayoutProps {
  data: SolutionPageData;
  /** Optional custom visualization component */
  visualization?: React.ReactNode;
}

export function SolutionPageLayout({ data, visualization }: SolutionPageLayoutProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-32 pb-20">
        <AmbientGlow
          position="top-center"
          size="xl"
          intensity={0.035}
          animate
          animationDuration={6}
        />
        <NoiseTexture opacity={0.015} />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 65%)',
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="max-w-3xl">
              <m.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <span className="text-muted-foreground/60 border-border bg-accent mb-6 inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                  {data.eyebrow}
                </span>
              </m.div>

              <h1 className="font-display text-foreground mb-8 text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
                <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={8} yOffset={20}>
                  {data.title}
                </SplitText>
              </h1>

              <m.div
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
              >
                <Text size="xl" className="mb-10 max-w-2xl">
                  {data.description}
                </Text>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE_OUT_EXPO }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a href="/contact">
                  <MagneticButton
                    strength={25}
                    className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[var(--shadow-lg)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[var(--shadow-xl)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                  >
                    <Calendar className="h-5 w-5" />
                    Discuss Your Project
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </a>
              </m.div>
            </div>

            {data.heroImage && (
              <m.div
                initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
                className="relative hidden aspect-[4/3] max-h-[500px] w-full lg:block"
              >
                <div className="from-foreground/5 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr to-transparent mix-blend-screen md:rounded-[40px]" />
                <img
                  src={data.heroImage}
                  alt={data.heroImageAlt || data.title}
                  className="border-border h-full w-full rounded-2xl border object-cover shadow-[var(--shadow-xl)] md:rounded-[40px]"
                />
              </m.div>
            )}
          </div>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 2. PROBLEM STATEMENT ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="top-right" size="md" intensity={0.02} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal variant="slideRight">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                The Problem
              </span>
              <Heading level={2} className="mb-6">
                {data.problem.headline}
              </Heading>
              <Text size="lg" className="text-muted-foreground">
                {data.problem.description}
              </Text>
            </Reveal>

            <RevealStagger stagger={0.08} className="space-y-4">
              {data.problem.painPoints.map((point) => (
                <RevealItem key={point}>
                  <div className="border-border bg-card hover:border-border flex items-start gap-4 rounded-xl border p-5 transition-colors">
                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-400/50" />
                    <Text size="sm" className="text-muted-foreground">
                      {point}
                    </Text>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 3. SOLUTION OVERVIEW ═══ */}
      <section className="relative overflow-hidden py-32">
        <NoiseTexture opacity={0.015} />
        <AmbientGlow position="center" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="mb-16 max-w-3xl">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                The Solution
              </span>
              <Heading level={2}>How We Solve This</Heading>
            </Reveal>
          </div>

          <RevealStagger
            stagger={0.08}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.features.map((feature) => (
              <RevealItem key={feature.title}>
                <GlassPanel
                  variant="dark"
                  className="group hover:border-border-hover h-full p-6 transition-all duration-500"
                >
                  <IconWrapper
                    variant="default"
                    size="sm"
                    className="group-hover:border-border-hover mb-5 transition-colors duration-500"
                  >
                    <feature.icon
                      className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>
                  <h3 className="font-display text-foreground mb-2 text-lg font-medium tracking-tight">
                    {feature.title}
                  </h3>
                  <Text
                    size="sm"
                    className="text-muted-foreground group-hover:text-muted-foreground transition-colors"
                  >
                    {feature.description}
                  </Text>
                </GlassPanel>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 4. ARCHITECTURE ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="top-left" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="mb-16 max-w-3xl">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                Architecture
              </span>
              <Heading level={2}>{data.architecture.title}</Heading>
              <Text size="lg" className="text-muted-foreground">
                {data.architecture.description}
              </Text>
            </Reveal>
          </div>

          {/* Optional custom visualization */}
          {visualization && (
            <Reveal variant="scaleUp" className="mb-16">
              {visualization}
            </Reveal>
          )}

          {/* Architecture layers */}
          <RevealStagger
            stagger={0.1}
            className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.architecture.layers.map((layer) => (
              <RevealItem key={layer.label}>
                <GlassPanel variant="dark" className="h-full p-6">
                  <h4 className="text-muted-foreground/60 mb-4 font-mono text-xs tracking-widest uppercase">
                    {layer.label}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="bg-accent text-foreground/70 rounded-md border border-white/[0.08] px-3 py-1.5 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </GlassPanel>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 5. TECH STACK ═══ */}
      <section className="relative overflow-hidden py-32">
        <NoiseTexture opacity={0.012} />
        <Container className="relative z-10">
          <div className="mb-16 max-w-3xl">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                Technology
              </span>
              <Heading level={2}>Engineering Stack</Heading>
            </Reveal>
          </div>

          <RevealStagger
            stagger={0.08}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {data.techStack.map((tech) => (
              <RevealItem key={tech.category}>
                <div className="border-border border-t pt-6">
                  <h4 className="text-muted-foreground/60 mb-4 font-mono text-[10px] tracking-widest uppercase">
                    {tech.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="bg-accent text-muted-foreground rounded-md border border-white/[0.06] px-3 py-1.5 text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 6. ENGINEERING PROCESS ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="center" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                Process
              </span>
              <Heading level={2}>How We Deliver</Heading>
            </Reveal>
          </div>

          <RevealStagger stagger={0.1}>
            <Grid cols={4} gap="sm" className="relative">
              <div className="via-border absolute top-12 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent to-transparent md:block" />
              {data.process.map((step) => (
                <RevealItem key={step.step}>
                  <GlassPanel
                    variant="default"
                    className="group hover:bg-muted relative z-10 h-full p-6 transition-colors"
                  >
                    <div className="text-muted-foreground/70 border-border mb-3 inline-block rounded-full border bg-white/5 px-2 py-1 font-mono text-[10px] tracking-widest uppercase">
                      Step {step.step}
                    </div>
                    <h4 className="font-display text-foreground mb-2 text-base font-medium">
                      {step.title}
                    </h4>
                    <Text size="sm" className="text-muted-foreground">
                      {step.description}
                    </Text>
                  </GlassPanel>
                </RevealItem>
              ))}
            </Grid>
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 7. BENEFITS ═══ */}
      <section className="relative overflow-hidden py-32">
        <Container className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal variant="fadeUp">
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
                Outcomes
              </span>
              <Heading level={2}>Measurable Business Impact</Heading>
            </Reveal>
          </div>

          <StatsRow stats={data.benefits} variant="cards" />
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 8. FAQ ═══ */}
      <section className="relative overflow-hidden py-32">
        <NoiseTexture opacity={0.012} />
        <Container size="md" className="relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Reveal variant="fadeUp">
              <Heading level={2}>Frequently Asked Questions</Heading>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={0.1}>
            <GlassPanel variant="dark" className="p-6 md:p-8">
              <Accordion
                items={data.faqs.map((f) => ({ id: f.id, title: f.title, content: f.content }))}
              />
            </GlassPanel>
          </Reveal>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 9. CTA ═══ */}
      <section className="relative overflow-hidden py-32">
        <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={7} />
        <Container size="md" className="relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal variant="perspective">
              <Heading level={2} className="mb-8 md:text-5xl">
                Ready to Get Started?
              </Heading>
              <Text size="lg" className="mx-auto mb-10 max-w-2xl">
                Let our engineering team design the right solution for your business requirements,
                compliance needs, and scalability goals.
              </Text>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href="/contact">
                  <MagneticButton
                    strength={25}
                    className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[var(--shadow-lg)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[var(--shadow-xl)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Discovery Call
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </MagneticButton>
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
