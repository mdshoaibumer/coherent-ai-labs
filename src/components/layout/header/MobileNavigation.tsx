"use client";
import { ArrowRight } from "lucide-react";
import { m } from "motion/react";
import Link from "next/link";
import { PLATFORM_ITEMS, SOLUTIONS_ITEMS, RESOURCES_ITEMS, COMPANY_ITEMS } from "../../../constants/navigation";
import { MobileAccordion } from "../../ui/MobileAccordion";

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
      className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col pt-24 pb-6 px-6 lg:hidden overflow-y-auto"
    >
      <m.nav
        aria-label="Mobile Navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col flex-1"
      >
        <MobileAccordion title="Platform" items={PLATFORM_ITEMS} />
        <MobileAccordion title="Solutions" items={SOLUTIONS_ITEMS} />

        <Link
          href="/services"
          onClick={onClose}
          className="w-full py-4 text-xl font-medium text-[#aaa] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors border-b border-[#222]"
        >
          Services
        </Link>
        <Link
          href="/industries"
          onClick={onClose}
          className="w-full py-4 text-xl font-medium text-[#aaa] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors border-b border-[#222]"
        >
          Industries
        </Link>
        <Link
          href="/case-studies"
          onClick={onClose}
          className="w-full py-4 text-xl font-medium text-[#aaa] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors border-b border-[#222]"
        >
          Case Studies
        </Link>

        <MobileAccordion title="Resources" items={RESOURCES_ITEMS} />
        <MobileAccordion title="Company" items={COMPANY_ITEMS} />

        <div className="mt-auto pt-8 flex flex-col gap-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full bg-transparent text-white border border-[#333] px-6 py-4 text-center text-lg font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors rounded-xl"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full bg-white text-black px-6 py-4 text-center text-lg font-medium hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white transition-colors flex items-center justify-center gap-2 rounded-xl"
          >
            Book Discovery Call
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </m.nav>
    </m.div>
  );
}
