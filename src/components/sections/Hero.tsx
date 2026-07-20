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
import { EASE_OUT_EXPO } from "../../lib/motion";

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

        {/* Cinematic glow — mouse-tracked, accent-tinted */}
        <m.div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ x: glowX, y: glowY }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.025)_0%,rgba(0,200,255,0.005)_35%,transparent_65%)]" />
        </m.div>

        {/* Abstract Hero Visualization */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] max-w-[100vw] opacity-20 pointer-events-none mix-blend-screen" style={{ maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)" }}>
          <img src="/assets/images/home_hero_ai.png" alt="AI Core" className="w-full h-full object-cover animate-pulse-slow" />
        </div>

        {/* White warmth glow on headline area */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />

        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          }}
        />

        {/* Scroll dissolution */}
        <m.div
          className="absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none z-20"
          style={{
            opacity: maskOpacity,
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(2,2,2,0.7) 50%, rgba(2,2,2,1) 100%)",
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
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-[#888] tracking-wider backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c8ff] opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00c8ff]" />
            </span>
            AI Platform Active
            <span className="text-[#555]">·</span>
            <span className="text-[#666]">Enterprise Ready</span>
          </div>
        </m.div>

        {/* Headline */}
        <h1 className="font-display font-bold tracking-[-0.02em] text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] max-w-4xl mb-7">
          <SplitText
            splitBy="word"
            staggerDelay={0.045}
            baseDelay={0.15}
            duration={0.8}
            blur={10}
            yOffset={30}
          >
            Engineering
          </SplitText>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c8ff] via-white to-white">
            <SplitText
              splitBy="word"
              staggerDelay={0.045}
              baseDelay={0.35}
              duration={0.8}
              blur={10}
              yOffset={30}
            >
              intelligent software
            </SplitText>
          </span>{" "}
          <SplitText
            splitBy="word"
            staggerDelay={0.045}
            baseDelay={0.6}
            duration={0.8}
            blur={10}
            yOffset={30}
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE_OUT_EXPO }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href="/contact" className="w-full sm:w-auto">
            <MagneticButton
              strength={28}
              className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00c8ff]/50 outline-none bg-white text-black hover:bg-gray-50 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-base shadow-[0_0_20px_rgba(0,200,255,0.08),0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(0,200,255,0.15),0_0_60px_rgba(255,255,255,0.08)]"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
          </a>
          <a href="/platform" className="w-full sm:w-auto">
            <MagneticButton
              strength={20}
              className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 outline-none bg-white/[0.04] text-[#ccc] border border-white/[0.08] hover:bg-white/[0.07] hover:border-white/15 hover:text-white px-8 py-4 text-base backdrop-blur-sm"
            >
              <Activity className="w-4 h-4 text-[#00c8ff]/60 group-hover:text-[#00c8ff]" />
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
