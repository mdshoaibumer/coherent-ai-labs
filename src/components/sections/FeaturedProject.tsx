"use client";
import { useState } from "react";
import {m } from "motion/react";
import { STAGES, TECH_HIGHLIGHTS } from "../../constants/featuredProject";
import { ProcessTimeline } from "./featured/ProcessTimeline";
import { ArchitectureDiagram } from "./featured/ArchitectureDiagram";
import { EASE_OUT_EXPO } from "../../lib/motion";

export function FeaturedProject() {
  const [activeStage, setActiveStage] = useState(STAGES[0].id);

  return (
    <section id="solution" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-start mb-20 max-w-3xl">
          <span className="text-[10px] font-mono tracking-widest text-[#888] uppercase mb-6 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
            Representative Solution
          </span>
          <m.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              From Business Challenge to Intelligent Solution
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              See how we approach complex business problems using AI, automation, and modern software engineering.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Timeline Process Flow */}
          <div className="lg:col-span-5 relative">
            <div className="absolute left-[38px] top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden md:block" />
            
            <ProcessTimeline activeStage={activeStage} onSetActiveStage={setActiveStage} />
          </div>

          {/* Architecture Visualization */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <ArchitectureDiagram />

            {/* Tech Highlights */}
            <div className="bg-[#080808] border border-white/5 rounded-2xl p-8 shadow-xl">
              <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-6 flex items-center gap-2">
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
                    className="px-4 py-2 rounded-lg bg-white/[0.03] border border-white/5 text-sm text-[#aaa] font-medium hover:text-white hover:border-white/20 transition-all duration-300 cursor-default"
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
