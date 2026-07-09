import { ADMIN_NAV_ITEMS, type AdminNavItemId } from "./adminNav";

type AdminSidebarProps = {
  activeItemId: AdminNavItemId;
  onSelect: (itemId: AdminNavItemId) => void;
};

export function AdminSidebar({ activeItemId, onSelect }: AdminSidebarProps) {
  return (
    <aside className="grarf-admin__sidebar">
      <div className="grarf-admin__brand">
        <h1 className="grarf-admin__brand-title">GRARF Admin</h1>
        <p className="grarf-admin__brand-subtitle">Operations &amp; editorial tools</p>
      </div>
      <nav className="grarf-admin__nav" aria-label="Admin navigation">
        {ADMIN_NAV_ITEMS.map((item) => {
          const isActive = item.id === activeItemId;
          return (
            <button
              key={item.id}
              type="button"
              className={
                isActive
                  ? "grarf-admin__nav-item grarf-admin__nav-item--active"
                  : "grarf-admin__nav-item"
              }
              disabled={!item.enabled}
              aria-current={isActive ? "page" : undefined}
              title={item.enabled ? undefined : "Coming soon"}
              onClick={() => {
                if (item.enabled) onSelect(item.id);
              }}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
