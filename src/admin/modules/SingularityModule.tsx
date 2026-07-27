import { SingularityEvidenceExplorer } from "../../../../grarf/desktop/src/components/singularity/SingularityEvidenceExplorer";
import { AdminPlaceholderPanel } from "../components/AdminPlaceholderPanel";
import {
  resolveSingularityAdminPage,
  SINGULARITY_ADMIN_PAGES,
  type SingularityAdminPageId,
} from "../singularityAdminNav";

type SingularityModuleProps = {
  activePageId: SingularityAdminPageId;
  onSelectPage: (pageId: SingularityAdminPageId) => void;
};

export function SingularityModule({ activePageId, onSelectPage }: SingularityModuleProps) {
  const activePage = resolveSingularityAdminPage(activePageId);

  return (
    <div className="grarf-admin__singularity">
      <nav className="grarf-admin__subnav" aria-label="Singularity pages">
        {SINGULARITY_ADMIN_PAGES.map((page) => {
          const isActive = page.id === activePage.id;
          return (
            <button
              key={page.id}
              type="button"
              className={
                isActive
                  ? "grarf-admin__subnav-item grarf-admin__subnav-item--active"
                  : "grarf-admin__subnav-item"
              }
              aria-current={isActive ? "page" : undefined}
              onClick={() => onSelectPage(page.id)}
            >
              {page.label}
            </button>
          );
        })}
      </nav>
      {activePage.id === "evidence" ? (
        <SingularityEvidenceExplorer />
      ) : (
        <AdminPlaceholderPanel title={activePage.label} description={activePage.description} />
      )}
    </div>
  );
}
