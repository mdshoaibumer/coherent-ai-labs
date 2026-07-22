'use client';
import React from 'react';
import { m } from 'motion/react';
import { ArrowRight, Activity } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { MagneticButton } from '../../animations/MagneticButton';
import { SplitText } from '../../animations/SplitText';
import { AmbientGlow, NoiseTexture } from '../../animations/AmbientGlow';
import { StatusIndicator } from '../../ui/StatusIndicator';
import { EASE_OUT_EXPO } from '../../../lib/motion';

export function PlatformHero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32 pb-24">
      {/* Atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.04} animate animationDuration={6} />
      <AmbientGlow position="bottom-right" size="md" intensity={0.02} />
      <NoiseTexture opacity={0.02} />

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Status badge */}
          <StatusIndicator label="Platform v2.0 — Production Ready" />

          {/* Headline */}
          <h1 className="font-display text-foreground mb-8 text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl">
            <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={10} yOffset={25}>
              The AI Infrastructure
            </SplitText>{' '}
            <span className="bg-gradient-to-r from-white via-white/80 to-[#555] bg-clip-text text-transparent">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.3} blur={10} yOffset={25}>
                for the Enterprise.
              </SplitText>
            </span>
          </h1>

          {/* Description */}
          <m.div
            initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.5, ease: EASE_OUT_EXPO }}
          >
            <Text size="xl" className="mb-10 max-w-2xl">
              Build, orchestrate, and scale secure AI applications. From autonomous agents to RAG
              pipelines — one platform, zero fragmentation.
            </Text>
          </m.div>

          {/* CTAs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE_OUT_EXPO }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <a href="/contact">
              <MagneticButton
                strength={28}
                className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[0_0_24px_rgba(255,255,255,0.08)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_36px_rgba(255,255,255,0.14)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
              >
                Request Technical Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            </a>
            <MagneticButton
              strength={20}
              className="focus-visible:ring-ring bg-accent text-foreground border-border hover:border-border-hover flex w-full items-center justify-center gap-3 rounded-xl border px-8 py-4 text-lg font-medium transition-all duration-300 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
            >
              <Activity className="text-muted-foreground h-4 w-4" />
              View Architecture
            </MagneticButton>
          </m.div>

          {/* Trust signals */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-muted-foreground/60 mt-14 flex flex-wrap items-center gap-6 font-mono text-xs tracking-widest uppercase"
          >
            <span>SOC 2 Type II</span>
            <div className="h-1 w-1 rounded-full bg-[#333]" />
            <span>99.99% SLA</span>
            <div className="h-1 w-1 rounded-full bg-[#333]" />
            <span>Private VPC</span>
            <div className="h-1 w-1 rounded-full bg-[#333]" />
            <span>Multi-Region</span>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
