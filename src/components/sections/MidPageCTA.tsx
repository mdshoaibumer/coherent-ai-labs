"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Reveal } from "../animations/Reveal";
import { MagneticButton } from "../animations/MagneticButton";

/**
 * MidPageCTA — lightweight inline conversion point.
 * Placed after CoreServices to capture visitors who've identified their need.
 * Deliberately minimal — not a full section, just a conversion bridge.
 */
export function MidPageCTA() {
  return (
    <section className="py-16 relative">
      <Container size="md">
        <Reveal variant="fade">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
            <div>
              <h3 className="font-display text-lg font-medium text-white mb-1">
                Found your use case?
              </h3>
              <p className="text-sm text-[#888]">
                Let&apos;s scope the right solution for your business.
              </p>
            </div>
            <Link href="/contact" className="shrink-0 w-full sm:w-auto">
              <MagneticButton
                strength={20}
                className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-6 py-3 text-sm shadow-[0_0_16px_rgba(255,255,255,0.06)]"
              >
                Start AI Assessment
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </MagneticButton>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
