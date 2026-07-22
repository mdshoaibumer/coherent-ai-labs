'use client';
import { useState } from 'react';
import { m, useMotionValue, useTransform } from 'motion/react';
import { cn } from '../../lib/utils';
import { AmbientGlow, NoiseTexture } from '../animations/AmbientGlow';
import { EASE_OUT_EXPO } from '../../lib/motion';
import { Shield, Zap, Layers } from '../illustrations/Icons';

// Override the constants directly here to use the custom icons instead of the ones in constants/trust
const TRUST_PILLARS = [
  {
    id: 'security',
    title: 'Bank-Grade Security',
    icon: Shield,
    items: ['SOC 2 Type II Certified', 'End-to-End Encryption', 'Private VPC Deployments'],
  },
  {
    id: 'reliability',
    title: 'High Availability',
    icon: Zap,
    items: ['99.99% Guaranteed Uptime', 'Multi-Region Failover', 'Zero-Downtime Updates'],
  },
  {
    id: 'architecture',
    title: 'Modular Architecture',
    icon: Layers,
    items: ['Microservices Design', 'Extensible API First', 'Cloud-Agnostic Build'],
  },
];

const ENGINEERING_PRACTICES = [
  'Test-Driven Development',
  'Continuous Integration',
  'Infrastructure as Code',
  'Automated QA',
  'Code Reviews',
];

export function EnterpriseTrust() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="trust" className="bg-background relative overflow-hidden py-32 md:py-40">
      {/* Background atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.02} />
      <NoiseTexture opacity={0.015} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
          <m.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
              Engineered for Scale and Security
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every solution we build is designed with security, maintainability, and operational
              excellence as foundational engineering principles.
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
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHoveredId(pillar.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={cn(
                  'focus-visible:ring-foreground relative overflow-hidden rounded-2xl border p-8 transition-all duration-600 outline-none focus-visible:ring-2',
                  isHovered
                    ? 'bg-foreground/[0.02] border-border-hover shadow-[var(--shadow-sm)]'
                    : 'bg-card border-border',
                )}
                tabIndex={0}
                onFocus={() => setHoveredId(pillar.id)}
                onBlur={() => setHoveredId(null)}
              >
                {/* Subtle inner top highlight */}
                <div
                  className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center gap-4">
                    <div
                      className={cn(
                        'rounded-xl border p-3 transition-colors duration-500',
                        isHovered
                          ? 'bg-foreground/5 border-border-hover text-foreground'
                          : 'border-border text-muted-foreground bg-transparent',
                      )}
                    >
                      <pillar.icon size={22} strokeWidth={1.5} />
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
                            opacity: isHovered ? 1 : 0.3,
                          }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="bg-foreground h-1 w-1 shrink-0 rounded-full"
                        />
                        <span
                          className={cn(
                            'text-sm transition-colors duration-500',
                            isHovered ? 'text-foreground' : 'text-muted-foreground/80',
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
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-8 text-center">
            <h3 className="text-muted-foreground font-mono text-[10px] tracking-[0.2em] uppercase">
              Engineering Standards
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {ENGINEERING_PRACTICES.map((practice, index) => (
              <m.div
                key={practice}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group border-border hover:bg-foreground/[0.03] hover:border-foreground/20 flex cursor-default items-center gap-2 rounded-full border px-4 py-2 transition-colors duration-300"
              >
                <div className="bg-foreground/20 group-hover:bg-foreground/60 h-1.5 w-1.5 rounded-full transition-colors duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground text-xs font-medium tracking-wide transition-colors duration-300">
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
