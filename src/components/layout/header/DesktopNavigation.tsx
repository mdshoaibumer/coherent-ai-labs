import { ArrowRight } from "lucide-react";
import { PLATFORM_ITEMS, SOLUTIONS_ITEMS, RESOURCES_ITEMS, COMPANY_ITEMS } from "../../../constants/navigation";
import { MegaMenu } from "../../ui/MegaMenu";
import Link from "next/link";

export function DesktopNavigation() {
  return (
    <>
      <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-8">
        <Link href="/platform" className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">Platform</Link>
        <Link href="/solutions" className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">Solutions</Link>
        <Link href="/services" className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">Services</Link>
        
        <Link href="/industries" className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">Industries</Link>
        <Link href="/case-studies" className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-6">Case Studies</Link>
        
        <MegaMenu title="Resources" items={RESOURCES_ITEMS} columns={1} />
        <MegaMenu title="Company" items={COMPANY_ITEMS} columns={1} />
      </nav>

      {/* Desktop CTAs */}
      <div className="hidden lg:flex items-center gap-4">
        <Link
          href="/contact"
          className="text-sm font-medium text-[#888] hover:text-white focus-visible:outline-none focus-visible:text-white transition-colors py-2"
        >
          Contact
        </Link>
        <Link
          href="/contact"
          className="text-sm font-medium bg-white text-black px-4 py-2 hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black transition-colors rounded-sm flex items-center gap-2 group"
        >
          Book Discovery Call
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </>
  );
}
