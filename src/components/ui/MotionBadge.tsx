"use client";
import React from "react";
import { m } from "motion/react";
import { Badge, BadgeProps } from "./Badge";
import { reveal, EASE_OUT_EXPO, DURATION } from "../../lib/motion";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * MotionBadge — Badge with viewport-triggered entrance animation.
 * Use for badges that should pop in when scrolled into view.
 *
 * Usage:
 *   <MotionBadge variant="glow" ping delay={0.2}>AI-Powered</MotionBadge>
 */

interface MotionBadgeProps extends BadgeProps {
  /** Delay before entrance. Default: 0 */
  delay?: number;
}

export function MotionBadge({ delay = 0, className, children, ...badgeProps }: MotionBadgeProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Badge className={className} {...badgeProps}>
        {children}
      </Badge>
    );
  }

  return (
    <m.div
      className="inline-block"
      initial={reveal.pop.hidden}
      whileInView={reveal.pop.visible}
      viewport={{ once: true }}
      transition={{ duration: DURATION.fast, delay, ease: EASE_OUT_EXPO }}
    >
      <Badge className={className} {...badgeProps}>
        {children}
      </Badge>
    </m.div>
  );
}
