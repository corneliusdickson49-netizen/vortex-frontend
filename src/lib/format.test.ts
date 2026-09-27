import { describe, expect, it } from "vitest";
import { formatCurrency, formatTimeRemaining, formatTokenAmount, usdCompact } from "./format";

describe("formatCurrency", () => {
  it("formats USD values for en-US locale", () => {
    expect(formatCurrency(1234.5, "en-US")).toBe("$1,234.50");
  });

  it("formats USD values for de-DE locale", () => {
    expect(formatCurrency(1234.5, "de-DE")).toBe("1.234,50 $");
  });
});

describe("formatTokenAmount", () => {
  it("formats token amounts for en-US locale", () => {
    expect(
      formatTokenAmount(1234.5678, "en-US", { maximumFractionDigits: 4 }),
    ).toBe("1,234.5678");
  });

  it("formats token amounts for de-DE locale", () => {
    expect(
      formatTokenAmount(1234.5678, "de-DE", { maximumFractionDigits: 4 }),
    ).toBe("1.234,5678");
  });
});

describe("usdCompact", () => {
  it("formats millions, thousands and small values", () => {
    expect(usdCompact(4_200_000)).toBe("$4.2M");
    expect(usdCompact(12_400)).toBe("$12k");
    expect(usdCompact(950)).toBe("$950");
  });
});

describe("formatTimeRemaining", () => {
  const now = Date.parse("2026-01-01T00:00:00Z");
  it("rounds remaining minutes up", () => {
    expect(formatTimeRemaining("2026-01-01T00:04:01Z", now)).toBe("5m");
  });
  it("returns 0m for past deadlines", () => {
    expect(formatTimeRemaining("2025-12-31T23:59:00Z", now)).toBe("0m");
  });
});
