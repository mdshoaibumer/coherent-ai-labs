"use client";
import React from "react";
import { m } from "motion/react";
import { ArrowRight, Activity } from "lucide-react";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { MagneticButton } from "../../animations/MagneticButton";
import { SplitText } from "../../animations/SplitText";
import { AmbientGlow, NoiseTexture } from "../../animations/AmbientGlow";
import { StatusIndicator } from "../../ui/StatusIndicator";
import { EASE_OUT_EXPO } from "../../../lib/motion";

export function PlatformHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-32 pb-24 overflow-hidden">
      {/* Atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.04} animate animationDuration={6} />
      <AmbientGlow position="bottom-right" size="md" intensity={0.02} />
      <NoiseTexture opacity={0.02} />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <StatusIndicator label="Platform v2.0 — Production Ready" />

          {/* Headline */}
          <h1 className="font-display font-bold tracking-tight text-white text-5xl md:text-7xl leading-[1.05] mb-8">
            <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={10} yOffset={25}>
              The AI Infrastructure
            </SplitText>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#555]">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.3} blur={10} yOffset={25}>
                for the Enterprise.
              </SplitText>
            </span>
          </h1>

          {/* Description */}
          <m.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT_EXPO }}
          >
            <Text size="xl" className="max-w-2xl mb-10">
              Build, orchestrate, and scale secure AI applications. From autonomous agents to RAG pipelines — one platform, zero fragmentation.
            </Text>
          </m.div>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE_OUT_EXPO }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="/contact">
              <MagneticButton
                strength={28}
                className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:shadow-[0_0_36px_rgba(255,255,255,0.14)]"
              >
                Request Technical Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            </a>
            <MagneticButton
              strength={20}
              className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
            >
              <Activity className="w-4 h-4 text-[#888]" />
              View Architecture
            </MagneticButton>
          </m.div>

          {/* Trust signals */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-14 flex flex-wrap items-center gap-6 text-xs font-mono text-[#555] tracking-widest uppercase"
          >
            <span>SOC 2 Type II</span>
            <div className="w-1 h-1 rounded-full bg-[#333]" />
            <span>99.99% SLA</span>
            <div className="w-1 h-1 rounded-full bg-[#333]" />
            <span>Private VPC</span>
            <div className="w-1 h-1 rounded-full bg-[#333]" />
            <span>Multi-Region</span>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
