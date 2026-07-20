"use client";

import { LazyMotion, domAnimation, MotionConfig } from "motion/react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </MotionConfig>
  );
}
