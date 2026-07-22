'use client';
import React from 'react';
import { m } from 'motion/react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { GlassPanel } from '../../ui/GlassPanel';
import { Reveal } from '../../animations/Reveal';
import { AmbientGlow } from '../../animations/AmbientGlow';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

const NODES = [
  { id: 'client', label: 'Client Apps', x: 80, y: 60, group: 'frontend' },
  { id: 'gateway', label: 'API Gateway', x: 300, y: 60, group: 'backend' },
  { id: 'auth', label: 'Auth / RBAC', x: 300, y: 180, group: 'security' },
  { id: 'agents', label: 'Agent Runtime', x: 520, y: 60, group: 'ai' },
  { id: 'llm', label: 'LLM Router', x: 520, y: 180, group: 'ai' },
  { id: 'vectordb', label: 'Vector DB', x: 740, y: 60, group: 'data' },
  { id: 'postgres', label: 'PostgreSQL', x: 740, y: 180, group: 'data' },
  { id: 'cache', label: 'Redis Cache', x: 740, y: 300, group: 'data' },
  { id: 'monitor', label: 'Monitoring', x: 520, y: 300, group: 'infra' },
  { id: 'cloud', label: 'Cloud Infra', x: 300, y: 300, group: 'infra' },
];

const CONNECTIONS = [
  { from: 'client', to: 'gateway' },
  { from: 'gateway', to: 'auth' },
  { from: 'gateway', to: 'agents' },
  { from: 'agents', to: 'llm' },
  { from: 'agents', to: 'vectordb' },
  { from: 'llm', to: 'postgres' },
  { from: 'agents', to: 'cache' },
  { from: 'agents', to: 'monitor' },
  { from: 'gateway', to: 'cloud' },
  { from: 'monitor', to: 'cloud' },
  { from: 'auth', to: 'cloud' },
];

const GROUP_COLORS: Record<string, string> = {
  frontend: '#666',
  backend: '#888',
  ai: '#fff',
  data: '#aaa',
  security: '#777',
  infra: '#555',
};

export function ArchitectureViz() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      padding="default"
      backgroundElement={<AmbientGlow position="center" size="xl" intensity={0.02} />}
    >
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              System Architecture
            </span>
            <Heading level={2}>How Data Flows Through the Platform</Heading>
            <Text size="lg">
              A resilient, end-to-end architecture processing high-volume inference requests with
              zero data leakage and complete observability.
            </Text>
          </Reveal>
        </div>

        <Reveal variant="scaleUp">
          <GlassPanel variant="dark" className="relative overflow-hidden p-6 md:p-12">
            {/* Desktop SVG visualization */}
            <div className="hidden w-full md:block" style={{ aspectRatio: '860/380' }}>
              <svg
                viewBox="0 0 860 380"
                className="h-full w-full"
                role="img"
                aria-label="Platform architecture diagram showing data flow between system components"
              >
                <title>Platform Architecture</title>
                <defs>
                  <filter id="arch-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="arch-packet" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </linearGradient>
                </defs>

                {/* Connection lines */}
                {CONNECTIONS.map((conn, i) => {
                  const from = NODES.find((n) => n.id === conn.from)!;
                  const to = NODES.find((n) => n.id === conn.to)!;
                  const pathD = `M ${from.x} ${from.y} L ${to.x} ${to.y}`;

                  return (
                    <g key={`${conn.from}-${conn.to}`}>
                      <line
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                        stroke="rgba(255,255,255,0.08)"
                        strokeWidth="1"
                      />
                      {/* Animated data packet */}
                      {!prefersReducedMotion && (
                        <m.path
                          d={pathD}
                          fill="none"
                          stroke="url(#arch-packet)"
                          strokeWidth="2"
                          strokeLinecap="round"
                          filter="url(#arch-glow)"
                          initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                          animate={{ pathOffset: [0, 1], opacity: [0, 0.6, 0] }}
                          transition={{
                            duration: 3 + i * 0.3,
                            delay: i * 0.4,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        />
                      )}
                    </g>
                  );
                })}

                {/* Nodes */}
                {NODES.map((node) => (
                  <g key={node.id} className="group">
                    <rect
                      x={node.x - 55}
                      y={node.y - 22}
                      width={110}
                      height={44}
                      rx={8}
                      fill="#0a0a0a"
                      stroke={GROUP_COLORS[node.group]}
                      strokeWidth="1"
                      className="transition-all duration-300 group-hover:stroke-white"
                    />
                    <text
                      x={node.x}
                      y={node.y + 5}
                      textAnchor="middle"
                      fill="#ccc"
                      fontSize="11"
                      fontFamily="var(--font-mono)"
                      className="transition-colors duration-300 group-hover:fill-white"
                    >
                      {node.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Mobile fallback */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {NODES.map((node) => (
                <div
                  key={node.id}
                  className="bg-muted border-border rounded-lg border p-3 text-center"
                >
                  <span className="text-foreground/80 font-mono text-xs">{node.label}</span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="border-border mt-8 flex flex-wrap justify-center gap-4 border-t pt-6">
              {[
                { label: 'Frontend', color: GROUP_COLORS.frontend },
                { label: 'Backend', color: GROUP_COLORS.backend },
                { label: 'AI Layer', color: GROUP_COLORS.ai },
                { label: 'Data', color: GROUP_COLORS.data },
                { label: 'Infrastructure', color: GROUP_COLORS.infra },
              ].map((item) => (
                <div
                  key={item.label}
                  className="text-muted-foreground/70 flex items-center gap-2 font-mono text-xs"
                >
                  <div className="h-[2px] w-3" style={{ backgroundColor: item.color }} />
                  {item.label}
                </div>
              ))}
            </div>
          </GlassPanel>
        </Reveal>
      </Container>
    </Section>
  );
}
