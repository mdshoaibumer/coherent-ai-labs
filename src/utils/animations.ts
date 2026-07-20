import { Variants, Transition } from "motion/react";

export const FADE_UP: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

export const FADE_IN: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1
};

export const EASE_OUT_EXPO: Transition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1]
};

export const EASE_OUT: Transition = {
  duration: 0.5
};
