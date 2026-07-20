import { Twitter, Linkedin, Github } from "lucide-react";
import {m } from "motion/react";

export function FooterBrand() {
  return (
    <m.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="lg:w-5/12"
    >
      <div className="text-2xl font-medium tracking-tight text-white flex items-center gap-3 mb-6">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-black rounded-sm" />
        </div>
        Coherent AI Labs
      </div>
      <p className="text-[#888] text-base leading-relaxed mb-8 max-w-md">
        We engineer AI-native software, intelligent automation, and modern digital platforms that help organizations work smarter, scale faster, and innovate with confidence.
      </p>
      <div className="flex gap-4">
        <a href="#" aria-label="Twitter" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#888] hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95">
          <Twitter size={18} strokeWidth={1.5} />
        </a>
        <a href="#" aria-label="LinkedIn" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#888] hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95">
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
        <a href="#" aria-label="GitHub" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#888] hover:bg-white/10 hover:text-white transition-all hover:scale-105 active:scale-95">
          <Github size={18} strokeWidth={1.5} />
        </a>
      </div>
    </m.div>
  );
}
