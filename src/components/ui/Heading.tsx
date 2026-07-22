import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const headingVariants = cva('font-display font-medium tracking-tight text-foreground', {
  variants: {
    level: {
      1: 'text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[-0.04em] mb-6 leading-[1.02]',
      2: 'text-3xl sm:text-4xl md:text-5xl tracking-[-0.035em] mb-6 leading-[1.08]',
      3: 'text-2xl md:text-3xl tracking-[-0.03em] mb-4 leading-[1.12]',
      4: 'text-xl md:text-2xl tracking-[-0.025em] mb-3 leading-[1.18]',
      5: 'text-lg font-semibold tracking-[-0.02em] mb-2 leading-[1.25]',
      6: 'text-base font-medium tracking-[-0.015em] mb-2 leading-[1.35]',
    },
  },
  defaultVariants: {
    level: 2,
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  children: ReactNode;
}

export function Heading({ className, level = 2, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  return (
    <Tag className={cn(headingVariants({ level, className }))} {...props}>
      {children}
    </Tag>
  );
}
