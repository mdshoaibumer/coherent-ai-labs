import React from 'react';
import { GlassPanel } from './GlassPanel';
import { Heading } from './Heading';
import { Text } from './Text';
import { IconWrapper } from './IconWrapper';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  className?: string;
}

export function SolutionCard({
  title,
  description,
  icon: Icon,
  features,
  className,
}: SolutionCardProps) {
  return (
    <GlassPanel className={cn('flex h-full flex-col p-8', className)}>
      <IconWrapper variant="active" className="mb-6">
        <Icon className="h-6 w-6" />
      </IconWrapper>
      <Heading level={3} className="mb-4">
        {title}
      </Heading>
      <Text className="text-muted-foreground mb-8 flex-grow">{description}</Text>

      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
            <Text className="text-sm text-[#e0e0e0]">{feature}</Text>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}
