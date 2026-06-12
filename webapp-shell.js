/**
 * GRARF Web — Desktop Home shell (structural port from desktop/src).
 */
import { mountGamesSpine, syncOperationalMode } from "./webapp-games-spine.bundle.js";

/** Mirrors desktop/src/data/leagueDirectoryV1.ts LEAGUE_DIRECTORY_V1 + HOME */
const LEAGUE_DIRECTORY_HOME = { id: "home", label: "HOME" };

const LEAGUE_DIRECTORY_V1 = [
  {
    id: "primary",
    title: "PRIMARY",
    items: [
      { label: "NFL", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/nfl.png" },
      { label: "NBA", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/nba.png" },
      { label: "MLB", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/mlb.png" },
      { label: "NHL", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/nhl.png" },
      { label: "Premier League", logoUrl: "league-logos/epl.png" },
    ],
  },
  {
    id: "on-today",
    title: "ON TODAY",
    items: [
      { label: "NHL", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/nhl.png" },
      { label: "MLB", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/mlb.png" },
      { label: "French Open", logoUrl: "league-logos/french-open.png" },
      { label: "WCWS", logoUrl: "league-logos/wcws.png" },
      { label: "NCAA Baseball", logoUrl: "league-logos/ncaa-baseball.png" },
    ],
  },
  {
    id: "football",
    title: "FOOTBALL",
    items: [
      { label: "NCAAF", logoUrl: "league-logos/ncaaf.png" },
      { label: "UFL", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/ufl.png" },
    ],
  },
  {
    id: "soccer",
    title: "SOCCER",
    items: [
      { label: "MLS", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/19.png" },
      { label: "NWSL", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/2323.png" },
      { label: "LaLiga", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/15.png" },
      { label: "Bundesliga", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/10.png" },
      { label: "Serie A", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/12.png" },
      { label: "UCL", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/2.png" },
      { label: "Ligue 1", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/9.png" },
      { label: "Liga MX", logoUrl: "https://a.espncdn.com/i/leaguelogos/soccer/500/22.png" },
    ],
  },
  {
    id: "basketball",
    title: "BASKETBALL",
    items: [
      { label: "WNBA", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/wnba.png" },
      { label: "NCAAM", logoUrl: "league-logos/ncaam.png" },
      { label: "NCAAW", logoUrl: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-basketball.png" },
    ],
  },
  {
    id: "golf",
    title: "GOLF",
    items: [
      { label: "PGA Tour" },
      { label: "LPGA", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/lpga.png" },
    ],
  },
  {
    id: "tennis",
    title: "TENNIS",
    items: [
      { label: "ATP", logoUrl: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-tennis.png" },
      { label: "WTA", logoUrl: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-tennis.png" },
    ],
  },
  {
    id: "motorsports",
    title: "MOTORSPORTS",
    items: [
      { label: "Formula One", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/f1.png" },
      { label: "NASCAR" },
      { label: "IndyCar", logoUrl: "https://a.espncdn.com/i/espn/teamlogos/500/indycar_series.png" },
      { label: "MotoGP", logoUrl: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-MotoGP.png" },
    ],
  },
  {
    id: "combat",
    title: "COMBAT",
    items: [
      { label: "UFC", logoUrl: "https://a.espncdn.com/i/teamlogos/leagues/500/ufc.png" },
      { label: "Boxing", logoUrl: "https://a.espncdn.com/redesign/assets/img/icons/ESPN-icon-boxing.png" },
    ],
  },
];

const UTILITY_NAV = [
  { id: "betting", label: "BETTING" },
  { id: "fantasy", label: "FANTASY" },
];

/** Mirrors desktop/src/data/homeGeneralSportsSources.ts */
const GENERAL_SPORTS_SOURCES = [
  { id: "espn", label: "ESPN" },
  { id: "cbs", label: "CBS Sports" },
  { id: "yahoo", label: "Yahoo Sports" },
  { id: "si", label: "Sports Illustrated" },
  { id: "bleacher_report", label: "Bleacher Report" },
  { id: "fox_sports", label: "FOX Sports" },
  { id: "athletic", label: "The Athletic" },
  { id: "nbc_sports", label: "NBC Sports" },
  { id: "sb_nation", label: "SB Nation" },
  { id: "yardbarker", label: "Yardbarker" },
];

const HOME_LEAGUE_CHAPTERS = [
  { id: "mlb", label: "MLB" },
  { id: "nba", label: "NBA" },
];

const HOME_CATCH_UP_SUBMENU = [
  { id: "sportscape", label: "SPORTSCAPE" },
  { id: "breaking", label: "BREAKING" },
  { id: "headlines", label: "HEADLINES" },
];

const HOME_LIVE_SUBMENU = [{ id: "livetrack", label: "LIVETRACK" }];

const ACTIVITY_RAIL_TABS = [
  { id: "social", label: "PULSE", cls: "" },
  { id: "intelligence", label: "INTEL", cls: "activity-rail__tab--intel" },
  { id: "podcasts", label: "POD", cls: "activity-rail__tab--pod" },
  { id: "shows", label: "SHOW", cls: "activity-rail__tab--show" },
  { id: "reddit", label: "CONVO", cls: "" },
  { id: "chat", label: "CHAT", cls: "" },
];

let operationalMode = "LIVE";
let catchUpSubmenuId = "sportscape";
let liveSubmenuId = "livetrack";
let activityTab = "social";
let liveTrackView = "terminal";

function el(tag, className, attrs) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "text") node.textContent = v;
      else if (k === "html") node.innerHTML = v;
      else node.setAttribute(k, v);
    }
  }
  return node;
}

function renderAppLeftNav() {
  const scroll = document.getElementById("app-left-nav-scroll");
  if (!scroll) return;
  scroll.innerHTML = "";

  const home = el("span", "nav-row nav-row--active", { "aria-current": "page", text: LEAGUE_DIRECTORY_HOME.label });
  scroll.appendChild(home);

  for (const section of LEAGUE_DIRECTORY_V1) {
    scroll.appendChild(el("div", "nav-section-label", { text: section.title }));
    for (const item of section.items) {
      const row = el("span", "nav-row");
      const labelWrap = el("span", "nav-row__label");
      if (item.logoUrl) {
        const img = el("img", "nav-row__logo", { src: item.logoUrl, alt: "", loading: "lazy", decoding: "async" });
        img.referrerPolicy = "no-referrer";
        img.onerror = () => img.remove();
        labelWrap.appendChild(img);
      }
      labelWrap.appendChild(el("span", "", { text: item.label }));
      row.appendChild(labelWrap);
      scroll.appendChild(row);
    }
  }
}

function renderGeneralSportsSourcePanes() {
  const row = document.getElementById("home-source-cards-row");
  if (!row) return;
  row.innerHTML = "";
  for (const source of GENERAL_SPORTS_SOURCES) {
    const pane = el("div", "home-source-web-pane", { "aria-label": source.label });
    const header = el("div", "league-home-panel-header");
    const label = el("div", "league-home-panel-header__label");
    label.appendChild(el("span", "league-home-panel-header__dot", { "aria-hidden": "true" }));
    label.appendChild(document.createTextNode(source.label));
    header.appendChild(label);
    header.appendChild(el("button", "league-home-panel-header__focus", { type: "button", "aria-label": `Focus ${source.label}`, text: "⛶" }));
    pane.appendChild(header);
    const contain = el("div", "pane-content-contain");
    const host = el("div", "pane-embed-host");
    const fill = el("div", "pane-embed-fill pane-embed-unavailable", {
      text: "Electron webview unavailable — embedded source requires desktop guest surface.",
    });
    host.appendChild(fill);
    contain.appendChild(host);
    pane.appendChild(contain);
    row.appendChild(pane);
  }
}

function renderHomeLeagueChapters() {
  const stack = document.getElementById("home-source-cards-stack");
  if (!stack) return;
  for (const ch of HOME_LEAGUE_CHAPTERS) {
    const btn = el("button", "home-league-chapter-row", { type: "button", "aria-label": `Open ${ch.label}` });
    const inner = el("span", "home-league-chapter-row__inner");
    inner.appendChild(el("span", "league-home-panel-header__dot", { "aria-hidden": "true" }));
    inner.appendChild(document.createTextNode(ch.label));
    btn.appendChild(inner);
    stack.appendChild(btn);
  }
}

function renderActivityRailTabs() {
  const tabs = document.getElementById("activity-rail-tabs");
  if (!tabs) return;
  tabs.innerHTML = "";
  for (const tab of ACTIVITY_RAIL_TABS) {
    const btn = el("button", `activity-rail__tab ${tab.cls}${activityTab === tab.id ? " activity-rail__tab--active" : ""}`, {
      type: "button",
      "data-tab": tab.id,
      title: tab.label,
      text: tab.label,
      role: "tab",
      "aria-selected": activityTab === tab.id ? "true" : "false",
    });
    btn.addEventListener("click", () => {
      activityTab = tab.id;
      renderActivityRailTabs();
      updateActivityRailPanels();
    });
    tabs.appendChild(btn);
  }
}

function updateActivityRailPanels() {
  document.querySelectorAll("[data-activity-panel]").forEach((panel) => {
    const id = panel.getAttribute("data-activity-panel");
    const active = id === activityTab;
    panel.classList.toggle("activity-rail__panel--active", active);
    panel.hidden = !active;
  });
}

function buildCatchUpSubnav() {
  const nav = document.getElementById("home-catch-up-submenu");
  if (!nav) return;
  nav.innerHTML = "";
  for (const item of HOME_CATCH_UP_SUBMENU) {
    const btn = el("button", `workspace-subnav__btn${catchUpSubmenuId === item.id ? " workspace-subnav__btn--active" : ""}${item.id === "breaking" && catchUpSubmenuId === "breaking" ? " workspace-subnav__btn--breaking" : ""}`, {
      type: "button",
      "data-catch-up-id": item.id,
      text: item.label,
    });
    btn.addEventListener("click", () => {
      catchUpSubmenuId = item.id;
      syncOperationalUI();
    });
    nav.appendChild(btn);
  }
}

function buildLiveSubnav() {
  const nav = document.getElementById("home-live-submenu");
  if (!nav) return;
  nav.innerHTML = "";
  for (const item of HOME_LIVE_SUBMENU) {
    const btn = el("button", `workspace-subnav__btn${liveSubmenuId === item.id ? " workspace-subnav__btn--active" : ""}`, {
      type: "button",
      "data-live-id": item.id,
      text: item.label,
    });
    btn.addEventListener("click", () => {
      liveSubmenuId = item.id;
      syncOperationalUI();
    });
    nav.appendChild(btn);
  }
}

function syncOperationalUI() {
  const catchUpNav = document.getElementById("home-catch-up-submenu");
  const liveNav = document.getElementById("home-live-submenu");
  if (catchUpNav) catchUpNav.hidden = operationalMode !== "CATCH_UP";
  if (liveNav) liveNav.hidden = operationalMode !== "LIVE";

  buildCatchUpSubnav();
  buildLiveSubnav();

  const showLiveTrack = operationalMode === "LIVE" && liveSubmenuId === "livetrack";
  const showSportscape = operationalMode === "CATCH_UP" && catchUpSubmenuId === "sportscape";
  const showHeadlines =
    (operationalMode !== "CATCH_UP" || catchUpSubmenuId === "headlines") && !showLiveTrack;
  const showBreaking = operationalMode === "CATCH_UP" && catchUpSubmenuId === "breaking";

  setSurfaceActive("surface-livetrack", showLiveTrack);
  setSurfaceActive("surface-source-cards", showHeadlines);
  setSurfaceActive("surface-sportscape", showSportscape);
  setSurfaceActive("surface-breaking", showBreaking);

  document.querySelectorAll(".mode-selector__btn").forEach((btn) => {
    const mode = btn.getAttribute("data-mode");
    btn.classList.toggle("mode-selector__btn--active", mode === operationalMode);
    btn.setAttribute("aria-pressed", mode === operationalMode ? "true" : "false");
  });

  syncOperationalMode(operationalMode);
}

function setSurfaceActive(id, active) {
  const surface = document.getElementById(id);
  if (!surface) return;
  surface.classList.toggle("center-surface--active", active);
  surface.hidden = !active;
}

function initOperationalMode() {
  document.querySelectorAll(".mode-selector__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      operationalMode = btn.getAttribute("data-mode");
      syncOperationalUI();
    });
  });
  syncOperationalUI();
}

function initLiveTrackViewToggle() {
  document.querySelectorAll("[data-livetrack-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      liveTrackView = btn.getAttribute("data-livetrack-view");
      document.querySelectorAll("[data-livetrack-view]").forEach((b) => {
        b.classList.toggle("home-livetrack-surface__view-btn--active", b.getAttribute("data-livetrack-view") === liveTrackView);
      });
    });
  });
}

function initGamesSpine() {
  const root = document.getElementById("home-games-today-root");
  if (!root) return;
  mountGamesSpine(root);
}

function initDateTime() {
  const node = document.getElementById("global-app-bar-datetime");
  if (!node) return;
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const tick = () => {
    const now = new Date();
    const h24 = now.getHours();
    const min = String(now.getMinutes()).padStart(2, "0");
    const ampm = h24 >= 12 ? "PM" : "AM";
    const h12 = h24 % 12 || 12;
    node.textContent = `${days[now.getDay()]} ${months[now.getMonth()]} ${now.getDate()} · ${h12}:${min} ${ampm}`;
  };
  tick();
  setInterval(tick, 1000);
}

function init() {
  renderAppLeftNav();
  renderGeneralSportsSourcePanes();
  renderHomeLeagueChapters();
  renderActivityRailTabs();
  updateActivityRailPanels();
  initOperationalMode();
  initLiveTrackViewToggle();
  initGamesSpine();
  initDateTime();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
