import { Cpu, Network, Database, Layers, Workflow, Cloud, Box, HeartPulse, Building2, ShoppingCart, Factory, GraduationCap, Truck, HardHat, FileText, BookOpen, Lightbulb, HelpCircle, Users, Target, Briefcase, Mail, Star, Globe } from "lucide-react";
import { NavItem } from "../types";

export const PLATFORM_ITEMS: NavItem[] = [
  { name: "AI Agents", desc: "Autonomous decision-making entities", icon: Cpu, href: "/platform/agents" },
  { name: "AI Workflow Automation", desc: "End-to-end intelligent pipelines", icon: Workflow },
  { name: "LLM Integration", desc: "Custom large language models", icon: Network },
  { name: "RAG Systems", desc: "Retrieval-augmented generation", icon: Database },
  { name: "Business Automation", desc: "Intelligent process optimization", icon: Box },
  { name: "Cloud Engineering", desc: "Scalable infrastructure design", icon: Cloud },
  { name: "Enterprise Software", desc: "Bespoke full-stack applications", icon: Layers },
];

export const SOLUTIONS_ITEMS: NavItem[] = [
  { name: "Healthcare", desc: "HIPAA-compliant workflows", icon: HeartPulse },
  { name: "Finance", desc: "Algorithmic execution & security", icon: Building2 },
  { name: "Retail", desc: "Predictive inventory & personalization", icon: ShoppingCart },
  { name: "Manufacturing", desc: "Predictive maintenance systems", icon: Factory },
  { name: "Education", desc: "Intelligent learning platforms", icon: GraduationCap },
  { name: "Logistics", desc: "Dynamic routing orchestration", icon: Truck },
  { name: "Construction", desc: "Automated project management", icon: HardHat },
];

export const RESOURCES_ITEMS: NavItem[] = [
  { name: "Engineering Blog", desc: "Technical deep dives", icon: FileText, href: "/blog" },
  { name: "Case Studies", desc: "Client success & ROI", icon: Briefcase, href: "/case-studies" },
  { name: "Documentation", desc: "API & platform guides", icon: BookOpen },
  { name: "Research", desc: "Labs & publications", icon: Lightbulb },
  { name: "FAQs", desc: "Technical & business queries", icon: HelpCircle },
];

export const COMPANY_ITEMS: NavItem[] = [
  { name: "About Us", desc: "Our mission & team", icon: Users, href: "/company" },
  { name: "Careers", desc: "Open positions", icon: Star },
  { name: "Press", desc: "Media kit & news", icon: Globe },
  { name: "Contact", desc: "Get in touch", icon: Mail, href: "/contact" },
];
