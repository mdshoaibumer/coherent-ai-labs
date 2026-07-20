"use client";
import { useRef, useState, useEffect } from "react";
import { m, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "motion/react";
import { LAYERS } from "../../constants/workflow";
import { InfoPanel } from "./workflow/InfoPanel";
import { PipelineNode } from "./workflow/PipelineNode";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { useReducedMotion } from "../../hooks/useReducedMotion";

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
    offset: ["start end", "end start"],
  });

  // Map scroll progress to active stage index
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    // Active zone: section enters from 0.15 to 0.75
    const normalized = Math.max(0, Math.min(1, (progress - 0.15) / 0.6));
    const index = Math.min(
      LAYERS.length - 1,
      Math.floor(normalized * LAYERS.length)
    );

    if (index !== scrollActiveIndex) {
      setScrollActiveIndex(index);
      setActiveLayer(LAYERS[index].id);
    }
  });

  // Connection progress line — represents how far through the pipeline we've scrolled
  const lineProgress = useTransform(scrollYProgress, [0.15, 0.75], [0, 1]);

  // Ambient glow position follows active stage
  const glowY = useTransform(
    scrollYProgress,
    [0.15, 0.75],
    ["0%", "80%"]
  );

  return (
    <Section
      ref={sectionRef}
      id="workflow"
      border="top"
      padding="none"
      className="py-32 relative"
      backgroundElement={
        <>
          {/* Top radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />

          {/* Noise texture for depth */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />

          {/* Traveling ambient glow — follows the active stage */}
          {!prefersReducedMotion && (
            <m.div
              className="absolute left-[10%] w-[500px] h-[300px] pointer-events-none will-change-transform"
              style={{
                top: glowY,
                background:
                  "radial-gradient(ellipse at center, rgba(255,255,255,0.025) 0%, transparent 70%)",
              }}
            />
          )}
        </>
      }
    >
      <Container>
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Heading level={2}>
              Engineer Intelligent Workflows,
              <br />
              Not More Manual Work.
            </Heading>
            <Text size="lg">
              We combine AI Agents, enterprise software, cloud infrastructure,
              and intelligent automation to eliminate repetitive work and
              accelerate business operations.
            </Text>
          </m.div>
        </div>

        {/* ─── Pipeline + Panel Grid ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          {/* ═══ Left Pipeline ═══ */}
          <div ref={pipelineRef} className="lg:col-span-7 relative">
            {/* Vertical Connection Line — base track */}
            <div className="absolute left-[19px] sm:left-[27px] top-8 bottom-8 w-[2px] bg-white/[0.04] z-0 rounded-full" />

            {/* Animated progress fill — scroll-driven */}
            {!prefersReducedMotion && (
              <m.div
                className="absolute left-[19px] sm:left-[27px] top-8 bottom-8 w-[2px] origin-top z-[1] rounded-full"
                style={{
                  scaleY: lineProgress,
                  background:
                    "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
                  boxShadow: "0 0 8px rgba(255,255,255,0.15)",
                }}
              />
            )}

            {/* Energy beam traveling along the line */}
            {!prefersReducedMotion && (
              <div className="absolute left-[19px] sm:left-[27px] top-8 bottom-8 w-[2px] z-[2] overflow-hidden rounded-full">
                <m.div
                  className="absolute left-0 w-full h-[15%] bg-gradient-to-b from-transparent via-white/60 to-transparent"
                  style={{
                    boxShadow: "0 0 12px rgba(255,255,255,0.3)",
                  }}
                  animate={{ top: ["-15%", "115%"] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.5,
                    ease: "linear",
                  }}
                />
              </div>
            )}

            {/* Pipeline Nodes */}
            <div className="flex flex-col gap-6 sm:gap-10 relative z-10">
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
          <div className="lg:col-span-5 hidden lg:block">
            <div className="sticky top-32">
              <AnimatePresence mode="wait">
                <m.div
                  key={activeLayer}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)", scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                  exit={{ opacity: 0, y: -12, filter: "blur(6px)", scale: 0.98 }}
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
