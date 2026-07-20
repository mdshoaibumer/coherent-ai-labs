"use client";
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';
import { Button } from '../../ui/Button';

export function ServicesHero() {
  return (
    <HeroLayout>
      <m.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-4xl"
      >
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="outline">Consulting & Engineering</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            An elite engineering team at your disposal.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-xl md:text-2xl text-[#888] mb-10 max-w-2xl leading-relaxed">
            We don't just sell software. We embed senior AI architects and distributed systems engineers into your organization to guarantee success.
          </Paragraph>
        </m.div>
        <m.div variants={fadeUp} className="flex gap-4">
          <Button variant="primary" size="lg">Book a Strategy Session</Button>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
