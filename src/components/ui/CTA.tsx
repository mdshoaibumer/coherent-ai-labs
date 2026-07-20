"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { ArrowRight } from "lucide-react";
import { GlassPanel } from "./GlassPanel";
import { MagneticButton } from "../animations/MagneticButton";
import { Reveal } from "../animations/Reveal";

interface CTAProps {
  title: string;
  description: string;
  primaryAction: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
  };
  className?: string;
}

export function CTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
}: CTAProps) {
  return (
    <Reveal variant="scaleUp">
      <GlassPanel
        className={cn(
          "p-12 md:p-20 text-center relative overflow-hidden",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Heading level={2} className="mb-6">
            {title}
          </Heading>
          <Text className="text-xl text-[#888] mb-10">{description}</Text>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {primaryAction.href ? (
              <a href={primaryAction.href} className="w-full sm:w-auto">
                <MagneticButton
                  strength={25}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                >
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
              </a>
            ) : (
              <MagneticButton
                strength={25}
                className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white text-black hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.97] px-8 py-4 text-lg shadow-[0_0_20px_rgba(255,255,255,0.06)] hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
                onClick={primaryAction.onClick}
              >
                {primaryAction.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </MagneticButton>
            )}

            {secondaryAction &&
              (secondaryAction.href ? (
                <a href={secondaryAction.href} className="w-full sm:w-auto">
                  <MagneticButton
                    strength={18}
                    className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
                  >
                    {secondaryAction.label}
                  </MagneticButton>
                </a>
              ) : (
                <MagneticButton
                  strength={18}
                  className="w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0 bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 px-8 py-4 text-lg"
                  onClick={secondaryAction.onClick}
                >
                  {secondaryAction.label}
                </MagneticButton>
              ))}
          </div>
        </div>
      </GlassPanel>
    </Reveal>
  );
}
