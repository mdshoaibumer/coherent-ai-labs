import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { Button } from './ui/Button';
import { Heading } from './ui/Heading';
import { Text } from './ui/Text';
import { ReactNode } from 'react';

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div className="bg-background text-foreground flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 text-center">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
          <svg
            className="h-8 w-8 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <Heading level={2} className="text-foreground">
          Something went wrong
        </Heading>
        <Text className="text-muted-foreground">
          {error instanceof Error ? error.message : String(error)}
        </Text>
        <div className="flex justify-center gap-4 pt-4">
          <Button onClick={() => (window.location.href = '/')}>Go Home</Button>
          <Button variant="outline" onClick={resetErrorBoundary}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}

export function GlobalErrorBoundary({ children }: { children: ReactNode }) {
  return <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>;
}
