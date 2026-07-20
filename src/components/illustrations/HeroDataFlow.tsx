import React from 'react';
import { m } from "motion/react";

export const DataFlowVisualization = React.memo(function DataFlowVisualization() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Gradient overlay to fade edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_20%,black_80%)] z-10" />

      <svg viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet" className="w-full h-full overflow-visible opacity-80" role="img" aria-label="System Architecture Data Flow Visualization">
        <title>System Architecture Data Flow</title>
        <defs>
          <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="blur-filter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <filter id="node-glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Structural Background Lines */}
        <path d="M 0 150 L 1000 150" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="4 4" />
        
        {/* Core Architecture Paths */}
        <path d="M 50 150 C 150 150, 200 80, 300 80" fill="none" stroke="#222" strokeWidth="1.5" />
        <path d="M 50 150 C 150 150, 200 220, 300 220" fill="none" stroke="#222" strokeWidth="1.5" />

        <path d="M 300 80 C 400 80, 450 150, 550 150" fill="none" stroke="#222" strokeWidth="1.5" />
        <path d="M 300 220 C 400 220, 450 150, 550 150" fill="none" stroke="#222" strokeWidth="1.5" />
        
        <path d="M 550 150 C 650 150, 700 60, 800 60" fill="none" stroke="#222" strokeWidth="1.5" />
        <path d="M 550 150 C 650 150, 700 240, 800 240" fill="none" stroke="#222" strokeWidth="1.5" />

        <path d="M 800 60 C 900 60, 900 150, 950 150" fill="none" stroke="#222" strokeWidth="1.5" />
        <path d="M 800 240 C 900 240, 900 150, 950 150" fill="none" stroke="#222" strokeWidth="1.5" />

        {/* Animated Packets */}
        <ParticlePath d="M 50 150 C 150 150, 200 80, 300 80" duration={2.5} delay={0} />
        <ParticlePath d="M 300 80 C 400 80, 450 150, 550 150" duration={2.5} delay={1.25} />
        <ParticlePath d="M 550 150 C 650 150, 700 60, 800 60" duration={2.5} delay={0.5} />
        <ParticlePath d="M 800 60 C 900 60, 900 150, 950 150" duration={2.5} delay={1.75} />
        
        <ParticlePath d="M 50 150 C 150 150, 200 220, 300 220" duration={3} delay={0.5} />
        <ParticlePath d="M 300 220 C 400 220, 450 150, 550 150" duration={3} delay={2} />
        <ParticlePath d="M 550 150 C 650 150, 700 240, 800 240" duration={3} delay={1} />
        <ParticlePath d="M 800 240 C 900 240, 900 150, 950 150" duration={3} delay={2.5} />

        {/* Architecture Nodes */}
        <Node x={50} y={150} label="Customer Requests" pulse />
        <Node x={300} y={80} label="AI Agents" />
        <Node x={300} y={220} label="Knowledge" />
        <Node x={550} y={150} label="Reasoning" />
        <Node x={800} y={60} label="Automation" />
        <Node x={800} y={240} label="Integration" />
        <Node x={950} y={150} label="Business Outcomes" pulse />

      </svg>
    </div>
  )
});

function ParticlePath({ d, duration, delay }: { d: string, duration: number, delay: number }) {
  return (
    <m.path
      d={d}
      fill="none"
      stroke="url(#glow-gradient)"
      strokeWidth="2"
      filter="url(#blur-filter)"
      strokeLinecap="round"
      initial={{ pathLength: 0.15, pathOffset: 0, opacity: 0 }}
      animate={{ 
        pathOffset: [0, 1],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  )
}

function Node({ x, y, label, pulse = false }: { x: number, y: number, label: string, pulse?: boolean }) {
  return (
    <g transform={`translate(${x}, ${y})`} className="group">
      {/* Interaction Area */}
      <circle r="30" fill="transparent" className="cursor-crosshair" />
      
      {/* Node Glow / Pulse */}
      {pulse && (
        <m.circle 
          r="6" 
          fill="rgba(255,255,255,0.3)" 
          filter="url(#node-glow)"
          animate={{ r: [6, 16, 6], opacity: [0.5, 0, 0.5] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      )}
      
      <m.circle 
        r="24" 
        fill="rgba(255,255,255,0.02)" 
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
      />
      
      {/* Core Dot */}
      <circle r="4" fill="#111" stroke="#444" strokeWidth="1.5" className="group-hover:stroke-white group-hover:fill-white transition-colors duration-300" />
      
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
  )
}
