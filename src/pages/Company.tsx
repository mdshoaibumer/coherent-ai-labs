import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { CompanyHero } from "../components/sections/company/CompanyHero";
import { CompanyValues } from "../components/sections/company/CompanyValues";
import { CompanyTeam } from "../components/sections/company/CompanyTeam";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function Company() {
  useEffect(() => {
    const seo = generateSEO({
      title: "About Us | Coherent AI Labs",
      description: "Learn about the engineering team behind Coherent AI Labs and our mission to accelerate autonomous enterprises."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <CompanyHero />
      <CompanyValues />
      <CompanyTeam />
      <Container className="py-24">
        <CTA 
          title="Join the team"
          description="We are actively hiring Senior Distributed Systems Engineers and AI Researchers in San Francisco and London."
          primaryAction={{ label: "View Open Roles", href: "/careers" }}
        />
      </Container>
    </>
  );
}
