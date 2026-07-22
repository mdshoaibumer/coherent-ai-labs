'use client';
import { m } from 'motion/react';

export function ScrollIndicator() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 2.2 }}
      className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      aria-hidden="true"
    >
      <m.div
        className="flex flex-col items-center gap-3"
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        {/* Minimal architectural line indicator */}
        <div className="via-muted-foreground/30 to-muted-foreground/10 h-8 w-px bg-gradient-to-b from-transparent" />
        <div className="bg-muted-foreground/20 h-1.5 w-1.5 rounded-full" />
      </m.div>
    </m.div>
  );
}
