import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions | Coherent AI Labs",
  description:
    "Discover how Coherent AI Labs transforms businesses with AI Agents, Workflow Automation, Enterprise Software, Web, Mobile, and Desktop Applications.",
};

import { SolutionsHero } from "../../components/sections/solutions/SolutionsHero";
import { SolutionsGrid } from "../../components/sections/solutions/SolutionsGrid";
import { SolutionsByCapability } from "../../components/sections/solutions/SolutionsByCapability";
import { CTA } from "../../components/ui/CTA";
import { Container } from "../../components/ui/Container";
import { SectionTransition } from "../../components/animations/SectionTransition";

export default function Solutions() {
  return (
    <>
      <SolutionsHero />
      <SectionTransition variant="glow" />
      <SolutionsByCapability />
      <SectionTransition variant="sweep" />
      <SolutionsGrid />
      <SectionTransition variant="glow" />
      <Container className="py-24">
        <CTA
          title="Don't see your use case?"
          description="Our platform is domain-agnostic. We architect custom AI solutions for any business challenge."
          primaryAction={{ label: "Talk to our Architects", href: "/contact" }}
        />
      </Container>
    </>
  );
}
