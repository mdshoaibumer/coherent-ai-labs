import { Hero } from "../components/sections/Hero";
import { EnterpriseTrust } from "../components/sections/EnterpriseTrust";
import { ProblemStatement } from "../components/sections/ProblemStatement";
import { WorkflowTransformation } from "../components/sections/WorkflowTransformation";
import { CoreServices } from "../components/sections/CoreServices";
import { PlatformCapabilities } from "../components/sections/PlatformCapabilities";
import { Industries } from "../components/sections/Industries";
import { WhyUs } from "../components/sections/WhyUs";
import { TechStack } from "../components/sections/TechStack";
import { FeaturedProject } from "../components/sections/FeaturedProject";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { FinalCTA } from "../components/sections/FinalCTA";
import { SectionTransition } from "../components/animations/SectionTransition";
import { MidPageCTA } from "../components/sections/MidPageCTA";
import { Comparison } from "../components/sections/Comparison";

export default function Home() {
  return (
    <>
      <Hero />
      <SectionTransition variant="glowPremium" />
      <EnterpriseTrust />
      <SectionTransition variant="sweepPremium" />
      <ProblemStatement />
      <SectionTransition variant="glowPremium" />
      <WorkflowTransformation />
      <SectionTransition variant="sweepPremium" />
      <CoreServices />
      <SectionTransition variant="glowPremium" />
      <MidPageCTA />
      <SectionTransition variant="sweepPremium" />
      <PlatformCapabilities />
      <SectionTransition variant="fade" />
      <Industries />
      <SectionTransition variant="sweepPremium" />
      <WhyUs />
      <SectionTransition variant="glowPremium" />
      <Comparison />
      <SectionTransition variant="sweepPremium" />
      <TechStack />
      <SectionTransition variant="sweepPremium" />
      <FeaturedProject />
      <SectionTransition variant="glowPremium" />
      <Testimonials />
      <SectionTransition variant="fade" />
      <FAQ />
      <SectionTransition variant="glowPremium" />
      <FinalCTA />
    </>
  );
}
