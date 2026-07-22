"use client";
import React, { useRef, useState, useEffect } from 'react';
import { m, useSpring } from 'motion/react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface MagneticButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  children: React.ReactNode;
  strength?: number;
  whileHover?: any;
  whileTap?: any;
}

export function MagneticButton({ children, strength = 40, className, whileHover, whileTap, ...props }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  
  const springConfig = { damping: 18, stiffness: 180, mass: 0.08 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);
  
  const rotateZ = useSpring(0, { damping: 20, stiffness: 150, mass: 0.1 });

  useEffect(() => {
    if (prefersReducedMotion) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current || !isHovered) return;
      const { clientX, clientY } = e;
      const { height, width, left, top } = ref.current.getBoundingClientRect();
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);
      const distX = (middleX / width) * strength;
      const distY = (middleY / height) * strength;
      const angle = Math.atan2(distY, distX) * (180 / Math.PI);
      x.set(distX * 0.6);
      y.set(distY * 0.6);
      rotateZ.set(angle * 0.05);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, x, y, rotateZ, strength, prefersReducedMotion]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
    rotateZ.set(0);
  };

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
      style={{ x, y, rotateZ }}
      whileHover={whileHover}
      whileTap={whileTap}
      className={className}
      {...(props as React.ComponentProps<typeof m.button>)}
    >
      {children}
    </m.button>
  );
}
