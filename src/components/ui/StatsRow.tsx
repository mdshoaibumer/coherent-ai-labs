"use client";
import React from "react";
import { RevealStagger, RevealItem } from "../animations/Reveal";
import { cn } from "../../lib/utils";

/**
 * StatsRow — horizontal row of key metrics/statistics.
 * Automatically staggers entrance and handles responsive layout.
 *
 * Usage:
 *   <StatsRow stats={[
 *     { value: "99.9%", label: "Uptime SLA" },
 *     { value: "3x", label: "Faster Delivery" },
 *   ]} />
 */

interface Stat {
  value: string;
  label: string;
  /** Optional suffix after value (e.g., "+", "%") */
  suffix?: string;
}

interface StatsRowProps {
  stats: Stat[];
  className?: string;
  /** Visual variant. Default: "default" */
  variant?: "default" | "bordered" | "cards";
}

export function StatsRow({ stats, className, variant = "default" }: StatsRowProps) {
  return (
    <RevealStagger
      stagger={0.1}
      className={cn(
        "grid gap-8",
        stats.length <= 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4",
        className
      )}
    >
      {stats.map((stat) => (
        <RevealItem key={stat.label}>
          <div
            className={cn(
              "text-center",
              variant === "bordered" && "py-6 border-t border-white/10",
              variant === "cards" &&
                "p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            )}
          >
            <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">
              {stat.value}
              {stat.suffix && (
                <span className="text-[#666] text-2xl">{stat.suffix}</span>
              )}
            </div>
            <div className="text-xs font-mono text-[#666] uppercase tracking-widest">
              {stat.label}
            </div>
          </div>
        </RevealItem>
      ))}
    </RevealStagger>
  );
}
