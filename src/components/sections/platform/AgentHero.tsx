'use client';
import React from 'react';
import { HeroLayout } from '../../layouts/HeroLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Tag } from '../../ui/Tag';
import { Button } from '../../ui/Button';
import { m } from 'motion/react';
import { fadeUp, staggerContainer } from '../../../lib/animations';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export function AgentHero() {
  return (
    <HeroLayout
      background={
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          {/* Hexagonal / Mesh gradient representing multi-agent swarms */}
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[var(--color-primary)] via-transparent to-transparent opacity-30" />
        </div>
      }
    >
      <m.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl">
        <m.div variants={fadeUp} className="mb-8">
          <Link
            href="/platform"
            className="text-muted-foreground hover:text-foreground inline-flex items-center text-sm transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Platform
          </Link>
        </m.div>
        <m.div variants={fadeUp} className="mb-6">
          <Tag variant="primary">Platform Feature</Tag>
        </m.div>
        <m.div variants={fadeUp}>
          <Heading level={1} className="mb-6 text-5xl leading-tight font-bold md:text-7xl">
            Agentic Orchestration.
          </Heading>
        </m.div>
        <m.div variants={fadeUp}>
          <Paragraph className="text-muted-foreground mb-10 max-w-2xl text-xl leading-relaxed md:text-2xl">
            Design, deploy, and monitor complex multi-agent workflows. Give your LLMs persistent
            memory, tool-use execution, and deterministic state management.
          </Paragraph>
        </m.div>
        <m.div variants={fadeUp} className="flex gap-4">
          <Button variant="primary" size="lg">
            Start Building Free
          </Button>
          <Button variant="outline" size="lg">
            Read Agent Docs
          </Button>
        </m.div>
      </m.div>
    </HeroLayout>
  );
}
