import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Applications | Coherent AI Labs",
  description: "Native iOS and Android applications with offline-first architecture, real-time sync, push notifications, and enterprise mobility management.",
};

import { MobileApplicationsPage } from "./MobileApplicationsPage";

export default function Page() {
  return <MobileApplicationsPage />;
}
