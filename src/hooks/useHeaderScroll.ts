import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useHeaderScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    
    // Determine if scrolled past top
    if (y > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Hide on scroll down, show on scroll up
    if (y > 200 && difference > 10) {
      setIsHidden(true);
    } else if (difference < -10 || y <= 50) {
      setIsHidden(false);
    }

    lastYRef.current = y;
  });

  return { isScrolled, isHidden };
}
