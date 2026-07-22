"use client";
import { m } from "motion/react";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { AmbientGlow } from "../animations/AmbientGlow";
import { EASE_OUT_EXPO, EASE_OUT_CUBIC, DURATION } from "../../lib/motion";

export function ProblemStatement() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="top-right" size="md" intensity={0.02} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: headline + copy */}
          <Reveal variant="slideRight">
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-white mb-8">
              Legacy software requires humans to operate it.{" "}
              <br className="hidden md:block" />
              <span className="text-[#666]">That doesn&apos;t scale.</span>
            </h2>
            <p className="text-[#888] text-lg leading-relaxed max-w-lg">
              The bottleneck in modern enterprise is no longer data generation;
              it is data processing. Human-in-the-loop workflows create latency,
              introduce variance, and cap exponential growth.
            </p>
          </Reveal>

          {/* Right: data cards with staggered slide-in */}
          <RevealStagger stagger={0.12} className="font-mono text-sm space-y-4">
            <RevealItem>
              <m.div 
                className="p-6 rounded-xl border border-white/10 bg-[#080808] flex justify-between items-center hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 shadow-[0_0_16px_rgba(255,68,68,0.08)]"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(255,68,68,0.15)" }}
              >
                <span className="text-[#888]">Avg. Manual Processing Time</span>
                <span className="text-[#ff6b6b] font-semibold">14.2 mins / cycle</span>
              </m.div>
            </RevealItem>
            <RevealItem>
              <m.div 
                className="p-6 rounded-xl border border-white/10 bg-[#080808] flex justify-between items-center hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 shadow-[0_0_16px_rgba(255,68,68,0.08)]"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(255,68,68,0.15)" }}
              >
                <span className="text-[#888]">System Latency Overhead</span>
                <span className="text-[#ff6b6b] font-semibold">+ 28% YoY</span>
              </m.div>
            </RevealItem>
            <RevealItem>
              <m.div 
                className="p-6 rounded-xl border border-white/10 bg-[#080808] flex justify-between items-center hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 shadow-[0_0_16px_rgba(255,68,68,0.08)]"
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px rgba(255,68,68,0.15)" }}
              >
                <span className="text-[#888]">Error Rate (Human Factor)</span>
                <span className="text-[#ff6b6b] font-semibold">3.4% per 10k ops</span>
              </m.div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
