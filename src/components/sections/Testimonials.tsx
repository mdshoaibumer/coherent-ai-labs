import { m } from "motion/react";
import { Building2 } from "lucide-react";
import { PHILOSOPHY, TIMELINE, RECOGNITION } from "../../constants/testimonials";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { GlassPanel } from "../ui/GlassPanel";
import { IconWrapper } from "../ui/IconWrapper";
import { Grid } from "../ui/Grid";

export function Testimonials() {
  return (
    <Section id="clients" border="top" backgroundElement={
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
    }>
      <Container>
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2}>
              Built on Engineering Excellence.<br />Growing Through Client Success.
            </Heading>
            <Text size="lg">
              Every partnership is an opportunity to solve meaningful business challenges through intelligent software and AI-powered automation.
            </Text>
          </m.div>
        </div>

        {/* 3-Column Layout */}
        <Grid cols={3} gap="default" className="mb-24">
          
          {/* Column 1: Featured Client Story Placeholder */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassPanel variant="default" className="col-span-1 p-8 group hover:border-white/20 transition-all duration-500 h-full">
              <div className="absolute top-4 right-4">
                <span className="text-[10px] font-mono tracking-widest text-[#666] uppercase px-3 py-1 bg-white/5 rounded-full border border-white/5">
                  Future Client Story
                </span>
              </div>
              
              <IconWrapper variant="default" className="mb-8 mt-4 group-hover:bg-white/[0.04]">
                <Building2 className="w-6 h-6 text-[#555]" strokeWidth={1.5} />
              </IconWrapper>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-2">Industry</h4>
                  <div className="h-4 w-1/3 bg-white/5 rounded" />
                </div>
                <div>
                  <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-2">Project Overview</h4>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-2">Business Challenge</h4>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-4/5 bg-white/5 rounded" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-2">Solution Delivered</h4>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-2">Business Outcomes</h4>
                  <div className="flex gap-2">
                    <div className="h-6 w-16 bg-white/5 rounded-md" />
                    <div className="h-6 w-20 bg-white/5 rounded-md" />
                    <div className="h-6 w-14 bg-white/5 rounded-md" />
                  </div>
                </div>
              </div>
            </GlassPanel>
          </m.div>

          {/* Column 2: Delivery Philosophy */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-1 bg-transparent border border-transparent flex flex-col"
          >
            <Heading level={3} className="px-4">Delivery Philosophy</Heading>
            <div className="flex flex-col gap-3 flex-1">
              {PHILOSOPHY.map((item) => (
                <div 
                  key={item.title}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-4 h-4 text-[#888] group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-medium text-[#aaa] group-hover:text-[#ccc] transition-colors">
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Column 3: Engagement Timeline */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 bg-transparent border border-transparent flex flex-col"
          >
            <Heading level={3} className="px-4">Engagement Timeline</Heading>
            <div className="relative flex-1 px-6">
              <div className="absolute left-[39px] top-6 bottom-6 w-px bg-white/10" />
              <div className="flex flex-col gap-8 h-full justify-between py-2">
                {TIMELINE.map((step) => (
                  <div key={step.title} className="flex items-center gap-6 relative z-10 group">
                    <div className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300">
                      <step.icon className="w-3.5 h-3.5 text-[#888] group-hover:text-white transition-colors" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-medium text-[#aaa] group-hover:text-white transition-colors">
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </m.div>
        </Grid>

        {/* Future Testimonials Carousel Placeholder */}
        <div className="mb-32">
          <div className="text-center mb-10">
             <span className="text-xs font-mono tracking-widest text-[#555] uppercase">Reserved for Future Client Testimonials</span>
          </div>
          <Grid cols={3} gap="sm">
             {[1, 2, 3].map((i) => (
               <m.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
               >
                 <GlassPanel className="p-8 hover:border-white/10 transition-colors duration-500 flex flex-col h-full">
                   <div className="flex-1 space-y-4 mb-8 opacity-40">
                     <div className="h-4 w-full bg-white/5 rounded" />
                     <div className="h-4 w-11/12 bg-white/5 rounded" />
                     <div className="h-4 w-4/5 bg-white/5 rounded" />
                     <div className="h-4 w-full bg-white/5 rounded" />
                     <div className="h-4 w-2/3 bg-white/5 rounded" />
                   </div>
                   <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                     <div className="w-10 h-10 rounded-full bg-white/[0.05]" />
                     <div>
                       <div className="h-3 w-24 bg-white/10 rounded mb-2" />
                       <div className="h-2 w-32 bg-white/5 rounded" />
                     </div>
                   </div>
                 </GlassPanel>
               </m.div>
             ))}
          </Grid>
        </div>

        {/* Recognition Area Placeholder */}
        <div className="max-w-5xl mx-auto border-t border-white/10 pt-20">
          <div className="text-center mb-12">
            <Heading level={3}>Ecosystem Recognition</Heading>
            <Text size="sm">A placeholder for future awards, partnerships, and community contributions.</Text>
          </div>
          
          <Grid cols={3} gap="sm">
             {RECOGNITION.map((item, i) => (
               <m.div
                 key={item.title}
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: i * 0.05 }}
                 className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-white/10 transition-all group"
               >
                 <item.icon className="w-6 h-6 text-[#444] mb-4 group-hover:text-[#888] transition-colors duration-500" strokeWidth={1.5} />
                 <span className="text-xs font-medium text-[#666] uppercase tracking-wider text-center group-hover:text-[#aaa] transition-colors duration-500">
                   {item.title}
                 </span>
               </m.div>
             ))}
          </Grid>
        </div>

      </Container>
    </Section>
  );
}
