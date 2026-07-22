'use client';
import { useState } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from '../../lib/motion';
import {
  HeartPulse,
  Building2,
  ShoppingCart,
  Factory,
  Truck,
  HardHat,
  GraduationCap,
  Briefcase,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  LineChart,
  LucideIcon,
} from 'lucide-react';

type IndustryData = {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  useCases: string[];
};

const INDUSTRIES: IndustryData[] = [
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    description:
      'Transforming patient care and administrative efficiency with secure, HIPAA-compliant AI.',
    challenges: [
      'Administrative overload',
      'Fragmented patient data',
      'Complex compliance requirements',
    ],
    solutions: [
      'Intelligent document processing',
      'AI-assisted diagnostics routing',
      'Secure knowledge retrieval',
    ],
    outcomes: [
      'Reduced administrative burden',
      'Faster patient response times',
      'Improved compliance accuracy',
    ],
    useCases: [
      'Clinical workflow automation',
      'Medical document intelligence',
      'Patient communication assistants',
    ],
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    icon: Building2,
    description:
      'Engineering secure, high-performance intelligent systems for modern financial institutions.',
    challenges: [
      'Fraud detection latency',
      'Regulatory compliance scaling',
      'Legacy system integration',
    ],
    solutions: [
      'Algorithmic anomaly detection',
      'Automated compliance monitoring',
      'Real-time data synchronization',
    ],
    outcomes: [
      'Mitigated financial risk',
      'Reduced operational costs',
      'Accelerated processing speeds',
    ],
    useCases: [
      'AI-powered document processing',
      'Fraud detection support',
      'Internal knowledge assistants',
    ],
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    icon: ShoppingCart,
    description:
      'Delivering hyper-personalized experiences and optimized inventory management at scale.',
    challenges: [
      'Inventory forecasting errors',
      'Generic customer experiences',
      'Support ticket volume',
    ],
    solutions: [
      'Predictive demand modeling',
      'Autonomous customer support agents',
      'Recommendation engines',
    ],
    outcomes: [
      'Increased conversion rates',
      'Optimized supply chain efficiency',
      'Higher customer satisfaction',
    ],
    useCases: [
      'Customer support agents',
      'Inventory intelligence',
      'Personalized shopping experiences',
    ],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    description:
      'Driving operational excellence through predictive intelligence and automated quality control.',
    challenges: [
      'Unplanned equipment downtime',
      'Quality control inconsistencies',
      'Supply chain disruptions',
    ],
    solutions: [
      'Predictive maintenance systems',
      'Computer vision quality checks',
      'Dynamic production scheduling',
    ],
    outcomes: ['Minimized machine downtime', 'Higher product yield', 'Reduced maintenance costs'],
    useCases: ['Predictive maintenance insights', 'Quality monitoring', 'Operations automation'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Supply Chain',
    icon: Truck,
    description:
      'Orchestrating complex global supply chains with dynamic, AI-powered routing and tracking.',
    challenges: [
      'Inefficient routing',
      'Lack of real-time visibility',
      'Manual document processing',
    ],
    solutions: [
      'Algorithmic route optimization',
      'Predictive delay forecasting',
      'Automated customs processing',
    ],
    outcomes: [
      'Lower transportation costs',
      'Improved delivery predictability',
      'Streamlined cross-border operations',
    ],
    useCases: ['Route optimization support', 'Shipment tracking', 'AI operations assistants'],
  },
  {
    id: 'construction',
    name: 'Construction & Real Estate',
    icon: HardHat,
    description: 'Automating project management and document analysis for the built environment.',
    challenges: [
      'Project delays and cost overruns',
      'Complex blueprint analysis',
      'Manual progress tracking',
    ],
    solutions: [
      'Automated schedule optimization',
      'AI-assisted document parsing',
      'Computer vision progress monitoring',
    ],
    outcomes: ['Improved project margins', 'Faster document turnaround', 'Enhanced site safety'],
    useCases: [
      'Project management automation',
      'Document processing',
      'Progress tracking dashboards',
    ],
  },
  {
    id: 'education',
    name: 'Education',
    icon: GraduationCap,
    description:
      'Enhancing learning outcomes and administrative efficiency with intelligent platforms.',
    challenges: [
      'Personalized learning scaling',
      'Administrative bottlenecks',
      'Student engagement tracking',
    ],
    solutions: [
      'Adaptive learning pathways',
      'Automated grading assistants',
      'Intelligent campus knowledge bases',
    ],
    outcomes: [
      'Improved student outcomes',
      'Reduced educator burnout',
      'Streamlined campus operations',
    ],
    useCases: ['Learning assistants', 'Knowledge management', 'Administrative automation'],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    icon: Briefcase,
    description:
      'Accelerating knowledge work and proposal generation for consultancies and agencies.',
    challenges: [
      'Time-consuming proposal creation',
      'Knowledge silo fragmentation',
      'Manual data entry',
    ],
    solutions: [
      'Generative proposal engines',
      'Enterprise semantic search',
      'Automated data extraction workflows',
    ],
    outcomes: ['Higher win rates', 'Faster time-to-value', 'Maximized billable hours'],
    useCases: ['Proposal generation', 'Document automation', 'Knowledge assistants'],
  },
];

function IndustryDetails({ data }: { data: IndustryData }) {
  return (
    <m.div
      className="flex h-full flex-col"
      initial={{ opacity: 0, filter: 'blur(6px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.5, ease: EASE_OUT_CUBIC }}
    >
      <div className="border-foreground/10 mb-8 border-b pb-8">
        <div className="mb-4 flex items-center gap-4">
          <m.div
            className="bg-foreground/[0.08] border-foreground/15 rounded-xl border p-3 shadow-[0_0_16px_rgba(var(--foreground),0.1)]"
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px rgba(var(--foreground),0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <data.icon className="text-foreground h-6 w-6" />
          </m.div>
          <h3 className="font-display text-foreground text-3xl font-medium tracking-tight">
            {data.name}
          </h3>
        </div>
        <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
          {data.description}
        </p>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-muted-foreground mb-4 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <AlertCircle className="h-4 w-4" /> Challenges
            </h4>
            <ul className="space-y-3">
              {data.challenges.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-3 text-sm">
                  <div className="bg-foreground/10 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-muted-foreground mb-4 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <Zap className="h-4 w-4" /> Solutions
            </h4>
            <ul className="space-y-3">
              {data.solutions.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-3 text-sm">
                  <div className="bg-foreground/20 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h4 className="font-display text-muted-foreground mb-4 flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
              <LineChart className="h-4 w-4" /> Business Outcomes
            </h4>
            <ul className="space-y-3">
              {data.outcomes.map((item) => (
                <li key={item} className="text-muted-foreground flex items-start gap-3 text-sm">
                  <CheckCircle2 className="text-foreground/40 mt-0.5 h-4 w-4 shrink-0" />
                  <span className="text-foreground/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-foreground/[0.02] border-foreground/5 rounded-xl border p-5">
            <h4 className="font-display text-foreground mb-4 font-mono text-xs tracking-widest uppercase">
              Example Use Cases
            </h4>
            <ul className="space-y-3">
              {data.useCases.map((uc) => (
                <li key={uc} className="text-muted-foreground flex items-center gap-3 text-sm">
                  <ArrowRight className="text-foreground/50 h-3.5 w-3.5" />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </m.div>
  );
}

export function Industries() {
  const [activeTab, setActiveTab] = useState<string>(INDUSTRIES[0].id);
  const activeData = INDUSTRIES.find((i) => i.id === activeTab) || INDUSTRIES[0];

  return (
    <section id="industries" className="bg-background relative overflow-hidden py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_right_center,rgba(var(--foreground),0.02)_0%,rgba(0,0,0,0)_60%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-3xl">
          <m.div
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
              AI Solutions Tailored for Every Industry
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Every industry has unique challenges. We design intelligent software, AI agents, and
              automation platforms that solve real business problems and deliver measurable
              outcomes.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Tabs Sidebar (Desktop) */}
          <div className="hidden flex-col gap-2 lg:col-span-4 lg:flex">
            {INDUSTRIES.map((industry) => {
              const isActive = activeTab === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={cn(
                    'focus-visible:ring-foreground flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-300 outline-none focus-visible:ring-2',
                    isActive
                      ? 'bg-foreground/10 border-foreground/10 shadow-[0_0_20px_rgba(var(--foreground),0.02)]'
                      : 'hover:bg-foreground/5 border-transparent bg-transparent',
                  )}
                >
                  <industry.icon
                    className={cn(
                      'h-5 w-5 transition-colors duration-300',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                    )}
                    strokeWidth={1.5}
                  />
                  <span
                    className={cn(
                      'font-medium transition-colors duration-300',
                      isActive ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {industry.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Select / Accordion */}
          <div className="custom-scrollbar mb-4 flex snap-x gap-3 overflow-x-auto pb-4 lg:hidden">
            {INDUSTRIES.map((industry) => {
              const isActive = activeTab === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={cn(
                    'flex snap-start items-center gap-2 rounded-lg border px-4 py-3 text-sm whitespace-nowrap transition-all outline-none',
                    isActive
                      ? 'bg-foreground text-background border-foreground'
                      : 'bg-card text-muted-foreground border-foreground/10 hover:border-foreground/20',
                  )}
                >
                  <industry.icon className="h-4 w-4" strokeWidth={1.5} />
                  {industry.name}
                </button>
              );
            })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            <div className="bg-card border-foreground/5 relative min-h-[500px] rounded-2xl border p-6 shadow-2xl sm:p-10">
              <div className="via-foreground/10 absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-transparent to-transparent opacity-50" />

              <AnimatePresence mode="wait">
                <m.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <IndustryDetails data={activeData} />
                </m.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
