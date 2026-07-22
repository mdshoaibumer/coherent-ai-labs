'use client';
import { ArrowRight } from 'lucide-react';
import {
  PLATFORM_ITEMS,
  SOLUTIONS_ITEMS,
  RESOURCES_ITEMS,
  COMPANY_ITEMS,
} from '../../../constants/navigation';
import { MegaMenu } from '../../ui/MegaMenu';
import { MagneticButton } from '../../animations/MagneticButton';
import { ThemeToggle } from '../../ui/ThemeToggle';
import Link from 'next/link';

export function DesktopNavigation() {
  return (
    <>
      <nav aria-label="Main Navigation" className="hidden items-center gap-8 lg:flex">
        <Link
          href="/platform"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-6 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Platform
        </Link>
        <Link
          href="/solutions"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-6 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Solutions
        </Link>
        <Link
          href="/services"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-6 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Services
        </Link>

        <Link
          href="/industries"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-6 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Industries
        </Link>
        <Link
          href="/case-studies"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-6 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Case Studies
        </Link>

        <MegaMenu title="Resources" items={RESOURCES_ITEMS} columns={1} />
        <MegaMenu title="Company" items={COMPANY_ITEMS} columns={1} />
      </nav>

      {/* Desktop CTAs */}
      <div className="hidden items-center gap-4 lg:flex">
        <ThemeToggle />
        <Link
          href="/contact"
          className="text-muted-foreground hover:text-foreground focus-visible:text-foreground py-2 text-sm font-medium transition-colors focus-visible:outline-none"
        >
          Contact
        </Link>
        <Link href="/contact" className="block">
          <MagneticButton
            strength={20}
            className="bg-foreground text-background hover:shadow-glow focus-visible:ring-foreground focus-visible:ring-offset-background group flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-medium transition-all duration-300 hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Book Discovery Call
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </MagneticButton>
        </Link>
      </div>
    </>
  );
}
