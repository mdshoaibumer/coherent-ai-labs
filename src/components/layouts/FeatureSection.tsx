'use client';
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { MotionSection } from '../ui/MotionSection';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Grid } from '../ui/Grid';
import { MotionCard } from '../ui/MotionCard';
import { IconWrapper } from '../ui/IconWrapper';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { cn } from '../../lib/utils';

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
  glow?: 'top-center' | 'top-left' | 'top-right' | 'center';
  className?: string;
}

export function FeatureSection({
  id,
  eyebrow,
  title,
  description,
  features,
  columns = 3,
  glow = 'top-center',
  className,
}: FeatureSectionProps) {
  return (
    <MotionSection id={id} glow={glow} noise border="top" className={className}>
      <Container>
        {/* Section header */}
        <div className="mb-20 max-w-3xl">
          <Reveal variant="fadeUp">
            {eyebrow && (
              <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
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
                <MotionCard entrance="scaleUp" className="flex h-full flex-col p-8">
                  <IconWrapper
                    variant="default"
                    className="group-hover:border-border-hover mb-6 transition-all duration-500 group-hover:scale-110"
                  >
                    <feature.icon
                      className="text-muted-foreground group-hover:text-foreground h-6 w-6 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>

                  <Heading level={4} className="mb-3">
                    {feature.title}
                  </Heading>
                  <Text size="sm" className="text-muted-foreground flex-grow">
                    {feature.description}
                  </Text>

                  {feature.value && (
                    <div className="border-border group-hover:border-border mt-6 border-t pt-4 transition-colors">
                      <p className="text-muted-foreground/70 group-hover:text-muted-foreground flex items-center gap-2 font-mono text-xs transition-colors">
                        <span className="text-foreground/20">↳</span>
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
