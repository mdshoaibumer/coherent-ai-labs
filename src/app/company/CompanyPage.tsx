"use client";
import React from "react";
import { m } from "motion/react";
import {
  ArrowRight, Calendar, Heart, Shield, Eye, Zap, Layers,
  Users, Code, GitBranch, CheckCircle2, Search, Activity,
  FileText, Lock, Accessibility, Monitor, TestTube, Rocket,
  MessageSquare, RefreshCw, BookOpen, Headphones, Mail,
  Brain, Terminal, Cloud, Database, Smartphone, Laptop,
  Workflow, LucideIcon,
} from "lucide-react";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { Text } from "../../components/ui/Text";
import { GlassPanel } from "../../components/ui/GlassPanel";
import { Grid } from "../../components/ui/Grid";
import { IconWrapper } from "../../components/ui/IconWrapper";
import { MagneticButton } from "../../components/animations/MagneticButton";
import { SplitText } from "../../components/animations/SplitText";
import { Reveal, RevealStagger, RevealItem } from "../../components/animations/Reveal";
import { AmbientGlow, NoiseTexture } from "../../components/animations/AmbientGlow";
import { SectionTransition } from "../../components/animations/SectionTransition";
import { EASE_OUT_EXPO } from "../../lib/motion";

/* ═══════════════════════════════════════════════════════════
   SECTION 1: HERO
═══════════════════════════════════════════════════════════ */

function CompanyHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-32 pb-24 overflow-hidden">
      <AmbientGlow position="top-center" size="xl" intensity={0.035} animate animationDuration={7} />
      <NoiseTexture opacity={0.015} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-4xl">
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <span className="inline-block text-[10px] font-mono tracking-widest text-[#555] uppercase mb-6 border border-white/10 px-3 py-1.5 rounded-full bg-white/[0.02]">
                About Coherent AI Labs
              </span>
            </m.div>

            <h1 className="font-display font-bold tracking-tight text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={8} yOffset={20}>
                We exist because software should think.
              </SplitText>
            </h1>

            <m.div
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_OUT_EXPO }}
            >
              <Text size="xl" className="max-w-2xl">
                Coherent AI Labs was founded on a simple observation: most enterprise software is
                still operated by humans doing repetitive cognitive work. We engineer the systems
                that change that — carefully, securely, and at scale.
              </Text>
            </m.div>
          </div>
          
          <m.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="relative hidden lg:block aspect-square max-h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00c8ff]/15 to-transparent rounded-2xl md:rounded-[40px] mix-blend-screen pointer-events-none" />
            <img 
              src="/assets/images/company_vision.png" 
              alt="Coherent AI Labs Vision" 
              className="w-full h-full object-cover rounded-2xl md:rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(0,200,255,0.07)]"
            />
          </m.div>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 2: MISSION
═══════════════════════════════════════════════════════════ */

function Mission() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-6 block">Our Mission</span>
            <Heading level={2} className="mb-8">
              Engineer reliable AI systems that solve real business problems.
            </Heading>
            <Text size="lg" className="text-[#999] mb-8">
              Not proof-of-concepts. Not demos. Production systems that handle edge cases,
              respect compliance boundaries, scale under load, and improve over time.
            </Text>
            <Text size="lg" className="text-[#888]">
              We believe the gap between AI research and production software is an engineering
              problem — not a model problem. Our job is to close that gap for every client,
              every time.
            </Text>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3: ENGINEERING PHILOSOPHY
═══════════════════════════════════════════════════════════ */

const PRINCIPLES: { title: string; description: string; icon: LucideIcon }[] = [
  { title: "Simplicity Over Complexity", icon: Layers, description: "The best architecture is the simplest one that solves the problem. We resist over-engineering and unnecessary abstraction." },
  { title: "Security by Design", icon: Shield, description: "Security is not a feature we add later. Authentication, encryption, and access control are foundational decisions made on day one." },
  { title: "AI with Human Oversight", icon: Eye, description: "Autonomous systems need guardrails. Every AI decision includes confidence scoring, audit trails, and configurable human escalation." },
  { title: "Performance as a Feature", icon: Zap, description: "Fast software earns trust. We set performance budgets early and optimize continuously — not as an afterthought before launch." },
  { title: "Scalable Architecture", icon: GitBranch, description: "Systems should grow horizontally without redesign. We architect for 10x scale from the start, not just current requirements." },
  { title: "Accessibility from Day One", icon: Accessibility, description: "Software that excludes users is broken software. WCAG compliance, keyboard navigation, and screen reader support are non-negotiable." },
  { title: "Maintainable Systems", icon: Code, description: "Code is read far more than it is written. We prioritize clarity, documentation, and clean boundaries over clever solutions." },
  { title: "Transparent Communication", icon: MessageSquare, description: "No surprises. Weekly updates, honest timelines, early risk escalation, and clear decision documentation throughout every engagement." },
];

function EngineeringPhilosophy() {
  return (
    <section className="py-32 relative overflow-hidden">
      <NoiseTexture opacity={0.012} />
      <AmbientGlow position="top-left" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Engineering Philosophy</span>
            <Heading level={2}>Principles That Guide Every Decision</Heading>
            <Text size="lg">
              These are not aspirational values on a wall. They are engineering constraints
              that shape every architecture decision, code review, and deployment.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.07} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PRINCIPLES.map((principle) => (
            <RevealItem key={principle.title}>
              <GlassPanel variant="dark" className="p-6 h-full group hover:border-white/15 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <IconWrapper variant="default" size="sm" className="shrink-0 group-hover:border-white/20 transition-colors duration-500">
                    <principle.icon className="w-4 h-4 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </IconWrapper>
                  <div>
                    <h3 className="font-display text-base font-medium text-white mb-2 tracking-tight">{principle.title}</h3>
                    <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">{principle.description}</Text>
                  </div>
                </div>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 4: HOW WE BUILD
═══════════════════════════════════════════════════════════ */

const BUILD_PHASES = [
  { step: "01", title: "Discovery", description: "Stakeholder interviews, domain mapping, constraint analysis, and success criteria definition.", deliverable: "Project Brief & Requirements" },
  { step: "02", title: "Research", description: "Technical feasibility, vendor evaluation, prototype validation, and risk assessment.", deliverable: "Architecture Decision Records" },
  { step: "03", title: "Architecture", description: "System design, data modeling, API contracts, infrastructure planning, and security architecture.", deliverable: "Technical Design Document" },
  { step: "04", title: "Design", description: "Information architecture, interaction design, component library, and accessibility planning.", deliverable: "Design System & Prototypes" },
  { step: "05", title: "Development", description: "Iterative sprints with automated testing, code review, and continuous integration.", deliverable: "Working Software (every 2 weeks)" },
  { step: "06", title: "AI Integration", description: "Model selection, prompt engineering, evaluation frameworks, and production optimization.", deliverable: "Validated AI Pipelines" },
  { step: "07", title: "Testing", description: "Unit, integration, e2e, performance, security, and accessibility testing.", deliverable: "Quality Assurance Report" },
  { step: "08", title: "Deployment", description: "Infrastructure provisioning, CI/CD setup, monitoring configuration, and runbook creation.", deliverable: "Production Environment" },
  { step: "09", title: "Monitoring", description: "Observability setup, alerting rules, performance baselines, and incident response procedures.", deliverable: "Operational Dashboard" },
  { step: "10", title: "Continuous Improvement", description: "Performance optimization, feature iteration, model retraining, and architecture evolution.", deliverable: "Ongoing Engineering Partnership" },
];

function HowWeBuild() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="xl" intensity={0.02} />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Delivery Process</span>
            <Heading level={2}>How We Build</Heading>
            <Text size="lg">
              Ten phases from initial conversation to continuous operation. Every phase has
              clear deliverables, quality gates, and collaboration checkpoints.
            </Text>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <RevealStagger stagger={0.06} className="space-y-4">
            {BUILD_PHASES.map((phase, i) => (
              <RevealItem key={phase.step}>
                <div className="flex items-start gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 text-[10px] font-mono font-bold text-[#666] group-hover:text-white group-hover:border-white/20 transition-all duration-500">
                    {phase.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                      <h4 className="font-display text-base font-medium text-white">{phase.title}</h4>
                      <span className="text-[10px] font-mono text-[#555] tracking-wide">{phase.deliverable}</span>
                    </div>
                    <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors">{phase.description}</Text>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 5: TECHNOLOGY DNA
═══════════════════════════════════════════════════════════ */

const TECH_GROUPS: { category: string; icon: LucideIcon; why: string; items: string[] }[] = [
  { category: "AI & LLMs", icon: Brain, why: "We choose models for reliability and cost, not hype. Production AI needs deterministic outputs and cost controls.", items: ["GPT-4o", "Claude 3.5", "Gemini", "Llama 3", "LangGraph", "RAG Pipelines"] },
  { category: "Backend", icon: Terminal, why: "Type-safe, performant languages with strong ecosystems for long-term maintainability.", items: ["TypeScript", "Python", "Go", "Rust", "Node.js", "FastAPI"] },
  { category: "Frontend", icon: Monitor, why: "Server-rendered by default. Accessibility built-in. Performance budgeted.", items: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"] },
  { category: "Cloud", icon: Cloud, why: "Multi-cloud fluency means we deploy where your compliance and cost structure demands.", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"] },
  { category: "Mobile", icon: Smartphone, why: "Native performance when it matters. Cross-platform efficiency when it doesn't.", items: ["Swift", "Kotlin", "React Native", "SwiftUI", "Jetpack Compose"] },
  { category: "Data", icon: Database, why: "The right database for the right workload. No one-size-fits-all.", items: ["PostgreSQL", "Redis", "Pinecone", "Elasticsearch", "Kafka", "TimescaleDB"] },
  { category: "DevOps", icon: Workflow, why: "Automated everything. Zero-downtime deployments. Infrastructure as code.", items: ["GitHub Actions", "ArgoCD", "Datadog", "Sentry", "Prometheus", "Grafana"] },
  { category: "Security", icon: Lock, why: "Security is a continuous practice, not a checklist.", items: ["SSO/SAML", "RBAC", "Encryption", "Pen Testing", "SOC 2", "HIPAA"] },
];

function TechnologyDNA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <NoiseTexture opacity={0.012} />
      <AmbientGlow position="top-right" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Technology DNA</span>
            <Heading level={2}>Opinionated About Quality. Pragmatic About Tools.</Heading>
            <Text size="lg">
              We do not pick technologies to impress. We pick them to ship reliable software
              that our clients can maintain, scale, and evolve for years.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_GROUPS.map((group) => (
            <RevealItem key={group.category}>
              <div className="border-t border-white/10 pt-6">
                <div className="flex items-center gap-3 mb-3">
                  <group.icon className="w-4 h-4 text-[#666]" strokeWidth={1.5} />
                  <h4 className="font-display text-base font-medium text-white">{group.category}</h4>
                </div>
                <Text size="sm" className="text-[#777] mb-4 italic">{group.why}</Text>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-xs font-medium text-[#aaa]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 6: QUALITY STANDARDS
═══════════════════════════════════════════════════════════ */

const QUALITY_PRACTICES = [
  { title: "Code Reviews", icon: Code, description: "Every pull request reviewed by at least one senior engineer. Architecture decisions documented as ADRs." },
  { title: "Automated Testing", icon: TestTube, description: "Unit, integration, and end-to-end tests run on every commit. Coverage thresholds enforced in CI." },
  { title: "CI/CD Pipelines", icon: Rocket, description: "Automated build, test, lint, and deploy. Zero manual steps from merge to production." },
  { title: "Performance Budgets", icon: Zap, description: "Lighthouse scores, bundle sizes, and response times measured and enforced automatically." },
  { title: "Accessibility Audits", icon: Accessibility, description: "WCAG 2.1 AA compliance verified with automated tools and manual screen reader testing." },
  { title: "Observability", icon: Activity, description: "Structured logging, distributed tracing, and custom metrics from day one — not added after incidents." },
  { title: "Documentation", icon: FileText, description: "API docs, architecture diagrams, runbooks, and onboarding guides maintained as living documents." },
  { title: "Security Reviews", icon: Shield, description: "Dependency scanning, secret detection, SAST/DAST, and quarterly penetration testing." },
];

function QualityStandards() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Quality Standards</span>
            <Heading level={2}>Engineering Practices We Never Skip</Heading>
            <Text size="lg">
              These practices are not optional. They run on every project, every sprint, regardless
              of timeline pressure. They are what make software maintainable five years from now.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.07} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {QUALITY_PRACTICES.map((practice) => (
            <RevealItem key={practice.title}>
              <GlassPanel variant="dark" className="p-5 h-full group hover:border-white/15 transition-all duration-500 text-center">
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center mx-auto mb-4 group-hover:border-white/20 transition-colors duration-500">
                  <practice.icon className="w-5 h-5 text-[#666] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h4 className="font-display text-sm font-medium text-white mb-2">{practice.title}</h4>
                <Text size="sm" className="text-[#777] group-hover:text-[#aaa] transition-colors text-xs leading-relaxed">{practice.description}</Text>
              </GlassPanel>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 7: WORKING WITH US
═══════════════════════════════════════════════════════════ */

const COLLABORATION = [
  { title: "Discovery Workshop", icon: Search, description: "Deep-dive into your business, constraints, and goals before any code is written." },
  { title: "Weekly Updates", icon: RefreshCw, description: "Every week: what was done, what is planned, what is blocked. No information gaps." },
  { title: "Transparent Communication", icon: MessageSquare, description: "Honest timelines, early risk escalation, and clear trade-off recommendations." },
  { title: "Agile Delivery", icon: Rocket, description: "Working software delivered every two weeks. Demo, feedback, adjust, repeat." },
  { title: "Knowledge Transfer", icon: BookOpen, description: "Your team is trained on the system. Documentation ensures independence." },
  { title: "Post-Launch Support", icon: Headphones, description: "We do not disappear after launch. Monitoring, bug fixes, and optimization continue." },
];

function WorkingWithUs() {
  return (
    <section className="py-32 relative overflow-hidden">
      <NoiseTexture opacity={0.012} />
      <Container className="relative z-10">
        <div className="max-w-3xl mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">Collaboration</span>
            <Heading level={2}>What Working With Us Feels Like</Heading>
            <Text size="lg">
              No black boxes. No quarterly check-ins with slide decks. We operate as an
              extension of your engineering team — with the same urgency, the same standards,
              and the same accountability.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COLLABORATION.map((item) => (
            <RevealItem key={item.title}>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
                  <item.icon className="w-4 h-4 text-[#888] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-medium text-white mb-1">{item.title}</h4>
                  <Text size="sm" className="text-[#888] group-hover:text-[#aaa] transition-colors text-xs">{item.description}</Text>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 8: CAREERS
═══════════════════════════════════════════════════════════ */

function Careers() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="md" intensity={0.015} />
      <Container size="sm" className="relative z-10">
        <Reveal variant="scaleUp">
          <GlassPanel variant="default" gradient className="p-10 md:p-14 text-center">
            <Heart className="w-6 h-6 text-[#555] mx-auto mb-6" strokeWidth={1.5} />
            <Heading level={3} className="mb-4">We are Always Looking for Great Engineers</Heading>
            <Text size="sm" className="text-[#888] max-w-lg mx-auto mb-8">
              We do not have a careers page with generic job descriptions. If you are an engineer
              who cares deeply about code quality, system design, and building AI that actually
              works in production — we want to hear from you.
            </Text>
            <a href="mailto:careers@coherentailabs.com" className="text-sm font-medium text-white hover:text-white/80 transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white/60">
              careers@coherentailabs.com
            </a>
          </GlassPanel>
        </Reveal>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 9: CTA
═══════════════════════════════════════════════════════════ */

function CompanyCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={7} />
      <Container size="md" className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal variant="perspective">
            <Heading level={2} className="md:text-5xl mb-8">
              Let&apos;s Talk About Your Engineering Challenge.
            </Heading>
            <Text size="lg" className="max-w-2xl mx-auto mb-10">
              No sales pitch. No pressure. Just a conversation between engineers about
              what you are building and whether we can help.
            </Text>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact">
                <MagneticButton
                  strength={25}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                >
                  <Calendar className="w-5 h-5" />
                  Book a Conversation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>
              <a href="mailto:contact@coherentailabs.com">
                <MagneticButton
                  strength={18}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
                >
                  <Mail className="w-5 h-5 text-[#888]" />
                  Send an Email
                </MagneticButton>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE COMPOSITION
═══════════════════════════════════════════════════════════ */

export function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <SectionTransition variant="glow" />
      <Mission />
      <SectionTransition variant="sweep" />
      <EngineeringPhilosophy />
      <SectionTransition variant="glow" />
      <HowWeBuild />
      <SectionTransition variant="sweep" />
      <TechnologyDNA />
      <SectionTransition variant="glow" />
      <QualityStandards />
      <SectionTransition variant="sweep" />
      <WorkingWithUs />
      <SectionTransition variant="glow" />
      <Careers />
      <SectionTransition variant="sweep" />
      <CompanyCTA />
    </>
  );
}
