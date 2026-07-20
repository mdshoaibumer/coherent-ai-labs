"use client";
import React from "react";
import { Section, SectionProps } from "./Section";
import { AmbientGlow, NoiseTexture } from "../animations/AmbientGlow";

/**
 * MotionSection — Section with built-in atmospheric lighting.
 * Extends Section with optional ambient glow and noise texture.
 * Use for any new section that should inherit the premium atmosphere.
 *
 * Usage:
 *   <MotionSection glow="top-center" noise>
 *     <Container>...</Container>
 *   </MotionSection>
 */

type GlowPosition =
  | "top-center"
  | "top-left"
  | "top-right"
  | "center"
  | "bottom-center"
  | "bottom-left"
  | "bottom-right";

interface MotionSectionProps extends SectionProps {
  /** Add ambient glow at the specified position */
  glow?: GlowPosition;
  /** Glow intensity (0-1). Default: 0.025 */
  glowIntensity?: number;
  /** Whether the glow animates (breathes). Default: false */
  glowAnimate?: boolean;
  /** Add subtle noise texture for depth. Default: false */
  noise?: boolean;
  /** Noise opacity. Default: 0.02 */
  noiseOpacity?: number;
}

export function MotionSection({
  glow,
  glowIntensity = 0.025,
  glowAnimate = false,
  noise = false,
  noiseOpacity = 0.02,
  backgroundElement,
  children,
  ...sectionProps
}: MotionSectionProps) {
  const atmosphereElements = (
    <>
      {backgroundElement}
      {noise && <NoiseTexture opacity={noiseOpacity} />}
      {glow && (
        <AmbientGlow
          position={glow}
          size="lg"
          intensity={glowIntensity}
          animate={glowAnimate}
        />
      )}
    </>
  );

  return (
    <Section backgroundElement={atmosphereElements} {...sectionProps}>
      {children}
    </Section>
  );
}
