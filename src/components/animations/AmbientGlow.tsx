"use client";
import React from "react";
import { m } from "motion/react";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * AmbientGlow — reusable atmospheric lighting component.
 * Provides consistent, subtle radial illumination across sections.
 * Optionally animates (breathing) for living atmosphere.
 *
 * Usage:
 *   <AmbientGlow position="top-center" size="lg" />
 *   <AmbientGlow position="custom" x="20%" y="60%" animate />
 */

type GlowPosition =
  | "top-center"
  | "top-left"
  | "top-right"
  | "center"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right"
  | "custom";

type GlowSize = "sm" | "md" | "lg" | "xl";

interface AmbientGlowProps {
  position?: GlowPosition;
  size?: GlowSize;
  /** Custom x position (used when position="custom") */
  x?: string;
  /** Custom y position (used when position="custom") */
  y?: string;
  /** Intensity of the glow (0-1). Default: 0.03 */
  intensity?: number;
  /** Whether the glow breathes/pulses subtly. Default: false */
  animate?: boolean;
  /** Animation duration in seconds. Default: 5 */
  animationDuration?: number;
  className?: string;
}

const SIZE_MAP: Record<GlowSize, string> = {
  sm: "w-[300px] h-[300px]",
  md: "w-[500px] h-[500px]",
  lg: "w-[700px] h-[700px]",
  xl: "w-[1000px] h-[600px]",
};

const POSITION_MAP: Record<Exclude<GlowPosition, "custom">, string> = {
  "top-center": "top-[-10%] left-1/2 -translate-x-1/2",
  "top-left": "top-[-5%] left-[-10%]",
  "top-right": "top-[-5%] right-[-10%]",
  center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-center": "bottom-[-10%] left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-[-5%] left-[-10%]",
  "bottom-right": "bottom-[-5%] right-[-10%]",
};

export function AmbientGlow({
  position = "top-center",
  size = "lg",
  x,
  y,
  intensity = 0.03,
  animate = false,
  animationDuration = 5,
  className,
}: AmbientGlowProps) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  const positionClasses =
    position === "custom" ? "" : POSITION_MAP[position];

  const customStyle: React.CSSProperties =
    position === "custom"
      ? { left: x, top: y, transform: "translate(-50%, -50%)" }
      : {};

  const glowStyle: React.CSSProperties = {
    ...customStyle,
    background: `radial-gradient(ellipse at center, rgba(255,255,255,${intensity}) 0%, rgba(255,255,255,${intensity * 0.4}) 40%, transparent 70%)`,
  };

  if (shouldAnimate) {
    return (
      <m.div
        className={cn(
          "absolute pointer-events-none",
          SIZE_MAP[size],
          positionClasses,
          className
        )}
        style={glowStyle}
        animate={{
          opacity: [0.6, 1, 0.6],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        "absolute pointer-events-none",
        SIZE_MAP[size],
        positionClasses,
        className
      )}
      style={glowStyle}
    />
  );
}

/**
 * NoiseTexture — consistent film grain overlay for depth.
 * Use once per section or as a global layer.
 */
export function NoiseTexture({ opacity = 0.02 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none mix-blend-screen"
      style={{
        opacity,
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
      }}
    />
  );
}
