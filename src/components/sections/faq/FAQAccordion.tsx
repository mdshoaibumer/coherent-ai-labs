'use client';
import { m, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '../../../lib/utils';

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
  onToggleQuestion,
}: FAQAccordionProps) {
  return (
    <div className="space-y-4">
      <AnimatePresence mode="popLayout">
        {filteredFaqs.length === 0 ? (
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-card border-foreground/5 rounded-2xl border px-6 py-12 text-center"
          >
            <p className="text-muted-foreground text-lg">
              No questions found matching "{searchQuery}".
            </p>
            <button
              onClick={onClearSearch}
              className="text-foreground/60 hover:text-foreground mt-4 text-sm transition-colors"
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
                  'bg-card overflow-hidden rounded-2xl border transition-colors duration-300',
                  isOpen
                    ? 'border-foreground/20 shadow-[0_0_30px_rgba(var(--foreground),0.03)]'
                    : 'border-foreground/5 hover:border-foreground/10',
                )}
              >
                <button
                  id={`faq-button-${originalIndex}`}
                  aria-controls={`faq-panel-${originalIndex}`}
                  className="focus-visible:ring-foreground/20 flex w-full items-start justify-between px-6 py-6 text-left focus-visible:ring-2 focus-visible:outline-none"
                  onClick={() => onToggleQuestion(originalIndex)}
                  aria-expanded={isOpen}
                >
                  <span
                    className={cn(
                      'pr-8 text-lg font-medium transition-colors duration-300',
                      isOpen ? 'text-foreground' : 'text-muted-foreground hover:text-foreground/80',
                    )}
                  >
                    {faq.q}
                  </span>
                  <div
                    className={cn(
                      'mt-0.5 shrink-0 rounded-full border p-1 transition-colors duration-300',
                      isOpen
                        ? 'bg-foreground/10 border-foreground/20 text-foreground'
                        : 'bg-foreground/5 border-foreground/5 text-muted-foreground',
                    )}
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <m.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div
                        id={`faq-panel-${originalIndex}`}
                        aria-labelledby={`faq-button-${originalIndex}`}
                        role="region"
                        className="px-6 pt-2 pb-6"
                      >
                        <div className="via-foreground/10 mb-6 h-px w-full bg-gradient-to-r from-transparent to-transparent" />
                        <p className="text-muted-foreground text-base leading-relaxed">{faq.a}</p>
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
