import { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: ReactNode;
}

export function SectionWrapper({ id, children, className, containerClassName, background }: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-32 bg-[#020202] relative overflow-hidden", className)}>
      {background}
      <div className={cn("max-w-7xl mx-auto px-6 relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
