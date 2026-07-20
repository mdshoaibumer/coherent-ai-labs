"use client";
import React from "react";
import {
  Search, Cpu, Rocket, Users, Handshake, RefreshCw,
  ArrowRight, Calendar, Clock, CheckCircle2, LucideIcon,
} from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";
import { GlassPanel } from "../../components/ui/GlassPanel";
import { Grid } from "../../components/ui/Grid";
import { MagneticButton } from "../../components/animations/MagneticButton";
import { SplitText } from "../../components/animations/SplitText";
import { Reveal, RevealStagger, RevealItem } from "../../components/animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../../components/animations/AmbientGlow";
import { SectionTransition } from "../../components/animations/SectionTransition";
import { Accordion } from "../../components/ui/Accordion";
import { EASE_OUT_EXPO } from "../../lib/motion";
import { m } from "motion/react";
import Link from "next/link";

interface EngagementModel {
  icon: LucideIcon;
  title: string;
  idealFor: string;
  timeline: string;
  description: string;
  deliverables: string[];
  teamComposition: string;
  whenToChoose: string;
}

const MODELS: EngagementModel[] = [
  {
    icon: Search,
    title: "AI Discovery Workshop",
    idealFor: "Organizations exploring AI for the first time",
    timeline: "1-2 weeks",
    description: "A structured workshop identifying AI opportunities, evaluating feasibility, and producing an actionable implementation roadmap. No commitment to build — just clarity.",
    deliverables: ["Opportunity assessment report", "Technical feasibility analysis", "Implementation roadmap", "ROI projections", "Risk assessment"],
    teamComposition: "Solution Architect + AI Engineer",
    whenToChoose: "You have ideas but need expert validation before investing.",
  },
  {
    icon: Cpu,
    title: "Architecture Consulting",
    idealFor: "Teams needing technical design expertise",
    timeline: "2-4 weeks",
    description: "Deep technical engagement to design system architecture, data models, API contracts, and infrastructure strategy. We produce the blueprint — you build it, or we build it together.",
    deliverables: ["System architecture document", "Data model design", "API specifications", "Infrastructure plan", "Security architecture", "Technology recommendations"],
    teamComposition: "Principal Architect + Domain Specialist",
    whenToChoose: "You have an engineering team but need architecture guidance for a complex system.",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    idealFor: "Startups and new product initiatives",
    timeline: "6-12 weeks",
    description: "Rapid development of a production-quality minimum viable product. We focus on core value, not feature bloat. Ship fast, learn, iterate.",
    deliverables: ["Production-deployed application", "Core feature set", "CI/CD pipeline", "Monitoring setup", "Documentation", "Handoff or continued support"],
    teamComposition: "Full-stack Engineer + AI Engineer + Designer",
    whenToChoose: "You need to validate a product hypothesis quickly with real users.",
  },
  {
    icon: Users,
    title: "Dedicated Engineering Team",
    idealFor: "Enterprises building complex platforms",
    timeline: "Ongoing (3-12+ months)",
    description: "A dedicated team of senior engineers embedded in your organization. We operate as your engineering department — same tools, same rituals, same accountability.",
    deliverables: ["Continuous software delivery", "Sprint planning & execution", "Architecture evolution", "Code ownership", "Knowledge transfer", "Operational support"],
    teamComposition: "Tech Lead + 2-4 Engineers + QA + DevOps",
    whenToChoose: "You need sustained engineering capacity for a large initiative without the overhead of hiring.",
  },
  {
    icon: Handshake,
    title: "Enterprise Partnership",
    idealFor: "Organizations with multiple AI initiatives",
    timeline: "12+ months",
    description: "A strategic engineering partnership covering multiple workstreams, architecture governance, and continuous innovation. We become your AI engineering arm.",
    deliverables: ["Multi-project delivery", "Architecture governance", "Quarterly reviews", "Innovation roadmap", "Priority support SLA", "Executive reporting"],
    teamComposition: "Engineering Director + Multiple Squads",
    whenToChoose: "You have multiple AI/software initiatives and need a trusted long-term engineering partner.",
  },
  {
    icon: RefreshCw,
    title: "AI Modernization",
    idealFor: "Enterprises with legacy systems",
    timeline: "3-9 months",
    description: "Incremental modernization of legacy software using strangler fig patterns. We extract, replace, and enhance modules without disrupting ongoing operations.",
    deliverables: ["Migration strategy", "Incremental module replacement", "Data migration", "Integration adapters", "Performance improvement", "Zero-downtime transition"],
    teamComposition: "Architect + Backend Engineers + DevOps",
    whenToChoose: "Your current systems work but cannot support AI integration or modern scaling requirements.",
  },
];

export function EngagementModelsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden">
        <AmbientGlow position="top-center" size="xl" intensity={0.03} animate animationDuration={6} />
        <NoiseTexture opacity={0.015} />
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <span className="inline-block text-[10px] font-mono tracking-widest text-[#555] uppercase mb-6 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
                Engagement Models
              </span>
            </m.div>
            <h1 className="font-display font-bold tracking-tight text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-8">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={6} yOffset={16}>
                Choose How We Work Together.
              </SplitText>
            </h1>
            <m.div
              initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE_OUT_EXPO }}
            >
              <Text size="xl" className="max-w-2xl">
                From a focused discovery workshop to a dedicated engineering
                team — we adapt our engagement model to your timeline, team
                structure, and business objectives.
              </Text>
            </m.div>
          </div>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* Engagement Models */}
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="center" size="xl" intensity={0.02} />
        <Container className="relative z-10">
          <RevealStagger stagger={0.1} className="space-y-8">
            {MODELS.map((model) => (
              <RevealItem key={model.title}>
                <GlassPanel variant="dark" className="p-6 md:p-8 group hover:border-white/15 transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                    {/* Left: Overview */}
                    <div className="lg:col-span-7">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-colors">
                          <model.icon className="w-5 h-5 text-[#888] group-hover:text-white transition-colors" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-medium text-white tracking-tight">{model.title}</h2>
                          <span className="text-[10px] font-mono text-[#555] tracking-widest uppercase">{model.idealFor}</span>
                        </div>
                      </div>

                      <Text size="sm" className="text-[#aaa] mb-5">{model.description}</Text>

                      <div className="flex flex-wrap gap-4 text-xs font-mono text-[#666]">
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" /> {model.timeline}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" /> {model.teamComposition}
                        </span>
                      </div>
                    </div>

                    {/* Right: Deliverables + When */}
                    <div className="lg:col-span-5">
                      <div className="mb-4">
                        <h4 className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-3">Deliverables</h4>
                        <div className="space-y-1.5">
                          {model.deliverables.map((d) => (
                            <div key={d} className="flex items-center gap-2 text-xs text-[#aaa]">
                              <CheckCircle2 className="w-3 h-3 text-[#555] shrink-0" />
                              {d}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-white/5">
                        <h4 className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-2">When to Choose</h4>
                        <Text size="sm" className="text-[#888] text-xs italic">{model.whenToChoose}</Text>
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </RevealItem>
            ))}
          </RevealStagger>
        </Container>
      </section>

      <SectionTransition variant="sweep" />

      {/* FAQ */}
      <section className="py-32 relative overflow-hidden">
        <NoiseTexture opacity={0.012} />
        <Container size="md" className="relative z-10">
          <div className="text-center mb-16">
            <Reveal variant="fadeUp">
              <Heading level={2}>Common Questions</Heading>
            </Reveal>
          </div>
          <Reveal variant="fade" delay={0.1}>
            <GlassPanel variant="dark" className="p-6 md:p-8">
              <Accordion items={[
                { id: "eng-1", title: "How do I know which engagement model is right?", content: "Start with the AI Readiness Assessment on our contact page. Based on your answers, we'll recommend the best-fit model. If you're unsure, the Discovery Workshop is always a safe starting point." },
                { id: "eng-2", title: "Can I switch models mid-engagement?", content: "Yes. Many clients start with Architecture Consulting and graduate to a Dedicated Team once they validate the approach. We design transitions to be seamless." },
                { id: "eng-3", title: "What does pricing look like?", content: "Discovery Workshops: fixed-fee. MVP Development: milestone-based. Dedicated Teams: monthly retainer. Enterprise Partnerships: custom SLA-based agreements. We scope every engagement transparently before starting." },
                { id: "eng-4", title: "Do you work with early-stage startups?", content: "Yes. Our MVP Development model is designed for startups. We focus on shipping core value quickly with production-quality architecture so you don't accumulate technical debt in your foundation." },
                { id: "eng-5", title: "How do you handle knowledge transfer?", content: "Documentation, pair programming, recorded architecture sessions, and structured handoff milestones. Our goal is your team's independence, not perpetual dependence." },
              ]} />
            </GlassPanel>
          </Reveal>
        </Container>
      </section>

      <SectionTransition variant="glow" />

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={7} />
        <Container size="md" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal variant="perspective">
              <Heading level={2} className="md:text-5xl mb-6">
                Not Sure Where to Start?
              </Heading>
              <Text size="lg" className="max-w-xl mx-auto mb-10">
                Take our 3-minute AI Readiness Assessment. We&apos;ll recommend
                the right engagement model based on your answers.
              </Text>
              <Link href="/contact">
                <MagneticButton
                  strength={25}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                >
                  <Calendar className="w-5 h-5" />
                  Start AI Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
