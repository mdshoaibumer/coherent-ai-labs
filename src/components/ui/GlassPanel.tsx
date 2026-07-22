"use client";
import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const glassPanelVariants = cva(
  "relative overflow-hidden border backdrop-blur-xl transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-[#050505] border-white/10",
        light: "bg-white/5 border-white/20",
        dark: "bg-[#080808] border-white/5",
        premium: "bg-white/[0.04] border-white/15 shadow-[0_0_20px_rgba(0,200,255,0.08)]",
      },
      radius: {
        md: "rounded-xl",
        lg: "rounded-2xl",
        xl: "rounded-3xl",
      },
      hover: {
        true: "group hover:bg-white/[0.06] hover:border-white/20 hover:shadow-[0_0_30px_rgba(0,200,255,0.12)]",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "lg",
      hover: false,
    }
  }
);

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassPanelVariants> {
  children: ReactNode;
  gradient?: boolean;
}

export function GlassPanel({ className, variant, radius, hover = false, gradient = false, children, ...props }: GlassPanelProps) {
  return (
    <div className={cn(glassPanelVariants({ variant, radius, hover, className }))} {...props}>
      {/* Premium top glow line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 pointer-events-none" />
      
      {gradient && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />
      )}
      
      {/* Subtle inner shimmer on hover */}
      {hover && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,255,0.03)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      )}
      
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
