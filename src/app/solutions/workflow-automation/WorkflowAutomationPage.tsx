"use client";
import {
  Workflow, Mail, FileText, Database, Bell,
  GitBranch, Users, Clock, Shield, Zap,
  Settings, Network, CheckCircle2, Layers,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "AI Workflow Automation",
  title: "Intelligent Pipelines That Replace Manual Work.",
  description:
    "We engineer end-to-end automation systems that combine AI reasoning with deterministic business rules — processing documents, routing approvals, triggering actions, and updating systems without human intervention.",

  problem: {
    headline: "Manual Processes Are the Hidden Tax on Every Enterprise.",
    description:
      "Behind every enterprise operation are hundreds of manual workflows — email forwarding, document review, data entry, approval routing, notification sending. Each one is a latency bottleneck, error source, and scaling constraint.",
    painPoints: [
      "Employees spend 4+ hours daily on repetitive process coordination across disconnected systems",
      "Document processing backlogs grow linearly with business volume — no elasticity",
      "Approval chains create 2-5 day latency on decisions that should take seconds",
      "Data silos force manual re-entry between CRM, ERP, email, and project management tools",
      "No audit trail — compliance teams cannot trace who did what, when, or why",
    ],
  },

  features: [
    { title: "Document Intelligence", description: "Extract, classify, and route information from PDFs, emails, invoices, and contracts using multi-modal AI.", icon: FileText },
    { title: "Event-Driven Triggers", description: "Workflows activate on system events — new emails, form submissions, database changes, webhook calls, or scheduled intervals.", icon: Zap },
    { title: "Human Approval Gates", description: "Configurable checkpoints where high-stakes decisions require human review before the pipeline continues.", icon: Users },
    { title: "Multi-System Orchestration", description: "Coordinate actions across CRM, ERP, email, Slack, databases, and third-party APIs in a single workflow.", icon: Network },
    { title: "Business Rules Engine", description: "Combine AI intelligence with deterministic rules — ensuring compliance, SLA enforcement, and policy adherence.", icon: Shield },
    { title: "Real-Time Notifications", description: "Alert stakeholders via email, Slack, SMS, or push notifications at any stage of the pipeline.", icon: Bell },
  ],

  architecture: {
    title: "Workflow Architecture",
    description: "Event-driven pipelines with AI processing stages, deterministic routing, and human-in-the-loop approval gates.",
    layers: [
      { label: "Trigger Layer", items: ["Webhooks", "Email Listeners", "Cron Schedules", "Database Triggers", "API Events"] },
      { label: "Processing Layer", items: ["Document AI", "Classification", "Extraction", "Validation", "Enrichment"] },
      { label: "Decision Layer", items: ["Business Rules", "AI Reasoning", "Approval Routing", "Priority Scoring"] },
      { label: "Action Layer", items: ["CRM Updates", "Email Dispatch", "API Calls", "Database Writes", "Notifications"] },
      { label: "State Management", items: ["Workflow State", "Retry Policies", "Dead Letter Queue", "Audit Log"] },
      { label: "Monitoring", items: ["Pipeline Health", "SLA Tracking", "Error Alerts", "Throughput Metrics"] },
    ],
  },

  techStack: [
    { category: "Orchestration", items: ["Temporal", "AWS Step Functions", "Custom DAG Engine", "Apache Airflow"] },
    { category: "AI Processing", items: ["GPT-4o", "Claude 3.5", "Document AI", "Custom Models"] },
    { category: "Integration", items: ["REST APIs", "GraphQL", "Webhooks", "gRPC", "Message Queues"] },
    { category: "Data", items: ["PostgreSQL", "Redis", "Kafka", "S3", "Elasticsearch"] },
    { category: "Platforms", items: ["Salesforce", "HubSpot", "SAP", "Microsoft 365", "Slack"] },
    { category: "Observability", items: ["Datadog", "PagerDuty", "Custom Dashboards", "Audit Logs"] },
  ],

  process: [
    { step: "01", title: "Process Mapping", description: "Document existing workflows, identify bottlenecks, and define automation candidates with ROI estimates." },
    { step: "02", title: "Pipeline Design", description: "Architect the workflow DAG — triggers, processing stages, decision points, and action outputs." },
    { step: "03", title: "Build & Integrate", description: "Implement each stage, connect systems, configure AI models, and set up approval gates." },
    { step: "04", title: "Monitor & Optimize", description: "Deploy with full observability, measure SLA compliance, and continuously optimize throughput." },
  ],

  benefits: [
    { value: "85%", label: "Process Time Reduction" },
    { value: "Zero", label: "Manual Data Entry" },
    { value: "99.9%", label: "SLA Compliance" },
    { value: "< 3s", label: "Average Decision Time" },
  ],

  faqs: [
    { id: "wf-1", title: "Can workflows handle exceptions and edge cases?", content: "Yes. Workflows include configurable exception handling — retry policies, fallback paths, dead letter queues, and automatic escalation to human operators when AI confidence drops below threshold." },
    { id: "wf-2", title: "How do you integrate with our existing systems?", content: "We build custom connectors for any system with an API. For legacy systems without APIs, we use RPA bridges, database adapters, or email-based integration patterns." },
    { id: "wf-3", title: "What happens if a workflow step fails?", content: "Every step has configurable retry logic, timeout handling, and fallback paths. Failed steps are logged with full context for debugging. Critical failures trigger immediate alerts." },
    { id: "wf-4", title: "Can non-technical users modify workflows?", content: "We deliver workflows with configuration layers that allow business users to adjust rules, thresholds, and routing without code changes. Core architecture changes require engineering." },
    { id: "wf-5", title: "How do you ensure data security in automated workflows?", content: "All data is encrypted in transit and at rest. Workflows run within your VPC. Access to each system connector is RBAC-controlled with per-workflow credential isolation." },
  ],
};

export function WorkflowAutomationPage() {
  return <SolutionPageLayout data={data} />;
}
