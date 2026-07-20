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

export function SolutionCard({ title, description, icon: Icon, features, className }: SolutionCardProps) {
  return (
    <GlassPanel className={cn("p-8 h-full flex flex-col", className)}>
      <IconWrapper variant="active" className="mb-6">
        <Icon className="w-6 h-6" />
      </IconWrapper>
      <Heading level={3} className="mb-4">{title}</Heading>
      <Text className="text-[#888] mb-8 flex-grow">{description}</Text>
      
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
            <Text className="text-sm text-[#e0e0e0]">{feature}</Text>
          </li>
        ))}
      </ul>
    </GlassPanel>
  );
}
