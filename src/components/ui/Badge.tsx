import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors shrink-0",
  {
    variants: {
      variant: {
        default: "border border-white/10 bg-white/[0.02] text-[#888]",
        primary: "bg-white text-black",
        secondary: "bg-[#111] text-white",
        outline: "border border-white/20 text-white",
        glass: "bg-white/5 border border-white/10 backdrop-blur-md text-[#aaa]",
        glow: "bg-white/10 text-white shadow-[0_0_15px_rgba(255,255,255,0.2)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  children: ReactNode;
  ping?: boolean;
}

export function Badge({ className, variant, children, ping, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {ping && (
        <span className="relative flex h-2 w-2 mr-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      )}
      {children}
    </div>
  );
}
