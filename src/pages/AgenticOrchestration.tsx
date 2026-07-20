import { useEffect } from "react";
import { generateSEO } from "../lib/seo";
import { AgentHero } from "../components/sections/platform/AgentHero";
import { AgentFeatures } from "../components/sections/platform/AgentFeatures";
import { AgentCodeDX } from "../components/sections/platform/AgentCodeDX";
import { CTA } from "../components/ui/CTA";
import { Container } from "../components/ui/Container";

export function AgenticOrchestration() {
  useEffect(() => {
    const seo = generateSEO({
      title: "Agentic Orchestration | Coherent AI Labs",
      description: "Design, deploy, and monitor complex multi-agent workflows with built-in reflection and tool execution."
    });
    document.title = seo.title;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", seo.description);
    }
  }, []);

  return (
    <>
      <AgentHero />
      <AgentFeatures />
      <AgentCodeDX />
      <Container className="py-24">
        <CTA 
          title="Ready to deploy your first agent?"
          description="Start building in our sandbox environment for free, or talk to engineering about enterprise limits."
          primaryAction={{ label: "Start Building Free", href: "/#sandbox" }}
          secondaryAction={{ label: "Talk to Sales", href: "/contact" }}
        />
      </Container>
    </>
  );
}
