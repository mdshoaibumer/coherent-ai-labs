"use client";
import { useState } from "react";
import {m, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { EASE_OUT_EXPO, EASE_OUT_CUBIC } from "../../lib/motion";
import { 
  HeartPulse, Building2, ShoppingCart, 
  Factory, Truck, HardHat, GraduationCap, 
  Briefcase, ArrowRight, CheckCircle2, 
  AlertCircle, Zap, LineChart, LucideIcon
} from "lucide-react";

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
    id: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    description: "Transforming patient care and administrative efficiency with secure, HIPAA-compliant AI.",
    challenges: ["Administrative overload", "Fragmented patient data", "Complex compliance requirements"],
    solutions: ["Intelligent document processing", "AI-assisted diagnostics routing", "Secure knowledge retrieval"],
    outcomes: ["Reduced administrative burden", "Faster patient response times", "Improved compliance accuracy"],
    useCases: [
      "Clinical workflow automation",
      "Medical document intelligence",
      "Patient communication assistants"
    ]
  },
  {
    id: "finance",
    name: "Finance & Banking",
    icon: Building2,
    description: "Engineering secure, high-performance intelligent systems for modern financial institutions.",
    challenges: ["Fraud detection latency", "Regulatory compliance scaling", "Legacy system integration"],
    solutions: ["Algorithmic anomaly detection", "Automated compliance monitoring", "Real-time data synchronization"],
    outcomes: ["Mitigated financial risk", "Reduced operational costs", "Accelerated processing speeds"],
    useCases: [
      "AI-powered document processing",
      "Fraud detection support",
      "Internal knowledge assistants"
    ]
  },
  {
    id: "retail",
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    description: "Delivering hyper-personalized experiences and optimized inventory management at scale.",
    challenges: ["Inventory forecasting errors", "Generic customer experiences", "Support ticket volume"],
    solutions: ["Predictive demand modeling", "Autonomous customer support agents", "Recommendation engines"],
    outcomes: ["Increased conversion rates", "Optimized supply chain efficiency", "Higher customer satisfaction"],
    useCases: [
      "Customer support agents",
      "Inventory intelligence",
      "Personalized shopping experiences"
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    description: "Driving operational excellence through predictive intelligence and automated quality control.",
    challenges: ["Unplanned equipment downtime", "Quality control inconsistencies", "Supply chain disruptions"],
    solutions: ["Predictive maintenance systems", "Computer vision quality checks", "Dynamic production scheduling"],
    outcomes: ["Minimized machine downtime", "Higher product yield", "Reduced maintenance costs"],
    useCases: [
      "Predictive maintenance insights",
      "Quality monitoring",
      "Operations automation"
    ]
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    icon: Truck,
    description: "Orchestrating complex global supply chains with dynamic, AI-powered routing and tracking.",
    challenges: ["Inefficient routing", "Lack of real-time visibility", "Manual document processing"],
    solutions: ["Algorithmic route optimization", "Predictive delay forecasting", "Automated customs processing"],
    outcomes: ["Lower transportation costs", "Improved delivery predictability", "Streamlined cross-border operations"],
    useCases: [
      "Route optimization support",
      "Shipment tracking",
      "AI operations assistants"
    ]
  },
  {
    id: "construction",
    name: "Construction & Real Estate",
    icon: HardHat,
    description: "Automating project management and document analysis for the built environment.",
    challenges: ["Project delays and cost overruns", "Complex blueprint analysis", "Manual progress tracking"],
    solutions: ["Automated schedule optimization", "AI-assisted document parsing", "Computer vision progress monitoring"],
    outcomes: ["Improved project margins", "Faster document turnaround", "Enhanced site safety"],
    useCases: [
      "Project management automation",
      "Document processing",
      "Progress tracking dashboards"
    ]
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    description: "Enhancing learning outcomes and administrative efficiency with intelligent platforms.",
    challenges: ["Personalized learning scaling", "Administrative bottlenecks", "Student engagement tracking"],
    solutions: ["Adaptive learning pathways", "Automated grading assistants", "Intelligent campus knowledge bases"],
    outcomes: ["Improved student outcomes", "Reduced educator burnout", "Streamlined campus operations"],
    useCases: [
      "Learning assistants",
      "Knowledge management",
      "Administrative automation"
    ]
  },
  {
    id: "professional",
    name: "Professional Services",
    icon: Briefcase,
    description: "Accelerating knowledge work and proposal generation for consultancies and agencies.",
    challenges: ["Time-consuming proposal creation", "Knowledge silo fragmentation", "Manual data entry"],
    solutions: ["Generative proposal engines", "Enterprise semantic search", "Automated data extraction workflows"],
    outcomes: ["Higher win rates", "Faster time-to-value", "Maximized billable hours"],
    useCases: [
      "Proposal generation",
      "Document automation",
      "Knowledge assistants"
    ]
  }
];

function IndustryDetails({ data }: { data: IndustryData }) {
  return (
    <m.div 
      className="flex flex-col h-full"
      initial={{ opacity: 0, filter: "blur(6px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: EASE_OUT_CUBIC }}
    >
      <div className="mb-8 border-b border-white/10 pb-8">
        <div className="flex items-center gap-4 mb-4">
          <m.div 
            className="p-3 rounded-xl bg-white/8 border border-white/15 shadow-[0_0_16px_rgba(0,200,255,0.1)]"
            whileHover={{ scale: 1.08, boxShadow: "0 0 24px rgba(0,200,255,0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <data.icon className="w-6 h-6 text-white" />
          </m.div>
          <h3 className="font-display text-3xl font-medium text-white tracking-tight">{data.name}</h3>
        </div>
        <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">{data.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-4 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Challenges
            </h4>
            <ul className="space-y-3">
              {data.challenges.map(item => (
                <li key={item} className="text-[#888] text-sm flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/10 mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Solutions
            </h4>
            <ul className="space-y-3">
              {data.solutions.map(item => (
                <li key={item} className="text-[#888] text-sm flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00]/20 mt-1.5 shrink-0" />
                  <span className="text-[#ccc]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-display text-xs font-mono tracking-widest text-[#555] uppercase mb-4 flex items-center gap-2">
              <LineChart className="w-4 h-4" /> Business Outcomes
            </h4>
            <ul className="space-y-3">
              {data.outcomes.map(item => (
                <li key={item} className="text-[#888] text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
             <h4 className="font-display text-xs font-mono tracking-widest text-white uppercase mb-4">Example Use Cases</h4>
             <ul className="space-y-3">
               {data.useCases.map(uc => (
                 <li key={uc} className="text-sm text-[#aaa] flex items-center gap-3">
                    <ArrowRight className="w-3.5 h-3.5 text-[#555]" />
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
  const activeData = INDUSTRIES.find(i => i.id === activeTab) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-32 bg-[#020202] relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_right_center,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <m.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              AI Solutions Tailored for Every Industry
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              Every industry has unique challenges. We design intelligent software, AI agents, and automation platforms that solve real business problems and deliver measurable outcomes.
            </p>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Tabs Sidebar (Desktop) */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-2">
            {INDUSTRIES.map((industry) => {
              const isActive = activeTab === industry.id;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveTab(industry.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 text-left rounded-xl transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-white border",
                    isActive 
                      ? "bg-white/10 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.02)]" 
                      : "bg-transparent border-transparent hover:bg-white/5"
                  )}
                >
                  <industry.icon className={cn("w-5 h-5 transition-colors duration-300", isActive ? "text-white" : "text-[#666]")} strokeWidth={1.5} />
                  <span className={cn("font-medium transition-colors duration-300", isActive ? "text-white" : "text-[#888]")}>
                    {industry.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Select / Accordion */}
          <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 mb-4 custom-scrollbar snap-x">
             {INDUSTRIES.map(industry => {
               const isActive = activeTab === industry.id;
               return (
                 <button
                    key={industry.id}
                    onClick={() => setActiveTab(industry.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap rounded-lg border transition-all snap-start outline-none",
                      isActive 
                        ? "bg-white text-black border-white" 
                        : "bg-[#0a0a0a] text-[#888] border-white/10 hover:border-white/20"
                    )}
                 >
                    <industry.icon className="w-4 h-4" strokeWidth={1.5} />
                    {industry.name}
                 </button>
               )
             })}
          </div>

          {/* Details Panel */}
          <div className="lg:col-span-8">
            <div className="bg-[#080808] border border-white/5 p-6 sm:p-10 rounded-2xl relative shadow-2xl min-h-[500px]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
              
              <AnimatePresence mode="wait">
                <m.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
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
