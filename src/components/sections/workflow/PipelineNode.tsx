"use client";
import { m, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";
import { LayerData } from "../../../constants/workflow";
import { InfoPanel } from "./InfoPanel";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

interface PipelineNodeProps {
  layer: LayerData;
  activeLayer: string;
  index: number;
  totalLayers: number;
  scrollActiveIndex: number;
  onSetActiveLayer: (id: string) => void;
}

export function PipelineNode({
  layer,
  activeLayer,
  index,
  totalLayers,
  scrollActiveIndex,
  onSetActiveLayer,
}: PipelineNodeProps) {
  const isActive = activeLayer === layer.id;
  const isReached = index <= scrollActiveIndex;
  const isPast = index < scrollActiveIndex;
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex items-start gap-4 sm:gap-8 group outline-none"
      onMouseEnter={() => onSetActiveLayer(layer.id)}
      onClick={() => onSetActiveLayer(layer.id)}
      onFocus={() => onSetActiveLayer(layer.id)}
      tabIndex={0}
      role="button"
      aria-expanded={isActive}
    >
      {/* ═══════════════════════════════════════
          TIMELINE NODE — living orchestration dot
      ═══════════════════════════════════════ */}
      <div className="relative z-10 shrink-0 flex items-center justify-center">
        {/* Outer halo — breathing glow ring on active/reached nodes */}
        {!prefersReducedMotion && isReached && (
          <m.div
            className="absolute rounded-full will-change-transform"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isActive ? [0.4, 0.15, 0.4] : 0.1,
              scale: isActive ? [1, 1.4, 1] : 1.1,
            }}
            transition={{
              duration: isActive ? 2.5 : 0.5,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            style={{
              width: 56,
              height: 56,
              background: isActive
                ? "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)",
              filter: "blur(4px)",
            }}
          />
        )}

        {/* Particle emission — subtle dots radiating outward from active node */}
        {!prefersReducedMotion && isActive && (
          <>
            {[0, 1, 2].map((i) => (
              <m.div
                key={`particle-${layer.id}-${i}`}
                className="absolute w-1 h-1 rounded-full bg-white/40"
                animate={{
                  opacity: [0.6, 0],
                  scale: [0.5, 1.5],
                  x: [0, (i - 1) * 18],
                  y: [0, (i === 1 ? -16 : i === 0 ? 10 : 12)],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            ))}
          </>
        )}

        {/* Core node circle */}
        <m.div
          className={cn(
            "w-10 h-10 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center transition-colors duration-500 relative",
            isActive
              ? "bg-white/[0.08] border-white/40"
              : isReached
                ? "bg-white/[0.04] border-white/20"
                : "bg-[#050505] border-white/[0.08]"
          )}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: isActive ? 1.12 : isReached ? 1.02 : 1,
                  boxShadow: isActive
                    ? "0 0 24px rgba(255,255,255,0.1), 0 0 48px rgba(255,255,255,0.04)"
                    : isReached
                      ? "0 0 12px rgba(255,255,255,0.04)"
                      : "0 0 0px rgba(255,255,255,0)",
                }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Inner pulse ring for active state */}
          {!prefersReducedMotion && isActive && (
            <m.div
              className="absolute inset-0 rounded-full border border-white/20"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <layer.icon
            className={cn(
              "w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500",
              isActive
                ? "text-white"
                : isReached
                  ? "text-white/70"
                  : "text-[#555]"
            )}
          />
        </m.div>

        {/* Stage number indicator */}
        <div
          className={cn(
            "absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-mono font-bold transition-all duration-500",
            isActive
              ? "bg-white text-black"
              : isReached
                ? "bg-white/20 text-white/60"
                : "bg-white/5 text-white/20"
          )}
        >
          {index + 1}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          CARD — content container with depth
      ═══════════════════════════════════════ */}
      <div className="flex-1 min-w-0">
        <m.div
          className={cn(
            "p-5 sm:p-8 rounded-2xl border cursor-pointer backdrop-blur-sm group-focus-visible:ring-2 group-focus-visible:ring-white transition-colors duration-500 relative overflow-hidden",
            isActive
              ? "bg-white/[0.04] border-white/20"
              : isReached
                ? "bg-white/[0.02] border-white/10"
                : "bg-[#050505] border-white/[0.05] hover:border-white/10"
          )}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: isActive ? -2 : 0,
                  boxShadow: isActive
                    ? "0 8px 40px rgba(255,255,255,0.03), 0 0 1px rgba(255,255,255,0.1)"
                    : "0 0px 0px rgba(255,255,255,0)",
                }
          }
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top edge highlight on active */}
          <m.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            animate={{
              opacity: isActive ? 1 : 0,
              background: isActive
                ? "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)"
                : "linear-gradient(to right, transparent, rgba(255,255,255,0), transparent)",
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Card content */}
          <h3
            className={cn(
              "text-lg sm:text-2xl font-medium mb-5 sm:mb-6 transition-colors duration-500 font-display tracking-tight",
              isActive
                ? "text-white"
                : isReached
                  ? "text-white/80"
                  : "text-[#777]"
            )}
          >
            {layer.title}
          </h3>

          {/* Items grid with staggered activation */}
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
            {layer.items.map((item, itemIdx) => (
              <m.div
                key={item.name}
                className={cn(
                  "flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl border transition-colors duration-300",
                  isActive
                    ? "bg-white/[0.06] border-white/10"
                    : "bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.05] hover:border-white/[0.08]"
                )}
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        opacity: isActive ? 1 : isReached ? 0.7 : 0.4,
                        y: isActive ? 0 : 2,
                      }
                }
                transition={{
                  duration: 0.4,
                  delay: isActive ? itemIdx * 0.04 : 0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <item.icon
                  className={cn(
                    "w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 transition-colors duration-500",
                    isActive ? "text-white/80" : "text-[#666]"
                  )}
                />
                <span
                  className={cn(
                    "text-xs sm:text-sm font-medium truncate transition-colors duration-500",
                    isActive ? "text-white" : isReached ? "text-[#aaa]" : "text-[#777]"
                  )}
                >
                  {item.name}
                </span>
              </m.div>
            ))}
          </div>
        </m.div>

        {/* ─── Mobile Inline Info Panel ─── */}
        <AnimatePresence>
          {isActive && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden lg:hidden mt-4"
            >
              <InfoPanel
                data={layer}
                activeIndex={index}
                totalStages={5}
              />
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
}
