"use client";
import {
  Laptop, Cpu, HardDrive, Wifi, Shield, Settings,
  Monitor, Database, Zap, Lock, Layers, Network,
} from "lucide-react";
import { SolutionPageLayout, SolutionPageData } from "../../../components/layouts/SolutionPageLayout";

const data: SolutionPageData = {
  eyebrow: "Desktop Applications",
  title: "Native Desktop Software with Maximum Performance.",
  description:
    "We build high-performance desktop applications for Windows, macOS, and Linux — leveraging native APIs, hardware acceleration, and offline-first architecture for enterprise workstations.",

  problem: {
    headline: "Some Workloads Demand Desktop-Grade Performance.",
    description:
      "Not every application belongs in a browser. Complex data processing, hardware integration, CAD tools, media editing, and sensitive offline workflows require native desktop performance and system-level access.",
    painPoints: [
      "Browser-based tools hit performance ceilings with large datasets, complex rendering, or real-time processing",
      "Hardware integration (serial ports, USB devices, GPU compute) is impossible from web applications",
      "Offline-critical workflows in regulated environments cannot depend on network connectivity",
      "Multi-monitor, keyboard-heavy professional workflows need native window management and shortcuts",
      "Enterprise security policies restrict browser-based access to sensitive data and systems",
    ],
  },

  features: [
    { title: "Native Performance", description: "Direct hardware access, GPU acceleration, and multi-threaded processing for compute-intensive workloads.", icon: Cpu },
    { title: "Cross-Platform", description: "Single codebase targeting Windows, macOS, and Linux with platform-native look and feel.", icon: Monitor },
    { title: "Offline-First", description: "Full functionality without network connectivity. Local data persistence with optional cloud sync.", icon: Wifi },
    { title: "Hardware Integration", description: "Serial devices, USB peripherals, GPUs, printers, scanners, and custom hardware via native APIs.", icon: HardDrive },
    { title: "Auto-Updates", description: "Silent background updates with rollback capability. Delta updates minimize bandwidth usage.", icon: Settings },
    { title: "Enterprise Distribution", description: "MSI/PKG installers, group policy support, silent deployment, and enterprise license management.", icon: Shield },
  ],

  architecture: {
    title: "Desktop Architecture",
    description: "Multi-process architecture with native UI rendering, sandboxed plugins, and secure local data storage.",
    layers: [
      { label: "UI Layer", items: ["Electron/Tauri", "Native Widgets", "Custom Rendering", "Theming Engine"] },
      { label: "Application Core", items: ["Business Logic", "State Management", "Plugin System", "Command Palette"] },
      { label: "Data Layer", items: ["SQLite", "LevelDB", "File System", "Encrypted Storage", "Sync Engine"] },
      { label: "System Integration", items: ["OS Notifications", "File Associations", "Protocol Handlers", "Tray/Menu Bar"] },
      { label: "Hardware Access", items: ["USB/Serial", "GPU Compute", "Audio/Video", "Printers", "Peripherals"] },
      { label: "Distribution", items: ["Auto-Updater", "Code Signing", "Installers", "License Server", "Crash Reports"] },
    ],
  },

  techStack: [
    { category: "Framework", items: ["Tauri", "Electron", "Qt", ".NET MAUI", "Swift (macOS)"] },
    { category: "Languages", items: ["Rust", "TypeScript", "C++", "C#", "Swift"] },
    { category: "UI", items: ["React", "Svelte", "Native Widgets", "Custom Canvas", "WebGPU"] },
    { category: "Storage", items: ["SQLite", "LevelDB", "IndexedDB", "OS Keychain", "Encrypted Volumes"] },
    { category: "Build & Deploy", items: ["Tauri Bundler", "Electron Forge", "Code Signing", "Notarization", "NSIS/WiX"] },
    { category: "Quality", items: ["Spectron", "Playwright", "Unit Tests", "Performance Profiling", "Memory Analysis"] },
  ],

  process: [
    { step: "01", title: "Requirements & Platform Strategy", description: "Define target platforms, performance budgets, hardware requirements, and distribution model." },
    { step: "02", title: "Architecture & Prototyping", description: "Design multi-process architecture, plugin system, data layer, and build rapid interactive prototypes." },
    { step: "03", title: "Development & Performance", description: "Iterative builds with performance profiling, memory analysis, and cross-platform testing on real hardware." },
    { step: "04", title: "Distribution & Support", description: "Code signing, installer creation, auto-update infrastructure, and enterprise deployment automation." },
  ],

  benefits: [
    { value: "< 100ms", label: "Response Time" },
    { value: "3", label: "Platforms Supported" },
    { value: "100%", label: "Offline Capable" },
    { value: "Native", label: "Hardware Access" },
  ],

  faqs: [
    { id: "desk-1", title: "Electron or Tauri — which is better?", content: "Tauri for smaller bundle size (Rust backend, system WebView) and better security model. Electron for mature ecosystem, wider platform support, and when you need full Chromium control. We advise based on your performance and distribution requirements." },
    { id: "desk-2", title: "Can you build for all three platforms from one codebase?", content: "Yes. Using Tauri or Electron, we maintain a single TypeScript/React codebase with platform-specific native modules where needed. Build pipelines produce signed installers for Windows, macOS, and Linux." },
    { id: "desk-3", title: "How do you handle enterprise deployment at scale?", content: "We produce MSI packages for Windows (Group Policy deployable), PKG/DMG for macOS (JAMF compatible), and DEB/RPM for Linux. Silent install, auto-update, and license management are included." },
    { id: "desk-4", title: "Can desktop apps integrate with AI capabilities?", content: "Absolutely. We embed local LLM inference (via llama.cpp or ONNX Runtime) for offline AI, plus cloud-connected capabilities when online. Desktop apps are ideal for privacy-sensitive AI workloads." },
  ],
};

export function DesktopApplicationsPage() {
  return <SolutionPageLayout data={data} />;
}
