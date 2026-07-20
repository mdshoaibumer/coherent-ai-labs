import React from 'react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { IconWrapper } from './IconWrapper';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface IndustryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stats?: { label: string; value: string }[];
  className?: string;
}

export function IndustryCard({ title, description, icon: Icon, stats, className }: IndustryCardProps) {
  return (
    <Card className={cn("p-8 h-full flex flex-col group", className)}>
      <div className="flex items-center gap-4 mb-6">
        <IconWrapper variant="default">
          <Icon className="w-6 h-6" />
        </IconWrapper>
        <Heading level={4}>{title}</Heading>
      </div>
      <Text className="text-[#888] flex-grow mb-6">{description}</Text>
      
      {stats && stats.length > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-[#888] uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
