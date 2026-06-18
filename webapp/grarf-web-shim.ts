/**
 * Browser platform layer for Desktop Home — replaces Electron preload / main-process APIs.
 * Must load before any desktop/src imports.
 */

type WorkspaceEmbedBounds = { x: number; y: number; width: number; height: number };
type WorkspaceEmbedSlot = "center" | "centerChild" | "right";

declare global {
  interface Window {
    GRARF_ELECTRON?: true;
    GRARF_WEB_CONFIG?: { operationalIngestUrl?: string; operationalPollIntervalMs?: number };
  }
}

function isElectronRenderer(): boolean {
  return typeof window !== "undefined" && window.GRARF_ELECTRON === true;
}

const LS_EDITORIAL = "grarf-web-editorial-bundle";

type WebEditorialBundle = {
  narratives: Record<string, { manualNarrative?: string }>;
  featuredGames: Record<string, { briefingPriority?: number; featuredRank?: number }>;
  leagueContexts: Record<string, { leagueContext?: string }>;
  generatedSummaries?: Record<string, unknown>;
};

function emptyWebEditorialBundle(): WebEditorialBundle {
  return { narratives: {}, featuredGames: {}, leagueContexts: {}, generatedSummaries: {} };
}

function readWebEditorialBundle(): WebEditorialBundle {
  const raw = readJson<Record<string, unknown> | null>(LS_EDITORIAL, null);
  if (!raw || typeof raw !== "object") return emptyWebEditorialBundle();

  if (raw.narratives || raw.featuredGames || raw.leagueContexts) {
    return {
      narratives: (raw.narratives as WebEditorialBundle["narratives"]) ?? {},
      featuredGames: (raw.featuredGames as WebEditorialBundle["featuredGames"]) ?? {},
      leagueContexts: (raw.leagueContexts as WebEditorialBundle["leagueContexts"]) ?? {},
      generatedSummaries: (raw.generatedSummaries as WebEditorialBundle["generatedSummaries"]) ?? {},
    };
  }

  const bundle = emptyWebEditorialBundle();
  const legacyGames = raw.games;
  if (legacyGames && typeof legacyGames === "object") {
    for (const [gameKey, row] of Object.entries(legacyGames as Record<string, Record<string, unknown>>)) {
      if (typeof row?.manualNarrative === "string" && row.manualNarrative.trim()) {
        bundle.narratives[gameKey] = { manualNarrative: row.manualNarrative.trim() };
      }
      const rank = row?.briefingPriority ?? row?.featuredRank;
      if (typeof rank === "number" && Number.isFinite(rank)) {
        bundle.featuredGames[gameKey] = { briefingPriority: Math.round(rank) };
      }
    }
  }

  const legacyLeagues = raw.leagues;
  if (legacyLeagues && typeof legacyLeagues === "object") {
    for (const [leagueKey, row] of Object.entries(legacyLeagues as Record<string, Record<string, unknown>>)) {
      if (typeof row?.leagueContext === "string" && row.leagueContext.trim()) {
        bundle.leagueContexts[leagueKey.toUpperCase()] = { leagueContext: row.leagueContext.trim() };
      }
    }
  }

  return bundle;
}

function writeWebEditorialBundle(bundle: WebEditorialBundle): void {
  writeJson(LS_EDITORIAL, bundle);
}
const LS_BRIEFING_PERSISTENCE = "grarf-web-briefing-persistence";
function readBriefingPersistenceSnapshots(): Record<string, unknown> {
  const raw = readJson<Record<string, unknown> | null>(LS_BRIEFING_PERSISTENCE, null);
  if (!raw || typeof raw !== "object") return {};
  const nested = raw.snapshots;
  if (nested && typeof nested === "object" && !Array.isArray(nested)) {
    return nested as Record<string, unknown>;
  }
  // Legacy flat map keyed by gameId.
  return raw;
}
const LS_COMMAND_BRIEFING = "grarf-web-command-briefing-store";

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore quota */
  }
}

type ElectronWebviewLike = HTMLElement & {
  getURL(): string;
  executeJavaScript(code: string, userGesture?: boolean): Promise<unknown>;
};

/** Electron `<webview>` → div host + iframe (browsers cannot register `webview` as a custom element). */
function createWebviewElement(): ElectronWebviewLike {
  const host = document.createElement("div");
  host.setAttribute("data-grarf-webview", "");
  host.style.cssText = "display:block;width:100%;height:100%;overflow:hidden;background:#000";

  const iframe = document.createElement("iframe");
  iframe.setAttribute(
    "sandbox",
    "allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
  );
  iframe.setAttribute("allow", "autoplay; fullscreen; encrypted-media; picture-in-picture");
  iframe.style.cssText = "width:100%;height:100%;border:0;display:block;background:#000";
  host.appendChild(iframe);

  const syncSrc = (src: string | null) => {
    if (!src) return;
    if (iframe.src !== src) iframe.src = src;
  };

  const origSetAttribute = host.setAttribute.bind(host);
  host.setAttribute = (name: string, value: string) => {
    origSetAttribute(name, value);
    if (name === "src") syncSrc(value);
  };

  Object.defineProperty(host, "src", {
    configurable: true,
    enumerable: true,
    get: () => iframe.src,
    set: (value: string) => syncSrc(value),
  });

  let sourceLockUrl = "";
  let cachedGuestUrl = "";

  const readIframeUrl = (): string => {
    if (cachedGuestUrl && cachedGuestUrl !== "about:blank") return cachedGuestUrl;
    let loaded = iframe.src;
    try {
      loaded = iframe.contentWindow?.location.href ?? loaded;
    } catch {
      /* cross-origin */
    }
    return loaded;
  };

  const dispatchFrameEvent = (type: string, url?: string) => {
    const ev = new Event(type) as Event & { url?: string; isMainFrame?: boolean };
    ev.isMainFrame = true;
    if (url) ev.url = url;
    host.dispatchEvent(ev);
  };

  const probeGuestUrl = async (): Promise<string> => {
    try {
      const href = await iframe.contentWindow?.eval("window.location.href");
      if (typeof href === "string" && href && href !== "about:blank") {
        cachedGuestUrl = href;
        return href;
      }
    } catch {
      /* cross-origin */
    }
    return readIframeUrl();
  };

  iframe.addEventListener("load", () => {
    void (async () => {
      dispatchFrameEvent("did-finish-load");

      const loaded = await probeGuestUrl();
      if (!loaded || loaded === "about:blank") return;

      if (sourceLockUrl && loaded !== sourceLockUrl) {
        dispatchFrameEvent("did-navigate", loaded);
      }

      sourceLockUrl = loaded;
    })();
  });
  iframe.addEventListener("error", () => {
    const ev = new Event("did-fail-load") as Event & {
      isMainFrame?: boolean;
      errorCode?: number;
      errorDescription?: string;
      validatedURL?: string;
    };
    ev.isMainFrame = true;
    ev.errorCode = -2;
    ev.errorDescription = "Failed to load";
    ev.validatedURL = host.getAttribute("src") ?? "";
    host.dispatchEvent(ev);
  });

  const webview = host as ElectronWebviewLike;
  webview.getURL = () => cachedGuestUrl || iframe.src;
  webview.executeJavaScript = async (code: string) => {
    try {
      return iframe.contentWindow?.eval(code) ?? null;
    } catch {
      return null;
    }
  };
  return webview;
}

/** Stub tag registration for Desktop `customElements.get("webview")` probes. */
const WEBVIEW_STUB_TAG = function WebviewTagStub() {
  return createWebviewElement();
} as unknown as CustomElementConstructor;

function installWebviewShim(): void {
  if (typeof document === "undefined") return;

  const origCreate = document.createElement.bind(document);
  document.createElement = ((tagName: string, options?: ElementCreationOptions) => {
    if (String(tagName).toLowerCase() === "webview") {
      return createWebviewElement();
    }
    return origCreate(tagName, options);
  }) as typeof document.createElement;

  if (typeof customElements !== "undefined") {
    const registry = customElements as CustomElementRegistry & {
      get: (name: string) => CustomElementConstructor | undefined;
    };
    const origGet = registry.get.bind(registry);
    registry.get = (name: string) => {
      if (name === "webview") return WEBVIEW_STUB_TAG;
      return origGet(name);
    };
  }
}

if (!isElectronRenderer()) {
  installWebviewShim();
}

type EmbedEntry = { iframe: HTMLIFrameElement; url: string };
const embedLayers = new Map<WorkspaceEmbedSlot, EmbedEntry>();

function slotZIndex(slot: WorkspaceEmbedSlot): string {
  if (slot === "right") return "45";
  if (slot === "centerChild") return "44";
  return "43";
}

function applyBounds(iframe: HTMLIFrameElement, bounds: WorkspaceEmbedBounds): void {
  iframe.style.left = `${Math.round(bounds.x)}px`;
  iframe.style.top = `${Math.round(bounds.y)}px`;
  iframe.style.width = `${Math.max(0, Math.round(bounds.width))}px`;
  iframe.style.height = `${Math.max(0, Math.round(bounds.height))}px`;
}

function ensureEmbedLayer(slot: WorkspaceEmbedSlot): EmbedEntry {
  const existing = embedLayers.get(slot);
  if (existing) return existing;

  const iframe = document.createElement("iframe");
  iframe.dataset.grarfEmbedSlot = slot;
  iframe.setAttribute(
    "sandbox",
    "allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
  );
  iframe.setAttribute("allow", "autoplay; fullscreen; encrypted-media; picture-in-picture");
  iframe.style.cssText = [
    "position:fixed",
    "border:0",
    "margin:0",
    "padding:0",
    `z-index:${slotZIndex(slot)}`,
    "background:#000",
    "pointer-events:auto",
  ].join(";");
  document.body.appendChild(iframe);
  const entry: EmbedEntry = { iframe, url: "" };
  embedLayers.set(slot, entry);
  return entry;
}

function clearEmbedLayer(slot: WorkspaceEmbedSlot): void {
  const entry = embedLayers.get(slot);
  if (!entry) return;
  entry.iframe.remove();
  embedLayers.delete(slot);
}

async function workspaceEmbedSync(payload: {
  url: string;
  bounds: WorkspaceEmbedBounds;
  slot?: WorkspaceEmbedSlot;
}): Promise<boolean> {
  const slot = payload.slot ?? "center";
  if (payload.bounds.width <= 0 || payload.bounds.height <= 0) {
    clearEmbedLayer(slot);
    return true;
  }
  const entry = ensureEmbedLayer(slot);
  applyBounds(entry.iframe, payload.bounds);
  const target = payload.url.trim();
  if (target && entry.url !== target) {
    entry.iframe.src = target;
    entry.url = target;
  }
  entry.iframe.style.display = "block";
  return true;
}

function workspaceEmbedSetBounds(payload: {
  bounds: WorkspaceEmbedBounds;
  slot?: WorkspaceEmbedSlot;
}): void {
  const slot = payload.slot ?? "center";
  const entry = embedLayers.get(slot);
  if (!entry) return;
  if (payload.bounds.width <= 0 || payload.bounds.height <= 0) {
    entry.iframe.style.display = "none";
    return;
  }
  applyBounds(entry.iframe, payload.bounds);
  entry.iframe.style.display = "block";
}

async function workspaceEmbedClear(slot?: WorkspaceEmbedSlot): Promise<boolean> {
  if (slot) {
    clearEmbedLayer(slot);
    return true;
  }
  for (const key of [...embedLayers.keys()]) clearEmbedLayer(key);
  return true;
}

async function tickerRssFetch(
  url: string
): Promise<
  | { ok: true; status: number; xml: string }
  | { ok: false; status?: number; statusText?: string; error?: string }
> {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml, */*" },
      signal: AbortSignal.timeout(15_000),
    });
    if (!res.ok) {
      return { ok: false, status: res.status, statusText: res.statusText, error: `HTTP ${res.status}` };
    }
    const xml = await res.text();
    return { ok: true, status: res.status, xml };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

async function openExternalUrl(url: string): Promise<{ ok: boolean; error?: string }> {
  try {
    window.open(url, "_blank", "noopener,noreferrer");
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : String(err) };
  }
}

function installGrarfBridge(): void {
  if (window.grarf) return;

  window.grarf = {
    workspaceEmbedSync,
    workspaceEmbedSetBounds,
    workspaceEmbedClear,
    openExternalUrl,
    tickerRssFetch,

    editorialGetBundle: async () => {
      const bundle = readWebEditorialBundle();
      return { ok: true as const, bundle };
    },
    editorialSaveNarrative: async (payload) => {
      const bundle = readWebEditorialBundle();
      const narratives = { ...bundle.narratives };
      if (payload.manualNarrative == null || !String(payload.manualNarrative).trim()) {
        delete narratives[payload.gameKey];
      } else {
        narratives[payload.gameKey] = { manualNarrative: String(payload.manualNarrative).trim() };
      }
      const next = { ...bundle, narratives };
      writeWebEditorialBundle(next);
      return { ok: true as const, bundle: next };
    },
    editorialSaveFeaturedRank: async (payload) => {
      const bundle = readWebEditorialBundle();
      const featuredGames = { ...bundle.featuredGames };
      const rank = payload.briefingPriority ?? payload.featuredRank;
      if (rank == null || !Number.isFinite(rank)) delete featuredGames[payload.gameKey];
      else featuredGames[payload.gameKey] = { briefingPriority: Math.round(rank) };
      const next = { ...bundle, featuredGames };
      writeWebEditorialBundle(next);
      return { ok: true as const, bundle: next };
    },
    editorialSaveLeagueContext: async (payload) => {
      const bundle = readWebEditorialBundle();
      const leagueContexts = { ...bundle.leagueContexts };
      const leagueKey = String(payload.leagueKey).toUpperCase();
      if (payload.leagueContext == null || !String(payload.leagueContext).trim()) {
        delete leagueContexts[leagueKey];
      } else {
        leagueContexts[leagueKey] = { leagueContext: String(payload.leagueContext).trim() };
      }
      const next = { ...bundle, leagueContexts };
      writeWebEditorialBundle(next);
      return { ok: true as const, bundle: next };
    },
    sportscapeEditorialGetDocument: async () => {
      try {
        const res = await fetch("/api/sportscape-editorial");
        if (!res.ok) return { ok: false as const, error: `HTTP ${res.status}` };
        const body = (await res.json()) as { document?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeEditorialDocument };
        return { ok: true as const, document: body.document ?? { entries: [], aiBriefSelections: [] } };
      } catch (err) {
        return { ok: false as const, error: err instanceof Error ? err.message : String(err) };
      }
    },
    sportscapeEditorialUpsertEntry: async (payload) => {
      try {
        const res = await fetch("/api/sportscape-editorial/entries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) return { ok: false as const, error: `HTTP ${res.status}` };
        const body = (await res.json()) as {
          entry?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeEditorialEntry;
          document?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeEditorialDocument;
        };
        if (!body.entry) return { ok: false as const, error: "missing_entry" };
        return { ok: true as const, entry: body.entry, document: body.document };
      } catch (err) {
        return { ok: false as const, error: err instanceof Error ? err.message : String(err) };
      }
    },
    sportscapeEditorialUpsertAiBriefSelection: async (payload) => {
      try {
        const res = await fetch("/api/sportscape-editorial/ai-brief-selections", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) return { ok: false as const, error: `HTTP ${res.status}` };
        const body = (await res.json()) as {
          selection?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeAiBriefSelection;
          document?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeEditorialDocument;
        };
        if (!body.selection) return { ok: false as const, error: "missing_selection" };
        return { ok: true as const, selection: body.selection, document: body.document };
      } catch (err) {
        return { ok: false as const, error: err instanceof Error ? err.message : String(err) };
      }
    },
    sportscapeEditorialRemoveAiBriefSelection: async (payload) => {
      try {
        const res = await fetch("/api/sportscape-editorial/ai-brief-selections/remove", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) return { ok: false as const, error: `HTTP ${res.status}` };
        const body = (await res.json()) as {
          removed?: boolean;
          document?: import("../../grarf/desktop/src/types/sportscapeEditorial").SportscapeEditorialDocument;
        };
        return { ok: true as const, removed: body.removed, document: body.document };
      } catch (err) {
        return { ok: false as const, error: err instanceof Error ? err.message : String(err) };
      }
    },
    sportscapeEditorialVerifyPassword: async (password) => {
      try {
        const res = await fetch("/api/sportscape-editorial/verify-password", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ password }),
        });
        if (res.status === 401) return { ok: false as const };
        if (!res.ok) return { ok: false as const, error: `HTTP ${res.status}` };
        const body = (await res.json()) as { ok?: boolean };
        return { ok: Boolean(body.ok) };
      } catch (err) {
        return { ok: false as const, error: err instanceof Error ? err.message : String(err) };
      }
    },
    editorialGenerationGetSummaries: async () => ({ ok: true as const, summaries: {} }),
    editorialGenerationGetState: async () => ({ ok: true as const, generationState: { games: {} } }),
    editorialGenerationGenerateRecaps: async () => ({ ok: false as const, error: "Editorial generation requires desktop main process" }),
    editorialGenerationGeneratePreviews: async () => ({ ok: false as const, error: "Editorial generation requires desktop main process" }),
    editorialGenerationGenerateGameRecap: async () => ({ ok: false as const, error: "Editorial generation requires desktop main process" }),
    editorialGenerationGenerateGamePreview: async () => ({ ok: false as const, error: "Editorial generation requires desktop main process" }),
    editorialGenerationSubscribe: () => () => {},

    commandBriefingGetStore: async () => {
      const store = readJson(LS_COMMAND_BRIEFING, null);
      return store ? { ok: true as const, store } : { ok: true as const, store: { dates: {} } };
    },
    commandBriefingSaveDate: async (payload) => {
      const store = readJson<{ dates: Record<string, unknown> }>(LS_COMMAND_BRIEFING, { dates: {} });
      store.dates[payload.date] = payload.items;
      writeJson(LS_COMMAND_BRIEFING, store);
      return { ok: true as const, store };
    },
    commandBriefingGetPersistence: async () => {
      return { ok: true as const, snapshots: readBriefingPersistenceSnapshots() };
    },
    commandBriefingSavePersistenceEntry: async (payload) => {
      const snapshots = readBriefingPersistenceSnapshots();
      snapshots[payload.gameId] = payload.snapshot;
      writeJson(LS_BRIEFING_PERSISTENCE, { snapshots });
      return { ok: true as const, snapshots };
    },

    intelligenceGetCachedFeed: async () => ({ ok: true as const, items: [] }),
    intelligenceSyncNow: async () => ({ ok: true as const, items: [], configured: false }),
    intelligenceGetBriefing: async () => ({ ok: false as const, error: "Intelligence unavailable in web" }),
    intelligenceGetStatus: async () => ({
      configured: false,
      lastSyncAt: null,
      cacheCount: 0,
    }),
    intelligenceSubscribe: () => () => {},

    gamesGetYesterdayFinals: async () => ({ ok: true as const, finals: [], count: 0 }),

    socialIngestGetCachedPosts: async () => ({
      ok: true as const,
      posts: [],
      meta: { lastFetchedAt: null, lastError: null, postCount: 0 },
    }),
    socialIngestSyncNow: async () => ({
      ok: true as const,
      posts: [],
      meta: { lastFetchedAt: null, lastError: null, postCount: 0 },
    }),
    socialIngestSubscribe: () => () => {},

    youtubeRssFetchAll: async () => [],

    spotifyFetchLatestEpisode: async () => ({
      ok: false as const,
      error: "Spotify bridge unavailable in web",
    }),

    highlightsIngestionGetLeague: async () => ({
      ok: true as const,
      videos: [],
      meta: { league: "", fetchedAt: null, source: "web" },
    }),
    highlightsIngestionClearCache: async () => ({ ok: true as const }),

    mediaResolutionResolveForGame: async () => ({
      ok: false as const,
      error: "Media resolution unavailable in web",
    }),

    operatorIsEnabled: async () => false,

    demoGetStatus: async () => ({
      ok: true as const,
      status: {
        enabled: false,
        envKey: "GRARF_DEMO_DATA_MODE",
        gamesSnapshotDir: "",
        editorialDir: "",
        productionGamesSnapshotDir: "",
        productionEditorialDir: "",
      },
    }),
  };
}

if (!isElectronRenderer()) {
  installGrarfBridge();
  for (const slot of [...embedLayers.keys()]) {
    clearEmbedLayer(slot);
  }
}

export {};
