import React from 'react';
import { Container } from '../ui/Container';

interface DocumentationLayoutProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header?: React.ReactNode;
}

export function DocumentationLayout({ children, sidebar, header }: DocumentationLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen flex-col text-white">
      {header && (
        <header className="border-border bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-md">
          {header}
        </header>
      )}
      <Container className="flex flex-1 flex-col gap-8 py-8 md:flex-row">
        <aside className="w-full shrink-0 overflow-y-auto pr-4 md:sticky md:top-24 md:h-[calc(100vh-8rem)] md:w-64">
          {sidebar}
        </aside>
        <main className="min-w-0 flex-1 pb-16">{children}</main>
      </Container>
    </div>
  );
}
