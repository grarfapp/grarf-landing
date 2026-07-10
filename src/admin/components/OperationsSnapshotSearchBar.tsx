type OperationsSnapshotSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function OperationsSnapshotSearchBar({
  value,
  onChange,
}: OperationsSnapshotSearchBarProps) {
  return (
    <div className="grarf-admin__operations-search">
      <label className="grarf-admin__operations-search-label" htmlFor="operations-snapshot-search">
        Search snapshot
      </label>
      <input
        id="operations-snapshot-search"
        type="search"
        className="grarf-admin__operations-search-input"
        value={value}
        placeholder="Search games, teams, players, leagues..."
        onChange={(event) => onChange(event.target.value)}
        autoComplete="off"
        spellCheck={false}
      />
    </div>
  );
}
