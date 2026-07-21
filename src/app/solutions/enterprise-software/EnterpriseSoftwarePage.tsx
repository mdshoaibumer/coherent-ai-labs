"use client";
import {
  Layers, Server, Database, Shield, Key,
  GitBranch, Cloud, Network, Activity, Lock,
  Users, Settings, Cpu, Workflow,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "Enterprise Software",
  title: "Full-Stack Applications Built for the AI Era.",
  description:
    "We engineer bespoke enterprise platforms with clean architecture, API-first design, microservices patterns, and AI-native capabilities — purpose-built for your business requirements.",

  problem: {
    headline: "Legacy Systems Were Not Designed for Modern Intelligence.",
    description:
      "Existing enterprise software was built for a pre-AI world. Monolithic architectures, rigid data models, and tightly-coupled integrations make it nearly impossible to embed intelligent automation without a complete rebuild.",
    painPoints: [
      "Monolithic codebases make changes slow, risky, and expensive — simple features take months",
      "Technical debt compounds annually — maintenance costs consume 70% of engineering budgets",
      "No API layer means AI systems cannot programmatically interact with business logic",
      "Authentication and authorization were bolted on — security vulnerabilities accumulate",
      "Scaling requires vertical hardware upgrades instead of horizontal cloud elasticity",
    ],
  },

  features: [
    { title: "Microservices Architecture", description: "Independently deployable services with clear domain boundaries, enabling parallel development and targeted scaling.", icon: Layers },
    { title: "API-First Design", description: "Every capability exposed via versioned REST or GraphQL APIs — enabling AI agents, mobile apps, and third-party integrations.", icon: Network },
    { title: "Authentication & RBAC", description: "Enterprise SSO, MFA, and granular role-based access built into the foundation — not bolted on later.", icon: Key },
    { title: "Cloud-Native Infrastructure", description: "Containerized deployments on Kubernetes with auto-scaling, health checks, and zero-downtime releases.", icon: Cloud },
    { title: "AI-Ready Architecture", description: "Built-in hooks for LLM integration, vector search, agent orchestration, and intelligent automation from day one.", icon: Cpu },
    { title: "Observability & Monitoring", description: "Distributed tracing, structured logging, health dashboards, and alerting across all services.", icon: Activity },
  ],

  architecture: {
    title: "Enterprise Architecture Patterns",
    description: "Clean architecture with domain-driven design, event sourcing, and CQRS patterns for complex enterprise requirements.",
    layers: [
      { label: "Presentation", items: ["React/Next.js", "Design System", "Responsive UI", "Accessibility"] },
      { label: "API Gateway", items: ["REST", "GraphQL", "Rate Limiting", "Auth Middleware", "Versioning"] },
      { label: "Application Services", items: ["Business Logic", "Domain Events", "CQRS", "Saga Orchestration"] },
      { label: "Data Layer", items: ["PostgreSQL", "Redis", "Elasticsearch", "Event Store", "S3"] },
      { label: "Infrastructure", items: ["Kubernetes", "Docker", "Terraform", "CI/CD", "Service Mesh"] },
      { label: "Cross-Cutting", items: ["Auth/AuthZ", "Logging", "Tracing", "Feature Flags", "Config Management"] },
    ],
  },

  techStack: [
    { category: "Backend", items: ["Node.js", "Python", "Go", "TypeScript", "Rust"] },
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Design Systems"] },
    { category: "Databases", items: ["PostgreSQL", "Redis", "MongoDB", "Elasticsearch", "TimescaleDB"] },
    { category: "Infrastructure", items: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "Docker"] },
    { category: "Architecture", items: ["Microservices", "Event-Driven", "CQRS", "DDD", "Hexagonal"] },
    { category: "Quality", items: ["Jest", "Playwright", "K6", "SonarQube", "GitHub Actions"] },
  ],

  process: [
    { step: "01", title: "Requirements & Domain Modeling", description: "Deep-dive into business domains, map bounded contexts, and define system capabilities." },
    { step: "02", title: "Architecture & Technical Design", description: "Design service topology, data models, API contracts, and infrastructure requirements." },
    { step: "03", title: "Iterative Development", description: "Build in 2-week sprints with continuous integration, automated testing, and stakeholder demos." },
    { step: "04", title: "Production & Operations", description: "Deploy with observability, runbooks, SLA monitoring, and long-term support agreements." },
  ],

  benefits: [
    { value: "3x", label: "Faster Feature Delivery" },
    { value: "99.99%", label: "Platform Availability" },
    { value: "60%", label: "Lower Maintenance Cost" },
    { value: "∞", label: "Horizontal Scalability" },
  ],

  faqs: [
    { id: "es-1", title: "Can you modernize our existing system without a full rewrite?", content: "Yes. We use strangler fig patterns to incrementally extract services from monoliths. Your existing system continues operating while we progressively replace modules with modern architecture." },
    { id: "es-2", title: "How do you handle data migration?", content: "We implement dual-write patterns with automated verification. Data integrity is validated at every stage. Rollback procedures are defined before any migration begins." },
    { id: "es-3", title: "What does long-term support look like?", content: "We offer ongoing engineering partnerships — dedicated engineers, SLA-backed response times, proactive monitoring, security patching, and quarterly architecture reviews." },
    { id: "es-4", title: "How do you ensure code quality at scale?", content: "Automated testing (unit, integration, e2e), code review standards, CI/CD pipelines with quality gates, architectural decision records, and comprehensive documentation." },
    { id: "es-5", title: "Can the architecture support AI integration later?", content: "Every system we build is AI-ready by default. API-first design means AI agents can interact with any business capability. Vector search and LLM hooks are included in the foundation." },
  ],
};

export function EnterpriseSoftwarePage() {
  return <SolutionPageLayout data={data} />;
}
