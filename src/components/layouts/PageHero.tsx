"use client";
import React from "react";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Reveal } from "../animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../animations/AmbientGlow";
import { cn } from "../../lib/utils";

/**
 * PageHero — reusable hero section for sub-pages.
 * Provides consistent layout, motion, and atmosphere for
 * Platform, Services, Solutions, Industries, Blog, etc.
 *
 * Usage:
 *   <PageHero
 *     eyebrow="Platform"
 *     title="Enterprise AI Platform Architecture"
 *     description="The unified AI platform for enterprise engineering teams."
 *   />
 */

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  align = "center",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden",
        className
      )}
    >
      {/* Atmosphere */}
      <AmbientGlow position="top-center" size="xl" intensity={0.03} />
      <NoiseTexture opacity={0.015} />

      <Container
        className={cn(
          "relative z-10",
          align === "center" && "text-center flex flex-col items-center"
        )}
      >
        <Reveal variant="fadeUp">
          {eyebrow && (
            <span className="inline-block text-[10px] font-mono tracking-widest text-[#555] uppercase mb-6 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
              {eyebrow}
            </span>
          )}
          <Heading level={1} className="max-w-4xl">
            {title}
          </Heading>
          {description && (
            <Text size="lg" className="max-w-2xl mt-6">
              {description}
            </Text>
          )}
        </Reveal>

        {/* Optional children below the header (CTAs, badges, etc.) */}
        {children && (
          <Reveal variant="fade" delay={0.3} className="mt-10">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
