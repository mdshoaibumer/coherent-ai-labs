import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { CaseStudiesHero } from "../components/sections/casestudies/CaseStudiesHero";
import { CaseStudiesList } from "../components/sections/casestudies/CaseStudiesList";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function CaseStudies() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Case Studies | Coherent AI Labs",
      description: "See how the world's most advanced engineering organizations use Coherent AI Labs to deploy autonomous infrastructure."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesList />
      <Container className="py-24">
        <CTA 
          title="Ready to achieve similar results?"
          description="Let our architects review your data pipeline and propose a custom AI implementation."
          primaryAction={{ label: "Book Discovery Call", href: "/contact" }}
        />
      </Container>
    </>
  );
}
