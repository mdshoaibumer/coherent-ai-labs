import { ReactNode, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const sectionVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      padding: {
        default: "py-32",
        sm: "py-16",
        lg: "py-48",
        none: "py-0",
      },
      background: {
        default: "bg-[var(--color-background)]",
        muted: "bg-[#050505]",
      },
      border: {
        top: "border-t border-white/5",
        bottom: "border-b border-white/5",
        both: "border-y border-white/5",
        none: "",
      }
    },
    defaultVariants: {
      padding: "default",
      background: "default",
      border: "none",
    }
  }
);

export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
  children: ReactNode;
  backgroundElement?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, background, border, children, backgroundElement, ...props }, ref) => {
    return (
      <section ref={ref} className={cn(sectionVariants({ padding, background, border, className }))} {...props}>
        {backgroundElement}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </section>
    );
  }
);
Section.displayName = "Section";
