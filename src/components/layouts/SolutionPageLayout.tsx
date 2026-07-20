"use client";
import React from "react";
import { m } from "motion/react";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { GlassPanel } from "../ui/GlassPanel";
import { Grid } from "../ui/Grid";
import { IconWrapper } from "../ui/IconWrapper";
import { MagneticButton } from "../animations/MagneticButton";
import { SplitText } from "../animations/SplitText";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../animations/AmbientGlow";
import { SectionTransition } from "../animations/SectionTransition";
import { StatsRow } from "../ui/StatsRow";
import { Accordion } from "../ui/Accordion";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

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
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden">
        <AmbientGlow position="top-center" size="xl" intensity={0.035} animate animationDuration={6} />
        <NoiseTexture opacity={0.015} />
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
          }}
        />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-3xl">
              <m.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <span className="inline-block text-[10px] font-mono tracking-widest text-[#555] uppercase mb-6 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
                  {data.eyebrow}
                </span>
              </m.div>

              <h1 className="font-display font-bold tracking-tight text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
                <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={8} yOffset={20}>
                  {data.title}
                </SplitText>
              </h1>

              <m.div
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
              >
                <Text size="xl" className="max-w-2xl mb-10">{data.description}</Text>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.55, ease: EASE_OUT_EXPO }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a href="/contact">
                  <MagneticButton
                    strength={25}
                    className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                  >
                    <Calendar className="w-5 h-5" />
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </MagneticButton>
                </a>
              </m.div>
            </div>
            
            {data.heroImage && (
              <m.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
                className="relative hidden lg:block aspect-[4/3] max-h-[500px] w-full"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00c8ff]/15 to-transparent rounded-2xl md:rounded-[40px] mix-blend-screen pointer-events-none" />
                <img 
                  src={data.heroImage} 
                  alt={data.heroImageAlt || data.title} 
                  className="w-full h-full object-cover rounded-2xl md:rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(0,200,255,0.07)]"
                />
              </m.div>
            )}
          </div>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 2. PROBLEM STATEMENT ═══ */}
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="top-right" size="md" intensity={0.02} />
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal variant="slideRight">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">The Problem</span>
              <Heading level={2} className="mb-6">{data.problem.headline}</Heading>
              <Text size="lg" className="text-[#888]">{data.problem.description}</Text>
            </Reveal>

            <RevealStagger stagger={0.08} className="space-y-4">
              {data.problem.painPoints.map((point) => (
                <RevealItem key={point}>
                  <div className="p-5 rounded-xl border border-white/5 bg-[#050505] flex items-start gap-4 hover:border-white/10 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-[#ff4444]/60 mt-2 shrink-0" />
                    <Text size="sm" className="text-[#aaa]">{point}</Text>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 3. SOLUTION OVERVIEW ═══ */}
      <section className="py-32 relative overflow-hidden">
        <NoiseTexture opacity={0.015} />
        <AmbientGlow position="center" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="max-w-3xl mb-16">
            <Reveal variant="fadeUp">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">The Solution</span>
              <Heading level={2}>How We Solve This</Heading>
            </Reveal>
          </div>

          <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.features.map((feature) => (
              <RevealItem key={feature.title}>
                <GlassPanel variant="dark" className="p-6 h-full group hover:border-white/15 transition-all duration-500">
                  <IconWrapper variant="default" size="sm" className="mb-5 group-hover:border-white/20 transition-colors duration-500">
                    <feature.icon className="w-5 h-5 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </IconWrapper>
                  <h3 className="font-display text-lg font-medium text-white mb-2 tracking-tight">{feature.title}</h3>
                  <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">{feature.description}</Text>
                </GlassPanel>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 4. ARCHITECTURE ═══ */}
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="top-left" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="max-w-3xl mb-16">
            <Reveal variant="fadeUp">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Architecture</span>
              <Heading level={2}>{data.architecture.title}</Heading>
              <Text size="lg" className="text-[#888]">{data.architecture.description}</Text>
            </Reveal>
          </div>

          {/* Optional custom visualization */}
          {visualization && (
            <Reveal variant="scaleUp" className="mb-16">
              {visualization}
            </Reveal>
          )}

          {/* Architecture layers */}
          <RevealStagger stagger={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.architecture.layers.map((layer) => (
              <RevealItem key={layer.label}>
                <GlassPanel variant="dark" className="p-6 h-full">
                  <h4 className="text-xs font-mono tracking-widest text-[#555] uppercase mb-4">{layer.label}</h4>
                  <div className="flex flex-wrap gap-2">
                    {layer.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#bbb]">
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
      <section className="py-32 relative overflow-hidden">
        <NoiseTexture opacity={0.012} />
        <Container className="relative z-10">
          <div className="max-w-3xl mb-16">
            <Reveal variant="fadeUp">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Technology</span>
              <Heading level={2}>Engineering Stack</Heading>
            </Reveal>
          </div>

          <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.techStack.map((tech) => (
              <RevealItem key={tech.category}>
                <div className="border-t border-white/10 pt-6">
                  <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-4">{tech.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-[#aaa]">
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
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="center" size="lg" intensity={0.02} />
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal variant="fadeUp">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Process</span>
              <Heading level={2}>How We Deliver</Heading>
            </Reveal>
          </div>

          <RevealStagger stagger={0.1}>
            <Grid cols={4} gap="sm" className="relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {data.process.map((step) => (
                <RevealItem key={step.step}>
                  <GlassPanel variant="default" className="p-6 relative z-10 h-full group hover:bg-[#0a0a0a] transition-colors">
                    <div className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-3 px-2 py-1 bg-white/5 rounded-full inline-block border border-white/5">
                      Step {step.step}
                    </div>
                    <h4 className="font-display text-base font-medium text-white mb-2">{step.title}</h4>
                    <Text size="sm" className="text-[#888]">{step.description}</Text>
                  </GlassPanel>
                </RevealItem>
              ))}
            </Grid>
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 7. BENEFITS ═══ */}
      <section className="py-32 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal variant="fadeUp">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Outcomes</span>
              <Heading level={2}>Measurable Business Impact</Heading>
            </Reveal>
          </div>

          <StatsRow stats={data.benefits} variant="cards" />
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* ═══ 8. FAQ ═══ */}
      <section className="py-32 relative overflow-hidden">
        <NoiseTexture opacity={0.012} />
        <Container size="md" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal variant="fadeUp">
              <Heading level={2}>Frequently Asked Questions</Heading>
            </Reveal>
          </div>

          <Reveal variant="fade" delay={0.1}>
            <GlassPanel variant="dark" className="p-6 md:p-8">
              <Accordion items={data.faqs.map(f => ({ id: f.id, title: f.title, content: f.content }))} />
            </GlassPanel>
          </Reveal>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* ═══ 9. CTA ═══ */}
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={7} />
        <Container size="md" className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal variant="perspective">
              <Heading level={2} className="md:text-5xl mb-8">
                Ready to Get Started?
              </Heading>
              <Text size="lg" className="max-w-2xl mx-auto mb-10">
                Let our engineering team design the right solution for your business requirements, compliance needs, and scalability goals.
              </Text>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact">
                  <MagneticButton
                    strength={25}
                    className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Discovery Call
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
