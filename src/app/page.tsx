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

export default function Home() {
  return (
    <>
      <Hero />
      <EnterpriseTrust />
      <ProblemStatement />
      <WorkflowTransformation />
      <CoreServices />
      <PlatformCapabilities />
      <Industries />
      <WhyUs />
      <TechStack />
      <FeaturedProject />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
