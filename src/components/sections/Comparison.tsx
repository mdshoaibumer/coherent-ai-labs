'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { AmbientGlow } from '../animations/AmbientGlow';

const COMPARISONS = [
  {
    typical: 'Template-based development',
    coherent: 'Architecture-first engineering',
  },
  {
    typical: 'Feature delivery',
    coherent: 'Business outcome delivery',
  },
  {
    typical: 'Generic automation scripts',
    coherent: 'Enterprise AI orchestration',
  },
  {
    typical: 'One-time project handoff',
    coherent: 'Long-term engineering partnership',
  },
  {
    typical: 'Minimal documentation',
    coherent: 'Living engineering documentation',
  },
  {
    typical: 'Reactive bug-fix support',
    coherent: 'Proactive optimization & monitoring',
  },
  {
    typical: 'Bolted-on security review',
    coherent: 'Security by design from day one',
  },
];

export function Comparison() {
  return (
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground mb-4 block font-mono text-[10px] tracking-widest uppercase">
              The Difference
            </span>
            <Heading level={2}>Not Another Software Agency</Heading>
            <Text size="lg">
              We engineer production-grade AI systems with the same rigor as the world&apos;s best
              internal engineering teams.
            </Text>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl">
          {/* Column headers */}
          <Reveal variant="fade">
            <div className="mb-6 grid grid-cols-[1fr_auto_1fr] gap-4 px-4">
              <span className="text-muted-foreground font-mono text-[10px] tracking-widest uppercase">
                Typical Agency
              </span>
              <span />
              <span className="text-foreground/80 text-right font-mono text-[10px] tracking-widest uppercase">
                Coherent AI Labs
              </span>
            </div>
          </Reveal>

          {/* Comparison rows */}
          <RevealStagger stagger={0.06} className="space-y-3">
            {COMPARISONS.map((row) => (
              <RevealItem key={row.typical}>
                <div className="bg-foreground/[0.015] border-foreground/[0.04] hover:border-foreground/[0.08] group grid grid-cols-[1fr_auto_1fr] items-center gap-4 rounded-xl border p-4 transition-colors">
                  <span className="text-muted-foreground group-hover:text-foreground/60 decoration-foreground/10 text-sm line-through transition-colors">
                    {row.typical}
                  </span>
                  <ArrowRight className="text-foreground/40 group-hover:text-foreground/60 h-4 w-4 shrink-0 transition-colors" />
                  <span className="text-foreground/80 group-hover:text-foreground text-right text-sm font-medium transition-colors">
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
