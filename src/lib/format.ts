const DEFAULT_LOCALE = "en-US";

function resolveLocale(locale?: string): string {
  if (locale) return locale;

  if (typeof navigator !== "undefined" && navigator.language) {
    return navigator.language;
  }

  return DEFAULT_LOCALE;
}

export function formatCurrency(
  value: number,
  locale?: string,
  options: Intl.NumberFormatOptions = {},
) {
  return new Intl.NumberFormat(resolveLocale(locale), {
    style: "currency",
    currency: "USD",
    ...options,
  }).format(value);
}

export function formatTokenAmount(
  value: number,
  locale?: string,
  options: Intl.NumberFormatOptions = {},
) {
  return new Intl.NumberFormat(resolveLocale(locale), options).format(value);
}

/** Compact USD label for leaderboard stats: $4.2M, $12k, $950. */
export function usdCompact(amount: number): string {
  if (amount >= 1_000_000) return `$${(amount / 1_000_000).toFixed(1)}M`;
  if (amount >= 1_000) return `$${(amount / 1_000).toFixed(0)}k`;
  return `$${amount}`;
}

/** Minutes left until `deadline`, rounded up; "0m" once it has passed. */
export function formatTimeRemaining(deadline: string, now: number = Date.now()): string {
  const ms = new Date(deadline).getTime() - now;
  if (ms <= 0) return "0m";
  return `${Math.ceil(ms / 60_000)}m`;
}
