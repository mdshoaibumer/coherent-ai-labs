"use client";
import {
  ShoppingCart, TrendingUp, Users, Package, Brain,
  BarChart3, Bot, Search, Tag, Truck, Database, Zap,
} from "lucide-react";
import { IndustryPageLayout, IndustryPageData } from "../../../components/layouts/IndustryPageLayout";

const data: IndustryPageData = {
  id: "retail",
  eyebrow: "Retail & E-Commerce",
  title: "Intelligent Commerce That Scales with Demand.",
  description: "We engineer AI systems that personalize customer experiences, optimize inventory, automate pricing, and orchestrate fulfillment — turning data into revenue at every customer touchpoint.",
  heroImage: "/assets/images/retail_ai.png",
  heroImage: "/assets/images/retail_ai.png",

  challenges: [
    { title: "Generic Customer Experiences", description: "One-size-fits-all product pages and recommendations fail to convert. Visitors see irrelevant products and leave." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Inventory Forecasting Errors", description: "Overstocking wastes capital; understocking loses sales. Manual forecasting cannot account for demand signal complexity." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Support Ticket Volume", description: "Customer inquiries about orders, returns, and product questions overwhelm support teams during peak periods." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Pricing Rigidity", description: "Static pricing ignores competitor movements, demand elasticity, and margin optimization opportunities in real-time." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Fulfillment Complexity", description: "Multi-channel orders from web, app, marketplace, and in-store require unified orchestration across warehouses." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Customer Churn", description: "Lack of predictive signals means retention efforts are reactive — by the time you notice churn, the customer is gone." },
  heroImage: "/assets/images/retail_ai.png",
  ],

  opportunities: [
    { title: "Recommendation Engines", icon: Brain, description: "Collaborative and content-based filtering that personalizes product discovery across every channel in real-time." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Demand Forecasting", icon: TrendingUp, description: "ML models incorporating seasonality, trends, events, and external signals to predict demand with high accuracy." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Customer Support Agents", icon: Bot, description: "AI agents handling order status, returns, product questions, and escalation — 24/7 with human-level quality." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Dynamic Pricing", icon: Tag, description: "Real-time price optimization balancing margin targets, competitor positioning, and demand elasticity." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Customer Analytics", icon: BarChart3, description: "Unified customer profiles with lifetime value prediction, churn scoring, and segment-level behavior analysis." },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Warehouse Intelligence", icon: Package, description: "AI-optimized picking routes, slot allocation, and replenishment triggers based on demand forecasts." },
  heroImage: "/assets/images/retail_ai.png",
  ],

  solutions: [
    { title: "Personalization Engine", icon: Users, description: "Real-time recommendation system serving personalized products, content, and offers across web, email, and app.", capabilities: ["Collaborative Filtering", "Content-Based", "Context-Aware", "A/B Testing"] },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Inventory Intelligence", icon: Package, description: "Demand forecasting with automated replenishment, safety stock optimization, and multi-location allocation.", capabilities: ["Demand Forecasting", "Auto-Replenishment", "Allocation", "Markdown Optimization"] },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Commerce AI Agents", icon: Bot, description: "Conversational agents for customer support, product discovery, personal shopping, and order management.", capabilities: ["Order Support", "Product Search", "Returns", "Upselling"] },
  heroImage: "/assets/images/retail_ai.png",
    { title: "Revenue Optimization", icon: TrendingUp, description: "Dynamic pricing, promotion effectiveness analysis, and customer lifetime value maximization.", capabilities: ["Price Optimization", "Promo Effectiveness", "LTV Prediction", "Churn Prevention"] },
  heroImage: "/assets/images/retail_ai.png",
  ],

  architecture: {
    title: "Retail AI Architecture",
    description: "A real-time, event-driven platform processing customer interactions, inventory signals, and market data into actionable intelligence.",
  heroImage: "/assets/images/retail_ai.png",
    layers: [
      { label: "Data Ingestion", items: ["Clickstream", "Transaction Log", "Inventory Feed", "Market Data", "CRM"] },
      { label: "Processing", items: ["Real-time Events", "Batch ML", "Feature Store", "Embedding Pipeline"] },
      { label: "Intelligence", items: ["Recommendation Model", "Demand Forecast", "Price Optimizer", "Churn Predictor"] },
      { label: "Serving", items: ["Real-time API", "Edge Cache", "A/B Framework", "Personalization CDN"] },
      { label: "Channels", items: ["Web", "Mobile App", "Email", "Marketplace", "In-Store"] },
      { label: "Integration", items: ["Shopify/Magento", "ERP", "WMS", "Payment", "Marketing Platforms"] },
    ],
  },

  workflow: {
    title: "Customer Lifecycle Automation",
    description: "AI orchestrating every stage of the customer journey from discovery through retention.",
  heroImage: "/assets/images/retail_ai.png",
    steps: [
      { step: "01", title: "Acquisition & Discovery", description: "Personalized product recommendations, intelligent search, and dynamic landing pages that adapt to visitor intent." },
  heroImage: "/assets/images/retail_ai.png",
      { step: "02", title: "Conversion & Purchase", description: "Smart pricing, contextual upselling, abandoned cart recovery agents, and frictionless checkout optimization." },
  heroImage: "/assets/images/retail_ai.png",
      { step: "03", title: "Fulfillment & Delivery", description: "Intelligent order routing, warehouse picking optimization, carrier selection, and proactive delivery updates." },
  heroImage: "/assets/images/retail_ai.png",
      { step: "04", title: "Retention & Growth", description: "Churn prediction, personalized re-engagement campaigns, loyalty optimization, and lifetime value maximization." },
  heroImage: "/assets/images/retail_ai.png",
    ],
  },

  techStack: [
    { category: "ML & AI", items: ["TensorFlow", "PyTorch", "XGBoost", "Embedding Models", "LLMs"] },
    { category: "Data Platform", items: ["Snowflake", "Kafka", "Feature Store", "dbt", "Airflow"] },
    { category: "Real-Time", items: ["Redis", "Elasticsearch", "GraphQL Subscriptions", "Edge Functions"] },
    { category: "Commerce", items: ["Shopify Plus", "Magento", "BigCommerce", "Custom Headless"] },
    { category: "Marketing", items: ["Klaviyo", "Braze", "Segment", "Google Analytics 4"] },
    { category: "Infrastructure", items: ["AWS", "Kubernetes", "CDN", "A/B Testing Platform"] },
  ],

  outcomes: [
    { value: "35%", label: "Revenue Increase" },
    { value: "92%", label: "Forecast Accuracy" },
    { value: "60%", label: "Support Automation" },
    { value: "2.4x", label: "Conversion Lift" },
  ],

  faqs: [
    { id: "ret-1", title: "How long until we see revenue impact?", content: "Recommendation engines typically show measurable conversion lift within 2-4 weeks of deployment. Full personalization platforms with demand forecasting show ROI within the first quarter." },
    { id: "ret-2", title: "Can you integrate with our existing e-commerce platform?", content: "Yes. We integrate with Shopify Plus, Magento, BigCommerce, WooCommerce, and custom headless architectures. Our systems work alongside your existing stack via APIs." },
    { id: "ret-3", title: "How do you handle seasonal demand spikes?", content: "Our infrastructure auto-scales for peak events (Black Friday, flash sales). Demand models are retrained with seasonal signals, and inventory recommendations adjust dynamically weeks in advance." },
    { id: "ret-4", title: "What data do you need to get started?", content: "Minimum viable: product catalog, transaction history (12+ months), and clickstream data. We can start with recommendations using just catalog + transactions, then layer in more signals over time." },
  ],
};

export function RetailPage() {
  return <IndustryPageLayout data={data} />;
}

