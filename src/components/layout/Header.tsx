'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { m, AnimatePresence } from 'motion/react';
import { cn } from '../../lib/utils';
import { useHeaderScroll } from '../../hooks/useHeaderScroll';
import { DesktopNavigation } from './header/DesktopNavigation';
import { MobileNavigation } from './header/MobileNavigation';
import Link from 'next/link';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled, isHidden } = useHeaderScroll();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  return (
    <>
      <m.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? '-100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 z-50 w-full transition-all duration-600',
          isScrolled
            ? 'border-border border-b bg-[var(--surface-overlay)] py-3 shadow-[var(--shadow-lg)] backdrop-blur-2xl'
            : 'bg-transparent py-5',
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
          <Link
            href="/"
            className="group focus-visible:ring-foreground relative z-50 flex items-center gap-3 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <div className="bg-foreground h-5 w-5 rounded-sm transition-transform group-hover:scale-95" />
            <span className="font-display text-foreground text-lg font-medium tracking-tight">
              Coherent AI Labs
            </span>
          </Link>

          <DesktopNavigation />

          {/* Mobile Menu Toggle */}
          <button
            className="text-foreground focus-visible:ring-foreground relative z-50 -mr-2 rounded-sm p-2 focus-visible:ring-2 focus-visible:outline-none lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <m.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </m.div>
              ) : (
                <m.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </m.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.header>

      <AnimatePresence>
        {mobileOpen && <MobileNavigation onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
