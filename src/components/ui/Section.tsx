import { ReactNode, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const sectionVariants = cva('relative overflow-hidden', {
  variants: {
    padding: {
      default: 'py-28 md:py-36',
      sm: 'py-16 md:py-20',
      lg: 'py-36 md:py-48',
      none: 'py-0',
    },
    background: {
      default: 'bg-background',
      muted: 'bg-muted',
    },
    border: {
      top: 'border-t border-border',
      bottom: 'border-b border-border',
      both: 'border-y border-border',
      none: '',
    },
  },
  defaultVariants: {
    padding: 'default',
    background: 'default',
    border: 'none',
  },
});

export interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: ReactNode;
  backgroundElement?: ReactNode;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, padding, background, border, children, backgroundElement, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionVariants({ padding, background, border, className }))}
        {...props}
      >
        {backgroundElement}
        <div className="relative z-10 h-full w-full">{children}</div>
      </section>
    );
  },
);
Section.displayName = 'Section';
