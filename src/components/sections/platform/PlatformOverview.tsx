"use client";
import React from "react";
import { m } from "motion/react";
import { Database, Brain, Cpu, Zap, Shield, Activity } from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { IconWrapper } from "../../ui/IconWrapper";
import { Reveal, RevealStagger, RevealItem } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

const LAYERS = [
  {
    icon: Database,
    title: "Data Ingestion",
    desc: "Connect enterprise data sources, documents, and APIs into a unified semantic layer.",
    position: "01",
  },
  {
    icon: Brain,
    title: "Knowledge Engine",
    desc: "Vector embeddings, hybrid search, and RAG pipelines ground AI in proprietary data.",
    position: "02",
  },
  {
    icon: Cpu,
    title: "AI Reasoning",
    desc: "Multi-model orchestration with autonomous agents, tool calling, and planning loops.",
    position: "03",
  },
  {
    icon: Zap,
    title: "Execution Layer",
    desc: "Deterministic actions, workflow triggers, API calls, and system integrations.",
    position: "04",
  },
  {
    icon: Shield,
    title: "Security Fabric",
    desc: "End-to-end encryption, RBAC, audit trails, and compliance enforcement.",
    position: "05",
  },
  {
    icon: Activity,
    title: "Observability",
    desc: "Token-level tracing, cost attribution, latency monitoring, and anomaly detection.",
    position: "06",
  },
];

export function PlatformOverview() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="center" size="xl" intensity={0.02} />}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Architecture-First Design
            </span>
            <Heading level={2}>
              Six Layers. One Unified Platform.
            </Heading>
            <Text size="lg">
              Every layer is purpose-built for enterprise AI workloads — from data ingestion through reasoning to execution and observability.
            </Text>
          </Reveal>
        </div>

        {/* Platform layers — vertical flow with connections */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical connection line */}
          {!prefersReducedMotion && (
            <div className="absolute left-8 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-white/[0.04] z-0">
              <m.div
                className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/30 to-transparent"
                animate={{ top: ["-20%", "120%"] }}
                transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              />
            </div>
          )}

          <RevealStagger stagger={0.1} className="relative z-10 flex flex-col gap-6">
            {LAYERS.map((layer, i) => (
              <RevealItem key={layer.position}>
                <div className={`flex items-center gap-6 md:gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Node */}
                  <div className="relative shrink-0">
                    <div className="w-16 h-16 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center relative z-10">
                      <layer.icon className="w-6 h-6 text-[#888]" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[8px] font-mono text-[#666]">
                      {layer.position}
                    </span>
                  </div>

                  {/* Content card */}
                  <GlassPanel variant="dark" className="p-6 flex-1 group hover:border-white/15 transition-all duration-500">
                    <h3 className="font-display text-lg font-medium text-white mb-2 tracking-tight">
                      {layer.title}
                    </h3>
                    <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">
                      {layer.desc}
                    </Text>
                  </GlassPanel>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </Section>
  );
}
