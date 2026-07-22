"use client";
import {m } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from "../../lib/motion";

import { DIFFERENTIATORS, PRINCIPLES } from "../../constants/whyUs";

export function WhyUs() {
  return (
    <section id="why-us" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background Lighting — layered depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(0,200,255,0.02)_0%,transparent_70%)] blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: EASE_OUT_CUBIC }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Why Engineering Teams Choose Coherent AI Labs
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              We build AI-native software with a focus on scalability, maintainability, security, and measurable business outcomes.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {DIFFERENTIATORS.map((item, i) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 28, scale: 0.96, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE_OUT_CUBIC }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-[#080808] border border-white/8 hover:border-white/25 hover:bg-white/[0.02] transition-all duration-500 overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_0_0_rgba(0,200,255,0),inset_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_20px_rgba(0,200,255,0.08),inset_0_1px_1px_rgba(255,255,255,0.05)]"
              tabIndex={0}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,255,0.05)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col h-full">
                <m.div 
                  className="w-12 h-12 bg-white/8 border border-white/15 rounded-xl flex items-center justify-center mb-6 group-hover:border-white/40 transition-all duration-500 shadow-[0_0_12px_rgba(0,200,255,0.05)]"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 20px rgba(0,200,255,0.15)" }}
                  transition={{ duration: 0.3 }}
                >
                  <item.icon className="w-6 h-6 text-[#ddd] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </m.div>
                
                <h3 className="font-display text-xl font-medium text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                
                <p className="text-[#888] text-sm leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <span className="text-xs font-mono text-[#666] tracking-widest uppercase">Business Value</span>
                  <div className="w-1 h-1 rounded-full bg-white/20 mx-2" />
                  <span className="text-xs font-medium text-white/80">{item.value}</span>
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
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-sm font-mono tracking-widest text-[#555] uppercase">Core Engineering Principles</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {PRINCIPLES.map((principle) => (
              <div 
                key={principle}
                className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-[#555]" strokeWidth={2} />
                <span className="text-sm font-medium text-[#aaa]">{principle}</span>
              </div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}
