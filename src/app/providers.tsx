'use client';

import { LazyMotion, domAnimation, MotionConfig } from 'motion/react';
import { ThemeProvider } from 'next-themes';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

export function Providers({ children }: { children: React.ReactNode }) {
  useSmoothScroll();
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </MotionConfig>
    </ThemeProvider>
  );
}
