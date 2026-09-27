// Spanish (es) message catalog.
// Keys must stay in sync with en.ts — the test suite enforces this.
export const es = {
  "nav.branding": "Vortex",
  "nav.explore": "Explorar",
  "nav.becomeSolver": "Conviértete en Solver",
  "nav.docs": "Documentación",
  "nav.myIntents": "Mis Intenciones",
  "nav.openMenu": "Abrir menú",
  "nav.closeMenu": "Cerrar menú",

  "wallet.connect.cta": "Conectar Freighter",
  "wallet.connect.connecting": "Conectando...",
  "wallet.connect.retry": "Reintentar conexión",
  "wallet.disconnect.cta": "Desconectar",
  "wallet.disconnect.aria": "Desconectar billetera {address}",
  "wallet.error.freighterUnavailable":
    "La extensión Freighter no está instalada o habilitada.",
  "wallet.error.connectFailed": "No se pudo conectar la billetera.",

  "swap.chainPicker.title": "Seleccionar cadena origen",
  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Actualizando",
  "activityFeed.error.unavailable": "El feed en vivo no está disponible ahora.",
  "activityFeed.empty": "Aún no hay llenados.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  "swap.from.label": "De",
  "swap.from.amountLabel": "Cantidad a intercambiar",
  "swap.from.amountPlaceholder": "0",
  "swap.from.selectChain": "Cadena origen, actualmente {name}",
  "swap.from.selectToken": "Seleccionar token origen, actualmente {symbol}",
  "swap.from.approxValue": "≈ ${value}",

  "swap.prices.estimated": "est.",
  "swap.prices.asOf": "Precio estimado al {date}. La cotización en vivo actualizará esto cuando esté disponible.",

  "swap.to.label": "A",
  "swap.to.tokenGroup": "Token de destino",
  "swap.to.quoteLoading": "Cargando cotización…",

  "swap.slippage.label": "Tolerancia de deslizamiento",
  "swap.slippage.inputLabel": "Porcentaje de tolerancia de deslizamiento",
  "swap.slippage.minOut": "Mínimo recibido: {amount} {token}",
  "swap.slippage.zeroWarning": "Un deslizamiento del 0% puede hacer que tu swap falle ante cualquier movimiento de precio.",

  "swap.quote.solver": "Mejor solver",
  "swap.quote.fillTime": "Tiempo estimado",
  "swap.quote.fillTimeValue": "~{seconds}s",
  "swap.quote.priceImpact": "Impacto de precio",
  "swap.quote.priceImpactValue": "{percent}%",
  "swap.quote.priceImpactBelowMin": "<0.01",
  "swap.quote.protocolFee": "Comisión de protocolo",
  "swap.quote.protocolFeeValue": "{percent}%",
  "swap.quote.rate": "Tasa",

  "swap.quote.fillTime.tooltip": "Tiempo estimado para que un solver complete tu swap después de enviarlo. El tiempo real puede variar.",
  "swap.quote.priceImpact.tooltip": "Cuánto mueve tu operación el precio efectivo respecto al precio de mercado. Un impacto alto significa que recibirás menos que la tasa de mercado.",
  "swap.quote.protocolFee.tooltip": "Pequeño porcentaje de comisión que cobra el protocolo Vortex en cada swap liquidado. Se deduce del monto de destino.",
  "swap.quote.unavailable": "Cotización en tiempo real no disponible — mostrando tasa estimada.",
  "swap.quote.noSolver": "No hay solvers disponibles para esta ruta en este momento.",
  "swap.quote.highPriceImpactWarning": "Impacto de precio alto por encima de {threshold}% — revisa antes de intercambiar.",
  "swap.quote.staleWarning": "La cotización está desactualizada. Espera a que se recargue antes de enviar.",

  "swap.submit.connecting": "Conectando billetera…",
  "swap.submit.building": "Preparando swap…",
  "swap.submit.awaitingSignature": "Confirmar en Freighter…",
  "swap.submit.submitting": "Enviando…",
  "swap.submit.findingRoute": "Buscando mejor ruta…",
  "swap.submit.success": "Swap enviado ✓ — iniciar un nuevo swap",
  "swap.submit.enterAmount": "Ingresa un monto",
  "swap.submit.cta": "Intercambiar {amount} {srcToken} → {dstToken}",
  "swap.submit.retryCta":
    "Reintentar: Intercambiar {amount} {srcToken} → {dstToken}",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección de Stellar válida (empieza con G).",

  "swap.disclaimer": "El swap se liquida directamente en Stellar · Sin tokens envueltos · Protegido por bonos de solver",

  "swap.destination.label": "Dirección de destino",
  "swap.destination.placeholder": "G...",
  "swap.destination.invalidAddress": "Ingresa una dirección Stellar válida (comienza con G).",

  "home.hero.eyebrow": "Stellar Agentic Hackathon 2025",
  "home.hero.titleLine1": "Intercambia desde cualquier cadena",
  "home.hero.titleLine2": "directamente a Stellar.",
  "home.hero.body":
    "Vortex es un protocolo cross-chain basado en intenciones. Expresa lo que quieres y los solvers compiten por cumplirlo — sin puentes, sin tokens envueltos, sin suposiciones de confianza más allá del bono del solver.",
  "home.hero.solverCta": "Conviértete en solver →",

  "home.stats.totalVolume": "Volumen Total",
  "home.stats.intentsFilled": "Intenciones Completadas",
  "home.stats.activeSolvers": "Solvers Activos",
  "home.stats.avgFillTime": "Tiempo Medio de Llenado",

  "home.pipeline.title": "Cómo funciona",
  "home.pipeline.intent.label": "Intención",
  "home.pipeline.intent.sub": "Tú envías",
  "home.pipeline.auction.label": "Subasta",
  "home.pipeline.auction.sub": "Solvers pujan",
  "home.pipeline.relay.label": "Relay",
  "home.pipeline.relay.sub": "El mejor llena",
  "home.pipeline.settle.label": "Liquidar",
  "home.pipeline.settle.sub": "En Stellar",

  "home.feed.title": "Llenados en Vivo",
  "home.feed.viewAll": "Ver todos →",

  "home.chains.title": "Cadenas soportadas",
  "home.chains.stellarDestination": "Stellar (dest.)",

  "notFound.backHome": "← Volver a Vortex",

  // ── Estados vacíos ─────────────────────────────────────────────────────────

  // /explore — filtros sin resultados
  "explore.empty.title": "Ninguna intención coincide con tus filtros",
  "explore.empty.message": "Intenta ajustar o borrar los filtros de estado y cadena para ver más resultados.",
  "explore.empty.clearFilters": "Limpiar filtros",

  // /explore — error al cargar
  "explore.error.title": "No se pudieron cargar las intenciones",
  "explore.error.message": "Algo salió mal al obtener las intenciones. Verifica tu conexión e inténtalo de nuevo.",

  // /my-intents — sin intenciones aún
  "myIntents.empty.title": "Sin swaps aún",
  "myIntents.empty.message": "No has enviado ningún swap desde esta billetera. Haz tu primer swap para empezar.",
  "myIntents.empty.cta": "Hacer mi primer swap →",

  // /my-intents — filtros sin resultados
  "myIntents.filterEmpty.title": "Ninguna intención coincide con tus filtros",
  "myIntents.filterEmpty.message": "Prueba con un filtro de estado o cadena diferente, o limpia todos los filtros para ver todo.",
  "myIntents.filterEmpty.clearFilters": "Limpiar filtros",

  // ActivityFeed — vacío en despliegue nuevo
  "activityFeed.empty.title": "Sin actividad aún",
  "activityFeed.empty.message": "Esperando las primeras intenciones de swap. Envía un swap para comenzar.",
  "activityFeed.empty.cta": "Hacer swap ahora →",

  "activityFeed.status.live": "En vivo",
  "activityFeed.status.polling": "Consultando",
  "activityFeed.error.unavailable": "Feed en vivo no disponible ahora mismo.",
  "activityFeed.item.route": "{chain} · vía {solver}",

  // solve/[address] — historial de llenados vacío
  "solverDetail.fillHistory.empty.title": "Sin llenados aún",
  "solverDetail.fillHistory.empty.message": "Una vez que este solver empiece a aceptar y llenar intenciones, su historial aparecerá aquí.",

  // command palette — built-in commands
  "commands.recentIntent": "Reabrir intención {id}",
  "commands.confirm": "Pulsa Enter de nuevo para confirmar: {title}",
  "commands.resultCount": "{count} resultados",
  "commands.wallet.connect": "Conectar billetera",
  "commands.wallet.disconnect": "Desconectar billetera",
  "commands.wallet.copy": "Copiar mi dirección",
  "commands.wallet.copied": "Dirección copiada",
  "commands.wallet.copyFailed": "No se pudo copiar la dirección",
  "commands.motion.reduce": "Reducir movimiento",
  "commands.motion.enable": "Activar movimiento",
  "commands.openMyIntents": "Abrir Mis intenciones",
  "commands.locale": "Cambiar idioma a {locale}",
  "commands.viewSolver": "Ver solver {name}",

  // live feed buffering
  "liveFeed.live": "En vivo — pausar actualizaciones",
  "liveFeed.paused": "En pausa — reanudar actualizaciones",
  "liveFeed.new": "{count} intenciones nuevas",
  "liveFeed.newOverflow": "{count}+ intenciones nuevas",

  // solver portal — decomposed tabs
  "solve.register.states.awaitingSignature": "Confirma en Freighter…",
  "solve.register.addressLabel": "Dirección Stellar",
  "solve.register.addressPlaceholder": "G…",
  "solve.register.bondLabel": "Monto de fianza (USDC)",
  "solve.register.bondPlaceholder": "50",
  "solve.register.validation.invalidAddress": "Introduce una dirección Stellar válida (G…, 56 caracteres).",
  "solve.register.validation.minimumBond": "La fianza mínima es {minBond} USDC.",
  "solve.leaderboard.avgTime": "Tiempo medio",
  "solve.leaderboard.sort.name": "Nombre",
  "solve.leaderboard.sortLabel": "Ordenar clasificación",
  "solve.intents.available": "{count} disponibles",
  "solve.intents.id": "Intención {id}",
  "solve.intents.minOut": "Mínimo: {minOut} {dstToken} · Expira en",
  "solve.tabs.ariaLabel": "Secciones del portal de solvers",
  "solve.tabs.leaderboard": "clasificación",
  "solve.tabs.intents": "intenciones",
  "solve.tabs.register": "registro",
  "solve.steps.registerBond.number": "01",
  "solve.steps.registerBond.title": "Regístrate y deposita fianza",
  "solve.steps.registerBond.body": "Deposita una fianza en USDC desde tu dirección Stellar para poder llenar intenciones.",
  "solve.steps.watchIntentFeed.number": "02",
  "solve.steps.watchIntentFeed.title": "Sigue el feed de intenciones",
  "solve.steps.watchIntentFeed.body": "Supervisa las intenciones abiertas entre cadenas y elige las que mejor puedas enrutar.",
  "solve.steps.fillAndEarn.number": "03",
  "solve.steps.fillAndEarn.title": "Llena y gana",
  "solve.steps.fillAndEarn.body": "Acepta una intención con derechos exclusivos, liquídala y gana el diferencial.",
  "solve.onboarding.title": "Lista de preparación del solver",
  "solve.onboarding.description": "Revisa lo que se espera de un solver antes de depositar una fianza.",
  "solve.onboarding.dismiss": "Ocultar",
  "solve.onboarding.show": "Mostrar",
  "solve.onboarding.bondTitle": "Fianza",
  "solve.onboarding.bondBody": "Tu fianza respalda tus llenados y puede recortarse por liquidaciones fallidas o tardías.",
  "solve.onboarding.metricsTitle": "Métricas",
  "solve.onboarding.metricsBody": "Llenados, volumen, tiempo medio y tasa de éxito son públicos en la clasificación.",
  "solve.onboarding.expectationsTitle": "Expectativas",
  "solve.onboarding.expectationsBody": "Las intenciones aceptadas deben liquidarse antes de su plazo para evitar penalizaciones.",

  // solver portal — registration info
  "solve.register.info.minimumBond": "• Fianza mínima: 50 USDC",

  // solver bond management
  "bond.nav.label": "Gestionar fianza",
  "bond.title": "Gestionar fianza del solver",
  "bond.connectPrompt": "Conecta la billetera de un solver registrado para gestionar su fianza.",
  "bond.loadError": "No se pudo cargar la fianza de esta dirección. Asegúrate de que sea un solver registrado.",
  "bond.networkMismatch": "Freighter está en otra red. Cambia de red para gestionar tu fianza.",
  "bond.stat.bond": "Fianza",
  "bond.stat.locked": "Bloqueada",
  "bond.stat.available": "Disponible",
  "bond.stat.minimum": "Mínimo",
  "bond.status.ok": "Cumple la fianza mínima",
  "bond.status.belowMin": "Por debajo del mínimo — solver inactivo",
  "bond.pending.title": "Retiros pendientes",
  "bond.pending.empty": "No hay retiros pendientes.",
  "bond.pending.cooldown": "Se desbloquea en {time}",
  "bond.pending.ready": "Listo para reclamar",
  "bond.amountLabel": "Monto (USDC)",
  "bond.topUp.title": "Aumentar fianza",
  "bond.topUp.submit": "Revisar aumento",
  "bond.withdraw.title": "Solicitar retiro",
  "bond.withdraw.submit": "Revisar retiro",
  "bond.withdraw.cooldownNote": "Los fondos retirados se desbloquean tras un periodo de {minutes} minutos.",
  "bond.withdraw.belowMinWarning": "Este retiro deja tu fianza por debajo del mínimo de {minimum} USDC. Tu solver quedará inactivo.",
  "bond.withdraw.confirmBelowMin": "Entiendo que mi solver quedará inactivo",
  "bond.error.invalid": "Introduce un monto positivo con 7 decimales como máximo.",
  "bond.error.zero": "El monto debe ser mayor que cero.",
  "bond.error.tooLarge": "El aumento máximo es {max} USDC.",
  "bond.error.exceedsAvailable": "Solo hay {available} USDC disponibles para retirar.",
} as const;
