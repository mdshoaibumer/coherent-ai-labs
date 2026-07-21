"use client";
import {
  Truck, MapPin, Package, BarChart3, Clock, Globe,
  Bot, Database, Network, Zap, Shield, Search,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "logistics",
  eyebrow: "Logistics & Supply Chain",
  title: "AI-Orchestrated Supply Chains That Adapt in Real-Time.",
  description: "We engineer intelligent logistics systems that optimize routes, predict demand, automate warehouses, and provide end-to-end shipment visibility — transforming reactive supply chains into predictive, autonomous networks.",
  heroImage: "/assets/images/logistics_ai.png",

  challenges: [
    { title: "Inefficient Routing", description: "Static route plans ignore real-time traffic, weather, and delivery window changes. Fuel costs escalate while on-time rates decline." },
    { title: "Demand Volatility", description: "Unpredictable demand swings cause stockouts or excess inventory. Traditional forecasting cannot incorporate enough signal variables." },
    { title: "Lack of Real-Time Visibility", description: "Shipments move through multiple carriers and handoff points without unified tracking. Exception detection is hours too late." },
    { title: "Manual Document Processing", description: "Bills of lading, customs forms, and proof-of-delivery documents are processed manually, creating bottlenecks at scale." },
    { title: "Warehouse Inefficiency", description: "Manual picking routes, static slot allocation, and reactive replenishment drive up labor costs and reduce throughput." },
    { title: "Cross-Border Complexity", description: "International shipments require compliance with varying tariff codes, customs regulations, and documentation standards." },
  ],

  opportunities: [
    { title: "Route Optimization", icon: MapPin, description: "Dynamic routing that adapts to traffic, weather, delivery windows, and vehicle capacity in real-time." },
    { title: "Demand Forecasting", icon: BarChart3, description: "ML models incorporating macro trends, seasonality, promotions, and external signals for accurate demand prediction." },
    { title: "Shipment Intelligence", icon: Globe, description: "Unified tracking across carriers with predictive ETAs, exception detection, and proactive customer communication." },
    { title: "Document Automation", icon: Search, description: "AI extraction and validation of BOLs, customs forms, invoices, and compliance documents." },
    { title: "Warehouse AI", icon: Package, description: "Optimized picking paths, intelligent slot allocation, and demand-driven replenishment automation." },
    { title: "Dispatch Intelligence", icon: Bot, description: "AI dispatch systems that assign loads to drivers based on location, hours-of-service, and delivery priority." },
  ],

  solutions: [
    { title: "Route & Fleet Intelligence", icon: Truck, description: "Real-time route optimization with driver assignment, fuel optimization, and delivery window compliance.", capabilities: ["Dynamic Routing", "Load Optimization", "ETA Prediction", "HOS Compliance"] },
    { title: "Supply Chain Visibility", icon: Globe, description: "End-to-end shipment tracking with predictive alerts, exception management, and customer notifications.", capabilities: ["Multi-Carrier Tracking", "Predictive ETA", "Exception Alerts", "Customer Portal"] },
    { title: "Warehouse Automation", icon: Package, description: "AI-driven warehouse management with optimized operations from receiving through shipping.", capabilities: ["Pick Path Optimization", "Slot Allocation", "Replenishment AI", "Labor Planning"] },
    { title: "Logistics Document AI", icon: Search, description: "Automated processing of shipping documents, customs forms, and compliance paperwork.", capabilities: ["BOL Extraction", "Customs Classification", "Invoice Matching", "Compliance Check"] },
  ],

  architecture: {
    title: "Logistics AI Architecture",
    description: "A real-time platform integrating fleet telematics, warehouse systems, carrier APIs, and demand signals into unified intelligence.",
    layers: [
      { label: "Data Sources", items: ["GPS/Telematics", "WMS", "TMS", "Carrier APIs", "Weather", "Traffic"] },
      { label: "Processing", items: ["Stream Processing", "Geospatial Engine", "ML Pipeline", "Document AI"] },
      { label: "Intelligence", items: ["Route Optimizer", "Demand Forecaster", "Dispatch Agent", "Exception Detector"] },
      { label: "Integration", items: ["SAP TM", "Oracle TMS", "Carrier EDI", "Customs Systems", "ERP"] },
      { label: "Visibility", items: ["Tracking Portal", "Mobile Driver App", "Customer Notifications", "Analytics"] },
      { label: "Infrastructure", items: ["Edge (Vehicle)", "Cloud Processing", "API Gateway", "Event Bus"] },
    ],
  },

  workflow: {
    title: "Order-to-Delivery Lifecycle",
    description: "AI orchestrating the complete logistics chain from order placement through last-mile delivery.",
    steps: [
      { step: "01", title: "Demand & Planning", description: "AI forecasts demand, calculates optimal inventory positioning, and generates replenishment orders." },
      { step: "02", title: "Dispatch & Routing", description: "Intelligent load assignment, route optimization, and real-time schedule adjustments based on conditions." },
      { step: "03", title: "Transit & Monitoring", description: "Continuous tracking, predictive ETA updates, exception detection, and proactive communication." },
      { step: "04", title: "Delivery & Settlement", description: "Proof-of-delivery capture, automated invoice matching, carrier settlement, and performance analytics." },
    ],
  },

  techStack: [
    { category: "Optimization", items: ["OR-Tools", "Custom Solvers", "Genetic Algorithms", "Constraint Programming"] },
    { category: "Geospatial", items: ["PostGIS", "H3", "Mapbox", "OSRM", "Real-time Traffic APIs"] },
    { category: "ML & Forecasting", items: ["Prophet", "LightGBM", "LSTM", "Transformer Models"] },
    { category: "Integration", items: ["EDI X12", "API Connectors", "Carrier APIs", "ERP Adapters"] },
    { category: "Real-Time", items: ["Kafka", "Redis", "WebSockets", "GPS Stream Processing"] },
    { category: "Infrastructure", items: ["AWS/Azure", "Kubernetes", "Edge Computing", "IoT Hub"] },
  ],

  outcomes: [
    { value: "22%", label: "Route Cost Reduction" },
    { value: "98.5%", label: "On-Time Delivery" },
    { value: "40%", label: "Faster Document Processing" },
    { value: "3.2x", label: "Warehouse Throughput" },
  ],

  faqs: [
    { id: "log-1", title: "How does real-time route optimization work?", content: "Our system continuously monitors traffic, weather, delivery windows, and driver hours-of-service. Routes are recalculated and pushed to drivers when conditions change materially. Optimization happens in milliseconds." },
    { id: "log-2", title: "Can you integrate with our existing TMS?", content: "Yes. We integrate with SAP Transportation Management, Oracle TMS, Blue Yonder, and custom systems via APIs and EDI. Our platform augments your existing TMS with AI intelligence." },
    { id: "log-3", title: "How accurate are the demand forecasts?", content: "Our models achieve 90-95% accuracy at SKU-location level for 4-week horizons. Accuracy improves with more data history and signal variety. We continuously retrain models as patterns evolve." },
    { id: "log-4", title: "Do you support international logistics?", content: "Yes. We handle multi-modal international shipments including customs classification, duty calculation, restricted party screening, and cross-border documentation automation." },
  ],
};

export function LogisticsPage() {
  return <IndustryPageLayout data={data} />;
}

