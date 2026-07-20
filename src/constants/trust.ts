import { Key, Network, Box, Activity, Database, Settings2 } from "lucide-react";

export const TRUST_PILLARS = [
  {
    id: "secure",
    title: "Secure Architecture",
    icon: Key,
    items: ["Secure authentication", "Authorization", "Role-based access", "Secure API design"]
  },
  {
    id: "scalable",
    title: "Scalable Systems",
    icon: Network,
    items: ["Modular architecture", "Cloud-ready deployment", "High availability principles", "Future-ready design"]
  },
  {
    id: "reliable",
    title: "Reliable Delivery",
    icon: Box,
    items: ["Version control", "Automated testing", "CI/CD pipelines", "Incremental releases"]
  },
  {
    id: "visibility",
    title: "Operational Visibility",
    icon: Activity,
    items: ["Monitoring", "Logging", "Error tracking", "Performance insights"]
  },
  {
    id: "data",
    title: "Data Protection",
    icon: Database,
    items: ["Encryption in transit", "Encryption at rest", "Secure storage practices", "Principle of least privilege"]
  },
  {
    id: "maintainability",
    title: "Maintainability",
    icon: Settings2,
    items: ["Clean architecture", "Documentation", "Modular components", "Long-term supportability"]
  }
];

export const ENGINEERING_PRACTICES = [
  "Security by Design",
  "API First",
  "AI-Native Architecture",
  "Cloud Native",
  "Modular Systems",
  "Continuous Integration",
  "Continuous Delivery",
  "Automated Testing",
  "Observability",
  "Documentation"
];
