"use client";
import {
  Smartphone, Wifi, Bell, Database, Shield, Cloud,
  RefreshCw, Fingerprint, Zap, MapPin, Camera, Lock,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "Mobile Applications",
  title: "Native Mobile Experiences for iOS and Android.",
  description:
    "We engineer premium native applications with offline-first architecture, real-time synchronization, biometric security, and deep platform integration — delivering enterprise-grade mobility.",

  problem: {
    headline: "Enterprise Mobility Requires More Than a Responsive Website.",
    description:
      "Mobile users demand native performance, offline capability, and seamless device integration. Web wrappers and hybrid frameworks create compromised experiences that enterprise users reject.",
    painPoints: [
      "Hybrid apps feel sluggish — 300ms touch delay, janky scrolling, and slow animations",
      "No offline capability means field workers cannot operate without cellular connectivity",
      "Data sync conflicts between mobile and backend create data integrity issues",
      "Push notification systems are unreliable without proper background task management",
      "Enterprise security requirements (MDM, biometrics, certificate pinning) need native APIs",
    ],
  },

  features: [
    { title: "Offline-First Architecture", description: "Full functionality without connectivity. Local database sync with conflict resolution when connection resumes.", icon: Wifi },
    { title: "Real-Time Synchronization", description: "Bidirectional data sync with optimistic updates, conflict detection, and automatic reconciliation.", icon: RefreshCw },
    { title: "Push Notifications", description: "Rich notifications with deep linking, silent updates, and configurable channels for enterprise communication.", icon: Bell },
    { title: "Biometric Security", description: "Face ID, Touch ID, and device-level encryption for enterprise data protection on every access.", icon: Fingerprint },
    { title: "Platform Integration", description: "Camera, GPS, NFC, Bluetooth, HealthKit, and device sensors accessible through native APIs.", icon: Camera },
    { title: "Enterprise Mobility", description: "MDM compatibility, managed app configuration, VPN integration, and certificate-based authentication.", icon: Shield },
  ],

  architecture: {
    title: "Mobile Architecture",
    description: "Clean architecture with offline-first data layer, platform-native UI, and secure synchronization protocols.",
    layers: [
      { label: "Presentation", items: ["SwiftUI", "Jetpack Compose", "Native Navigation", "Design System"] },
      { label: "Business Logic", items: ["Use Cases", "Domain Models", "Validators", "State Machines"] },
      { label: "Data Layer", items: ["Local DB", "Sync Engine", "API Client", "Cache Manager", "File Storage"] },
      { label: "Platform Services", items: ["Push Notifications", "Background Tasks", "Location", "Camera", "Biometrics"] },
      { label: "Security", items: ["Keychain/Keystore", "Certificate Pinning", "Encryption", "Secure Enclave"] },
      { label: "Infrastructure", items: ["CI/CD", "Beta Distribution", "Crash Reporting", "Analytics", "A/B Testing"] },
    ],
  },

  techStack: [
    { category: "iOS", items: ["Swift", "SwiftUI", "UIKit", "Core Data", "CloudKit", "Combine"] },
    { category: "Android", items: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Coroutines"] },
    { category: "Cross-Platform", items: ["React Native", "Kotlin Multiplatform", "Shared Business Logic"] },
    { category: "Backend", items: ["GraphQL Subscriptions", "WebSockets", "Firebase", "Custom Sync API"] },
    { category: "Quality", items: ["XCTest", "Espresso", "Detox", "Fastlane", "App Store Connect API"] },
    { category: "Enterprise", items: ["MDM APIs", "SCEP", "AppConfig", "Intune", "JAMF"] },
  ],

  process: [
    { step: "01", title: "Platform Strategy", description: "Define native vs cross-platform approach, offline requirements, and platform-specific capabilities." },
    { step: "02", title: "UX & Prototyping", description: "Platform-native interaction patterns, accessibility, and high-fidelity prototypes for user testing." },
    { step: "03", title: "Development & QA", description: "Feature sprints with device lab testing, performance profiling, and automated regression suites." },
    { step: "04", title: "Launch & Distribution", description: "App Store optimization, enterprise distribution (MDM), beta programs, and phased rollouts." },
  ],

  benefits: [
    { value: "60fps", label: "Native Performance" },
    { value: "100%", label: "Offline Capability" },
    { value: "< 2s", label: "Cold Start Time" },
    { value: "4.8★", label: "Target Store Rating" },
  ],

  faqs: [
    { id: "mob-1", title: "Native or cross-platform — which do you recommend?", content: "For maximum performance and platform fidelity: native (Swift/Kotlin). For shared business logic with native UI: Kotlin Multiplatform. For rapid prototyping or budget-constrained projects: React Native. We advise based on your specific requirements." },
    { id: "mob-2", title: "How do you handle offline data conflicts?", content: "We implement last-write-wins with vector clocks for simple cases, and operational transforms or CRDTs for complex collaborative scenarios. Conflicts are surfaced to users only when automatic resolution is impossible." },
    { id: "mob-3", title: "Can you integrate with our existing MDM solution?", content: "Yes. We support all major MDM platforms (Intune, JAMF, Workspace ONE) with managed app configuration, per-app VPN, and enterprise certificate distribution." },
    { id: "mob-4", title: "How long does a typical mobile app project take?", content: "MVP for a single platform: 8-12 weeks. Full-featured dual-platform app: 16-24 weeks. Enterprise apps with offline sync and MDM: 20-30 weeks. Delivered incrementally with beta releases every 2 weeks." },
  ],
};

export function MobileApplicationsPage() {
  return <SolutionPageLayout data={data} />;
}
