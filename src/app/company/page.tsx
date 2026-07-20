import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Company | Coherent AI Labs",
  description:
    "Why we exist, how we build, and what we believe. Coherent AI Labs engineers AI-native software with an obsessive focus on architecture, reliability, and long-term maintainability.",
};

import { CompanyPage } from "./CompanyPage";

export default function Company() {
  return <CompanyPage />;
}
