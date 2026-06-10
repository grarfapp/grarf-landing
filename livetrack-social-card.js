/**
 * LiveTrack — full GRARF-style social feed from normalized SocialPost data.
 */
(function () {
  "use strict";

  var LOG_PREFIX = "[LiveTrack Feed]";
  var POLL_MS = 20 * 1000;
  var RELATIVE_MS = 30 * 1000;
  var MAX_POSTS = 36;

  var ingest = window.LiveTrackIngest || window.LiveTrackSocialIngest;
  var reveal = null;

  var state = {
    items: [],
    lastFetchAt: null,
    loading: true,
    error: null,
    fetchInFlight: false,
    pollTimer: null,
    relativeTimer: null,
    pollCount: 0,
    initialLoadComplete: false,
    liveModeReady: false,
    clicksBound: false,
    imageErrorsBound: false,
    scrollBound: false,
  };

  var els = {};

  function formatSocialTimestamp(iso) {
    var ms = Date.parse(iso);
    if (Number.isNaN(ms)) return "";
    var diffSec = Math.max(0, Math.round((Date.now() - ms) / 1000));
    if (diffSec < 60) return diffSec + "s";
    var diffMin = Math.round(diffSec / 60);
    if (diffMin < 60) return diffMin + "m";
    var h = Math.floor(diffMin / 60);
    if (h < 48) return h + "h";
    return Math.floor(h / 24) + "d";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function isHeadline(item) {
    return ingest && typeof ingest.isHeadlinePost === "function"
      ? ingest.isHeadlinePost(item)
      : item && item.type === "headline";
  }

  function formatSourceTag(label) {
    return "[" + String(label || "").trim() + "]";
  }

  function buildMediaInner(url, href, isVideo) {
    var playOverlay = isVideo
      ? '<span class="feed-row-media-play" aria-hidden="true">' +
        '<span class="feed-row-media-play-icon">▶</span></span>'
      : "";

    return (
      '<div class="feed-row-media-shell">' +
      '<button type="button" class="feed-row-media-hit" data-href="' +
      escapeHtml(href) +
      '" aria-label="Open media">' +
      '<img src="' +
      escapeHtml(url) +
      '" alt="" loading="lazy">' +
      playOverlay +
      "</button></div>"
    );
  }

  function buildSocialShell(post) {
    var relativeTime = formatSocialTimestamp(post.timestamp);
    var li = document.createElement("li");
    li.className = "social-feed-item feed-item-revealing";
    li.setAttribute("data-feed-item-id", post.id);

    li.innerHTML =
      '<article class="feed-row feed-row--social" data-post-id="' +
      escapeHtml(post.id) +
      '">' +
      '<button type="button" class="feed-row-hit" data-href="' +
      escapeHtml(post.postUrl) +
      '" aria-label="Open post on X">' +
      '<div class="feed-row-source-line">' +
      '<span class="feed-row-tag feed-row-tag--social">' +
      escapeHtml(formatSourceTag("X")) +
      "</span>" +
      '<span class="feed-row-label">' +
      escapeHtml(post.author || post.handle) +
      "</span>" +
      "</div>" +
      '<p class="feed-row-copy feed-row-copy--quoted">' +
      '"<span data-reveal-text></span><span class="livetrack-reveal-cursor" data-reveal-cursor aria-hidden="true">█</span>"' +
      "</p>" +
      '<time class="feed-row-time" datetime="' +
      escapeHtml(post.timestamp) +
      '">' +
      escapeHtml(relativeTime) +
      "</time>" +
      "</button>" +
      (post.mediaUrls && post.mediaUrls.length
        ? '<div class="feed-row-media feed-item-media-pending" data-reveal-media aria-hidden="true">' +
          buildMediaInner(post.mediaUrls[0], post.postUrl, ingest.isVideoMediaUrl(post.mediaUrls[0])) +
          "</div>"
        : "") +
      "</article>";

    return {
      li: li,
      textEl: li.querySelector("[data-reveal-text]"),
      mediaEl: li.querySelector("[data-reveal-media]"),
      cursorEl: li.querySelector("[data-reveal-cursor]"),
      fullText: post.text || "",
    };
  }

  function buildHeadlineShell(item) {
    var sourceLabel = String(item.source || "NewsNow");
    var timeHtml = "";
    if (item.timestamp) {
      var relativeTime = formatSocialTimestamp(item.timestamp);
      timeHtml =
        '<time class="feed-row-time" datetime="' +
        escapeHtml(item.timestamp) +
        '">' +
        escapeHtml(relativeTime) +
        "</time>";
    }

    var li = document.createElement("li");
    li.className = "social-feed-item feed-item-revealing";
    li.setAttribute("data-feed-item-id", item.id);

    li.innerHTML =
      '<article class="feed-row feed-row--headline" data-item-id="' +
      escapeHtml(item.id) +
      '">' +
      '<button type="button" class="feed-row-hit" data-href="' +
      escapeHtml(item.articleUrl) +
      '" aria-label="Open headline">' +
      '<div class="feed-row-source-line">' +
      '<span class="feed-row-tag feed-row-tag--headline">' +
      escapeHtml(formatSourceTag(sourceLabel)) +
      "</span>" +
      "</div>" +
      '<p class="feed-row-copy">' +
      '<span data-reveal-text></span><span class="livetrack-reveal-cursor" data-reveal-cursor aria-hidden="true">█</span>' +
      "</p>" +
      timeHtml +
      "</button>" +
      (item.imageUrl
        ? '<div class="feed-row-media feed-item-media-pending" data-reveal-media aria-hidden="true">' +
          buildMediaInner(item.imageUrl, item.articleUrl, false) +
          "</div>"
        : "") +
      "</article>";

    return {
      li: li,
      textEl: li.querySelector("[data-reveal-text]"),
      mediaEl: li.querySelector("[data-reveal-media]"),
      cursorEl: li.querySelector("[data-reveal-cursor]"),
      fullText: item.title || "",
    };
  }

  function buildRevealShell(item) {
    if (isHeadline(item)) return buildHeadlineShell(item);
    return buildSocialShell(item);
  }

  function updateRevealItemMeta(node, item) {
    if (!node) return;
    var timeEl = node.querySelector(".feed-row-time[datetime]");
    if (timeEl && item.timestamp) {
      timeEl.textContent = formatSocialTimestamp(item.timestamp);
    }
  }

  function terminalFeedOrder(items) {
    // Ingest returns oldest → newest; index 0 = top of feed, last = bottom (newest).
    return items.slice();
  }

  function updateNewItemsIndicator(count) {
    if (!els.newItems) return;
    if (count > 0) {
      els.newItems.hidden = false;
      els.newItems.classList.add("is-visible");
      els.newItems.textContent = count + " NEW ITEMS ↓";
    } else {
      els.newItems.hidden = true;
      els.newItems.classList.remove("is-visible");
      els.newItems.textContent = "NEW ITEMS ↓";
    }
  }

  function bindScrollFollow() {
    if (state.scrollBound || !els.scroll) return;
    els.scroll.addEventListener(
      "scroll",
      function () {
        if (reveal) reveal.handleUserScroll();
      },
      { passive: true }
    );
    state.scrollBound = true;
  }

  function onLiveModeReady() {
    if (state.liveModeReady) return;
    state.liveModeReady = true;
    console.log(LOG_PREFIX, "Live mode ready — polling enabled");
    startPollTimer();
  }

  function initRevealController() {
    if (!window.LiveTrackFeedReveal || reveal) return;
    reveal = window.LiveTrackFeedReveal.create({
      listEl: els.list,
      scrollEl: els.scroll,
      getItemId: function (item) {
        return item && item.id;
      },
      buildShell: buildRevealShell,
      onPendingNewChange: updateNewItemsIndicator,
      onColdStartReady: function (info) {
        console.log(LOG_PREFIX, "Cold start replay", info);
      },
      onLiveModeReady: onLiveModeReady,
    });
    bindScrollFollow();
  }

  function renderLoadingState() {
    return (
      '<div class="social-feed-state">' +
      '<p class="social-feed-state-title">LOADING SIGNALS…</p>' +
      '<p class="social-feed-state-copy">Fetching wire…</p>' +
      "</div>"
    );
  }

  function renderEmptyState() {
    return (
      '<div class="social-feed-state">' +
      '<p class="social-feed-state-title">FEED UNAVAILABLE</p>' +
      '<p class="social-feed-state-copy">No items cached yet.</p>' +
      '<button type="button" class="social-feed-retry" data-action="refresh">RETRY</button>' +
      "</div>"
    );
  }

  function renderErrorState(message) {
    return (
      '<div class="social-feed-state">' +
      '<p class="social-feed-state-title">FEED UNAVAILABLE</p>' +
      '<p class="social-feed-state-copy">' +
      escapeHtml(message || "Could not fetch feed. Try refresh.") +
      "</p>" +
      '<button type="button" class="social-feed-retry" data-action="refresh">RETRY</button>' +
      "</div>"
    );
  }

  function updateHeaderMeta() {
    if (!els.sync) return;

    var parts = [];
    if (state.items.length) {
      parts.push(state.items.length + " item" + (state.items.length === 1 ? "" : "s"));
    }
    if (state.lastFetchAt) {
      parts.push("sync " + formatSocialTimestamp(state.lastFetchAt) + " ago");
    }

    els.sync.textContent = parts.length ? parts.join(" · ") : "";
  }

  function updateRefreshButton() {
    if (!els.refresh) return;
    els.refresh.disabled = state.loading;
    els.refresh.textContent = state.loading ? "…" : "REFRESH";
  }

  function updateTerminalStatus() {
    var status = document.querySelector(".terminal-status");
    if (!status) return;

    var feedSpan = status.querySelector("[data-livetrack-feed]");
    var latencySpan = status.querySelector("[data-livetrack-latency]");
    if (!feedSpan || !latencySpan) return;

    if (state.error && !state.items.length) {
      feedSpan.innerHTML = "<strong>Feed</strong> Error";
      latencySpan.innerHTML = "<strong>Latency</strong> —";
      return;
    }

    if (state.loading && !state.items.length) {
      feedSpan.innerHTML = "<strong>Feed</strong> Loading";
      latencySpan.innerHTML = "<strong>Latency</strong> —";
      return;
    }

    feedSpan.innerHTML = "<strong>Feed</strong> Live";
    latencySpan.innerHTML = "<strong>Latency</strong> ~20s";
  }

  function updateRelativeTimestamps() {
    if (!els.list) return;
    var times = els.list.querySelectorAll(".feed-row-time[datetime]");
    for (var i = 0; i < times.length; i++) {
      var node = times[i];
      var iso = node.getAttribute("datetime");
      if (iso) node.textContent = formatSocialTimestamp(iso);
    }
    updateHeaderMeta();
  }

  function syncFeedIncremental(options) {
    options = options || {};
    if (!els.list || !state.items.length) return null;

    initRevealController();
    if (!reveal) return null;

    var syncOptions = {
      preserveScroll: true,
    };

    if (options.reason === "poll") {
      syncOptions.poll = true;
      syncOptions.pollLog = { pollCount: state.pollCount };
    }

    return reveal.syncItems(
      terminalFeedOrder(state.items),
      {
        updateItemMeta: updateRevealItemMeta,
      },
      syncOptions
    );
  }

  function paintFeedContent() {
    if (!els.scroll || !els.list) return;

    if (state.loading && !state.items.length) {
      if (reveal) reveal.reset();
      els.list.innerHTML = renderLoadingState();
      els.list.classList.add("social-feed-list--state");
    } else if (state.error && !state.items.length) {
      if (reveal) reveal.reset();
      els.list.innerHTML = renderErrorState(state.error);
      els.list.classList.add("social-feed-list--state");
    } else if (!state.items.length) {
      if (reveal) reveal.reset();
      els.list.innerHTML = renderEmptyState();
      els.list.classList.add("social-feed-list--state");
    } else {
      els.list.classList.remove("social-feed-list--state");
      if (els.list.querySelector(".social-feed-state")) {
        els.list.innerHTML = "";
      }
      initRevealController();
      if (reveal) {
        reveal.syncItems(terminalFeedOrder(state.items), {
          updateItemMeta: updateRevealItemMeta,
        });
      }
    }

    updateHeaderMeta();
    updateRefreshButton();
    updateTerminalStatus();
  }

  function openPost(url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }

  function bindInteractions() {
    if (!els.panel) return;

    if (!state.clicksBound) {
      els.panel.addEventListener("click", function (event) {
        var newItemsBtn = event.target.closest("#livetrack-new-items");
        if (newItemsBtn) {
          event.preventDefault();
          if (reveal) reveal.scrollToLatest();
          return;
        }

        var refreshAction = event.target.closest("[data-action='refresh']");
        if (refreshAction) {
          event.preventDefault();
          loadFeed({ reason: "manual" });
          return;
        }

        var hit = event.target.closest("[data-href]");
        if (!hit || !els.panel.contains(hit)) return;
        event.preventDefault();
        openPost(hit.getAttribute("data-href"));
      });

      if (els.refresh) {
        els.refresh.addEventListener("click", function () {
          loadFeed({ reason: "manual" });
        });
      }

      state.clicksBound = true;
    }

    if (!state.imageErrorsBound && els.list) {
      els.list.addEventListener(
        "error",
        function (event) {
          var img = event.target;
          if (!img || img.tagName !== "IMG") return;
          var tile = img.closest(".feed-row-media-hit");
          if (!tile) return;
          var media = tile.closest(".feed-row-media");
          tile.remove();
          if (media && !media.querySelector(".feed-row-media-hit")) {
            media.remove();
          }
        },
        true
      );
      state.imageErrorsBound = true;
    }
  }

  function loadFeed(options) {
    options = options || {};
    var reason = options.reason || "poll";
    var isInitial = reason === "initial";
    var isPoll = reason === "poll";
    var incremental = !isInitial && state.items.length > 0;

    if (state.fetchInFlight) return Promise.resolve();
    if (!ingest || typeof ingest.fetchUnifiedFeed !== "function") {
      state.loading = false;
      state.error = "Feed ingest unavailable";
      paintFeedContent();
      return Promise.resolve();
    }

    if (isPoll && (!state.initialLoadComplete || !reveal || !reveal.isLiveModeReady())) {
      return Promise.resolve();
    }

    state.fetchInFlight = true;
    if (!isPoll) {
      state.loading = true;
      updateRefreshButton();
      if (!state.items.length) paintFeedContent();
    }

    return ingest
      .fetchUnifiedFeed()
      .then(function (items) {
        state.items = items.slice(0, MAX_POSTS);
        state.lastFetchAt = new Date().toISOString();
        state.error = null;
        state.loading = false;

        if (isInitial) {
          state.initialLoadComplete = true;
          ingest.logIngestSummary(state.items);
          var socialCount = state.items.filter(function (i) {
            return !isHeadline(i);
          }).length;
          var headlineCount = state.items.filter(isHeadline).length;
          console.log(LOG_PREFIX, "Initial load", {
            count: state.items.length,
            social: socialCount,
            headlines: headlineCount,
          });
          paintFeedContent();
          return;
        }

        if (incremental) {
          if (isPoll) state.pollCount += 1;
          var syncResult = syncFeedIncremental({ reason: reason });
          if (isPoll && syncResult) {
            console.log(LOG_PREFIX, "Poll", {
              pollCount: state.pollCount,
              itemsFetched: syncResult.itemsFetched,
              newDetected: syncResult.newDetected,
              queued: syncResult.queued,
              revealed: syncResult.revealed,
              knownIds: syncResult.knownIds,
            });
          } else if (reason === "manual" && syncResult) {
            console.log(LOG_PREFIX, "Manual refresh (incremental)", {
              itemsFetched: syncResult.itemsFetched,
              newDetected: syncResult.newDetected,
              queued: syncResult.queued,
              knownIds: syncResult.knownIds,
            });
          }
          updateHeaderMeta();
          updateTerminalStatus();
          return;
        }

        paintFeedContent();
      })
      .catch(function (err) {
        state.loading = false;
        state.error = err && err.message ? err.message : "Failed to load feed";
        console.error(LOG_PREFIX, "Load failed", err);

        if (!state.items.length) {
          paintFeedContent();
        } else {
          updateHeaderMeta();
          updateRefreshButton();
          updateTerminalStatus();
        }
      })
      .finally(function () {
        state.fetchInFlight = false;
        updateRefreshButton();
      });
  }

  function startPollTimer() {
    if (state.pollTimer) window.clearInterval(state.pollTimer);
    state.pollTimer = window.setInterval(function () {
      loadFeed({ reason: "poll" });
    }, POLL_MS);
  }

  function startRelativeTimer() {
    if (state.relativeTimer) window.clearInterval(state.relativeTimer);
    state.relativeTimer = window.setInterval(updateRelativeTimestamps, RELATIVE_MS);
  }

  function cacheElements() {
    els.panel = document.getElementById("livetrack-social-feed");
    els.scroll = document.getElementById("livetrack-social-feed-scroll");
    els.list = document.getElementById("livetrack-social-feed-list");
    els.sync = document.getElementById("livetrack-social-sync");
    els.refresh = document.getElementById("livetrack-social-refresh");
    els.newItems = document.getElementById("livetrack-new-items");
  }

  function init() {
    cacheElements();

    if (!els.panel || !els.scroll || !els.list) {
      console.error(LOG_PREFIX, "Feed mount elements missing");
      return;
    }

    bindInteractions();
    loadFeed({ reason: "initial" }).finally(function () {
      startRelativeTimer();
    });

    window.addEventListener("beforeunload", function () {
      if (state.pollTimer) window.clearInterval(state.pollTimer);
      if (state.relativeTimer) window.clearInterval(state.relativeTimer);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
