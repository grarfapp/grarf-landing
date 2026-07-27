import type { AdminNavItemId } from "./adminNav";
import { buildAdminHtmlHashUrl, parseAdminHash } from "./adminHashNav";

export function isAdminHtmlEntry(): boolean {
  return Boolean((window as { __GRARF_ADMIN_ENTRY?: boolean }).__GRARF_ADMIN_ENTRY);
}

export function resolveAdminNavFromHash(hash: string): AdminNavItemId {
  const parsed = parseAdminHash(hash);
  return parsed.section === "singularity" ? "singularity" : "operations";
}

/** @deprecated Use resolveAdminNavFromHash. */
export function resolveAdminNavFromPath(_pathname: string, hash = window.location.hash): AdminNavItemId {
  return resolveAdminNavFromHash(hash);
}

export function buildAdminOperationsPath(pathname = window.location.pathname): string {
  return buildAdminHtmlHashUrl("operations", undefined, pathname);
}
