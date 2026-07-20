import { Database, Users, FileText, Mail, Network, Brain, HardDrive, Search, Cpu, Bot, Lightbulb, Blocks, Zap, ShieldCheck, Layers, Clock, Target, TrendingDown, LucideIcon } from "lucide-react";

export type LayerData = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: { name: string; icon: LucideIcon }[];
  description: string;
  businessValue: string;
  technologies: string[];
  useCases: string[];
};

export const LAYERS: LayerData[] = [
  {
    id: "data-sources",
    title: "Data Sources",
    icon: Database,
    items: [
      { name: "ERP", icon: Database },
      { name: "CRM", icon: Users },
      { name: "Documents", icon: FileText },
      { name: "Emails", icon: Mail },
      { name: "APIs", icon: Network },
    ],
    description: "Ingest unstructured and structured data from across your entire enterprise ecosystem in real-time.",
    businessValue: "Breaks down data silos and creates a unified data fabric for AI operations.",
    technologies: ["Fivetran", "Airbyte", "Kafka", "REST/GraphQL"],
    useCases: ["Invoice processing", "Customer support context", "Historical sales data extraction"],
  },
  {
    id: "knowledge-layer",
    title: "Knowledge Layer",
    icon: Brain,
    items: [
      { name: "RAG", icon: Network },
      { name: "Knowledge Base", icon: HardDrive },
      { name: "Vector DB", icon: Database },
      { name: "Enterprise Search", icon: Search },
    ],
    description: "Transforms raw data into semantic embeddings, creating a highly searchable, context-aware memory bank.",
    businessValue: "Ensures AI outputs are factually grounded in your proprietary company data, eliminating hallucinations.",
    technologies: ["Pinecone", "Weaviate", "pgvector", "LangChain"],
    useCases: ["Semantic knowledge retrieval", "Contract analysis", "Policy querying"],
  },
  {
    id: "ai-intelligence",
    title: "AI Intelligence Layer",
    icon: Cpu,
    items: [
      { name: "LLMs", icon: Cpu },
      { name: "AI Agents", icon: Bot },
      { name: "Reasoning", icon: Lightbulb },
      { name: "Tool Calling", icon: Blocks },
      { name: "Planning", icon: Target },
      { name: "MCP", icon: Network },
    ],
    description: "Autonomous agents analyze context, reason through multi-step problems, and formulate execution plans.",
    businessValue: "Replaces manual human cognitive load with scalable, deterministic AI reasoning.",
    technologies: ["GPT-4o", "Claude 3.5", "Gemini 1.5", "AutoGen"],
    useCases: ["Workflow orchestration", "Anomaly detection", "Decision support"],
  },
  {
    id: "execution-layer",
    title: "Execution Layer",
    icon: Zap,
    items: [
      { name: "Business Rules", icon: ShieldCheck },
      { name: "Approvals", icon: Users },
      { name: "Automation", icon: Zap },
      { name: "Notifications", icon: Mail },
      { name: "Scheduling", icon: Clock },
      { name: "Integrations", icon: Layers },
    ],
    description: "Translates AI reasoning into tangible actions, updating external systems and triggering workflows.",
    businessValue: "Closes the loop from insight to action instantly, without requiring human intervention.",
    technologies: ["Temporal", "AWS Step Functions", "Zapier", "Custom Webhooks"],
    useCases: ["CRM record updating", "Automated email replies", "Payment orchestration"],
  },
  {
    id: "business-outcomes",
    title: "Business Outcomes",
    icon: Target,
    items: [
      { name: "Time Saved", icon: Clock },
      { name: "Higher Accuracy", icon: Target },
      { name: "Lower Costs", icon: TrendingDown },
      { name: "Faster Decisions", icon: Zap },
      { name: "Scalable Operations", icon: Layers },
    ],
    description: "The compounding effect of intelligent automation applied across your organization at scale.",
    businessValue: "Exponential ROI, unbounded scalability, and freedom to focus on strategic growth.",
    technologies: ["Analytics", "Datadog", "PowerBI"],
    useCases: ["Operating margin expansion", "24/7 SLA compliance", "Zero-error processing"],
  }
];
