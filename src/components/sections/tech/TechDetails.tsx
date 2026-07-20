"use client";
import { m } from "motion/react";
import { TechCategory } from "../../../types";

interface TechDetailsProps {
  data: TechCategory;
}

export function TechDetails({ data }: TechDetailsProps) {
  return (
    <div className="flex flex-col h-full">
      {/* ─── Header with icon + title ─── */}
      <m.div
        className="flex items-center gap-4 mb-6"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative">
          <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center">
            <data.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
          </div>
          {/* Subtle icon glow */}
          <m.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 0px rgba(255,255,255,0)",
                "0 0 12px rgba(255,255,255,0.08)",
                "0 0 0px rgba(255,255,255,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <h3 className="font-display text-2xl font-medium text-white tracking-tight">
          {data.title}
        </h3>
      </m.div>

      {/* ─── Technology items — staggered pill reveal ─── */}
      <m.div
        className="flex flex-wrap gap-2 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {data.items.map((item, i) => (
          <m.span
            key={item}
            className="px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded-md text-xs font-medium text-[#ccc]"
            initial={{ opacity: 0, scale: 0.85, y: 6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: 0.12 + i * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item}
          </m.span>
        ))}
      </m.div>

      {/* ─── Content sections with progressive reveal ─── */}
      <div className="space-y-7 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        {/* Purpose */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <m.span
              className="inline-block w-3 h-[1px] bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{ originX: 0 }}
            />
            Purpose
          </h4>
          <p className="text-[#aaa] text-sm leading-relaxed">{data.purpose}</p>
        </m.div>

        {/* Business Value */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <m.span
              className="inline-block w-3 h-[1px] bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              style={{ originX: 0 }}
            />
            Business Value
          </h4>
          <p className="text-[#aaa] text-sm leading-relaxed">{data.value}</p>
        </m.div>

        {/* Use Cases */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <m.span
              className="inline-block w-3 h-[1px] bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              style={{ originX: 0 }}
            />
            Example Use Cases
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
                  delay: 0.45 + i * 0.07,
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
                    duration: 2.5,
                    delay: i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {uc}
              </m.li>
            ))}
          </ul>
        </m.div>

        {/* Ecosystem Relationship */}
        <m.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <m.span
              className="inline-block w-3 h-[1px] bg-white/30"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              style={{ originX: 0 }}
            />
            Ecosystem Relationship
          </h4>
          <m.p
            className="text-[#aaa] text-sm leading-relaxed px-4 py-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.65 }}
          >
            {data.relations}
          </m.p>
        </m.div>
      </div>
    </div>
  );
}
