import React from 'react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { GlassPanel } from '../../ui/GlassPanel';
import { Heading } from '../../ui/Heading';
import { Paragraph } from '../../ui/Paragraph';
import { Button } from '../../ui/Button';
import { SectionReveal } from '../../animations/SectionReveal';

export function NewsletterSignup() {
  return (
    <SectionReveal>
      <Section className="py-24">
        <Container className="max-w-4xl">
          <GlassPanel className="p-10 md:p-16 text-center relative overflow-hidden bg-gradient-to-br from-[#111] to-[#000]">
            <div className="absolute inset-0 bg-[var(--color-primary)]/5 mix-blend-screen" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <Heading level={2} className="mb-4">Get engineering deep dives delivered.</Heading>
              <Paragraph className="text-[#888] mb-8">
                Join 15,000+ engineers receiving our monthly teardowns on AI architecture, LLM performance, and infrastructure scaling. No marketing spam.
              </Paragraph>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="engineering@company.com" 
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-shadow"
                />
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>
          </GlassPanel>
        </Container>
      </Section>
    </SectionReveal>
  );
}
