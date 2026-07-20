import { 
  Building, 
  Search, 
  Cpu, 
  Code2, 
  TrendingUp, 
  Users,
  Smartphone,
  BrainCircuit,
  Database,
  Server,
  LineChart
} from "lucide-react";
import { ProjectStage, ArchitectureNode } from "../types";

export const STAGES: ProjectStage[] = [
  {
    id: "challenge",
    title: "Business Challenge",
    icon: Building,
    description: "A growing organization struggles with manual workflows, disconnected systems, repetitive document processing, and delayed decision-making.",
    details: [
      "Fragmented data silos",
      "High operational costs",
      "Slow response times",
      "Scalability bottlenecks"
    ]
  },
  {
    id: "discovery",
    title: "Discovery",
    icon: Search,
    description: "We analyze the existing infrastructure and identify the highest-impact opportunities for intelligent automation.",
    details: [
      "Stakeholder workshops",
      "Workflow analysis",
      "Process mapping",
      "Technical assessment"
    ]
  },
  {
    id: "architecture",
    title: "Solution Architecture",
    icon: Cpu,
    description: "Designing a robust, secure, and scalable AI-native system tailored to the organization's exact needs.",
    details: [
      "AI Agents",
      "Workflow Automation",
      "Enterprise APIs",
      "RAG Knowledge Layer",
      "Cloud Infrastructure",
      "Secure Authentication"
    ]
  },
  {
    id: "implementation",
    title: "Implementation",
    icon: Code2,
    description: "Building and deploying the platform using modern engineering practices and rigorous quality control.",
    details: [
      "Modular architecture",
      "Iterative delivery",
      "System integrations",
      "Testing",
      "Deployment"
    ]
  },
  {
    id: "outcomes",
    title: "Business Outcomes",
    icon: TrendingUp,
    description: "Delivering measurable impact through intelligent software that transforms how the business operates.",
    details: [
      "Reduced manual effort",
      "Faster response times",
      "Improved operational visibility",
      "Better decision support",
      "Scalable digital processes"
    ]
  }
];

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  { id: "users", label: "Business Users", icon: Users },
  { id: "apps", label: "Web / Mobile Applications", icon: Smartphone },
  { id: "agents", label: "AI Agents", icon: BrainCircuit },
  { id: "knowledge", label: "Knowledge Layer", icon: Database },
  { id: "systems", label: "Business Systems", icon: Server },
  { id: "analytics", label: "Analytics Dashboard", icon: LineChart }
];

export const TECH_HIGHLIGHTS: string[] = [
  "AI Agents", "LLM Integration", "RAG", "APIs", "Cloud Services", "Databases", "Security", "Monitoring"
];
