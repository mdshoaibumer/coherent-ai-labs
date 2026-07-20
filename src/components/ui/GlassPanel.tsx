import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const glassPanelVariants = cva(
  "relative overflow-hidden border backdrop-blur-md",
  {
    variants: {
      variant: {
        default: "bg-[#050505] border-white/10",
        light: "bg-white/5 border-white/20",
        dark: "bg-[#080808] border-white/5",
      },
      radius: {
        md: "rounded-xl",
        lg: "rounded-2xl",
        xl: "rounded-3xl",
      }
    },
    defaultVariants: {
      variant: "default",
      radius: "lg",
    }
  }
);

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof glassPanelVariants> {
  children: ReactNode;
  gradient?: boolean;
}

export function GlassPanel({ className, variant, radius, gradient = false, children, ...props }: GlassPanelProps) {
  return (
    <div className={cn(glassPanelVariants({ variant, radius, className }))} {...props}>
      {gradient && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 pointer-events-none" />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
