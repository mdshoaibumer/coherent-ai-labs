import React from 'react';

/**
 * Coherent AI Labs — Signature Icon System
 *
 * Design Language:
 * - 24x24 viewBox, 1.5px stroke default
 * - Square linecaps for technical precision
 * - Miter joins for sharp architectural feel
 * - Each icon communicates AI engineering concepts
 * - Consistent optical weight across the set
 */

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

/* ─── Navigation & Action Icons ─── */

export const ArrowRight = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 12H20M20 12L14 6M20 12L14 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export const ArrowUpRight = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 17L17 7M17 7H9M17 7V15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/* ─── AI & Intelligence Icons ─── */

export const Activity = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12h4l3-8 4 16 3-8h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** Agent — represents autonomous AI agent (brain + signal) */
export const Agent = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 2v4M12 18v4M2 12h4M18 12h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Orchestration — represents agent orchestration / pipeline flow */
export const Orchestration = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="10"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="10"
      y="3"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="10"
      y="17"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="17"
      y="10"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M7 12h3M14 12h3M12 7v3M12 14v3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Reasoning — represents AI reasoning / decision tree */
export const Reasoning = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="6" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="18" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="8" cy="20" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="16" cy="20" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 6v2l-4 2M12 6v2l4 2M7 14l1 4M17 14l-1 4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Pipeline — represents data pipeline / workflow */
export const Pipeline = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 6h4l2 2h4l2-2h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path d="M4 12h16" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    <path
      d="M4 18h4l2-2h4l2 2h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <circle cx="4" cy="6" r="1" fill="currentColor" />
    <circle cx="4" cy="12" r="1" fill="currentColor" />
    <circle cx="4" cy="18" r="1" fill="currentColor" />
    <circle cx="20" cy="6" r="1" fill="currentColor" />
    <circle cx="20" cy="12" r="1" fill="currentColor" />
    <circle cx="20" cy="18" r="1" fill="currentColor" />
  </svg>
);

/* ─── Security & Infrastructure Icons ─── */

export const Shield = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 3L4 7v5c0 5.25 3.4 10.2 8 11.6 4.6-1.4 8-6.35 8-11.6V7l-8-4z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export const Zap = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** Infrastructure — represents cloud/distributed system */
export const Infrastructure = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="13"
      y="3"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="3"
      y="13"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="13"
      y="13"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

/* ─── Data & Architecture Icons ─── */

export const Database = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <ellipse
      cx="12"
      cy="5"
      rx="9"
      ry="3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export const Network = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="5" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="5" cy="19" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="19" cy="19" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 7.5v4M10.5 13l-4 4M13.5 13l4 4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const Cpu = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="5"
      y="5"
      width="14"
      height="14"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="9"
      y="9"
      width="6"
      height="6"
      rx="0.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M9 2v3M15 2v3M9 19v3M15 19v3M19 9h3M19 15h3M2 9h3M2 15h3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

export const Layers = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L2 7l10 5 10-5-10-5z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M2 17l10 5 10-5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M2 12l10 5 10-5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** KnowledgeGraph — represents RAG/knowledge system */
export const KnowledgeGraph = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="5" cy="6" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="19" cy="6" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="5" cy="18" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="19" cy="18" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M6.3 7.2L10.5 10.5M17.7 7.2L13.5 10.5M6.3 16.8L10.5 13.5M17.7 16.8L13.5 13.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/* ─── Workflow & Process Icons ─── */

export const Workflow = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <rect
      x="15"
      y="15"
      width="6"
      height="6"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M9 6h3a3 3 0 013 3v3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M15 18h-3a3 3 0 01-3-3v-3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

/** Scale — represents scalability / growth */
export const Scale = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 20l4-4M4 20h4M4 20v-4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M20 4l-4 4M20 4h-4M20 4v4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <rect
      x="8"
      y="8"
      width="8"
      height="8"
      rx="1"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** Signal — represents live status / intelligence signal */
export const Signal = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.6" />
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.3" />
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.1" />
  </svg>
);

/** Precision — represents accuracy / precision engineering */
export const Precision = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.6" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <path
      d="M12 3v3M12 18v3M3 12h3M18 12h3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.4"
    />
  </svg>
);

/* ─── Enterprise & Business Icons ─── */

/** Cloud — represents cloud engineering / deployment */
export const CloudIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 16a4 4 0 01-.5-7.97A6 6 0 0117.5 8.02 4.5 4.5 0 0118 16H6z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M10 20h4M12 16v4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Brain — represents LLM / deep intelligence */
export const BrainIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4C8.5 4 6 6.5 6 9.5c0 1.5.5 2.8 1.5 3.8L12 18l4.5-4.7A5.4 5.4 0 0018 9.5C18 6.5 15.5 4 12 4z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M9 9.5h6M10 12h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.6"
    />
    <circle cx="12" cy="7" r="1" fill="currentColor" opacity="0.8" />
  </svg>
);

/** Deployment — represents CI/CD / rocket launch */
export const Deployment = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2L8 8h8l-4-6z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path d="M12 8v10" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    <path
      d="M8 14l4 4 4-4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
      opacity="0.5"
    />
    <circle cx="12" cy="20" r="1.5" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);

/** Analytics — represents data visualization / dashboard */
export const Analytics = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M7 14l3-3 2 2 5-5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <circle cx="17" cy="8" r="1" fill="currentColor" />
    <path
      d="M7 18h10"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.4"
    />
  </svg>
);

/** Automation — represents workflow automation / gears in motion */
export const Automation = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="16" cy="16" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M11.5 11l2.5 2.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.6"
    />
    <path
      d="M9 6V4M9 14v-2M6 9H4M14 9h-2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.4"
    />
  </svg>
);

/** Document — represents document/data processing */
export const Document = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 3h8l4 4v14H6V3z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M14 3v4h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M9 12h6M9 15h4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Terminal — represents code / engineering */
export const Terminal = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M7 10l3 2-3 2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path d="M13 16h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
  </svg>
);

/** Users — represents team / collaboration */
export const UsersIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <circle cx="17" cy="8" r="2" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.6" />
    <path
      d="M17 12c2.2 0 4 1.8 4 4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.6"
    />
  </svg>
);

/** Target — represents precision / focus / goals */
export const TargetIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={strokeWidth} opacity="0.6" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    <path
      d="M12 2v3M12 19v3M2 12h3M19 12h3"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.3"
    />
  </svg>
);

/** Topology — represents distributed systems / mesh */
export const Topology = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M6 12h3.5M14.5 12H18M12 6v3.5M12 14.5V18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Convergence — represents integration / API merging */
export const Convergence = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 4l7 7M20 4l-7 7M4 20l7-7M20 20l-7-7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="20" cy="4" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="4" cy="20" r="1" fill="currentColor" opacity="0.4" />
    <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);

/** Metrics — represents KPIs / measurement */
export const Metrics = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 20V10M9 20V6M14 20v-8M19 20V4"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="square"
    />
    <path
      d="M3 20h18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.3"
    />
  </svg>
);

/** Mobile — represents mobile apps */
export const Mobile = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="6"
      y="2"
      width="12"
      height="20"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path d="M10 18h4" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    <path
      d="M6 5h12M6 16h12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.3"
    />
  </svg>
);

/** Desktop — represents desktop applications */
export const DesktopIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M8 21h8M12 17v4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M2 14h20"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.4"
    />
  </svg>
);

/** WebApp — represents web applications */
export const WebApp = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="4"
      width="18"
      height="16"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path d="M3 8h18" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
    <circle cx="5.5" cy="6" r="0.5" fill="currentColor" />
    <circle cx="7.5" cy="6" r="0.5" fill="currentColor" />
    <circle cx="9.5" cy="6" r="0.5" fill="currentColor" />
    <path
      d="M7 12h4M7 15h6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Message — represents AI assistants / chat */
export const Message = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 5h16v12H8l-4 3V5z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M8 10h8M8 13h5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Settings — represents configuration / BPA */
export const SettingsIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** Plus — for expand/accordion */
export const Plus = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 5v14M5 12h14"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Minus — for collapse/accordion */
export const Minus = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M5 12h14" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" />
  </svg>
);

/** Search — for search inputs */
export const SearchIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M16.5 16.5L21 21"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Check — for success states */
export const Check = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M8 12l3 3 5-5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** ArrowLeft — navigation */
export const ArrowLeft = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 12H4M4 12l6-6M4 12l6 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** ArrowDown — directional */
export const ArrowDown = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 4v16M12 20l-6-6M12 20l6-6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** Linkedin — social */
export const LinkedinIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
    <path
      d="M8 11v5M8 8v.01M12 16v-5c0-1.1.9-2 2-2s2 .9 2 2v5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Github — social */
export const GithubIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.2-.4-1.3.1-2.6 0 0 .8-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .5 1.3.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0022 12c0-5.5-4.5-10-10-10z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Menu — hamburger */
export const MenuIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4 7h16M4 12h16M4 17h16"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Close — X */
export const CloseIcon = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 6l12 12M18 6L6 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Play — represents demos / video */
export const Play = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M10 8l6 4-6 4V8z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

/** Code — represents engineering / code */
export const Code = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 18l-5-6 5-6M16 6l5 6-5 6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
    <path
      d="M14 4l-4 16"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      opacity="0.5"
    />
  </svg>
);

/** GitMerge — represents version control / branching */
export const GitMerge = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="7" cy="6" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="7" cy="18" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <circle cx="17" cy="12" r="2.5" stroke="currentColor" strokeWidth={strokeWidth} />
    <path
      d="M7 8.5v7M9.3 7.2l5.5 3.2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
    />
  </svg>
);

/** Wrench — represents tools / configuration */
export const Wrench = ({ size = 24, strokeWidth = 1.5, ...props }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M14.7 6.3a5 5 0 00-6.4 6.4l-4.8 4.8a1.5 1.5 0 002.1 2.1l4.8-4.8a5 5 0 006.4-6.4l-3 3-2.1-2.1 3-3z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);
