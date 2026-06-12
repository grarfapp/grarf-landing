/**
 * Mount Desktop HomeGamesToday in the web shell — reuses desktop/src components and stores.
 */
import React, { useCallback, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { HomeGamesToday } from "../../grarf/desktop/src/components/homeMvp/HomeGamesToday";
import { HomeActiveLeagueProvider } from "../../grarf/desktop/src/context/HomeActiveLeagueContext";
import { useHomeGamesColumnFilter } from "../../grarf/desktop/src/hooks/useHomeGamesColumnFilter";
import { normalizeOperationalSnapshot } from "../../grarf/desktop/src/services/operationalIngest/normalizeOperationalSnapshot";
import { useLiveGamesStore } from "../../grarf/desktop/src/store/liveGamesStore";
import type { GamesSnapshot } from "../../grarf/desktop/src/store/liveGamesStore";
import { useOperationalModeStore } from "../../grarf/desktop/src/store/operationalModeStore";
import type { GlobalOperationalMode } from "../../grarf/desktop/src/types/globalOperationalMode";
import type { OverlayWorkspaceAction } from "../../grarf/desktop/src/lib/overlayWorkspaceReducer";

let pollStop: (() => void) | null = null;
let reactRoot: Root | null = null;

declare global {
  interface Window {
    GRARF_WEB_CONFIG?: { operationalIngestUrl?: string; operationalPollIntervalMs?: number };
  }
}

const DEFAULT_POLL_MS = 60_000;
const RETRY_MS = 15_000;

function operationalIngestBaseUrl(): string {
  const fromWindow = window.GRARF_WEB_CONFIG?.operationalIngestUrl?.trim();
  if (fromWindow) return fromWindow.replace(/\/$/, "");
  return (
    (import.meta.env.VITE_GRARF_OPERATIONAL_INGEST_URL as string | undefined)?.trim()?.replace(/\/$/, "") ??
    "https://grarf-operational-service.grarf.workers.dev"
  );
}

function startWebOperationalSnapshotPolling(hydrate: (snap: GamesSnapshot) => void): () => void {
  const intervalMs = window.GRARF_WEB_CONFIG?.operationalPollIntervalMs ?? DEFAULT_POLL_MS;
  let stopped = false;
  let retryTimer: ReturnType<typeof setTimeout> | null = null;
  let intervalId: ReturnType<typeof setInterval> | null = null;

  const clearRetry = () => {
    if (retryTimer != null) {
      clearTimeout(retryTimer);
      retryTimer = null;
    }
  };

  const runPoll = async () => {
    if (stopped) return;
    try {
      const res = await fetch(`${operationalIngestBaseUrl()}/operational/snapshot`, {
        headers: { Accept: "application/json" },
        signal: AbortSignal.timeout(12_000),
      });
      if (!res.ok) throw new Error(`operational snapshot ${res.status}`);
      const json = await res.json();
      const canonical = normalizeOperationalSnapshot(json);
      hydrate(canonical as GamesSnapshot);
      clearRetry();
    } catch {
      if (!stopped && retryTimer == null) {
        retryTimer = setTimeout(() => {
          retryTimer = null;
          void runPoll();
        }, RETRY_MS);
      }
    }
  };

  void runPoll();
  intervalId = setInterval(() => void runPoll(), intervalMs);

  return () => {
    stopped = true;
    if (intervalId != null) clearInterval(intervalId);
    clearRetry();
  };
}

function GamesSpineApp() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const columnFilter = useHomeGamesColumnFilter();
  const watchDispatch = useCallback((_action: OverlayWorkspaceAction) => {}, []);

  return (
    <HomeActiveLeagueProvider>
      <HomeGamesToday
        parentScrolls
        columnFilter={columnFilter}
        selectedId={selectedId}
        onSelectGame={setSelectedId}
        watchDispatch={watchDispatch}
      />
    </HomeActiveLeagueProvider>
  );
}

export function syncOperationalMode(mode: GlobalOperationalMode): void {
  useOperationalModeStore.getState().setModeByUser(mode);
}

export function mountGamesSpine(container: HTMLElement): void {
  if (!pollStop) {
    pollStop = startWebOperationalSnapshotPolling((snap) => {
      useLiveGamesStore.getState().hydrate(snap);
    });
  }

  if (!reactRoot) {
    reactRoot = createRoot(container);
  }

  reactRoot.render(
    <MemoryRouter>
      <GamesSpineApp />
    </MemoryRouter>
  );
}
