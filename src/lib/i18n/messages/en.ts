// Source-of-truth message catalog. Keys are dot-namespaced by feature; values
// may contain {placeholder} tokens that are filled in at render time.
export const en = {
  "nav.branding": "Vortex",
  "nav.explore": "Explore",
  "nav.becomeSolver": "Become a Solver",
  "nav.docs": "Docs",
  "nav.myIntents": "My Intents",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  "wallet.connect.cta": "Connect Freighter",
  "wallet.connect.connecting": "Connecting...",
  "wallet.connect.retry": "Retry Connection",
  "wallet.disconnect.cta": "Disconnect",
  "wallet.disconnect.aria": "Disconnect wallet {address}",
  "wallet.error.freighterUnavailable":
    "Freighter extension is not installed or enabled.",
  "wallet.error.connectFailed": "Failed to connect wallet.",

  "swap.chainPicker.title": "Select source chain",
  "swap.chainPicker.recent": "Recent",
  "swap.chainPicker.selectChain": "Select {name}",

  "activityFeed.status.live": "Live",
  "activityFeed.status.polling": "Polling",
  "activityFeed.error.unavailable": "Live feed unavailable right now.",
  "activityFeed.empty": "No fills yet.",
  "activityFeed.item.route": "{chain} · via {solver}",

  "swap.from.label": "From",
  "swap.from.amountLabel": "Amount to swap",
  "swap.from.amountPlaceholder": "0",
  "swap.from.selectChain": "Source chain, currently {name}",
  "swap.from.selectToken": "Select source token, currently {symbol}",
  "swap.from.approxValue": "≈ ${value}",

  "swap.prices.estimated": "est.",
  "swap.prices.asOf": "Estimated price as of {date}. Live quote will update this once available.",

  "swap.to.label": "To",
  "swap.to.tokenGroup": "Destination token",
  "swap.to.quoteLoading": "Loading quote…",

  "swap.slippage.label": "Slippage tolerance",
  "swap.slippage.inputLabel": "Slippage tolerance percent",
  "swap.slippage.minOut": "Min out: {amount} {token}",
  "swap.slippage.zeroWarning": "0% slippage may cause your swap to fail if the price moves at all.",

  "swap.quote.solver": "Best solver",
  "swap.quote.fillTime": "Est. fill time",
  "swap.quote.fillTimeValue": "~{seconds}s",
  "swap.quote.priceImpact": "Price impact",
  "swap.quote.priceImpactValue": "{percent}%",
  "swap.quote.priceImpactBelowMin": "<0.01",
  "swap.quote.protocolFee": "Protocol fee",
  "swap.quote.protocolFeeValue": "{percent}%",
  "swap.quote.rate": "Rate",

  "swap.quote.fillTime.tooltip": "Estimated time for a solver to fill your swap after you submit. Actual time may vary.",
  "swap.quote.priceImpact.tooltip": "How much your trade moves the effective price relative to the mid-market rate. A high impact means you receive less than the quoted mid-market rate.",
  "swap.quote.protocolFee.tooltip": "A small percentage fee charged by the Vortex protocol on each settled swap. It is deducted from the destination amount.",
  "swap.quote.highPriceImpactWarning": "High price impact above {threshold}% — review before swapping.",
  "swap.quote.unavailable": "Live quote unavailable — showing an estimated rate.",
  "swap.quote.noSolver": "No solver is available for this route right now.",
  "swap.quote.highPriceImpactWarning": "High price impact above {threshold}% — review before swapping.",
  "swap.quote.staleWarning": "Quote is stale. Please wait for a refresh before submitting.",
  "swap.quote.highPriceImpactWarning": "High price impact above {threshold}% — review before swapping.",

  "swap.submit.connecting": "Connecting wallet…",
  "swap.submit.building": "Preparing swap…",
  "swap.submit.awaitingSignature": "Confirm in Freighter…",
  "swap.submit.submitting": "Submitting…",
  "swap.submit.findingRoute": "Finding best route…",
  "swap.submit.success": "Swap submitted ✓ — start a new swap",
  "swap.submit.enterAmount": "Enter an amount",
  "swap.submit.cta": "Swap {amount} {srcToken} → {dstToken}",
  "swap.submit.retryCta": "Retry: Swap {amount} {srcToken} → {dstToken}",

  "swap.destination.label": "Destination address",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress":
    "Enter a valid Stellar address (starts with G).",

  "swap.destination.label": "Destination address",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Enter a valid Stellar address (starts with G).",

  "swap.disclaimer": "Swap settles directly on Stellar · No wrapped tokens · Protected by solver bonds",

  "solve.nav.label": "Solver Portal",

  "solve.hero.eyebrow": "Solver Network",
  "solve.hero.title": "Become a Vortex Solver",
  "solve.hero.description": "Solvers are competitive market makers who fill user swap intents. Deposit a USDC bond, watch the open intent feed, and earn fees on every fill you complete.",

  "solve.register.states.connecting": "Connecting wallet…",
  "solve.register.states.building": "Preparing registration…",
  "solve.register.states.submitting": "Submitting…",

  "solve.register.title": "Register as Solver",
  "solve.register.description": "Deposit a USDC bond to start filling intents.",
  "solve.register.info.slash": "• Slash on failed fill: 10% of bond",
  "solve.register.info.withdraw": "• Withdraw bond anytime when inactive",
  "solve.register.button.registered": "Registered ✓ — register another",
  "solve.register.button.connect": "Connect Freighter to Register",

  "solve.leaderboard.title": "Active Solvers",
  "solve.leaderboard.error": "Couldn't load the solver leaderboard right now. Try again shortly.",
  "solve.leaderboard.empty": "No active solvers yet.",
  "solve.leaderboard.volume": "Volume",
  "solve.leaderboard.fills": "Fills",
  "solve.leaderboard.success": "Success",

  "solve.intents.title": "Open Intents",
  "solve.intents.error": "Couldn't load open intents right now. Try again shortly.",
  "solve.intents.empty": "No open intents right now — check back soon.",
  "solve.intents.accepting": "Accepting…",
  "solve.intents.accept": "Accept Intent →",

  "home.hero.eyebrow": "Stellar Agentic Hackathon 2025",
  // The headline is split so the second line can keep its accent colour and the
  // line break. Translations may reorder the two lines' content freely.
  "home.hero.titleLine1": "Swap from any chain",
  "home.hero.titleLine2": "directly to Stellar.",
  "home.hero.body":
    "Vortex is an intent-based cross-chain protocol. Express what you want, and competing solvers race to fill it — no bridges, no wrapped assets, no trust assumptions beyond the solver bond.",
  "home.hero.solverCta": "Become a solver →",

  "home.stats.totalVolume": "Total Volume",
  "home.stats.intentsFilled": "Intents Filled",
  "home.stats.activeSolvers": "Active Solvers",
  "home.stats.avgFillTime": "Avg Fill Time",

  "home.pipeline.title": "How it works",
  "home.pipeline.intent.label": "Intent",
  "home.pipeline.intent.sub": "You submit",
  "home.pipeline.auction.label": "Auction",
  "home.pipeline.auction.sub": "Solvers bid",
  "home.pipeline.relay.label": "Relay",
  "home.pipeline.relay.sub": "Best fills",
  "home.pipeline.settle.label": "Settle",
  "home.pipeline.settle.sub": "On Stellar",

  "home.feed.title": "Live Fills",
  "home.feed.viewAll": "View all →",

  "home.chains.title": "Supported chains",
  "home.chains.stellarDestination": "Stellar (dest.)",

  "footer.copyright": "© 2025 Vortex Protocol · MIT License",
  "footer.github": "GitHub",
  "footer.discord": "Discord",

  "notFound.breadcrumb": "Not Found",
  "notFound.eyebrow": "404",
  "notFound.title": "Page not found",
  "notFound.body":
    "The page you're looking for doesn't exist, or may have moved.",
  "notFound.backHome": "← Back to Vortex",

  // ── Empty states ──────────────────────────────────────────────────────────

  // /explore — filters match nothing
  "explore.empty.title": "No intents match your filters",
  "explore.empty.message": "Try adjusting or clearing your status and chain filters to see more results.",
  "explore.empty.clearFilters": "Clear filters",

  // /explore — error loading
  "explore.error.title": "Couldn't load intents",
  "explore.error.message": "Something went wrong fetching intents. Check your connection and try again.",

  // /my-intents — wallet connected but no intents yet
  "myIntents.empty.title": "No swaps yet",
  "myIntents.empty.message": "You haven't submitted any swaps from this wallet. Make your first swap to get started.",
  "myIntents.empty.cta": "Make your first swap →",

  // /my-intents — filter combination matches nothing
  "myIntents.filterEmpty.title": "No intents match your filters",
  "myIntents.filterEmpty.message": "Try a different status or chain filter, or clear all filters to see everything.",
  "myIntents.filterEmpty.clearFilters": "Clear filters",

  // ActivityFeed — empty on a fresh/quiet deployment
  "activityFeed.empty.title": "No activity yet",
  "activityFeed.empty.message": "Waiting for the first swap intents to arrive. Submit a swap to kick things off.",
  "activityFeed.empty.cta": "Swap now →",

  "activityFeed.status.live": "Live",
  "activityFeed.status.polling": "Polling",
  "activityFeed.error.unavailable": "Live feed unavailable right now.",
  "activityFeed.item.route": "{chain} · via {solver}",

  // solve/[address] — fill history empty
  "solverDetail.fillHistory.empty.title": "No fills yet",
  "solverDetail.fillHistory.empty.message": "Once this solver starts accepting and filling intents, their history will appear here.",

  // command palette — built-in commands
  "commands.recentIntent": "Reopen intent {id}",
  "commands.confirm": "Press Enter again to confirm: {title}",
  "commands.resultCount": "{count} results",
  "commands.wallet.connect": "Connect wallet",
  "commands.wallet.disconnect": "Disconnect wallet",
  "commands.wallet.copy": "Copy my address",
  "commands.wallet.copied": "Address copied",
  "commands.wallet.copyFailed": "Could not copy address",
  "commands.motion.reduce": "Reduce motion",
  "commands.motion.enable": "Enable motion",
  "commands.openMyIntents": "Open My Intents",
  "commands.locale": "Switch language to {locale}",
  "commands.viewSolver": "View solver {name}",

  // live feed buffering
  "liveFeed.live": "Live — pause updates",
  "liveFeed.paused": "Paused — resume live updates",
  "liveFeed.new": "{count} new intents",
  "liveFeed.newOverflow": "{count}+ new intents",

  // solver portal — decomposed tabs
  "solve.register.states.awaitingSignature": "Confirm in Freighter…",
  "solve.register.addressLabel": "Stellar Address",
  "solve.register.addressPlaceholder": "G...",
  "solve.register.bondLabel": "Bond Amount (USDC)",
  "solve.register.bondPlaceholder": "Minimum 50 USDC",
  "solve.register.validation.invalidAddress": "Enter a valid Stellar address (starts with G).",
  "solve.register.validation.minimumBond": "Minimum bond is {minBond} USDC.",
  "solve.leaderboard.avgTime": "Avg Time",
  "solve.leaderboard.sort.name": "Name",
  "solve.leaderboard.sortLabel": "Sort leaderboard",
  "solve.intents.available": "{count} available",
  "solve.intents.id": "ID: {id}",
  "solve.intents.minOut": "Min out: {minOut} {dstToken} · Expires in",
  "solve.tabs.ariaLabel": "Solver portal sections",
  "solve.tabs.leaderboard": "leaderboard",
  "solve.tabs.intents": "intents",
  "solve.tabs.register": "register",
  "solve.steps.registerBond.number": "01",
  "solve.steps.registerBond.title": "Register + Bond",
  "solve.steps.registerBond.body": "Deposit ≥50 USDC as a bond into the Vortex settlement contract. Your bond backs your reliability — failing to fill after accepting slashes 10%.",
  "solve.steps.watchIntentFeed.number": "02",
  "solve.steps.watchIntentFeed.title": "Watch the intent feed",
  "solve.steps.watchIntentFeed.body": "Monitor the open intents API or WebSocket. When you see a profitable opportunity, claim exclusive fill rights for a 5-minute window.",
  "solve.steps.fillAndEarn.number": "03",
  "solve.steps.fillAndEarn.title": "Fill and earn",
  "solve.steps.fillAndEarn.body": "Execute the source-chain leg, relay to Stellar, transfer dst tokens to the user. Earn the spread between your fill cost and the user's minimum.",
  "solve.onboarding.title": "Before You Register: Solver Readiness & Expectations",
  "solve.onboarding.description": "Review protocol requirements and public tracking metrics before registering as a Vortex solver.",
  "solve.onboarding.dismiss": "Dismiss checklist",
  "solve.onboarding.show": "Show onboarding checklist",
  "solve.onboarding.bondTitle": "1. Bond & Collateral Purpose",
  "solve.onboarding.bondBody": "Depositing a minimum 50 USDC bond backs your execution commitment. Failing to fulfill an accepted intent within 5 minutes results in a 10% bond slash. Your bond is withdrawable anytime when inactive.",
  "solve.onboarding.metricsTitle": "2. Public Performance Metrics",
  "solve.onboarding.metricsBody": "From the moment you register, your Stellar address is publicly listed on the solver leaderboard. Fill count, USD volume, success rate %, and average fill time in seconds are tracked transparently.",
  "solve.onboarding.expectationsTitle": "3. Operational Expectations",
  "solve.onboarding.expectationsBody": "Maintain high node uptime and competitive fill response times. Claiming an intent grants a 5-minute exclusive fill window to complete the cross-chain settlement.",

  // solver portal — registration info
  "solve.register.info.minimumBond": "• Minimum bond: 50 USDC",

  // solver bond management
  "bond.nav.label": "Manage Bond",
  "bond.title": "Manage solver bond",
  "bond.connectPrompt": "Connect the wallet of a registered solver to manage its bond.",
  "bond.loadError": "Couldn't load bond details for this address. Make sure it is a registered solver.",
  "bond.networkMismatch": "Freighter is on a different network. Switch networks to manage your bond.",
  "bond.stat.bond": "Bond",
  "bond.stat.locked": "Locked",
  "bond.stat.available": "Available",
  "bond.stat.minimum": "Minimum",
  "bond.status.ok": "Meets minimum bond",
  "bond.status.belowMin": "Below minimum — solver inactive",
  "bond.pending.title": "Pending withdrawals",
  "bond.pending.empty": "No pending withdrawals.",
  "bond.pending.cooldown": "Unlocks in {time}",
  "bond.pending.ready": "Ready to claim",
  "bond.amountLabel": "Amount (USDC)",
  "bond.topUp.title": "Top up bond",
  "bond.topUp.submit": "Review top-up",
  "bond.withdraw.title": "Request withdrawal",
  "bond.withdraw.submit": "Review withdrawal",
  "bond.withdraw.cooldownNote": "Withdrawn funds unlock after a {minutes}-minute cooldown.",
  "bond.withdraw.belowMinWarning": "This withdrawal drops your bond below the {minimum} USDC minimum. Your solver will become inactive.",
  "bond.withdraw.confirmBelowMin": "I understand my solver will become inactive",
  "bond.error.invalid": "Enter a positive amount with at most 7 decimal places.",
  "bond.error.zero": "Amount must be greater than zero.",
  "bond.error.tooLarge": "Maximum top-up is {max} USDC.",
  "bond.error.exceedsAvailable": "Only {available} USDC is available to withdraw.",
} as const;
