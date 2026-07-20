import React from 'react';
import { BentoLayout } from '../../layouts/BentoLayout';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { IconWrapper } from '../../ui/IconWrapper';
import { SectionReveal } from '../../animations/SectionReveal';
import { HeartPulse, Building2, ShoppingCart, Factory, Truck, HardHat, ArrowRight } from 'lucide-react';

export function SolutionsGrid() {
  const solutions = [
    {
      title: "Healthcare",
      icon: HeartPulse,
      desc: "HIPAA-compliant patient data pipelines and autonomous diagnostic assistance workflows.",
      colSpan: "md:col-span-3",
      rowSpan: "md:row-span-2"
    },
    {
      title: "Financial Services",
      icon: Building2,
      desc: "Algorithmic execution, fraud detection, and zero-retention compliance engines.",
      colSpan: "md:col-span-3",
      rowSpan: "md:row-span-2"
    },
    {
      title: "Retail & Commerce",
      icon: ShoppingCart,
      desc: "Predictive inventory management and hyper-personalized customer recommendation agents.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    },
    {
      title: "Manufacturing",
      icon: Factory,
      desc: "IoT sensor analysis and predictive maintenance orchestration.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    },
    {
      title: "Logistics",
      icon: Truck,
      desc: "Dynamic routing and supply chain optimization using real-time LLM reasoning.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-1"
    }
  ];

  return (
    <SectionReveal delay={0.2}>
      <BentoLayout>
        {solutions.map((solution, idx) => {
          const Icon = solution.icon;
          return (
            <GlassPanel 
              key={idx} 
              className={`${solution.colSpan} ${solution.rowSpan} p-8 flex flex-col group cursor-pointer hover:bg-white/[0.04] transition-colors`}
            >
              <div className="flex justify-between items-start mb-6">
                <IconWrapper variant="active">
                  <Icon className="w-6 h-6" />
                </IconWrapper>
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
              <Heading level={3} className="mb-4">{solution.title}</Heading>
              <Paragraph className="text-[#888]">{solution.desc}</Paragraph>
            </GlassPanel>
          );
        })}
      </BentoLayout>
    </SectionReveal>
  );
}
