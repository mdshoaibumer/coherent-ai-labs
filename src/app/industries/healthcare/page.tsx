import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare AI Solutions | Coherent AI Labs",
  description: "HIPAA-compliant AI systems for clinical workflows, patient engagement, medical document processing, and hospital operations automation.",
};

import { HealthcarePage } from "./HealthcarePage";

export default function Page() {
  return <HealthcarePage />;
}
