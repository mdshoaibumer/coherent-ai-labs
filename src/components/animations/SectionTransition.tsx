"use client";
import React from "react";
import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * SectionTransition — smooth visual bridge between sections.
 * Place between sections to create layered depth transitions
 * instead of abrupt border-t dividers.
 *
 * Variants:
 * - "fade": gradient fade from one section to the next
 * - "glow": centered glow line that appears on scroll
 * - "glowPremium": enhanced glow with volumetric depth
 * - "sweep": horizontal line that draws across on scroll
 * - "sweepPremium": enhanced sweep with accent color
 *
 * Usage:
 *   <SectionTransition variant="glow" />
 *   <SectionTransition variant="glowPremium" />
 *   <SectionTransition variant="sweep" />
 */

type TransitionVariant = "fade" | "glow" | "glowPremium" | "sweep" | "sweepPremium";

interface SectionTransitionProps {
  variant?: TransitionVariant;
  className?: string;
}

export function SectionTransition({
  variant = "glow",
  className,
}: SectionTransitionProps) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Progress value for the sweep/glow animation
  const lineScaleX = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const glowOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7], [0, 1, 0.3]);

  if (variant === "fade") {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-24 w-full pointer-events-none -my-12 z-[1]",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
      </div>
    );
  }

  if (variant === "sweep") {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-px w-full overflow-hidden",
          className
        )}
      >
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-white/[0.06]" />
        ) : (
          <m.div
            className="absolute inset-y-0 left-0 right-0 origin-left"
            style={{
              scaleX: lineScaleX,
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.15) 70%, transparent)",
            }}
          />
        )}
      </div>
    );
  }

  if (variant === "sweepPremium") {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-0.5 w-full overflow-hidden",
          className
        )}
      >
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
        ) : (
          <>
            <m.div
              className="absolute inset-y-0 left-0 right-0 origin-left"
              style={{
                scaleX: lineScaleX,
                background:
                  "linear-gradient(to right, transparent, rgba(0,200,255,0.4) 30%, rgba(0,200,255,0.4) 70%, transparent)",
              }}
            />
            <m.div
              className="absolute inset-y-0 left-0 right-0 origin-left"
              style={{
                scaleX: lineScaleX,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.2) 30%, rgba(255,255,255,0.2) 70%, transparent)",
                filter: "blur(1px)",
              }}
            />
          </>
        )}
      </div>
    );
  }

  if (variant === "glowPremium") {
    return (
      <div
        ref={ref}
        className={cn(
          "relative h-1 w-full overflow-visible",
          className
        )}
      >
        {/* Base line with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

        {/* Animated accent core */}
        {!prefersReducedMotion && (
          <>
            <m.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-1"
              style={{
                opacity: glowOpacity,
                background:
                  "linear-gradient(to right, transparent, rgba(0,200,255,0.5), transparent)",
                filter: "blur(2px)",
              }}
            />
            <m.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-0.5"
              style={{
                opacity: glowOpacity,
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.4), transparent)",
                filter: "blur(1px)",
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
      className={cn(
        "relative h-px w-full overflow-visible",
        className
      )}
    >
      {/* Base line */}
      <div className="absolute inset-0 bg-white/[0.04]" />

      {/* Animated glow center */}
      {!prefersReducedMotion && (
        <m.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[1px]"
          style={{
            opacity: glowOpacity,
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
            boxShadow: "0 0 12px rgba(255,255,255,0.1)",
          }}
        />
      )}
    </div>
  );
}
