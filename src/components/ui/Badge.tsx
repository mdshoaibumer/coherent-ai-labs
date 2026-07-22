import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-colors shrink-0',
  {
    variants: {
      variant: {
        default: 'border border-border bg-accent text-muted-foreground',
        primary: 'bg-foreground text-background',
        secondary: 'bg-secondary text-secondary-foreground',
        outline: 'border border-border text-foreground',
        glass: 'glass-panel text-muted-foreground',
        glow: 'bg-accent text-foreground border border-border shadow-[var(--shadow-glow)]',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  children: ReactNode;
  ping?: boolean;
}

export function Badge({ className, variant, children, ping, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props}>
      {ping && (
        <span className="relative mr-2 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--signal-color)] opacity-50"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--signal-color)]"></span>
        </span>
      )}
      {children}
    </div>
  );
}
