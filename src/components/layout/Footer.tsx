'use client';
import { m } from 'motion/react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { FooterBrand } from './footer/FooterBrand';
import { NewsletterForm } from './footer/NewsletterForm';
import { FooterNavColumn } from './footer/FooterNavColumn';

const QUICK_NAV = [
  'Platform',
  'Solutions',
  'Services',
  'Industries',
  'Case Studies',
  'Resources',
  'Company',
  'Contact',
];

const SOLUTIONS = [
  'AI Agents',
  'Workflow Automation',
  'Enterprise Software',
  'Web Applications',
  'Mobile Applications',
  'Desktop Applications',
  'Cloud Engineering',
  'LLM Integration',
];

const RESOURCES = [
  'Engineering Blog',
  'Case Studies',
  'Documentation',
  'FAQs',
  'Privacy Policy',
  'Terms of Service',
];

const COMPANY = ['About', 'Careers', 'Partnerships', 'Contact'];

const PRINCIPLES = [
  'AI-Native',
  'Cloud-Ready',
  'API-First',
  'Security by Design',
  'Scalable Architecture',
  'Modern Engineering',
];

const BOTTOM_LINKS = ['Privacy Policy', 'Terms', 'Cookies', 'Accessibility'];

export function Footer() {
  return (
    <footer className="bg-background border-border relative overflow-hidden border-t pt-32 md:pt-40">
      {/* Background atmosphere */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,var(--accent-glow),transparent_50%)] opacity-20"
        aria-hidden="true"
      />
      <div
        className="noise-grain pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Brand & Newsletter row */}
        <div className="mb-20 flex flex-col justify-between gap-16 lg:flex-row">
          <FooterBrand />
          <NewsletterForm />
        </div>

        {/* Links Grid */}
        <div className="mb-20 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
          <FooterNavColumn title="Quick Navigation" items={QUICK_NAV} delay={0.2} />
          <FooterNavColumn title="Solutions" items={SOLUTIONS} delay={0.25} />
          <FooterNavColumn title="Resources" items={RESOURCES} delay={0.3} />
          <FooterNavColumn title="Company" items={COMPANY} delay={0.35} />

          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-display text-foreground mb-6 text-sm font-medium tracking-tight">
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li>
                <span className="text-muted-foreground/60 mb-1.5 flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                  <Mail size={11} /> Business Email
                </span>
                <a
                  href="mailto:contact@coherentailabs.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  contact@coherentailabs.com
                </a>
              </li>
              <li>
                <span className="text-muted-foreground/60 mb-1.5 flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                  <MapPin size={11} /> Office Location
                </span>
                <span className="text-muted-foreground text-sm">San Francisco, CA</span>
              </li>
              <li>
                <span className="text-muted-foreground/60 mb-1.5 flex items-center gap-2 font-mono text-xs tracking-wider uppercase">
                  <Clock size={11} /> Business Hours
                </span>
                <span className="text-muted-foreground text-sm">Mon-Fri, 9am-6pm PT</span>
              </li>
            </ul>
          </m.div>
        </div>

        {/* Engineering Principles */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="border-border mb-14 flex flex-wrap justify-center gap-2.5 border-t pt-14"
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle}
              className="border-border bg-accent text-muted-foreground hover:border-border-hover hover:text-foreground cursor-default rounded-full border px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors"
            >
              {principle}
            </div>
          ))}
        </m.div>

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-border flex flex-col items-center justify-between gap-6 border-t py-8 md:flex-row"
        >
          <div className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Coherent AI Labs. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {BOTTOM_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                className="text-muted-foreground/60 hover:text-muted-foreground text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-muted-foreground/40 flex items-center gap-2 text-sm">
            <div className="h-1.5 w-1.5 rounded-full bg-[var(--signal-color)] opacity-50" />
            Built with modern web technologies.
          </div>
        </m.div>
      </div>
    </footer>
  );
}
