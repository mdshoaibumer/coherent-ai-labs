import { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const headingVariants = cva(
  "font-display font-medium tracking-tight text-white",
  {
    variants: {
      level: {
        1: "text-5xl md:text-7xl font-bold mb-6",
        2: "text-4xl md:text-5xl mb-6",
        3: "text-2xl md:text-3xl mb-4",
        4: "text-xl md:text-2xl mb-4",
        5: "text-lg font-semibold mb-2",
        6: "text-base font-medium mb-2",
      }
    },
    defaultVariants: {
      level: 2,
    }
  }
);

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  children: ReactNode;
}

export function Heading({ className, level = 2, children, ...props }: HeadingProps) {
  const Comp = `h${level}` as any;
  return (
    <Comp className={cn(headingVariants({ level, className }))} {...props}>
      {children}
    </Comp>
  );
}
