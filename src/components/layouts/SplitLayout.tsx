import React from 'react';

interface SplitLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}

export function SplitLayout({ leftContent, rightContent }: SplitLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#020202] text-white">
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10">
        <div className="w-full max-w-md">
          {leftContent}
        </div>
      </div>
      <div className="flex-1 lg:w-1/2 flex items-center justify-center p-8 lg:p-16 relative overflow-hidden bg-white/[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent pointer-events-none" />
        <div className="w-full max-w-xl relative z-10">
          {rightContent}
        </div>
      </div>
    </div>
  );
}
