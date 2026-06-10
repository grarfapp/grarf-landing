/**
 * LiveTrack feed font colors — per-role evaluation toggles (feed panel scope only).
 * Roles map to Bloomberg + terminal reference palettes.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "livetrackFontColors";
  var PRESETS = ["default", "bloomberg", "terminal"];
  var ROLES = ["body", "source", "meta", "author", "accent", "cursor"];

  var ROLE_LABELS = {
    body: "BODY",
    source: "SRC",
    meta: "META",
    author: "AUTH",
    accent: "ACCNT",
    cursor: "CRSR",
  };

  var PRESET_SUFFIX = {
    default: "DEF",
    bloomberg: "BB",
    terminal: "TERM",
  };

  var ROLE_VALUES = {
    body: {
      default: "#b8d0d0",
      bloomberg: "#ffb000",
      terminal: "#00ff00",
    },
    source: {
      default: "#fbbf24",
      bloomberg: "#ffff00",
      terminal: "#5cdbff",
    },
    meta: {
      default: "#4a6363",
      bloomberg: "#cc8800",
      terminal: "#c678ff",
    },
    author: {
      default: "#e8f4f4",
      bloomberg: "#ffffff",
      terminal: "#ff9980",
    },
    accent: {
      default: "#56f7ff",
      bloomberg: "#ffffff",
      terminal: "#ff8800",
    },
    cursor: {
      default: "#56f7ff",
      bloomberg: "#ffb000",
      terminal: "#ffffff",
    },
  };

  var CSS_VARS = {
    body: "--livetrack-color-body",
    source: "--livetrack-color-source",
    meta: "--livetrack-color-meta",
    author: "--livetrack-color-author",
    accent: "--livetrack-color-accent",
    cursor: "--livetrack-color-cursor",
  };

  var DEFAULT_STATE = {
    body: "default",
    source: "default",
    meta: "default",
    author: "default",
    accent: "default",
    cursor: "default",
  };

  function normalizePreset(preset) {
    for (var i = 0; i < PRESETS.length; i++) {
      if (PRESETS[i] === preset) return preset;
    }
    return "default";
  }

  function normalizeState(raw) {
    var state = {};
    var role;
    for (var i = 0; i < ROLES.length; i++) {
      role = ROLES[i];
      state[role] = normalizePreset(raw && raw[role]);
    }
    return state;
  }

  function nextPreset(current) {
    var idx = PRESETS.indexOf(normalizePreset(current));
    return PRESETS[(idx + 1) % PRESETS.length];
  }

  function resolveColor(role, preset) {
    var values = ROLE_VALUES[role];
    if (!values) return "#ffffff";
    return values[normalizePreset(preset)] || values.default;
  }

  function applyColorState(panel, state, buttons) {
    var resolved = normalizeState(state);
    var role;
    var i;

    for (i = 0; i < ROLES.length; i++) {
      role = ROLES[i];
      panel.style.setProperty(CSS_VARS[role], resolveColor(role, resolved[role]));
    }

    if (buttons) {
      for (i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        role = btn.getAttribute("data-color-role");
        if (!role || !ROLE_VALUES[role]) continue;
        var preset = resolved[role];
        var label = ROLE_LABELS[role] || role.toUpperCase();
        btn.textContent = label + "·" + PRESET_SUFFIX[preset];
        btn.style.setProperty("--color-swatch", resolveColor(role, preset));
        btn.classList.toggle("is-active", preset !== "default");
        btn.setAttribute("aria-pressed", preset !== "default" ? "true" : "false");
        btn.title =
          label +
          " — " +
          preset +
          " (" +
          resolveColor(role, preset) +
          ")";
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
    } catch (_err) {
      /* ignore storage failures */
    }

    return resolved;
  }

  function readSavedState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return normalizeState(JSON.parse(raw));
    } catch (_err) {
      return null;
    }
  }

  function init() {
    var panel = document.getElementById("livetrack-social-feed");
    if (!panel) return;

    var buttons = panel.querySelectorAll("[data-color-role]");
    var initial = readSavedState() || DEFAULT_STATE;
    applyColorState(panel, initial, buttons);

    panel.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-color-role]");
      if (!btn || !panel.contains(btn)) return;
      event.preventDefault();

      var role = btn.getAttribute("data-color-role");
      if (!role || !ROLE_VALUES[role]) return;

      var current = readSavedState() || DEFAULT_STATE;
      current = normalizeState(current);
      current[role] = nextPreset(current[role]);
      applyColorState(panel, current, buttons);
    });
  }

  window.LiveTrackFontColor = {
    apply: function (state) {
      var panel = document.getElementById("livetrack-social-feed");
      if (!panel) return normalizeState(DEFAULT_STATE);
      var buttons = panel.querySelectorAll("[data-color-role]");
      return applyColorState(panel, state, buttons);
    },
    get: function () {
      return readSavedState() || normalizeState(DEFAULT_STATE);
    },
    resolveColor: resolveColor,
    ROLES: ROLES.slice(),
    PRESETS: PRESETS.slice(),
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
