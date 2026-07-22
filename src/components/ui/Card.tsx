'use client';
import { ReactNode, forwardRef } from 'react';
import { m, HTMLMotionProps, useMotionValue, useTransform } from 'motion/react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const cardVariants = cva(
  'group relative rounded-2xl overflow-hidden transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-ring',
  {
    variants: {
      variant: {
        default: 'bg-card border border-border hover:border-border-hover',
        glass: 'glass-panel',
        ghost: 'bg-transparent border border-transparent hover:border-border',
        elevated:
          'bg-card border border-border shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] hover:border-border-hover',
      },
      padding: {
        default: 'p-6 sm:p-8',
        sm: 'p-4 sm:p-6',
        lg: 'p-8 sm:p-10',
        none: 'p-0',
      },
      hoverEffect: {
        true: '',
        false: '',
      },
      premium: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'default',
      hoverEffect: true,
      premium: false,
    },
  },
);

export interface CardProps
  extends Omit<HTMLMotionProps<'div'>, 'className' | 'style' | 'onMouseMove'>,
    VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hoverEffect, premium, children, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotion();
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const highlightBackground = useTransform(
      [mouseX, mouseY],
      ([x, y]) =>
        `radial-gradient(350px circle at ${x}px ${y}px, var(--accent-glow), transparent 100%)`,
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const { left, top } = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - left);
      mouseY.set(e.clientY - top);
    };

    return (
      <m.div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hoverEffect, premium, className }))}
        onMouseMove={hoverEffect && !prefersReducedMotion ? handleMouseMove : undefined}
        whileHover={!prefersReducedMotion && premium ? { scale: 1.01, y: -3 } : undefined}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        {...props}
      >
        {/* Mouse-following highlight gradient */}
        {hoverEffect && !prefersReducedMotion && (
          <m.div
            className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: highlightBackground }}
          />
        )}

        {/* Top edge highlight on hover */}
        <div className="via-foreground/[0.06] pointer-events-none absolute inset-x-0 top-0 z-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex h-full flex-col">{children}</div>
      </m.div>
    );
  },
);
Card.displayName = 'Card';
