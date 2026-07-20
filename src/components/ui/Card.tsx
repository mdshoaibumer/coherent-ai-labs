"use client";
import { ReactNode, forwardRef } from "react";
import { m, HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardVariants = cva(
  "group relative rounded-2xl overflow-hidden transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-white",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-card)] border border-[var(--color-card-border)]",
        glass: "bg-white/5 border border-white/10 backdrop-blur-md",
        ghost: "bg-transparent border border-transparent",
      },
      padding: {
        default: "p-6 sm:p-8",
        sm: "p-4 sm:p-6",
        none: "p-0",
      },
      hoverEffect: {
        true: "hover:border-white/20 shadow-xl hover:shadow-2xl hover:shadow-white/5",
        false: "",
      }
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
      hoverEffect: true,
    }
  }
);

export interface CardProps extends Omit<HTMLMotionProps<"div">, "className" | "style">, VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hoverEffect, children, ...props }, ref) => {
    return (
      <m.div
        ref={ref}
        className={cn(cardVariants({ variant, padding, hoverEffect, className }))}
        {...props}
      >
        {hoverEffect && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.06)_0%,transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </>
        )}
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </m.div>
    );
  }
);
Card.displayName = "Card";
