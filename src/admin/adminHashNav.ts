import {
  DEFAULT_SINGULARITY_ADMIN_PAGE_ID,
  isSingularityAdminPageId,
  resolveSingularityAdminPageIdFromSegment,
  type SingularityAdminPageId,
} from "./singularityAdminNav";

export type AdminHashSection = "operations" | "singularity";

export type ParsedAdminHash = {
  section: AdminHashSection;
  singularityPageId: SingularityAdminPageId | null;
};

export function normalizeAdminHash(hash: string): string {
  return hash.replace(/^#/, "").replace(/\/$/, "").trim();
}

export function parseAdminHash(hash: string): ParsedAdminHash {
  const normalized = normalizeAdminHash(hash);

  if (!normalized || normalized === "operations") {
    return { section: "operations", singularityPageId: null };
  }

  if (normalized === "singularity") {
    return {
      section: "singularity",
      singularityPageId: DEFAULT_SINGULARITY_ADMIN_PAGE_ID,
    };
  }

  if (normalized.startsWith("singularity/")) {
    const segment = normalized.slice("singularity/".length).split("/")[0];
    const pageId = resolveSingularityAdminPageIdFromSegment(segment);
    return {
      section: "singularity",
      singularityPageId: pageId ?? DEFAULT_SINGULARITY_ADMIN_PAGE_ID,
    };
  }

  return { section: "operations", singularityPageId: null };
}

export function buildAdminHash(
  section: AdminHashSection,
  pageId: SingularityAdminPageId = DEFAULT_SINGULARITY_ADMIN_PAGE_ID
): string {
  if (section === "operations") return "#operations";
  const resolvedPageId = isSingularityAdminPageId(pageId)
    ? pageId
    : DEFAULT_SINGULARITY_ADMIN_PAGE_ID;
  return `#singularity/${resolvedPageId}`;
}

export function resolveAdminHtmlPathname(pathname = window.location.pathname): string {
  const segments = pathname.replace(/\/$/, "").split("/").filter(Boolean);
  const adminIdx = segments.lastIndexOf("admin.html");
  if (adminIdx >= 0) {
    return `/${segments.slice(0, adminIdx + 1).join("/")}`;
  }
  return "/admin.html";
}

export function buildAdminHtmlHashUrl(
  section: AdminHashSection,
  pageId?: SingularityAdminPageId,
  pathname = window.location.pathname
): string {
  return `${resolveAdminHtmlPathname(pathname)}${buildAdminHash(section, pageId)}`;
}

export function isSingularityAdminHash(hash: string): boolean {
  return parseAdminHash(hash).section === "singularity";
}

export function setAdminHash(
  section: AdminHashSection,
  pageId?: SingularityAdminPageId,
  options?: { replace?: boolean }
): void {
  const nextHash = buildAdminHash(section, pageId);
  if (window.location.hash === nextHash) return;

  if (options?.replace) {
    const url = `${window.location.pathname}${window.location.search}${nextHash}`;
    window.history.replaceState(window.history.state, "", url);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    return;
  }

  window.location.hash = nextHash;
}

export function normalizeSingularityAdminHashOnLoad(): void {
  const normalized = normalizeAdminHash(window.location.hash);
  if (normalized === "singularity") {
    setAdminHash("singularity", DEFAULT_SINGULARITY_ADMIN_PAGE_ID, { replace: true });
  }
}
