"use client";
import React, { useRef, useEffect, useCallback } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  birth: number;
  phase: number;
  active: boolean;
}

interface NeuralCanvasProps {
  className?: string;
  particleCount?: number;
  connectionDistance?: number;
  mouseRadius?: number;
  accent?: string;
}

export function NeuralCanvas({
  className = "",
  particleCount,
  connectionDistance = 115,
  mouseRadius = 170,
  accent = "0, 200, 255",
}: NeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const prefersReducedMotion = useReducedMotion();

  const initParticles = useCallback(
    (width: number, height: number) => {
      const count =
        particleCount ?? Math.min(Math.floor((width * height) / 15000), 100);
      const now = performance.now();
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        // Distribute across full canvas with slight center bias
        const x = Math.random() * width;
        const y = Math.random() * height;

        // Determine if this is an "active" (accent-colored) node
        // ~12% of particles near center are active
        const cx = width / 2;
        const cy = height / 2;
        const distFromCenter = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
        const maxDist = Math.sqrt(cx * cx + cy * cy);
        const centerWeight = 1 - distFromCenter / maxDist;
        const isActive = centerWeight > 0.5 && Math.random() > 0.7;

        particles.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.2,
          radius: isActive ? Math.random() * 1.8 + 1 : Math.random() * 1.2 + 0.5,
          opacity: 0,
          birth: now + i * (1800 / count),
          phase: Math.random() * Math.PI * 2,
          active: isActive,
        });
      }

      particlesRef.current = particles;
    },
    [particleCount]
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2);
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      // Re-init particles on resize
      initParticles(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      const now = performance.now();
      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        const age = now - p.birth;
        if (age < 0) { p.opacity = 0; continue; }
        p.opacity = Math.min(age / 800, 1);

        const pulse = 0.5 + 0.5 * Math.sin(now * 0.001 + p.phase);
        const displayOpacity = p.opacity * (0.3 + pulse * 0.4);

        // Mouse interaction — gentle repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius && dist > 0) {
          const force = (1 - dist / mouseRadius) * 0.3;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.active) {
          ctx.fillStyle = `rgba(${accent}, ${displayOpacity * 0.85})`;
          ctx.shadowColor = `rgba(${accent}, ${displayOpacity * 0.3})`;
          ctx.shadowBlur = 6;
        } else {
          ctx.fillStyle = `rgba(255, 255, 255, ${displayOpacity * 0.6})`;
          ctx.shadowColor = "transparent";
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Connections
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        if (a.opacity < 0.1) continue;

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          if (b.opacity < 0.1) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * a.opacity * b.opacity * 0.12;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            if (a.active && b.active) {
              ctx.strokeStyle = `rgba(${accent}, ${alpha * 1.8})`;
              ctx.lineWidth = 0.7;
            } else if (a.active || b.active) {
              ctx.strokeStyle = `rgba(${accent}, ${alpha * 0.7})`;
              ctx.lineWidth = 0.5;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = 0.4;
            }
            ctx.stroke();
          }
        }
      }

      // Mouse glow
      if (mouse.x > 0 && mouse.y > 0) {
        const gradient = ctx.createRadialGradient(
          mouse.x, mouse.y, 0,
          mouse.x, mouse.y, mouseRadius * 0.5
        );
        gradient.addColorStop(0, `rgba(${accent}, 0.015)`);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [prefersReducedMotion, initParticles, connectionDistance, mouseRadius, accent]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}
