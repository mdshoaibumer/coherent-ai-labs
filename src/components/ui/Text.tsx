import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const textVariants = cva(
  "leading-relaxed",
  {
    variants: {
      variant: {
        default: "text-[var(--color-muted-foreground)]",
        primary: "text-[var(--color-foreground)]",
        light: "text-[#aaa]",
        dark: "text-[#555]",
      },
      size: {
        default: "text-base",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    }
  }
);

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
  children: ReactNode;
  as?: "p" | "span" | "div";
}

export function Text({ className, variant, size, as: Comp = "p", children, ...props }: TextProps) {
  return (
    <Comp className={cn(textVariants({ variant, size, className }))} {...props}>
      {children}
    </Comp>
  );
}
