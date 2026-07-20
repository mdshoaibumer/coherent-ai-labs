"use client";
import React from "react";
import { Card, CardProps } from "./Card";
import { reveal, hover, EASE_OUT_EXPO, DURATION } from "../../lib/motion";

/**
 * MotionCard — Card with built-in viewport entrance + premium hover.
 * Drop-in replacement for Card when you want automatic reveal behavior.
 *
 * Usage:
 *   <MotionCard entrance="fadeUp" delay={0.1}>...</MotionCard>
 */

type EntranceVariant = "fadeUp" | "scaleUp" | "slideRight" | "slideLeft" | "perspective";

interface MotionCardProps extends CardProps {
  /** Entrance animation variant. Default: "fadeUp" */
  entrance?: EntranceVariant;
  /** Delay before entrance animation. Default: 0 */
  delay?: number;
  /** Whether to only animate once. Default: true */
  once?: boolean;
  /** Viewport margin for trigger. Default: "-60px" */
  margin?: string;
}

export function MotionCard({
  entrance = "fadeUp",
  delay = 0,
  once = true,
  margin = "-60px",
  children,
  ...cardProps
}: MotionCardProps) {
  const entranceVariant = reveal[entrance];

  return (
    <Card
      initial={entranceVariant.hidden}
      whileInView={entranceVariant.visible}
      viewport={{ once, margin }}
      transition={{
        duration: DURATION.normal,
        delay,
        ease: EASE_OUT_EXPO,
      }}
      whileHover={hover.lift}
      whileTap={hover.tap}
      {...cardProps}
    >
      {children}
    </Card>
  );
}
