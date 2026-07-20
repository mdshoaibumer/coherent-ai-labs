import { TechCategory } from "../../../types";

export function TechDetails({ data }: { data: TechCategory }) {
  return (
    <div className="flex flex-col h-full animate-in fade-in duration-500">
      <div className="flex items-center gap-3 mb-6">
        <data.icon className="w-6 h-6 text-white" />
        <h3 className="font-display text-2xl font-medium text-white">{data.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-8">
        {data.items.map(item => (
          <span key={item} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs font-medium text-[#ccc]">
            {item}
          </span>
        ))}
      </div>

      <div className="space-y-8 flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Purpose</h4>
          <p className="text-[#aaa] text-sm leading-relaxed">{data.purpose}</p>
        </div>
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Business Value</h4>
          <p className="text-[#aaa] text-sm leading-relaxed">{data.value}</p>
        </div>
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Example Use Cases</h4>
          <ul className="space-y-2">
            {data.useCases.map(uc => (
              <li key={uc} className="text-sm text-[#aaa] flex items-start gap-3">
                 <div className="w-1 h-1 rounded-full bg-white/30 mt-1.5 shrink-0" />
                 {uc}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-mono text-[10px] tracking-widest text-[#555] uppercase mb-3">Ecosystem Relationship</h4>
          <p className="text-[#aaa] text-sm leading-relaxed">{data.relations}</p>
        </div>
      </div>
    </div>
  );
}
