'use client';
import React from 'react';
import { RevealStagger, RevealItem } from '../animations/Reveal';
import { cn } from '../../lib/utils';

/**
 * StatsRow — horizontal row of key metrics/statistics.
 * Automatically staggers entrance and handles responsive layout.
 *
 * Usage:
 *   <StatsRow stats={[
 *     { value: "99.9%", label: "Uptime SLA" },
 *     { value: "3x", label: "Faster Delivery" },
 *   ]} />
 */

interface Stat {
  value: string;
  label: string;
  /** Optional suffix after value (e.g., "+", "%") */
  suffix?: string;
}

interface StatsRowProps {
  stats: Stat[];
  className?: string;
  /** Visual variant. Default: "default" */
  variant?: 'default' | 'bordered' | 'cards';
}

export function StatsRow({ stats, className, variant = 'default' }: StatsRowProps) {
  return (
    <RevealStagger
      stagger={0.1}
      className={cn(
        'grid gap-8',
        stats.length <= 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-4',
        className,
      )}
    >
      {stats.map((stat) => (
        <RevealItem key={stat.label}>
          <div
            className={cn(
              'text-center',
              variant === 'bordered' && 'border-border border-t py-6',
              variant === 'cards' && 'bg-accent border-border rounded-2xl border p-6',
            )}
          >
            <div className="font-display text-foreground mb-2 text-3xl font-bold tracking-tight md:text-4xl">
              {stat.value}
              {stat.suffix && (
                <span className="text-muted-foreground/70 text-2xl">{stat.suffix}</span>
              )}
            </div>
            <div className="text-muted-foreground/70 font-mono text-xs tracking-widest uppercase">
              {stat.label}
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
