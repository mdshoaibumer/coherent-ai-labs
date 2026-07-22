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
    <div className="group relative py-6 pl-8 sm:pl-32">
      <div className="absolute top-6 left-0 hidden w-24 flex-col items-end pr-4 sm:flex">
        {date && <span className="text-sm font-medium text-[var(--color-primary)]">{date}</span>}
      </div>

      {/* Line */}
      {!isLast && (
        <div className="absolute top-14 bottom-0 left-4 w-px bg-gradient-to-b from-white/20 to-transparent sm:left-[7.5rem]" />
      )}

      {/* Node */}
      <div className="bg-background border-border absolute top-6 left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110 group-hover:border-[var(--color-primary)] sm:left-[6.5rem]">
        <div className="h-2 w-2 rounded-full bg-white/20 transition-colors group-hover:bg-[var(--color-primary)]" />
      </div>

      <div className="bg-accent border-border hover:bg-accent rounded-2xl border p-6 transition-colors">
        <div className="mb-4 flex items-center gap-4">
          {Icon && (
            <IconWrapper variant="default" size="sm">
              <Icon className="h-5 w-5" />
            </IconWrapper>
          )}
          <Heading level={4}>{title}</Heading>
        </div>
        <Text className="text-muted-foreground">{description}</Text>
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
    <div className={cn('mx-auto w-full max-w-4xl', className)}>
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
}
