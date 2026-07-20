import { m } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  Calendar, 
  Mail, 
  Zap, 
  Code, 
  PlayCircle 
} from "lucide-react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Grid } from "../ui/Grid";
import { GlassPanel } from "../ui/GlassPanel";

const HIGHLIGHTS = [
  "AI Strategy & Consulting",
  "Custom Software Development",
  "Enterprise AI Solutions",
  "Workflow Automation",
  "Cloud-Native Engineering",
  "Long-Term Technical Partnership"
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Understand your business goals and technical challenges."
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "Define architecture, roadmap, and implementation strategy."
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Develop, integrate, test, and deploy your solution."
  },
  {
    step: "04",
    title: "Continuous Growth",
    desc: "Support, optimize, and evolve your platform over time."
  }
];

const CONTACT_OPTIONS = [
  { title: "Business Inquiries", icon: Mail },
  { title: "Partnership Opportunities", icon: Zap },
  { title: "Technical Consultation", icon: Code },
  { title: "Product Demonstrations", icon: PlayCircle }
];

export function FinalCTA() {
  return (
    <Section id="contact" border="top" backgroundElement={
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
    }>
      <Container size="md">
        
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heading level={2} className="md:text-6xl leading-[1.1] mb-8">
              Let's Build the Future of <br className="hidden md:block" />Your Business with AI
            </Heading>
            <Text size="xl" className="max-w-3xl mx-auto mb-12">
              Whether you're exploring AI agents, workflow automation, enterprise software, or a complete digital transformation, we're ready to help design the right solution for your business.
            </Text>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button variant="primary">
                <Calendar className="w-5 h-5" />
                Book a Discovery Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline">
                <MessageSquare className="w-5 h-5 text-[#888]" />
                Discuss Your Project
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#666]" />
                  <Text size="sm">{highlight}</Text>
                </div>
              ))}
            </div>
          </m.div>
        </div>

        {/* Engagement Process */}
        <m.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-24"
        >
          <div className="text-center mb-10">
            <h3 className="font-display text-sm font-mono tracking-widest text-[#555] uppercase">Engagement Process</h3>
          </div>
          <Grid cols={4} gap="sm" className="relative">
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {PROCESS.map((step) => (
              <GlassPanel key={step.step} variant="default" className="p-8 group hover:bg-[#0a0a0a] transition-colors relative z-10">
                <div className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-4 px-3 py-1 bg-white/5 rounded-full inline-block border border-white/5">
                  Step {step.step}
                </div>
                <h4 className="font-display text-lg font-medium text-white mb-2">{step.title}</h4>
                <Text size="sm">{step.desc}</Text>
              </GlassPanel>
            ))}
          </Grid>
        </m.div>

        {/* Contact Summary */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-white/5 pt-16 max-w-4xl mx-auto"
        >
          <Grid cols={4} gap="sm" className="text-center">
            {CONTACT_OPTIONS.map((option) => (
              <div key={option.title} className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer group">
                <option.icon className="w-5 h-5 text-[#555] group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-[#888] group-hover:text-[#ccc] transition-colors">
                  {option.title}
                </span>
              </div>
            ))}
          </Grid>
        </m.div>

      </Container>
    </Section>
  );
}
