import React from 'react';
import { Card } from './Card';
import { Heading } from './Heading';
import { Text } from './Text';
import { IconWrapper } from './IconWrapper';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  className?: string;
}

export function FeatureCard({ title, description, icon: Icon, href, className }: FeatureCardProps) {
  const content = (
    <Card className={cn('group flex h-full flex-col p-8', className)}>
      <IconWrapper
        variant="default"
        className="mb-6 transition-transform duration-300 group-hover:scale-110"
      >
        <Icon className="h-6 w-6" />
      </IconWrapper>
      <Heading level={4} className="mb-3">
        {title}
      </Heading>
      <Text className="text-muted-foreground flex-grow">{description}</Text>
      {href && (
        <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-primary)]">
          Learn more{' '}
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </Card>
  );

  if (href) {
    return (
      <a
        href={href}
        className="focus-visible:ring-ring block h-full rounded-2xl focus-visible:ring-2 focus-visible:outline-none"
      >
        {content}
      </a>
    );
  }
  return content;
}
