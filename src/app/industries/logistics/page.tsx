import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain AI | Coherent AI Labs",
  description: "AI-powered route optimization, fleet intelligence, warehouse automation, demand forecasting, and real-time shipment tracking for modern logistics operations.",
};

import { LogisticsPage } from "./LogisticsPage";

export default function Page() {
  return <LogisticsPage />;
}
