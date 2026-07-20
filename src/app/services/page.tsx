import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Consulting & Engineering Services",
  description: "Embed elite AI architects into your organization. We offer custom software engineering, cloud architecture, and AI transformation consulting."
};



import { ServicesHero } from "../../components/sections/services/ServicesHero";
import { ServicesTimeline } from "../../components/sections/services/ServicesTimeline";
import { CTA } from "../../components/ui/CTA";
import { Container } from "../../components/ui/Container";

export default function Services() {
  

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
