'use client';
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';

export function IndustriesHero() {
  return (
    <HeroLayout>
      <m.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="outline">Industries</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Vertical intelligence.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-muted-foreground max-w-2xl text-xl leading-relaxed md:text-2xl">
            Every industry has unique data privacy laws, latency constraints, and operational
            bottlenecks. We build domain-specific AI models that respect these boundaries.
          </Paragraph>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
