import { lazy } from "react";
import { Hero } from "../components/sections/Hero";
import { LazySection } from "../components/ui/LazySection";

const EnterpriseTrust = lazy(() => import("../components/sections/EnterpriseTrust").then(m => ({ default: m.EnterpriseTrust })));
const ProblemStatement = lazy(() => import("../components/sections/ProblemStatement").then(m => ({ default: m.ProblemStatement })));
const WorkflowTransformation = lazy(() => import("../components/sections/WorkflowTransformation").then(m => ({ default: m.WorkflowTransformation })));
const CoreServices = lazy(() => import("../components/sections/CoreServices").then(m => ({ default: m.CoreServices })));
const PlatformCapabilities = lazy(() => import("../components/sections/PlatformCapabilities").then(m => ({ default: m.PlatformCapabilities })));
const Industries = lazy(() => import("../components/sections/Industries").then(m => ({ default: m.Industries })));
const WhyUs = lazy(() => import("../components/sections/WhyUs").then(m => ({ default: m.WhyUs })));
const TechStack = lazy(() => import("../components/sections/TechStack").then(m => ({ default: m.TechStack })));
const FeaturedProject = lazy(() => import("../components/sections/FeaturedProject").then(m => ({ default: m.FeaturedProject })));
const Testimonials = lazy(() => import("../components/sections/Testimonials").then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import("../components/sections/FAQ").then(m => ({ default: m.FAQ })));
const FinalCTA = lazy(() => import("../components/sections/FinalCTA").then(m => ({ default: m.FinalCTA })));

export function Home() {
  return (
    <>
      <Hero />
      <LazySection><EnterpriseTrust /></LazySection>
      <LazySection><ProblemStatement /></LazySection>
      <LazySection><WorkflowTransformation /></LazySection>
      <LazySection><CoreServices /></LazySection>
      <LazySection><PlatformCapabilities /></LazySection>
      <LazySection><Industries /></LazySection>
      <LazySection><WhyUs /></LazySection>
      <LazySection><TechStack /></LazySection>
      <LazySection><FeaturedProject /></LazySection>
      <LazySection><Testimonials /></LazySection>
      <LazySection><FAQ /></LazySection>
      <LazySection><FinalCTA /></LazySection>
    </>
  );
}
