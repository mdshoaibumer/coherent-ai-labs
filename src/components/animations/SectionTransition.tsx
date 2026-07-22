'use client';
import React from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * SectionTransition — refined visual bridges between sections.
 *
 * Design language: Minimal, warm, architectural.
 * No generic cyan. Uses brand accent-glow and subtle opacity.
 *
 * Variants:
 * - "fade": soft gradient dissolution
 * - "glow": centered warm line that appears on scroll
 * - "glowPremium": volumetric accent line with depth
 * - "sweep": horizontal line drawing on scroll
 * - "sweepPremium": accent-colored sweep with subtle warmth
 */

type TransitionVariant = 'fade' | 'glow' | 'glowPremium' | 'sweep' | 'sweepPremium';

interface SectionTransitionProps {
  variant?: TransitionVariant;
  className?: string;
}

export function SectionTransition({ variant = 'glow', className }: SectionTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 1, 0.3]);

  if (variant === 'fade') {
    return (
      <div
        ref={ref}
        className={cn('pointer-events-none relative z-[1] -my-10 h-20 w-full', className)}
        aria-hidden="true"
      >
        <div className="via-foreground/[0.02] absolute inset-0 bg-gradient-to-b from-transparent to-transparent" />
      </div>
    );
  }

  if (variant === 'sweep') {
    return (
      <div
        ref={ref}
        className={cn('relative h-px w-full overflow-hidden', className)}
        aria-hidden="true"
      >
        {prefersReducedMotion ? (
          <div className="bg-border absolute inset-0" />
        ) : (
          <m.div
            className="absolute inset-y-0 right-0 left-0 origin-left"
            style={{
              scaleX: lineScaleX,
              background:
                'linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)',
            }}
          />
        )}
      </div>
    );
  }

  if (variant === 'sweepPremium') {
    return (
      <div
        ref={ref}
        className={cn('relative h-px w-full overflow-hidden', className)}
        aria-hidden="true"
      >
        {prefersReducedMotion ? (
          <div className="via-border absolute inset-0 bg-gradient-to-r from-transparent to-transparent" />
        ) : (
          <>
            <m.div
              className="absolute inset-y-0 right-0 left-0 origin-left"
              style={{
                scaleX: lineScaleX,
                background:
                  'linear-gradient(to right, transparent, var(--accent-glow) 40%, var(--accent-glow) 60%, transparent)',
              }}
            />
            <m.div
              className="absolute inset-y-0 right-0 left-0 origin-left"
              style={{
                scaleX: lineScaleX,
                background:
                  'linear-gradient(to right, transparent, var(--border-hover) 30%, var(--border-hover) 70%, transparent)',
                filter: 'blur(0.5px)',
              }}
            />
          </>
        )}
      </div>
    );
  }

  if (variant === 'glowPremium') {
    return (
      <div
        ref={ref}
        className={cn('relative h-px w-full overflow-visible', className)}
        aria-hidden="true"
      >
        {/* Base line */}
        <div className="via-border absolute inset-0 bg-gradient-to-r from-transparent to-transparent" />

        {/* Animated warm accent glow */}
        {!prefersReducedMotion && (
          <>
            <m.div
              className="absolute top-1/2 left-1/2 h-px w-[50%] -translate-x-1/2 -translate-y-1/2"
              style={{
                opacity: glowOpacity,
                background:
                  'linear-gradient(to right, transparent, var(--accent-glow), transparent)',
                filter: 'blur(2px)',
              }}
            />
            <m.div
              className="absolute top-1/2 left-1/2 h-px w-[30%] -translate-x-1/2 -translate-y-1/2"
              style={{
                opacity: glowOpacity,
                background:
                  'linear-gradient(to right, transparent, var(--foreground), transparent)',
                filter: 'blur(0.5px)',
                mixBlendMode: 'overlay',
              }}
            />
          </>
        )}
      </div>
    );
  }

  // Default: "glow"
  return (
    <div
      ref={ref}
      className={cn('relative h-px w-full overflow-visible', className)}
      aria-hidden="true"
    >
      <div className="bg-border/50 absolute inset-0" />

      {!prefersReducedMotion && (
        <m.div
          className="absolute top-1/2 left-1/2 h-px w-[40%] -translate-x-1/2 -translate-y-1/2"
          style={{
            opacity: glowOpacity,
            background: 'linear-gradient(to right, transparent, var(--accent-glow), transparent)',
          }}
        />
      )}
    </div>
  );
}
