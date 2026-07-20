"use client";
import React, { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { Cloud, Server, Lock, Globe } from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { Reveal } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";
import { cn } from "../../../lib/utils";
import { EASE_OUT_EXPO } from "../../../lib/motion";

const DEPLOYMENT_OPTIONS = [
  {
    id: "cloud",
    title: "Cloud Managed",
    icon: Cloud,
    description: "Fully managed by Coherent AI Labs. Zero infrastructure overhead.",
    features: ["Auto-scaling", "Multi-region", "99.99% SLA", "Managed updates", "24/7 monitoring"],
    bestFor: "Teams that want to ship fast without managing infrastructure.",
  },
  {
    id: "hybrid",
    title: "Hybrid",
    icon: Globe,
    description: "Control plane in our cloud, data plane in your VPC.",
    features: ["Data sovereignty", "Custom networking", "Compliance control", "Managed orchestration", "Shared responsibility"],
    bestFor: "Enterprises needing data residency with managed AI orchestration.",
  },
  {
    id: "private",
    title: "On-Premise / Private AI",
    icon: Server,
    description: "Entire platform deployed within your infrastructure.",
    features: ["Air-gapped option", "Full data control", "Custom SLAs", "Self-hosted models", "Enterprise support"],
    bestFor: "Regulated industries requiring complete infrastructure ownership.",
  },
];

export function PlatformDeployment() {
  const [activeOption, setActiveOption] = useState("cloud");
  const active = DEPLOYMENT_OPTIONS.find(d => d.id === activeOption)!;

  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="center" size="lg" intensity={0.02} />}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Deployment Options
            </span>
            <Heading level={2}>
              Deploy Anywhere. Your Infrastructure, Your Rules.
            </Heading>
            <Text size="lg">
              From fully managed cloud to air-gapped on-premise — deploy the platform wherever your compliance and performance requirements demand.
            </Text>
          </Reveal>
        </div>

        <Reveal variant="scaleUp">
          <div className="max-w-4xl mx-auto">
            {/* Option tabs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {DEPLOYMENT_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveOption(option.id)}
                  className={cn(
                    "flex-1 flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white text-left",
                    activeOption === option.id
                      ? "bg-white/[0.06] border-white/20"
                      : "bg-[#080808] border-white/[0.06] hover:border-white/10"
                  )}
                >
                  <option.icon className={cn("w-5 h-5 transition-colors", activeOption === option.id ? "text-white" : "text-[#666]")} strokeWidth={1.5} />
                  <span className={cn("text-sm font-medium transition-colors", activeOption === option.id ? "text-white" : "text-[#aaa]")}>
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
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center">
                      <active.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium text-white">{active.title}</h3>
                      <Text size="sm" className="text-[#888]">{active.description}</Text>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {active.features.map((f, i) => (
                      <m.div
                        key={f}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3, ease: EASE_OUT_EXPO }}
                        className="flex items-center gap-2 text-sm text-[#ccc]"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                        {f}
                      </m.div>
                    ))}
                  </div>

                  <div className="pt-5 border-t border-white/5">
                    <span className="text-xs font-mono text-[#555] uppercase tracking-widest">Best for: </span>
                    <span className="text-sm text-[#aaa]">{active.bestFor}</span>
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
