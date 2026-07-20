import { Target, Layers, Lightbulb } from "lucide-react";
import { LayerData } from "../../../constants/workflow";

export function InfoPanel({ data }: { data: LayerData }) {
  return (
    <div className="bg-[#050505] border border-white/10 p-6 sm:p-8 rounded-2xl relative overflow-hidden h-full">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      <h3 className="font-display text-2xl font-medium text-white mb-4 hidden lg:block">{data.title}</h3>
      <p className="text-[#888] leading-relaxed mb-8 text-sm sm:text-base">{data.description}</p>
      
      <div className="space-y-8">
        <div>
          <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <Target className="w-3.5 h-3.5" /> Business Value
          </h4>
          <p className="text-[#ccc] text-sm leading-relaxed">{data.businessValue}</p>
        </div>
        
        <div>
          <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5" /> Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.technologies.map(tech => (
              <span key={tech} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-[#aaa]">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-3 flex items-center gap-2">
            <Lightbulb className="w-3.5 h-3.5" /> Use Cases
          </h4>
          <ul className="space-y-2.5">
            {data.useCases.map(uc => (
              <li key={uc} className="text-sm text-[#aaa] flex items-start gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 shrink-0" />
                 {uc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
