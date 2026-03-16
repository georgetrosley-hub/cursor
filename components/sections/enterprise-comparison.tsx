"use client";

import { motion } from "framer-motion";
import { Shield, Check, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type Strength = "strong" | "strongest" | "moderate" | "improving" | "unknown";

const rows: {
  factor: string;
  cursor: Strength;
  copilot: Strength;
  openai: Strength;
  gemini?: Strength;
}[] = [
  {
    factor: "Codebase understanding",
    cursor: "strongest",
    copilot: "moderate",
    openai: "moderate",
    gemini: "unknown",
  },
  {
    factor: "Enterprise governance",
    cursor: "strong",
    copilot: "improving",
    openai: "moderate",
    gemini: "unknown",
  },
  {
    factor: "Agentic workflows",
    cursor: "strong",
    copilot: "moderate",
    openai: "moderate",
  },
  {
    factor: "Data & indexing posture",
    cursor: "strong",
    copilot: "moderate",
    openai: "moderate",
  },
  {
    factor: "Regulated / security fit",
    cursor: "strong",
    copilot: "moderate",
    openai: "moderate",
  },
];

function StrengthBadge({ s }: { s: Strength }) {
  if (s === "strongest") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
        <Check className="h-3 w-3" strokeWidth={2.5} />
        strongest
      </span>
    );
  }
  if (s === "strong") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-400/90">
        <Check className="h-3 w-3" strokeWidth={2.5} />
        strong
      </span>
    );
  }
  if (s === "improving") {
    return (
      <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-400/90">
        improving
      </span>
    );
  }
  if (s === "moderate") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-text-muted">
        <Minus className="h-3 w-3" strokeWidth={2} />
        moderate
      </span>
    );
  }
  return (
    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-text-faint">
      unknown
    </span>
  );
}

export function EnterpriseComparison() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 sm:space-y-10"
    >
      <SectionHeader
        title="Cursor vs Competitors"
        subtitle="Enterprise buying decisions — codebase AI, governance, and agentic workflows. How we win deals."
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-[13px]">
          <thead>
            <tr className="border-b border-surface-border/40">
              <th className="pb-3 pr-4 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                Factor
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-accent">
                Cursor
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                Copilot
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                OpenAI
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                Gemini
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <motion.tr
                key={row.factor}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="border-b border-surface-border/20 last:border-b-0"
              >
                <td className="py-3 pr-4 font-medium text-text-primary">
                  {row.factor}
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.cursor} />
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.copilot} />
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.openai} />
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.gemini ?? "unknown"} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-start gap-3 rounded-xl border border-accent/20 bg-accent/[0.06] px-4 py-3">
        <Shield className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.8} />
        <div>
          <p className="text-[12px] font-medium text-text-primary">
            Deal positioning intelligence
          </p>
          <p className="mt-1 text-[11px] text-text-muted">
            Use this framing to help enterprise buyers compare on what matters: codebase-native AI, secure indexing, and agentic workflows — not just completions.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
