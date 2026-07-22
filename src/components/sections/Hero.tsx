'use client';
import { m, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Signal } from '../illustrations/Icons';
import { NeuralCore3D } from '../illustrations/NeuralCore3D';
import { ScrollIndicator } from '../ui/ScrollIndicator';
import { Text } from '../ui/Text';
import { SplitText } from '../animations/SplitText';
import { MagneticButton } from '../animations/MagneticButton';
import { useMousePosition } from '../../hooks/useMousePosition';
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from '../../lib/motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const maskOpacity = useTransform(scrollYProgress, [0.15, 0.85], [0, 1]);
  const meshScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  const meshOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const { normalizedX, normalizedY } = useMousePosition(containerRef, {
    stiffness: 12,
    damping: 80,
    mass: 2.5,
  });

  const glowX = useTransform(normalizedX, (v) => v * -35);
  const glowY = useTransform(normalizedY, (v) => v * -25);
  const meshX = useTransform(normalizedX, (v) => v * 8);
  const meshY = useTransform(normalizedY, (v) => v * 5);

  return (
    <section
      ref={containerRef}
      className="bg-background relative flex h-screen min-h-[800px] flex-col items-center justify-center overflow-hidden"
    >
      {/* ═══ LAYER 0: Deep Atmospheric Background ═══ */}
      <div className="absolute inset-0 z-0">
        {/* Noise grain for tactile depth */}
        <div
          className="noise-grain pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay dark:opacity-[0.025]"
          aria-hidden="true"
        />

        {/* Primary ambient light — mouse reactive */}
        <m.div
          className="pointer-events-none absolute inset-0 will-change-transform"
          style={{ x: glowX, y: glowY }}
          aria-hidden="true"
        >
          <div className="absolute top-[40%] left-1/2 h-[900px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_65%)] blur-[120px]" />
        </m.div>

        {/* Secondary volumetric glow — fixed position, creates depth */}
        <div
          className="pointer-events-none absolute top-[15%] left-[20%] h-[500px] w-[600px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-20 blur-[100px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-[15%] bottom-[30%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-10 blur-[80px]"
          aria-hidden="true"
        />

        {/* 3D Intelligence Mesh — mouse parallax */}
        <m.div
          className="pointer-events-none absolute top-[2%] left-1/2 h-[1200px] w-[1200px] max-w-[150vw] -translate-x-1/2"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3, ease: EASE_OUT_EXPO }}
          style={{
            x: meshX,
            y: meshY,
            scale: meshScale,
            opacity: meshOpacity,
            maskImage: 'radial-gradient(circle at center, black 20%, transparent 55%)',
            WebkitMaskImage: 'radial-gradient(circle at center, black 20%, transparent 55%)',
          }}
          aria-hidden="true"
        >
          <NeuralCore3D />
        </m.div>

        {/* Architectural grid overlay — extremely subtle */}
        <div
          className="bg-grid pointer-events-none absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        {/* Radial vignette — deeper, more cinematic */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,var(--background)_70%)]"
          aria-hidden="true"
        />

        {/* Bottom dissolution — smooth section transition */}
        <m.div
          className="pointer-events-none absolute right-0 bottom-0 left-0 z-20 h-[60%]"
          style={{
            opacity: maskOpacity,
            background: 'linear-gradient(to bottom, transparent 0%, var(--background) 90%)',
          }}
          aria-hidden="true"
        />
      </div>

      {/* ═══ LAYER 1: Content ═══ */}
      <m.div
        style={{ opacity, y, scale }}
        className="relative z-10 mx-auto flex w-full max-w-[52rem] flex-col items-center px-6 pt-[6vh] text-center will-change-transform"
      >
        {/* Status signal — communicates live system intelligence */}
        <m.div
          initial={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.1, ease: EASE_OUT_CUBIC }}
          className="mb-14"
        >
          <div className="glass-panel-elevated text-muted-foreground inline-flex items-center gap-3 rounded-full px-5 py-2.5 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--signal-color)] opacity-40" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--signal-color)]" />
            </span>
            Systems Operational
          </div>
        </m.div>

        {/* Headline — Refined hierarchy with editorial weight distribution */}
        <h1 className="font-display text-foreground mb-8 max-w-[52rem] text-[clamp(2.8rem,7.5vw,5.8rem)] leading-[0.98] font-semibold tracking-[-0.04em]">
          <SplitText
            splitBy="word"
            staggerDelay={0.05}
            baseDelay={0.25}
            duration={1.2}
            blur={14}
            yOffset={35}
          >
            Engineering
          </SplitText>{' '}
          <span className="text-muted-foreground">
            <SplitText
              splitBy="word"
              staggerDelay={0.05}
              baseDelay={0.4}
              duration={1.2}
              blur={14}
              yOffset={35}
            >
              intelligent
            </SplitText>
          </span>
          <br />
          <span className="text-muted-foreground">
            <SplitText
              splitBy="word"
              staggerDelay={0.05}
              baseDelay={0.55}
              duration={1.2}
              blur={14}
              yOffset={35}
            >
              software
            </SplitText>
          </span>{' '}
          <SplitText
            splitBy="word"
            staggerDelay={0.05}
            baseDelay={0.65}
            duration={1.2}
            blur={14}
            yOffset={35}
          >
            for the AI era.
          </SplitText>
        </h1>

        {/* Subheadline — refined line length and editorial clarity */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, delay: 0.9, ease: EASE_OUT_EXPO }}
        >
          <Text className="text-muted-foreground mx-auto max-w-lg text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.75] tracking-[-0.01em]">
            Autonomous AI agents, enterprise platforms, and intelligent systems that operate at
            scale — securely and continuously.
          </Text>
        </m.div>

        {/* CTA Group — premium treatment */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.1, delay: 1.2, ease: EASE_OUT_CUBIC }}
          className="mt-14 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="/contact" className="w-full sm:w-auto">
            <MagneticButton
              strength={25}
              className="group bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-[-0.01em] shadow-[var(--shadow-lg)] transition-all duration-600 hover:scale-[1.03] hover:shadow-[var(--shadow-xl)] sm:w-auto"
            >
              Book Discovery Call
              <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
            </MagneticButton>
          </a>
          <a href="/platform" className="w-full sm:w-auto">
            <MagneticButton
              strength={18}
              className="group glass-panel text-muted-foreground hover:text-foreground flex w-full items-center justify-center gap-3 rounded-full px-8 py-4 text-sm font-medium tracking-[-0.01em] transition-all duration-600 hover:border-[var(--border-hover)] sm:w-auto"
            >
              <Signal
                className="h-3.5 w-3.5 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
                size={14}
              />
              Explore Platform
            </MagneticButton>
          </a>
        </m.div>

        {/* Enterprise trust signals — refined spacing and weight */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.8 }}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.18em] uppercase"
          aria-label="Enterprise certifications"
        >
          <span className="text-text-subtle">SOC 2 Type II</span>
          <span className="bg-border h-3 w-px opacity-50" aria-hidden="true" />
          <span className="text-text-subtle">99.99% Uptime</span>
          <span className="bg-border h-3 w-px opacity-50" aria-hidden="true" />
          <span className="text-text-subtle">Private VPC</span>
        </m.div>
      </m.div>

      <ScrollIndicator />
    </section>
  );
}
