import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Finance & Insurance AI | Coherent AI Labs",
  description: "AI-powered fraud detection, risk analysis, document intelligence, claims automation, and compliance monitoring for financial institutions.",
};

import { FinancePage } from "./FinancePage";

export default function Page() {
  return <FinancePage />;
}
