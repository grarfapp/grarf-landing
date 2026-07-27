import { useCallback, useEffect, useMemo, useState } from "react";
import {
  normalizeSingularityAdminHashOnLoad,
  parseAdminHash,
  setAdminHash,
  type AdminHashSection,
  type ParsedAdminHash,
} from "./adminHashNav";
import type { SingularityAdminPageId } from "./singularityAdminNav";

export function useAdminHashNavigation(): {
  hash: string;
  parsed: ParsedAdminHash;
  setAdminSection: (section: AdminHashSection, pageId?: SingularityAdminPageId) => void;
} {
  const [hash, setHashState] = useState(() => window.location.hash);

  useEffect(() => {
    normalizeSingularityAdminHashOnLoad();
    setHashState(window.location.hash);

    const onHashChange = () => {
      normalizeSingularityAdminHashOnLoad();
      setHashState(window.location.hash);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const parsed = useMemo(() => parseAdminHash(hash), [hash]);

  const setAdminSection = useCallback(
    (section: AdminHashSection, pageId?: SingularityAdminPageId) => {
      setAdminHash(section, pageId);
    },
    []
  );

  return { hash, parsed, setAdminSection };
}
