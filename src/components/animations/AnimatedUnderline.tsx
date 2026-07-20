"use client";
import React from 'react';
import { m } from 'motion/react';
import { cn } from '../../lib/utils';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  active?: boolean;
}

export function AnimatedUnderline({ children, className, active = false }: AnimatedUnderlineProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <span className={cn("relative inline-block group cursor-pointer", className)}>
      {children}
      <m.span
        className="absolute -bottom-1 left-0 w-full h-[2px] bg-current origin-left"
        initial={{ scaleX: active ? 1 : 0 }}
        animate={{ scaleX: active ? 1 : 0 }}
        whileHover={{ scaleX: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: 'easeOut' }}
      />
    </span>
  );
}
