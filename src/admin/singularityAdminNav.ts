export type SingularityAdminPageId =
  | "evidence"
  | "matchers"
  | "gamebriefs"
  | "context"
  | "providers";

export type SingularityAdminPage = {
  id: SingularityAdminPageId;
  label: string;
  pathSegment: string;
  description: string;
};

export const SINGULARITY_ADMIN_PAGES: SingularityAdminPage[] = [
  {
    id: "evidence",
    label: "Evidence",
    pathSegment: "evidence",
    description:
      "Inspect all canonical Evidence attached to games, teams, players, and other entities.",
  },
  {
    id: "matchers",
    label: "Matchers",
    pathSegment: "matchers",
    description:
      "Configure and review deterministic matchers that attach Evidence to canonical entities.",
  },
  {
    id: "gamebriefs",
    label: "GameBriefs",
    pathSegment: "gamebriefs",
    description:
      "Manage interpreted GameBrief variants, depths, and confidence for featured games.",
  },
  {
    id: "context",
    label: "Context",
    pathSegment: "context",
    description:
      "Observe and debug Context Engine state as users explore games and workspaces.",
  },
  {
    id: "providers",
    label: "Providers",
    pathSegment: "providers",
    description:
      "Register and monitor AcquisitionProviders that feed the Singularity ingest pipeline.",
  },
];

const SINGULARITY_PAGE_BY_SEGMENT = new Map(
  SINGULARITY_ADMIN_PAGES.map((page) => [page.pathSegment, page.id] as const)
);

const SINGULARITY_PAGE_BY_ID = new Map(
  SINGULARITY_ADMIN_PAGES.map((page) => [page.id, page] as const)
);

export const DEFAULT_SINGULARITY_ADMIN_PAGE_ID: SingularityAdminPageId = "evidence";

export function isSingularityAdminPageId(value: string): value is SingularityAdminPageId {
  return SINGULARITY_PAGE_BY_ID.has(value as SingularityAdminPageId);
}

export function resolveSingularityAdminPageIdFromSegment(
  segment: string | undefined
): SingularityAdminPageId | null {
  if (!segment) return null;
  return SINGULARITY_PAGE_BY_SEGMENT.get(segment) ?? null;
}

export function resolveSingularityAdminPage(
  pageId: SingularityAdminPageId
): SingularityAdminPage {
  return SINGULARITY_PAGE_BY_ID.get(pageId)!;
}
