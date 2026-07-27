import { useCallback, useMemo } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../admin.css";
import { AdminSidebar } from "./AdminSidebar";
import type { AdminNavItemId } from "./adminNav";
import { OperationsModule } from "./modules/OperationsModule";
import { SingularityModule } from "./modules/SingularityModule";
import {
  buildAdminOperationsPath,
  isAdminHtmlEntry,
  resolveAdminNavFromPath,
} from "./resolveAdminNavFromPath";
import {
  buildSingularityAdminPath,
  DEFAULT_SINGULARITY_ADMIN_PAGE_ID,
  isSingularityAdminPageId,
  resolveSingularityAdminPageIdFromPath,
  type SingularityAdminPageId,
} from "./singularityAdminNav";

export function GRARFAdminApp() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { pageId } = useParams<{ pageId?: string }>();

  const activeNavItemId = useMemo(() => resolveAdminNavFromPath(pathname), [pathname]);

  const activeSingularityPageId = useMemo((): SingularityAdminPageId => {
    const fromPath = resolveSingularityAdminPageIdFromPath(pathname);
    if (fromPath) return fromPath;
    if (pageId && isSingularityAdminPageId(pageId)) return pageId;
    return DEFAULT_SINGULARITY_ADMIN_PAGE_ID;
  }, [pageId, pathname]);

  const onSelectNavItem = useCallback(
    (itemId: AdminNavItemId) => {
      if (itemId === "singularity") {
        navigate(buildSingularityAdminPath(DEFAULT_SINGULARITY_ADMIN_PAGE_ID, pathname));
        return;
      }
      if (itemId === "operations") {
        navigate(buildAdminOperationsPath(pathname));
      }
    },
    [navigate, pathname]
  );

  const onSelectSingularityPage = useCallback(
    (nextPageId: SingularityAdminPageId) => {
      navigate(buildSingularityAdminPath(nextPageId, pathname));
    },
    [navigate, pathname]
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
