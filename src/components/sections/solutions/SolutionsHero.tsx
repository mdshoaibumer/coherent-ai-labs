"use client";
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
          <div className="w-[1000px] h-[500px] bg-gradient-to-r from-[var(--color-primary)] to-purple-600 rounded-full blur-[150px] mix-blend-screen" />
        </div>
      }
    >
      <m.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <m.div variants={fadeUp} className="mb-6 flex justify-center">
          <Tag variant="primary">Enterprise Solutions</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            Solve impossible problems.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-xl md:text-2xl text-[#888] max-w-3xl mx-auto leading-relaxed">
            From algorithmic execution in finance to HIPAA-compliant healthcare pipelines, Coherent AI Labs delivers domain-specific intelligence.
          </Paragraph>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
