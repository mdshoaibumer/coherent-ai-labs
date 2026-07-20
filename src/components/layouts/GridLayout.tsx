import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { cn } from '../../lib/utils';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function GridLayout({ 
  children, 
  columns = { sm: 1, md: 2, lg: 3 },
  gap = 'lg',
  className 
}: GridLayoutProps) {
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8 lg:gap-12'
  };

  const gridClasses = [
    'grid',
    gapClasses[gap],
    columns.sm === 1 ? 'grid-cols-1' : `sm:grid-cols-${columns.sm}`,
    columns.md ? `md:grid-cols-${columns.md}` : '',
    columns.lg ? `lg:grid-cols-${columns.lg}` : ''
  ].filter(Boolean).join(' ');

  return (
    <Section className={className}>
      <Container>
        <div className={gridClasses}>
          {children}
        </div>
      </Container>
    </Section>
  );
}
