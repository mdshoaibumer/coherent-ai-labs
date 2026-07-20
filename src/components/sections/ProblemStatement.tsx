import {m } from "motion/react";

export function ProblemStatement() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight leading-tight text-white mb-8">
                Legacy software requires humans to operate it. <br className="hidden md:block" />
                <span className="text-[#666]">That doesn't scale.</span>
              </h2>
              <p className="text-[#888] text-lg leading-relaxed max-w-lg">
                The bottleneck in modern enterprise is no longer data generation; it is data processing. Human-in-the-loop workflows create latency, introduce variance, and cap exponential growth.
              </p>
            </m.div>
          </div>

          <div className="font-mono text-sm space-y-4">
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl border border-white/5 bg-[#050505] flex justify-between items-center hover:border-white/10 transition-colors"
            >
              <span className="text-[#666]">Avg. Manual Processing Time</span>
              <span className="text-[#ff4444]">14.2 mins / cycle</span>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl border border-white/5 bg-[#050505] flex justify-between items-center hover:border-white/10 transition-colors"
            >
              <span className="text-[#666]">System Latency Overhead</span>
              <span className="text-[#ff4444]">+ 28% YoY</span>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-6 rounded-xl border border-white/5 bg-[#050505] flex justify-between items-center hover:border-white/10 transition-colors"
            >
              <span className="text-[#666]">Error Rate (Human Factor)</span>
              <span className="text-[#ff4444]">3.4% per 10k ops</span>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
