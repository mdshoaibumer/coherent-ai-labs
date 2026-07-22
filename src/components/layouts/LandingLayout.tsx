import React from 'react';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="bg-background flex min-h-screen flex-col text-white">
      <main className="flex-1">
        {/* Children will typically be full-width Sections with their own Containers */}
        {children}
      </main>
    </div>
  );
}
