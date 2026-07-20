"use client";
import React from "react";
import { LucideIcon } from "lucide-react";
import { MotionSection } from "../ui/MotionSection";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Grid } from "../ui/Grid";
import { MotionCard } from "../ui/MotionCard";
import { IconWrapper } from "../ui/IconWrapper";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { cn } from "../../lib/utils";

/**
 * FeatureSection — reusable section template for showcasing capabilities.
 * Handles heading, description, and a grid of feature cards automatically.
 *
 * Usage:
 *   <FeatureSection
 *     id="features"
 *     eyebrow="Platform"
 *     title="Core Capabilities"
 *     description="Everything you need..."
 *     features={[{ title, description, icon }]}
 *     columns={3}
 *   />
 */

interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
  value?: string;
}

interface FeatureSectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  glow?: "top-center" | "top-left" | "top-right" | "center";
  className?: string;
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  features,
  columns = 3,
  glow = "top-center",
  className,
}: FeatureSectionProps) {
  return (
    <MotionSection id={id} glow={glow} noise border="top" className={className}>
      <Container>
        {/* Section header */}
        <div className="max-w-3xl mb-20">
          <Reveal variant="fadeUp">
            {eyebrow && (
              <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
                {eyebrow}
              </span>
            )}
            <Heading level={2}>{title}</Heading>
            {description && <Text size="lg">{description}</Text>}
          </Reveal>
        </div>

        {/* Feature grid */}
        <RevealStagger stagger={0.08}>
          <Grid cols={columns} gap="default">
            {features.map((feature) => (
              <RevealItem key={feature.title}>
                <MotionCard entrance="scaleUp" className="p-8 h-full flex flex-col">
                  <IconWrapper
                    variant="default"
                    className="mb-6 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500"
                  >
                    <feature.icon className="w-6 h-6 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </IconWrapper>

                  <Heading level={4} className="mb-3">
                    {feature.title}
                  </Heading>
                  <Text size="sm" className="text-[#888] flex-grow">
                    {feature.description}
                  </Text>

                  {feature.value && (
                    <div className="pt-4 mt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                      <p className="text-xs font-mono text-[#666] group-hover:text-[#aaa] transition-colors flex items-center gap-2">
                        <span className="text-white/20">↳</span>
                        {feature.value}
                      </p>
                    </div>
                  )}
                </MotionCard>
              </RevealItem>
            ))}
          </Grid>
        </RevealStagger>
      </Container>
    </MotionSection>
  );
}
