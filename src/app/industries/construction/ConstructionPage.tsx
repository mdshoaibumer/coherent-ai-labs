"use client";
import {
  HardHat, FileText, Camera, Wrench, Building2, Clock,
  Search, Bot, Shield, Users, Network, Database,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "construction",
  eyebrow: "Construction & Real Estate",
  title: "Intelligent Systems for the Built Environment.",
  description: "We engineer AI solutions that automate project documentation, monitor site progress, predict maintenance needs, and coordinate complex vendor ecosystems across construction and property management.",
  heroImage: "/assets/images/construction_ai.png",

  challenges: [
    { title: "Project Delays & Cost Overruns", description: "75% of construction projects exceed budget. Manual scheduling and coordination create cascading delays across trades." },
    { title: "Document Overload", description: "A typical commercial project generates 50,000+ documents — blueprints, RFIs, submittals, change orders — mostly unstructured." },
    { title: "Site Safety & Compliance", description: "Manual safety inspections miss violations. OSHA compliance requires continuous monitoring across multiple active zones." },
    { title: "Vendor Coordination", description: "Dozens of subcontractors with different schedules, systems, and communication preferences create coordination chaos." },
    { title: "Maintenance Prediction", description: "Reactive maintenance in property management costs 3-5x more than predictive approaches, yet most portfolios lack the data infrastructure." },
    { title: "Progress Tracking", description: "Site progress reports are subjective, infrequent, and lag behind actual conditions by days or weeks." },
  ],

  opportunities: [
    { title: "AI Document Processing", icon: FileText, description: "Extract data from blueprints, RFIs, submittals, and contracts. Auto-route for approval. Flag discrepancies." },
    { title: "Computer Vision Monitoring", icon: Camera, description: "Drone and camera feeds analyzed for progress tracking, safety violations, and quality inspection." },
    { title: "Predictive Maintenance", icon: Wrench, description: "IoT sensor data + ML models predict equipment and building system failures before they occur." },
    { title: "Schedule Optimization", icon: Clock, description: "AI agents that dynamically adjust project schedules based on weather, material delivery, and trade availability." },
    { title: "Vendor Intelligence", icon: Users, description: "Automated vendor evaluation, bid comparison, compliance verification, and communication coordination." },
    { title: "Property Knowledge Base", icon: Search, description: "Semantic search across all property documents — leases, maintenance history, floor plans, and permits." },
  ],

  solutions: [
    { title: "Project Intelligence Platform", icon: Bot, description: "Multi-agent system coordinating schedules, documents, vendors, and reporting across the project lifecycle.", capabilities: ["Schedule AI", "Document Routing", "RFI Automation", "Progress Reports"] },
    { title: "Site Monitoring System", icon: Camera, description: "Computer vision pipeline processing drone/camera feeds for progress tracking and safety compliance.", capabilities: ["Progress Detection", "Safety Violations", "PPE Compliance", "Quality Inspection"] },
    { title: "Document Intelligence", icon: FileText, description: "AI extraction and routing for blueprints, submittals, change orders, invoices, and contracts.", capabilities: ["OCR/Extraction", "Auto-Classification", "Approval Routing", "Version Control"] },
    { title: "Property Management AI", icon: Building2, description: "Predictive maintenance, tenant communication, lease management, and operational optimization for portfolios.", capabilities: ["Predictive Maintenance", "Tenant Agents", "Lease Analysis", "Energy Optimization"] },
  ],

  architecture: {
    title: "Construction AI Architecture",
    description: "An integrated platform connecting field data, project documents, and stakeholder systems into a unified intelligence layer.",
    layers: [
      { label: "Data Sources", items: ["Drone Imagery", "IoT Sensors", "BIM Models", "Project Docs", "ERP Systems"] },
      { label: "Processing", items: ["Computer Vision", "Document AI", "NLP", "Time Series ML", "Geospatial"] },
      { label: "Intelligence", items: ["Schedule Agent", "Safety Agent", "Document Agent", "Maintenance Agent"] },
      { label: "Integration", items: ["Procore", "PlanGrid", "Autodesk", "SAP", "Yardi"] },
      { label: "Output", items: ["Dashboards", "Alerts", "Reports", "Mobile App", "Stakeholder Portal"] },
      { label: "Infrastructure", items: ["Edge Computing", "Cloud Processing", "Secure Storage", "API Gateway"] },
    ],
  },

  workflow: {
    title: "Construction Project Lifecycle",
    description: "AI agents supporting every phase from pre-construction through handover and facilities management.",
    steps: [
      { step: "01", title: "Pre-Construction", description: "AI analyzes bid documents, generates cost estimates, identifies risks, and evaluates vendor proposals." },
      { step: "02", title: "Active Construction", description: "Real-time progress monitoring, automated RFI processing, safety compliance, and schedule optimization." },
      { step: "03", title: "Quality & Closeout", description: "Automated punch list generation, compliance verification, document compilation, and handover preparation." },
      { step: "04", title: "Operations & Maintenance", description: "Predictive maintenance, tenant management, energy optimization, and capital planning for the built asset." },
    ],
  },

  techStack: [
    { category: "Computer Vision", items: ["YOLO", "Segment Anything", "Custom Models", "Drone SDKs", "RTSP Streams"] },
    { category: "Document AI", items: ["OCR", "Layout Analysis", "Entity Extraction", "Classification", "RAG"] },
    { category: "IoT & Edge", items: ["MQTT", "Edge Inference", "Time Series DB", "Sensor Fusion"] },
    { category: "Platforms", items: ["Procore API", "Autodesk Platform", "Yardi", "MRI Software", "SAP RE"] },
    { category: "Geospatial", items: ["GIS", "BIM Integration", "Point Cloud", "Orthomosaic", "Digital Twins"] },
    { category: "Infrastructure", items: ["AWS/Azure", "Edge Gateways", "Kubernetes", "Object Storage"] },
  ],

  outcomes: [
    { value: "30%", label: "Schedule Improvement" },
    { value: "85%", label: "Faster Document Processing" },
    { value: "60%", label: "Fewer Safety Incidents" },
    { value: "$2.1M", label: "Avg. Project Savings" },
  ],

  faqs: [
    { id: "con-1", title: "Can you integrate with our existing project management tools?", content: "Yes. We integrate with Procore, PlanGrid, Autodesk Construction Cloud, and custom ERP systems. Bidirectional sync ensures your existing workflows remain intact." },
    { id: "con-2", title: "How does the computer vision system work on-site?", content: "We process feeds from existing security cameras, mounted time-lapse cameras, and drone flights. Edge computing handles real-time safety detection. Cloud processing handles progress analysis and reporting." },
    { id: "con-3", title: "Is this suitable for large commercial projects?", content: "Our systems are designed for commercial-scale projects. We handle multi-trade coordination, thousands of documents per project, and integrate across the entire stakeholder ecosystem." },
    { id: "con-4", title: "How quickly can we see results?", content: "Document AI pilots show results within 2-3 weeks. Full project intelligence platforms deploy in 8-12 weeks. We deliver incrementally so you see value at every stage." },
  ],
};

export function ConstructionPage() {
  return <IndustryPageLayout data={data} />;
}

