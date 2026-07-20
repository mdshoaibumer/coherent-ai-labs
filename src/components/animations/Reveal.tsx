"use client";
import React from "react";
import { m, Variants } from "motion/react";
import { cn } from "../../lib/utils";
import { reveal, staggerContainer, staggerItem, STAGGER, EASE_OUT_EXPO, DURATION } from "../../lib/motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/* ═══════════════════════════════════════════════════════════
   REVEAL — unified viewport-triggered reveal component
   Replaces repetitive inline whileInView patterns across the site.
═══════════════════════════════════════════════════════════ */

type RevealVariant =
  | "fadeUp"
  | "scaleUp"
  | "slideRight"
  | "slideLeft"
  | "perspective"
  | "fade"
  | "pop";

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
  as?: "div" | "section" | "span" | "article" | "li";
}

export function Reveal({
  children,
  variant = "fadeUp",
  className,
  delay = 0,
  duration,
  once = true,
  margin = "-80px",
  as = "div",
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Comp = as;
    return <Comp className={className}>{children}</Comp>;
  }

  const baseVariants = reveal[variant];

  // Override transition with custom delay/duration if provided
  const variants: Variants = {
    hidden: baseVariants.hidden,
    visible: {
      ...baseVariants.visible,
      transition: {
        ...(typeof baseVariants.visible === "object" && "transition" in baseVariants.visible
          ? (baseVariants.visible as { transition: object }).transition
          : {}),
        ...(duration !== undefined ? { duration } : {}),
        ...(delay > 0 ? { delay } : {}),
      },
    },
  };

  const Comp = m[as];

  return (
    <Comp
      className={cn("will-change-[transform,opacity,filter]", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
    >
      {children}
    </Comp>
  );
}

/* ═══════════════════════════════════════════════════════════
   REVEAL STAGGER — container that staggers its children
   Children should use <RevealItem> or <m.div variants={staggerItem}>
═══════════════════════════════════════════════════════════ */

interface RevealStaggerProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
  once?: boolean;
  margin?: string;
  as?: "div" | "ul" | "ol" | "section";
}

export function RevealStagger({
  children,
  className,
  stagger = STAGGER.default,
  delayChildren = 0,
  once = true,
  margin = "-80px",
  as = "div",
}: RevealStaggerProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    const Comp = as;
    return <Comp className={className}>{children}</Comp>;
  }

  const Comp = m[as];

  return (
    <Comp
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
    >
      {children}
    </Comp>
  );
}

/* ═══════════════════════════════════════════════════════════
   REVEAL ITEM — child of RevealStagger
═══════════════════════════════════════════════════════════ */

interface RevealItemProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span" | "article";
}

export function RevealItem({ children, className, as = "div" }: RevealItemProps) {
  const Comp = m[as];

  return (
    <Comp className={className} variants={staggerItem}>
      {children}
    </Comp>
  );
}
