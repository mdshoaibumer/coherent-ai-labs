import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { SolutionsHero } from "../components/sections/solutions/SolutionsHero";
import { SolutionsGrid } from "../components/sections/solutions/SolutionsGrid";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function Solutions() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Enterprise AI Solutions by Industry",
      description: "Discover how Coherent AI Labs transforms workflows in Healthcare, Finance, Retail, and Manufacturing with bespoke AI solutions."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

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
