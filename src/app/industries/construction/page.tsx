import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction & Real Estate AI | Coherent AI Labs",
  description: "AI-powered project management, document processing, site monitoring, and predictive maintenance for the built environment.",
};

import { ConstructionPage } from "./ConstructionPage";

export default function Page() {
  return <ConstructionPage />;
}
