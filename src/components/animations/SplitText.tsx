"use client";
import React, { useMemo } from "react";
import { m, Variants, Transition } from "motion/react";
import { cn } from "../../lib/utils";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface SplitTextProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  splitBy?: "word" | "character" | "line";
  staggerDelay?: number;
  baseDelay?: number;
  duration?: number;
  blur?: number;
  yOffset?: number;
  once?: boolean;
  /** When splitBy="line", provide the line delimiter (default: "\n") */
  lineDelimiter?: string;
  /** Whether to trigger on viewport entry (true) or immediately on mount (false). Default: false (animate on mount). */
  triggerOnView?: boolean;
}

const charVariants: Variants = {
  hidden: (custom: { blur: number; yOffset: number }) => ({
    opacity: 0,
    y: custom.yOffset,
    filter: `blur(${custom.blur}px)`,
  }),
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; baseDelay: number; duration: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.baseDelay,
    },
  }),
};

export function SplitText({
  children,
  className,
  as: Component = "span",
  splitBy = "word",
  staggerDelay = 0.035,
  baseDelay = 0,
  duration = 0.7,
  blur = 8,
  yOffset = 20,
  once = true,
  lineDelimiter = "\n",
  triggerOnView = false,
}: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion();

  const segments = useMemo(() => {
    if (splitBy === "character") {
      return children.split("").map((char, i) => ({
        key: `${char}-${i}`,
        content: char === " " ? "\u00A0" : char,
        isSpace: char === " ",
      }));
    }
    if (splitBy === "line") {
      return children.split(lineDelimiter).map((line, i) => ({
        key: `line-${i}`,
        content: line,
        isSpace: false,
      }));
    }
    // Word split — preserve spaces between words
    return children.split(" ").map((word, i, arr) => ({
      key: `${word}-${i}`,
      content: word + (i < arr.length - 1 ? "\u00A0" : ""),
      isSpace: false,
    }));
  }, [children, splitBy, lineDelimiter]);

  if (prefersReducedMotion) {
    return <span className={className}>{children}</span>;
  }

  const itemTransition: Transition = {
    duration,
    ease: [0.16, 1, 0.3, 1],
  };

  const motionProps = triggerOnView
    ? { initial: "hidden" as const, whileInView: "visible" as const, viewport: { once } }
    : { initial: "hidden" as const, animate: "visible" as const };

  return (
    <m.span
      className={cn("inline-block", className)}
      variants={containerVariants}
      {...motionProps}
      custom={{ staggerDelay, baseDelay, duration }}
      aria-label={children}
    >
      {segments.map((segment) => (
        <m.span
          key={segment.key}
          className={cn(
            "inline-block will-change-[transform,opacity,filter]",
            splitBy === "line" && "block"
          )}
          variants={charVariants}
          custom={{ blur, yOffset }}
          transition={itemTransition}
          aria-hidden="true"
        >
          {segment.content}
        </m.span>
      ))}
    </m.span>
  );
}
