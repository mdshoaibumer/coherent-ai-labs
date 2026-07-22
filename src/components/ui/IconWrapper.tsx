import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const iconWrapperVariants = cva(
  'flex items-center justify-center shrink-0 border transition-all duration-500',
  {
    variants: {
      variant: {
        default: 'bg-white/5 text-muted-foreground border-border',
        active: 'bg-white text-black border-white',
        dark: 'bg-[#111] text-muted-foreground/70 border-border group-hover:border-border-hover',
      },
      size: {
        sm: 'w-10 h-10 rounded-lg',
        default: 'w-12 h-12 rounded-xl',
        lg: 'w-16 h-16 rounded-2xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface IconWrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconWrapperVariants> {
  children: ReactNode;
}

export function IconWrapper({ className, variant, size, children, ...props }: IconWrapperProps) {
  return (
    <div className={cn(iconWrapperVariants({ variant, size, className }))} {...props}>
      {children}
    </div>
  );
}
