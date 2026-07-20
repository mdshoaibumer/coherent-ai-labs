import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Readiness Assessment | Coherent AI Labs",
  description:
    "Assess your organization's AI readiness in 3 minutes. Receive personalized solution recommendations, estimated timeline, and engagement complexity — instantly.",
};

import { DiscoveryPage } from "./DiscoveryPage";

export default function Contact() {
  return <DiscoveryPage />;
}
