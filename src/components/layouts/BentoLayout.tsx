import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { cn } from '../../lib/utils';

interface BentoLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoLayout({ children, className }: BentoLayoutProps) {
  return (
    <Section className={className}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-[250px]">
          {/* 
            Children of BentoLayout should use generic tailwind classes to span columns/rows:
            e.g., <div className="md:col-span-2 md:row-span-2">...</div>
          */}
          {children}
        </div>
      </Container>
    </Section>
  );
}
