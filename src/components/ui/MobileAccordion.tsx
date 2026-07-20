import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {m, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { NavItem } from "../../types";

interface MobileAccordionProps {
  title: string;
  items: NavItem[];
}

export function MobileAccordion({ title, items }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#222]">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between py-4 text-xl font-medium text-[#aaa] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors"
      >
        {title}
        <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-6 pt-2 flex flex-col gap-4">
              {items.map((item, i) => (
                <a key={i} href={`#${item.name.toLowerCase().replace(/\\s+/g, '-')}`} className="flex items-center gap-4 text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors">
                  <item.icon className="w-4 h-4" />
                  <span className="text-base">{item.name}</span>
                </a>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
