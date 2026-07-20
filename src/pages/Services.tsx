import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { ServicesHero } from "../components/sections/services/ServicesHero";
import { ServicesTimeline } from "../components/sections/services/ServicesTimeline";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function Services() {
  useEffect(() => {
    const seo = generateSEO({
      title: "AI Consulting & Engineering Services",
      description: "Embed elite AI architects into your organization. We offer custom software engineering, cloud architecture, and AI transformation consulting."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <ServicesHero />
      <ServicesTimeline />
      <Container className="py-24">
        <CTA 
          title="Need a bespoke engineering team?"
          description="Let's discuss your technical challenges and architect a solution."
          primaryAction={{ label: "Contact Sales", href: "/contact" }}
        />
      </Container>
    </>
  );
}
