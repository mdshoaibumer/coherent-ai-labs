"use client";
import React from "react";
import { m, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Section } from "../../ui/Section";
import { Container } from "../../ui/Container";
import { Heading } from "../../ui/Heading";
import { Text } from "../../ui/Text";
import { Reveal } from "../../animations/Reveal";
import { AmbientGlow } from "../../animations/AmbientGlow";
import { useReducedMotion } from "../../../hooks/useReducedMotion";

interface MetricData {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const METRICS: MetricData[] = [
  { value: 99.99, suffix: "%", label: "Platform Availability", description: "Measured over rolling 12-month window" },
  { value: 45, suffix: "ms", label: "Median Latency", description: "P50 inference response time" },
  { value: 10000, suffix: "+", label: "Concurrent Agents", description: "Simultaneous agent sessions" },
  { value: 50, suffix: "M", label: "Requests / Day", description: "Peak throughput capacity" },
  { value: 12, suffix: "", label: "Global Regions", description: "Multi-region deployment zones" },
  { value: 256, suffix: "-bit", label: "Encryption", description: "AES encryption standard" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (prefersReducedMotion) {
      setCount(target);
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out expo
      const eased = 1 - Math.pow(1 - progress, 4);
      const current = start + (target - start) * eased;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [inView, target, prefersReducedMotion]);

  const display = target >= 100 ? Math.round(count).toLocaleString() : count.toFixed(target % 1 !== 0 ? 2 : 0);

  return (
    <span>
      {display}
      <span className="text-[#666] text-2xl md:text-3xl">{suffix}</span>
    </span>
  );
}

export function PlatformMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Section padding="default" backgroundElement={<AmbientGlow position="center" size="xl" intensity={0.025} animate animationDuration={8} />}>
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal variant="fadeUp">
            <span className="text-[10px] font-mono tracking-widest text-[#555] uppercase mb-4 block">
              Performance
            </span>
            <Heading level={2}>
              Built for Enterprise Scale
            </Heading>
            <Text size="lg">
              Infrastructure designed for high-throughput, low-latency AI workloads with guaranteed availability.
            </Text>
          </Reveal>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {METRICS.map((metric, i) => (
            <m.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 transition-colors"
            >
              <div className="font-display text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                <AnimatedCounter target={metric.value} suffix={metric.suffix} inView={inView} />
              </div>
              <div className="text-sm font-medium text-[#ccc] mb-1">{metric.label}</div>
              <div className="text-[10px] font-mono text-[#555] tracking-wide">{metric.description}</div>
            </m.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
