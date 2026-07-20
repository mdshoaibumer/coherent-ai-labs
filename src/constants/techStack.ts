import { Brain, Terminal, Cloud, Database, Shield, Workflow } from "lucide-react";
import { TechCategory } from "../types";

export const CATEGORIES: TechCategory[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: Brain,
    items: ["AI Agents", "LLM Integration", "RAG", "MCP", "Prompt Orchestration", "Multi-Agent Systems"],
    purpose: "Provides the cognitive reasoning, decision-making, and generative capabilities of the system.",
    value: "Transforms static software into adaptive, intelligent systems that can automate complex cognitive tasks.",
    useCases: ["Autonomous workflows", "Semantic enterprise search", "Intelligent data extraction"],
    relations: "Connects with the Data layer for grounding; Orchestrated via the Automation layer."
  },
  {
    id: "software",
    title: "Software Engineering",
    icon: Terminal,
    items: ["Web Applications", "Mobile Applications", "Desktop Applications", "Enterprise Platforms", "API Development"],
    purpose: "The tangible interfaces and robust backend services that users and other systems interact with.",
    value: "Delivers the intelligence through high-performance, accessible, and scalable applications.",
    useCases: ["Internal corporate dashboards", "Customer-facing mobile apps", "B2B SaaS platforms"],
    relations: "Consumes AI models via secure APIs; Deployed on Cloud & DevOps infrastructure."
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"],
    purpose: "The foundational infrastructure that hosts, scales, and delivers the applications and AI models.",
    value: "Ensures 99.99% uptime, global scalability, and rapid, reliable software release cycles.",
    useCases: ["Global content delivery", "Auto-scaling AI agent swarms", "Zero-downtime rolling deployments"],
    relations: "Hosts all other ecosystem layers; Protected and monitored by the Security layer."
  },
  {
    id: "data",
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "Redis", "Vector Databases", "Object Storage", "Analytics"],
    purpose: "The memory and persistent state of the enterprise, structured for rapid semantic and relational retrieval.",
    value: "Provides the necessary context and historical truth required for AI to make accurate, grounded decisions.",
    useCases: ["Vector embeddings for RAG systems", "High-speed session caching", "Long-term compliance audit storage"],
    relations: "Queried continuously by AI Agents; Encrypted and protected by the Security layer."
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    items: ["Authentication", "RBAC", "Encryption", "Audit Logs", "Secure APIs"],
    purpose: "The defensive perimeter and internal access control system protecting proprietary data and models.",
    value: "Ensures strict enterprise compliance, data privacy, and protection against adversarial AI threats.",
    useCases: ["HIPAA/SOC2 compliance enforcement", "Granular agent permissions", "End-to-end data encryption"],
    relations: "Wraps all Data and Software components; Implements guardrails for Artificial Intelligence."
  },
  {
    id: "automation",
    title: "Automation",
    icon: Workflow,
    items: ["Workflow Engines", "Business Rules", "Notifications", "Integrations", "Event Processing"],
    purpose: "The connective tissue that triggers automated actions based on system events or AI decisions.",
    value: "Closes the loop between insight and action, completely replacing human manual intervention.",
    useCases: ["Automated email dispatch", "CRM record updating", "Multi-step algorithmic approval routing"],
    relations: "Triggered by AI reasoning; Executes logic via internal and external Software APIs."
  }
];
