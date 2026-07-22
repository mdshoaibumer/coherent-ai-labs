import React, { Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export function LazySection({
  children,
  fallback = <div className="bg-background h-screen w-full" />,
}: LazySectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px', // Load before it comes into view
  });

  return (
    <div ref={ref}>{inView ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}</div>
  );
}
