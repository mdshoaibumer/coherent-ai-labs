import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import { Button } from "./ui/Button";
import { Heading } from "./ui/Heading";
import { Text } from "./ui/Text";
import { ReactNode } from "react";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020202] text-white p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-red-500/20">
          <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <Heading level={2} className="text-white">Something went wrong</Heading>
        <Text className="text-[#888]">{error instanceof Error ? error.message : String(error)}</Text>
        <div className="pt-4 flex justify-center gap-4">
          <Button onClick={() => window.location.href = '/'}>Go Home</Button>
          <Button variant="outline" onClick={resetErrorBoundary}>Try again</Button>
        </div>
      </div>
    </div>
  );
}

export function GlobalErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ErrorBoundary>
  );
}
