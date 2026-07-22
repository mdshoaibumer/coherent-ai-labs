'use client';
import { ArrowRight, Check, Signal, Code, Deployment } from '../illustrations/Icons';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Text } from '../ui/Text';
import { Grid } from '../ui/Grid';
import { GlassPanel } from '../ui/GlassPanel';
import { Reveal, RevealStagger, RevealItem } from '../animations/Reveal';
import { MagneticButton } from '../animations/MagneticButton';
import { AmbientGlow } from '../animations/AmbientGlow';

const HIGHLIGHTS = [
  'AI Strategy & Consulting',
  'Custom Software Development',
  'Enterprise AI Solutions',
  'Workflow Automation',
  'Cloud-Native Engineering',
  'Long-Term Technical Partnership',
];

const PROCESS = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'Understand your business goals and technical challenges.',
  },
  {
    step: '02',
    title: 'Solution Design',
    desc: 'Define architecture, roadmap, and implementation strategy.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    desc: 'Develop, integrate, test, and deploy your solution.',
  },
  {
    step: '04',
    title: 'Continuous Growth',
    desc: 'Support, optimize, and evolve your platform over time.',
  },
];

const CONTACT_OPTIONS = [
  { title: 'Business Inquiries', icon: Signal },
  { title: 'Partnership Opportunities', icon: Deployment },
  { title: 'Technical Consultation', icon: Code },
  { title: 'Product Demonstrations', icon: ArrowRight },
];

export function FinalCTA() {
  return (
    <Section
      id="contact"
      border="top"
      backgroundElement={
        <>
          <AmbientGlow
            position="center"
            size="xl"
            intensity={0.025}
            animate
            animationDuration={8}
          />
          <div className="noise-grain pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay" />
        </>
      }
    >
      <Container size="md">
        {/* Main Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <Reveal variant="perspectivePremium">
            <Heading level={2} className="mb-8 leading-[1.05] md:text-6xl">
              Let&apos;s Build the Future of <br className="hidden md:block" />
              <span className="text-muted-foreground">Your Business with AI</span>
            </Heading>
            <Text size="xl" className="mx-auto mb-14 max-w-2xl">
              Whether you&apos;re exploring AI agents, workflow automation, or a complete digital
              transformation — we design the right solution for your business.
            </Text>

            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <MagneticButton
                  strength={28}
                  className="group focus-visible:ring-ring bg-foreground text-background flex w-full shrink-0 items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-medium shadow-[var(--shadow-lg)] transition-all duration-500 outline-none hover:scale-[1.03] hover:shadow-[var(--shadow-xl)] focus-visible:ring-2 active:scale-[0.97] sm:w-auto"
                >
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
                </MagneticButton>
              </a>
              <a href="/contact">
                <MagneticButton
                  strength={20}
                  className="group focus-visible:ring-ring glass-panel text-foreground flex w-full shrink-0 items-center justify-center gap-3 rounded-full px-8 py-4 text-base font-medium transition-all duration-500 outline-none hover:border-[var(--border-hover)] focus-visible:ring-2 sm:w-auto"
                >
                  <Signal className="text-muted-foreground h-4 w-4" size={16} />
                  Discuss Your Project
                </MagneticButton>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <Check className="text-muted-foreground/60 h-3.5 w-3.5" size={14} />
                  <Text size="sm" className="text-muted-foreground">
                    {highlight}
                  </Text>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Engagement Process */}
        <Reveal variant="fadeUp" delay={0.1} className="mb-24">
          <div className="mb-10 text-center">
            <h3 className="text-text-caption font-mono text-[10px] tracking-[0.2em] uppercase">
              Engagement Process
            </h3>
          </div>
          <RevealStagger stagger={0.1}>
            <Grid cols={4} gap="sm" className="relative">
              <div className="via-border absolute top-12 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent to-transparent md:block" />
              {PROCESS.map((step) => (
                <RevealItem key={step.step}>
                  <GlassPanel
                    variant="default"
                    className="group hover:bg-accent relative z-10 p-8 transition-all duration-500"
                  >
                    <div className="text-text-caption bg-accent border-border mb-4 inline-block rounded-full border px-3 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase">
                      Step {step.step}
                    </div>
                    <h4 className="font-display text-foreground mb-2 text-lg font-medium tracking-tight">
                      {step.title}
                    </h4>
                    <Text size="sm">{step.desc}</Text>
                  </GlassPanel>
                </RevealItem>
              ))}
            </Grid>
          </RevealStagger>
        </Reveal>

        {/* Contact Summary */}
        <Reveal
          variant="fade"
          delay={0.2}
          className="border-border mx-auto max-w-4xl border-t pt-16"
        >
          <Grid cols={4} gap="sm" className="text-center">
            {CONTACT_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="hover:bg-accent group flex cursor-pointer flex-col items-center gap-3 rounded-2xl p-5 transition-all duration-500"
              >
                <option.icon
                  className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors duration-500"
                  size={20}
                />
                <span className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors duration-500">
                  {option.title}
                </span>
              </div>
            ))}
          </Grid>
        </Reveal>
      </Container>
    </Section>
  );
}
