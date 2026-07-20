import {m } from "motion/react";
import { Mail, MapPin, Clock } from "lucide-react";
import { FooterBrand } from "./footer/FooterBrand";
import { NewsletterForm } from "./footer/NewsletterForm";
import { FooterNavColumn } from "./footer/FooterNavColumn";

const QUICK_NAV = [
  "Platform", "Solutions", "Services", "Industries", "Case Studies", "Resources", "Company", "Contact"
];

const SOLUTIONS = [
  "AI Agents", "Workflow Automation", "Enterprise Software", "Web Applications", "Mobile Applications", "Desktop Applications", "Cloud Engineering", "LLM Integration"
];

const RESOURCES = [
  "Engineering Blog", "Case Studies", "Documentation", "FAQs", "Privacy Policy", "Terms of Service"
];

const COMPANY = [
  "About", "Careers", "Partnerships", "Contact"
];

const PRINCIPLES = [
  "AI-Native", "Cloud-Ready", "API-First", "Security by Design", "Scalable Architecture", "Modern Engineering"
];

const BOTTOM_LINKS = [
  "Privacy Policy", "Terms", "Cookies", "Accessibility"
];

export function Footer() {
  return (
    <footer className="relative bg-[#020202] pt-32 overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Brand & Newsletter row */}
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
          <FooterBrand />
          <NewsletterForm />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16 mb-24">
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
            <h4 className="font-display text-white font-medium mb-6 tracking-tight text-sm">Contact Us</h4>
            <ul className="space-y-6">
              <li>
                <span className="flex items-center gap-2 text-xs font-mono text-[#555] uppercase tracking-wider mb-2">
                  <Mail size={12}/> Business Email
                </span>
                <a href="mailto:contact@coherentailabs.com" className="text-sm text-[#aaa] hover:text-white transition-colors">
                  contact@coherentailabs.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-xs font-mono text-[#555] uppercase tracking-wider mb-2">
                  <MapPin size={12}/> Office Location
                </span>
                <span className="text-sm text-[#aaa]">San Francisco, CA</span>
              </li>
              <li>
                <span className="flex items-center gap-2 text-xs font-mono text-[#555] uppercase tracking-wider mb-2">
                  <Clock size={12}/> Business Hours
                </span>
                <span className="text-sm text-[#aaa]">Mon-Fri, 9am-6pm PT</span>
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
          className="flex flex-wrap justify-center gap-3 mb-16 pt-16 border-t border-white/5"
        >
          {PRINCIPLES.map((principle) => (
            <div 
              key={principle} 
              className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] text-xs font-medium text-[#777] uppercase tracking-widest hover:border-white/30 hover:text-white transition-colors cursor-default"
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
          className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-sm text-[#555]">
            © {new Date().getFullYear()} Coherent AI Labs. All rights reserved.
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {BOTTOM_LINKS.map(link => (
              <a key={link} href="#" className="text-sm text-[#555] hover:text-[#888] transition-colors">
                {link}
              </a>
            ))}
          </div>

          <div className="text-sm text-[#444] flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
            Built with modern web technologies.
          </div>
        </m.div>

      </div>
    </footer>
  );
}
