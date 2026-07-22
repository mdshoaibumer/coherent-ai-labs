'use client';
import React from 'react';
import { cn } from '../../lib/utils';
import { Heading } from './Heading';
import { Text } from './Text';
import { ArrowRight } from 'lucide-react';
import { GlassPanel } from './GlassPanel';
import { MagneticButton } from '../animations/MagneticButton';
import { Reveal } from '../animations/Reveal';

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
    <Reveal variant="scaleUp">
      <GlassPanel className={cn('relative overflow-hidden p-12 text-center md:p-20', className)}>
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-50" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Heading level={2} className="mb-6">
            {title}
          </Heading>
          <Text className="text-muted-foreground mb-10 text-xl">{description}</Text>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryAction.href ? (
              <a href={primaryAction.href} className="w-full sm:w-auto">
                <MagneticButton
                  strength={25}
                  className="group focus-visible:ring-ring flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 outline-none hover:scale-[1.02] hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                >
                  {primaryAction.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </a>
            ) : (
              <MagneticButton
                strength={25}
                className="group focus-visible:ring-ring flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-medium text-black shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 outline-none hover:scale-[1.02] hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </MagneticButton>
            )}

            {secondaryAction &&
              (secondaryAction.href ? (
                <a href={secondaryAction.href} className="w-full sm:w-auto">
                  <MagneticButton
                    strength={18}
                    className="focus-visible:ring-ring text-foreground border-border hover:border-border-hover flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border bg-white/5 px-8 py-4 text-lg font-medium transition-all duration-300 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                  >
                    {secondaryAction.label}
                  </MagneticButton>
                </a>
              ) : (
                <MagneticButton
                  strength={18}
                  className="focus-visible:ring-ring text-foreground border-border hover:border-border-hover flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border bg-white/5 px-8 py-4 text-lg font-medium transition-all duration-300 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </MagneticButton>
              ))}
          </div>
        </div>
      </GlassPanel>
    </Reveal>
  );
}
