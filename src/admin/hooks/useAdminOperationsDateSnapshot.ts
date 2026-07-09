import { useEffect, useState } from "react";
import { buildOperationsDateSnapshot } from "../../../../grarf/desktop/src/lib/operations/buildOperationsDateSnapshot";
import { loadOperationsDateSnapshotInputs } from "../../../../grarf/desktop/src/lib/operations/loadOperationsDateSnapshotInputs";
import type { OperationsDateSnapshot } from "../../../../grarf/desktop/src/types/operationsSnapshot";

export function useAdminOperationsDateSnapshot(operationalDateKey: string) {
  const [snapshot, setSnapshot] = useState<OperationsDateSnapshot | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadSnapshot() {
      setLoading(true);
      setError(null);

      try {
        const assemblyInput = await loadOperationsDateSnapshotInputs(operationalDateKey);
        const nextSnapshot = buildOperationsDateSnapshot(assemblyInput);

        if (!cancelled) {
          setSnapshot(nextSnapshot);
        }
      } catch (loadError) {
        if (!cancelled) {
          setSnapshot(null);
          setError(
            loadError instanceof Error
              ? loadError.message
              : "Failed to assemble operations snapshot"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadSnapshot();

    return () => {
      cancelled = true;
    };
  }, [operationalDateKey]);

  return { snapshot, loading, error };
}
