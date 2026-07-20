import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {m, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { useHeaderScroll } from "../../hooks/useHeaderScroll";
import { DesktopNavigation } from "./header/DesktopNavigation";
import { MobileNavigation } from "./header/MobileNavigation";
import { Link } from "react-router-dom";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled, isHidden } = useHeaderScroll();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      <m.header
        initial={{ y: 0 }}
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-500",
          isScrolled 
            ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
            : "bg-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
            <div className="w-5 h-5 bg-white rounded-sm group-hover:scale-95 transition-transform" />
            <span className="font-display text-lg font-medium tracking-tight text-white">Coherent AI Labs</span>
          </Link>

          <DesktopNavigation />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white relative z-50 p-2 -mr-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <m.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 90 }} transition={{ duration: 0.2 }}>
                  <X className="w-6 h-6" />
                </m.div>
              ) : (
                <m.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: -90 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-6 h-6" />
                </m.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </m.header>

      <AnimatePresence>
        {mobileOpen && (
          <MobileNavigation onClose={() => setMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
