import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "w-full sm:w-auto rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white outline-none shrink-0",
  {
    variants: {
      variant: {
        primary: "bg-[var(--color-primary)] text-[var(--color-primary-foreground)] hover:bg-gray-200 hover:scale-105 active:scale-95",
        secondary: "bg-[#111] text-white hover:bg-[#222]",
        outline: "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20",
        ghost: "bg-transparent text-[var(--color-muted-foreground)] hover:text-white hover:bg-white/5",
      },
      size: {
        default: "px-8 py-4 text-lg",
        sm: "px-4 py-2 text-sm",
        lg: "px-10 py-5 text-xl",
        icon: "p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {icon}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
