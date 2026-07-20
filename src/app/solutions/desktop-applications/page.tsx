import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desktop Applications | Coherent AI Labs",
  description: "High-performance native desktop applications for Windows, macOS, and Linux. Offline-capable, hardware-integrated, and enterprise-ready.",
};

import { DesktopApplicationsPage } from "./DesktopApplicationsPage";

export default function Page() {
  return <DesktopApplicationsPage />;
}
