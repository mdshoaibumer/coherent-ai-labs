import React from 'react';

interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export function SplitLayout({ leftContent, rightContent }: SplitLayoutProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col lg:flex-row">
      <div className="border-border flex flex-1 items-center justify-center border-b p-8 lg:w-1/2 lg:border-r lg:border-b-0 lg:p-16">
        <div className="w-full max-w-md">{leftContent}</div>
      </div>
      <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-white/[0.02] p-8 lg:w-1/2 lg:p-16">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent" />
        <div className="relative z-10 w-full max-w-xl">{rightContent}</div>
      </div>
    </div>
  );
}
