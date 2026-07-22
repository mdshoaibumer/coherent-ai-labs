'use client';
import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const glassPanelVariants = cva(
  'relative overflow-hidden border backdrop-blur-xl transition-all duration-600',
  {
    variants: {
      variant: {
        default: 'bg-card border-border',
        light: 'bg-accent border-border',
        dark: 'bg-muted border-border',
        premium: 'bg-accent border-border-hover shadow-[var(--shadow-glow)]',
      },
      radius: {
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        xl: 'rounded-3xl',
      },
      hover: {
        true: 'group hover:bg-accent hover:border-border-hover hover:shadow-[var(--shadow-sm)]',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      radius: 'lg',
      hover: false,
    },
  },
);

export interface GlassPanelProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassPanelVariants> {
  children: ReactNode;
  gradient?: boolean;
}

export function GlassPanel({
  className,
  variant,
  radius,
  hover = false,
  gradient = false,
  children,
  ...props
}: GlassPanelProps) {
  return (
    <div className={cn(glassPanelVariants({ variant, radius, hover, className }))} {...props}>
      {/* Top edge highlight */}
      <div className="via-foreground/[0.08] pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />

      {gradient && (
        <div className="via-foreground/[0.12] pointer-events-none absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
      )}

      {/* Subtle accent glow on hover */}
      {hover && (
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-glow),transparent_70%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      )}

      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
