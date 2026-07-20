"use client";
import { ArrowRight } from "lucide-react";
import {m } from "motion/react";

export function NewsletterForm() {
  return (
    <m.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="lg:w-6/12"
    >
      <div className="bg-[#050505] border border-white/5 p-8 sm:p-10 rounded-3xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10">
          <h3 className="font-display text-2xl font-medium text-white mb-3">Stay updated with AI engineering insights.</h3>
          <p className="text-[#888] text-base mb-8">Join our newsletter for the latest in AI, software architecture, and enterprise transformation.</p>
          
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <div className="flex-1 relative">
              <input 
                type="email" 
                placeholder="Email address" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-[#555] focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
            <button type="submit" className="bg-white text-black px-8 py-4 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 shrink-0">
              Subscribe <ArrowRight size={18} />
            </button>
          </form>
          <p className="text-[#555] text-xs mt-4">
            We care about your data. Read our <a href="#" className="underline hover:text-white transition-colors">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </m.div>
  );
}
