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
    <Card className={cn("p-8 h-full flex flex-col group", className)}>
      <IconWrapper variant="default" className="mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6" />
      </IconWrapper>
      <Heading level={4} className="mb-3">{title}</Heading>
      <Text className="text-[#888] flex-grow">{description}</Text>
      {href && (
        <div className="mt-6 flex items-center text-sm font-medium text-[var(--color-primary)]">
          Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </Card>
  );

  if (href) {
    return <a href={href} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl">{content}</a>;
  }
  return content;
}
