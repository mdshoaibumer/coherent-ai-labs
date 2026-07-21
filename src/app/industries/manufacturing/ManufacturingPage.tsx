"use client";
import {
  Factory, Wrench, Eye, Cpu, Activity, Settings,
  BarChart3, Bot, Database, Network, Shield, Zap,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "manufacturing",
  eyebrow: "Manufacturing & Industrial",
  title: "AI-Driven Production Intelligence.",
  description: "We engineer predictive maintenance systems, computer vision quality inspection, and intelligent production scheduling that minimize downtime, maximize yield, and reduce operational costs across manufacturing operations.",
  heroImage: "/assets/images/manufacturing_ai.png",

  challenges: [
    { title: "Unplanned Equipment Downtime", description: "A single hour of unplanned downtime costs $50K-$250K. Reactive maintenance strategies cannot prevent cascading failures." },
    { title: "Quality Inconsistency", description: "Manual visual inspection catches only 70-80% of defects. Escaped defects cause costly recalls and customer dissatisfaction." },
    { title: "Production Scheduling Rigidity", description: "Static schedules cannot adapt to machine breakdowns, material delays, or rush orders without manual replanning." },
    { title: "Siloed Operational Data", description: "SCADA, MES, ERP, and quality systems operate independently. No unified view of production health exists." },
    { title: "Energy Waste", description: "Manufacturing consumes 30% of global energy. Without AI optimization, equipment runs at suboptimal efficiency." },
    { title: "Workforce Knowledge Loss", description: "Experienced operators retire without transferring tribal knowledge about machine behavior and troubleshooting patterns." },
  ],

  opportunities: [
    { title: "Predictive Maintenance", icon: Wrench, description: "Sensor data + ML models predict component failures 2-4 weeks in advance, enabling scheduled repairs instead of emergency stops." },
    { title: "Computer Vision QC", icon: Eye, description: "Real-time defect detection at production line speed. Surface cracks, dimensional errors, and assembly defects caught automatically." },
    { title: "Production Optimization", icon: BarChart3, description: "AI scheduling that dynamically adjusts production sequences based on machine health, material availability, and order priority." },
    { title: "Digital Twin Modeling", icon: Cpu, description: "Virtual replicas of production systems enabling what-if simulation, capacity planning, and optimization without disruption." },
    { title: "Energy Management", icon: Zap, description: "Real-time energy consumption optimization across equipment, HVAC, and compressed air systems based on production schedules." },
    { title: "Operator Assistants", icon: Bot, description: "AI copilots that surface troubleshooting knowledge, SOPs, and recommendations based on current machine state." },
  ],

  solutions: [
    { title: "Predictive Maintenance Platform", icon: Wrench, description: "End-to-end system from sensor ingestion through ML prediction to maintenance work order generation.", capabilities: ["Vibration Analysis", "Thermal Monitoring", "Remaining Useful Life", "Work Order Integration"] },
    { title: "Vision Quality System", icon: Eye, description: "Multi-camera inspection pipeline with real-time defect classification, reject sorting, and root cause tracking.", capabilities: ["Defect Detection", "Measurement", "Classification", "Trend Analysis"] },
    { title: "Production Intelligence", icon: Factory, description: "Unified dashboard connecting MES, SCADA, ERP, and quality systems into real-time operational visibility.", capabilities: ["OEE Tracking", "Bottleneck Detection", "Schedule Optimization", "Yield Analysis"] },
    { title: "Factory Knowledge Base", icon: Database, description: "RAG-powered system preserving operator expertise and making it searchable for troubleshooting and training.", capabilities: ["SOP Search", "Troubleshooting Guides", "Training Content", "Expert Knowledge"] },
  ],

  architecture: {
    title: "Manufacturing AI Architecture",
    description: "An edge-to-cloud architecture processing high-frequency sensor data with real-time inference and enterprise integration.",
    layers: [
      { label: "Edge Layer", items: ["PLC/SCADA", "IoT Sensors", "Cameras", "Edge Compute", "Local Inference"] },
      { label: "Data Pipeline", items: ["Time Series DB", "Stream Processing", "Feature Engineering", "Data Lake"] },
      { label: "ML Models", items: ["Anomaly Detection", "Regression", "Computer Vision", "NLP", "Forecasting"] },
      { label: "Application", items: ["Dashboard", "Alert System", "Work Order Engine", "Report Generator"] },
      { label: "Integration", items: ["SAP/Oracle ERP", "MES", "CMMS", "Quality System", "Historian"] },
      { label: "Infrastructure", items: ["Edge Gateways", "Hybrid Cloud", "OT Network Security", "Redundancy"] },
    ],
  },

  workflow: {
    title: "Predictive Maintenance Lifecycle",
    description: "From sensor data collection through prediction to maintenance execution — a closed-loop system.",
    steps: [
      { step: "01", title: "Data Collection", description: "Continuous vibration, temperature, pressure, and current readings from critical equipment via IoT sensors." },
      { step: "02", title: "Pattern Detection", description: "ML models identify degradation patterns, anomalies, and leading indicators of impending failures." },
      { step: "03", title: "Prediction & Alert", description: "Remaining useful life estimates trigger proactive alerts with confidence levels and recommended actions." },
      { step: "04", title: "Maintenance Execution", description: "Automated work order creation, parts ordering, and scheduling aligned with production windows." },
    ],
  },

  techStack: [
    { category: "IoT & Edge", items: ["MQTT", "OPC-UA", "Edge ML", "NVIDIA Jetson", "Industrial Cameras"] },
    { category: "Data Platform", items: ["InfluxDB", "TimescaleDB", "Kafka", "Apache Spark", "Delta Lake"] },
    { category: "ML Models", items: ["Anomaly Detection", "LSTM", "CNN", "Transformers", "AutoML"] },
    { category: "Computer Vision", items: ["YOLO", "OpenCV", "Custom CNNs", "GigE Cameras", "Lighting Systems"] },
    { category: "Enterprise", items: ["SAP PM", "Oracle EAM", "Siemens MES", "OSIsoft PI", "Wonderware"] },
    { category: "Infrastructure", items: ["AWS IoT", "Azure IoT Hub", "Edge Gateways", "5G/WiFi 6"] },
  ],

  outcomes: [
    { value: "45%", label: "Less Unplanned Downtime" },
    { value: "99.2%", label: "Defect Detection Rate" },
    { value: "15%", label: "OEE Improvement" },
    { value: "$3.8M", label: "Annual Cost Savings" },
  ],

  faqs: [
    { id: "mfg-1", title: "How do you handle legacy equipment without modern sensors?", content: "We retrofit legacy machines with non-invasive sensor packages (vibration, temperature, current clamps) that require no PLC modification. Data collection starts within days, not months." },
    { id: "mfg-2", title: "What accuracy does the vision system achieve?", content: "Our systems achieve 99%+ detection rates with <0.1% false positive rates after training on your specific product. We validate against manual inspection baselines before production deployment." },
    { id: "mfg-3", title: "Can this run on-premise without cloud dependency?", content: "Yes. Edge computing handles real-time inference locally. The cloud layer is optional — used for model retraining, cross-plant analytics, and dashboard access. Critical operations never depend on internet connectivity." },
    { id: "mfg-4", title: "How long does implementation take?", content: "Predictive maintenance pilot (single asset class): 6-8 weeks. Vision QC line: 8-12 weeks. Full production intelligence platform: 4-6 months. We deliver value incrementally with each deployment phase." },
  ],
};

export function ManufacturingPage() {
  return <IndustryPageLayout data={data} />;
}

