'use client';
import { m } from 'motion/react';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { AmbientGlow } from '../animations/AmbientGlow';
import { EASE_OUT_EXPO, EASE_OUT_CUBIC, DURATION } from '../../lib/motion';

export function ProblemStatement() {
  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <AmbientGlow position="top-right" size="md" intensity={0.02} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          {/* Left: headline + copy */}
          <Reveal variant="slideRight">
            <h2 className="font-display text-foreground mb-8 text-4xl leading-tight font-medium tracking-tight md:text-5xl">
              Legacy software requires humans to operate it. <br className="hidden md:block" />
              <span className="text-muted-foreground">That doesn&apos;t scale.</span>
            </h2>
            <p className="text-muted-foreground max-w-lg text-lg leading-relaxed">
              The bottleneck in modern enterprise is no longer data generation; it is data
              processing. Human-in-the-loop workflows create latency, introduce variance, and cap
              exponential growth.
            </p>
          </Reveal>

          {/* Right: data cards with staggered slide-in */}
          <RevealStagger stagger={0.12} className="space-y-4 font-mono text-sm">
            <RevealItem>
              <m.div
                className="border-border bg-card hover:border-border-hover hover:bg-accent flex items-center justify-between rounded-2xl border p-6 transition-all duration-500"
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-muted-foreground">Avg. Manual Processing Time</span>
                <span className="font-semibold text-red-400">14.2 mins / cycle</span>
              </m.div>
            </RevealItem>
            <RevealItem>
              <m.div
                className="border-border bg-card hover:border-border-hover hover:bg-accent flex items-center justify-between rounded-2xl border p-6 transition-all duration-500"
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-muted-foreground">System Latency Overhead</span>
                <span className="font-semibold text-red-400">+ 28% YoY</span>
              </m.div>
            </RevealItem>
            <RevealItem>
              <m.div
                className="border-border bg-card hover:border-border-hover hover:bg-accent flex items-center justify-between rounded-2xl border p-6 transition-all duration-500"
                whileHover={{ scale: 1.01 }}
              >
                <span className="text-muted-foreground">Error Rate (Human Factor)</span>
                <span className="font-semibold text-red-400">3.4% per 10k ops</span>
              </m.div>
            </RevealItem>
          </RevealStagger>
        </div>
      </div>
    </section>
  );
}
