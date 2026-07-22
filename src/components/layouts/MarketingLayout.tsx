import React from 'react';

interface MarketingLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function MarketingLayout({ children, header, footer }: MarketingLayoutProps) {
  return (
    <div className="bg-background selection:text-foreground flex min-h-screen flex-col text-white selection:bg-[var(--color-primary)]">
      {header && <header className="sticky top-0 z-50 w-full">{header}</header>}
      <main className="flex-1">{children}</main>
      {footer && <footer className="border-border mt-auto border-t">{footer}</footer>}
    </div>
  );
}
