'use client';
import { m } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from '../../lib/motion';

import { DIFFERENTIATORS, PRINCIPLES } from '../../constants/whyUs';

export function WhyUs() {
  return (
    <section id="why-us" className="bg-background relative overflow-hidden py-32">
      {/* Background Lighting — layered depth */}
      <div className="bg-foreground/[0.03] pointer-events-none absolute top-1/4 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 h-[300px] w-[600px] bg-[radial-gradient(ellipse,rgba(var(--foreground),0.02)_0%,transparent_70%)] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: EASE_OUT_CUBIC }}
          >
            <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
              Why Engineering Teams Choose Coherent AI Labs
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We build AI-native software with a focus on scalability, maintainability, security,
              and measurable business outcomes.
            </p>
          </m.div>
        </div>

        <div className="mb-24 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIATORS.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 28, scale: 0.96, filter: 'blur(4px)' }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_OUT_CUBIC }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group bg-card border-foreground/5 hover:border-foreground/25 hover:bg-foreground/[0.02] focus-visible:ring-foreground relative overflow-hidden rounded-2xl border p-8 shadow-[0_0_0_rgba(var(--foreground),0),inset_0_0_0_rgba(var(--foreground),0)] transition-all duration-500 outline-none hover:shadow-[0_0_20px_rgba(var(--foreground),0.05),inset_0_1px_1px_rgba(var(--foreground),0.05)] focus-visible:ring-2"
              tabIndex={0}
            >
              <div className="from-foreground/[0.04] absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(var(--foreground),0.05)_0%,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <m.div
                  className="bg-foreground/5 border-foreground/15 group-hover:border-foreground/40 mb-6 flex h-12 w-12 items-center justify-center rounded-xl border shadow-[0_0_12px_rgba(var(--foreground),0.05)] transition-all duration-500"
                  whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(var(--foreground),0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon
                    className="text-muted-foreground group-hover:text-foreground h-6 w-6 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </m.div>

                <h3 className="font-display text-foreground mb-3 text-xl font-medium tracking-tight">
                  {item.title}
                </h3>

                <p className="text-muted-foreground mb-8 flex-1 text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="border-foreground/5 flex items-center gap-2 border-t pt-4">
                  <span className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
                    Business Value
                  </span>
                  <div className="bg-foreground/20 mx-2 h-1 w-1 rounded-full" />
                  <span className="text-foreground/80 text-xs font-medium">{item.value}</span>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Engineering Principles */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl"
        >
          <div className="mb-10 text-center">
            <h3 className="font-display text-muted-foreground font-mono text-sm tracking-widest uppercase">
              Core Engineering Principles
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {PRINCIPLES.map((principle) => (
              <div
                key={principle}
                className="bg-foreground/[0.02] border-foreground/5 hover:bg-foreground/[0.04] flex items-center gap-3 rounded-full border px-5 py-3 transition-colors"
              >
                <CheckCircle2 className="text-muted-foreground h-4 w-4" strokeWidth={2} />
                <span className="text-muted-foreground text-sm font-medium">{principle}</span>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
