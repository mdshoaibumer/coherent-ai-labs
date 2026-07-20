import React from 'react';
import { cn } from "../../../lib/utils";
import { TechCategory } from "../../../types";

interface RadialVisualizationProps {
  categories: TechCategory[];
  activeLayer: string | null;
  onSetActiveLayer: (id: string | null) => void;
}

export const RadialVisualization = React.memo(function RadialVisualization({ categories, activeLayer, onSetActiveLayer }: RadialVisualizationProps) {
  return (
    <div className="hidden lg:flex lg:col-span-7 relative aspect-square w-full max-w-[600px] mx-auto items-center justify-center">
      {/* SVG Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {categories.map((cat, i) => {
          const angle = (i * 60 - 90) * (Math.PI / 180);
          const x2 = 50 + Math.cos(angle) * 40;
          const y2 = 50 + Math.sin(angle) * 40;
          const isActive = activeLayer === cat.id;
          
          return (
            <line 
              key={`line-${cat.id}`}
              x1="50%" y1="50%" x2={`${x2}%`} y2={`${y2}%`}
              stroke={isActive ? "#ffffff" : "rgba(255,255,255,0.1)"}
              strokeWidth={isActive ? "2" : "1"}
              filter={isActive ? "url(#glow)" : "none"}
              className="transition-all duration-700 ease-in-out"
            />
          );
        })}
      </svg>

      {/* Center Platform Node */}
      <div className="absolute z-20 w-36 h-36 rounded-full bg-[#050505] border border-white/20 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.05)] transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]">
        <div className="w-10 h-10 bg-white rounded-sm mb-3 flex items-center justify-center">
           <div className="w-4 h-4 bg-black rounded-[2px]" />
        </div>
        <span className="text-[10px] tracking-widest uppercase font-medium text-white px-4 text-center leading-tight">Coherent AI Platform</span>
      </div>

      {/* Orbiting Nodes */}
      {categories.map((cat, i) => {
         const angle = (i * 60 - 90) * (Math.PI / 180);
         const x = 50 + Math.cos(angle) * 40;
         const y = 50 + Math.sin(angle) * 40;
         const isActive = activeLayer === cat.id;
         
         return (
           <button
             key={`node-${cat.id}`}
             className={cn(
               "absolute z-10 w-32 p-4 rounded-xl border backdrop-blur-md transition-all duration-500 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-white",
               isActive 
                 ? "bg-white/10 border-white/40 scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)]" 
                 : "bg-[#080808] border-white/10 scale-100 hover:border-white/20 hover:bg-[#0a0a0a]"
             )}
             style={{ left: `${x}%`, top: `${y}%` }}
             onMouseEnter={() => onSetActiveLayer(cat.id)}
             onFocus={() => onSetActiveLayer(cat.id)}
             onClick={() => onSetActiveLayer(cat.id)}
             aria-expanded={isActive}
           >
             <cat.icon className={cn("w-6 h-6 transition-colors duration-500", isActive ? "text-white" : "text-[#666]")} strokeWidth={1.5} />
             <span className={cn("text-xs text-center font-medium transition-colors duration-500", isActive ? "text-white" : "text-[#aaa]")}>{cat.title}</span>
           </button>
         );
      })}
    </div>
  );
});
