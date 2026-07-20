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
      <SectionTransition variant="glow" />
      <EnterpriseTrust />
      <SectionTransition variant="sweep" />
      <ProblemStatement />
      <SectionTransition variant="glow" />
      <WorkflowTransformation />
      <SectionTransition variant="sweep" />
      <CoreServices />
      <SectionTransition variant="glow" />
      <MidPageCTA />
      <SectionTransition variant="sweep" />
      <PlatformCapabilities />
      <SectionTransition variant="fade" />
      <Industries />
      <SectionTransition variant="sweep" />
      <WhyUs />
      <SectionTransition variant="glow" />
      <Comparison />
      <SectionTransition variant="sweep" />
      <TechStack />
      <SectionTransition variant="sweep" />
      <FeaturedProject />
      <SectionTransition variant="glow" />
      <Testimonials />
      <SectionTransition variant="fade" />
      <FAQ />
      <SectionTransition variant="glow" />
      <FinalCTA />
    </>
  );
}
