'use client';
import React from 'react';
import { ArrowRight, Calendar, FileText } from 'lucide-react';
import { Section } from '../../ui/Section';
import { Container } from '../../ui/Container';
import { Heading } from '../../ui/Heading';
import { Text } from '../../ui/Text';
import { MagneticButton } from '../../animations/MagneticButton';
import { Reveal } from '../../animations/Reveal';
import { AmbientGlow } from '../../animations/AmbientGlow';

export function PlatformCTA() {
  return (
    <Section
      padding="default"
      backgroundElement={
        <AmbientGlow position="center" size="xl" intensity={0.035} animate animationDuration={7} />
      }
    >
      <Container size="md">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="perspective">
            <Heading level={2} className="mb-8 leading-[1.1] md:text-6xl">
              Ready to Build Production-Grade AI?
            </Heading>
            <Text size="xl" className="mx-auto mb-12 max-w-3xl">
              Join engineering teams at Fortune 500 companies deploying autonomous AI systems on the
              Coherent AI Labs platform.
            </Text>

            <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact">
                <MagneticButton
                  strength={28}
                  className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-3 rounded-xl px-8 py-4 text-lg font-medium shadow-[0_0_24px_rgba(255,255,255,0.08)] transition-all duration-300 outline-none hover:scale-[1.02] hover:opacity-90 hover:shadow-[0_0_36px_rgba(255,255,255,0.14)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
                >
                  <Calendar className="h-5 w-5" />
                  Request Technical Demo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </MagneticButton>
              </a>
              <a href="/contact">
                <MagneticButton
                  strength={20}
                  className="focus-visible:ring-ring bg-accent text-foreground border-border hover:border-border-hover flex w-full items-center justify-center gap-3 rounded-xl border px-8 py-4 text-lg font-medium transition-all duration-300 outline-none hover:bg-white/10 focus-visible:ring-2 focus-visible:outline-none sm:w-auto"
                >
                  <FileText className="text-muted-foreground h-5 w-5" />
                  Read Documentation
                </MagneticButton>
              </a>
            </div>

            {/* Trust signals */}
            <div className="text-muted-foreground/60 flex flex-wrap justify-center gap-x-6 gap-y-3 font-mono text-xs tracking-widest uppercase">
              <span>No vendor lock-in</span>
              <div className="h-1 w-1 rounded-full bg-[#333]" />
              <span>Custom SLAs</span>
              <div className="h-1 w-1 rounded-full bg-[#333]" />
              <span>Dedicated engineering support</span>
              <div className="h-1 w-1 rounded-full bg-[#333]" />
              <span>Free architecture review</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
