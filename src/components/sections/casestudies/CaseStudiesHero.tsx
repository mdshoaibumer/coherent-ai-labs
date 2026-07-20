import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';

export function CaseStudiesHero() {
  return (
    <HeroLayout>
      <m.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="primary">Client Work</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            Proof of intelligence.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-xl md:text-2xl text-[#888] max-w-2xl leading-relaxed">
            See how the world's most advanced engineering organizations use our orchestration layer to deploy autonomous infrastructure.
          </Paragraph>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
