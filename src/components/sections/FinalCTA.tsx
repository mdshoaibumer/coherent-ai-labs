'use client';
import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Calendar,
  Mail,
  Zap,
  Code,
  PlayCircle,
} from 'lucide-react';
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
  { title: 'Business Inquiries', icon: Mail },
  { title: 'Partnership Opportunities', icon: Zap },
  { title: 'Technical Consultation', icon: Code },
  { title: 'Product Demonstrations', icon: PlayCircle },
];

export function FinalCTA() {
  return (
    <Section
      id="contact"
      border="top"
      backgroundElement={
        <>
          <AmbientGlow position="center" size="xl" intensity={0.03} animate animationDuration={6} />
        </>
      }
    >
      <Container size="md">
        {/* Main Header */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <Reveal variant="perspectivePremium">
            <Heading level={2} className="mb-8 leading-[1.1] md:text-6xl">
              Let&apos;s Build the Future of <br className="hidden md:block" />
              <span className="from-foreground via-foreground to-foreground/90 bg-gradient-to-r bg-clip-text text-transparent">
                Your Business with AI
              </span>
            </Heading>
            <Text size="xl" className="mx-auto mb-12 max-w-3xl">
              Whether you&apos;re exploring AI agents, workflow automation, enterprise software, or
              a complete digital transformation, we&apos;re ready to help design the right solution
              for your business.
            </Text>

            <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <MagneticButton
                  strength={28}
                  className="group focus-visible:ring-foreground bg-foreground text-background flex w-full shrink-0 items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[0_0_24px_rgba(var(--foreground),0.08)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_36px_rgba(var(--foreground),0.14)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                >
                  <Calendar className="h-5 w-5" />
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </a>
              <a href="/contact">
                <MagneticButton
                  strength={20}
                  className="group focus-visible:ring-foreground bg-foreground/5 text-foreground border-foreground/10 hover:bg-foreground/10 hover:border-foreground/20 flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border px-8 py-4 text-lg font-medium transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                >
                  <MessageSquare className="text-muted-foreground h-5 w-5" />
                  Discuss Your Project
                </MagneticButton>
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {HIGHLIGHTS.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="text-muted-foreground h-4 w-4" />
                  <Text size="sm">{highlight}</Text>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Engagement Process */}
        <Reveal variant="fadeUp" delay={0.1} className="mb-24">
          <div className="mb-10 text-center">
            <h3 className="font-display text-muted-foreground font-mono text-sm tracking-widest uppercase">
              Engagement Process
            </h3>
          </div>
          <RevealStagger stagger={0.1}>
            <Grid cols={4} gap="sm" className="relative">
              <div className="via-foreground/10 absolute top-12 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent to-transparent md:block" />
              {PROCESS.map((step) => (
                <RevealItem key={step.step}>
                  <GlassPanel
                    variant="default"
                    className="group hover:bg-foreground/[0.02] relative z-10 p-8 transition-colors"
                  >
                    <div className="text-muted-foreground bg-foreground/5 border-foreground/5 mb-4 inline-block rounded-full border px-3 py-1 font-mono text-[10px] tracking-widest uppercase">
                      Step {step.step}
                    </div>
                    <h4 className="font-display text-foreground mb-2 text-lg font-medium">
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
          className="border-foreground/5 mx-auto max-w-4xl border-t pt-16"
        >
          <Grid cols={4} gap="sm" className="text-center">
            {CONTACT_OPTIONS.map((option) => (
              <div
                key={option.title}
                className="hover:bg-foreground/[0.02] group flex cursor-pointer flex-col items-center gap-3 rounded-xl p-4 transition-colors"
              >
                <option.icon className="text-muted-foreground group-hover:text-foreground h-5 w-5 transition-colors" />
                <span className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors">
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
