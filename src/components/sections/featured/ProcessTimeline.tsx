import {m, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";
import { STAGES } from "../../../constants/featuredProject";

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
              "relative flex flex-col text-left p-6 rounded-2xl transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-white border",
              isActive 
                ? "bg-[#080808] border-white/20 shadow-2xl" 
                : "bg-transparent border-transparent hover:bg-white/[0.02]"
            )}
            aria-expanded={isActive}
          >
            <div className="flex items-center gap-5 mb-1">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-500 z-10",
                isActive ? "bg-white text-black border-white" : "bg-[#111] text-[#666] border-white/10 group-hover:border-white/20"
              )}>
                <stage.icon className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className={cn("font-display text-xl font-medium tracking-tight transition-colors duration-500", isActive ? "text-white" : "text-[#888]")}>
                {stage.title}
              </h3>
            </div>
            
            <AnimatePresence initial={false}>
              {isActive && (
                <m.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden md:pl-[68px]"
                >
                  <div className="pt-4">
                    <p className="text-[#aaa] text-sm leading-relaxed mb-5">
                      {stage.description}
                    </p>
                    <ul className="space-y-3">
                      {stage.details.map((detail, i) => (
                        <m.li 
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          key={detail} 
                          className="text-sm text-[#888] flex items-center gap-3"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
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
