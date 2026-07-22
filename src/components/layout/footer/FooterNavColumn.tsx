'use client';
import { ReactNode } from 'react';
import { m } from 'motion/react';

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
      <h4 className="font-display text-foreground mb-6 text-sm font-medium tracking-tight">
        {title}
      </h4>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item}>
            {renderItem ? (
              renderItem(item)
            ) : (
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground group flex items-center gap-2 text-sm transition-colors"
              >
                <span className="h-px w-0 bg-white transition-all duration-300 group-hover:w-3" />
                {item}
              </a>
            )}
          </li>
        ))}
      </ul>
    </m.div>
  );
}
