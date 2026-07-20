"use client";
import React from "react";
import {
  Bot, Workflow, Layers, AppWindow, Smartphone, Laptop,
  ArrowRight, LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { GlassPanel } from "../../ui/GlassPanel";
import { IconWrapper } from "../../ui/IconWrapper";
import { Reveal, RevealStagger, RevealItem } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";

interface SolutionLink {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  tag: string;
}

const SOLUTIONS: SolutionLink[] = [
  {
    title: "AI Agents",
    description: "Autonomous multi-agent systems that reason, plan, and execute complex workflows.",
    icon: Bot,
    href: "/solutions/ai-agents",
    tag: "Intelligence",
  },
  {
    title: "Workflow Automation",
    description: "End-to-end intelligent pipelines replacing manual processes across your enterprise.",
    icon: Workflow,
    href: "/solutions/workflow-automation",
    tag: "Automation",
  },
  {
    title: "Enterprise Software",
    description: "Bespoke full-stack applications with microservices architecture and AI-native design.",
    icon: Layers,
    href: "/solutions/enterprise-software",
    tag: "Platform",
  },
  {
    title: "Web Applications",
    description: "High-performance, accessible web experiences with server-rendering and progressive enhancement.",
    icon: AppWindow,
    href: "/solutions/web-applications",
    tag: "Frontend",
  },
  {
    title: "Mobile Applications",
    description: "Native iOS and Android apps with offline-first architecture and enterprise mobility.",
    icon: Smartphone,
    href: "/solutions/mobile-applications",
    tag: "Mobile",
  },
  {
    title: "Desktop Applications",
    description: "Cross-platform native desktop software with hardware integration and offline capability.",
    icon: Laptop,
    href: "/solutions/desktop-applications",
    tag: "Desktop",
  },
];

export function SolutionsByCapability() {
  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="top-center" size="xl" intensity={0.02} />}>
      <Container>
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Solutions by Capability
            </span>
            <Heading level={2}>
              What We Build
            </Heading>
            <Text size="lg">
              Six core engineering capabilities — from autonomous AI agents to native desktop applications. Each solution is architected for enterprise scale.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SOLUTIONS.map((solution) => (
            <RevealItem key={solution.href}>
              <Link href={solution.href} className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl">
                <GlassPanel variant="dark" className="p-6 h-full flex flex-col hover:border-white/15 transition-all duration-500 relative overflow-hidden">
                  {/* Tag */}
                  <span className="absolute top-4 right-4 text-[9px] font-mono tracking-widest text-[#555] uppercase">
                    {solution.tag}
                  </span>

                  <IconWrapper variant="default" size="sm" className="mb-5 group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all duration-500">
                    <solution.icon className="w-5 h-5 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </IconWrapper>

                  <h3 className="font-display text-lg font-medium text-white mb-2 tracking-tight group-hover:text-white">
                    {solution.title}
                  </h3>
                  <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors flex-grow">
                    {solution.description}
                  </Text>

                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#666] group-hover:text-white transition-colors">
                    Explore solution
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </GlassPanel>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </Section>
  );
}
