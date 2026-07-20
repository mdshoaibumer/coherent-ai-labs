"use client";
import { ReactNode } from "react";
import {m } from "motion/react";

interface FooterNavColumnProps {
  title: string;
  items: string[];
  delay?: number;
  renderItem?: (item: string) => ReactNode;
}

export function FooterNavColumn({ title, items, delay = 0, renderItem }: FooterNavColumnProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <h4 className="font-display text-white font-medium mb-6 tracking-tight text-sm">{title}</h4>
      <ul className="space-y-4">
        {items.map(item => (
          <li key={item}>
            {renderItem ? renderItem(item) : (
              <a href="#" className="text-sm text-[#888] hover:text-white transition-colors flex items-center gap-2 group">
                <span className="w-0 h-px bg-white group-hover:w-3 transition-all duration-300" />
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>
    </m.div>
  );
}
