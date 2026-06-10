/**
 * LiveTrack feed font size — evaluation toggle (feed panel scope only).
 */
(function () {
  "use strict";

  var STORAGE_KEY = "livetrackFontSize";
  var DEFAULT_SIZE = 16;
  var VALID_SIZES = [12, 16, 20, 24, 28, 32, 36, 40];
  var SIZE_LOOKUP = Object.create(null);

  var i;
  for (i = 0; i < VALID_SIZES.length; i++) {
    SIZE_LOOKUP[String(VALID_SIZES[i])] = true;
  }

  function normalizeSize(size) {
    var n = parseInt(String(size || ""), 10);
    return SIZE_LOOKUP[String(n)] ? n : DEFAULT_SIZE;
  }

  function readUrlSize() {
    try {
      var params = new URLSearchParams(window.location.search);
      var size = params.get("size");
      if (size == null || size === "") return null;
      return normalizeSize(size);
    } catch (_err) {
      return null;
    }
  }

  function applyFontSize(panel, size, buttons, persist) {
    var base = normalizeSize(size);
    panel.style.setProperty("--livetrack-font-size", base + "px");
    panel.style.setProperty("--livetrack-font-size-meta", base - 2 + "px");
    panel.style.setProperty("--livetrack-font-size-sub", base - 4 + "px");

    if (buttons) {
      for (i = 0; i < buttons.length; i++) {
        var btn = buttons[i];
        var isActive = parseInt(btn.getAttribute("data-font-size"), 10) === base;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      }
    }

    if (persist !== false) {
      try {
        localStorage.setItem(STORAGE_KEY, String(base));
      } catch (_err) {
        /* ignore storage failures */
      }
    }

    return base;
  }

  function init() {
    var panel = document.getElementById("livetrack-social-feed");
    if (!panel) return;

    var buttons = panel.querySelectorAll("[data-font-size]");
    var urlSize = readUrlSize();
    var saved = null;

    if (urlSize == null) {
      try {
        saved = localStorage.getItem(STORAGE_KEY);
      } catch (_err) {
        saved = null;
      }
    }

    var initial = urlSize != null ? urlSize : saved || DEFAULT_SIZE;
    applyFontSize(panel, initial, buttons, urlSize == null);

    panel.addEventListener("click", function (event) {
      var btn = event.target.closest("[data-font-size]");
      if (!btn || !panel.contains(btn)) return;
      event.preventDefault();
      applyFontSize(panel, btn.getAttribute("data-font-size"), buttons, true);
    });
  }

  window.LiveTrackFontSize = {
    apply: function (size, persist) {
      var panel = document.getElementById("livetrack-social-feed");
      if (!panel) return DEFAULT_SIZE;
      var buttons = panel.querySelectorAll("[data-font-size]");
      return applyFontSize(panel, size, buttons, persist !== false);
    },
    get: function () {
      var urlSize = readUrlSize();
      if (urlSize != null) return urlSize;
      try {
        return normalizeSize(localStorage.getItem(STORAGE_KEY) || DEFAULT_SIZE);
      } catch (_err) {
        return DEFAULT_SIZE;
      }
    },
    VALID_SIZES: VALID_SIZES.slice(),
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
