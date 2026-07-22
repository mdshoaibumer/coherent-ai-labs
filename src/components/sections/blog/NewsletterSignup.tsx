'use client';
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
          <GlassPanel className="relative overflow-hidden bg-gradient-to-br from-[#111] to-[#000] p-10 text-center md:p-16">
            <div className="absolute inset-0 bg-[var(--color-primary)]/5 mix-blend-screen" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <Heading level={2} className="mb-4">
                Get engineering deep dives delivered.
              </Heading>
              <Paragraph className="text-muted-foreground mb-8">
                Join 15,000+ engineers receiving our monthly teardowns on AI architecture, LLM
                performance, and infrastructure scaling. No marketing spam.
              </Paragraph>
              <form
                className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="engineering@company.com"
                  required
                  className="border-border text-foreground flex-1 rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
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
