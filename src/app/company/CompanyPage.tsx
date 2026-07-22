'use client';
import React from 'react';
import { m } from 'motion/react';
import {
  ArrowRight,
  Calendar,
  Heart,
  Shield,
  Eye,
  Zap,
  Layers,
  Users,
  Code,
  GitBranch,
  CheckCircle2,
  Search,
  Activity,
  FileText,
  Lock,
  Accessibility,
  Monitor,
  TestTube,
  Rocket,
  MessageSquare,
  RefreshCw,
  BookOpen,
  Headphones,
  Mail,
  Brain,
  Terminal,
  Cloud,
  Database,
  Smartphone,
  Laptop,
  Workflow,
  LucideIcon,
} from 'lucide-react';
import { Container } from '../../components/ui/Container';
import { Heading } from '../../components/ui/Heading';
import { Text } from '../../components/ui/Text';
import { GlassPanel } from '../../components/ui/GlassPanel';
import { Grid } from '../../components/ui/Grid';
import { IconWrapper } from '../../components/ui/IconWrapper';
import { MagneticButton } from '../../components/animations/MagneticButton';
import { SplitText } from '../../components/animations/SplitText';
import { Reveal, RevealStagger, RevealItem } from '../../components/animations/Reveal';
import { AmbientGlow, NoiseTexture } from '../../components/animations/AmbientGlow';
import { SectionTransition } from '../../components/animations/SectionTransition';
import { EASE_OUT_EXPO } from '../../lib/motion';

/* ═══════════════════════════════════════════════════════════
   SECTION 1: HERO
═══════════════════════════════════════════════════════════ */

function CompanyHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-24">
      <AmbientGlow
        position="top-center"
        size="xl"
        intensity={0.035}
        animate
        animationDuration={7}
      />
      <NoiseTexture opacity={0.015} />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="max-w-4xl">
            <m.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <span className="text-muted-foreground/60 border-border bg-accent mb-6 inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">
                About Coherent AI Labs
              </span>
            </m.div>

            <h1 className="font-display text-foreground mb-8 text-4xl leading-[1.05] font-bold tracking-tight md:text-6xl lg:text-7xl">
              <SplitText splitBy="word" staggerDelay={0.04} baseDelay={0.1} blur={8} yOffset={20}>
                We exist because software should think.
              </SplitText>
            </h1>

            <m.div
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
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
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="relative hidden aspect-square max-h-[500px] w-full lg:block"
          >
            <div className="from-foreground/5 pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-tr to-transparent mix-blend-overlay md:rounded-[40px]" />
            <img
              src="/assets/images/company_vision.png"
              alt="Coherent AI Labs Vision"
              className="border-border h-full w-full rounded-2xl border object-cover shadow-[var(--shadow-xl)] md:rounded-[40px]"
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
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-6 block font-mono text-[10px] tracking-widest uppercase">
              Our Mission
            </span>
            <Heading level={2} className="mb-8">
              Engineer reliable AI systems that solve real business problems.
            </Heading>
            <Text size="lg" className="text-muted-foreground mb-8">
              Not proof-of-concepts. Not demos. Production systems that handle edge cases, respect
              compliance boundaries, scale under load, and improve over time.
            </Text>
            <Text size="lg" className="text-muted-foreground">
              We believe the gap between AI research and production software is an engineering
              problem — not a model problem. Our job is to close that gap for every client, every
              time.
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
  {
    title: 'Simplicity Over Complexity',
    icon: Layers,
    description:
      'The best architecture is the simplest one that solves the problem. We resist over-engineering and unnecessary abstraction.',
  },
  {
    title: 'Security by Design',
    icon: Shield,
    description:
      'Security is not a feature we add later. Authentication, encryption, and access control are foundational decisions made on day one.',
  },
  {
    title: 'AI with Human Oversight',
    icon: Eye,
    description:
      'Autonomous systems need guardrails. Every AI decision includes confidence scoring, audit trails, and configurable human escalation.',
  },
  {
    title: 'Performance as a Feature',
    icon: Zap,
    description:
      'Fast software earns trust. We set performance budgets early and optimize continuously — not as an afterthought before launch.',
  },
  {
    title: 'Scalable Architecture',
    icon: GitBranch,
    description:
      'Systems should grow horizontally without redesign. We architect for 10x scale from the start, not just current requirements.',
  },
  {
    title: 'Accessibility from Day One',
    icon: Accessibility,
    description:
      'Software that excludes users is broken software. WCAG compliance, keyboard navigation, and screen reader support are non-negotiable.',
  },
  {
    title: 'Maintainable Systems',
    icon: Code,
    description:
      'Code is read far more than it is written. We prioritize clarity, documentation, and clean boundaries over clever solutions.',
  },
  {
    title: 'Transparent Communication',
    icon: MessageSquare,
    description:
      'No surprises. Weekly updates, honest timelines, early risk escalation, and clear decision documentation throughout every engagement.',
  },
];

function EngineeringPhilosophy() {
  return (
    <section className="relative overflow-hidden py-32">
      <NoiseTexture opacity={0.012} />
      <AmbientGlow position="top-left" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Engineering Philosophy
            </span>
            <Heading level={2}>Principles That Guide Every Decision</Heading>
            <Text size="lg">
              These are not aspirational values on a wall. They are engineering constraints that
              shape every architecture decision, code review, and deployment.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.07} className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PRINCIPLES.map((principle) => (
            <RevealItem key={principle.title}>
              <GlassPanel
                variant="dark"
                className="group h-full p-6 transition-all duration-500 hover:border-white/15"
              >
                <div className="flex items-start gap-4">
                  <IconWrapper
                    variant="default"
                    size="sm"
                    className="shrink-0 transition-colors duration-500 group-hover:border-white/20"
                  >
                    <principle.icon
                      className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors duration-500"
                      strokeWidth={1.5}
                    />
                  </IconWrapper>
                  <div>
                    <h3 className="font-display text-foreground mb-2 text-base font-medium tracking-tight">
                      {principle.title}
                    </h3>
                    <Text
                      size="sm"
                      className="text-muted-foreground group-hover:text-muted-foreground transition-colors"
                    >
                      {principle.description}
                    </Text>
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
  {
    step: '01',
    title: 'Discovery',
    description:
      'Stakeholder interviews, domain mapping, constraint analysis, and success criteria definition.',
    deliverable: 'Project Brief & Requirements',
  },
  {
    step: '02',
    title: 'Research',
    description:
      'Technical feasibility, vendor evaluation, prototype validation, and risk assessment.',
    deliverable: 'Architecture Decision Records',
  },
  {
    step: '03',
    title: 'Architecture',
    description:
      'System design, data modeling, API contracts, infrastructure planning, and security architecture.',
    deliverable: 'Technical Design Document',
  },
  {
    step: '04',
    title: 'Design',
    description:
      'Information architecture, interaction design, component library, and accessibility planning.',
    deliverable: 'Design System & Prototypes',
  },
  {
    step: '05',
    title: 'Development',
    description:
      'Iterative sprints with automated testing, code review, and continuous integration.',
    deliverable: 'Working Software (every 2 weeks)',
  },
  {
    step: '06',
    title: 'AI Integration',
    description:
      'Model selection, prompt engineering, evaluation frameworks, and production optimization.',
    deliverable: 'Validated AI Pipelines',
  },
  {
    step: '07',
    title: 'Testing',
    description: 'Unit, integration, e2e, performance, security, and accessibility testing.',
    deliverable: 'Quality Assurance Report',
  },
  {
    step: '08',
    title: 'Deployment',
    description:
      'Infrastructure provisioning, CI/CD setup, monitoring configuration, and runbook creation.',
    deliverable: 'Production Environment',
  },
  {
    step: '09',
    title: 'Monitoring',
    description:
      'Observability setup, alerting rules, performance baselines, and incident response procedures.',
    deliverable: 'Operational Dashboard',
  },
  {
    step: '10',
    title: 'Continuous Improvement',
    description:
      'Performance optimization, feature iteration, model retraining, and architecture evolution.',
    deliverable: 'Ongoing Engineering Partnership',
  },
];

function HowWeBuild() {
  return (
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="xl" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Delivery Process
            </span>
            <Heading level={2}>How We Build</Heading>
            <Text size="lg">
              Ten phases from initial conversation to continuous operation. Every phase has clear
              deliverables, quality gates, and collaboration checkpoints.
            </Text>
          </Reveal>
        </div>

        <div className="mx-auto max-w-4xl">
          <RevealStagger stagger={0.06} className="space-y-4">
            {BUILD_PHASES.map((phase, i) => (
              <RevealItem key={phase.step}>
                <div className="bg-accent hover:border-border group flex items-start gap-5 rounded-xl border border-white/[0.05] p-5 transition-colors">
                  <div className="bg-accent border-border text-muted-foreground/70 group-hover:text-foreground flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border font-mono text-[10px] font-bold transition-all duration-500 group-hover:border-white/20">
                    {phase.step}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-display text-foreground text-base font-medium">
                        {phase.title}
                      </h4>
                      <span className="text-muted-foreground/60 font-mono text-[10px] tracking-wide">
                        {phase.deliverable}
                      </span>
                    </div>
                    <Text
                      size="sm"
                      className="text-muted-foreground group-hover:text-muted-foreground transition-colors"
                    >
                      {phase.description}
                    </Text>
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
  {
    category: 'AI & LLMs',
    icon: Brain,
    why: 'We choose models for reliability and cost, not hype. Production AI needs deterministic outputs and cost controls.',
    items: ['GPT-4o', 'Claude 3.5', 'Gemini', 'Llama 3', 'LangGraph', 'RAG Pipelines'],
  },
  {
    category: 'Backend',
    icon: Terminal,
    why: 'Type-safe, performant languages with strong ecosystems for long-term maintainability.',
    items: ['TypeScript', 'Python', 'Go', 'Rust', 'Node.js', 'FastAPI'],
  },
  {
    category: 'Frontend',
    icon: Monitor,
    why: 'Server-rendered by default. Accessibility built-in. Performance budgeted.',
    items: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    why: 'Multi-cloud fluency means we deploy where your compliance and cost structure demands.',
    items: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Docker'],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    why: "Native performance when it matters. Cross-platform efficiency when it doesn't.",
    items: ['Swift', 'Kotlin', 'React Native', 'SwiftUI', 'Jetpack Compose'],
  },
  {
    category: 'Data',
    icon: Database,
    why: 'The right database for the right workload. No one-size-fits-all.',
    items: ['PostgreSQL', 'Redis', 'Pinecone', 'Elasticsearch', 'Kafka', 'TimescaleDB'],
  },
  {
    category: 'DevOps',
    icon: Workflow,
    why: 'Automated everything. Zero-downtime deployments. Infrastructure as code.',
    items: ['GitHub Actions', 'ArgoCD', 'Datadog', 'Sentry', 'Prometheus', 'Grafana'],
  },
  {
    category: 'Security',
    icon: Lock,
    why: 'Security is a continuous practice, not a checklist.',
    items: ['SSO/SAML', 'RBAC', 'Encryption', 'Pen Testing', 'SOC 2', 'HIPAA'],
  },
];

function TechnologyDNA() {
  return (
    <section className="relative overflow-hidden py-32">
      <NoiseTexture opacity={0.012} />
      <AmbientGlow position="top-right" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Technology DNA
            </span>
            <Heading level={2}>Opinionated About Quality. Pragmatic About Tools.</Heading>
            <Text size="lg">
              We do not pick technologies to impress. We pick them to ship reliable software that
              our clients can maintain, scale, and evolve for years.
            </Text>
          </Reveal>
        </div>

        <RevealStagger stagger={0.08} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECH_GROUPS.map((group) => (
            <RevealItem key={group.category}>
              <div className="border-border border-t pt-6">
                <div className="mb-3 flex items-center gap-3">
                  <group.icon className="text-muted-foreground/70 h-4 w-4" strokeWidth={1.5} />
                  <h4 className="font-display text-foreground text-base font-medium">
                    {group.category}
                  </h4>
                </div>
                <Text size="sm" className="text-muted-foreground/80 mb-4 italic">
                  {group.why}
                </Text>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-muted-foreground rounded-md border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 text-xs font-medium"
                    >
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
  {
    title: 'Code Reviews',
    icon: Code,
    description:
      'Every pull request reviewed by at least one senior engineer. Architecture decisions documented as ADRs.',
  },
  {
    title: 'Automated Testing',
    icon: TestTube,
    description:
      'Unit, integration, and end-to-end tests run on every commit. Coverage thresholds enforced in CI.',
  },
  {
    title: 'CI/CD Pipelines',
    icon: Rocket,
    description:
      'Automated build, test, lint, and deploy. Zero manual steps from merge to production.',
  },
  {
    title: 'Performance Budgets',
    icon: Zap,
    description:
      'Lighthouse scores, bundle sizes, and response times measured and enforced automatically.',
  },
  {
    title: 'Accessibility Audits',
    icon: Accessibility,
    description:
      'WCAG 2.1 AA compliance verified with automated tools and manual screen reader testing.',
  },
  {
    title: 'Observability',
    icon: Activity,
    description:
      'Structured logging, distributed tracing, and custom metrics from day one — not added after incidents.',
  },
  {
    title: 'Documentation',
    icon: FileText,
    description:
      'API docs, architecture diagrams, runbooks, and onboarding guides maintained as living documents.',
  },
  {
    title: 'Security Reviews',
    icon: Shield,
    description:
      'Dependency scanning, secret detection, SAST/DAST, and quarterly penetration testing.',
  },
];

function QualityStandards() {
  return (
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="lg" intensity={0.02} />
      <Container className="relative z-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Quality Standards
            </span>
            <Heading level={2}>Engineering Practices We Never Skip</Heading>
            <Text size="lg">
              These practices are not optional. They run on every project, every sprint, regardless
              of timeline pressure. They are what make software maintainable five years from now.
            </Text>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.07}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {QUALITY_PRACTICES.map((practice) => (
            <RevealItem key={practice.title}>
              <GlassPanel
                variant="dark"
                className="group h-full p-5 text-center transition-all duration-500 hover:border-white/15"
              >
                <div className="bg-accent border-border mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-500 group-hover:border-white/20">
                  <practice.icon
                    className="text-muted-foreground/70 group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-display text-foreground mb-2 text-sm font-medium">
                  {practice.title}
                </h4>
                <Text
                  size="sm"
                  className="text-muted-foreground/80 group-hover:text-muted-foreground text-xs leading-relaxed transition-colors"
                >
                  {practice.description}
                </Text>
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
  {
    title: 'Discovery Workshop',
    icon: Search,
    description: 'Deep-dive into your business, constraints, and goals before any code is written.',
  },
  {
    title: 'Weekly Updates',
    icon: RefreshCw,
    description:
      'Every week: what was done, what is planned, what is blocked. No information gaps.',
  },
  {
    title: 'Transparent Communication',
    icon: MessageSquare,
    description: 'Honest timelines, early risk escalation, and clear trade-off recommendations.',
  },
  {
    title: 'Agile Delivery',
    icon: Rocket,
    description: 'Working software delivered every two weeks. Demo, feedback, adjust, repeat.',
  },
  {
    title: 'Knowledge Transfer',
    icon: BookOpen,
    description: 'Your team is trained on the system. Documentation ensures independence.',
  },
  {
    title: 'Post-Launch Support',
    icon: Headphones,
    description:
      'We do not disappear after launch. Monitoring, bug fixes, and optimization continue.',
  },
];

function WorkingWithUs() {
  return (
    <section className="relative overflow-hidden py-32">
      <NoiseTexture opacity={0.012} />
      <Container className="relative z-10">
        <div className="mb-16 max-w-3xl">
          <Reveal variant="fadeUp">
            <span className="text-muted-foreground/60 mb-4 block font-mono text-[10px] tracking-widest uppercase">
              Collaboration
            </span>
            <Heading level={2}>What Working With Us Feels Like</Heading>
            <Text size="lg">
              No black boxes. No quarterly check-ins with slide decks. We operate as an extension of
              your engineering team — with the same urgency, the same standards, and the same
              accountability.
            </Text>
          </Reveal>
        </div>

        <RevealStagger
          stagger={0.08}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {COLLABORATION.map((item) => (
            <RevealItem key={item.title}>
              <div className="bg-accent hover:border-border group flex items-start gap-4 rounded-xl border border-white/[0.05] p-5 transition-colors">
                <div className="bg-accent border-border flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors group-hover:border-white/20">
                  <item.icon
                    className="text-muted-foreground group-hover:text-foreground h-4 w-4 transition-colors"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h4 className="font-display text-foreground mb-1 text-sm font-medium">
                    {item.title}
                  </h4>
                  <Text
                    size="sm"
                    className="text-muted-foreground group-hover:text-muted-foreground text-xs transition-colors"
                  >
                    {item.description}
                  </Text>
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
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="md" intensity={0.015} />
      <Container size="sm" className="relative z-10">
        <Reveal variant="scaleUp">
          <GlassPanel variant="default" gradient className="p-10 text-center md:p-14">
            <Heart className="text-muted-foreground/60 mx-auto mb-6 h-6 w-6" strokeWidth={1.5} />
            <Heading level={3} className="mb-4">
              We are Always Looking for Great Engineers
            </Heading>
            <Text size="sm" className="text-muted-foreground mx-auto mb-8 max-w-lg">
              We do not have a careers page with generic job descriptions. If you are an engineer
              who cares deeply about code quality, system design, and building AI that actually
              works in production — we want to hear from you.
            </Text>
            <a
              href="mailto:careers@coherentailabs.com"
              className="text-foreground hover:text-foreground/80 text-sm font-medium underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white/60"
            >
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
    <section className="relative overflow-hidden py-32">
      <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={7} />
      <Container size="md" className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal variant="perspective">
            <Heading level={2} className="mb-8 md:text-5xl">
              Let&apos;s Talk About Your Engineering Challenge.
            </Heading>
            <Text size="lg" className="mx-auto mb-10 max-w-2xl">
              No sales pitch. No pressure. Just a conversation between engineers about what you are
              building and whether we can help.
            </Text>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <MagneticButton
                  strength={25}
                  className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[0_0_20px_rgba(255,255,255,0.06)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_30px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </a>
              <a href="mailto:contact@coherentailabs.com">
                <MagneticButton
                  strength={18}
                  className="focus-visible:ring-ring text-foreground border-border flex w-full items-center justify-center gap-3 rounded-xl border bg-white/5 px-8 py-4 text-lg font-medium transition-all duration-300 outline-none hover:border-white/20 hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                >
                  <Mail className="text-muted-foreground h-5 w-5" />
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
