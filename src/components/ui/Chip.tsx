import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const chipVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-colors border',
  {
    variants: {
      variant: {
        default:
          'bg-accent border-border text-muted-foreground hover:text-foreground hover:border-border-hover',
        active:
          'bg-white/10 border-white/40 text-foreground shadow-[0_0_30px_rgba(255,255,255,0.1)]',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ChipProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof chipVariants> {
  children: ReactNode;
}

export function Chip({ className, variant, size, children, ...props }: ChipProps) {
  return (
    <span className={cn(chipVariants({ variant, size, className }))} {...props}>
      {children}
    </span>
  );
}
