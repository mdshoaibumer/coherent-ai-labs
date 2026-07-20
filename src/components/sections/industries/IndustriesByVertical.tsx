"use client";
import React from "react";
import {
  HeartPulse, HardHat, ShoppingCart, Factory, Truck, Building2, GraduationCap,
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

interface IndustryLink {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  compliance: string;
}

const INDUSTRIES: IndustryLink[] = [
  {
    title: "Healthcare",
    description: "HIPAA-compliant clinical AI, patient engagement, and medical document intelligence.",
    icon: HeartPulse,
    href: "/industries/healthcare",
    compliance: "HIPAA · HITECH",
  },
  {
    title: "Construction & Real Estate",
    description: "Project intelligence, site monitoring, document AI, and predictive maintenance.",
    icon: HardHat,
    href: "/industries/construction",
    compliance: "OSHA · AIA",
  },
  {
    title: "Retail & E-Commerce",
    description: "Recommendation engines, inventory forecasting, dynamic pricing, and customer analytics.",
    icon: ShoppingCart,
    href: "/industries/retail",
    compliance: "PCI DSS · GDPR",
  },
  {
    title: "Manufacturing",
    description: "Predictive maintenance, computer vision QC, production optimization, and IoT analytics.",
    icon: Factory,
    href: "/industries/manufacturing",
    compliance: "ISO 9001 · IEC 62443",
  },
  {
    title: "Logistics & Supply Chain",
    description: "Route optimization, fleet intelligence, warehouse AI, and shipment tracking.",
    icon: Truck,
    href: "/industries/logistics",
    compliance: "C-TPAT · AEO",
  },
  {
    title: "Finance & Insurance",
    description: "Fraud detection, claims automation, risk assessment, and compliance monitoring.",
    icon: Building2,
    href: "/industries/finance",
    compliance: "PCI DSS · SOX · AML",
  },
  {
    title: "Education",
    description: "Adaptive learning, student analytics, automated assessment, and campus operations.",
    icon: GraduationCap,
    href: "/industries/education",
    compliance: "FERPA · COPPA",
  },
];

export function IndustriesByVertical() {
  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="top-center" size="xl" intensity={0.02} />}>
      <Container>
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Industry Verticals
            </span>
            <Heading level={2}>Deep Domain Expertise</Heading>
            <Text size="lg">
              Seven industries. Decades of combined engineering experience. Every solution
              respects your regulatory environment and operational reality.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.07} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map((industry) => (
            <RevealItem key={industry.href}>
              <Link
                href={industry.href}
                className="block h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-2xl"
              >
                <GlassPanel
                  variant="dark"
                  className="p-6 h-full flex flex-col hover:border-white/15 transition-all duration-500 relative overflow-hidden"
                >
                  <IconWrapper
                    variant="default"
                    size="sm"
                    className="mb-5 group-hover:border-white/20 group-hover:bg-white/[0.06] transition-all duration-500"
                  >
                    <industry.icon
                      className="w-5 h-5 text-[#888] group-hover:text-white transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>

                  <h3 className="font-display text-lg font-medium text-white mb-2 tracking-tight">
                    {industry.title}
                  </h3>
                  <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors flex-grow">
                    {industry.description}
                  </Text>

                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[9px] font-mono text-[#555] tracking-widest uppercase">
                      {industry.compliance}
                    </span>
                    <div className="flex items-center gap-1 text-sm font-medium text-[#666] group-hover:text-white transition-colors">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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
