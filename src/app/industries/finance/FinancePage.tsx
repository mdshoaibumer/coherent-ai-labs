"use client";
import {
  Building2, Shield, FileText, AlertTriangle, Users, BarChart3,
  Bot, Database, Lock, Search, Activity, Network,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "finance",
  eyebrow: "Finance & Insurance",
  title: "Secure AI for Financial Intelligence.",
  description: "We engineer compliant AI systems for fraud detection, risk assessment, document processing, claims automation, and regulatory monitoring — built for the security and auditability financial institutions demand.",
  heroImage: "/assets/images/finance_ai.png",
  heroImage: "/assets/images/finance_ai.png",

  challenges: [
    { title: "Fraud Detection Latency", description: "Rule-based fraud systems generate excessive false positives while sophisticated attacks slip through. Real-time detection is critical." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Regulatory Compliance Scaling", description: "AML, KYC, SOX, and emerging AI regulations require continuous monitoring across millions of transactions and accounts." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Document Processing Volume", description: "Loan applications, claims, policies, and regulatory filings generate millions of documents requiring extraction and validation." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Claims Processing Delays", description: "Manual claims adjudication takes 5-15 days. Customer satisfaction drops with every day of delay." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Risk Model Opacity", description: "Legacy risk models are black boxes. Regulators increasingly demand explainability and audit trails for automated decisions." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Customer Service Costs", description: "High-volume routine inquiries (balance, transactions, policy details) overwhelm call centers during peak periods." },
  heroImage: "/assets/images/finance_ai.png",
  ],

  opportunities: [
    { title: "Anomaly Detection", icon: AlertTriangle, description: "Real-time transaction monitoring with ML models detecting novel fraud patterns that rule-based systems miss." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Document Intelligence", icon: FileText, description: "Automated extraction from loan docs, claims forms, financial statements, and regulatory filings." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Risk Assessment", icon: BarChart3, description: "Explainable AI models for credit scoring, underwriting, and portfolio risk with regulatory-ready audit trails." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Claims Automation", icon: Bot, description: "End-to-end claims processing — intake, validation, assessment, and settlement with human escalation for complex cases." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Compliance Monitoring", icon: Shield, description: "Continuous regulatory compliance surveillance with automated reporting, alert triage, and SAR generation." },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Customer Support Agents", icon: Users, description: "AI agents handling account inquiries, transaction disputes, policy questions, and claims status updates." },
  heroImage: "/assets/images/finance_ai.png",
  ],

  solutions: [
    { title: "Fraud & Anomaly Platform", icon: AlertTriangle, description: "Real-time scoring engine processing transactions with sub-10ms latency and adaptive learning from analyst feedback.", capabilities: ["Real-time Scoring", "Network Analysis", "Behavioral Biometrics", "Case Management"] },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Claims Intelligence", icon: FileText, description: "AI-driven claims pipeline from FNOL through settlement — document extraction, damage assessment, and payout calculation.", capabilities: ["Document Extraction", "Damage Assessment", "Fraud Indicators", "Auto-Settlement"] },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Regulatory Compliance AI", icon: Shield, description: "Automated compliance monitoring, suspicious activity detection, and regulatory reporting generation.", capabilities: ["AML Monitoring", "KYC Automation", "SAR Generation", "Regulatory Reporting"] },
  heroImage: "/assets/images/finance_ai.png",
    { title: "Financial Support Agents", icon: Bot, description: "Secure conversational AI handling customer inquiries with full transaction context and compliance guardrails.", capabilities: ["Account Inquiries", "Dispute Resolution", "Policy Servicing", "Secure Auth"] },
  heroImage: "/assets/images/finance_ai.png",
  ],

  architecture: {
    title: "Financial AI Architecture",
    description: "A secure, auditable platform designed for financial-grade reliability with complete decision traceability and regulatory compliance.",
  heroImage: "/assets/images/finance_ai.png",
    layers: [
      { label: "Data Ingestion", items: ["Transaction Streams", "Document Upload", "Core Banking", "Market Feeds", "KYC Sources"] },
      { label: "Processing", items: ["Real-time Scoring", "Batch Analysis", "Document AI", "Entity Resolution"] },
      { label: "Intelligence", items: ["Fraud Models", "Risk Scoring", "Claims Assessment", "Compliance Rules"] },
      { label: "Explainability", items: ["Decision Audit Trail", "Model Cards", "Feature Attribution", "Bias Detection"] },
      { label: "Security", items: ["Encryption", "Token Vault", "Access Control", "Data Masking", "PCI DSS"] },
      { label: "Integration", items: ["Core Banking", "Claims System", "CRM", "Regulatory Portals", "SWIFT"] },
    ],
  },

  workflow: {
    title: "Financial Operations Automation",
    description: "AI coordinating detection, assessment, and resolution across financial operations.",
  heroImage: "/assets/images/finance_ai.png",
    steps: [
      { step: "01", title: "Ingest & Monitor", description: "Real-time ingestion of transactions, documents, and customer interactions for continuous AI monitoring." },
  heroImage: "/assets/images/finance_ai.png",
      { step: "02", title: "Detect & Score", description: "ML models score risk, detect anomalies, and classify documents with explainable confidence levels." },
  heroImage: "/assets/images/finance_ai.png",
      { step: "03", title: "Assess & Decide", description: "AI agents assess cases, compile evidence, and route to auto-resolution or human review based on complexity." },
  heroImage: "/assets/images/finance_ai.png",
      { step: "04", title: "Report & Comply", description: "Automated regulatory reporting, audit trail generation, and continuous compliance verification." },
  heroImage: "/assets/images/finance_ai.png",
    ],
  },

  techStack: [
    { category: "ML & Detection", items: ["XGBoost", "Graph Neural Networks", "Isolation Forest", "Autoencoders"] },
    { category: "Real-Time", items: ["Kafka", "Flink", "Redis", "Sub-10ms Inference", "Feature Store"] },
    { category: "Security", items: ["HSM", "Token Vault", "Data Masking", "PCI DSS", "SOX Compliance"] },
    { category: "Document AI", items: ["OCR", "NER", "Table Extraction", "Signature Verification"] },
    { category: "Integration", items: ["Core Banking APIs", "SWIFT", "FIX Protocol", "Regulatory APIs"] },
    { category: "Compliance", items: ["SOC 2 Type II", "PCI DSS", "GDPR", "AML/BSA", "Fair Lending"] },
  ],

  outcomes: [
    { value: "94%", label: "Fraud Detection Rate" },
    { value: "< 10ms", label: "Scoring Latency" },
    { value: "75%", label: "Faster Claims" },
    { value: "Zero", label: "Regulatory Findings" },
  ],

  faqs: [
    { id: "fin-1", title: "How do you ensure model explainability for regulators?", content: "Every model decision includes feature attribution, confidence scoring, and human-readable explanations. We maintain model cards with performance metrics, bias analysis, and validation results for regulatory review." },
    { id: "fin-2", title: "What about PCI DSS and data security?", content: "Our architecture is designed for PCI DSS compliance — tokenized card data, HSM key management, encrypted storage, access logging, and annual penetration testing. No PAN data is stored in AI processing layers." },
    { id: "fin-3", title: "Can the system adapt to new fraud patterns?", content: "Yes. Models retrain on analyst-confirmed cases with configurable retraining cadence. Unsupervised anomaly detection catches novel patterns without labeled data. A/B testing validates model improvements before production." },
    { id: "fin-4", title: "How do you handle legacy core banking integration?", content: "We integrate via existing APIs, message queues, file-based interfaces (SWIFT, FIX), and database adapters. Our platform acts as an intelligence layer on top of your existing core systems without requiring migration." },
  ],
};

export function FinancePage() {
  return <IndustryPageLayout data={data} />;
}

