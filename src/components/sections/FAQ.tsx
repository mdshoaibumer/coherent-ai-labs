"use client";
import { useState } from "react";
import {m } from "motion/react";
import { Search, MessageCircleQuestion } from "lucide-react";

import { FAQS } from "../../constants/faq";
import { SectionWrapper } from "../ui/SectionWrapper";
import { useSearch } from "../../hooks/useSearch";
import { FAQAccordion } from "./faq/FAQAccordion";

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));
  const { searchQuery, setSearchQuery, filteredData: filteredFaqs } = useSearch(FAQS, (faq, query) => 
    faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query)
  );

  const toggleQuestion = (index: number) => {
    setOpenIndexes(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <SectionWrapper 
      id="faq" 
      background={
        <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      }
      containerClassName="max-w-4xl"
    >
        <div className="text-center mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircleQuestion className="w-6 h-6 text-[#aaa]" strokeWidth={1.5} />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-[#888] text-lg leading-relaxed max-w-2xl mx-auto">
              Everything you need to know before starting your AI transformation journey with Coherent AI Labs.
            </p>
          </m.div>
        </div>

        {/* Search Box */}
        <m.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative mb-12"
        >
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-[#555]" />
          </div>
          <input
            type="text"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#080808] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-[#555] focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          />
        </m.div>

        <FAQAccordion 
          filteredFaqs={filteredFaqs}
          allFaqs={FAQS}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery("")}
          openIndexes={openIndexes}
          onToggleQuestion={toggleQuestion}
        />
    </SectionWrapper>
  );
}

