'use client';
import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { SectionReveal } from '../../animations/SectionReveal';
import { GlassPanel } from '../../ui/GlassPanel';
import { m, type Variants } from 'motion/react';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

export function PlatformArchitecture() {
  const prefersReducedMotion = useReducedMotion();

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' },
    },
  };

  return (
    <SectionReveal delay={0.2}>
      <Section className="py-24">
        <Container>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Heading level={2} className="mb-6">
              How data flows through the platform.
            </Heading>
            <p className="text-muted-foreground text-xl">
              A resilient, end-to-end architecture built to process high-volume inference requests
              with zero data leakage.
            </p>
          </div>

          <GlassPanel className="bg-muted relative overflow-hidden p-8 md:p-16">
            {/* SVG Diagram simulating architecture flow */}
            <div className="relative hidden h-[400px] w-full md:block">
              <svg
                className="h-full w-full"
                viewBox="0 0 1000 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <title>Architecture Data Flow</title>
                {/* Background Grid */}
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="1"
                  />
                </pattern>
                <rect width="1000" height="400" fill="url(#grid)" />

                {/* Nodes */}
                <rect
                  x="50"
                  y="150"
                  width="150"
                  height="100"
                  rx="12"
                  fill="#111"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <text
                  x="125"
                  y="205"
                  fill="#fff"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Customer Data
                </text>

                <rect
                  x="300"
                  y="50"
                  width="400"
                  height="300"
                  rx="16"
                  fill="rgba(255,255,255,0.02)"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
                <text
                  x="500"
                  y="80"
                  fill="var(--color-primary)"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="bold"
                >
                  VPC Boundary
                </text>

                <rect
                  x="350"
                  y="120"
                  width="120"
                  height="60"
                  rx="8"
                  fill="#1a1a1a"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <text x="410" y="155" fill="#fff" textAnchor="middle" fontSize="14">
                  Semantic Cache
                </text>

                <rect
                  x="530"
                  y="220"
                  width="120"
                  height="60"
                  rx="8"
                  fill="#1a1a1a"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                />
                <text x="590" y="255" fill="#fff" textAnchor="middle" fontSize="14">
                  LLM Router
                </text>

                <rect
                  x="800"
                  y="150"
                  width="150"
                  height="100"
                  rx="12"
                  fill="#111"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                />
                <text
                  x="875"
                  y="205"
                  fill="#fff"
                  textAnchor="middle"
                  fontSize="16"
                  fontWeight="bold"
                >
                  Output
                </text>

                {/* Connecting Lines */}
                <path d="M 200 200 L 300 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M 300 200 L 350 150" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M 470 150 L 530 250" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M 650 250 L 700 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                <path d="M 700 200 L 800 200" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />

                {/* Animated Flow Lines */}
                {!prefersReducedMotion && (
                  <>
                    <m.path
                      d="M 200 200 L 300 200 L 350 150"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                    />
                    <m.path
                      d="M 470 150 L 530 250"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                      style={{ animationDelay: '1s' }}
                    />
                    <m.path
                      d="M 650 250 L 700 200 L 800 200"
                      stroke="var(--color-primary)"
                      strokeWidth="3"
                      fill="none"
                      variants={pathVariants}
                      initial="hidden"
                      animate="visible"
                      style={{ animationDelay: '2s' }}
                    />
                  </>
                )}
              </svg>
            </div>

            {/* Mobile Fallback */}
            <div className="flex flex-col items-center gap-6 text-center md:hidden">
              <div className="border-border-hover w-full rounded-xl border bg-[#111] p-6">
                Customer Data
              </div>
              <div className="h-8 w-px bg-[var(--color-primary)]" />
              <div className="bg-accent w-full rounded-xl border-2 border-dashed border-[var(--color-primary)] p-6">
                <div className="mb-4 text-sm font-bold text-[var(--color-primary)]">
                  VPC Boundary
                </div>
                <div className="border-border mb-4 rounded-lg border bg-[#1a1a1a] p-4">
                  Semantic Cache
                </div>
                <div className="border-border rounded-lg border bg-[#1a1a1a] p-4">LLM Router</div>
              </div>
              <div className="h-8 w-px bg-[var(--color-primary)]" />
              <div className="border-border-hover w-full rounded-xl border bg-[#111] p-6">
                Output
              </div>
            </div>
          </GlassPanel>
        </Container>
      </Section>
    </SectionReveal>
  );
}
