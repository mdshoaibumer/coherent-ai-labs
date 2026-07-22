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

export function IndustryCard({
  title,
  description,
  icon: Icon,
  stats,
  className,
}: IndustryCardProps) {
  return (
    <Card className={cn('group flex h-full flex-col p-8', className)}>
      <div className="mb-6 flex items-center gap-4">
        <IconWrapper variant="default">
          <Icon className="h-6 w-6" />
        </IconWrapper>
        <Heading level={4}>{title}</Heading>
      </div>
      <Text className="text-muted-foreground mb-6 flex-grow">{description}</Text>

      {stats && stats.length > 0 && (
        <div className="border-border grid grid-cols-2 gap-4 border-t pt-6">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="text-foreground mb-1 text-2xl font-bold">{stat.value}</div>
              <div className="text-muted-foreground text-xs tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
