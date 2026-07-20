import React from 'react';
import { Container } from '../ui/Container';

interface DocumentationLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header?: React.ReactNode;
}

export function DocumentationLayout({ children, sidebar, header }: DocumentationLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col">
      {header && <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020202]/80 backdrop-blur-md">{header}</header>}
      <Container className="flex-1 flex flex-col md:flex-row gap-8 py-8">
        <aside className="w-full md:w-64 shrink-0 md:sticky md:top-24 md:h-[calc(100vh-8rem)] overflow-y-auto pr-4">
          {sidebar}
        </aside>
        <main className="flex-1 min-w-0 pb-16">
          {children}
        </main>
      </Container>
    </div>
  );
}
