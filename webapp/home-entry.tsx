/**
 * Full Desktop Home port — AppShellLayout + HomePage and supporting routes.
 */
import "./grarf-web-shim";
import "../../grarf/desktop/src/lib/livetrack/bootLiveTrack";
import { StrictMode, useEffect } from "react";
import { createRoot, type Root } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AnalyticsProvider } from "../../grarf/desktop/src/components/analytics/AnalyticsProvider";
import { AppShellLayout } from "../../grarf/desktop/src/layouts/AppShellLayout";
import { leagueDirectoryUniqueRoutes } from "../../grarf/desktop/src/data/leagueDirectoryV1";
import { GameWorkspacePage } from "../../grarf/desktop/src/pages/GameWorkspacePage";
import { HomePage } from "../../grarf/desktop/src/pages/HomePage";
import { LeagueDirectoryRoutePage } from "../../grarf/desktop/src/pages/LeagueDirectoryRoutePage";
import { SportscapeEditorialAdminPage } from "../../grarf/desktop/src/pages/SportscapeEditorialAdminPage";
import { bindIntelligenceStoreUpdates } from "../../grarf/desktop/src/store/intelligenceStore";
import type { CenterPaneApplicationMode } from "../../grarf/desktop/src/types/centerPaneApplicationMode";
import type { GlobalOperationalMode } from "../../grarf/desktop/src/types/globalOperationalMode";
import { useCenterPaneApplicationModeStore } from "../../grarf/desktop/src/store/centerPaneApplicationModeStore";
import { useOperationalModeStore } from "../../grarf/desktop/src/store/operationalModeStore";

let reactRoot: Root | null = null;

function IntelligenceSyncBridge() {
  useEffect(() => bindIntelligenceStoreUpdates(), []);
  return null;
}

const appShellRouteElements = (
  <>
    <Route index element={<HomePage />} />
    <Route path="sportscape" element={<HomePage />} />
    <Route path="browser" element={<HomePage />} />
    <Route path="whiparound" element={<HomePage />} />
    <Route path="livetracker" element={<HomePage />} />
    {leagueDirectoryUniqueRoutes().map((item) => (
      <Route
        key={item.route}
        path={item.route.replace(/^\//, "")}
        element={<LeagueDirectoryRoutePage />}
      />
    ))}
    <Route path="game/:id" element={<GameWorkspacePage />} />
  </>
);

function WebHomeApp() {
  return (
    <AnalyticsProvider>
      <IntelligenceSyncBridge />
      <Routes>
        <Route path="/" element={<AppShellLayout />}>
          {appShellRouteElements}
        </Route>
        <Route path="webapp.html" element={<AppShellLayout />}>
          {appShellRouteElements}
        </Route>
        <Route path="admin/sportscape" element={<SportscapeEditorialAdminPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnalyticsProvider>
  );
}

export function syncOperationalMode(mode: GlobalOperationalMode): void {
  useOperationalModeStore.getState().setModeByUser(mode);
}

export function syncCenterPaneApplicationMode(mode: CenterPaneApplicationMode): void {
  useCenterPaneApplicationModeStore.getState().setModeExplicit(mode);
}

export function mountWebHome(container: HTMLElement): void {
  if (!reactRoot) {
    reactRoot = createRoot(container);
  }

  reactRoot.render(
    <StrictMode>
      <BrowserRouter>
        <WebHomeApp />
      </BrowserRouter>
    </StrictMode>
  );
}

const autoRoot = document.getElementById("grarf-web-root");
if (autoRoot) {
  mountWebHome(autoRoot);
}
