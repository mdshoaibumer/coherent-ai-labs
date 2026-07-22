'use client';
import { m } from 'motion/react';

interface StatusIndicatorProps {
  label: string;
}

export function StatusIndicator({ label }: StatusIndicatorProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="border-border mb-8 inline-flex items-center gap-2 rounded-full border bg-white/5 px-3 py-1.5 font-mono text-xs text-[#a1a1aa] shadow-[0_0_30px_rgba(255,255,255,0.03)] backdrop-blur-md"
    >
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
      </span>
      {label}
    </m.div>
  );
}
