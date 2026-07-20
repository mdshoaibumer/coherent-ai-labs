"use client";
import {m } from "motion/react";

interface StatusIndicatorProps {
  label: string;
}

export function StatusIndicator({ label }: StatusIndicatorProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: -20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#a1a1aa] mb-8 shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff00] opacity-40"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff00]"></span>
      </span>
      {label}
    </m.div>
  );
}
