"use client";
import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { Brain, ChevronDown } from "lucide-react";
import { CATEGORIES } from "../../constants/techStack";
import { TechDetails } from "./tech/TechDetails";
import { RadialVisualization } from "./tech/RadialVisualization";
import { Section } from "../ui/Section";
import { Container } from "../ui/Container";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { GlassPanel } from "../ui/GlassPanel";
import { IconWrapper } from "../ui/IconWrapper";
import { useReducedMotion } from "../../hooks/useReducedMotion";

export function TechStack() {
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const activeData = activeLayer
    ? CATEGORIES.find((c) => c.id === activeLayer)
    : null;
  const prefersReducedMotion = useReducedMotion();

  return (
    <Section
      id="ecosystem"
      border="top"
      backgroundElement={
        <>
          {/* Grid pattern with mask */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.1]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 15%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at center, black 15%, transparent 70%)",
            }}
          />

          {/* Noise texture for depth */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-screen"
            style={{
              backgroundImage:
                'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
            }}
          />

          {/* Ambient radial glow — shifts based on active state */}
          <m.div
            className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none will-change-transform"
            animate={{
              opacity: activeLayer ? 0.6 : 0.3,
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 65%)",
            }}
          />

          {/* Secondary glow on right (panel side) */}
          <div className="absolute top-[30%] right-[5%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,255,255,0.015)_0%,transparent_70%)] pointer-events-none" />
        </>
      }
    >
      <Container>
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <m.div
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <Heading level={2}>
              Built on Modern Engineering.
              <br />
              Powered by Intelligence.
            </Heading>
            <Text size="lg">
              We combine modern software engineering, cloud infrastructure, and
              AI technologies into secure, scalable, and intelligent business
              platforms.
            </Text>
          </m.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* ═══ Radial Visualization (Desktop) ═══ */}
          <RadialVisualization
            categories={CATEGORIES}
            activeLayer={activeLayer}
            onSetActiveLayer={setActiveLayer}
          />

          {/* ═══ Details Panel (Desktop) ═══ */}
          <div className="hidden lg:block lg:col-span-5 h-full min-h-[500px]">
            <GlassPanel
              variant="default"
              gradient
              className="p-8 h-full shadow-2xl relative overflow-hidden"
            >
              {/* Panel ambient glow that responds to state */}
              {!prefersReducedMotion && (
                <m.div
                  className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
                  animate={{
                    opacity: activeData ? 0.5 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background:
                      "radial-gradient(ellipse at top center, rgba(255,255,255,0.03) 0%, transparent 70%)",
                  }}
                />
              )}

              <AnimatePresence mode="wait">
                {activeData ? (
                  <m.div
                    key={activeData.id}
                    initial={{
                      opacity: 0,
                      y: 14,
                      filter: "blur(6px)",
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: -14,
                      filter: "blur(6px)",
                      scale: 0.97,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full relative z-10"
                  >
                    <TechDetails data={activeData} />
                  </m.div>
                ) : (
                  <m.div
                    key="default"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="h-full flex flex-col justify-center text-center px-6 relative z-10"
                  >
                    <IconWrapper
                      variant="default"
                      size="lg"
                      className="mx-auto mb-6"
                    >
                      <Brain
                        className="w-8 h-8 text-[#666]"
                        strokeWidth={1.5}
                      />
                    </IconWrapper>
                    <Heading level={3}>Ecosystem Explorer</Heading>
                    <Text size="sm">
                      Hover over any technology domain in the radial
                      visualization to explore our specific engineering
                      capabilities, technologies, and business outcomes.
                    </Text>

                    {/* Subtle breathing ring around the icon */}
                    {!prefersReducedMotion && (
                      <m.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-white/5 pointer-events-none"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.05, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </m.div>
                )}
              </AnimatePresence>
            </GlassPanel>
          </div>

          {/* ═══ Mobile Accordion View ═══ */}
          <div className="lg:hidden col-span-1 flex flex-col gap-4 relative z-10">
            {CATEGORIES.map((cat, catIdx) => {
              const isActive = activeLayer === cat.id;

              return (
                <m.div
                  key={`mobile-${cat.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: catIdx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <GlassPanel variant="default" className="shadow-lg">
                    <button
                      id={`tech-accordion-button-${cat.id}`}
                      aria-controls={`tech-accordion-panel-${cat.id}`}
                      className={cn(
                        "w-full p-5 flex items-center justify-between transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white inset-0",
                        isActive
                          ? "bg-white/[0.04]"
                          : "bg-white/[0.02] hover:bg-white/[0.03]"
                      )}
                      onClick={() =>
                        setActiveLayer(isActive ? null : cat.id)
                      }
                      aria-expanded={isActive}
                    >
                      <div className="flex items-center gap-4">
                        <IconWrapper
                          variant={isActive ? "active" : "default"}
                          size="sm"
                        >
                          <cat.icon
                            className={cn(
                              "w-5 h-5",
                              isActive ? "text-white" : "text-[#888]"
                            )}
                            strokeWidth={1.5}
                          />
                        </IconWrapper>
                        <span
                          className={cn(
                            "font-medium text-lg tracking-tight transition-colors duration-300",
                            isActive ? "text-white" : "text-[#aaa]"
                          )}
                        >
                          {cat.title}
                        </span>
                      </div>
                      <m.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <ChevronDown className="w-5 h-5 text-[#666]" />
                      </m.div>
                    </button>

                    <AnimatePresence>
                      {isActive && (
                        <m.div
                          id={`tech-accordion-panel-${cat.id}`}
                          aria-labelledby={`tech-accordion-button-${cat.id}`}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="p-5 pt-2 border-t border-white/5 bg-black/20">
                            <TechDetails data={cat} />
                          </div>
                        </m.div>
                      )}
                    </AnimatePresence>
                  </GlassPanel>
                </m.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
