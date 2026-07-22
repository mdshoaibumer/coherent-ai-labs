'use client';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { m } from 'motion/react';

export function FooterBrand() {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="lg:w-5/12"
    >
      <div className="text-foreground mb-6 flex items-center gap-3 text-2xl font-medium tracking-tight">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
          <div className="h-4 w-4 rounded-sm bg-black" />
        </div>
        Coherent AI Labs
      </div>
      <p className="text-muted-foreground mb-8 max-w-md text-base leading-relaxed">
        We engineer AI-native software, intelligent automation, and modern digital platforms that
        help organizations work smarter, scale faster, and innovate with confidence.
      </p>
      <div className="flex gap-4">
        <a
          href="#"
          aria-label="Twitter"
          className="border-border text-muted-foreground hover:text-foreground rounded-xl border bg-white/5 p-2.5 transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
        >
          <Twitter size={18} strokeWidth={1.5} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="border-border text-muted-foreground hover:text-foreground rounded-xl border bg-white/5 p-2.5 transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="border-border text-muted-foreground hover:text-foreground rounded-xl border bg-white/5 p-2.5 transition-all hover:scale-105 hover:bg-white/10 active:scale-95"
        >
          <Github size={18} strokeWidth={1.5} />
        </a>
      </div>
    </m.div>
  );
}
