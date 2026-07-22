'use client';
import React from 'react';
import { m } from 'motion/react';
import { Brain, Search, Zap, Eye, Database, Network } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { GlassPanel } from '../../ui/GlassPanel';
import { Reveal, RevealStagger, RevealItem } from '../../animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../../animations/AmbientGlow';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import { cn } from '../../../lib/utils';

const AGENTS = [
  {
    id: 'planner',
    title: 'Planner Agent',
    icon: Brain,
    role: 'Decomposes complex tasks into executable sub-tasks and delegates to specialized agents.',
    status: 'Orchestrating',
  },
  {
    id: 'research',
    title: 'Research Agent',
    icon: Search,
    role: 'Retrieves context from knowledge bases, vector stores, and external APIs.',
    status: 'Retrieving',
  },
  {
    id: 'executor',
    title: 'Execution Agent',
    icon: Zap,
    role: 'Performs deterministic actions — API calls, data writes, notifications, and triggers.',
    status: 'Executing',
  },
  {
    id: 'reviewer',
    title: 'Reviewer Agent',
    icon: Eye,
    role: 'Validates outputs against business rules, quality criteria, and compliance constraints.',
    status: 'Validating',
  },
  {
    id: 'memory',
    title: 'Memory System',
    icon: Database,
    role: 'Persists conversation state, learned patterns, and cross-session context.',
    status: 'Persisting',
  },
  {
    id: 'router',
    title: 'Model Router',
    icon: Network,
    role: 'Dynamically selects optimal LLM based on task complexity, cost, and latency requirements.',
    status: 'Routing',
  },
];

export function AgentOrchestration() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      padding="default"
      backgroundElement={
        <>
          <NoiseTexture opacity={0.015} />
          <AmbientGlow position="top-right" size="lg" intensity={0.025} />
        </>
      }
    >
      <Container>
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Multi-Agent Orchestration
            </span>
            <Heading level={2}>Autonomous Agents. Collaborative Intelligence.</Heading>
            <Text size="lg">
              Deploy specialized AI agents that reason, collaborate, and execute complex enterprise
              workflows without human intervention.
            </Text>
          </Reveal>
        </div>

        {/* Agent grid */}
        <RevealStagger
          stagger={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {AGENTS.map((agent) => (
            <RevealItem key={agent.id}>
              <GlassPanel
                variant="dark"
                className="group hover:border-border-hover relative h-full overflow-hidden p-6 transition-all duration-500"
              >
                {/* Breathing activity indicator */}
                {!prefersReducedMotion && (
                  <m.div
                    className="absolute top-4 right-4 h-2 w-2 rounded-full bg-white/30"
                    animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                )}

                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-accent border-border group-hover:bg-accent group-hover:border-border-hover flex h-10 w-10 items-center justify-center rounded-lg border transition-all duration-500">
                    <agent.icon
                      className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-foreground text-base font-medium tracking-tight">
                      {agent.title}
                    </h3>
                    <span className="text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                      {agent.status}
                    </span>
                  </div>
                </div>

                <Text
                  size="sm"
                  className="text-muted-foreground group-hover:text-muted-foreground transition-colors"
                >
                  {agent.role}
                </Text>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Orchestration flow indicator */}
        <Reveal variant="fade" delay={0.4}>
          <div className="text-muted-foreground/60 mt-12 flex items-center justify-center gap-3 font-mono text-xs tracking-widest uppercase">
            <div className="h-[1px] w-8 bg-white/10" />
            Planner → Research → Execute → Review → Persist
            <div className="h-[1px] w-8 bg-white/10" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
