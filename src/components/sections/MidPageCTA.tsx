'use client';
import { ArrowRight } from '../illustrations/Icons';
import Link from 'next/link';
import { Container } from '../ui/Container';
import { Reveal } from '../animations/Reveal';
import { MagneticButton } from '../animations/MagneticButton';

/**
 * MidPageCTA — lightweight inline conversion bridge.
 * Placed after CoreServices to capture visitors who've identified their need.
 */
export function MidPageCTA() {
  return (
    <section className="relative py-20">
      <Container size="md">
        <Reveal variant="scaleUp">
          <div className="bg-accent border-border relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-2xl border p-8 sm:flex-row md:p-10">
            {/* Subtle accent glow */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-[200px] w-[300px] rounded-full bg-[radial-gradient(ellipse,var(--accent-glow),transparent_70%)] opacity-30 blur-[40px]"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h3 className="font-display text-foreground mb-1.5 text-lg font-medium tracking-tight">
                Found your use case?
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Let&apos;s scope the right solution for your business.
              </p>
            </div>
            <Link href="/contact" className="relative z-10 w-full shrink-0 sm:w-auto">
              <MagneticButton
                strength={20}
                className="group focus-visible:ring-ring bg-foreground text-background flex w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium shadow-[var(--shadow-md)] transition-all duration-500 outline-none hover:scale-[1.03] hover:shadow-[var(--shadow-lg)] focus-visible:ring-2 focus-visible:outline-none active:scale-[0.97] sm:w-auto"
              >
                Start AI Assessment
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-400 group-hover:translate-x-0.5" />
              </MagneticButton>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
