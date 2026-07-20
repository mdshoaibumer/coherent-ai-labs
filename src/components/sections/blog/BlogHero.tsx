"use client";
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';

export function BlogHero() {
  return (
    <HeroLayout className="min-h-[60vh] pt-32 pb-12">
      <m.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="outline">Engineering Blog</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            Building the intelligence layer.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-xl md:text-2xl text-[#888] max-w-2xl leading-relaxed">
            Technical deep dives, architectural teardowns, and engineering insights from the team building Coherent AI Labs.
          </Paragraph>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
