import React from 'react';

interface LandingLayoutProps {
  children: React.ReactNode;
}

export function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="min-h-screen bg-[#020202] text-white flex flex-col">
      <main className="flex-1">
        {/* Children will typically be full-width Sections with their own Containers */}
        {children}
      </main>
    </div>
  );
}
