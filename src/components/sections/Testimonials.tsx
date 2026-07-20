"use client";
import {
  Code, TestTube, Rocket, Zap, Eye, Shield,
  FileText, Activity, CheckCircle2, GitBranch,
} from "lucide-react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { GlassPanel } from "../ui/GlassPanel";
import { Grid } from "../ui/Grid";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../animations/AmbientGlow";
import { EASE_OUT_EXPO } from "../../lib/motion";

const STANDARDS = [
  {
    icon: Code,
    title: "Code Reviews",
    metric: "100%",
    description: "Every pull request reviewed by a senior engineer before merge. Architectural decisions documented as ADRs.",
  },
  {
    icon: TestTube,
    title: "Automated Testing",
    metric: "90%+",
    description: "Unit, integration, and e2e coverage enforced in CI. No deployment without passing all quality gates.",
  },
  {
    icon: Rocket,
    title: "CI/CD Pipeline",
    metric: "< 10min",
    description: "From commit to production in under 10 minutes. Zero manual deployment steps. Automatic rollback on failure.",
  },
  {
    icon: Zap,
    title: "Performance Budgets",
    metric: "< 1s TTI",
    description: "Time to Interactive under 1 second. Lighthouse scores, bundle sizes, and response times enforced automatically.",
  },
  {
    icon: Eye,
    title: "Accessibility",
    metric: "WCAG AA",
    description: "Keyboard navigation, screen reader support, and color contrast verified on every release. No exceptions.",
  },
  {
    icon: Activity,
    title: "Observability",
    metric: "Real-time",
    description: "Structured logging, distributed tracing, and custom metrics from day one. Anomaly detection alerts proactively.",
  },
  {
    icon: FileText,
    title: "Documentation",
    metric: "Living",
    description: "API docs, architecture diagrams, runbooks, and onboarding guides — maintained as part of every sprint.",
  },
  {
    icon: Shield,
    title: "Security Reviews",
    metric: "Quarterly",
    description: "Dependency scanning, SAST/DAST, secret detection in CI. Penetration testing every quarter by third parties.",
  },
];

const DELIVERY_PRINCIPLES = [
  "Architecture-first engineering",
  "Incremental delivery every 2 weeks",
  "Transparent weekly communication",
  "Security by design, not afterthought",
  "AI with human oversight",
  "Long-term maintainability over speed",
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
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Engineering Standards
            </span>
            <Heading level={2}>
              How We Ensure Quality at Every Stage
            </Heading>
            <Text size="lg">
              These practices run on every project, every sprint, regardless of
              timeline pressure. They are what make software reliable years after launch.
            </Text>
          </Reveal>
        </div>

        {/* Standards Grid */}
        <RevealStagger stagger={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {STANDARDS.map((standard) => (
            <RevealItem key={standard.title}>
              <GlassPanel variant="dark" className="p-5 h-full group hover:border-white/15 transition-all duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors duration-500">
                    <standard.icon className="w-4 h-4 text-[#666] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-mono font-bold text-white/80">{standard.metric}</span>
                </div>
                <h3 className="font-display text-sm font-medium text-white mb-2">{standard.title}</h3>
                <Text size="sm" className="text-[#777] group-hover:text-[#aaa] transition-colors text-xs leading-relaxed">
                  {standard.description}
                </Text>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Delivery Principles */}
        <Reveal variant="fade" delay={0.2}>
          <div className="max-w-4xl mx-auto border-t border-white/5 pt-12">
            <div className="text-center mb-8">
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase">
                Delivery Principles
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {DELIVERY_PRINCIPLES.map((principle) => (
                <div
                  key={principle}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/10 transition-colors"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#555]" />
                  <span className="text-xs font-medium text-[#aaa]">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
