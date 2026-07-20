"use client";
import React from "react";
import { m } from "motion/react";
import { FileText, Cpu, Rocket, TrendingUp } from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { Reveal, RevealStagger, RevealItem } from "../../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../../animations/AmbientGlow";

const CASE_STUDY = {
  title: "Enterprise Document Intelligence Pipeline",
  industry: "Financial Services",
  challenge: "A Fortune 500 financial institution processing 50,000+ documents daily with 14-minute average manual processing time, 3.4% error rate, and growing compliance risk.",
  phases: [
    {
      icon: FileText,
      title: "Problem Analysis",
      description: "Mapped 12 document types across 3 business units. Identified extraction rules, compliance requirements, and integration points.",
    },
    {
      icon: Cpu,
      title: "Architecture Design",
      description: "Multi-agent system: Ingestion Agent, Classification Agent, Extraction Agent, Validation Agent, and Compliance Agent collaborating via shared memory.",
    },
    {
      icon: Rocket,
      title: "Deployment",
      description: "Deployed within client VPC on AWS. Private LLM endpoints. Zero data egress. Rolling updates with canary deployment strategy.",
    },
    {
      icon: TrendingUp,
      title: "Business Outcome",
      description: "Processing time reduced from 14 minutes to 8 seconds. Error rate dropped to 0.02%. Full audit trail for every decision.",
    },
  ],
  outcomes: [
    { value: "99.8%", label: "Accuracy" },
    { value: "105x", label: "Faster" },
    { value: "$4.2M", label: "Annual Savings" },
    { value: "0", label: "Data Breaches" },
  ],
};

export function PlatformCaseStudy() {
  return (
    <Section padding="default" backgroundElement={
      <>
        <NoiseTexture opacity={0.015} />
        <AmbientGlow position="top-left" size="lg" intensity={0.02} />
      </>
    }>
      <Container>
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Representative Deployment
            </span>
            <Heading level={2}>
              From Challenge to Production in Weeks
            </Heading>
            <Text size="lg">
              See how the platform architecture translates into measurable business outcomes for enterprise clients.
            </Text>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <Reveal variant="slideRight">
              <GlassPanel variant="dark" className="p-6 md:p-8 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase px-2 py-1 bg-white/5 rounded border border-white/5">
                    {CASE_STUDY.industry}
                  </span>
                </div>
                <h3 className="font-display text-xl font-medium text-white mb-3">{CASE_STUDY.title}</h3>
                <Text size="sm" className="text-[#888]">{CASE_STUDY.challenge}</Text>
              </GlassPanel>
            </Reveal>

            <RevealStagger stagger={0.12} className="space-y-4">
              {CASE_STUDY.phases.map((phase, i) => (
                <RevealItem key={phase.title}>
                  <div className="flex items-start gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors group">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] transition-colors">
                      <phase.icon className="w-5 h-5 text-[#888] group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-mono text-[#555]">Phase {String(i + 1).padStart(2, "0")}</span>
                        <h4 className="font-display text-base font-medium text-white">{phase.title}</h4>
                      </div>
                      <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">
                        {phase.description}
                      </Text>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealStagger>
          </div>

          {/* Outcomes panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <Reveal variant="scaleUp" delay={0.2}>
                <GlassPanel variant="default" gradient className="p-8">
                  <h3 className="font-display text-sm font-mono tracking-widest text-[#555] uppercase mb-8">
                    Business Outcomes
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {CASE_STUDY.outcomes.map((outcome) => (
                      <div key={outcome.label} className="text-center">
                        <div className="font-display text-3xl font-bold text-white mb-1 tracking-tight">
                          {outcome.value}
                        </div>
                        <div className="text-xs font-mono text-[#666] uppercase tracking-widest">
                          {outcome.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 rounded-full bg-[#00ff00]/50" />
                      <span className="text-xs font-mono text-[#555] uppercase tracking-widest">Production Status</span>
                    </div>
                    <Text size="sm" className="text-[#aaa]">
                      Running in production for 18+ months with zero incidents and continuous improvement via automated model retraining.
                    </Text>
                  </div>
                </GlassPanel>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
