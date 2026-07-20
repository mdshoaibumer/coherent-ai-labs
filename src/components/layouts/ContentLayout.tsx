import React from 'react';
import { Container } from '../ui/Container';

interface ContentLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
}

export function ContentLayout({ children, header }: ContentLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col">
      {header && <header className="w-full">{header}</header>}
      <main className="flex-1 py-16 md:py-24">
        <Container className="max-w-3xl mx-auto prose prose-invert prose-p:text-[#888] prose-headings:text-white prose-a:text-[var(--color-primary)]">
          {children}
        </Container>
      </main>
    </div>
  );
}
