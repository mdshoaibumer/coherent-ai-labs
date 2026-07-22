import { ChevronDown } from 'lucide-react';
import { NavItem } from '../../types';
import { cn } from '../../lib/utils';

interface MegaMenuProps {
  title: string;
  items: NavItem[];
  columns?: number;
}

import Link from 'next/link';

export function MegaMenu({ title, items, columns = 2 }: MegaMenuProps) {
  return (
    <div className="group relative">
      <button className="text-muted-foreground hover:text-foreground focus-visible:text-foreground flex items-center gap-1 py-6 text-sm font-medium transition-colors focus-visible:outline-none">
        {title}
        <ChevronDown className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <div className="pointer-events-none absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-2 pt-2 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
        <div className="bg-card border-border min-w-[500px] rounded-xl border p-6 shadow-2xl">
          <div
            className={cn('grid gap-x-8 gap-y-6', columns === 1 ? 'grid-cols-1' : 'grid-cols-2')}
          >
            {items.map((item, i) => (
              <Link
                key={i}
                href={item.href || `/#${item.name.toLowerCase().replace(/\\s+/g, '-')}`}
                className="group/item hover:bg-foreground/5 focus-visible:bg-foreground/5 -m-3 flex items-start gap-4 rounded-lg p-3 transition-colors focus-visible:outline-none"
              >
                <div className="bg-foreground/5 border-foreground/10 text-muted-foreground group-hover/item:text-foreground group-hover/item:border-foreground/20 mt-0.5 rounded-md border p-2 transition-colors">
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-foreground group-hover/item:text-foreground mb-1 text-sm font-medium transition-colors">
                    {item.name}
                  </div>
                  <div className="text-muted-foreground text-xs leading-relaxed">{item.desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
