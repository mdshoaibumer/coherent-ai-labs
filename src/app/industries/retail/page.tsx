import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retail & E-Commerce AI | Coherent AI Labs",
  description: "AI-powered recommendation engines, inventory intelligence, customer analytics, pricing automation, and warehouse optimization for modern retail.",
};

import { RetailPage } from "./RetailPage";

export default function Page() {
  return <RetailPage />;
}
