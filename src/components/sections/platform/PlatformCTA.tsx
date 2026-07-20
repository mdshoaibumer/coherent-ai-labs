"use client";
import React from "react";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { MagneticButton } from "../../animations/MagneticButton";
import { Reveal } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";

export function PlatformCTA() {
  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="center" size="xl" intensity={0.035} animate animationDuration={7} />}>
      <Container size="md">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal variant="perspective">
            <Heading level={2} className="md:text-6xl leading-[1.1] mb-8">
              Ready to Build Production-Grade AI?
            </Heading>
            <Text size="xl" className="max-w-3xl mx-auto mb-12">
              Join engineering teams at Fortune 500 companies deploying autonomous AI systems on the Coherent AI Labs platform.
            </Text>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/contact">
                <MagneticButton
                  strength={28}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_24px_rgba(255,255,255,0.08)] hover:shadow-[0_0_36px_rgba(255,255,255,0.14)]"
                >
                  <Calendar className="w-5 h-5" />
                  Request Technical Demo
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>
              <a href="/contact">
                <MagneticButton
                  strength={20}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
                >
                  <FileText className="w-5 h-5 text-[#888]" />
                  Read Documentation
                </MagneticButton>
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-mono text-[#555] tracking-widest uppercase">
              <span>No vendor lock-in</span>
              <div className="w-1 h-1 rounded-full bg-[#333]" />
              <span>Custom SLAs</span>
              <div className="w-1 h-1 rounded-full bg-[#333]" />
              <span>Dedicated engineering support</span>
              <div className="w-1 h-1 rounded-full bg-[#333]" />
              <span>Free architecture review</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
