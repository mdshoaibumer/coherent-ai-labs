/**
 * Design Tokens — Coherent AI Labs Enterprise Design System
 *
 * Single source of truth for all design values.
 * Components should consume these tokens rather than hardcoding values.
 * These mirror and extend the CSS custom properties in index.css.
 *
 * Usage:
 *   import { colors, spacing, typography } from '@/lib/tokens';
 */

/* ═══════════════════════════════════════════════════════════
   COLORS — semantic color system
═══════════════════════════════════════════════════════════ */

export const colors = {
  /** Core backgrounds */
  background: {
    base: "#020202",
    elevated: "#050505",
    card: "#050505",
    hover: "#0a0a0a",
    overlay: "rgba(0, 0, 0, 0.95)",
  },

  /** Foreground / text */
  text: {
    primary: "#eaeaea",
    secondary: "#a3a3a3",
    muted: "#888888",
    dimmed: "#666666",
    ghost: "#555555",
    disabled: "#444444",
  },

  /** Borders */
  border: {
    subtle: "rgba(255, 255, 255, 0.05)",
    default: "rgba(255, 255, 255, 0.1)",
    hover: "rgba(255, 255, 255, 0.2)",
    active: "rgba(255, 255, 255, 0.4)",
  },

  /** Accent / interactive */
  accent: {
    primary: "#ffffff",
    primaryForeground: "#000000",
    glow: "rgba(255, 255, 255, 0.1)",
    glowStrong: "rgba(255, 255, 255, 0.2)",
  },

  /** Status */
  status: {
    success: "#00ff00",
    error: "#ff4444",
    warning: "#ffaa00",
    info: "#4488ff",
  },
} as const;

/* ═══════════════════════════════════════════════════════════
   SPACING — consistent vertical rhythm and spacing scale
═══════════════════════════════════════════════════════════ */

export const spacing = {
  /** 2px */
  "4xs": "0.125rem",
  /** 4px */
  "3xs": "0.25rem",
  /** 6px */
  "2xs": "0.375rem",
  /** 8px */
  xs: "0.5rem",
  /** 12px */
  sm: "0.75rem",
  /** 16px */
  md: "1rem",
  /** 24px */
  lg: "1.5rem",
  /** 32px */
  xl: "2rem",
  /** 48px */
  "2xl": "3rem",
  /** 64px */
  "3xl": "4rem",
  /** 96px */
  "4xl": "6rem",
  /** 128px — standard section padding (py-32) */
  "5xl": "8rem",
} as const;

/** Section-level spacing presets */
export const sectionSpacing = {
  /** Standard section vertical padding */
  default: spacing["5xl"],
  /** Compact section padding */
  compact: spacing["3xl"],
  /** Large section padding */
  large: "10rem",
  /** Gap between section header and content */
  headerGap: spacing["2xl"],
  /** Gap between major content blocks within a section */
  blockGap: spacing["2xl"],
} as const;

/* ═══════════════════════════════════════════════════════════
   TYPOGRAPHY — font families and scale
═══════════════════════════════════════════════════════════ */

export const typography = {
  /** Font families */
  fonts: {
    sans: '"Inter", ui-sans-serif, system-ui, sans-serif',
    display: '"Space Grotesk", ui-sans-serif, system-ui, sans-serif',
    mono: '"JetBrains Mono", ui-monospace, SFMono-Regular, monospace',
  },

  /** Semantic text sizes mapped to use cases */
  scale: {
    /** Page hero headline */
    hero: "clamp(3rem, 5vw, 4.5rem)",
    /** Section h2 headline */
    sectionTitle: "clamp(2.25rem, 4vw, 3rem)",
    /** h3 subsection */
    subsectionTitle: "clamp(1.5rem, 2.5vw, 1.875rem)",
    /** h4 card/block title */
    cardTitle: "1.25rem",
    /** Body large (section descriptions) */
    bodyLarge: "1.125rem",
    /** Body default */
    body: "1rem",
    /** Body small (card descriptions) */
    bodySmall: "0.875rem",
    /** Caption / labels */
    caption: "0.75rem",
    /** Eyebrow / overline labels */
    eyebrow: "0.625rem",
  },

  /** Line heights */
  leading: {
    tight: "1.05",
    snug: "1.2",
    normal: "1.5",
    relaxed: "1.7",
  },

  /** Font weights */
  weight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },

  /** Tracking (letter-spacing) */
  tracking: {
    tight: "-0.02em",
    normal: "0",
    wide: "0.05em",
    widest: "0.1em",
  },
} as const;

/* ═══════════════════════════════════════════════════════════
   RADII — border radius scale
═══════════════════════════════════════════════════════════ */

export const radii = {
  /** 4px — small elements (tags, badges) */
  sm: "0.25rem",
  /** 8px — buttons, inputs */
  md: "0.5rem",
  /** 12px — cards, panels */
  lg: "0.75rem",
  /** 16px — large cards, sections */
  xl: "1rem",
  /** 24px — hero panels, modals */
  "2xl": "1.5rem",
  /** 32px — floating elements */
  "3xl": "2rem",
  /** Full circle */
  full: "9999px",
} as const;

/* ═══════════════════════════════════════════════════════════
   SHADOWS — elevation system
═══════════════════════════════════════════════════════════ */

export const shadows = {
  /** Subtle inner shadow for depth */
  inner: "inset 0 1px 2px rgba(0, 0, 0, 0.3)",
  /** Small elevation (buttons, chips) */
  sm: "0 1px 2px rgba(0, 0, 0, 0.2)",
  /** Medium elevation (cards) */
  md: "0 4px 12px rgba(0, 0, 0, 0.3)",
  /** Large elevation (panels, dropdowns) */
  lg: "0 8px 24px rgba(0, 0, 0, 0.4)",
  /** Extra-large (modals, popovers) */
  xl: "0 16px 48px rgba(0, 0, 0, 0.5)",
  /** Glow effect (active states) */
  glow: "0 0 20px rgba(255, 255, 255, 0.1)",
  /** Strong glow (focused/active interactive) */
  glowStrong: "0 0 40px rgba(255, 255, 255, 0.15)",
} as const;

/* ═══════════════════════════════════════════════════════════
   BREAKPOINTS — responsive design reference
═══════════════════════════════════════════════════════════ */

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

/* ═══════════════════════════════════════════════════════════
   Z-INDEX — layering system
═══════════════════════════════════════════════════════════ */

export const zIndex = {
  /** Background decorative elements */
  background: 0,
  /** Default content */
  content: 10,
  /** Sticky elements (panels, sidebars) */
  sticky: 20,
  /** Fixed header */
  header: 50,
  /** Overlays (mobile menu) */
  overlay: 40,
  /** Modals, dialogs */
  modal: 60,
  /** Tooltips, popovers */
  tooltip: 70,
} as const;

/* ═══════════════════════════════════════════════════════════
   ANIMATION — timing references (use motion.ts for full system)
   Kept here for non-motion CSS transitions
═══════════════════════════════════════════════════════════ */

export const transitions = {
  /** Fast micro-interactions */
  fast: "150ms ease-out",
  /** Default element transitions */
  default: "300ms ease-out",
  /** Slower, premium transitions */
  slow: "500ms cubic-bezier(0.16, 1, 0.3, 1)",
} as const;
