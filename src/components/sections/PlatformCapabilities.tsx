'use client';
import { m } from 'motion/react';
import { RevealStagger, RevealItem, Reveal } from '../animations/Reveal';
import { EASE_OUT_CUBIC } from '../../lib/motion';

export function PlatformCapabilities() {
  const CAPABILITIES = [
    {
      id: '01',
      name: 'Deterministic Outputs',
      desc: 'Forcing probabilistic models to return structured JSON schemas for programmatic reliability.',
      metric: '99.7% Schema Compliance',
    },
    {
      id: '02',
      name: 'Semantic Routing',
      desc: 'Dynamically routing queries to specialized smaller models to reduce cost and latency.',
      metric: '3x Cost Reduction',
    },
    {
      id: '03',
      name: 'Real-time Telemetry',
      desc: 'Full observability into agent reasoning loops and token consumption metrics.',
      metric: '<50ms Latency',
    },
  ];

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* Subtle grid background */}
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
        style={{
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 30%, black 70%, transparent 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal variant="fadeUp" className="mb-14">
          <p className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
            Platform Intelligence
          </p>
        </Reveal>

        <RevealStagger stagger={0.15} className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <RevealItem key={cap.id}>
              <m.div
                className="group border-border hover:bg-accent/50 border-t py-10 pr-10 transition-colors duration-500 first:border-t-0 md:border-t-0 md:border-l md:pr-0 md:pl-10 first:md:border-l-0 first:md:pl-0"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.4, ease: EASE_OUT_CUBIC }}
              >
                <div className="text-text-caption mb-5 font-mono text-[10px] tracking-[0.2em]">
                  [{cap.id}]
                </div>
                <h4 className="font-display text-foreground mb-3 text-lg font-medium tracking-tight">
                  {cap.name}
                </h4>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{cap.desc}</p>
                <div className="font-mono text-[11px] tracking-wide text-[var(--signal-color)] opacity-60 transition-opacity duration-500 group-hover:opacity-100">
                  {cap.metric}
                </div>
              </m.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
