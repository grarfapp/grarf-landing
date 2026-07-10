import {
  GRARF_OPERATIONAL_SLATE_TIMEZONE,
  getOperationalSportsDayDateKey,
  offsetOperationalDateKey,
} from "../../../../grarf/desktop/shared/operationalSlateDate.js";

/** Current sports day plus this many future operational dates in the console selector. */
const OPERATIONS_CONSOLE_FUTURE_DAY_COUNT = 13;

/** Operational sports-day keys for the Operations Console date selector. */
export function resolveOperationsConsoleDateKeys(now: Date = new Date()): string[] {
  const todayKey = getOperationalSportsDayDateKey(now, GRARF_OPERATIONAL_SLATE_TIMEZONE);
  const dateKeys: string[] = [];

  for (let dayOffset = 0; dayOffset <= OPERATIONS_CONSOLE_FUTURE_DAY_COUNT; dayOffset += 1) {
    dateKeys.push(offsetOperationalDateKey(todayKey, dayOffset, GRARF_OPERATIONAL_SLATE_TIMEZONE));
  }

  return dateKeys;
}

export function resolveDefaultOperationsConsoleDateKey(now: Date = new Date()): string {
  return getOperationalSportsDayDateKey(now, GRARF_OPERATIONAL_SLATE_TIMEZONE);
}
