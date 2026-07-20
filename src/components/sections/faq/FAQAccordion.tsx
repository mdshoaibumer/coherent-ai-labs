import {m, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { cn } from "../../../lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  filteredFaqs: FAQItem[];
  allFaqs: FAQItem[];
  searchQuery: string;
  onClearSearch: () => void;
  openIndexes: Set<number>;
  onToggleQuestion: (index: number) => void;
}

export function FAQAccordion({
  filteredFaqs,
  allFaqs,
  searchQuery,
  onClearSearch,
  openIndexes,
  onToggleQuestion
}: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {filteredFaqs.length === 0 ? (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="text-center py-12 px-6 bg-[#050505] border border-white/5 rounded-2xl"
          >
            <p className="text-[#888] text-lg">No questions found matching "{searchQuery}".</p>
            <button 
              onClick={onClearSearch}
              className="mt-4 text-sm text-white/60 hover:text-white transition-colors"
            >
              Clear search
            </button>
          </m.div>
        ) : (
          filteredFaqs.map((faq, i) => {
            const originalIndex = allFaqs.indexOf(faq);
            const isOpen = openIndexes.has(originalIndex);
            
            return (
              <m.div
                key={faq.q}
                layout
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className={cn(
                  "bg-[#050505] border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.03)]" : "border-white/5 hover:border-white/10"
                )}
              >
                <button
                  id={`faq-button-${originalIndex}`}
                  aria-controls={`faq-panel-${originalIndex}`}
                  className="w-full px-6 py-6 flex items-start justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
                  onClick={() => onToggleQuestion(originalIndex)}
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-lg font-medium pr-8 transition-colors duration-300",
                    isOpen ? "text-white" : "text-[#aaa] hover:text-[#ccc]"
                  )}>
                    {faq.q}
                  </span>
                  <div className={cn(
                    "p-1 rounded-full border shrink-0 transition-colors duration-300 mt-0.5",
                    isOpen ? "bg-white/10 border-white/20 text-white" : "bg-white/5 border-white/5 text-[#666]"
                  )}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div id={`faq-panel-${originalIndex}`} aria-labelledby={`faq-button-${originalIndex}`} role="region" className="px-6 pb-6 pt-2">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                        <p className="text-[#888] leading-relaxed text-base">
                          {faq.a}
                        </p>
                      </div>
                    </m.div>
                  )}
                </AnimatePresence>
              </m.div>
            );
          })
        )}
      </AnimatePresence>
    </div>
  );
}
