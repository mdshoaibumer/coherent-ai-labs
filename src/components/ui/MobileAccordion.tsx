'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { m, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { NavItem } from '../../types';

interface MobileAccordionProps {
  title: string;
  items: NavItem[];
}

export function MobileAccordion({ title, items }: MobileAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-border border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-muted-foreground hover:text-foreground focus-visible:text-foreground flex w-full items-center justify-between py-4 text-xl font-medium transition-colors focus-visible:outline-none"
      >
        {title}
        <ChevronDown
          className={cn('h-5 w-5 transition-transform duration-300', isOpen && 'rotate-180')}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 pt-2 pb-6">
              {items.map((item, i) => (
                <a
                  key={i}
                  href={item.href || `#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-muted-foreground hover:text-foreground focus-visible:text-foreground flex items-center gap-4 transition-colors focus-visible:outline-none"
                >
                  <item.icon className="h-4 w-4" />
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
