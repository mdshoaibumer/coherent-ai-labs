'use client';
import { useState } from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';
import { AmbientGlow, NoiseTexture } from '../animations/AmbientGlow';
import { EASE_OUT_EXPO } from '../../lib/motion';

import { TRUST_PILLARS, ENGINEERING_PRACTICES } from '../../constants/trust';

export function EnterpriseTrust() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="trust" className="bg-background relative overflow-hidden py-32">
      {/* Background atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.025} />
      <NoiseTexture opacity={0.015} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
          <m.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
              Built for Security, Reliability, and Long-Term Growth
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every solution we engineer is designed with security, scalability, maintainability,
              and operational excellence as foundational principles.
            </p>
          </m.div>
        </div>

        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TRUST_PILLARS.map((pillar, i) => {
            const isHovered = hoveredId === pillar.id;

            return (
              <m.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'focus-visible:ring-foreground relative overflow-hidden rounded-2xl border p-8 transition-all duration-500 outline-none focus-visible:ring-2',
                  isHovered
                    ? 'bg-foreground/[0.03] border-foreground/20 shadow-[0_0_30px_rgba(var(--foreground),0.05)]'
                    : 'bg-card border-foreground/5',
                )}
                tabIndex={0}
                onFocus={() => setHoveredId(pillar.id)}
                onBlur={() => setHoveredId(null)}
              >
                <div
                  className="via-foreground/10 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={cn(
                        'rounded-xl border p-3 transition-colors duration-500',
                        isHovered
                          ? 'bg-foreground/10 border-foreground/20'
                          : 'bg-foreground/5 border-foreground/5',
                      )}
                    >
                      <pillar.icon
                        className={cn(
                          'h-6 w-6 transition-colors duration-500',
                          isHovered ? 'text-foreground' : 'text-muted-foreground',
                        )}
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3
                      className={cn(
                        'font-display text-xl font-medium tracking-tight transition-colors duration-500',
                        isHovered ? 'text-foreground' : 'text-muted-foreground',
                      )}
                    >
                      {pillar.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {pillar.items.map((item, idx) => (
                      <li key={item} className="flex items-center gap-3">
                        <m.div
                          initial={false}
                          animate={{
                            scale: isHovered ? [1, 1.2, 1] : 1,
                            opacity: isHovered ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-foreground h-1.5 w-1.5 shrink-0 rounded-full"
                        />
                        <span
                          className={cn(
                            'text-sm transition-colors duration-500',
                            isHovered ? 'text-foreground' : 'text-muted-foreground',
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </m.div>
            );
          })}
        </div>

        {/* Engineering Practices */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-10 text-center">
            <h3 className="font-display text-muted-foreground font-mono text-sm tracking-widest uppercase">
              Engineering Standards
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {ENGINEERING_PRACTICES.map((practice, index) => (
              <m.div
                key={practice}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-foreground/[0.02] border-foreground/5 hover:bg-foreground/5 hover:border-foreground/20 flex cursor-default items-center gap-2 rounded-full border px-5 py-2.5 transition-all"
              >
                <div className="bg-foreground/20 group-hover:bg-foreground/80 h-1.5 w-1.5 rounded-full transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors">
                  {practice}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
