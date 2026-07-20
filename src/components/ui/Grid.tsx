import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const gridVariants = cva(
  "grid",
  {
    variants: {
      cols: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-3",
        4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
        12: "grid-cols-1 lg:grid-cols-12",
      },
      gap: {
        sm: "gap-4 lg:gap-6",
        default: "gap-8 lg:gap-12",
        lg: "gap-12 lg:gap-16",
        none: "gap-0",
      }
    },
    defaultVariants: {
      cols: 1,
      gap: "default",
    }
  }
);

export interface GridProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
  children: ReactNode;
}

export function Grid({ className, cols, gap, children, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap, className }))} {...props}>
      {children}
    </div>
  );
}
