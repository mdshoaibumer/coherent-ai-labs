'use client';
import { ArrowRight } from 'lucide-react';
import { m } from 'motion/react';
import Link from 'next/link';
import {
  PLATFORM_ITEMS,
  SOLUTIONS_ITEMS,
  RESOURCES_ITEMS,
  COMPANY_ITEMS,
} from '../../../constants/navigation';
import { MobileAccordion } from '../../ui/MobileAccordion';

import { ThemeToggle } from '../../ui/ThemeToggle';

interface MobileNavigationProps {
  onClose: () => void;
}

export function MobileNavigation({ onClose }: MobileNavigationProps) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-background/95 fixed inset-0 z-40 flex flex-col overflow-y-auto px-6 pt-24 pb-6 backdrop-blur-2xl lg:hidden"
    >
      <m.nav
        aria-label="Mobile Navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-1 flex-col"
      >
        <MobileAccordion title="Platform" items={PLATFORM_ITEMS} />
        <MobileAccordion title="Solutions" items={SOLUTIONS_ITEMS} />

        <Link
          href="/services"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground border-border w-full border-b py-4 text-xl font-medium transition-colors focus-visible:outline-none"
        >
          Services
        </Link>
        <Link
          href="/industries"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground border-border w-full border-b py-4 text-xl font-medium transition-colors focus-visible:outline-none"
        >
          Industries
        </Link>
        <Link
          href="/case-studies"
          onClick={onClose}
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground border-border w-full border-b py-4 text-xl font-medium transition-colors focus-visible:outline-none"
        >
          Case Studies
        </Link>

        <MobileAccordion title="Resources" items={RESOURCES_ITEMS} />
        <MobileAccordion title="Company" items={COMPANY_ITEMS} />

        <div className="mt-auto flex flex-col gap-4 pt-8">
          <div className="mb-4 flex justify-center">
            <ThemeToggle />
          </div>
          <Link
            href="/contact"
            onClick={onClose}
            className="text-foreground border-foreground/20 hover:bg-foreground/5 focus-visible:ring-foreground w-full rounded-xl border bg-transparent px-6 py-4 text-center text-lg font-medium transition-colors focus-visible:ring-2 focus-visible:outline-none"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="bg-foreground text-background focus-visible:ring-foreground flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 text-center text-lg font-medium transition-colors hover:opacity-90 focus-visible:ring-2 focus-visible:outline-none"
          >
            Book Discovery Call
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </m.nav>
    </m.div>
  );
}
