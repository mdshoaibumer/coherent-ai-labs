"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import {
  Brain, Network, Database, Activity, GitBranch, Shield,
  Cpu, Bot, Workflow, Cloud, Search, Layers, Key, Eye,
  Server, Rocket, LucideIcon,
} from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { IconWrapper } from "../../ui/IconWrapper";
import { Reveal } from "../../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../../animations/AmbientGlow";
import { cn } from "../../../lib/utils";
import { EASE_OUT_EXPO } from "../../../lib/motion";

interface Capability {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

const CAPABILITY_LAYERS: { category: string; capabilities: Capability[] }[] = [
  {
    category: "AI & Reasoning",
    capabilities: [
      { id: "llm", title: "LLM Orchestration", icon: Brain, description: "Multi-model routing with fallback, cost optimization, and response streaming.", features: ["GPT-4o, Claude 3.5, Gemini", "Semantic routing", "Token budgeting"] },
      { id: "agents", title: "AI Agents", icon: Bot, description: "Autonomous agents with planning, reflection, tool calling, and memory.", features: ["Multi-step reasoning", "Tool execution", "State persistence"] },
      { id: "rag", title: "RAG Pipelines", icon: Search, description: "Retrieval-augmented generation with hybrid search and semantic caching.", features: ["Vector + keyword search", "Auto-chunking", "Cache invalidation"] },
    ],
  },
  {
    category: "Data & Knowledge",
    capabilities: [
      { id: "vector", title: "Vector Database", icon: Database, description: "High-density semantic search across millions of embeddings.", features: ["pgvector, Pinecone, Weaviate", "Real-time indexing", "Namespace isolation"] },
      { id: "knowledge", title: "Knowledge Base", icon: Network, description: "Enterprise knowledge graph connecting documents, APIs, and structured data.", features: ["Auto-ingestion", "Relationship mapping", "Version control"] },
      { id: "workflows", title: "Workflow Engine", icon: Workflow, description: "Deterministic task orchestration with human-in-the-loop approvals.", features: ["DAG execution", "Retry policies", "Conditional branching"] },
    ],
  },
  {
    category: "Infrastructure",
    capabilities: [
      { id: "security", title: "Security", icon: Shield, description: "Enterprise-grade auth, encryption, and compliance enforcement.", features: ["SSO/SAML", "AES-256 encryption", "SOC 2 compliance"] },
      { id: "observability", title: "Observability", icon: Activity, description: "Token-level tracing, latency monitoring, and cost attribution.", features: ["OpenTelemetry", "Custom dashboards", "Alerting"] },
      { id: "deployment", title: "Deployment", icon: Cloud, description: "Multi-region, multi-cloud deployment with zero-downtime updates.", features: ["AWS, Azure, GCP", "Private VPC", "Auto-scaling"] },
    ],
  },
];

export function CapabilityStack() {
  const [activeCapability, setActiveCapability] = useState<string | null>(null);
  const activeData = CAPABILITY_LAYERS.flatMap(l => l.capabilities).find(c => c.id === activeCapability);

  return (
    <Section padding="default" backgroundElement={
      <>
        <NoiseTexture opacity={0.015} />
        <AmbientGlow position="top-left" size="lg" intensity={0.025} />
      </>
    }>
      <Container>
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Capability Stack
            </span>
            <Heading level={2}>
              Every Layer of Intelligence. Production-Ready.
            </Heading>
            <Text size="lg">
              Nine core capabilities spanning AI reasoning, data management, and enterprise infrastructure — all integrated by default.
            </Text>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Capability grid */}
          <div className="lg:col-span-7">
            {CAPABILITY_LAYERS.map((layer, layerIdx) => (
              <Reveal key={layer.category} variant="fadeUp" delay={layerIdx * 0.1}>
                <div className="mb-8">
                  <h3 className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4">
                    {layer.category}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {layer.capabilities.map((cap) => {
                      const isActive = activeCapability === cap.id;
                      return (
                        <button
                          key={cap.id}
                          onClick={() => setActiveCapability(isActive ? null : cap.id)}
                          onMouseEnter={() => setActiveCapability(cap.id)}
                          className={cn(
                            "p-4 rounded-xl border text-left transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-white group",
                            isActive
                              ? "bg-white/[0.06] border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.03)]"
                              : "bg-[#080808] border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03]"
                          )}
                        >
                          <cap.icon
                            className={cn(
                              "w-5 h-5 mb-3 transition-colors duration-500",
                              isActive ? "text-white" : "text-[#666] group-hover:text-[#aaa]"
                            )}
                            strokeWidth={1.5}
                          />
                          <span className={cn(
                            "text-sm font-medium block transition-colors duration-500",
                            isActive ? "text-white" : "text-[#aaa]"
                          )}>
                            {cap.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Detail panel */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <GlassPanel variant="default" gradient className="p-8 min-h-[320px]">
                <AnimatePresence mode="wait">
                  {activeData ? (
                    <m.div
                      key={activeData.id}
                      initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                      transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                    >
                      <div className="flex items-center gap-3 mb-5">
                        <IconWrapper variant="default" size="sm">
                          <activeData.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                        </IconWrapper>
                        <h3 className="font-display text-xl font-medium text-white">{activeData.title}</h3>
                      </div>
                      <Text size="sm" className="text-[#aaa] mb-6">{activeData.description}</Text>
                      <div className="space-y-3">
                        {activeData.features.map((f, i) => (
                          <m.div
                            key={f}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.06, ease: EASE_OUT_EXPO }}
                            className="flex items-center gap-3 text-sm text-[#ccc]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                            {f}
                          </m.div>
                        ))}
                      </div>
                    </m.div>
                  ) : (
                    <m.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="h-full flex flex-col items-center justify-center text-center px-6"
                    >
                      <Layers className="w-8 h-8 text-[#444] mb-4" strokeWidth={1.5} />
                      <Text size="sm" className="text-[#666]">
                        Select any capability to explore its architecture, features, and integration points.
                      </Text>
                    </m.div>
                  )}
                </AnimatePresence>
              </GlassPanel>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
