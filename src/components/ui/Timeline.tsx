import React from 'react';
import { cn } from '../../lib/utils';
import { Heading } from './Heading';
import { Text } from './Text';
import { IconWrapper } from './IconWrapper';
import { LucideIcon } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  date?: string;
  isLast?: boolean;
}

export function TimelineItem({ title, description, icon: Icon, date, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      <div className="hidden sm:flex flex-col items-end absolute left-0 top-6 w-24 pr-4">
        {date && <span className="text-sm font-medium text-[var(--color-primary)]">{date}</span>}
      </div>
      
      {/* Line */}
      {!isLast && (
        <div className="absolute left-4 sm:left-[7.5rem] top-14 bottom-0 w-px bg-gradient-to-b from-white/20 to-transparent" />
      )}
      
      {/* Node */}
      <div className="absolute left-0 sm:left-[6.5rem] top-6 w-8 h-8 rounded-full bg-[#020202] border-2 border-white/10 flex items-center justify-center group-hover:border-[var(--color-primary)] group-hover:scale-110 transition-all duration-300 z-10">
        <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[var(--color-primary)] transition-colors" />
      </div>

      <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors">
        <div className="flex items-center gap-4 mb-4">
          {Icon && (
            <IconWrapper variant="default" size="sm">
              <Icon className="w-5 h-5" />
            </IconWrapper>
          )}
          <Heading level={4}>{title}</Heading>
        </div>
        <Text className="text-[#888]">{description}</Text>
      </div>
    </div>
  );
}

interface TimelineProps {
  items: Omit<TimelineItemProps, 'isLast'>[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("max-w-4xl mx-auto w-full", className)}>
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          {...item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
}
