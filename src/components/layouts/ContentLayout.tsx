import React from 'react';
import { Container } from '../ui/Container';

interface ContentLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export function ContentLayout({ children, header }: ContentLayoutProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      {header && <header className="w-full">{header}</header>}
      <main className="flex-1 py-16 md:py-24">
        <Container className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-a:text-[var(--color-primary)] mx-auto max-w-3xl">
          {children}
        </Container>
      </main>
    </div>
  );
}
