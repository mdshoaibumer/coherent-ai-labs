'use client';
import React, { useState, useCallback } from 'react';
import { m, AnimatePresence } from 'motion/react';
import {
  Bot,
  Workflow,
  Layers,
  AppWindow,
  Smartphone,
  Laptop,
  Cloud,
  Brain,
  Database,
  MessageSquare,
  Settings,
  Network,
  LineChart,
  FileText,
  ArrowRight,
  LucideIcon,
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionWrapper } from '../ui/SectionWrapper';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/* ═══════════════════════════════════════════════════════════
   DATA — services with category grouping for relationships
═══════════════════════════════════════════════════════════ */

type ServiceCategory =
  | 'ai-engineering'
  | 'enterprise-software'
  | 'applications'
  | 'cloud-automation'
  | 'data-intelligence';

interface ServiceItem {
  title: string;
  desc: string;
  value: string;
  icon: LucideIcon;
  size: string;
  highlight?: string;
  category: ServiceCategory;
  related: ServiceCategory[];
}

const CATEGORIES: { id: ServiceCategory; label: string }[] = [
  { id: 'ai-engineering', label: 'AI Engineering' },
  { id: 'data-intelligence', label: 'Data & Intelligence' },
  { id: 'enterprise-software', label: 'Enterprise Software' },
  { id: 'applications', label: 'Applications' },
  { id: 'cloud-automation', label: 'Cloud & Automation' },
];

const SERVICES: ServiceItem[] = [
  {
    title: 'AI Agents',
    desc: 'Autonomous entities that perceive context, reason through problems, and act on your behalf.',
    value: 'Replaces manual cognitive load with scalable intelligence.',
    icon: Bot,
    size: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2',
    highlight: '24/7 Autonomous Execution',
    category: 'ai-engineering',
    related: ['data-intelligence', 'cloud-automation'],
  },
  {
    title: 'AI Workflow Automation',
    desc: 'End-to-end intelligent pipelines that replace legacy manual processes.',
    value: 'Exponential ROI and zero-error processing.',
    icon: Workflow,
    size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    category: 'ai-engineering',
    related: ['cloud-automation', 'enterprise-software'],
  },
  {
    title: 'Enterprise Software',
    desc: 'Bespoke full-stack applications purpose-built for the AI era.',
    value: 'Modernizes legacy architecture securely.',
    icon: Layers,
    size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    category: 'enterprise-software',
    related: ['ai-engineering', 'cloud-automation'],
  },
  {
    title: 'Custom Web Applications',
    desc: 'High-performance, accessible, and scalable web experiences.',
    value: 'Global reach with native-like performance.',
    icon: AppWindow,
    size: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1',
    category: 'applications',
    related: ['enterprise-software', 'cloud-automation'],
  },
  {
    title: 'iOS Applications',
    desc: 'Premium native experiences for the Apple ecosystem.',
    value: 'Deep platform integration.',
    icon: Smartphone,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'applications',
    related: ['enterprise-software'],
  },
  {
    title: 'Android Applications',
    desc: 'Scalable native apps for billions of devices worldwide.',
    value: 'Maximum market penetration.',
    icon: Smartphone,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'applications',
    related: ['enterprise-software'],
  },
  {
    title: 'LLM Integration',
    desc: 'Custom tuning and deployment of foundational language models.',
    value: 'Domain-specific intelligence.',
    icon: Brain,
    size: 'col-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2',
    highlight: 'Custom Fine-Tuning',
    category: 'ai-engineering',
    related: ['data-intelligence'],
  },
  {
    title: 'RAG Systems',
    desc: 'High-density vector search grounding AI in proprietary data.',
    value: 'Eliminates hallucinations.',
    icon: Database,
    size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    category: 'data-intelligence',
    related: ['ai-engineering'],
  },
  {
    title: 'Internal AI Assistants',
    desc: 'Secure, enterprise-ready copilots for your workforce.',
    value: '10x employee productivity.',
    icon: MessageSquare,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'ai-engineering',
    related: ['enterprise-software', 'data-intelligence'],
  },
  {
    title: 'Business Process Automation',
    desc: 'Replacing repetitive tasks with deterministic rule engines.',
    value: 'Unbounded scalability.',
    icon: Settings,
    size: 'col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1',
    category: 'cloud-automation',
    related: ['ai-engineering', 'enterprise-software'],
  },
  {
    title: 'Cloud Engineering',
    desc: 'Scalable, secure, and resilient infrastructure design.',
    value: '99.99% SLA availability.',
    icon: Cloud,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'cloud-automation',
    related: ['enterprise-software', 'applications'],
  },
  {
    title: 'Desktop Applications',
    desc: 'High-performance native apps for macOS and Windows.',
    value: 'Maximum computational power.',
    icon: Laptop,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'applications',
    related: ['enterprise-software'],
  },
  {
    title: 'API Integrations',
    desc: 'Connecting disparate systems into unified architectures.',
    value: 'Real-time data synchronization.',
    icon: Network,
    size: 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1',
    category: 'cloud-automation',
    related: ['enterprise-software', 'data-intelligence'],
  },
  {
    title: 'Analytics Dashboards',
    desc: 'Real-time business intelligence and data visualization.',
    value: 'Data-driven decision making.',
    icon: LineChart,
    size: 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1',
    category: 'data-intelligence',
    related: ['enterprise-software', 'ai-engineering'],
  },
  {
    title: 'AI Document Processing',
    desc: 'Automated extraction and understanding of unstructured documents, contracts, and invoices.',
    value: 'Turns static PDFs into structured, queryable data instantly.',
    icon: FileText,
    size: 'col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1',
    highlight: 'Unstructured Data Mining',
    category: 'data-intelligence',
    related: ['ai-engineering', 'cloud-automation'],
  },
];

/* ═══════════════════════════════════════════════════════════
   BENTO CARD — enhanced with category awareness + premium motion
═══════════════════════════════════════════════════════════ */

interface BentoCardProps {
  service: ServiceItem;
  index: number;
  isHighlighted: boolean;
  isDimmed: boolean;
  onHover: () => void;
  onLeave: () => void;
  prefersReducedMotion: boolean;
}

const BentoCard: React.FC<BentoCardProps> = React.memo(function BentoCard({
  service,
  index,
  isHighlighted,
  isDimmed,
  onHover,
  onLeave,
  prefersReducedMotion,
}) {
  const isLarge = service.size.includes('lg:row-span-2') || service.size.includes('lg:col-span-4');

  return (
    <Card
      initial={{ opacity: 0, y: 32, scale: 0.95, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay: index * 0.05,
        ease: [0.33, 1, 0.68, 1],
      }}
      whileHover={prefersReducedMotion ? {} : { y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
      premium={true}
      className={cn(
        service.size,
        'transition-[opacity,filter] duration-500',
        isDimmed && 'opacity-35 blur-[0.8px]',
        isHighlighted && !isDimmed && 'opacity-100',
      )}
      tabIndex={0}
      role="button"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onFocus={onHover}
      onBlur={onLeave}
    >
      {/* Top edge glow on highlighted */}
      {isHighlighted && !isDimmed && (
        <m.div
          className="pointer-events-none absolute top-0 right-0 left-0 z-20 h-[1px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            background:
              'linear-gradient(to right, transparent, rgba(var(--foreground),0.4), transparent)',
          }}
        />
      )}

      <div className="mb-8 flex items-start justify-between">
        {/* Icon with contextual glow */}
        <m.div
          className={cn(
            'flex h-12 w-12 items-center justify-center rounded-xl border shadow-inner transition-all duration-500',
            isHighlighted && !isDimmed
              ? 'bg-foreground/15 border-foreground/30 shadow-[0_0_24px_rgba(0,200,255,0.2),inset_0_0_12px_rgba(255,255,255,0.08)]'
              : 'bg-background border-foreground/10 group-hover:bg-foreground/5 group-hover:shadow-[0_0_12px_rgba(0,200,255,0.1)]',
          )}
          animate={
            prefersReducedMotion
              ? {}
              : {
                  scale: isHighlighted && !isDimmed ? 1.12 : 1,
                }
          }
          transition={{ duration: 0.45, ease: [0.33, 1, 0.68, 1] }}
        >
          <service.icon
            className={cn(
              'h-6 w-6 transition-colors duration-500',
              isHighlighted && !isDimmed
                ? 'text-foreground'
                : 'text-muted-foreground group-hover:text-foreground',
            )}
            strokeWidth={1.5}
          />
        </m.div>

        {/* Arrow reveal */}
        <div className="bg-foreground/5 border-foreground/10 flex h-8 w-8 -translate-x-2 items-center justify-center rounded-full border opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowRight className="text-foreground h-4 w-4" />
        </div>
      </div>

      <div className="mt-auto">
        {service.highlight && (
          <Badge variant="glow" className="mb-4" ping>
            {service.highlight}
          </Badge>
        )}
        <h3
          className={cn(
            'font-display text-foreground group-hover:text-foreground mb-2 font-medium tracking-tight transition-colors',
            isLarge ? 'text-2xl lg:text-3xl' : 'text-xl',
          )}
        >
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 max-w-sm text-sm leading-relaxed transition-colors">
          {service.desc}
        </p>

        {/* Business value footer */}
        <div className="border-foreground/5 group-hover:border-foreground/10 border-t pt-4 transition-colors">
          <p className="text-muted-foreground flex items-center gap-2 font-mono text-xs transition-colors">
            <span className="text-foreground/20">↳</span>
            {service.value}
          </p>
        </div>
      </div>

      {/* Category indicator dot */}
      <div
        className={cn(
          'absolute right-4 bottom-4 h-2 w-2 rounded-full transition-all duration-500',
          isHighlighted && !isDimmed
            ? 'bg-foreground/50 shadow-[0_0_6px_rgba(var(--foreground),0.3)]'
            : 'bg-foreground/10',
        )}
      />
    </Card>
  );
});

/* ═══════════════════════════════════════════════════════════
   MAIN SECTION COMPONENT
═══════════════════════════════════════════════════════════ */

export function CoreServices() {
  const [activeFilter, setActiveFilter] = useState<ServiceCategory | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion() ?? false;

  // Determine which services are highlighted based on hover relationships
  const getHighlightState = useCallback(
    (service: ServiceItem, idx: number) => {
      // If filtering by category
      if (activeFilter) {
        const matches = service.category === activeFilter || service.related.includes(activeFilter);
        return { isHighlighted: matches, isDimmed: !matches };
      }

      // If hovering a specific card
      if (hoveredService !== null) {
        const hovered = SERVICES[hoveredService];
        const isThis = idx === hoveredService;
        const isRelated =
          service.category === hovered.category ||
          hovered.related.includes(service.category) ||
          service.related.includes(hovered.category);
        return {
          isHighlighted: isThis || isRelated,
          isDimmed: !isThis && !isRelated,
        };
      }

      return { isHighlighted: false, isDimmed: false };
    },
    [activeFilter, hoveredService],
  );

  return (
    <SectionWrapper
      id="capabilities"
      background={
        <>
          {/* Noise texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-screen"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Ambient glow */}
          <div className="pointer-events-none absolute top-[20%] left-1/2 h-[600px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
        </>
      }
    >
      {/* ─── Section Header ─── */}
      <div className="mb-16 max-w-3xl">
        <m.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
            Everything You Need to Build an Intelligent Business
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From AI Agents to enterprise software, we engineer complete intelligent systems that
            automate, integrate, and scale your business.
          </p>
        </m.div>
      </div>

      {/* ─── Category Filter Pills ─── */}
      <m.div
        className="mb-10 flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* All button */}
        <button
          onClick={() => setActiveFilter(null)}
          className={cn(
            'focus-visible:ring-foreground rounded-lg border px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 outline-none focus-visible:ring-2',
            activeFilter === null
              ? 'bg-foreground text-background border-foreground'
              : 'bg-foreground/[0.03] text-muted-foreground border-foreground/[0.08] hover:bg-foreground/[0.06] hover:text-foreground hover:border-foreground/15',
          )}
        >
          All Services
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(activeFilter === cat.id ? null : cat.id)}
            className={cn(
              'focus-visible:ring-foreground rounded-lg border px-4 py-2 text-xs font-medium tracking-wide uppercase transition-all duration-300 outline-none focus-visible:ring-2',
              activeFilter === cat.id
                ? 'bg-foreground text-background border-foreground'
                : 'bg-foreground/[0.03] text-muted-foreground border-foreground/[0.08] hover:bg-foreground/[0.06] hover:text-foreground hover:border-foreground/15',
            )}
          >
            {cat.label}
          </button>
        ))}

        {/* Active filter indicator */}
        <AnimatePresence>
          {activeFilter && (
            <m.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2 px-3 py-2 font-mono text-[10px] tracking-widest text-[#555] uppercase"
            >
              {
                SERVICES.filter(
                  (s) => s.category === activeFilter || s.related.includes(activeFilter),
                ).length
              }{' '}
              related services
            </m.span>
          )}
        </AnimatePresence>
      </m.div>

      {/* ─── Bento Grid ─── */}
      <div className="grid auto-rows-[minmax(280px,auto)] grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => {
          const { isHighlighted, isDimmed } = getHighlightState(service, index);

          return (
            <BentoCard
              key={service.title}
              service={service}
              index={index}
              isHighlighted={isHighlighted}
              isDimmed={isDimmed}
              onHover={() => setHoveredService(index)}
              onLeave={() => setHoveredService(null)}
              prefersReducedMotion={prefersReducedMotion}
            />
          );
        })}
      </div>

      {/* ─── Capability summary (progressive discovery) ─── */}
      <m.div
        className="mt-16 flex flex-wrap justify-center gap-x-6 gap-y-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {['15 Core Capabilities', '5 Domains', 'Full-Stack Delivery', 'Enterprise Scale'].map(
          (stat) => (
            <div
              key={stat}
              className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#555] uppercase"
            >
              <div className="h-1 w-1 rounded-full bg-white/20" />
              {stat}
            </div>
          ),
        )}
      </m.div>
    </SectionWrapper>
  );
}
