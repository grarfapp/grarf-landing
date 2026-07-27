import { useCallback, useMemo } from "react";
import "../../admin.css";
import { AdminSidebar } from "./AdminSidebar";
import type { AdminNavItemId } from "./adminNav";
import { OperationsModule } from "./modules/OperationsModule";
import { SingularityModule } from "./modules/SingularityModule";
import {
  isAdminHtmlEntry,
  resolveAdminNavFromHash,
} from "./resolveAdminNavFromPath";
import { DEFAULT_SINGULARITY_ADMIN_PAGE_ID, type SingularityAdminPageId } from "./singularityAdminNav";
import { useAdminHashNavigation } from "./useAdminHashNavigation";
import { useCenterPaneApplicationModeStore } from "../../../grarf/desktop/src/store/centerPaneApplicationModeStore";

export function GRARFAdminApp() {
  const { hash, parsed, setAdminSection } = useAdminHashNavigation();

  const activeNavItemId = useMemo(() => resolveAdminNavFromHash(hash), [hash]);

  const activeSingularityPageId = useMemo((): SingularityAdminPageId => {
    return parsed.singularityPageId ?? DEFAULT_SINGULARITY_ADMIN_PAGE_ID;
  }, [parsed.singularityPageId]);

  const onSelectNavItem = useCallback(
    (itemId: AdminNavItemId) => {
      if (itemId === "singularity") {
        setAdminSection("singularity", DEFAULT_SINGULARITY_ADMIN_PAGE_ID);
        return;
      }
      if (itemId === "operations") {
        if (isAdminHtmlEntry()) {
          setAdminSection("operations");
          useCenterPaneApplicationModeStore.getState().setModeExplicit("operations");
        }
      }
    },
    [setAdminSection]
  );

  const onSelectSingularityPage = useCallback(
    (nextPageId: SingularityAdminPageId) => {
      setAdminSection("singularity", nextPageId);
    },
    [setAdminSection]
  );

  return (
    <div className="grarf-admin">
      <AdminSidebar activeItemId={activeNavItemId} onSelect={onSelectNavItem} />
      <main className="grarf-admin__main">
        {activeNavItemId === "operations" && !isAdminHtmlEntry() ? <OperationsModule /> : null}
        {activeNavItemId === "singularity" ? (
          <SingularityModule
            activePageId={activeSingularityPageId}
            onSelectPage={onSelectSingularityPage}
          />
        ) : null}
      </main>
    </div>
  );
}
