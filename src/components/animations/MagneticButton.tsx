'use client';
import React, { useRef, useState, useEffect } from 'react';
import { m, useSpring, useMotionValue, useTransform } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children: React.ReactNode;
  strength?: number;
  whileHover?: any;
  whileTap?: any;
}

export function MagneticButton({
  children,
  strength = 40,
  className,
  whileHover,
  whileTap,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Physics for the magnetic pull — refined for premium feel
  const springConfig = { damping: 30, stiffness: 180, mass: 0.12 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  // Raw motion values for the spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;

      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();

      // Calculate center distance for magnetic pull
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      const distX = (middleX / width) * strength;
      const distY = (middleY / height) * strength;

      x.set(distX * 0.4);
      y.set(distY * 0.4);

      // Set raw values for the inner spotlight (relative to element top-left)
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, x, y, mouseX, mouseY, strength, prefersReducedMotion]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([vx, vy]) =>
      `radial-gradient(120px circle at ${vx}px ${vy}px, rgba(255,255,255,0.1), transparent 100%)`,
  );

  if (prefersReducedMotion) {
    return (
      <button ref={ref} className={className} {...props}>
        {children}
      </button>
    );
  }

  return (
    <m.button
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileHover={whileHover}
      whileTap={whileTap}
      className={`relative overflow-hidden ${className}`}
      {...(props as React.ComponentProps<typeof m.button>)}
    >
      {/* Spotlight layer */}
      <m.div
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: spotlightBackground,
        }}
      />
      {/* Content layer */}
      <span className="relative z-10 flex items-center justify-center gap-3">{children}</span>
    </m.button>
  );
}
