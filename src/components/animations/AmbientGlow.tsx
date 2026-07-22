'use client';
import React from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * AmbientGlow — Atmospheric radial light source.
 * Uses brand accent color (--accent-glow) for consistent visual identity.
 * Adapts to light/dark themes automatically via CSS variables.
 */

type GlowPosition =
  | 'top-center'
  | 'top-left'
  | 'top-right'
  | 'center'
  | 'bottom-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'custom';

type GlowSize = 'sm' | 'md' | 'lg' | 'xl';

interface AmbientGlowProps {
  position?: GlowPosition;
  size?: GlowSize;
  x?: string;
  y?: string;
  intensity?: number;
  animate?: boolean;
  animationDuration?: number;
  className?: string;
}

const SIZE_MAP: Record<GlowSize, string> = {
  sm: 'w-[300px] h-[300px]',
  md: 'w-[500px] h-[400px]',
  lg: 'w-[700px] h-[500px]',
  xl: 'w-[1000px] h-[600px]',
};

const POSITION_MAP: Record<Exclude<GlowPosition, 'custom'>, string> = {
  'top-center': 'top-[-10%] left-1/2 -translate-x-1/2',
  'top-left': 'top-[-5%] left-[-10%]',
  'top-right': 'top-[-5%] right-[-10%]',
  center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-center': 'bottom-[-10%] left-1/2 -translate-x-1/2',
  'bottom-left': 'bottom-[-5%] left-[-10%]',
  'bottom-right': 'bottom-[-5%] right-[-10%]',
};

export function AmbientGlow({
  position = 'top-center',
  size = 'lg',
  x,
  y,
  intensity = 0.03,
  animate = false,
  animationDuration = 6,
  className,
}: AmbientGlowProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const positionClasses = position === 'custom' ? '' : POSITION_MAP[position];

  const customStyle: React.CSSProperties =
    position === 'custom' ? { left: x, top: y, transform: 'translate(-50%, -50%)' } : {};

  const glowStyle: React.CSSProperties = {
    ...customStyle,
    background: `radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 65%)`,
    opacity: intensity / 0.03, // Normalize to base intensity
    filter: 'blur(60px)',
  };

  if (shouldAnimate) {
    return (
      <m.div
        className={cn('pointer-events-none absolute', SIZE_MAP[size], positionClasses, className)}
        style={glowStyle}
        animate={{
          opacity: [(intensity / 0.03) * 0.7, intensity / 0.03, (intensity / 0.03) * 0.7],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={cn('pointer-events-none absolute', SIZE_MAP[size], positionClasses, className)}
      style={glowStyle}
      aria-hidden="true"
    />
  );
}

/**
 * NoiseTexture — Film grain overlay for depth and texture.
 * Creates an organic, non-digital feel.
 */
export function NoiseTexture({ opacity = 0.02 }: { opacity?: number }) {
  return (
    <div
      className="noise-grain pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

/**
 * SectionBackground — Composable atmospheric background for sections.
 * Combines glow, noise, and optional gradient for premium depth.
 */
interface SectionBackgroundProps {
  glow?: GlowPosition;
  glowSize?: GlowSize;
  glowIntensity?: number;
  glowAnimate?: boolean;
  noise?: boolean;
  noiseOpacity?: number;
  gradient?: 'top' | 'bottom' | 'radial' | 'none';
  grid?: boolean;
  gridMask?: boolean;
  volumetric?: boolean;
  className?: string;
}

export function SectionBackground({
  glow = 'top-center',
  glowSize = 'lg',
  glowIntensity = 0.03,
  glowAnimate = false,
  noise = true,
  noiseOpacity = 0.02,
  gradient = 'none',
  grid = false,
  gridMask = true,
  volumetric = false,
  className,
}: SectionBackgroundProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden="true"
    >
      <AmbientGlow
        position={glow}
        size={glowSize}
        intensity={glowIntensity}
        animate={glowAnimate}
      />
      {noise && <NoiseTexture opacity={noiseOpacity} />}

      {/* Architectural grid overlay */}
      {grid && (
        <div
          className="bg-grid absolute inset-0"
          style={
            gridMask
              ? {
                  maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
                }
              : undefined
          }
        />
      )}

      {/* Volumetric multi-layer depth */}
      {volumetric && (
        <>
          <div className="absolute top-[10%] left-[15%] h-[400px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-15 blur-[80px]" />
          <div className="absolute right-[10%] bottom-[20%] h-[350px] w-[450px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-10 blur-[60px]" />
        </>
      )}

      {gradient === 'top' && (
        <div className="from-background absolute inset-x-0 top-0 h-40 bg-gradient-to-b to-transparent" />
      )}
      {gradient === 'bottom' && (
        <div className="from-background absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />
      )}
      {gradient === 'radial' && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,var(--background)_75%)]" />
      )}
    </div>
  );
}
