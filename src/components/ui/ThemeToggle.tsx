'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { m, AnimatePresence } from 'motion/react';

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="border-foreground/10 bg-foreground/5 flex h-9 w-9 items-center justify-center rounded-full border opacity-0"></div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="border-foreground/10 bg-foreground/5 text-foreground hover:bg-foreground/10 hover:border-foreground/20 focus-visible:ring-foreground relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border transition-all focus-visible:ring-2 focus-visible:outline-none"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <m.div
            key="moon"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: 'backOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon className="h-4 w-4" />
          </m.div>
        ) : (
          <m.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3, ease: 'backOut' }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun className="h-4 w-4" />
          </m.div>
        )}
      </AnimatePresence>
    </button>
  );
}
