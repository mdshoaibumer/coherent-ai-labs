import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { cn } from '../../lib/utils';

interface HeroLayoutProps {
  children: React.ReactNode;
  background?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function HeroLayout({ children, background, className, containerClassName }: HeroLayoutProps) {
  return (
    <Section className={cn("relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden", className)}>
      {background && <div className="absolute inset-0 z-0">{background}</div>}
      <Container className={cn("relative z-10 w-full", containerClassName)}>
        {children}
      </Container>
    </Section>
  );
}
