"use client";
import React from "react";
import {m } from "motion/react";
import { 
  Bot, Workflow, Layers, AppWindow, Smartphone, 
  Laptop, Cloud, Brain, Database, MessageSquare, 
  Settings, Network, LineChart, FileText, ArrowRight 
} from "lucide-react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { SectionWrapper } from "../ui/SectionWrapper";

const SERVICES = [
  {
    title: "AI Agents",
    desc: "Autonomous entities that perceive context, reason through problems, and act on your behalf.",
    value: "Replaces manual cognitive load with scalable intelligence.",
    icon: Bot,
    size: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-2",
    highlight: "24/7 Autonomous Execution"
  },
  {
    title: "AI Workflow Automation",
    desc: "End-to-end intelligent pipelines that replace legacy manual processes.",
    value: "Exponential ROI and zero-error processing.",
    icon: Workflow,
    size: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Enterprise Software",
    desc: "Bespoke full-stack applications purpose-built for the AI era.",
    value: "Modernizes legacy architecture securely.",
    icon: Layers,
    size: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Custom Web Applications",
    desc: "High-performance, accessible, and scalable web experiences.",
    value: "Global reach with native-like performance.",
    icon: AppWindow,
    size: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "iOS Applications",
    desc: "Premium native experiences for the Apple ecosystem.",
    value: "Deep platform integration.",
    icon: Smartphone,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Android Applications",
    desc: "Scalable native apps for billions of devices worldwide.",
    value: "Maximum market penetration.",
    icon: Smartphone,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "LLM Integration",
    desc: "Custom tuning and deployment of foundational language models.",
    value: "Domain-specific intelligence.",
    icon: Brain,
    size: "col-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
    highlight: "Custom Fine-Tuning"
  },
  {
    title: "RAG Systems",
    desc: "High-density vector search grounding AI in proprietary data.",
    value: "Eliminates hallucinations.",
    icon: Database,
    size: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Internal AI Assistants",
    desc: "Secure, enterprise-ready copilots for your workforce.",
    value: "10x employee productivity.",
    icon: MessageSquare,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Business Process Automation",
    desc: "Replacing repetitive tasks with deterministic rule engines.",
    value: "Unbounded scalability.",
    icon: Settings,
    size: "col-span-1 md:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "Cloud Engineering",
    desc: "Scalable, secure, and resilient infrastructure design.",
    value: "99.99% SLA availability.",
    icon: Cloud,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Desktop Applications",
    desc: "High-performance native apps for macOS and Windows.",
    value: "Maximum computational power.",
    icon: Laptop,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "API Integrations",
    desc: "Connecting disparate systems into unified architectures.",
    value: "Real-time data synchronization.",
    icon: Network,
    size: "col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    title: "Analytics Dashboards",
    desc: "Real-time business intelligence and data visualization.",
    value: "Data-driven decision making.",
    icon: LineChart,
    size: "col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "AI Document Processing",
    desc: "Automated extraction and understanding of unstructured documents, contracts, and invoices.",
    value: "Turns static PDFs into structured, queryable data instantly.",
    icon: FileText,
    size: "col-span-1 md:col-span-2 lg:col-span-4 lg:row-span-1",
    highlight: "Unstructured Data Mining"
  }
];

const BentoCard: React.FC<{ service: typeof SERVICES[0]; index: number }> = ({ service, index }) => {
  const isLarge = service.size.includes('lg:row-span-2') || service.size.includes('lg:col-span-4');
  
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={service.size}
      tabIndex={0}
      role="button"
    >
        <div className="flex items-start justify-between mb-8">
          <div className="w-12 h-12 rounded-xl bg-[#111] border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
            <service.icon className="w-6 h-6 text-[#888] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
          </div>
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 border border-white/10">
             <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="mt-auto">
          {service.highlight && (
            <Badge variant="glow" className="mb-4" ping>
              {service.highlight}
            </Badge>
          )}
          <h3 className={cn("font-display font-medium text-white mb-2 tracking-tight transition-colors group-hover:text-white", isLarge ? "text-2xl lg:text-3xl" : "text-xl")}>
            {service.title}
          </h3>
          <p className="text-[#888] text-sm leading-relaxed mb-6 max-w-sm group-hover:text-[#aaa] transition-colors">
            {service.desc}
          </p>
          
          <div className="pt-4 border-t border-white/5 group-hover:border-white/10 transition-colors">
            <p className="text-xs font-mono text-[#666] group-hover:text-[#aaa] transition-colors flex items-center gap-2">
              <span className="text-white/20">↳</span>
              {service.value}
            </p>
          </div>
        </div>
      </Card>
  );
}

export function CoreServices() {
  return (
    <SectionWrapper 
      id="capabilities" 
      background={
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
      }
    >
        <div className="max-w-3xl mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Everything You Need to Build an Intelligent Business
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              From AI Agents to enterprise software, we engineer complete intelligent systems that automate, integrate, and scale your business.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(280px,auto)]">
          {SERVICES.map((service, index) => (
            <BentoCard key={index} service={service} index={index} />
          ))}
        </div>
    </SectionWrapper>
  );
}

