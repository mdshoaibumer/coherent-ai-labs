import { useState } from "react";
import {m } from "motion/react";
import { cn } from "../../lib/utils";


import { TRUST_PILLARS, ENGINEERING_PRACTICES } from "../../constants/trust";

export function EnterpriseTrust() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="trust" className="py-32 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Built for Security, Reliability, and Long-Term Growth
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              Every solution we engineer is designed with security, scalability, maintainability, and operational excellence as foundational principles.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
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
                  "relative p-8 rounded-2xl border transition-all duration-500 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white",
                  isHovered ? "bg-[#0a0a0a] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" : "bg-[#050505] border-white/5"
                )}
                tabIndex={0}
                onFocus={() => setHoveredId(pillar.id)}
                onBlur={() => setHoveredId(null)}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500" style={{ opacity: isHovered ? 1 : 0 }} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "p-3 rounded-xl border transition-colors duration-500",
                      isHovered ? "bg-white/10 border-white/20" : "bg-white/5 border-white/5"
                    )}>
                      <pillar.icon className={cn(
                        "w-6 h-6 transition-colors duration-500",
                        isHovered ? "text-white" : "text-[#888]"
                      )} strokeWidth={1.5} />
                    </div>
                    <h3 className={cn(
                      "font-display text-xl font-medium tracking-tight transition-colors duration-500",
                      isHovered ? "text-white" : "text-[#aaa]"
                    )}>
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
                            opacity: isHovered ? 1 : 0.4
                          }}
                          transition={{ duration: 0.4, delay: idx * 0.05 }}
                          className="w-1.5 h-1.5 rounded-full bg-white shrink-0"
                        />
                        <span className={cn(
                          "text-sm transition-colors duration-500",
                          isHovered ? "text-[#ccc]" : "text-[#666]"
                        )}>
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
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-sm font-mono tracking-widest text-[#555] uppercase">Engineering Standards</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {ENGINEERING_PRACTICES.map((practice, index) => (
              <m.div 
                key={practice}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/5 hover:border-white/20 transition-all cursor-default"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/80 transition-colors" />
                <span className="text-sm font-medium text-[#888] group-hover:text-white transition-colors">{practice}</span>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}

