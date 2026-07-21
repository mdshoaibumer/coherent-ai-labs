"use client";
import {
  AppWindow, Globe, Zap, Search, Eye, Shield,
  Smartphone, Layers, Activity, Server, Palette, Code,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "Web Applications",
  title: "Modern Web Experiences That Scale Globally.",
  description:
    "We engineer high-performance web applications with server-side rendering, progressive enhancement, and AI-powered capabilities — delivering native-like experiences through the browser.",

  problem: {
    headline: "Slow, Inaccessible Web Apps Lose Users and Revenue.",
    description:
      "Most enterprise web applications were built with outdated paradigms — heavy client bundles, poor SEO, accessibility gaps, and brittle state management. Users leave within 3 seconds if performance lags.",
    painPoints: [
      "Page load times exceed 5 seconds — 40% of users abandon before first interaction",
      "Zero SEO visibility means organic discovery is impossible for SaaS platforms",
      "Accessibility gaps exclude 15% of users and create legal compliance risk",
      "Inconsistent UI across features erodes trust and increases support tickets",
      "No offline capability or progressive enhancement — total dependency on network",
    ],
  },

  features: [
    { title: "Server-Side Rendering", description: "Pages render on the server for instant perceived load, SEO indexability, and optimal Core Web Vitals scores.", icon: Server },
    { title: "Progressive Enhancement", description: "Core functionality works without JavaScript. Interactions layer on progressively for resilient, accessible experiences.", icon: Layers },
    { title: "Design System Architecture", description: "Component library with consistent tokens, accessibility built-in, and design-dev alignment from day one.", icon: Palette },
    { title: "Performance Engineering", description: "Code splitting, lazy loading, image optimization, and edge caching for sub-second load times globally.", icon: Zap },
    { title: "SEO & Discoverability", description: "Semantic HTML, structured data, meta optimization, and sitemap generation for maximum organic visibility.", icon: Search },
    { title: "Accessibility (WCAG 2.1 AA)", description: "Keyboard navigation, screen reader support, color contrast, focus management, and ARIA patterns throughout.", icon: Eye },
  ],

  architecture: {
    title: "Web Application Architecture",
    description: "Modern Jamstack and server-rendered patterns optimized for performance, SEO, and developer productivity.",
    layers: [
      { label: "Rendering", items: ["SSR", "SSG", "ISR", "Streaming", "Edge Functions"] },
      { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Design System", "State Management"] },
      { label: "API Layer", items: ["REST", "GraphQL", "tRPC", "WebSockets", "Server Actions"] },
      { label: "Performance", items: ["CDN", "Edge Caching", "Image Optimization", "Code Splitting", "Prefetching"] },
      { label: "Quality", items: ["Lighthouse CI", "Playwright E2E", "Accessibility Audit", "Visual Regression"] },
      { label: "Deployment", items: ["Vercel", "AWS", "Cloudflare", "Docker", "CI/CD Pipelines"] },
    ],
  },

  techStack: [
    { category: "Framework", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
    { category: "State & Data", items: ["React Query", "Zustand", "SWR", "tRPC", "Prisma"] },
    { category: "Testing", items: ["Playwright", "Vitest", "Testing Library", "Storybook", "Chromatic"] },
    { category: "Performance", items: ["Lighthouse", "Web Vitals", "Bundle Analyzer", "Edge Functions"] },
    { category: "Hosting", items: ["Vercel", "AWS Amplify", "Cloudflare Pages", "Docker/K8s"] },
    { category: "Tooling", items: ["ESLint", "Prettier", "Husky", "GitHub Actions", "Sentry"] },
  ],

  process: [
    { step: "01", title: "UX & Architecture", description: "Define information architecture, user flows, component strategy, and technical requirements." },
    { step: "02", title: "Design System", description: "Build the token-based component library ensuring consistency, accessibility, and rapid iteration." },
    { step: "03", title: "Development Sprints", description: "Iterative feature delivery with automated testing, performance budgets, and accessibility checks." },
    { step: "04", title: "Launch & Optimize", description: "Production deployment with monitoring, A/B testing infrastructure, and continuous performance optimization." },
  ],

  benefits: [
    { value: "< 1s", label: "Time to Interactive" },
    { value: "100", label: "Lighthouse Score" },
    { value: "WCAG AA", label: "Accessibility" },
    { value: "Global", label: "Edge Deployment" },
  ],

  faqs: [
    { id: "web-1", title: "Do you build SPAs or server-rendered applications?", content: "We recommend hybrid approaches using Next.js — server-rendered pages for SEO and performance with client-side interactivity where needed. Pure SPAs are used only when SEO is irrelevant (internal tools)." },
    { id: "web-2", title: "How do you handle real-time features?", content: "WebSockets for bidirectional communication, Server-Sent Events for one-way updates, and optimistic UI patterns for perceived instant responses. Infrastructure includes Redis pub/sub and managed WebSocket services." },
    { id: "web-3", title: "Can you integrate AI features into the web app?", content: "Every web application we build is AI-ready. We integrate streaming LLM responses, semantic search, AI copilots, and intelligent forms directly into the frontend experience." },
    { id: "web-4", title: "How do you ensure long-term maintainability?", content: "TypeScript for type safety, comprehensive test suites, design system documentation, architectural decision records, and clean separation of concerns. We also provide ongoing engineering partnerships." },
  ],
};

export function WebApplicationsPage() {
  return <SolutionPageLayout data={data} />;
}
