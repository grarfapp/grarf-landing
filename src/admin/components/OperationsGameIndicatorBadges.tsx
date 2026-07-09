import type { OperationsSnapshotGame } from "../../../../grarf/desktop/src/types/operationsSnapshot";
import { resolveActiveOperationsGameIndicators } from "../lib/resolveOperationsGameIndicators";

type OperationsGameIndicatorBadgesProps = {
  game: OperationsSnapshotGame;
};

export function OperationsGameIndicatorBadges({ game }: OperationsGameIndicatorBadgesProps) {
  const indicators = resolveActiveOperationsGameIndicators(game);
  if (indicators.length === 0) return null;

  return (
    <span className="grarf-admin__game-indicators" aria-label="Operational status indicators">
      {indicators.map((indicator) => (
        <span
          key={indicator.id}
          className={`grarf-admin__game-indicator grarf-admin__game-indicator--${indicator.id}`}
          title={indicator.label}
          aria-label={indicator.label}
        >
          <span className="grarf-admin__game-indicator-emoji" aria-hidden>
            {indicator.emoji}
          </span>
        </span>
      ))}
    </span>
  );
}
