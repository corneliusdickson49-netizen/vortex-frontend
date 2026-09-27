# Shared Component Usage

Short usage docs for the components under `src/components/` that other
contributors are most likely to reuse. Keep these in sync with the actual props
if they change.

## `IntentStatusBadge`

[`src/components/IntentStatusBadge.tsx`](../src/components/IntentStatusBadge.tsx)

Renders a pill badge for an intent's lifecycle status, with a distinct icon per
status (not just color) so it doesn't rely on color alone to differentiate.

```tsx
import { IntentStatusBadge } from "@/components/IntentStatusBadge";

<IntentStatusBadge status="filled" />;
```

**Props**

| prop     | type           | required | notes                                                                          |
| -------- | -------------- | -------- | ------------------------------------------------------------------------------ |
| `status` | `IntentStatus` | yes      | one of `"pending" \| "accepted" \| "filled" \| "failed"` (see `src/lib/types`) |

No other configuration — styling and icon are derived entirely from `status` via
the internal `STATUS_STYLES` / `STATUS_ICONS` maps. To support a new status,
add an entry to both maps and to the `IntentStatus` type.

## `ToastViewport`

[`src/components/ToastViewport.tsx`](../src/components/ToastViewport.tsx)

Fixed-position (bottom-right) container that renders the current toast queue
from [`useToastStore`](../src/store/toast.ts) and handles dismissal. See
[`docs/toast-system.md`](./toast-system.md) for the full API on how to push
toasts.

```tsx
import { ToastViewport } from "@/components/ToastViewport";

<ToastViewport />;
```

**Props**: none. Mount it once, near the root of the tree — it's already mounted
in [`src/app/layout.tsx`](../src/app/layout.tsx), so you should not need to mount
it again in a page or feature component. It renders `null` when there are no
active toasts.

## `ConnectWalletButton`

[`src/components/ConnectWalletButton.tsx`](../src/components/ConnectWalletButton.tsx)

Self-contained wallet connect/disconnect button. Reads and drives
[`useWalletStore`](../src/store/wallet.ts) directly — no props are needed to wire
it up to wallet state.

```tsx
import { ConnectWalletButton } from "@/components/ConnectWalletButton";

<ConnectWalletButton />
<ConnectWalletButton compact />
```

**Props**

| prop      | type      | required | default | notes                                                                  |
| --------- | --------- | -------- | ------- | ---------------------------------------------------------------------- |
| `compact` | `boolean` | no       | `false` | tighter padding/layout for constrained spaces (e.g. mobile nav/header) |

**Behavior**

- Not connected: shows "Connect Freighter" (or "Retry Connection" if a previous
  attempt errored, with the error message as the `title` tooltip). Disabled with
  a "Connecting..." label while `isConnecting`.
- Connected: shows the truncated address, swapping to "Disconnect" on hover/focus.
- On a failed `connect()` call, it also pushes an error toast via
  [`useToastStore`](../src/store/toast.ts) — you don't need to handle connection
  errors yourself when using this component.

## `Tooltip`

[`src/components/Tooltip.tsx`](../src/components/Tooltip.tsx)

Accessible WAI-ARIA tooltip component. Shown on hover and keyboard focus
(never mouse-only), dismissed via Escape, and associated to its trigger via
`aria-describedby`. Includes basic viewport-edge collision handling and a
tap-to-toggle affordance for touch devices.

```tsx
import { Tooltip } from "@/components/Tooltip";

<Tooltip content="Protocol fee is deducted from the destination amount.">
  <span className="underline decoration-dotted cursor-help">Protocol fee</span>
</Tooltip>
```

**Props**

| prop        | type        | required | default  | notes                                                                                |
| ----------- | ----------- | -------- | -------- | ------------------------------------------------------------------------------------ |
| `content`   | `ReactNode` | yes      | —        | The tooltip text or element shown in the popover.                                    |
| `children`  | `ReactElement` | yes   | —        | Single trigger element. Must accept `ref`, `aria-describedby`, focus/blur/mouse handlers. |
| `placement` | `"top" \| "bottom"` | no | `"top"` | Preferred placement; auto-flips when close to viewport edge.                        |

**Behaviour**

- Hover or keyboard focus opens the tooltip; losing either closes it.
- Pressing Escape dismisses the tooltip from anywhere on the page.
- Touch: tap the trigger to toggle the tooltip open/closed.
- The trigger receives `aria-describedby` pointing to the tooltip while it is visible.
- Does not trap focus or interfere with Tab order.
- Currently applied to `Price impact`, `Protocol fee`, and `Est. fill time` in
  SwapCard's quote details panel. See `Tooltip.stories.tsx` for interactive examples.


## Live feed buffering (`useBufferedFeed`, `LiveFeedControls`)

Home `ActivityFeed`, Explore and My Intents stop inserting rows while the user is reading (WCAG 2.2.2).
`useFeedPause(feedId)` pauses when the pointer or focus is inside the list, when it is scrolled away from the
top, or when the user presses the Live/Paused toggle (persisted per feed under `vortex-feed-paused:<feedId>`).
`useBufferedFeed(items, { isPaused })` returns `{ visible, pending, overflow, flush }`: already-visible items
keep updating in place (status changes) without reordering, new ones are queued (count capped at 500, shown
as "500+"). The "N new intents" pill flushes the queue and moves focus to the list; counts are announced
politely at most every 5 s. See the `BufferedLiveUpdates` story.

## Solver portal (`src/app/solve`)

`SolvePageClient.tsx` went from 708 lines to about 125 and is now just the page shell: hero, steps, and the tab
list. Each tab is its own module in `src/app/solve/_components/`:

| Module | Responsibility |
| --- | --- |
| `LeaderboardTab` | `useSolvers`, sort state, renders `SolverRow` |
| `OpenIntentsTab` | `useOpenIntents` + `useAcceptIntent`, renders `DeadlineChip` |
| `RegisterSolverTab` | `useRegistrationForm` + `useSolverRegistration`, renders `SolverOnboardingChecklist` |
| `useRegistrationForm` | reducer owning field state, validation and per-wallet draft persistence |
| `useSolveTab` | active tab synced to `?tab=` |

Data fetching stays in hooks called by each tab; `SolverRow`, `DeadlineChip` and the checklist are
presentational. Formatting helpers (`usdCompact`, `formatTimeRemaining`) live in `src/lib/format.ts`.

**Tabs** follow the WAI-ARIA tabs pattern: roving `tabIndex`, Arrow Left/Right wrap, and Home/End jump to the
first and last tab. The URL is read after mount, so server and client render the same markup, and it is
updated with `history.replaceState`, which adds no history entries or route transitions. **Panels are kept
alive:** a tab mounts the first time it is shown and is then hidden rather than unmounted. That keeps each
tab's scroll position, sort order and form input, at the cost of keeping its SWR subscriptions running.
