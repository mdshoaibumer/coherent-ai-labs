'use client';
import { useState } from 'react';
import { m } from 'motion/react';
import { STAGES, TECH_HIGHLIGHTS } from '../../constants/featuredProject';
import { ProcessTimeline } from './featured/ProcessTimeline';
import { ArchitectureDiagram } from './featured/ArchitectureDiagram';
import { EASE_OUT_EXPO } from '../../lib/motion';

export function FeaturedProject() {
  const [activeStage, setActiveStage] = useState(STAGES[0].id);

  return (
    <section id="solution" className="bg-background relative overflow-hidden py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(var(--foreground),0.03)_0%,rgba(0,0,0,0)_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 flex max-w-3xl flex-col items-start">
          <span className="text-muted-foreground border-foreground/10 bg-foreground/[0.02] mb-6 rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
            Representative Solution
          </span>
          <m.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
              From Business Challenge to Intelligent Solution
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              See how we approach complex business problems using AI, automation, and modern
              software engineering.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Timeline Process Flow */}
          <div className="relative lg:col-span-5">
            <div className="via-foreground/10 absolute top-10 bottom-10 left-[38px] hidden w-px bg-gradient-to-b from-transparent to-transparent md:block" />

            <ProcessTimeline activeStage={activeStage} onSetActiveStage={setActiveStage} />
          </div>

          {/* Architecture Visualization */}
          <div className="flex flex-col gap-8 lg:col-span-7">
            <ArchitectureDiagram />

            {/* Tech Highlights */}
            <div className="bg-card border-foreground/5 rounded-2xl border p-8 shadow-xl">
              <h4 className="font-display text-muted-foreground mb-6 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
                Technology Highlights
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {TECH_HIGHLIGHTS.map((tech, i) => (
                  <m.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-foreground/[0.03] border-foreground/5 text-muted-foreground hover:text-foreground hover:border-foreground/20 cursor-default rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300"
                  >
                    {tech}
                  </m.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
