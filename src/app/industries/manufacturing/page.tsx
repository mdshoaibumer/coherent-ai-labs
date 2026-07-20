import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing AI Solutions | Coherent AI Labs",
  description: "Predictive maintenance, computer vision quality inspection, factory automation, and production intelligence for modern manufacturing operations.",
};

import { ManufacturingPage } from "./ManufacturingPage";

export default function Page() {
  return <ManufacturingPage />;
}
