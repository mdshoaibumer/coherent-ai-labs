import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { IndustriesHero } from "../components/sections/industries/IndustriesHero";
import { IndustriesList } from "../components/sections/industries/IndustriesList";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function Industries() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Industries | Coherent AI Labs",
      description: "Vertical-specific AI intelligence for Healthcare, Finance, Retail, and Defense."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <IndustriesHero />
      <IndustriesList />
      <Container className="py-24">
        <CTA 
          title="Build for your specific compliance needs."
          description="We deploy within your VPC to ensure complete data sovereignty."
          primaryAction={{ label: "Contact Engineering", href: "/contact" }}
        />
      </Container>
    </>
  );
}
