"use client";
import { useEffect, useRef, useCallback } from "react";
import { useSpring, MotionValue } from "motion/react";
import { useReducedMotion } from "./useReducedMotion";

interface MousePosition {
  /** Normalized X position from -1 (left) to 1 (right) relative to element center */
  normalizedX: MotionValue<number>;
  /** Normalized Y position from -1 (top) to 1 (bottom) relative to element center */
  normalizedY: MotionValue<number>;
}

interface UseMousePositionOptions {
  /** Spring stiffness — higher = snappier response. Default: 50 */
  stiffness?: number;
  /** Spring damping — higher = less oscillation. Default: 20 */
  damping?: number;
  /** Spring mass — higher = heavier feel. Default: 0.5 */
  mass?: number;
  /** Whether to track relative to element or viewport. Default: "viewport" */
  relativeTo?: "viewport" | "element";
}

export function useMousePosition(
  ref: React.RefObject<HTMLElement | null>,
  options: UseMousePositionOptions = {}
): MousePosition {
  const {
    stiffness = 50,
    damping = 20,
    mass = 0.5,
    relativeTo = "viewport",
  } = options;

  const prefersReducedMotion = useReducedMotion();
  const springConfig = { stiffness, damping, mass };

  const normalizedX = useSpring(0, springConfig);
  const normalizedY = useSpring(0, springConfig);

  const rafId = useRef<number>(0);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  const update = useCallback(() => {
    if (prefersReducedMotion) return;

    const el = ref.current;
    if (!el) return;

    let nx: number;
    let ny: number;

    if (relativeTo === "element") {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      nx = (mouseX.current - centerX) / (rect.width / 2);
      ny = (mouseY.current - centerY) / (rect.height / 2);
    } else {
      nx = (mouseX.current / window.innerWidth) * 2 - 1;
      ny = (mouseY.current / window.innerHeight) * 2 - 1;
    }

    // Clamp to [-1, 1]
    nx = Math.max(-1, Math.min(1, nx));
    ny = Math.max(-1, Math.min(1, ny));

    normalizedX.set(nx);
    normalizedY.set(ny);
  }, [ref, relativeTo, normalizedX, normalizedY, prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId.current);
    };
  }, [update, prefersReducedMotion]);

  return { normalizedX, normalizedY };
}
