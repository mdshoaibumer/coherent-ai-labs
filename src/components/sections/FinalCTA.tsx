"use client";
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Mail,
  Zap,
  Code,
  PlayCircle,
} from "lucide-react";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Grid } from "../ui/Grid";
import { GlassPanel } from "../ui/GlassPanel";
import { Reveal, RevealStagger, RevealItem } from "../animations/Reveal";
import { MagneticButton } from "../animations/MagneticButton";
import { AmbientGlow } from "../animations/AmbientGlow";

const HIGHLIGHTS = [
  "AI Strategy & Consulting",
  "Custom Software Development",
  "Enterprise AI Solutions",
  "Workflow Automation",
  "Cloud-Native Engineering",
  "Long-Term Technical Partnership",
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "Understand your business goals and technical challenges.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "Define architecture, roadmap, and implementation strategy.",
  },
  {
    step: "03",
    title: "Build & Integrate",
    desc: "Develop, integrate, test, and deploy your solution.",
  },
  {
    step: "04",
    title: "Continuous Growth",
    desc: "Support, optimize, and evolve your platform over time.",
  },
];

const CONTACT_OPTIONS = [
  { title: "Business Inquiries", icon: Mail },
  { title: "Partnership Opportunities", icon: Zap },
  { title: "Technical Consultation", icon: Code },
  { title: "Product Demonstrations", icon: PlayCircle },
];

export function FinalCTA() {
  return (
    <Section
      id="contact"
      border="top"
      backgroundElement={
        <>
          <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={6} />
        </>
      }
    >
      <Container size="md">
        {/* Main Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal variant="perspective">
            <Heading level={2} className="md:text-6xl leading-[1.1] mb-8">
              Let&apos;s Build the Future of{" "}
              <br className="hidden md:block" />
              Your Business with AI
            </Heading>
            <Text size="xl" className="max-w-3xl mx-auto mb-12">
              Whether you&apos;re exploring AI agents, workflow automation,
              enterprise software, or a complete digital transformation,
              we&apos;re ready to help design the right solution for your
              business.
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="/contact">
                <MagneticButton
                  strength={28}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:shadow-[0_0_36px_rgba(255,255,255,0.14)]"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>
              <a href="/contact">
                <MagneticButton
                  strength={20}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
                >
                  <MessageSquare className="w-5 h-5 text-[#888]" />
                  Discuss Your Project
                </MagneticButton>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#666]" />
                  <Text size="sm">{highlight}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Engagement Process */}
        <Reveal variant="fadeUp" delay={0.1} className="mb-24">
          <div className="text-center mb-10">
            <h3 className="font-display text-sm font-mono tracking-widest text-[#555] uppercase">
              Engagement Process
            </h3>
          </div>
          <RevealStagger stagger={0.1}>
            <Grid cols={4} gap="sm" className="relative">
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {PROCESS.map((step) => (
                <RevealItem key={step.step}>
                  <GlassPanel
                    variant="default"
                    className="p-8 group hover:bg-[#0a0a0a] transition-colors relative z-10"
                  >
                    <div className="text-[10px] font-mono tracking-widest text-[#666] uppercase mb-4 px-3 py-1 bg-white/5 rounded-full inline-block border border-white/5">
                      Step {step.step}
                    </div>
                    <h4 className="font-display text-lg font-medium text-white mb-2">
                      {step.title}
                    </h4>
                    <Text size="sm">{step.desc}</Text>
                  </GlassPanel>
                </RevealItem>
              ))}
            </Grid>
          </RevealStagger>
        </Reveal>

        {/* Contact Summary */}
        <Reveal variant="fade" delay={0.2} className="border-t border-white/5 pt-16 max-w-4xl mx-auto">
          <Grid cols={4} gap="sm" className="text-center">
            {CONTACT_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-white/[0.02] transition-colors cursor-pointer group"
              >
                <option.icon className="w-5 h-5 text-[#555] group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-[#888] group-hover:text-[#ccc] transition-colors">
                  {option.title}
                </span>
              </div>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
}
