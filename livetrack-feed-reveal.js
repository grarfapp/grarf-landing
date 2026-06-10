/**
 * LiveTrack feed reveal — sequential typing queue (GRARF desktop Combined parity).
 * Terminal chronology: oldest at top, newest appended at bottom.
 * Cold start: snapshot bulk render + scheduled holdback replay (once per page load).
 * Live mode: initial scroll to bottom + auto-follow, then 20s poll append-only inserts.
 */
(function () {
  "use strict";

  var TYPE_INTERVAL_MS = 50;
  var REVEAL_PAUSE_MS = 700;
  var FIRST_ITEM_DELAY_MS = 400;
  var MEDIA_FADE_MS = 400;
  var DEFAULT_SCROLL_NEAR_BOTTOM_PX = 150;
  var INITIAL_SCROLL_SETTLE_MS = 150;
  var SCROLL_LOG_PREFIX = "[LiveTrack]";
  var HOLD_BACK_MIN = 1;
  var HOLD_BACK_MAX = 4;
  var REPLAY_WINDOW_MIN_MS = 20000;
  var REPLAY_WINDOW_MAX_MS = 60000;

  function randomInt(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  function buildStrictlyIncreasingSchedule(count, windowMs) {
    if (count <= 0) return [];
    if (count === 1) {
      return [randomInt(Math.min(4000, windowMs), windowMs)];
    }

    var points = [];
    var i;
    for (i = 0; i < count; i++) {
      points.push(Math.random());
    }
    points.sort(function (a, b) {
      return a - b;
    });

    var minSpacing = Math.max(800, Math.floor(windowMs / (count * 3)));
    var times = [];
    var prev = 0;

    for (i = 0; i < count; i++) {
      var t = Math.round(points[i] * windowMs);
      if (t <= prev) t = prev + minSpacing;
      if (t > windowMs) t = windowMs - (count - 1 - i) * minSpacing;
      if (t <= prev) t = prev + minSpacing;
      times.push(Math.min(t, windowMs));
      prev = times[times.length - 1];
    }

    return times;
  }

  function FeedRevealController(options) {
    this.listEl = options.listEl;
    this.scrollEl = options.scrollEl;
    this.buildShell = options.buildShell;
    this.getItemId = options.getItemId;
    this.onStreamIdle = options.onStreamIdle || null;
    this.onPendingNewChange = options.onPendingNewChange || null;
    this.onColdStartReady = options.onColdStartReady || null;
    this.onLiveModeReady = options.onLiveModeReady || null;
    this.scrollNearBottomPx = options.scrollNearBottomPx || DEFAULT_SCROLL_NEAR_BOTTOM_PX;

    this.itemsById = Object.create(null);
    this.queue = [];
    this.completed = Object.create(null);
    this.inDom = Object.create(null);
    this.knownIds = new Set();
    this.pendingNew = 0;
    this.pollCycleLog = null;
    this.autoFollowEnabled = false;
    this.initialScrollDone = false;
    this.wasNearBottom = true;
    this.active = null;
    this.pauseTimer = 0;
    this.typeTimer = 0;
    this.firstItem = true;
    this.idleCursorEl = null;

    this.coldStartComplete = false;
    this.coldStartReplayActive = false;
    this.coldStartTimers = [];
    this.scheduledRevealIds = [];
    this.coldStartHeldTotal = 0;
    this.coldStartRevealedCount = 0;
  }

  FeedRevealController.prototype.reset = function () {
    this.cancelActive();
    this.clearColdStartTimers();
    this.queue = [];
    this.completed = Object.create(null);
    this.inDom = Object.create(null);
    this.knownIds = new Set();
    this.itemsById = Object.create(null);
    this.pollCycleLog = null;
    this.autoFollowEnabled = false;
    this.initialScrollDone = false;
    this.wasNearBottom = true;
    this.pendingNew = 0;
    this.firstItem = true;
    this.coldStartComplete = false;
    this.coldStartReplayActive = false;
    this.scheduledRevealIds = [];
    this.coldStartHeldTotal = 0;
    this.coldStartRevealedCount = 0;
    this.notifyPendingNew();
    if (this.listEl) this.listEl.innerHTML = "";
    this.hideIdleCursor();
  };

  FeedRevealController.prototype.clearColdStartTimers = function () {
    for (var i = 0; i < this.coldStartTimers.length; i++) {
      window.clearTimeout(this.coldStartTimers[i]);
    }
    this.coldStartTimers = [];
  };

  FeedRevealController.prototype.cancelActive = function () {
    if (this.pauseTimer) {
      window.clearTimeout(this.pauseTimer);
      this.pauseTimer = 0;
    }
    if (this.typeTimer) {
      window.clearTimeout(this.typeTimer);
      this.typeTimer = 0;
    }
    this.active = null;
  };

  FeedRevealController.prototype.getPendingNew = function () {
    return this.pendingNew;
  };

  FeedRevealController.prototype.getKnownIds = function () {
    return this.knownIds;
  };

  FeedRevealController.prototype.isLiveModeReady = function () {
    return this.coldStartComplete && this.initialScrollDone;
  };

  FeedRevealController.prototype.flushPollCycleLog = function () {
    if (!this.pollCycleLog) return;
    if (this.queue.length || this.active) return;
    console.log("[LiveTrack Feed]", "Poll cycle complete", this.pollCycleLog);
    this.pollCycleLog = null;
  };

  FeedRevealController.prototype.clearPendingNew = function () {
    if (!this.pendingNew) return;
    this.pendingNew = 0;
    this.notifyPendingNew();
  };

  FeedRevealController.prototype.notifyPendingNew = function () {
    if (this.onPendingNewChange) {
      this.onPendingNewChange(this.pendingNew);
    }
  };

  FeedRevealController.prototype.isNearBottom = function () {
    var el = this.scrollEl;
    if (!el) return true;
    var distanceFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight;
    return distanceFromBottom < this.scrollNearBottomPx;
  };

  FeedRevealController.prototype.shouldAutoScroll = function () {
    if (this.coldStartReplayActive && !this.initialScrollDone) {
      return this.isNearBottom();
    }
    return this.autoFollowEnabled && this.isNearBottom();
  };

  FeedRevealController.prototype.scrollToBottom = function (behavior) {
    var el = this.scrollEl;
    if (!el) return;
    if (behavior === "instant") {
      el.scrollTop = el.scrollHeight;
      return;
    }
    el.scrollTo({ top: el.scrollHeight, behavior: behavior || "smooth" });
  };

  FeedRevealController.prototype.scrollToBottomWhenReady = function (callback) {
    var self = this;
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        self.waitForListLayoutSettle(function () {
          self.scrollToBottom("instant");
          if (callback) callback();
        });
      });
    });
  };

  FeedRevealController.prototype.waitForListLayoutSettle = function (callback) {
    var listEl = this.listEl;
    if (!listEl) {
      window.setTimeout(callback, INITIAL_SCROLL_SETTLE_MS);
      return;
    }

    var images = listEl.querySelectorAll("img");
    var pending = 0;
    var i;
    for (i = 0; i < images.length; i++) {
      if (!images[i].complete) pending += 1;
    }

    if (!pending) {
      window.setTimeout(callback, INITIAL_SCROLL_SETTLE_MS);
      return;
    }

    var done = false;
    var settled = 0;

    function finish() {
      if (done) return;
      done = true;
      window.setTimeout(callback, INITIAL_SCROLL_SETTLE_MS);
    }

    function onImageSettled() {
      settled += 1;
      if (settled >= pending) finish();
    }

    for (i = 0; i < images.length; i++) {
      if (images[i].complete) continue;
      images[i].addEventListener("load", onImageSettled, { once: true });
      images[i].addEventListener("error", onImageSettled, { once: true });
    }

    window.setTimeout(finish, 500);
  };

  FeedRevealController.prototype.enableAutoFollow = function () {
    if (this.autoFollowEnabled) return;
    this.autoFollowEnabled = true;
    console.log(SCROLL_LOG_PREFIX, "Auto-follow enabled");
  };

  FeedRevealController.prototype.performInitialScroll = function () {
    if (this.initialScrollDone) {
      this.processQueue();
      if (this.onLiveModeReady) this.onLiveModeReady();
      return;
    }
    var self = this;
    this.scrollToBottomWhenReady(function () {
      if (self.initialScrollDone) return;
      self.initialScrollDone = true;
      self.wasNearBottom = true;
      console.log(SCROLL_LOG_PREFIX, "Initial scroll to newest content");
      self.enableAutoFollow();
      self.processQueue();
      if (self.onLiveModeReady) self.onLiveModeReady();
    });
  };

  FeedRevealController.prototype.handleUserScroll = function () {
    var near = this.isNearBottom();

    if (!this.initialScrollDone) {
      this.wasNearBottom = near;
      return;
    }

    if (near && !this.wasNearBottom) {
      if (!this.autoFollowEnabled) {
        console.log(SCROLL_LOG_PREFIX, "Auto-follow resumed");
      }
      this.autoFollowEnabled = true;
      this.clearPendingNew();
    } else if (!near && this.wasNearBottom && this.autoFollowEnabled) {
      this.autoFollowEnabled = false;
      console.log(SCROLL_LOG_PREFIX, "Auto-follow paused (user scrolled away)");
    }

    this.wasNearBottom = near;
  };

  FeedRevealController.prototype.scrollToLatest = function () {
    var el = this.scrollEl;
    if (!el) return;
    this.clearPendingNew();
    var wasPaused = !this.autoFollowEnabled;
    this.autoFollowEnabled = true;
    this.wasNearBottom = true;
    if (wasPaused && this.initialScrollDone) {
      console.log(SCROLL_LOG_PREFIX, "Auto-follow resumed");
    }
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  };

  FeedRevealController.prototype.finalizeShellComplete = function (shell) {
    shell.textEl.textContent = shell.fullText || "";
    if (shell.cursorEl && shell.cursorEl.parentNode) {
      shell.cursorEl.parentNode.removeChild(shell.cursorEl);
    }
    shell.cursorEl = null;
    if (shell.mediaEl) {
      shell.mediaEl.removeAttribute("aria-hidden");
      shell.mediaEl.classList.remove("feed-item-media-pending");
      shell.mediaEl.classList.add("feed-item-media-reveal", "feed-item-media-reveal--visible");
    }
    shell.li.classList.remove("feed-item-revealing");
    shell.li.classList.add("feed-item-revealed");
  };

  FeedRevealController.prototype.mountCompleteItem = function (item) {
    var id = this.getItemId(item);
    if (!id || this.inDom[id] || this.completed[id]) return;

    var shell = this.buildShell(item);
    if (!shell || !shell.li) return;

    this.finalizeShellComplete(shell);
    this.mountShell(shell.li);
    this.inDom[id] = true;
    this.completed[id] = true;
    this.knownIds.add(id);
  };

  FeedRevealController.prototype.startColdStartReplay = function (items) {
    var self = this;
    var n = items.length;
    var holdback = n > 0 ? Math.min(randomInt(HOLD_BACK_MIN, HOLD_BACK_MAX), n) : 0;
    var snapshotItems = items.slice(0, n - holdback);
    var heldItems = items.slice(n - holdback);
    var replayWindowMs = randomInt(REPLAY_WINDOW_MIN_MS, REPLAY_WINDOW_MAX_MS);
    var scheduleMs = buildStrictlyIncreasingSchedule(heldItems.length, replayWindowMs);

    this.coldStartReplayActive = true;
    this.coldStartHeldTotal = heldItems.length;
    this.coldStartRevealedCount = 0;

    for (var i = 0; i < items.length; i++) {
      var id = this.getItemId(items[i]);
      if (id) {
        this.itemsById[id] = items[i];
        this.knownIds.add(id);
      }
    }

    for (i = 0; i < snapshotItems.length; i++) {
      this.mountCompleteItem(snapshotItems[i]);
    }

    if (snapshotItems.length > 0) {
      this.scrollToBottomWhenReady(function () {
        self.wasNearBottom = true;
      });
    }

    for (i = 0; i < heldItems.length; i++) {
      (function (item, delayMs) {
        var timer = window.setTimeout(function () {
          self.onColdStartRevealDue(item);
        }, delayMs);
        self.coldStartTimers.push(timer);
      })(heldItems[i], scheduleMs[i]);
    }

    if (heldItems.length === 0) {
      this.finishColdStartReplay();
      return;
    }

    if (this.onColdStartReady) {
      this.onColdStartReady({
        holdback: holdback,
        replayWindowMs: replayWindowMs,
        scheduleMs: scheduleMs,
        snapshotCount: snapshotItems.length,
      });
    }

    this.showIdleCursor();
  };

  FeedRevealController.prototype.onColdStartRevealDue = function (item) {
    var id = this.getItemId(item);
    if (!id || this.completed[id] || this.inDom[id]) return;
    this.scheduledRevealIds.push(id);
    this.tryScheduledReveal();
  };

  FeedRevealController.prototype.tryScheduledReveal = function () {
    if (this.active || !this.scheduledRevealIds.length) return;
    if (!this.coldStartReplayActive || this.coldStartComplete) return;

    var id = this.scheduledRevealIds.shift();
    var item = this.itemsById[id];
    if (!item) {
      this.tryScheduledReveal();
      return;
    }

    this.beginTypingReveal(item);
  };

  FeedRevealController.prototype.finishColdStartReplay = function () {
    if (this.coldStartComplete) return;
    this.coldStartComplete = true;
    this.coldStartReplayActive = false;
    this.clearColdStartTimers();
    this.scheduledRevealIds = [];
    this.firstItem = false;
    this.showIdleCursor();
    this.performInitialScroll();
    if (this.onStreamIdle) this.onStreamIdle();
  };

  FeedRevealController.prototype.syncItems = function (items, helpers, options) {
    options = options || {};
    var feedIds = Object.create(null);
    var queueEntries = [];
    var newDetectedIds = [];
    var isInitialBatch =
      !this.coldStartComplete &&
      !Object.keys(this.inDom).length &&
      !Object.keys(this.completed).length &&
      !this.active;
    var i;
    var id;
    var item;
    var savedScrollTop = null;
    var preserveScroll =
      options.preserveScroll &&
      this.scrollEl &&
      this.initialScrollDone &&
      !this.shouldAutoScroll();

    if (preserveScroll) {
      savedScrollTop = this.scrollEl.scrollTop;
    }

    for (i = 0; i < items.length; i++) {
      item = items[i];
      id = this.getItemId(item);
      if (!id) continue;
      feedIds[id] = true;
      this.itemsById[id] = item;
    }

    if (isInitialBatch && items.length) {
      this.startColdStartReplay(items);
      return {
        itemsFetched: items.length,
        newDetected: 0,
        queued: 0,
        revealed: 0,
        knownIds: this.knownIds.size,
        initialBatch: true,
      };
    }

    for (i = 0; i < items.length; i++) {
      item = items[i];
      id = this.getItemId(item);
      if (!id) continue;

      if (this.completed[id]) {
        this.updateCompletedItem(item, helpers);
        continue;
      }

      if (this.inDom[id] || this.isQueued(id) || (this.active && this.active.id === id)) {
        this.knownIds.add(id);
        continue;
      }

      if (!this.knownIds.has(id)) {
        queueEntries.push({ id: id });
        newDetectedIds.push(id);
        this.knownIds.add(id);
      }
    }

    if (queueEntries.length) {
      this.queue = this.queue.concat(queueEntries);
    }

    this.queue = this.queue.filter(function (entry) {
      return feedIds[entry.id];
    });

    if (preserveScroll && savedScrollTop != null && this.scrollEl) {
      this.scrollEl.scrollTop = savedScrollTop;
    }

    if (options.poll && options.pollLog) {
      this.pollCycleLog = {
        pollCount: options.pollLog.pollCount,
        itemsFetched: items.length,
        newDetected: newDetectedIds.length,
        newDetectedIds: newDetectedIds.slice(),
        queued: queueEntries.length,
        revealed: 0,
      };
    }

    this.processQueue();

    return {
      itemsFetched: items.length,
      newDetected: newDetectedIds.length,
      newDetectedIds: newDetectedIds,
      queued: queueEntries.length,
      revealed: this.pollCycleLog ? this.pollCycleLog.revealed : 0,
      knownIds: this.knownIds.size,
      initialBatch: false,
    };
  };

  FeedRevealController.prototype.isQueued = function (id) {
    for (var i = 0; i < this.queue.length; i++) {
      if (this.queue[i].id === id) return true;
    }
    for (i = 0; i < this.scheduledRevealIds.length; i++) {
      if (this.scheduledRevealIds[i] === id) return true;
    }
    return false;
  };

  FeedRevealController.prototype.mountShell = function (li) {
    if (!this.listEl) return;
    if (this.idleCursorEl && this.idleCursorEl.parentNode === this.listEl) {
      this.listEl.insertBefore(li, this.idleCursorEl);
      return;
    }
    this.listEl.appendChild(li);
  };

  FeedRevealController.prototype.updateCompletedItem = function (item, helpers) {
    if (!this.listEl || !helpers || typeof helpers.updateItemMeta !== "function") return;
    var node = this.listEl.querySelector('[data-feed-item-id="' + item.id + '"]');
    if (node) helpers.updateItemMeta(node, item);
  };

  FeedRevealController.prototype.processQueue = function () {
    var self = this;
    if (!this.coldStartComplete) return;
    if (this.active || !this.listEl) return;
    if (!this.queue.length) {
      this.showIdleCursor();
      this.flushPollCycleLog();
      if (this.onStreamIdle) this.onStreamIdle();
      return;
    }

    this.showIdleCursor();

    var delay = this.firstItem ? FIRST_ITEM_DELAY_MS : REVEAL_PAUSE_MS;
    this.pauseTimer = window.setTimeout(function () {
      self.pauseTimer = 0;
      self.dequeueNext();
    }, delay);
  };

  FeedRevealController.prototype.beginTypingReveal = function (item) {
    var id = this.getItemId(item);
    if (!id || !this.listEl) return;

    var shell = this.buildShell(item);
    if (!shell || !shell.li) return;

    this.hideIdleCursor();
    this.mountShell(shell.li);
    this.inDom[id] = true;
    this.knownIds.add(id);
    this.firstItem = false;

    this.active = {
      id: id,
      item: item,
      li: shell.li,
      textEl: shell.textEl,
      mediaEl: shell.mediaEl,
      cursorEl: shell.cursorEl,
      fullText: shell.fullText || "",
      charIndex: 0,
    };

    this.followReveal(false);
    this.scheduleTypeTick();
  };

  FeedRevealController.prototype.dequeueNext = function () {
    if (this.active || !this.queue.length || !this.listEl) {
      this.processQueue();
      return;
    }

    var entry = this.queue.shift();
    var item = this.itemsById[entry.id];
    if (!item) {
      this.processQueue();
      return;
    }

    this.beginTypingReveal(item);
  };

  FeedRevealController.prototype.scheduleTypeTick = function () {
    var self = this;
    this.typeTimer = window.setTimeout(function () {
      self.typeTimer = 0;
      self.typeTick();
    }, TYPE_INTERVAL_MS);
  };

  FeedRevealController.prototype.typeTick = function () {
    var session = this.active;
    if (!session) return;

    if (!session.fullText.length) {
      this.finishTyping(session);
      return;
    }

    session.charIndex += 1;
    session.textEl.textContent = session.fullText.slice(0, session.charIndex);
    this.followReveal(false);

    if (session.charIndex < session.fullText.length) {
      this.scheduleTypeTick();
      return;
    }

    this.finishTyping(session);
  };

  FeedRevealController.prototype.finishTyping = function (session) {
    if (session.cursorEl && session.cursorEl.parentNode) {
      session.cursorEl.parentNode.removeChild(session.cursorEl);
    }
    session.cursorEl = null;

    var self = this;
    if (session.mediaEl) {
      session.mediaEl.removeAttribute("aria-hidden");
      session.mediaEl.classList.remove("feed-item-media-pending");
      session.mediaEl.classList.add("feed-item-media-reveal");
      window.requestAnimationFrame(function () {
        session.mediaEl.classList.add("feed-item-media-reveal--visible");
      });
    }

    window.setTimeout(function () {
      self.completeSession(session);
    }, session.mediaEl ? MEDIA_FADE_MS : REVEAL_PAUSE_MS / 2);
  };

  FeedRevealController.prototype.completeSession = function (session) {
    session.li.classList.remove("feed-item-revealing");
    session.li.classList.add("feed-item-revealed");
    this.completed[session.id] = true;
    this.active = null;
    this.followReveal(true);

    if (this.coldStartReplayActive && !this.coldStartComplete) {
      this.coldStartRevealedCount += 1;
      this.tryScheduledReveal();
      if (
        this.coldStartRevealedCount >= this.coldStartHeldTotal &&
        !this.active &&
        !this.scheduledRevealIds.length
      ) {
        this.finishColdStartReplay();
      } else if (!this.active) {
        this.showIdleCursor();
      }
      return;
    }

    if (this.pollCycleLog) {
      this.pollCycleLog.revealed += 1;
    }

    this.processQueue();
    this.flushPollCycleLog();
  };

  FeedRevealController.prototype.followReveal = function (itemCompleted) {
    var scrollEl = this.scrollEl;
    if (!scrollEl) return;

    if (!this.shouldAutoScroll()) {
      if (itemCompleted && this.isLiveModeReady()) {
        this.pendingNew += 1;
        this.notifyPendingNew();
      }
      return;
    }

    var anchor = this.active ? this.active.li : null;
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        if (anchor) {
          anchor.scrollIntoView({ block: "end", behavior: "smooth" });
          return;
        }
        scrollEl.scrollTop = scrollEl.scrollHeight;
      });
    });
  };

  FeedRevealController.prototype.showIdleCursor = function () {
    if (!this.listEl) return;
    if (!this.idleCursorEl) {
      this.idleCursorEl = document.createElement("li");
      this.idleCursorEl.className = "social-feed-item feed-reveal-idle";
      this.idleCursorEl.setAttribute("aria-hidden", "true");
      this.idleCursorEl.innerHTML =
        '<span class="livetrack-reveal-cursor livetrack-reveal-cursor--idle">█</span>';
    }
    if (!this.idleCursorEl.parentNode) {
      this.listEl.appendChild(this.idleCursorEl);
    }
    if (this.shouldAutoScroll()) {
      this.followReveal(false);
    }
  };

  FeedRevealController.prototype.hideIdleCursor = function () {
    if (this.idleCursorEl && this.idleCursorEl.parentNode) {
      this.idleCursorEl.parentNode.removeChild(this.idleCursorEl);
    }
  };

  window.LiveTrackFeedReveal = {
    TYPE_INTERVAL_MS: TYPE_INTERVAL_MS,
    REVEAL_PAUSE_MS: REVEAL_PAUSE_MS,
    FIRST_ITEM_DELAY_MS: FIRST_ITEM_DELAY_MS,
    MEDIA_FADE_MS: MEDIA_FADE_MS,
    SCROLL_NEAR_BOTTOM_PX: DEFAULT_SCROLL_NEAR_BOTTOM_PX,
    HOLD_BACK_MIN: HOLD_BACK_MIN,
    HOLD_BACK_MAX: HOLD_BACK_MAX,
    REPLAY_WINDOW_MIN_MS: REPLAY_WINDOW_MIN_MS,
    REPLAY_WINDOW_MAX_MS: REPLAY_WINDOW_MAX_MS,
    buildStrictlyIncreasingSchedule: buildStrictlyIncreasingSchedule,
    create: function (options) {
      return new FeedRevealController(options);
    },
  };
})();
