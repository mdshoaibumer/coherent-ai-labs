import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Software Engineering | Coherent AI Labs",
  description: "Bespoke full-stack enterprise applications built for the AI era. Microservices, API-first architecture, and modern cloud-native platforms that scale.",
};

import { EnterpriseSoftwarePage } from "./EnterpriseSoftwarePage";

export default function Page() {
  return <EnterpriseSoftwarePage />;
}
