"use client";
import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { LAYERS } from "../../constants/workflow";
import { InfoPanel } from "./workflow/InfoPanel";
import { PipelineNode } from "./workflow/PipelineNode";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

export function WorkflowTransformation() {
  const [activeLayer, setActiveLayer] = useState<string>(LAYERS[0].id);
  const activeLayerData = LAYERS.find(l => l.id === activeLayer) || LAYERS[0];

  return (
    <Section id="workflow" border="top" backgroundElement={
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
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
              Engineer Intelligent Workflows,<br />Not More Manual Work.
            </Heading>
            <Text size="lg">
              We combine AI Agents, enterprise software, cloud infrastructure, and intelligent automation to eliminate repetitive work and accelerate business operations.
            </Text>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
           {/* Left Pipeline */}
           <div className="lg:col-span-7 relative">
             {/* Central Animated Line */}
             <div className="absolute left-[19px] sm:left-[27px] top-8 bottom-8 w-[2px] bg-white/5 z-0">
               <m.div 
                 className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent via-white/40 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                 animate={{ top: [ "-20%", "120%" ] }}
                 transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
               />
             </div>

             <div className="flex flex-col gap-8 sm:gap-12">
                {LAYERS.map((layer, idx) => (
                  <PipelineNode 
                    key={layer.id} 
                    layer={layer} 
                    activeLayer={activeLayer} 
                    index={idx} 
                    onSetActiveLayer={setActiveLayer} 
                  />
                ))}
             </div>
           </div>

           {/* Right Sticky Panel (Desktop) */}
           <div className="lg:col-span-5 hidden lg:block">
             <div className="sticky top-32">
               <AnimatePresence mode="wait">
                 <m.div
                   key={activeLayer}
                   initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                   animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                   exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                   transition={{ duration: 0.3 }}
                 >
                   <InfoPanel data={activeLayerData} />
                 </m.div>
               </AnimatePresence>
             </div>
           </div>
        </div>
      </Container>
    </Section>
  );
}
