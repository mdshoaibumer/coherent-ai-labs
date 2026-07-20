"use client";
import { m, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * StickyMobileCTA — fixed bottom CTA that appears on mobile after scrolling past the hero.
 * Provides persistent conversion opportunity without obstructing content.
 */
export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (y) => {
    // Show after scrolling 600px (past hero)
    setVisible(y > 600);
  });

  return (
    <m.div
      className="fixed bottom-0 left-0 right-0 z-40 p-4 lg:hidden"
      initial={{ y: 100, opacity: 0 }}
      animate={
        visible
          ? { y: 0, opacity: 1 }
          : { y: 100, opacity: 0 }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }
    >
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 w-full bg-white text-black font-medium py-3.5 px-6 rounded-xl shadow-[0_-4px_20px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.08)] hover:bg-gray-100 transition-colors text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        Book Discovery Call
        <ArrowRight className="w-4 h-4" />
      </Link>
    </m.div>
  );
}
