import type { Competitor } from "@/types";

export const competitorCategories = [
  "frontier",
  "coding",
  "search",
  "workflow",
  "cloud",
  "vertical",
] as const;

export const competitors: Competitor[] = [
  {
    id: "github",
    name: "GitHub Copilot",
    category: "coding",
    strengthAreas: ["VS Code integration", "broad adoption", "Microsoft backing", "Chat"],
    cursorDifferentiation: ["Full codebase understanding", "Agents + Tab + Composer", "bring-your-own-model", "enterprise controls"],
    accountRiskLevel: 88,
    detectedFootprint: "Copilot, Copilot Chat",
  },
  {
    id: "openai",
    name: "OpenAI / ChatGPT",
    category: "frontier",
    strengthAreas: ["GPT-4", "broad adoption", "API ecosystem"],
    cursorDifferentiation: ["Purpose-built for code", "codebase indexing", "agentic workflows", "IDE-native"],
    accountRiskLevel: 75,
    detectedFootprint: "ChatGPT Team, API usage",
  },
  {
    id: "microsoft",
    name: "Microsoft Copilot",
    category: "workflow",
    strengthAreas: ["M365 bundling", "Teams", "entrenched footprint", "enterprise relationships"],
    cursorDifferentiation: ["Best-in-class coding AI", "no lock-in to one model", "agents that build and test", "SOC 2"],
    accountRiskLevel: 85,
    detectedFootprint: "Copilot for Microsoft 365, GitHub Copilot",
  },
  {
    id: "google",
    name: "Google Gemini",
    category: "frontier",
    strengthAreas: ["Gemini", "Search integration", "Google Workspace", "Vertex AI"],
    cursorDifferentiation: ["Cursor built for developers", "codebase-native", "Fortune 500 trust", "secure indexing"],
    accountRiskLevel: 70,
    detectedFootprint: "Gemini for Workspace, Vertex AI",
  },
  {
    id: "other",
    name: "Other IDEs / tools",
    category: "coding",
    strengthAreas: ["Incumbency", "varied tooling"],
    cursorDifferentiation: ["Unified AI coding experience", "Tab + Composer + Agents", "enterprise readiness"],
    accountRiskLevel: 60,
  },
];

export function getCompetitorsByAccount(accountId: string): Competitor[] {
  return competitors.map((c) => ({
    ...c,
    accountRiskLevel: c.accountRiskLevel,
  }));
}
