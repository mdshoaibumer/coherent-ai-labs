'use client';
import { m, AnimatePresence } from 'motion/react';
import { cn } from '../../../lib/utils';
import { STAGES } from '../../../constants/featuredProject';

interface ProcessTimelineProps {
  activeStage: string;
  onSetActiveStage: (id: string) => void;
}

export function ProcessTimeline({ activeStage, onSetActiveStage }: ProcessTimelineProps) {
  return (
    <div className="flex flex-col gap-4">
      {STAGES.map((stage) => {
        const isActive = activeStage === stage.id;
        return (
          <button
            key={stage.id}
            onClick={() => onSetActiveStage(stage.id)}
            className={cn(
              'focus-visible:ring-foreground relative flex flex-col rounded-2xl border p-6 text-left transition-all duration-500 outline-none focus-visible:ring-2',
              isActive
                ? 'bg-card border-foreground/20 shadow-2xl'
                : 'hover:bg-foreground/[0.02] border-transparent bg-transparent',
            )}
            aria-expanded={isActive}
          >
            <div className="mb-1 flex items-center gap-5">
              <div
                className={cn(
                  'z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-all duration-500',
                  isActive
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-card text-muted-foreground border-foreground/10 group-hover:border-foreground/20',
                )}
              >
                <stage.icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h3
                className={cn(
                  'font-display text-xl font-medium tracking-tight transition-colors duration-500',
                  isActive ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {stage.title}
              </h3>
            </div>

            <AnimatePresence initial={false}>
              {isActive && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden md:pl-[68px]"
                >
                  <div className="pt-4">
                    <p className="text-foreground/80 mb-5 text-sm leading-relaxed">
                      {stage.description}
                    </p>
                    <ul className="space-y-3">
                      {stage.details.map((detail, i) => (
                        <m.li
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          key={detail}
                          className="text-muted-foreground flex items-center gap-3 text-sm"
                        >
                          <div className="bg-foreground/20 h-1.5 w-1.5 shrink-0 rounded-full" />
                          {detail}
                        </m.li>
                      ))}
                    </ul>
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </button>
        );
      })}
    </div>
  );
}
