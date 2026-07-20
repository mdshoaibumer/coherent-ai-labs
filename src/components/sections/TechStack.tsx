"use client";
import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { Brain, ChevronDown } from "lucide-react";
import { CATEGORIES } from "../../constants/techStack";
import { TechDetails } from "./tech/TechDetails";
import { RadialVisualization } from "./tech/RadialVisualization";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { GlassPanel } from "../ui/GlassPanel";
import { IconWrapper } from "../ui/IconWrapper";

export function TechStack() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const activeData = activeLayer ? CATEGORIES.find(c => c.id === activeLayer) : null;

  return (
    <Section id="ecosystem" border="top" backgroundElement={
      <div className="absolute inset-0 pointer-events-none opacity-[0.15]" 
           style={{ backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }} 
      />
    }>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2}>
              Built on Modern Engineering.<br />Powered by Intelligence.
            </Heading>
            <Text size="lg">
              We combine modern software engineering, cloud infrastructure, and AI technologies into secure, scalable, and intelligent business platforms.
            </Text>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Radial Visualization (Desktop) */}
          <RadialVisualization 
            categories={CATEGORIES} 
            activeLayer={activeLayer} 
            onSetActiveLayer={setActiveLayer} 
          />

          {/* Details Panel (Desktop) */}
          <div className="hidden lg:block lg:col-span-5 h-full min-h-[500px]">
            <GlassPanel variant="default" gradient className="p-8 h-full shadow-2xl">
              <AnimatePresence mode="wait">
                {activeData ? (
                  <m.div
                    key={activeData.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                  >
                    <TechDetails data={activeData} />
                  </m.div>
                ) : (
                  <m.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col justify-center text-center px-6"
                  >
                    <IconWrapper variant="default" size="lg" className="mx-auto mb-6">
                       <Brain className="w-8 h-8 text-[#666]" strokeWidth={1.5} />
                    </IconWrapper>
                    <Heading level={3}>Ecosystem Explorer</Heading>
                    <Text size="sm">
                      Hover over any technology domain in the radial visualization to explore our specific engineering capabilities, technologies, and business outcomes.
                    </Text>
                  </m.div>
                )}
              </AnimatePresence>
            </GlassPanel>
          </div>

          {/* Mobile Accordion View */}
          <div className="lg:hidden col-span-1 flex flex-col gap-4 relative z-10">
            {CATEGORIES.map((cat) => {
              const isActive = activeLayer === cat.id;
              
              return (
                <GlassPanel key={`mobile-${cat.id}`} variant="default" className="shadow-lg">
                  <button 
                    id={`tech-accordion-button-${cat.id}`}
                    aria-controls={`tech-accordion-panel-${cat.id}`}
                    className="w-full p-5 flex items-center justify-between bg-white/[0.02] hover:bg-white/[0.04] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white inset-0"
                    onClick={() => setActiveLayer(isActive ? null : cat.id)}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-4">
                      <IconWrapper variant={isActive ? "active" : "default"} size="sm">
                        <cat.icon className={cn("w-5 h-5", isActive ? "text-white" : "text-[#888]")} strokeWidth={1.5} />
                      </IconWrapper>
                      <span className={cn("font-medium text-lg tracking-tight", isActive ? "text-white" : "text-[#aaa]")}>{cat.title}</span>
                    </div>
                    <ChevronDown className={cn("w-5 h-5 text-[#666] transition-transform duration-300", isActive && "rotate-180")} />
                  </button>
                  
                  <AnimatePresence>
                    {isActive && (
                      <m.div
                        id={`tech-accordion-panel-${cat.id}`}
                        aria-labelledby={`tech-accordion-button-${cat.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                         <div className="p-5 pt-2 border-t border-white/5 bg-black/20">
                            <TechDetails data={cat} />
                         </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </GlassPanel>
              );
            })}
          </div>

        </div>
      </Container>
    </Section>
  );
}
