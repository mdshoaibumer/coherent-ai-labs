"use client";
import React from "react";
import { m } from "motion/react";

export const DataFlowVisualization = React.memo(
  function DataFlowVisualization() {
    return (
      <div className="w-full h-full relative flex items-center justify-center">
        {/* Gradient overlay to fade edges */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_25%,black_75%)] z-10" />

        <svg
          viewBox="0 0 1000 300"
          preserveAspectRatio="xMidYMid meet"
          className="w-full h-full overflow-visible opacity-85"
          role="img"
          aria-label="System Architecture Data Flow Visualization"
        >
          <title>System Architecture Data Flow</title>
          <defs>
            {/* Primary particle gradient */}
            <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Dimmer secondary particle gradient */}
            <linearGradient id="glow-gradient-dim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.5)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>

            {/* Subtle blue-tint gradient for variety */}
            <linearGradient id="glow-gradient-cool" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(200,220,255,0)" />
              <stop offset="50%" stopColor="rgba(200,220,255,0.7)" />
              <stop offset="100%" stopColor="rgba(200,220,255,0)" />
            </linearGradient>

            <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="blur-filter-soft" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="node-glow">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="node-glow-strong">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* ─── Structural Background Lines ─── */}
          <path
            d="M 0 150 L 1000 150"
            stroke="#1a1a1a"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* ─── Core Architecture Paths (connections) ─── */}
          {/* Slightly brighter stroke to show activity */}
          <path d="M 50 150 C 150 150, 200 80, 300 80" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 50 150 C 150 150, 200 220, 300 220" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 300 80 C 400 80, 450 150, 550 150" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 300 220 C 400 220, 450 150, 550 150" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 550 150 C 650 150, 700 60, 800 60" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 550 150 C 650 150, 700 240, 800 240" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 800 60 C 900 60, 900 150, 950 150" fill="none" stroke="#252525" strokeWidth="1.5" />
          <path d="M 800 240 C 900 240, 900 150, 950 150" fill="none" stroke="#252525" strokeWidth="1.5" />

          {/* ─── Connection Activity (subtle line pulses) ─── */}
          <ConnectionPulse d="M 50 150 C 150 150, 200 80, 300 80" delay={0} />
          <ConnectionPulse d="M 300 80 C 400 80, 450 150, 550 150" delay={1.5} />
          <ConnectionPulse d="M 550 150 C 650 150, 700 60, 800 60" delay={3} />
          <ConnectionPulse d="M 550 150 C 650 150, 700 240, 800 240" delay={4.5} />

          {/* ─── PRIMARY Animated Packets (original + enhanced timing) ─── */}
          <ParticlePath d="M 50 150 C 150 150, 200 80, 300 80" duration={2.5} delay={0} gradient="glow-gradient" />
          <ParticlePath d="M 300 80 C 400 80, 450 150, 550 150" duration={2.5} delay={1.25} gradient="glow-gradient" />
          <ParticlePath d="M 550 150 C 650 150, 700 60, 800 60" duration={2.5} delay={0.5} gradient="glow-gradient" />
          <ParticlePath d="M 800 60 C 900 60, 900 150, 950 150" duration={2.5} delay={1.75} gradient="glow-gradient" />

          <ParticlePath d="M 50 150 C 150 150, 200 220, 300 220" duration={3} delay={0.5} gradient="glow-gradient" />
          <ParticlePath d="M 300 220 C 400 220, 450 150, 550 150" duration={3} delay={2} gradient="glow-gradient" />
          <ParticlePath d="M 550 150 C 650 150, 700 240, 800 240" duration={3} delay={1} gradient="glow-gradient" />
          <ParticlePath d="M 800 240 C 900 240, 900 150, 950 150" duration={3} delay={2.5} gradient="glow-gradient" />

          {/* ─── SECONDARY Packets (additional density, dimmer, offset timing) ─── */}
          <ParticlePath d="M 50 150 C 150 150, 200 80, 300 80" duration={3.2} delay={1.8} gradient="glow-gradient-dim" width={1.5} length={0.1} />
          <ParticlePath d="M 300 80 C 400 80, 450 150, 550 150" duration={2.8} delay={0.3} gradient="glow-gradient-cool" width={1.5} length={0.1} />
          <ParticlePath d="M 550 150 C 650 150, 700 60, 800 60" duration={3.5} delay={2.2} gradient="glow-gradient-dim" width={1.5} length={0.1} />
          <ParticlePath d="M 800 60 C 900 60, 900 150, 950 150" duration={2.2} delay={0.8} gradient="glow-gradient-cool" width={1.5} length={0.1} />

          <ParticlePath d="M 50 150 C 150 150, 200 220, 300 220" duration={3.8} delay={2.5} gradient="glow-gradient-dim" width={1.5} length={0.1} />
          <ParticlePath d="M 300 220 C 400 220, 450 150, 550 150" duration={2.6} delay={0.7} gradient="glow-gradient-cool" width={1.5} length={0.1} />
          <ParticlePath d="M 550 150 C 650 150, 700 240, 800 240" duration={3.3} delay={2.8} gradient="glow-gradient-dim" width={1.5} length={0.1} />
          <ParticlePath d="M 800 240 C 900 240, 900 150, 950 150" duration={2.9} delay={1.2} gradient="glow-gradient-cool" width={1.5} length={0.1} />

          {/* ─── Architecture Nodes ─── */}
          <Node x={50} y={150} label="Customer Requests" pulse variant="endpoint" />
          <Node x={300} y={80} label="AI Agents" pulse variant="processor" />
          <Node x={300} y={220} label="Knowledge" variant="processor" />
          <Node x={550} y={150} label="Reasoning" pulse variant="core" />
          <Node x={800} y={60} label="Automation" variant="processor" />
          <Node x={800} y={240} label="Integration" variant="processor" />
          <Node x={950} y={150} label="Business Outcomes" pulse variant="endpoint" />
        </svg>
      </div>
    );
  }
);

/* ═══════════════════════════════════════════════════════════
   PARTICLE PATH — data packet traveling along a connection
═══════════════════════════════════════════════════════════ */
function ParticlePath({
  d,
  duration,
  delay,
  gradient = "glow-gradient",
  width = 2,
  length = 0.15,
}: {
  d: string;
  duration: number;
  delay: number;
  gradient?: string;
  width?: number;
  length?: number;
}) {
  return (
    <m.path
      d={d}
      fill="none"
      stroke={`url(#${gradient})`}
      strokeWidth={width}
      filter="url(#blur-filter)"
      strokeLinecap="round"
      initial={{ pathLength: length, pathOffset: 0, opacity: 0 }}
      animate={{
        pathOffset: [0, 1],
        opacity: [0, 0.9, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   CONNECTION PULSE — subtle activity indicator along paths
   Shows the connection is "alive" with a soft full-length pulse
═══════════════════════════════════════════════════════════ */
function ConnectionPulse({ d, delay }: { d: string; delay: number }) {
  return (
    <m.path
      d={d}
      fill="none"
      stroke="rgba(255,255,255,0.06)"
      strokeWidth="3"
      filter="url(#blur-filter-soft)"
      strokeLinecap="round"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.4, 0] }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   NODE — architecture node with variant-based styling
   Variants: endpoint (start/end), processor (middle), core (central)
═══════════════════════════════════════════════════════════ */
function Node({
  x,
  y,
  label,
  pulse = false,
  variant = "processor",
}: {
  x: number;
  y: number;
  label: string;
  pulse?: boolean;
  variant?: "endpoint" | "processor" | "core";
}) {
  const coreRadius = variant === "core" ? 6 : variant === "endpoint" ? 5 : 4;
  const strokeColor = variant === "core" ? "#666" : variant === "endpoint" ? "#555" : "#444";
  const fillColor = variant === "core" ? "#1a1a1a" : "#111";

  return (
    <g transform={`translate(${x}, ${y})`} className="group">
      {/* Interaction Area */}
      <circle r="30" fill="transparent" className="cursor-crosshair" />

      {/* Ambient glow ring — always subtly visible on core/endpoint */}
      {(variant === "core" || variant === "endpoint") && (
        <m.circle
          r={coreRadius + 8}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          animate={{ r: [coreRadius + 8, coreRadius + 14, coreRadius + 8] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
      )}

      {/* Node Pulse (breathing glow) */}
      {pulse && (
        <m.circle
          r={coreRadius + 2}
          fill="rgba(255,255,255,0.25)"
          filter="url(#node-glow-strong)"
          animate={{
            r: [coreRadius + 2, coreRadius + 18, coreRadius + 2],
            opacity: [0.4, 0, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: variant === "core" ? 2.5 : 3,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Secondary pulse for core node — creates heartbeat rhythm */}
      {variant === "core" && (
        <m.circle
          r={coreRadius + 2}
          fill="rgba(255,255,255,0.15)"
          filter="url(#node-glow)"
          animate={{
            r: [coreRadius + 2, coreRadius + 12, coreRadius + 2],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            delay: 0.9,
            ease: "easeInOut",
          }}
        />
      )}

      {/* Hover highlight ring */}
      <circle
        r="20"
        fill="rgba(255,255,255,0.02)"
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Core Dot */}
      <circle
        r={coreRadius}
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.5"
        className="group-hover:stroke-white group-hover:fill-white transition-colors duration-300"
      />

      {/* Label */}
      <text
        y={y > 150 ? 28 : -20}
        textAnchor="middle"
        fill="#666"
        className="font-mono text-[10px] md:text-xs tracking-widest uppercase group-hover:fill-[#fff] transition-colors duration-300"
      >
        {label}
      </text>
    </g>
  );
}
