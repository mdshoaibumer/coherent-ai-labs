import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Platform | Coherent AI Labs",
  description:
    "The unified AI platform for enterprise engineering teams. Build, orchestrate, and scale production-grade AI agents, RAG pipelines, and LLM infrastructure with enterprise security.",
};

import { PlatformHero } from "../../components/sections/platform/PlatformHero";
import { PlatformOverview } from "../../components/sections/platform/PlatformOverview";
import { CapabilityStack } from "../../components/sections/platform/CapabilityStack";
import { ArchitectureViz } from "../../components/sections/platform/ArchitectureViz";
import { AgentOrchestration } from "../../components/sections/platform/AgentOrchestration";
import { PlatformIntegrations } from "../../components/sections/platform/PlatformIntegrations";
import { PlatformSecurity } from "../../components/sections/platform/PlatformSecurity";
import { PlatformDeployment } from "../../components/sections/platform/PlatformDeployment";
import { PlatformMetrics } from "../../components/sections/platform/PlatformMetrics";
import { PlatformCaseStudy } from "../../components/sections/platform/PlatformCaseStudy";
import { PlatformCTA } from "../../components/sections/platform/PlatformCTA";
import { SectionTransition } from "../../components/animations/SectionTransition";

export default function Platform() {
  return (
    <>
      <PlatformHero />
      <SectionTransition variant="glow" />
      <PlatformOverview />
      <SectionTransition variant="sweep" />
      <CapabilityStack />
      <SectionTransition variant="glow" />
      <ArchitectureViz />
      <SectionTransition variant="sweep" />
      <AgentOrchestration />
      <SectionTransition variant="glow" />
      <PlatformIntegrations />
      <SectionTransition variant="sweep" />
      <PlatformSecurity />
      <SectionTransition variant="glow" />
      <PlatformDeployment />
      <SectionTransition variant="sweep" />
      <PlatformMetrics />
      <SectionTransition variant="glow" />
      <PlatformCaseStudy />
      <SectionTransition variant="sweep" />
      <PlatformCTA />
    </>
  );
}
