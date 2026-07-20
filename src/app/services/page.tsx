import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engagement Models | Coherent AI Labs",
  description:
    "From discovery workshops to dedicated engineering teams. Choose the engagement model that fits your timeline, team structure, and business objectives.",
};

import { EngagementModelsPage } from "./EngagementModelsPage";

export default function Services() {
  return <EngagementModelsPage />;
}
