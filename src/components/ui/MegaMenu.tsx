import { ChevronDown } from "lucide-react";
import { NavItem } from "../../types";

interface MegaMenuProps {
  title: string;
  items: NavItem[];
  columns?: number;
}

import Link from "next/link";

export function MegaMenu({ title, items, columns = 2 }: MegaMenuProps) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">
        {title}
        <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
      </button>
      
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
        <div className="bg-[#050505] border border-white/5 p-6 shadow-2xl min-w-[500px] rounded-xl">
          <div className={`grid grid-cols-${columns} gap-x-8 gap-y-6`}>
            {items.map((item, i) => (
              <Link 
                key={i} 
                href={item.href || `/#${item.name.toLowerCase().replace(/\\s+/g, '-')}`} 
                className="group/item flex items-start gap-4 hover:bg-white/5 focus-visible:outline-none focus-visible:bg-white/5 p-3 -m-3 transition-colors rounded-lg"
              >
                <div className="mt-0.5 p-2 bg-white/5 border border-white/10 text-[#888] group-hover/item:text-white group-hover/item:border-white/20 transition-colors rounded-md">
                  <item.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white mb-1 group-hover/item:text-white transition-colors">{item.name}</div>
                  <div className="text-xs text-[#666] leading-relaxed">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
