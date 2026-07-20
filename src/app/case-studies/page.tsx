import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Coherent AI Labs",
  description: "See how the world's most advanced engineering organizations use Coherent AI Labs to deploy autonomous infrastructure."
};



import { CaseStudiesHero } from "../../components/sections/casestudies/CaseStudiesHero";
import { CaseStudiesList } from "../../components/sections/casestudies/CaseStudiesList";
import { CTA } from "../../components/ui/CTA";
import { Container } from "../../components/ui/Container";

export default function CaseStudies() {
  

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
