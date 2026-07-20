"use client";
import { m } from "motion/react";
import { Target, Layers, Lightbulb } from "lucide-react";
import { LayerData } from "../../../constants/workflow";
import { cn } from "../../../lib/utils";

interface InfoPanelProps {
  data: LayerData;
  activeIndex: number;
  totalStages: number;
}

export function InfoPanel({ data, activeIndex, totalStages }: InfoPanelProps) {
  const progress = ((activeIndex + 1) / totalStages) * 100;

  return (
    <div className="bg-[#050505] border border-white/10 rounded-2xl relative overflow-hidden h-full">
      {/* ─── Top gradient bar — animated width showing pipeline progress ─── */}
      <div className="relative h-[2px] w-full bg-white/[0.03]">
        <m.div
          className="absolute top-0 left-0 h-full rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background:
              "linear-gradient(to right, rgba(255,255,255,0.1), rgba(255,255,255,0.5), rgba(255,255,255,0.2))",
            boxShadow: "0 0 8px rgba(255,255,255,0.15)",
          }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* ─── Header with stage indicator ─── */}
        <div className="flex items-center justify-between mb-6 hidden lg:flex">
          <m.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Active stage icon with glow */}
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center">
                <data.icon className="w-5 h-5 text-white" />
              </div>
              <m.div
                className="absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(255,255,255,0)",
                    "0 0 16px rgba(255,255,255,0.1)",
                    "0 0 0px rgba(255,255,255,0)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div>
              <h3 className="font-display text-xl font-medium text-white tracking-tight">
                {data.title}
              </h3>
              <span className="text-[10px] font-mono text-[#555] tracking-widest uppercase">
                Stage {activeIndex + 1} of {totalStages}
              </span>
            </div>
          </m.div>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalStages }).map((_, i) => (
              <m.div
                key={i}
                className="rounded-full"
                animate={{
                  width: i === activeIndex ? 16 : 6,
                  height: 6,
                  backgroundColor:
                    i <= activeIndex
                      ? "rgba(255,255,255,0.6)"
                      : "rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
            ))}
          </div>
        </div>

        {/* ─── Description ─── */}
        <m.p
          className="text-[#999] leading-relaxed mb-8 text-sm sm:text-base"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          {data.description}
        </m.p>

        {/* ─── Content sections with staggered reveals ─── */}
        <div className="space-y-7">
          {/* Business Value */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
              <Target className="w-3.5 h-3.5" /> Business Value
            </h4>
            <p className="text-[#ccc] text-sm leading-relaxed">{data.businessValue}</p>
          </m.div>

          {/* Technologies */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {data.technologies.map((tech, i) => (
                <m.span
                  key={tech}
                  className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-[#bbb]"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.2 + i * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {tech}
                </m.span>
              ))}
            </div>
          </m.div>

          {/* Use Cases */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
              <Lightbulb className="w-3.5 h-3.5" /> Use Cases
            </h4>
            <ul className="space-y-2.5">
              {data.useCases.map((uc, i) => (
                <m.li
                  key={uc}
                  className="text-sm text-[#aaa] flex items-start gap-3"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.25 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <m.div
                    className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 shrink-0"
                    animate={{
                      backgroundColor: [
                        "rgba(255,255,255,0.3)",
                        "rgba(255,255,255,0.6)",
                        "rgba(255,255,255,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  {uc}
                </m.li>
              ))}
            </ul>
          </m.div>
        </div>
      </div>
    </div>
  );
}
