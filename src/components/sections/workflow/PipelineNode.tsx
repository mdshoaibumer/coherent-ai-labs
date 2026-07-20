import {m, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";
import { LayerData } from "../../../constants/workflow";
import { InfoPanel } from "./InfoPanel";

interface PipelineNodeProps {
  layer: LayerData;
  activeLayer: string;
  index: number;
  onSetActiveLayer: (id: string) => void;
}

export function PipelineNode({ layer, activeLayer, index, onSetActiveLayer }: PipelineNodeProps) {
  return (
    <m.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-start gap-4 sm:gap-8 group outline-none"
      onMouseEnter={() => onSetActiveLayer(layer.id)}
      onClick={() => onSetActiveLayer(layer.id)}
      onFocus={() => onSetActiveLayer(layer.id)}
      tabIndex={0}
      role="button"
      aria-expanded={activeLayer === layer.id}
    >
      {/* Timeline Node */}
      <div className={cn(
        "relative z-10 w-10 h-10 sm:w-14 sm:h-14 shrink-0 rounded-full border bg-[#050505] flex items-center justify-center transition-all duration-500",
        activeLayer === layer.id ? "border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.05)] scale-110" : "border-white/10 scale-100"
      )}>
        <layer.icon className={cn("w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-500", activeLayer === layer.id ? "text-white" : "text-[#666]")} />
      </div>
      
      {/* Card */}
      <div className="flex-1 min-w-0">
        <div className={cn(
          "p-5 sm:p-8 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-md group-focus-visible:ring-2 group-focus-visible:ring-white",
          activeLayer === layer.id 
            ? "bg-white/[0.03] border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.02)]" 
            : "bg-[#050505] border-white/5 hover:border-white/10"
        )}>
          <h3 className={cn("text-lg sm:text-2xl font-medium mb-5 sm:mb-6 transition-colors duration-500", activeLayer === layer.id ? "text-white" : "text-[#aaa]")}>
            {layer.title}
          </h3>
          <div className="grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3">
            {layer.items.map(item => (
              <div key={item.name} className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-colors">
                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#888] shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-[#ccc] truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Inline Info Panel */}
        <AnimatePresence>
          {activeLayer === layer.id && (
            <m.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden lg:hidden mt-4"
            >
              <InfoPanel data={layer} />
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.div>
  );
}
