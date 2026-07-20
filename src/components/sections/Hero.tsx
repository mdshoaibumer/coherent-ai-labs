import { m, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Lock, Shield } from "lucide-react";
import { DataFlowVisualization } from "../illustrations/HeroDataFlow";
import { StatusIndicator } from "../ui/StatusIndicator";
import { ScrollIndicator } from "../ui/ScrollIndicator";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <Section ref={containerRef} padding="none" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
      
      {/* Premium Background Atmosphere */}
      <div className="absolute inset-0 z-0">
        {/* Glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', 
            backgroundSize: '48px 48px', 
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)', 
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)' 
          }} 
        />
      </div>

      <m.div style={{ opacity, y, scale }} className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-12 md:mt-0">
        
        {/* Status Indicator */}
        <StatusIndicator label="System Architecture: Active" />

        {/* Headline */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Heading level={1} className="leading-[1.05] max-w-5xl">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-[#666]">intelligent software</span> for the AI era.
          </Heading>
        </m.div>

        {/* Supporting Copy */}
        <m.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Text size="lg" className="mt-8 max-w-2xl">
            Coherent AI Labs engineers intelligent software that automates business workflows using autonomous AI agents, RAG architectures, and custom enterprise applications.
          </Text>
        </m.div>

        {/* CTAs */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center"
        >
          <a href="#contact" className="w-full sm:w-auto">
            <Button variant="primary">
              Book a Discovery Call
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#platform" className="w-full sm:w-auto">
            <Button variant="outline">
              Explore Our Platform
            </Button>
          </a>
        </m.div>

        {/* Enterprise Trust */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center gap-6 text-xs font-mono text-[#555] tracking-widest uppercase"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5" /> SOC 2 Type II
          </div>
          <div className="w-1 h-1 rounded-full bg-[#333]" />
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" /> Enterprise Grade
          </div>
        </m.div>
      </m.div>

      {/* Abstract AI Visualization */}
      <m.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-0 w-full max-w-6xl mx-auto mt-16 md:mt-24 px-6 flex-1 min-h-[250px] md:min-h-[350px] flex items-center"
      >
         <DataFlowVisualization />
      </m.div>

      <ScrollIndicator />
    </Section>
  );
}
