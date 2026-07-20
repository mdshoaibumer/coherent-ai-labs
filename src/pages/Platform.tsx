import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { PlatformHero } from "../components/sections/platform/PlatformHero";
import { PlatformCapabilities } from "../components/sections/platform/PlatformCapabilities";
import { PlatformArchitecture } from "../components/sections/platform/PlatformArchitecture";
import { PlatformSecurity } from "../components/sections/platform/PlatformSecurity";
import { PlatformDeployment } from "../components/sections/platform/PlatformDeployment";
import { PlatformDX } from "../components/sections/platform/PlatformDX";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function Platform() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Enterprise AI Platform Architecture",
      description: "The unified AI platform for enterprise engineering teams. Securely build, deploy, and scale RAG pipelines, autonomous agents, and LLM infrastructure."
    });
    document.title = seo.title;
    
    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <PlatformHero />
      <PlatformCapabilities />
      <PlatformArchitecture />
      <PlatformSecurity />
      <PlatformDeployment />
      <PlatformDX />
      <Container className="py-24">
        <CTA 
          title="Ready to upgrade your AI infrastructure?"
          description="Join the world's most innovative engineering teams building on Coherent AI Labs."
          primaryAction={{ label: "Start Building", href: "/#contact" }}
          secondaryAction={{ label: "Talk to Engineering", href: "/#contact" }}
        />
      </Container>
    </>
  );
}
