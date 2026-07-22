import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textVariants = cva('leading-relaxed tracking-[-0.01em]', {
  variants: {
    variant: {
      default: 'text-muted-foreground',
      primary: 'text-foreground',
      subtle: 'text-muted-foreground/70',
    },
    size: {
      xs: 'text-xs leading-normal',
      sm: 'text-sm leading-relaxed',
      default: 'text-base leading-[1.7]',
      lg: 'text-lg leading-[1.7]',
      xl: 'text-xl leading-[1.6]',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    weight: 'normal',
  },
});

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
  as?: 'p' | 'span' | 'div';
}

export function Text({
  className,
  variant,
  size,
  weight,
  as: Comp = 'p',
  children,
  ...props
}: TextProps) {
  return (
    <Comp className={cn(textVariants({ variant, size, weight, className }))} {...props}>
      {children}
    </Comp>
  );
}
