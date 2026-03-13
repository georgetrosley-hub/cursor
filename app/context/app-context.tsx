"use client";

import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { accounts, defaultAccountId } from "@/data/accounts";
import { createInitialAgents } from "@/data/agents";
import { getCompetitorsByAccount } from "@/data/competitors";
import {
  buildAccountSignals,
  buildExecutionItems,
  buildStakeholders,
  getCurrentPhaseLabel,
} from "@/data/account-ops";
import type {
  Account,
  Agent,
  AccountSignal,
  ExecutionItem,
  Stakeholder,
} from "@/types";

interface AppState {
  accountId: string;
  account: Account;
  agents: Agent[];
  signals: AccountSignal[];
  stakeholders: Stakeholder[];
  executionItems: ExecutionItem[];
  currentPhase: string;
  currentRecommendation: string;
  pipelineTarget: number;
}

interface AppContextValue extends AppState {
  accounts: Account[];
  competitors: ReturnType<typeof getCompetitorsByAccount>;
  pendingDecisionCount: number;
  lastDecisionTitle: string | null;
  setAccountId: (id: string) => void;
  clearLastDecision: () => void;
  handleApproveDecision: (itemId: string) => void;
  handleDeferDecision: (itemId: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [accountId, setAccountIdState] = useState(defaultAccountId);
  const [agents, setAgents] = useState<Agent[]>(() =>
    createInitialAgents()
  );
  const [executionItems, setExecutionItems] = useState<ExecutionItem[]>(() => {
    const account = accounts.find((item) => item.id === defaultAccountId) ?? accounts[0];
    return buildExecutionItems(account);
  });
  const [lastDecisionTitle, setLastDecisionTitle] = useState<string | null>(null);

  const account = accounts.find((a) => a.id === accountId) ?? accounts[0];
  const competitors = getCompetitorsByAccount(accountId);
  const signals = useMemo(
    () => buildAccountSignals(account, competitors),
    [account, competitors]
  );
  const stakeholders = useMemo(() => buildStakeholders(account), [account]);

  const setAccountId = useCallback((id: string) => {
    setAccountIdState(id);
    setAgents(createInitialAgents());
    const nextAccount = accounts.find((item) => item.id === id) ?? accounts[0];
    setExecutionItems(buildExecutionItems(nextAccount));
    setLastDecisionTitle(null);
  }, []);

  const clearLastDecision = useCallback(() => setLastDecisionTitle(null), []);
  const handleApproveDecision = useCallback((itemId: string) => {
    setExecutionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              decisionStatus: "approved" as const,
              status: "in_progress" as const,
            }
          : item
      )
    );
    const approvedItem = executionItems.find((item) => item.id === itemId);
    setLastDecisionTitle(approvedItem?.title ?? "Decision recorded");
  }, [executionItems]);

  const handleDeferDecision = useCallback((itemId: string) => {
    setExecutionItems((prev) =>
      prev.map((item) =>
        item.id === itemId
          ? {
              ...item,
              decisionStatus: "deferred" as const,
            }
          : item
      )
    );
  }, []);

  const currentPhase = getCurrentPhaseLabel(executionItems);
  const pendingDecisionCount = executionItems.filter(
    (item) => item.decisionRequired && item.decisionStatus === "pending"
  ).length;
  const pipelineTarget = account.estimatedLandValue + account.estimatedExpansionValue * 0.4;
  const currentRecommendation = signals[0]?.recommendedAction ?? `Proceed with ${account.firstWedge}.`;

  const value: AppContextValue = {
    accountId,
    account,
    agents,
    signals,
    stakeholders,
    executionItems,
    currentPhase,
    currentRecommendation,
    pipelineTarget,
    accounts,
    competitors,
    pendingDecisionCount,
    lastDecisionTitle,
    setAccountId,
    clearLastDecision,
    handleApproveDecision,
    handleDeferDecision,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
