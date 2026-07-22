'use client';
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';

export function SolutionsHero() {
  return (
    <HeroLayout
      background={
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="h-[500px] w-[1000px] rounded-full bg-gradient-to-r from-[var(--color-primary)] to-purple-600 mix-blend-screen blur-[150px]" />
        </div>
      }
    >
      <m.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-4xl text-center"
      >
        <m.div variants={fadeUp} className="mb-6 flex justify-center">
          <Tag variant="primary">Enterprise Solutions</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Solve impossible problems.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-muted-foreground mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl">
            From algorithmic execution in finance to HIPAA-compliant healthcare pipelines, Coherent
            AI Labs delivers domain-specific intelligence.
          </Paragraph>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
