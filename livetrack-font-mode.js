/**
 * LiveTrack feed font mode — evaluation toggle (feed panel scope only).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "livetrackFontMode";
  var MODES = { jetbrains: true, ibm: true, sharetech: true };
  var DEFAULT_MODE = "ibm";

  function normalizeMode(mode) {
    return MODES[mode] ? mode : DEFAULT_MODE;
  }

  function applyFontMode(panel, mode, buttons) {
    var resolved = normalizeMode(mode);
    panel.classList.remove("font-mode-jetbrains", "font-mode-ibm", "font-mode-sharetech");
    panel.classList.add("font-mode-" + resolved);

    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        var isActive = btn.getAttribute("data-font-mode") === resolved;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      }
    }

    try {
      localStorage.setItem(STORAGE_KEY, resolved);
    } catch (_err) {
      /* ignore storage failures */
    }

    return resolved;
  }

  function init() {
    var panel = document.getElementById("livetrack-social-feed");
    if (!panel) return;

    var buttons = panel.querySelectorAll("[data-font-mode]");
    var saved = null;
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (_err) {
      saved = null;
    }

    applyFontMode(panel, saved || DEFAULT_MODE, buttons);

    panel.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-font-mode]");
      if (!btn || !panel.contains(btn)) return;
      event.preventDefault();
      applyFontMode(panel, btn.getAttribute("data-font-mode"), buttons);
    });
  }

  window.LiveTrackFontMode = {
    apply: function (mode) {
      var panel = document.getElementById("livetrack-social-feed");
      if (!panel) return DEFAULT_MODE;
      var buttons = panel.querySelectorAll("[data-font-mode]");
      return applyFontMode(panel, mode, buttons);
    },
    get: function () {
      try {
        return normalizeMode(localStorage.getItem(STORAGE_KEY) || DEFAULT_MODE);
      } catch (_err) {
        return DEFAULT_MODE;
      }
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
