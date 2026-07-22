'use client';
import React from 'react';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Reveal } from '../animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../animations/AmbientGlow';
import { cn } from '../../lib/utils';

/**
 * PageHero — reusable hero section for sub-pages.
 * Provides consistent layout, motion, and atmosphere for
 * Platform, Services, Solutions, Industries, Blog, etc.
 *
 * Usage:
 *   <PageHero
 *     eyebrow="Platform"
 *     title="Enterprise AI Platform Architecture"
 *     description="The unified AI platform for enterprise engineering teams."
 *   />
 */

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = 'center',
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative flex min-h-[50vh] items-center overflow-hidden pt-32 pb-20',
        className,
      )}
    >
      {/* Atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.03} />
      <NoiseTexture opacity={0.015} />

      <Container
        className={cn(
          'relative z-10',
          align === 'center' && 'flex flex-col items-center text-center',
        )}
      >
        <Reveal variant="fadeUp">
          {eyebrow && (
            <span className="text-muted-foreground/60 border-border bg-accent mb-6 inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
              {eyebrow}
            </span>
          )}
          <Heading level={1} className="max-w-4xl">
            {title}
          </Heading>
          {description && (
            <Text size="lg" className="mt-6 max-w-2xl">
              {description}
            </Text>
          )}
        </Reveal>

        {/* Optional children below the header (CTAs, badges, etc.) */}
        {children && (
          <Reveal variant="fade" delay={0.3} className="mt-10">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
