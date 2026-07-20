"use client";
import React from "react";
import { m } from "motion/react";
import { cn } from "../../../lib/utils";
import { TechCategory } from "../../../types";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

interface RadialVisualizationProps {
  categories: TechCategory[];
  activeLayer: string | null;
  onSetActiveLayer: (id: string | null) => void;
}

export const RadialVisualization = React.memo(function RadialVisualization({
  categories,
  activeLayer,
  onSetActiveLayer,
}: RadialVisualizationProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hidden lg:flex lg:col-span-7 relative aspect-square w-full max-w-[600px] mx-auto items-center justify-center">
      {/* Perspective container for 3D depth */}
      <div
        className="absolute inset-0"
        style={{ perspective: "1200px", perspectiveOrigin: "50% 50%" }}
      >
        {/* SVG Connection System */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          aria-hidden="true"
        >
          <defs>
            <filter id="eco-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="eco-glow-strong" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="eco-packet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="eco-packet-dim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.4)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>

          {/* Connection lines + animated data packets */}
          {categories.map((cat, i) => {
            const angle = (i * 60 - 90) * (Math.PI / 180);
            const x2 = 50 + Math.cos(angle) * 40;
            const y2 = 50 + Math.sin(angle) * 40;
            const isActive = activeLayer === cat.id;

            // Build SVG path from center to node
            const pathD = `M 50,50 L ${x2},${y2}`;

            return (
              <g key={`connection-${cat.id}`}>
                {/* Base connection line */}
                <line
                  x1="50%"
                  y1="50%"
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={
                    isActive
                      ? "rgba(255,255,255,0.35)"
                      : "rgba(255,255,255,0.06)"
                  }
                  strokeWidth={isActive ? "1.5" : "1"}
                  className="transition-all duration-700"
                />

                {/* Active glow line */}
                {isActive && (
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="4"
                    filter="url(#eco-glow)"
                    className="transition-all duration-700"
                  />
                )}

                {/* Data packet — outbound (center → node) */}
                {!prefersReducedMotion && (
                  <m.path
                    d={pathD}
                    fill="none"
                    stroke="url(#eco-packet-gradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#eco-glow)"
                    initial={{ pathLength: 0.12, pathOffset: 0, opacity: 0 }}
                    animate={{
                      pathOffset: [0, 1],
                      opacity: isActive ? [0, 0.9, 0] : [0, 0.4, 0],
                    }}
                    transition={{
                      duration: isActive ? 2 : 3.5,
                      delay: i * 0.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      vectorEffect: "non-scaling-stroke" as React.CSSProperties["vectorEffect"],
                    }}
                  />
                )}

                {/* Data packet — inbound (node → center), offset timing */}
                {!prefersReducedMotion && (
                  <m.path
                    d={`M ${x2},${y2} L 50,50`}
                    fill="none"
                    stroke="url(#eco-packet-dim)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0.08, pathOffset: 0, opacity: 0 }}
                    animate={{
                      pathOffset: [0, 1],
                      opacity: isActive ? [0, 0.6, 0] : [0, 0.2, 0],
                    }}
                    transition={{
                      duration: isActive ? 2.5 : 4,
                      delay: i * 0.5 + 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{
                      vectorEffect: "non-scaling-stroke" as React.CSSProperties["vectorEffect"],
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Inter-node connection arcs (adjacent nodes) — shows ecosystem relationships */}
          {!prefersReducedMotion &&
            categories.map((cat, i) => {
              const nextIdx = (i + 1) % categories.length;
              const angle1 = (i * 60 - 90) * (Math.PI / 180);
              const angle2 = (nextIdx * 60 - 90) * (Math.PI / 180);
              const x1 = 50 + Math.cos(angle1) * 40;
              const y1 = 50 + Math.sin(angle1) * 40;
              const x2 = 50 + Math.cos(angle2) * 40;
              const y2 = 50 + Math.sin(angle2) * 40;
              const isRelated =
                activeLayer === cat.id ||
                activeLayer === categories[nextIdx].id;

              return (
                <line
                  key={`arc-${cat.id}-${nextIdx}`}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke={
                    isRelated
                      ? "rgba(255,255,255,0.12)"
                      : "rgba(255,255,255,0.025)"
                  }
                  strokeWidth="0.5"
                  strokeDasharray="3 6"
                  className="transition-all duration-700"
                />
              );
            })}
        </svg>

        {/* ═══ Center Platform Node ═══ */}
        <m.div
          className="absolute z-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#050505] border border-white/20 flex flex-col items-center justify-center will-change-transform"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  boxShadow: activeLayer
                    ? [
                        "0 0 40px rgba(255,255,255,0.06)",
                        "0 0 60px rgba(255,255,255,0.1)",
                        "0 0 40px rgba(255,255,255,0.06)",
                      ]
                    : [
                        "0 0 30px rgba(255,255,255,0.04)",
                        "0 0 45px rgba(255,255,255,0.07)",
                        "0 0 30px rgba(255,255,255,0.04)",
                      ],
                }
          }
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Breathing ring */}
          {!prefersReducedMotion && (
            <m.div
              className="absolute inset-0 rounded-full border border-white/10"
              animate={{
                scale: [1, 1.06, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}

          <div className="w-10 h-10 bg-white rounded-sm mb-3 flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-[2px]" />
          </div>
          <span className="text-[10px] tracking-widest uppercase font-medium text-white px-4 text-center leading-tight">
            Coherent AI Platform
          </span>
        </m.div>

        {/* ═══ Orbiting Technology Nodes ═══ */}
        {categories.map((cat, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const x = 50 + Math.cos(angle) * 40;
          const y = 50 + Math.sin(angle) * 40;
          const isActive = activeLayer === cat.id;

          // Subtle orbital offset for living feel
          const orbitOffsetX = Math.cos(angle + Math.PI / 2) * 0.8;
          const orbitOffsetY = Math.sin(angle + Math.PI / 2) * 0.8;

          return (
            <div
              key={`node-${cat.id}`}
              className="absolute z-10"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {/* Outer glow halo */}
              {!prefersReducedMotion && (
                <m.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full pointer-events-none"
                  animate={{
                    opacity: isActive ? [0.3, 0.12, 0.3] : [0.05, 0.02, 0.05],
                    scale: isActive ? [1, 1.15, 1] : [1, 1.05, 1],
                  }}
                  transition={{
                    duration: isActive ? 2.5 : 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: isActive
                      ? "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)"
                      : "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
                  }}
                />
              )}

              {/* Node button with orbital micro-motion */}
              <m.button
                className={cn(
                  "relative w-32 p-4 rounded-xl border backdrop-blur-sm flex flex-col items-center gap-3 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white -translate-x-1/2 -translate-y-1/2 will-change-transform",
                  isActive
                    ? "bg-white/[0.08] border-white/30"
                    : "bg-[#080808] border-white/[0.08] hover:border-white/15 hover:bg-[#0a0a0a]"
                )}
                animate={
                  prefersReducedMotion
                    ? {}
                    : {
                        x: isActive ? 0 : [0, orbitOffsetX, 0],
                        y: isActive ? 0 : [0, orbitOffsetY, 0],
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive
                          ? "0 0 30px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.4)"
                          : "0 0 0px rgba(255,255,255,0), 0 4px 16px rgba(0,0,0,0.2)",
                      }
                }
                transition={
                  isActive
                    ? { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                    : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
                onMouseEnter={() => onSetActiveLayer(cat.id)}
                onFocus={() => onSetActiveLayer(cat.id)}
                onClick={() => onSetActiveLayer(cat.id)}
                aria-expanded={isActive}
              >
                {/* Inner pulse ring on active */}
                {!prefersReducedMotion && isActive && (
                  <m.div
                    className="absolute inset-0 rounded-xl border border-white/20 pointer-events-none"
                    animate={{
                      scale: [1, 1.08, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <cat.icon
                  className={cn(
                    "w-6 h-6 transition-colors duration-500",
                    isActive ? "text-white" : "text-[#666]"
                  )}
                  strokeWidth={1.5}
                />
                <span
                  className={cn(
                    "text-xs text-center font-medium transition-colors duration-500",
                    isActive ? "text-white" : "text-[#aaa]"
                  )}
                >
                  {cat.title}
                </span>
              </m.button>
            </div>
          );
        })}
      </div>
    </div>
  );
});
