"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { AmbientGlow } from "../animations/AmbientGlow";

const COMPARISONS = [
  {
    typical: "Template-based development",
    coherent: "Architecture-first engineering",
  },
  {
    typical: "Feature delivery",
    coherent: "Business outcome delivery",
  },
  {
    typical: "Generic automation scripts",
    coherent: "Enterprise AI orchestration",
  },
  {
    typical: "One-time project handoff",
    coherent: "Long-term engineering partnership",
  },
  {
    typical: "Minimal documentation",
    coherent: "Living engineering documentation",
  },
  {
    typical: "Reactive bug-fix support",
    coherent: "Proactive optimization & monitoring",
  },
  {
    typical: "Bolted-on security review",
    coherent: "Security by design from day one",
  },
];

export function Comparison() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              The Difference
            </span>
            <Heading level={2}>
              Not Another Software Agency
            </Heading>
            <Text size="lg">
              We engineer production-grade AI systems with the same rigor as
              the world&apos;s best internal engineering teams.
            </Text>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Column headers */}
          <Reveal variant="fade">
            <div className="grid grid-cols-[1fr_auto_1fr] gap-4 mb-6 px-4">
              <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">
                Typical Agency
              </span>
              <span />
              <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest text-right">
                Coherent AI Labs
              </span>
            </div>
          </Reveal>

          {/* Comparison rows */}
          <RevealStagger stagger={0.06} className="space-y-3">
            {COMPARISONS.map((row) => (
              <RevealItem key={row.typical}>
                <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center p-4 rounded-xl bg-white/[0.015] border border-white/[0.04] hover:border-white/[0.08] transition-colors group">
                  <span className="text-sm text-[#666] group-hover:text-[#888] transition-colors line-through decoration-white/10">
                    {row.typical}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#444] group-hover:text-white/60 transition-colors shrink-0" />
                  <span className="text-sm text-[#ccc] font-medium text-right group-hover:text-white transition-colors">
                    {row.coherent}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}
