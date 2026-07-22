'use client';
import { useRef, useState, useEffect } from 'react';
import { m, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { LAYERS } from '../../constants/workflow';
import { InfoPanel } from './workflow/InfoPanel';
import { PipelineNode } from './workflow/PipelineNode';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export function WorkflowTransformation() {
  const [activeLayer, setActiveLayer] = useState<string>(LAYERS[0].id);
  const [scrollActiveIndex, setScrollActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const activeLayerData = LAYERS.find((l) => l.id === activeLayer) || LAYERS[0];

  // Scroll-driven progression: track section scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Map scroll progress to active stage index
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    // Active zone: section enters from 0.15 to 0.75
    const normalized = Math.max(0, Math.min(1, (progress - 0.15) / 0.6));
    const index = Math.min(LAYERS.length - 1, Math.floor(normalized * LAYERS.length));

    if (index !== scrollActiveIndex) {
      setScrollActiveIndex(index);
      setActiveLayer(LAYERS[index].id);
    }
  });

  // Connection progress line — represents how far through the pipeline we've scrolled
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  // Ambient glow position follows active stage
  const glowY = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '80%']);

  return (
    <Section
      ref={sectionRef}
      id="workflow"
      border="top"
      padding="none"
      className="relative py-32"
      backgroundElement={
        <>
          {/* Top radial glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[1000px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,var(--accent-glow),transparent_70%)] opacity-40" />

          {/* Noise texture for depth */}
          <div className="noise-grain pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay" />

          {/* Traveling ambient glow — follows the active stage */}
          {!prefersReducedMotion && (
            <m.div
              className="pointer-events-none absolute left-[10%] h-[300px] w-[500px] will-change-transform"
              style={{
                top: glowY,
                background:
                  'radial-gradient(ellipse at center, var(--accent-glow) 0%, transparent 70%)',
                filter: 'blur(40px)',
                opacity: 0.4,
              }}
            />
          )}
        </>
      }
    >
      <Container>
        {/* ─── Section Header ─── */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <m.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Heading level={2}>
              Engineer Intelligent Workflows,
              <br />
              Not More Manual Work.
            </Heading>
            <Text size="lg">
              We combine AI Agents, enterprise software, cloud infrastructure, and intelligent
              automation to eliminate repetitive work and accelerate business operations.
            </Text>
          </m.div>
        </div>

        {/* ─── Pipeline + Panel Grid ─── */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
          {/* ═══ Left Pipeline ═══ */}
          <div ref={pipelineRef} className="relative lg:col-span-7">
            {/* Vertical Connection Line — base track */}
            <div className="bg-border absolute top-8 bottom-8 left-[19px] z-0 w-[2px] rounded-full sm:left-[27px]" />

            {/* Animated progress fill — scroll-driven */}
            {!prefersReducedMotion && (
              <m.div
                className="absolute top-8 bottom-8 left-[19px] z-[1] w-[2px] origin-top rounded-full sm:left-[27px]"
                style={{
                  scaleY: lineProgress,
                  background:
                    'linear-gradient(to bottom, var(--foreground) 0%, var(--muted-foreground) 60%, transparent 100%)',
                  opacity: 0.4,
                }}
              />
            )}

            {/* Energy beam traveling along the line */}
            {!prefersReducedMotion && (
              <div className="absolute top-8 bottom-8 left-[19px] z-[2] w-[2px] overflow-hidden rounded-full sm:left-[27px]">
                <m.div
                  className="via-foreground/50 absolute left-0 h-[15%] w-full bg-gradient-to-b from-transparent to-transparent"
                  animate={{ top: ['-15%', '115%'] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: 'linear',
                  }}
                />
              </div>
            )}

            {/* Pipeline Nodes */}
            <div className="relative z-10 flex flex-col gap-6 sm:gap-10">
              {LAYERS.map((layer, idx) => (
                <PipelineNode
                  key={layer.id}
                  layer={layer}
                  activeLayer={activeLayer}
                  index={idx}
                  totalLayers={LAYERS.length}
                  scrollActiveIndex={scrollActiveIndex}
                  onSetActiveLayer={setActiveLayer}
                />
              ))}
            </div>
          </div>

          {/* ═══ Right Sticky Panel (Desktop) ═══ */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeLayer}
                  initial={{ opacity: 0, y: 12, filter: 'blur(6px)', scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
                  exit={{ opacity: 0, y: -12, filter: 'blur(6px)', scale: 0.98 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <InfoPanel
                    data={activeLayerData}
                    activeIndex={scrollActiveIndex}
                    totalStages={LAYERS.length}
                  />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
