import type { AdminNavItemId } from "./adminNav";
import { resolveSingularityAdminPageIdFromPath } from "./singularityAdminNav";

export function isAdminHtmlEntry(): boolean {
  return Boolean((window as { __GRARF_ADMIN_ENTRY?: boolean }).__GRARF_ADMIN_ENTRY);
}

export function resolveAdminNavFromPath(pathname: string): AdminNavItemId {
  if (resolveSingularityAdminPageIdFromPath(pathname)) return "singularity";
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  if (segments.includes("operations")) return "operations";
  return "operations";
}

export function buildAdminOperationsPath(pathname = window.location.pathname): string {
  const segments = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  const adminIdx = segments.lastIndexOf("admin.html");
  if (adminIdx >= 0) {
    return `/${segments.slice(0, adminIdx + 1).join("/")}/operations`;
  }
  return "/operations";
}
