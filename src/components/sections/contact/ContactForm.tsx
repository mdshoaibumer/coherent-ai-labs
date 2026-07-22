'use client';
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
            <Heading level={1} className="mb-6 text-5xl font-bold">
              Talk to our Engineering Team.
            </Heading>
            <Paragraph className="text-muted-foreground mb-12 text-xl">
              Whether you need to scale an existing RAG pipeline or build a custom autonomous agent
              from scratch, our architects can help.
            </Paragraph>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <div className="text-foreground text-lg font-semibold">
                    Direct Engineer Access
                  </div>
                  <div className="text-muted-foreground">
                    No aggressive sales reps. You'll speak directly with technical leads who
                    understand your stack.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <div className="text-foreground text-lg font-semibold">Architecture Review</div>
                  <div className="text-muted-foreground">
                    We'll map out a proposed data pipeline and security boundary during our
                    discovery call.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[var(--color-primary)]" />
                <div>
                  <div className="text-foreground text-lg font-semibold">Strict NDA</div>
                  <div className="text-muted-foreground">
                    All conversations are strictly confidential. We sign NDAs before discussing your
                    proprietary data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        rightContent={
          <GlassPanel className="bg-card mx-auto w-full max-w-lg p-8 md:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <Heading level={3} className="mb-4">
                  Request Received
                </Heading>
                <Paragraph className="text-muted-foreground">
                  An architect will review your requirements and reach out within 24 hours to
                  schedule a discovery call.
                </Paragraph>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-foreground text-sm font-medium">
                      First Name
                    </label>
                    <input
                      required
                      type="text"
                      id="firstName"
                      className="border-border text-foreground w-full rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-foreground text-sm font-medium">
                      Last Name
                    </label>
                    <input
                      required
                      type="text"
                      id="lastName"
                      className="border-border text-foreground w-full rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-foreground text-sm font-medium">
                    Work Email
                  </label>
                  <input
                    required
                    type="email"
                    id="email"
                    className="border-border text-foreground w-full rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-foreground text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    required
                    type="text"
                    id="company"
                    className="border-border text-foreground w-full rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project" className="text-foreground text-sm font-medium">
                    Tell us about your project
                  </label>
                  <textarea
                    required
                    id="project"
                    rows={4}
                    className="border-border text-foreground w-full resize-none rounded-lg border bg-white/5 px-4 py-3 transition-shadow focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none"
                    placeholder="What are you trying to build or scale?"
                  ></textarea>
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
