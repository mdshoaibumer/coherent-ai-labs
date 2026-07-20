import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workflow Automation | Coherent AI Labs",
  description: "Replace manual business processes with intelligent automation pipelines. From document processing to CRM updates — end-to-end workflows that run autonomously.",
};

import { WorkflowAutomationPage } from "./WorkflowAutomationPage";

export default function Page() {
  return <WorkflowAutomationPage />;
}
