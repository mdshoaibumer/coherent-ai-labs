"use client";
import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Activity } from "lucide-react";
import { NeuralCanvas } from "../illustrations/NeuralCanvas";
import { ScrollIndicator } from "../ui/ScrollIndicator";
import { Text } from "../ui/Text";
import { SplitText } from "../animations/SplitText";
import { MagneticButton } from "../animations/MagneticButton";
import { useMousePosition } from "../../hooks/useMousePosition";
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from "../../lib/motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const maskOpacity = useTransform(scrollYProgress, [0.35, 0.9], [0, 1]);

  const { normalizedX, normalizedY } = useMousePosition(containerRef, {
    stiffness: 25,
    damping: 40,
    mass: 1.2,
  });

  const glowX = useTransform(normalizedX, (v) => v * -25);
  const glowY = useTransform(normalizedY, (v) => v * -18);

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-center overflow-hidden bg-[#020202]"
    >
      {/* ═══ LAYER 0: Background atmosphere ═══ */}
      <div className="absolute inset-0 z-0">
        {/* Neural network canvas */}
        <NeuralCanvas
          connectionDistance={115}
          mouseRadius={170}
          accent="0, 200, 255"
        />

        {/* Layered depth glow system */}
        {/* Primary accent glow — blue core */}
        <m.div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ x: glowX, y: glowY }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.04)_0%,rgba(0,200,255,0.008)_40%,transparent_70%)] blur-[80px]" />
        </m.div>

        {/* Secondary white glow — volumetric depth */}
        <m.div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ x: glowX, y: glowY }}
        >
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_60%)] blur-[100px]" />
        </m.div>

        {/* Abstract Hero Visualization */}
        <m.div 
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] max-w-[100vw] opacity-25 pointer-events-none mix-blend-screen" 
          animate={{ opacity: [0.2, 0.28, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)" }}>
          <img src="/assets/images/home_hero_ai.png" alt="AI Core" className="w-full h-full object-cover" />
        </m.div>

        {/* Accent particle field */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-[#00c8ff] rounded-full opacity-30 blur-0.5" style={{ animation: "float 12s ease-in-out infinite" }} />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#00c8ff] rounded-full opacity-20 blur-0.5" style={{ animation: "float 14s ease-in-out infinite 2s" }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-20 blur-0.5" style={{ animation: "float 15s ease-in-out infinite 4s" }} />
        </div>

        {/* Film grain — enhanced for cinematic feel */}
        <div
          className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Scroll dissolution with enhanced gradient */}
        <m.div
          className="absolute bottom-0 left-0 right-0 h-[50%] pointer-events-none z-20"
          style={{
            opacity: maskOpacity,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(2,2,2,0.3) 30%, rgba(2,2,2,0.8) 70%, rgba(2,2,2,1) 100%)",
          }}
        />
      </div>

      {/* ═══ LAYER 1: Content ═══ */}
      <m.div
        style={{ opacity, y, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center will-change-transform"
      >
        {/* Status badge */}
        <m.div
          initial={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT_CUBIC }}
          className="mb-8"
        >
          <m.div 
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#888] tracking-wider backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/[0.08] transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c8ff] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c8ff]" />
            </span>
            AI Platform Active
            <span className="text-[#555]">·</span>
            <span className="text-[#666]">Enterprise Ready</span>
          </m.div>
        </m.div>

        {/* Headline */}
        <h1 className="font-display font-bold tracking-[-0.02em] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-4xl mb-7">
          <SplitText
            splitBy="word"
            staggerDelay={0.05}
            baseDelay={0.18}
            duration={0.95}
            blur={12}
            yOffset={35}
          >
            Engineering
          </SplitText>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-white to-white">
            <SplitText
              splitBy="word"
              staggerDelay={0.05}
              baseDelay={0.42}
              duration={0.95}
              blur={12}
              yOffset={35}
            >
              intelligent software
            </SplitText>
          </span>{" "}
          <SplitText
            splitBy="word"
            staggerDelay={0.05}
            baseDelay={0.72}
            duration={0.95}
            blur={12}
            yOffset={35}
          >
            for the AI era.
          </SplitText>
        </h1>

        {/* Description */}
        <m.div
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.85, ease: EASE_OUT_EXPO }}
        >
          <Text className="max-w-xl text-[#888] text-base sm:text-lg md:text-xl leading-relaxed">
            We build autonomous AI agents, enterprise platforms, and intelligent
            automation systems that operate at scale — securely, reliably, and continuously.
          </Text>
        </m.div>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE_OUT_CUBIC }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="/contact" className="w-full sm:w-auto">
            <MagneticButton
              strength={32}
              className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c8ff]/50 outline-none bg-white text-black hover:bg-gray-50 px-8 py-4 text-base shadow-[0_0_30px_rgba(0,200,255,0.12),0_0_50px_rgba(255,255,255,0.08)] hover:shadow-[0_0_40px_rgba(0,200,255,0.2),0_0_80px_rgba(255,255,255,0.12)]"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </a>
          <a href="/platform" className="w-full sm:w-auto">
            <MagneticButton
              strength={24}
              className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 outline-none bg-white/[0.05] text-[#ddd] border border-white/[0.1] hover:bg-white/[0.08] hover:border-white/20 hover:text-white px-8 py-4 text-base backdrop-blur-md shadow-[0_0_20px_rgba(0,200,255,0.05)]"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <Activity className="w-4 h-4 text-[#00c8ff]/70 group-hover:text-[#00c8ff]" />
              Explore Platform
            </MagneticButton>
          </a>
        </m.div>

        {/* Trust signals */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[11px] font-mono text-[#555] tracking-widest uppercase"
        >
          <span>SOC 2 Compliant</span>
          <span className="text-[#333]">·</span>
          <span>99.99% Availability</span>
          <span className="text-[#333]">·</span>
          <span>Private VPC</span>
          <span className="text-[#333]">·</span>
          <span>Multi-Region</span>
        </m.div>
      </m.div>

      <ScrollIndicator />
    </section>
  );
}
