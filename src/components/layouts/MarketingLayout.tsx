import React from 'react';

interface MarketingLayoutProps {
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function MarketingLayout({ children, header, footer }: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col selection:bg-[var(--color-primary)] selection:text-white">
      {header && <header className="sticky top-0 z-50 w-full">{header}</header>}
      <main className="flex-1">
        {children}
      </main>
      {footer && <footer className="border-t border-white/10 mt-auto">{footer}</footer>}
    </div>
  );
}
