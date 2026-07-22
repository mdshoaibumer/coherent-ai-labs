'use client';
import { useState } from 'react';
import { m } from 'motion/react';
import { SearchIcon as Search } from '../illustrations/Icons';
import { MessageCircleQuestion } from 'lucide-react';

import { FAQS } from '../../constants/faq';
import { SectionWrapper } from '../ui/SectionWrapper';
import { useSearch } from '../../hooks/useSearch';
import { FAQAccordion } from './faq/FAQAccordion';
import { EASE_OUT_EXPO } from '../../lib/motion';

export function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));
  const {
    searchQuery,
    setSearchQuery,
    filteredData: filteredFaqs,
  } = useSearch(
    FAQS,
    (faq, query) => faq.q.toLowerCase().includes(query) || faq.a.toLowerCase().includes(query),
  );

  const toggleQuestion = (index: number) => {
    setOpenIndexes((prev) => {
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
        <div className="pointer-events-none absolute top-0 left-0 h-[500px] w-full bg-[radial-gradient(ellipse_at_top,rgba(var(--foreground),0.02)_0%,rgba(0,0,0,0)_70%)]" />
      }
      containerClassName="max-w-4xl"
    >
      <div className="mb-16 text-center">
        <m.div
          initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE_OUT_EXPO }}
        >
          <div className="bg-foreground/5 border-foreground/10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border">
            <MessageCircleQuestion className="text-muted-foreground h-6 w-6" strokeWidth={1.5} />
          </div>
          <h2 className="font-display text-foreground mb-6 text-4xl font-medium tracking-tight md:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            Everything you need to know before starting your AI transformation journey with Coherent
            AI Labs.
          </p>
        </m.div>
      </div>

      {/* Search Box */}
      <m.div
        initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT_EXPO }}
        className="relative mb-12"
      >
        <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center">
          <Search className="text-muted-foreground h-5 w-5" size={20} />
        </div>
        <input
          type="text"
          placeholder="Search questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-card border-foreground/10 text-foreground placeholder:text-muted-foreground focus:ring-foreground/20 focus:border-foreground/20 w-full rounded-xl border py-4 pr-4 pl-12 shadow-[0_0_20px_rgba(var(--foreground),0.02)] transition-all focus:ring-2 focus:outline-none"
        />
      </m.div>

      <FAQAccordion
        filteredFaqs={filteredFaqs}
        allFaqs={FAQS}
        searchQuery={searchQuery}
        onClearSearch={() => setSearchQuery('')}
        openIndexes={openIndexes}
        onToggleQuestion={toggleQuestion}
      />
    </SectionWrapper>
  );
}
