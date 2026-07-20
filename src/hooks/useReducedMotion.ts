import { useReducedMotion as useFramerReducedMotion } from 'motion/react';
import { useMediaQuery } from './useMediaQuery';

export function useReducedMotion() {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const framerReducedMotion = useFramerReducedMotion();
  
  return prefersReducedMotion || framerReducedMotion;
}
