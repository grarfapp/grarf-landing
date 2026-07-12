import { useState } from "react";
import { AdminSidebar } from "./AdminSidebar";
import type { AdminNavItemId } from "./adminNav";
import { OperationsModule } from "./modules/OperationsModule";
import { LeaguePriorityAdminPanel } from "../../../grarf/desktop/src/components/leaguePriorityAdmin/LeaguePriorityAdminPanel";

export function GRARFAdminApp() {
  const [activeNavItemId, setActiveNavItemId] = useState<AdminNavItemId>("operations");

  return (
    <div className="grarf-admin">
      <AdminSidebar activeItemId={activeNavItemId} onSelect={setActiveNavItemId} />
      <main className="grarf-admin__main">
        {activeNavItemId === "operations" ? <OperationsModule /> : null}
        {activeNavItemId === "league-configuration" ? <LeaguePriorityAdminPanel /> : null}
      </main>
    </div>
  );
}
