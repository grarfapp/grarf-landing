/**
 * Full Desktop Home port — AppShellLayout + HomePage and supporting routes.
 */
import "../../grarf/desktop/src/lib/gamesSpine/gamesSpineBootstrap";
import "./grarf-web-shim";
import "../../grarf/desktop/src/lib/livetrack/bootLiveTrack";
import { StrictMode, useEffect, useState } from "react";
import { createRoot, type Root } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AnalyticsProvider } from "../../grarf/desktop/src/components/analytics/AnalyticsProvider";
import { GrarfDataModeProvider } from "../../grarf/desktop/src/intelligence/GrarfDataModeProvider";
import { exposeGrarfDeveloperModeOnWindow } from "../../grarf/desktop/src/intelligence/exposeGrarfDeveloperModeOnWindow";
import { AppShellLayout } from "../../grarf/desktop/src/layouts/AppShellLayout";
import { leagueDirectoryUniqueRoutes } from "../../grarf/desktop/src/data/leagueDirectoryV1";
import { HomePage } from "../../grarf/desktop/src/pages/HomePage";
import { LeagueDirectoryRoutePage } from "../../grarf/desktop/src/pages/LeagueDirectoryRoutePage";
import { SportscapeEditorialAdminPage } from "../../grarf/desktop/src/pages/SportscapeEditorialAdminPage";
import { bindIntelligenceStoreUpdates } from "../../grarf/desktop/src/store/intelligenceStore";
import type { CenterPaneApplicationMode } from "../../grarf/desktop/src/types/centerPaneApplicationMode";
import type { GlobalOperationalMode } from "../../grarf/desktop/src/types/globalOperationalMode";
import { useCenterPaneApplicationModeStore } from "../../grarf/desktop/src/store/centerPaneApplicationModeStore";
import { useOperationalModeStore } from "../../grarf/desktop/src/store/operationalModeStore";
import { AdminModeOverlay } from "../../grarf/desktop/src/components/adminMode/AdminModeOverlay";
import { SportscapeEditorialPasswordForm } from "../../grarf/desktop/src/components/sportscapeEditorial/SportscapeEditorialPasswordForm";
import { markGrarfAdmin } from "../../grarf/desktop/src/lib/admin/grarfAdminFlag";
import { isSportscapeAdminAuthed } from "../../grarf/desktop/src/lib/sportscape/editorial/sportscapeEditorialAdminAuth";
import { useAdminModeStore } from "../../grarf/desktop/src/store/adminModeStore";
import { resolveCenterPaneApplicationModeFromPath } from "../../grarf/desktop/src/lib/home/resolveCenterPaneApplicationModeFromPath";
import { hydrateOperationalGameOverridesFromPersistence } from "../../grarf/desktop/src/lib/operationsSpine/hydrateOperationalGameOverrides";
import { hydrateOperationalLiveWorkspaceFromPersistence } from "../../grarf/desktop/src/lib/operationsSpine/hydrateOperationalLiveWorkspace";

let reactRoot: Root | null = null;

function isAdminHtmlEntry(): boolean {
  return Boolean((window as { __GRARF_ADMIN_ENTRY?: boolean }).__GRARF_ADMIN_ENTRY);
}

/** Activate Admin Mode before HomePage mounts — must run synchronously on admin.html entry. */
function activateAdminEntry(): void {
  markGrarfAdmin();
  useAdminModeStore.getState().enterAdminMode();
  if (!resolveCenterPaneApplicationModeFromPath(window.location.pathname)) {
    useCenterPaneApplicationModeStore.getState().setModeExplicit("operations");
  }
}

/**
 * admin.html page gate — reuses POST /verify-password and the existing bearer-token
 * session so Operations Spine Save uses the same Authorization header as today.
 */
function AdminEntryPasswordGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(() => !isAdminHtmlEntry() || isSportscapeAdminAuthed());

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#020404] px-4">
        <div className="w-full max-w-sm border border-line/60 bg-panel2 p-6 shadow-lg">
          <SportscapeEditorialPasswordForm
            idPrefix="grarf-admin-entry"
            title="GRARF Admin"
            description="Enter the editorial password to access the Operations Spine and save operational overrides."
            submitLabel="ENTER"
            onSuccess={() => {
              activateAdminEntry();
              setAuthed(true);
            }}
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

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
    <Route path="newswire" element={<HomePage />} />
    <Route path="livetracker" element={<HomePage />} />
    <Route path="highlightstv" element={<HomePage />} />
    {leagueDirectoryUniqueRoutes().map((item) => (
      <Route
        key={item.route}
        path={item.route.replace(/^\//, "")}
        element={<LeagueDirectoryRoutePage />}
      />
    ))}
    <Route path="game/:id" element={<HomePage />} />
  </>
);

const adminAppShellRouteElements = (
  <>
    {appShellRouteElements}
    <Route path="operations" element={<HomePage />} />
  </>
);

function WebHomeApp() {
  return (
    <GrarfDataModeProvider>
      <AnalyticsProvider>
        <IntelligenceSyncBridge />
        <Routes>
          <Route path="/" element={<AppShellLayout />}>
            {appShellRouteElements}
          </Route>
          <Route path="webapp.html" element={<AppShellLayout />}>
            {appShellRouteElements}
          </Route>
          {/* admin.html — same AppShellLayout as public, Admin Mode pre-activated before mount */}
          <Route path="admin.html" element={<AppShellLayout />}>
            {adminAppShellRouteElements}
          </Route>
          <Route path="admin/sportscape" element={<SportscapeEditorialAdminPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <AdminModeOverlay />
      </AnalyticsProvider>
    </GrarfDataModeProvider>
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
        <AdminEntryPasswordGate>
          <WebHomeApp />
        </AdminEntryPasswordGate>
      </BrowserRouter>
    </StrictMode>
  );
}

export async function bootDesktopWebClient(container: HTMLElement): Promise<void> {
  exposeGrarfDeveloperModeOnWindow();
  void hydrateOperationalGameOverridesFromPersistence();
  void hydrateOperationalLiveWorkspaceFromPersistence();
  if (isAdminHtmlEntry() && isSportscapeAdminAuthed()) {
    activateAdminEntry();
  }
  mountWebHome(container);
}
