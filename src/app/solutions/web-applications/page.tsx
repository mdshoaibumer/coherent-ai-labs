import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Applications | Coherent AI Labs",
  description: "High-performance, accessible, and scalable web applications built with modern frameworks. From SaaS platforms to internal tools — production-grade from day one.",
};

import { WebApplicationsPage } from "./WebApplicationsPage";

export default function Page() {
  return <WebApplicationsPage />;
}
