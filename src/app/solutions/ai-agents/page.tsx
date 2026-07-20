import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Agents | Coherent AI Labs",
  description: "Deploy autonomous multi-agent systems that reason, plan, and execute complex enterprise workflows. From single-task automation to collaborative agent swarms.",
};

import { AIAgentsPage } from "./AIAgentsPage";

export default function Page() {
  return <AIAgentsPage />;
}
