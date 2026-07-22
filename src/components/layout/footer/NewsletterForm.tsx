'use client';
import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';

export function NewsletterForm() {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:w-6/12"
    >
      <div className="bg-card border-border group relative overflow-hidden rounded-3xl border p-8 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative z-10">
          <h3 className="font-display text-foreground mb-3 text-2xl font-medium">
            Stay updated with AI engineering insights.
          </h3>
          <p className="text-muted-foreground mb-8 text-base">
            Join our newsletter for the latest in AI, software architecture, and enterprise
            transformation.
          </p>

          <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Email address"
                required
                className="border-border text-foreground placeholder:text-muted-foreground/60 w-full rounded-xl border bg-white/5 px-5 py-4 transition-all focus:ring-2 focus:ring-white/20 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-medium text-black transition-colors hover:bg-gray-200"
            >
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-muted-foreground/60 mt-4 text-xs">
            We care about your data. Read our{' '}
            <a href="#" className="hover:text-foreground underline transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </m.div>
  );
}
