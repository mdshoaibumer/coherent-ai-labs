import React from 'react';
import { cn } from '../../lib/utils';
import { Heading } from './Heading';
import { Text } from './Text';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';
import { GlassPanel } from './GlassPanel';
import { SectionReveal } from '../animations/SectionReveal';

interface CTAProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export function CTA({ title, description, primaryAction, secondaryAction, className }: CTAProps) {
  return (
    <SectionReveal>
      <GlassPanel className={cn("p-12 md:p-20 text-center relative overflow-hidden", className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Heading level={2} className="mb-6">{title}</Heading>
          <Text className="text-xl text-[#888] mb-10">{description}</Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction.href ? (
              <a href={primaryAction.href} className="w-full sm:w-auto">
                <Button variant="primary" className="w-full group">
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            ) : (
              <Button variant="primary" className="w-full sm:w-auto group" onClick={primaryAction.onClick}>
                {primaryAction.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            )}

            {secondaryAction && (
              secondaryAction.href ? (
                <a href={secondaryAction.href} className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full">{secondaryAction.label}</Button>
                </a>
              ) : (
                <Button variant="outline" className="w-full sm:w-auto" onClick={secondaryAction.onClick}>
                  {secondaryAction.label}
                </Button>
              )
            )}
          </div>
        </div>
      </GlassPanel>
    </SectionReveal>
  );
}
