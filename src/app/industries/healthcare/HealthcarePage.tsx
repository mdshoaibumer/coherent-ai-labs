"use client";
import {
  HeartPulse, FileText, Users, Brain, Shield, Activity,
  Clock, Database, Search, Bot, Network, Zap,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "healthcare",
  eyebrow: "Healthcare & Life Sciences",
  title: "AI That Respects Patient Privacy and Accelerates Care.",
  description: "We engineer HIPAA-compliant AI systems that automate clinical workflows, enhance patient engagement, and reduce administrative burden — without compromising data security or compliance.",
  heroImage: "/assets/images/healthcare_ai.png",

  challenges: [
    { title: "Administrative Overload", description: "Clinicians spend 50% of their time on documentation, coding, and administrative tasks instead of patient care." },
    { title: "Fragmented Patient Data", description: "Health records span multiple EHR systems, labs, imaging, and referral networks with no unified view." },
    { title: "Compliance Complexity", description: "HIPAA, HITECH, and state-level privacy regulations require meticulous data handling at every processing stage." },
    { title: "Staffing Shortages", description: "Growing patient volumes outpace available clinical staff, creating bottlenecks in scheduling, triage, and follow-up." },
    { title: "Slow Prior Authorizations", description: "Insurance prior auth workflows take 5-14 days manually, delaying patient access to necessary treatments." },
    { title: "Unstructured Medical Documents", description: "Faxed referrals, handwritten notes, and scanned records remain inaccessible to digital systems." },
  ],

  opportunities: [
    { title: "Clinical Documentation AI", icon: FileText, description: "Ambient clinical documentation that generates structured notes from patient-clinician conversations in real-time." },
    { title: "Patient Communication Agents", icon: Users, description: "AI assistants handling appointment scheduling, medication reminders, pre-visit intake, and post-discharge follow-up." },
    { title: "Medical Document Intelligence", icon: Search, description: "Extract structured data from faxes, referrals, lab results, and insurance forms using multi-modal AI." },
    { title: "Clinical Decision Support", icon: Brain, description: "Evidence-based recommendations surfaced at point-of-care, grounded in patient history and medical literature." },
    { title: "Prior Authorization Automation", icon: Clock, description: "AI agents that compile clinical evidence, submit auth requests, and follow up with payers autonomously." },
    { title: "Operational Analytics", icon: Activity, description: "Real-time dashboards for bed utilization, staffing optimization, wait times, and throughput analysis." },
  ],

  solutions: [
    { title: "Clinical Workflow Automation", icon: Bot, description: "Multi-agent systems that handle intake, documentation, coding, and billing workflows end-to-end.", capabilities: ["Ambient Documentation", "ICD-10 Coding", "Charge Capture", "Prior Auth"] },
    { title: "Patient Engagement Platform", icon: Users, description: "AI-powered communication across SMS, email, and portal — handling scheduling, reminders, and education.", capabilities: ["Appointment Scheduling", "Medication Reminders", "Health Education", "Surveys"] },
    { title: "Medical Knowledge System", icon: Database, description: "RAG-powered knowledge base grounding AI in clinical guidelines, formularies, and institutional protocols.", capabilities: ["Clinical Guidelines", "Drug Interactions", "Protocol Search", "Literature Review"] },
    { title: "Secure Health Data Platform", icon: Shield, description: "HIPAA-compliant infrastructure for ingesting, processing, and storing PHI with complete audit trails.", capabilities: ["Encryption at Rest/Transit", "Access Audit", "De-identification", "Consent Management"] },
  ],

  architecture: {
    title: "Healthcare AI Architecture",
    description: "A HIPAA-compliant, multi-tenant platform designed for clinical AI workloads with complete data isolation and audit capability.",
    layers: [
      { label: "Data Ingestion", items: ["HL7 FHIR", "EHR Adapters", "Lab Feeds", "Imaging DICOM", "Document OCR"] },
      { label: "AI Processing", items: ["Clinical NLP", "Medical Coding", "Entity Extraction", "Summarization"] },
      { label: "Knowledge Layer", items: ["Clinical Guidelines", "Formulary DB", "Vector Embeddings", "Medical Ontologies"] },
      { label: "Agent Runtime", items: ["Documentation Agent", "Scheduling Agent", "Auth Agent", "Triage Agent"] },
      { label: "Security & Compliance", items: ["PHI Encryption", "RBAC", "Audit Logging", "BAA Management", "De-identification"] },
      { label: "Integration", items: ["Epic/Cerner APIs", "Payer Portals", "Patient Portal", "Telehealth", "Pharmacy Systems"] },
    ],
  },

  workflow: {
    title: "Patient Journey Automation",
    description: "From initial contact through treatment to follow-up — AI agents coordinate every touchpoint.",
    steps: [
      { step: "01", title: "Intake & Triage", description: "AI collects symptoms, insurance, and history via conversational interface. Routes to appropriate provider." },
      { step: "02", title: "Clinical Documentation", description: "Ambient AI generates structured clinical notes during the encounter. Codes automatically for billing." },
      { step: "03", title: "Treatment Coordination", description: "Agents handle prior auth, referral routing, prescription processing, and lab ordering in parallel." },
      { step: "04", title: "Follow-Up & Monitoring", description: "Automated post-visit communication, medication adherence tracking, and outcome measurement." },
    ],
  },

  techStack: [
    { category: "Interoperability", items: ["HL7 FHIR R4", "SMART on FHIR", "CDA/C-CDA", "DICOM", "X12 EDI"] },
    { category: "AI Models", items: ["Clinical NLP", "Medical NER", "ICD-10 Classifiers", "Ambient AI", "RAG"] },
    { category: "Infrastructure", items: ["HIPAA-compliant Cloud", "Private VPC", "Encrypted Storage", "BAA Coverage"] },
    { category: "Security", items: ["PHI De-identification", "Consent Management", "Audit Trails", "MFA/SSO"] },
    { category: "Platforms", items: ["Epic", "Cerner", "Athenahealth", "DrChrono", "Veradigm"] },
    { category: "Compliance", items: ["HIPAA", "HITECH", "SOC 2", "HITRUST", "State Privacy Laws"] },
  ],

  outcomes: [
    { value: "70%", label: "Less Admin Time" },
    { value: "< 8s", label: "Document Processing" },
    { value: "99.8%", label: "Coding Accuracy" },
    { value: "HIPAA", label: "Full Compliance" },
  ],

  faqs: [
    { id: "hc-1", title: "Is the platform HIPAA compliant?", content: "Yes. Every component is designed for HIPAA compliance — PHI encryption, access controls, audit logging, BAA coverage, and de-identification capabilities. We undergo regular third-party security assessments." },
    { id: "hc-2", title: "Can you integrate with our EHR system?", content: "We integrate with all major EHR platforms (Epic, Cerner, Athenahealth) via FHIR R4 APIs, HL7 v2 interfaces, and custom adapters. Bidirectional data flow with real-time synchronization." },
    { id: "hc-3", title: "How do you handle PHI in AI processing?", content: "PHI is processed within your VPC with no data egress. We support de-identification for model training, encrypted inference pipelines, and complete audit trails for every AI decision." },
    { id: "hc-4", title: "What about clinical validation?", content: "All clinical AI outputs include confidence scores and evidence citations. High-stakes decisions are routed to human clinicians for review. We support clinical validation studies before production deployment." },
  ],
};

export function HealthcarePage() {
  return <IndustryPageLayout data={data} />;
}

