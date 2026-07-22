import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'w-full sm:w-auto rounded-full font-medium transition-all duration-500 flex items-center justify-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring outline-none shrink-0 tracking-[-0.01em] cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-foreground text-background hover:opacity-90 hover:scale-[1.02] active:scale-[0.97] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)]',
        secondary:
          'bg-secondary text-secondary-foreground border border-border hover:bg-accent hover:border-border-hover hover:shadow-[var(--shadow-sm)]',
        outline:
          'bg-transparent text-foreground border border-border hover:bg-accent hover:border-border-hover hover:shadow-[var(--shadow-sm)]',
        ghost: 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-accent',
        premium:
          'bg-foreground text-background hover:scale-[1.03] active:scale-[0.96] shadow-[var(--shadow-lg)] hover:shadow-[var(--shadow-xl)] relative overflow-hidden',
      },
      size: {
        default: 'px-7 py-3.5 text-sm',
        sm: 'px-4 py-2.5 text-xs',
        lg: 'px-9 py-4.5 text-base',
        icon: 'p-2.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, icon, children, ...props }, ref) => {
    return (
      <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props}>
        {icon}
        {children}
      </button>
    );
  },
);
Button.displayName = 'Button';
