import { ReactNode } from 'react';
import { cn } from '../../lib/utils';

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: ReactNode;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  background,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('bg-background relative overflow-hidden py-28 md:py-36', className)}
    >
      {background}
      <div className={cn('relative z-10 mx-auto max-w-7xl px-6', containerClassName)}>
        {children}
      </div>
    </section>
  );
}
