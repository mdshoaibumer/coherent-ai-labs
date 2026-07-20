import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise AI Solutions by Industry",
  description: "Discover how Coherent AI Labs transforms workflows in Healthcare, Finance, Retail, and Manufacturing with bespoke AI solutions."
};



import { SolutionsHero } from "../../components/sections/solutions/SolutionsHero";
import { SolutionsGrid } from "../../components/sections/solutions/SolutionsGrid";
import { CTA } from "../../components/ui/CTA";
import { Container } from "../../components/ui/Container";

export default function Solutions() {
  

  return (
    <>
      <SolutionsHero />
      <SolutionsGrid />
      <Container className="py-24">
        <CTA 
          title="Don't see your industry?"
          description="Our orchestration layer is domain-agnostic. We can build custom intelligence for any vertical."
          primaryAction={{ label: "Talk to our Architects", href: "/contact" }}
        />
      </Container>
    </>
  );
}
