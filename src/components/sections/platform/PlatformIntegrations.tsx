"use client";
import React, { useState } from "react";
import { m } from "motion/react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { Reveal, RevealStagger, RevealItem } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";
import { cn } from "../../../lib/utils";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

interface Integration {
  name: string;
  category: string;
}

const INTEGRATIONS: Integration[] = [
  { name: "Microsoft 365", category: "Productivity" },
  { name: "Google Workspace", category: "Productivity" },
  { name: "Slack", category: "Communication" },
  { name: "WhatsApp", category: "Communication" },
  { name: "Salesforce", category: "CRM" },
  { name: "HubSpot", category: "CRM" },
  { name: "SAP", category: "Enterprise" },
  { name: "Oracle", category: "Enterprise" },
  { name: "GitHub", category: "Developer" },
  { name: "GitLab", category: "Developer" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure", category: "Cloud" },
  { name: "Google Cloud", category: "Cloud" },
  { name: "Jira", category: "Project" },
  { name: "Confluence", category: "Knowledge" },
  { name: "Notion", category: "Knowledge" },
  { name: "Stripe", category: "Payments" },
  { name: "Twilio", category: "Communication" },
  { name: "Datadog", category: "Monitoring" },
  { name: "Snowflake", category: "Data" },
];

const CATEGORIES = ["All", "Cloud", "Enterprise", "Productivity", "Communication", "CRM", "Developer", "Data"];

export function PlatformIntegrations() {
  const [activeCategory, setActiveCategory] = useState("All");
  const prefersReducedMotion = useReducedMotion();

  const filtered = activeCategory === "All"
    ? INTEGRATIONS
    : INTEGRATIONS.filter(i => i.category === activeCategory);

  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="bottom-center" size="lg" intensity={0.02} />}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Enterprise Integrations
            </span>
            <Heading level={2}>
              Connects to Everything You Already Use
            </Heading>
            <Text size="lg">
              Native integrations with 50+ enterprise platforms. Custom connectors for proprietary systems. API-first architecture for unlimited extensibility.
            </Text>
          </Reveal>
        </div>

        {/* Category filter */}
        <Reveal variant="fade" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-lg text-xs font-medium tracking-wide uppercase transition-all duration-300 border outline-none focus-visible:ring-2 focus-visible:ring-white",
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-white/[0.03] text-[#888] border-white/[0.08] hover:bg-white/[0.06] hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Integration grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((integration, i) => (
            <m.div
              key={integration.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="group p-5 rounded-xl bg-[#080808] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 text-center"
            >
              {/* Icon placeholder — first letter */}
              <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-3 text-sm font-bold text-[#666] group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                {integration.name.charAt(0)}
              </div>
              <span className="text-xs font-medium text-[#aaa] group-hover:text-white transition-colors block">
                {integration.name}
              </span>
              <span className="text-[10px] font-mono text-[#444] mt-1 block">
                {integration.category}
              </span>
            </m.div>
          ))}
        </div>

        {/* Summary */}
        <Reveal variant="fade" delay={0.2}>
          <div className="mt-12 text-center">
            <Text size="sm" className="text-[#555]">
              50+ native integrations · Custom webhook support · REST & GraphQL APIs · Real-time event streaming
            </Text>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
