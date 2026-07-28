export type AdminNavItemId =
  | "operations"
  | "editorial"
  | "featured-games"
  | "streams"
  | "navigation"
  | "waitlist"
  | "analytics"
  | "settings";

export type AdminNavItem = {
  id: AdminNavItemId;
  label: string;
  enabled: boolean;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  { id: "operations", label: "Operations", enabled: true },
  { id: "editorial", label: "Editorial", enabled: false },
  { id: "featured-games", label: "Featured Games", enabled: false },
  { id: "streams", label: "Streams", enabled: false },
  { id: "navigation", label: "Navigation", enabled: false },
  { id: "waitlist", label: "Waitlist", enabled: false },
  { id: "analytics", label: "Analytics", enabled: false },
  { id: "settings", label: "Settings", enabled: false },
];
