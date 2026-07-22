'use client';
import React from 'react';
import { m } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { ARCHITECTURE_NODES } from '../../../constants/featuredProject';

export const ArchitectureDiagram = React.memo(function ArchitectureDiagram() {
  return (
    <div className="bg-card border-foreground/10 relative flex min-h-[500px] flex-1 flex-col justify-center overflow-hidden rounded-2xl border p-8 shadow-2xl sm:p-12">
      <div className="via-foreground/10 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-50" />

      <div className="mb-12 text-center">
        <h4 className="font-display text-muted-foreground font-mono text-xs tracking-widest uppercase">
          Solution Architecture
        </h4>
      </div>

      <div className="relative flex flex-col items-center gap-4">
        {/* Connecting Animated Line Background */}
        <div className="bg-foreground/5 absolute top-0 bottom-0 left-1/2 w-px -translate-x-1/2" />
        <m.div
          className="via-foreground/30 absolute left-1/2 h-32 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent"
          animate={{ top: ['-20%', '120%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />

        {ARCHITECTURE_NODES.map((node, i) => (
          <div key={node.id} className="relative z-10 flex flex-col items-center">
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={cn(
                'flex w-[260px] max-w-full items-center justify-center gap-3 rounded-xl border px-6 py-3.5 shadow-lg backdrop-blur-md transition-colors duration-500',
                i === 0 || i === ARCHITECTURE_NODES.length - 1
                  ? 'bg-foreground/5 border-foreground/10 text-muted-foreground'
                  : 'bg-card border-foreground/20 text-foreground/80',
                i === 2 &&
                  'border-foreground/40 text-foreground shadow-[0_0_20px_rgba(var(--foreground),0.1)]',
              )}
            >
              <node.icon
                className={cn('h-5 w-5', i === 2 ? 'text-foreground' : 'text-muted-foreground')}
                strokeWidth={1.5}
              />
              <span className="text-sm font-medium">{node.label}</span>
            </m.div>

            {i < ARCHITECTURE_NODES.length - 1 && (
              <ArrowDown className="text-foreground/20 my-2 h-4 w-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
