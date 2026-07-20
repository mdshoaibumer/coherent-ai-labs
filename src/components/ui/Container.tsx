import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const containerVariants = cva(
  "mx-auto px-6 w-full relative z-10",
  {
    variants: {
      size: {
        default: "max-w-7xl",
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-[1400px]",
        full: "max-w-full",
      }
    },
    defaultVariants: {
      size: "default",
    }
  }
);

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  children: ReactNode;
}

export function Container({ className, size, children, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size, className }))} {...props}>
      {children}
    </div>
  );
}
