import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education AI Solutions | Coherent AI Labs",
  description: "AI-powered learning assistants, student analytics, automated assessment, knowledge search, and institutional automation for educational organizations.",
};

import { EducationPage } from "./EducationPage";

export default function Page() {
  return <EducationPage />;
}
