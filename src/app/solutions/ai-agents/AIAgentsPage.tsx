"use client";
import {
  Bot, Brain, Cpu, Database, Eye, GitBranch,
  Lightbulb, MessageSquare, Network, Search,
  Shield, Target, Workflow, Zap,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "AI Agents",
  title: "Autonomous Intelligence That Works for You.",
  description:
    "We engineer multi-agent systems that perceive context, reason through complex problems, plan multi-step solutions, and execute autonomously — replacing manual cognitive work at enterprise scale.",

  problem: {
    headline: "Manual Processes Cannot Scale with Business Complexity.",
    description:
      "Enterprise operations depend on human judgment for thousands of decisions daily. Each decision introduces latency, variance, and cost. As complexity grows, adding headcount creates linear returns against exponential demand.",
    painPoints: [
      "Knowledge workers spend 60% of their time on repetitive cognitive tasks that follow patterns",
      "Cross-system workflows require manual orchestration between disconnected tools and data sources",
      "Decision quality degrades under volume pressure — error rates increase with fatigue",
      "Institutional knowledge lives in people's heads, creating single points of failure",
      "Scaling operations means scaling headcount — a linear, expensive, and fragile approach",
    ],
  },

  features: [
    { title: "Multi-Agent Collaboration", description: "Specialized agents (Planner, Researcher, Executor, Reviewer) collaborate on complex tasks through structured communication protocols.", icon: Network },
    { title: "Autonomous Planning", description: "Agents decompose ambiguous goals into executable sub-tasks, dynamically adjusting plans based on intermediate results.", icon: Lightbulb },
    { title: "Tool Execution", description: "Agents call APIs, query databases, send emails, update CRMs, and trigger workflows through a secure tool-calling framework.", icon: Zap },
    { title: "Persistent Memory", description: "Cross-session state persistence enables agents to learn from past interactions and maintain context over time.", icon: Database },
    { title: "Reflection & Self-Correction", description: "Built-in evaluation loops where agents assess their own outputs against quality criteria before delivering results.", icon: Eye },
    { title: "Human-in-the-Loop", description: "Configurable approval gates for high-stakes decisions. Agents escalate when confidence is below threshold.", icon: Shield },
  ],

  architecture: {
    title: "Multi-Agent Architecture",
    description:
      "A layered system where specialized agents collaborate through shared memory, tool registries, and orchestration protocols.",
    layers: [
      { label: "Orchestration Layer", items: ["Task Router", "Agent Registry", "Priority Queue", "State Machine"] },
      { label: "Agent Runtime", items: ["Planner Agent", "Research Agent", "Execution Agent", "Review Agent"] },
      { label: "Knowledge Layer", items: ["Vector Store", "Semantic Cache", "Knowledge Graph", "Document Index"] },
      { label: "Tool Framework", items: ["API Connectors", "Database Adapters", "Email/SMS", "Webhook Triggers"] },
      { label: "Memory System", items: ["Short-term Context", "Long-term Memory", "Shared State", "Session History"] },
      { label: "Observability", items: ["Token Tracing", "Decision Logs", "Cost Attribution", "Performance Metrics"] },
    ],
  },

  techStack: [
    { category: "LLM Providers", items: ["GPT-4o", "Claude 3.5 Sonnet", "Gemini 1.5 Pro", "Llama 3", "Mistral"] },
    { category: "Agent Frameworks", items: ["LangGraph", "AutoGen", "CrewAI", "Custom Orchestrators"] },
    { category: "Vector Databases", items: ["Pinecone", "Weaviate", "pgvector", "Qdrant"] },
    { category: "Infrastructure", items: ["AWS", "Azure", "Kubernetes", "Temporal", "Redis"] },
    { category: "Protocols", items: ["MCP", "Function Calling", "ReAct", "Chain-of-Thought", "Tool Use"] },
    { category: "Observability", items: ["LangSmith", "OpenTelemetry", "Datadog", "Custom Dashboards"] },
  ],

  process: [
    { step: "01", title: "Discovery", description: "Map existing workflows, identify automation candidates, and define agent responsibilities." },
    { step: "02", title: "Architecture", description: "Design agent topology, tool registry, memory architecture, and orchestration patterns." },
    { step: "03", title: "Build & Test", description: "Implement agents with evaluation frameworks, adversarial testing, and human review loops." },
    { step: "04", title: "Deploy & Scale", description: "Production deployment with monitoring, auto-scaling, and continuous improvement pipelines." },
  ],

  benefits: [
    { value: "24/7", label: "Autonomous Operation" },
    { value: "90%", label: "Reduction in Manual Tasks" },
    { value: "10x", label: "Processing Speed" },
    { value: "0.02%", label: "Error Rate" },
  ],

  faqs: [
    { id: "agents-1", title: "How do AI agents differ from traditional automation?", content: "Traditional automation follows rigid if-then rules. AI agents perceive context, reason about goals, plan multi-step approaches, and adapt when conditions change. They handle ambiguity and novel situations that break rule-based systems." },
    { id: "agents-2", title: "Can agents handle sensitive enterprise data securely?", content: "Yes. Agents operate within your VPC with encrypted memory, RBAC-controlled tool access, and complete audit trails. No data leaves your security perimeter." },
    { id: "agents-3", title: "What happens when an agent makes a mistake?", content: "Agents include built-in reflection loops and confidence scoring. Low-confidence decisions are escalated to human reviewers. All decisions are logged and traceable for continuous improvement." },
    { id: "agents-4", title: "How long does it take to deploy a production agent system?", content: "Simple single-agent workflows: 2-4 weeks. Complex multi-agent orchestrations: 6-12 weeks. We deliver incrementally — you see value within the first sprint." },
    { id: "agents-5", title: "Do you support on-premise LLM deployment?", content: "Yes. We deploy open-source models (Llama, Mistral) within your infrastructure for complete data sovereignty. Hybrid architectures are also supported." },
  ],
};

export function AIAgentsPage() {
  return <SolutionPageLayout data={data} />;
}
