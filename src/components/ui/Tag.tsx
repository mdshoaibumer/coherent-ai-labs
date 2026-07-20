import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const tagVariants = cva(
  'inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#020202]',
  {
    variants: {
      variant: {
        default: 'bg-white/10 text-white hover:bg-white/20',
        primary: 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/80',
        outline: 'border border-white/20 text-white hover:bg-white/10',
      },
      size: {
        sm: 'px-2 py-0.5',
        md: 'px-2.5 py-1',
        lg: 'px-3 py-1.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {}

export function Tag({ className, variant, size, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)} {...props} />
  );
}
