"use client";
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { MagneticButton } from '../../animations/MagneticButton';
import { Button } from '../../ui/Button';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';

export function PlatformHero() {
  return (
    <HeroLayout
      background={
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="w-[800px] h-[800px] bg-[var(--color-primary)] rounded-full blur-[150px] mix-blend-screen" />
        </div>
      }
    >
      <m.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="primary">Platform v2.0</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            The AI Infrastructure for the Enterprise.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-xl md:text-2xl text-[#888] mb-10 max-w-2xl leading-relaxed">
            Build, orchestrate, and scale secure AI applications without the fragmented tooling.
          </Paragraph>
        </m.div>
        <m.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
          <MagneticButton className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full">
              Request Technical Demo
            </Button>
          </MagneticButton>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            Read the Docs
          </Button>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
