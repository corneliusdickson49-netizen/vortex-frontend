"use client";

import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useMemo } from "react";
import { EmptyState } from "@/components/EmptyState";
import { SolverTimeline } from "@/components/SolverTimeline";
import { SolverPerformance } from "@/components/SolverPerformance";
import { SlashEventFeed } from "@/components/SlashEventFeed";
import { useSolver } from "@/hooks/useSolver";
import { useIntentFeed } from "@/hooks/useIntentFeed";
import { useSlashEvents } from "@/hooks/useSlashEvents";
import { useTranslation } from "@/lib/i18n/I18nProvider";
import { isValidStellarPublicKey } from "@/lib/stellarAddress";
import { sanitizeDisplayText } from "@/lib/textSafety";
import { summarizePenalties } from "@/lib/slashEvents";

const PENALTY_WINDOW_DAYS = 30;

const usdCompact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

export default function SolverDetailPage({ params }: { params: { address: string } }) {
  const { t } = useTranslation();
  const isValidAddress = isValidStellarPublicKey(params.address);
  const { solver, isLoading, error } = useSolver(isValidAddress ? params.address : null);
  const { items: fillHistory, isLoading: historyLoading, error: historyError } = useIntentFeed();
  const slash = useSlashEvents(isValidAddress ? params.address : null);
  const solverFills = useMemo(
    () => fillHistory.filter((item) => item.solver === solver?.address),
    [fillHistory, solver?.address],
  );
  const penalties = useMemo(
    () => summarizePenalties(slash.events, PENALTY_WINDOW_DAYS),
    [slash.events],
  );

  return (
    <div className="min-h-screen">
      <Nav
        variant="breadcrumb"
        label={`Solver ${params.address.slice(0, 8)}`}
      />

      <main
        id="main-content"
        className="max-w-3xl mx-auto px-3 sm:px-5 py-8 sm:py-12"
      >
        <Link
          href="/solve"
          tabIndex={-1}
          className="text-xs text-vx-sage hover:underline mb-6 inline-block focus:outline-none focus:ring-2 focus:ring-vx-sage focus:ring-offset-2 focus:ring-offset-vx-ink rounded"
        >
          ← Back to solvers
        </Link>

        {!isValidAddress ? (
          <EmptyState variant="error" message="Invalid solver address format." />
        ) : isLoading ? (
          <div
            className="card p-6 sm:p-8 space-y-3 animate-pulse"
            data-testid="skeleton"
          >
            <div className="h-6 w-2/3 bg-vx-surface rounded animate-pulse" />
            <div className="h-4 w-1/3 bg-vx-surface rounded animate-pulse" />
          </div>
        ) : error ? (
          <EmptyState variant="error" message="Couldn't load solver details right now. Try again shortly." />
        ) : !solver ? (
          <EmptyState variant="error" message="No solver found at that address." />
        ) : (
          <>
            {/* Header card */}
            <div className="card p-4 sm:p-6 space-y-4 sm:space-y-6 mb-6">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <div>
                  <div className="eyebrow mb-1 sm:mb-2 text-xs">Solver</div>
                  <h1 className="text-lg sm:text-2xl font-bold text-vx-text break-words">
                    {sanitizeDisplayText(solver.name)}
                  </h1>
                </div>
                <div
                  className={`flex-shrink-0 px-2 sm:px-3 py-1 rounded-lg text-xs font-semibold border whitespace-nowrap ${
                    solver.status === "active"
                      ? "bg-vx-sage-bg text-vx-sage border-vx-sage/30"
                      : "bg-vx-surface text-vx-muted border-vx-border"
                  }`}
                  aria-label={`Solver status: ${solver.status}`}
                >
                  {solver.status === "active" ? "Active" : "Inactive"}
                </div>
              </div>

              <div className="text-xs sm:text-sm text-vx-muted font-mono break-all">
                Address: {params.address}
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { label: "Fills", value: solver.fills },
                  { label: "Failed", value: solver.failed },
                  { label: "Success Rate", value: `${solver.successRatePct}%` },
                  {
                    label: "Total Volume",
                    value: usdCompact.format(solver.volumeUsd),
                  },
                  {
                    label: "Avg Fill Time",
                    value: `${solver.avgFillTimeSeconds}s`,
                  },
                  { label: "Bond", value: usdCompact.format(solver.bondUsd) },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-vx-surface/40 rounded-lg p-3">
                    <div className="eyebrow text-[10px] sm:text-xs mb-1">
                      {label}
                    </div>
                    <div className="num text-xs sm:text-sm font-semibold text-vx-text">
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chain coverage */}
              <div className="pt-3 sm:pt-4 border-t border-vx-border">
                <h2 className="eyebrow text-xs mb-2">Supported Chains</h2>
                <div className="flex flex-wrap gap-2">
                  {solver.chains.length > 0 ? (
                    solver.chains.map(chain => (
                      <span 
                        key={chain} 
                        className="text-xs px-2 py-1 bg-vx-surface rounded text-vx-text border border-vx-border"
                      >
                        {chain}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-vx-muted">
                      No chains supported yet
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ── Solver Timeline ─────────────────────────────────────────── */}
            <div className="mb-6">
              <SolverTimeline
                solverAddress={solver.address}
                fills={fillHistory}
                isLoading={historyLoading && fillHistory.length === 0}
              />
            </div>

            {/* ── Performance, coverage and fill history ────────────────── */}
            {historyLoading && fillHistory.length === 0 ? (
              <div className="card p-5 space-y-3">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="h-16 bg-vx-surface/40 rounded-lg animate-pulse" />
                ))}
              </div>
            ) : historyError ? (
              <div role="alert" className="card p-6 sm:p-8 text-center text-sm text-vx-muted">
                Couldn&apos;t load fill history right now.
              </div>
            ) : (
              <SolverPerformance fills={solverFills} avgFillTimeSeconds={solver.avgFillTimeSeconds} />
            )}

            {/* ── Penalties ─────────────────────────────────────────────── */}
            <div className="mt-6 space-y-3">
              <div className="card p-4 flex flex-wrap items-center gap-4 text-xs" aria-label={t("slash.summary.title")}>
                <span className="eyebrow">{t("slash.summary.window", { days: PENALTY_WINDOW_DAYS })}</span>
                <span className="text-vx-text num">{t("slash.summary.count", { count: penalties.count })}</span>
                <span className="text-vx-text num">{t("slash.summary.total", { amount: penalties.totalUsd })}</span>
                <span className="text-vx-muted">
                  <span aria-hidden="true">{penalties.trend === "up" ? "▲ " : penalties.trend === "down" ? "▼ " : "■ "}</span>
                  {t(`slash.trend.${penalties.trend}`)}
                </span>
              </div>
              <SlashEventFeed
                events={slash.events}
                isLoading={slash.isLoading}
                error={slash.error}
                hasMore={slash.hasMore}
                isLoadingMore={slash.isLoadingMore}
                onLoadMore={slash.loadMore}
                showSolver={false}
              />
            </div>
          </>
        )}
      </main>

      <Footer />
    </div>
  );
}
