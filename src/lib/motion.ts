/**
 * Global Motion System — Coherent AI Labs
 *
 * Standardized timing, easing, and reveal variant factories.
 * Every animation across the site should consume these constants
 * to ensure a unified, premium motion language.
 */

import { Variants, Transition } from 'motion/react';

/* ═══════════════════════════════════════════════════════════
   EASING PRESETS
═══════════════════════════════════════════════════════════ */

/** Exponential ease-out — fast attack, slow settle. Primary easing. */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Premium cinematic ease — slower, more elegant */
export const EASE_OUT_CUBIC: [number, number, number, number] = [0.33, 1, 0.68, 1];

/** Smooth ease-in-out for breathing/looping animations */
export const EASE_IN_OUT: [number, number, number, number] = [0.4, 0, 0.2, 1];

/** Snappy spring-like feel for micro-interactions */
export const EASE_SNAP: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Smooth spring for organic motion */
export const EASE_SPRING: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

/* ═══════════════════════════════════════════════════════════
   DURATION PRESETS
═══════════════════════════════════════════════════════════ */

export const DURATION = {
  /** Micro-interactions (button press, icon flip) */
  instant: 0.2,
  /** Fast transitions (tooltip, small reveals) */
  fast: 0.35,
  /** Standard transitions (card reveal, panel swap) */
  normal: 0.5,
  /** Premium reveals (section headers, hero elements) */
  slow: 0.8,
  /** Dramatic reveals (page-level, first impressions) */
  dramatic: 1.0,
} as const;

/* ═══════════════════════════════════════════════════════════
   STAGGER PRESETS
═══════════════════════════════════════════════════════════ */

export const STAGGER = {
  /** Tight stagger for related items (pills, tags) */
  tight: 0.03,
  /** Default stagger for list items */
  default: 0.06,
  /** Wider stagger for cards and larger elements */
  wide: 0.1,
  /** Dramatic stagger for hero-level reveals */
  dramatic: 0.15,
} as const;

/* ═══════════════════════════════════════════════════════════
   TRANSITION PRESETS
═══════════════════════════════════════════════════════════ */

export const TRANSITION = {
  /** Standard section element transition */
  default: {
    duration: DURATION.normal,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  /** Premium/slow transition for headlines and key reveals */
  premium: {
    duration: DURATION.slow,
    ease: EASE_OUT_EXPO,
  } satisfies Transition,

  /** Fast transition for micro-interactions */
  fast: {
    duration: DURATION.fast,
    ease: EASE_SNAP,
  } satisfies Transition,

  /** Spring config for physical interactions */
  spring: {
    type: 'spring' as const,
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  } satisfies Transition,
} as const;

/* ═══════════════════════════════════════════════════════════
   REVEAL VARIANTS — multiple motion signatures
   Each variant defines hidden → visible states.
   Use with: <m.div variants={reveal.fadeUp} initial="hidden" whileInView="visible" />
═══════════════════════════════════════════════════════════ */

export const reveal = {
  /** Classic fade + rise — refined with blur */
  fadeUp: {
    hidden: { opacity: 0, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Premium fade up with deeper blur — more cinematic */
  fadeUpPremium: {
    hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.95, ease: EASE_OUT_CUBIC },
    },
  } satisfies Variants,

  /** Fade + slight scale from depth */
  scaleUp: {
    hidden: { opacity: 0, scale: 0.94, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Deep scale reveal — premium feel */
  scaleUpPremium: {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: EASE_OUT_CUBIC },
    },
  } satisfies Variants,

  /** Slide from left */
  slideRight: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.normal, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Slide from right */
  slideLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: DURATION.normal, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Perspective tilt reveal — feels 3D */
  perspective: {
    hidden: { opacity: 0, rotateX: 8, y: 20, filter: 'blur(4px)' },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Deep perspective reveal — premium 3D effect */
  perspectivePremium: {
    hidden: { opacity: 0, rotateX: 12, y: 30, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: EASE_OUT_CUBIC },
    },
  } satisfies Variants,

  /** Pure fade — no movement */
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: DURATION.normal, ease: EASE_OUT_EXPO },
    },
  } satisfies Variants,

  /** Scale from center — good for icons and badges */
  pop: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: DURATION.fast, ease: EASE_SNAP },
    },
  } satisfies Variants,

  /** Layered cascade reveal — multiple depths */
  layered: {
    hidden: { opacity: 0, y: 50, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1.1, ease: EASE_OUT_CUBIC },
    },
  } satisfies Variants,
} as const;

/* ═══════════════════════════════════════════════════════════
   STAGGER CONTAINER — wraps children with stagger
═══════════════════════════════════════════════════════════ */

export function staggerContainer(
  staggerDelay: number = STAGGER.default,
  delayChildren: number = 0,
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/* ═══════════════════════════════════════════════════════════
   STAGGER ITEM — generic child variant for stagger containers
═══════════════════════════════════════════════════════════ */

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION.normal, ease: EASE_OUT_EXPO },
  },
};

/* ═══════════════════════════════════════════════════════════
   STAGGER ITEM VARIANTS — different intensities
═══════════════════════════════════════════════════════════ */

export const staggerItemPremium: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: DURATION.slow, ease: EASE_OUT_CUBIC },
  },
};

export const staggerItemScale: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: DURATION.slow, ease: EASE_OUT_EXPO },
  },
};

/* ═══════════════════════════════════════════════════════════
   HOVER PRESETS — consistent hover behavior
═══════════════════════════════════════════════════════════ */

export const hover = {
  /** Subtle lift for cards */
  lift: { y: -4, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
  /** Stronger lift for featured elements */
  liftStrong: { y: -6, scale: 1.01, transition: { duration: 0.3, ease: EASE_OUT_EXPO } },
  /** Premium lift with glow — deep elevation */
  liftPremium: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.35, ease: EASE_OUT_CUBIC },
  },
  /** Scale for buttons and icons */
  scale: { scale: 1.05, transition: { duration: 0.2, ease: EASE_SNAP } },
  /** Premium scale with smooth spring */
  scalePremium: {
    scale: 1.08,
    transition: { duration: 0.3, ease: EASE_SPRING },
  },
  /** Press feedback */
  tap: { scale: 0.97 },
  /** Premium press with spring */
  tapPremium: { scale: 0.93, transition: { duration: 0.2, ease: EASE_SNAP } },
} as const;

/* ═══════════════════════════════════════════════════════════
   SCROLL CHOREOGRAPHY — viewport-triggered orchestrations
   Use for multi-element scenes that need coordinated timing.
═══════════════════════════════════════════════════════════ */

/**
 * Creates a choreographed entrance for a group of elements.
 * Each element gets a progressively delayed entrance.
 */
export function choreography(
  elementCount: number,
  baseDelay: number = 0,
  staggerAmount: number = 0.1,
  duration: number = DURATION.slow,
) {
  return Array.from({ length: elementCount }, (_, i) => ({
    hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration,
        delay: baseDelay + i * staggerAmount,
        ease: EASE_OUT_CUBIC,
      },
    },
  }));
}

/* ═══════════════════════════════════════════════════════════
   SCROLL-LINKED TRANSFORMS — helper for parallax effects
═══════════════════════════════════════════════════════════ */

export const PARALLAX = {
  /** Slow drift for background elements */
  backgroundSlow: { input: [0, 1], output: [0, -40] },
  /** Medium parallax for mid-ground */
  midground: { input: [0, 1], output: [0, -80] },
  /** Fast parallax for foreground elements */
  foreground: { input: [0, 1], output: [0, -120] },
  /** Fade out on scroll */
  fadeOut: { input: [0, 0.5], output: [1, 0] },
  /** Scale down on scroll */
  scaleDown: { input: [0, 1], output: [1, 0.9] },
} as const;

/* ═══════════════════════════════════════════════════════════
   MAGNETIC INTERACTION — physics presets for magnetic elements
═══════════════════════════════════════════════════════════ */

export const MAGNETIC = {
  /** Default magnetic button pull */
  button: { strength: 25, stiffness: 200, damping: 25, mass: 0.1 },
  /** Lighter magnetic for navigation links */
  link: { strength: 12, stiffness: 150, damping: 20, mass: 0.1 },
  /** Strong magnetic for hero CTAs */
  cta: { strength: 35, stiffness: 180, damping: 22, mass: 0.15 },
} as const;
