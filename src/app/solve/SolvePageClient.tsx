"use client";

import { useEffect, useRef, useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/lib/i18n/I18nProvider";
import type { MessageKey } from "@/lib/i18n";
import { LeaderboardTab } from "./_components/LeaderboardTab";
import { OpenIntentsTab } from "./_components/OpenIntentsTab";
import { RegisterSolverTab } from "./_components/RegisterSolverTab";
import { SOLVE_TABS, useSolveTab, type SolveTab } from "./_components/useSolveTab";

const STEPS: { n: MessageKey; title: MessageKey; body: MessageKey }[] = [
  { n: "solve.steps.registerBond.number", title: "solve.steps.registerBond.title", body: "solve.steps.registerBond.body" },
  { n: "solve.steps.watchIntentFeed.number", title: "solve.steps.watchIntentFeed.title", body: "solve.steps.watchIntentFeed.body" },
  { n: "solve.steps.fillAndEarn.number", title: "solve.steps.fillAndEarn.title", body: "solve.steps.fillAndEarn.body" },
];

const PANELS: Record<SolveTab, () => React.ReactElement> = {
  leaderboard: LeaderboardTab,
  intents: OpenIntentsTab,
  register: RegisterSolverTab,
};

export default function SolvePageClient() {
  const { t } = useTranslation();
  const [tab, setTab] = useSolveTab();
  // Panels mount on first visit and then stay mounted (hidden) so each tab
  // keeps its scroll position, sort order and form input across switches.
  const [visited, setVisited] = useState<ReadonlySet<SolveTab>>(() => new Set([tab]));
  const tabRefs = useRef<Record<SolveTab, HTMLButtonElement | null>>({ leaderboard: null, intents: null, register: null });

  useEffect(() => {
    setVisited((current) => (current.has(tab) ? current : new Set(current).add(tab)));
  }, [tab]);

  const select = (next: SolveTab, focus = false) => {
    setTab(next);
    if (focus) tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event: React.KeyboardEvent) => {
    const index = SOLVE_TABS.indexOf(tab);
    const last = SOLVE_TABS.length - 1;
    const target =
      event.key === "ArrowRight" ? SOLVE_TABS[index === last ? 0 : index + 1]
      : event.key === "ArrowLeft" ? SOLVE_TABS[index === 0 ? last : index - 1]
      : event.key === "Home" ? SOLVE_TABS[0]
      : event.key === "End" ? SOLVE_TABS[last]
      : null;
    if (!target) return;
    event.preventDefault();
    select(target, true);
  };

  return (
    <div className="min-h-screen">
      <Nav variant="breadcrumb" label={t("solve.nav.label")} />

      <main id="main-content" className="max-w-5xl mx-auto px-5 py-12">
        <div className="mb-10">
          <div className="eyebrow mb-3">{t("solve.hero.eyebrow")}</div>
          <h1 className="text-3xl font-bold text-vx-text mb-3">{t("solve.hero.title")}</h1>
          <p className="text-vx-muted text-sm max-w-lg leading-relaxed">{t("solve.hero.description")}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {STEPS.map((step) => (
            <div key={step.n} className="card p-4 sm:p-5">
              <div className="font-mono text-xs text-vx-sage mb-2 sm:mb-3">{t(step.n)}</div>
              <h3 className="text-xs sm:text-sm font-semibold text-vx-text mb-2">{t(step.title)}</h3>
              <p className="text-xs text-vx-muted leading-relaxed">{t(step.body)}</p>
            </div>
          ))}
        </div>

        <div
          role="tablist"
          aria-label={t("solve.tabs.ariaLabel")}
          onKeyDown={onTabKeyDown}
          className="flex border-b border-vx-border gap-1 mb-8 overflow-x-auto"
        >
          {SOLVE_TABS.map((tabId) => (
            <button
              key={tabId}
              ref={(el) => {
                tabRefs.current[tabId] = el;
              }}
              type="button"
              role="tab"
              id={`tab-${tabId}`}
              aria-selected={tab === tabId}
              aria-controls={`panel-${tabId}`}
              tabIndex={tab === tabId ? 0 : -1}
              onClick={() => select(tabId)}
              className={`px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium capitalize transition-all whitespace-nowrap
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-vx-sage
                ${tab === tabId ? "bg-vx-card text-vx-text border border-vx-border" : "text-vx-muted hover:text-vx-text"}`}
            >
              {t(`solve.tabs.${tabId}`)}
            </button>
          ))}
        </div>

        {SOLVE_TABS.map((tabId) => {
          if (!visited.has(tabId) && tab !== tabId) return null;
          const Panel = PANELS[tabId];
          return (
            <div
              key={tabId}
              id={`panel-${tabId}`}
              role="tabpanel"
              aria-labelledby={`tab-${tabId}`}
              hidden={tab !== tabId}
              tabIndex={0}
            >
              <Panel />
            </div>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}
