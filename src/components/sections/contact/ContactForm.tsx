import React, { useState } from 'react';
import { SplitLayout } from '../../layouts/SplitLayout';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { SectionReveal } from '../../animations/SectionReveal';
import { Button } from '../../ui/Button';
import { GlassPanel } from '../../ui/GlassPanel';
import { CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setSubmitted(true), 1000);
  };

  return (
    <SectionReveal>
      <SplitLayout
        leftContent={
          <div className="max-w-xl">
            <Heading level={1} className="mb-6 text-5xl font-bold">Talk to our Engineering Team.</Heading>
            <Paragraph className="text-xl text-[#888] mb-12">
              Whether you need to scale an existing RAG pipeline or build a custom autonomous agent from scratch, our architects can help.
            </Paragraph>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg">Direct Engineer Access</div>
                  <div className="text-[#888]">No aggressive sales reps. You'll speak directly with technical leads who understand your stack.</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg">Architecture Review</div>
                  <div className="text-[#888]">We'll map out a proposed data pipeline and security boundary during our discovery call.</div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-white text-lg">Strict NDA</div>
                  <div className="text-[#888]">All conversations are strictly confidential. We sign NDAs before discussing your proprietary data.</div>
                </div>
              </div>
            </div>
          </div>
        }
        rightContent={
          <GlassPanel className="p-8 md:p-10 w-full max-w-lg mx-auto bg-[#050505]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <Heading level={3} className="mb-4">Request Received</Heading>
                <Paragraph className="text-[#888]">
                  An architect will review your requirements and reach out within 24 hours to schedule a discovery call.
                </Paragraph>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-white">First Name</label>
                    <input required type="text" id="firstName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-white">Last Name</label>
                    <input required type="text" id="lastName" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">Work Email</label>
                  <input required type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-white">Company Name</label>
                  <input required type="text" id="company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-sm font-medium text-white">Tell us about your project</label>
                  <textarea required id="project" rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow resize-none" placeholder="What are you trying to build or scale?"></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full justify-center">
                  Request Discovery Call
                </Button>
              </form>
            )}
          </GlassPanel>
        }
      />
    </SectionReveal>
  );
}
