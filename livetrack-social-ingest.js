/**
 * LiveTrack RSS ingest — X social + NewsNow + outlet headlines → unified FeedItem stream.
 *
 * FeedItem = SocialPost | HeadlinePost
 *
 * SocialPost: { id, source:"X", author, handle, text, timestamp, mediaUrls, postUrl }
 * HeadlinePost: { id, source, title, timestamp?, articleUrl, imageUrl?, type:"headline" }
 */
(function () {
  "use strict";

  var SOCIAL_FEED_URL = "https://rss.app/feeds/A5cZ5XPYdaf14rPD.xml";
  var HEADLINE_FEED_URL = "https://rss.app/feeds/Lo2h75Dr3oHO50Jb.xml";
  var OUTLET_FEEDS = [
    { key: "espn", label: "ESPN", url: "https://www.espn.com/espn/rss/news" },
    { key: "yahoo", label: "Yahoo Sports", url: "https://sports.yahoo.com/general/news/rss/" },
    { key: "cbs", label: "CBS Sports", url: "https://www.cbssports.com/rss/headlines/" },
    {
      key: "fox",
      label: "FOX Sports",
      url:
        "https://api.foxsports.com/v2/content/optimized-rss?partnerKey=MB0Wehpmuj2lUhuRhQaafhBjAJqaPU244mlTDK1i&size=30&_hp5_cdc=479232849%3B393862204935985%3B6638275614739789%3B1781047524701%3B",
    },
  ];
  var MAX_ITEMS = 36;
  var LOG_PREFIX = "[LiveTrack Ingest]";
  var SOCIAL_RUN_MIN = 2;
  var SOCIAL_RUN_MAX = 6;

  var NS = {
    dc: "http://purl.org/dc/elements/1.1/",
    media: "http://search.yahoo.com/mrss/",
    content: "http://purl.org/rss/1.0/modules/content/",
  };

  var IMAGE_EXT = /\.(jpe?g|png|webp|gif)(\?|$)/i;
  var TWIMG_MEDIA = /pbs\.twimg\.com\/media\//i;
  var VIDEO_HOST = /video\.twimg\.com/i;
  var BLOCKED_HOSTS = { "t.co": true, "www.t.co": true };

  function isVideoMediaUrl(url) {
    return (
      /\.(mp4|webm|m3u8)(\?|$)/i.test(url) ||
      /video\.twimg\.com/i.test(url) ||
      /amplify_video_thumb/i.test(url)
    );
  }

  function isHeadlinePost(item) {
    return item && item.type === "headline";
  }

  function isSocialPost(item) {
    return item && item.source === "X" && item.postUrl;
  }

  function tryParseUrl(raw) {
    var s = String(raw || "").trim();
    if (!s) return null;
    try {
      var u = new URL(s);
      if (u.protocol !== "http:" && u.protocol !== "https:") return null;
      return u;
    } catch (_err) {
      return null;
    }
  }

  function mediaUrlDedupeKey(url) {
    var u = tryParseUrl(url);
    if (!u) return String(url).trim();
    var path = u.pathname.replace(/:(small|medium|large|thumb|orig)$/i, "");
    return u.hostname.toLowerCase() + path;
  }

  function isLikelyRenderableMedia(url) {
    var u = tryParseUrl(url);
    if (!u) return false;

    var host = u.hostname.toLowerCase().replace(/^www\./, "");
    if (BLOCKED_HOSTS[host]) return false;
    if (/twitter\.com|x\.com/i.test(host) && /\/status\//i.test(u.pathname)) return false;
    if (/placeholder|default_profile|profile_images|absent/i.test(url)) return false;

    var href = u.href;
    if (TWIMG_MEDIA.test(href) || VIDEO_HOST.test(href)) return true;
    if (IMAGE_EXT.test(href)) return true;
    if (isVideoMediaUrl(href)) return true;
    return false;
  }

  function sanitizeSocialMediaUrls(urls) {
    var byKey = Object.create(null);
    var out = [];

    for (var i = 0; i < urls.length; i++) {
      var raw = urls[i];
      if (raw == null || typeof raw !== "string") continue;

      var trimmed = raw.trim();
      if (!trimmed || !isLikelyRenderableMedia(trimmed)) continue;

      var key = mediaUrlDedupeKey(trimmed);
      if (byKey[key] && trimmed.length <= byKey[key].length) continue;
      byKey[key] = trimmed;
    }

    for (var k in byKey) {
      if (Object.prototype.hasOwnProperty.call(byKey, k)) out.push(byKey[k]);
    }

    return out.slice(0, 4);
  }

  function decodeHtmlEntities(text) {
    var el = document.createElement("textarea");
    el.innerHTML = text;
    return el.value;
  }

  function extractTweetTextFromDescription(descriptionHtml) {
    if (!descriptionHtml) return "";
    var match = descriptionHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
    if (!match) return "";

    var inner = match[1];
    inner = inner.replace(/<a[^>]*>([^<]*)<\/a>/gi, "$1");
    inner = inner.replace(/<br\s*\/?>/gi, "\n");
    inner = inner.replace(/<[^>]+>/g, "");
    return decodeHtmlEntities(inner.trim());
  }

  function parseTitleAuthorAndText(title) {
    var colonIdx = title.indexOf(": ");
    if (colonIdx >= 0) {
      return {
        author: title.slice(0, colonIdx).trim(),
        text: title.slice(colonIdx + 2).trim(),
      };
    }
    return { author: "", text: title.trim() };
  }

  function handleFromLink(link) {
    var match = link.match(/^https?:\/\/(?:www\.)?(?:x\.com|twitter\.com)\/([^/]+)\/status\//i);
    return match ? match[1] : "";
  }

  function firstChildText(parent, localName) {
    if (!parent) return "";
    var nodes = parent.getElementsByTagNameNS
      ? parent.getElementsByTagNameNS("*", localName)
      : parent.getElementsByTagName(localName);

    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].parentNode === parent) {
        return (nodes[i].textContent || "").trim();
      }
    }
    return "";
  }

  function mediaContentUrl(itemEl) {
    var mediaNodes = itemEl.getElementsByTagNameNS
      ? itemEl.getElementsByTagNameNS(NS.media, "content")
      : itemEl.getElementsByTagName("media:content");

    if (!mediaNodes.length) {
      mediaNodes = itemEl.getElementsByTagName("content");
    }

    for (var i = 0; i < mediaNodes.length; i++) {
      var node = mediaNodes[i];
      if (node.getAttribute && node.getAttribute("url")) {
        return node.getAttribute("url").trim();
      }
    }
    return null;
  }

  function mediaThumbnailUrl(itemEl) {
    var thumbNodes = itemEl.getElementsByTagNameNS
      ? itemEl.getElementsByTagNameNS(NS.media, "thumbnail")
      : itemEl.getElementsByTagName("media:thumbnail");

    for (var i = 0; i < thumbNodes.length; i++) {
      var node = thumbNodes[i];
      if (node.getAttribute && node.getAttribute("url")) {
        return node.getAttribute("url").trim();
      }
    }
    return null;
  }

  function enclosureImageUrl(itemEl) {
    var nodes = itemEl.getElementsByTagName("enclosure");
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var url = node.getAttribute && node.getAttribute("url");
      var type = node.getAttribute && node.getAttribute("type");
      if (!url) continue;
      if (!type || /^image\//i.test(type) || IMAGE_EXT.test(url)) {
        return url.trim();
      }
    }
    return null;
  }

  function contentEncodedText(itemEl) {
    var nodes = itemEl.getElementsByTagNameNS
      ? itemEl.getElementsByTagNameNS(NS.content, "encoded")
      : [];
    if (!nodes.length) {
      nodes = itemEl.getElementsByTagName("encoded");
    }
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].parentNode === itemEl) {
        return (nodes[i].textContent || "").trim();
      }
    }
    return "";
  }

  function firstImageFromHtml(html) {
    if (!html) return null;
    var snippet = html.length > 8000 ? html.slice(0, 8000) : html;
    var match = snippet.match(/<img[^>]+src=["']([^"']+)["']/i);
    return match ? match[1].trim() : null;
  }

  function isLikelyHeadlineImage(url) {
    var u = tryParseUrl(url);
    if (!u) return false;
    var host = u.hostname.toLowerCase().replace(/^www\./, "");
    if (BLOCKED_HOSTS[host]) return false;
    if (IMAGE_EXT.test(u.href)) return true;
    if (/cloudfront\.net|foxsports\.com|cbsistatic\.com|espncdn\.com|yimg\.com|twimg\.com/i.test(host)) {
      return true;
    }
    return false;
  }

  function normalizeHeadlineImageUrl(url) {
    var trimmed = String(url || "").trim();
    if (!trimmed || !isLikelyHeadlineImage(trimmed)) return null;
    return trimmed;
  }

  function extractHeadlineImageUrl(itemEl, description, encoded) {
    var candidates = [
      mediaContentUrl(itemEl),
      mediaThumbnailUrl(itemEl),
      enclosureImageUrl(itemEl),
      firstImageFromHtml(encoded),
      firstImageFromHtml(description),
    ];

    for (var i = 0; i < candidates.length; i++) {
      var normalized = normalizeHeadlineImageUrl(candidates[i]);
      if (normalized) return normalized;
    }
    return null;
  }

  function parseRssItems(xmlDoc) {
    var itemNodes = xmlDoc.getElementsByTagName("item");
    var rawItems = [];

    for (var i = 0; i < itemNodes.length; i++) {
      var itemEl = itemNodes[i];
      var description = firstChildText(itemEl, "description");
      var encoded = contentEncodedText(itemEl);
      rawItems.push({
        title: firstChildText(itemEl, "title"),
        description: description,
        encoded: encoded,
        link: firstChildText(itemEl, "link"),
        pubDate: firstChildText(itemEl, "pubDate"),
        guid: firstChildText(itemEl, "guid"),
        creator:
          itemEl.getElementsByTagNameNS(NS.dc, "creator")[0]?.textContent?.trim() ||
          firstChildText(itemEl, "creator"),
        mediaUrl: mediaContentUrl(itemEl),
        imageUrl: extractHeadlineImageUrl(itemEl, description, encoded),
      });
    }

    return rawItems;
  }

  function headlineTimestampIso(pubDate) {
    var ms = Date.parse(String(pubDate || "").trim());
    if (Number.isNaN(ms)) return null;
    return new Date(ms).toISOString();
  }

  function headlineItemId(prefix, item, articleUrl) {
    var guid = String(item.guid || "").trim();
    if (guid) return prefix + "-" + guid.replace(/[^a-zA-Z0-9_-]+/g, "-").slice(0, 96);
    var urlId = String(articleUrl || "").replace(/[^a-zA-Z0-9]+/g, "-").slice(-48);
    return prefix + "-" + urlId;
  }

  var RSS_FETCH_TIMEOUT_MS = 12000;

  function fetchWithTimeout(promise, label, timeoutMs) {
    return new Promise(function (resolve, reject) {
      var settled = false;
      var timer = setTimeout(function () {
        if (settled) return;
        settled = true;
        reject(new Error(label + " timed out after " + timeoutMs + "ms"));
      }, timeoutMs);

      promise.then(
        function (value) {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          resolve(value);
        },
        function (err) {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          reject(err);
        }
      );
    });
  }

  function fetchRssDocument(url) {
    var fetchPromise = fetch(url, {
      method: "GET",
      mode: "cors",
      cache: "no-store",
      headers: { Accept: "application/rss+xml, application/xml, text/xml, */*" },
    }).then(function (res) {
      if (!res.ok) {
        throw new Error("RSS fetch failed (" + url + "): HTTP " + res.status);
      }
      return res.text();
    }).then(function (xmlText) {
      var parser = new DOMParser();
      var xmlDoc = parser.parseFromString(xmlText, "application/xml");
      var parseError = xmlDoc.querySelector("parsererror");
      if (parseError) {
        throw new Error("RSS XML parse error: " + (parseError.textContent || "unknown"));
      }
      return xmlDoc;
    });

    return fetchWithTimeout(fetchPromise, "RSS fetch (" + url + ")", RSS_FETCH_TIMEOUT_MS);
  }

  function normalizeSocialItem(item) {
    var link = String(item.link || "").trim();
    var idMatch = link.match(/\/status\/(\d+)/);
    if (!idMatch) return null;

    var parsedTitle = parseTitleAuthorAndText(String(item.title || "").trim());
    var handle = String(item.creator || "")
      .replace(/^@/, "")
      .trim();

    if (!handle) handle = handleFromLink(link);

    var text = parsedTitle.text || extractTweetTextFromDescription(item.description);
    if (!text) return null;

    var author = parsedTitle.author || handle;
    var timestampMs = Date.parse(item.pubDate);
    if (Number.isNaN(timestampMs)) return null;

    var mediaUrls = item.mediaUrl ? sanitizeSocialMediaUrls([item.mediaUrl]) : [];

    return {
      id: idMatch[1],
      source: "X",
      author: author,
      handle: handle,
      text: text,
      timestamp: new Date(timestampMs).toISOString(),
      mediaUrls: mediaUrls,
      postUrl: link,
    };
  }

  function articleIdFromNewsNowLink(link) {
    var match = String(link || "").match(/\/A\/(\d+)/i);
    return match ? match[1] : null;
  }

  function normalizeHeadlineItem(item) {
    var title = String(item.title || "").trim();
    var articleUrl = String(item.link || "").trim();
    if (!title || !articleUrl) return null;

    var articleId = articleIdFromNewsNowLink(articleUrl);
    var guid = String(item.guid || "").trim();
    var id = articleId ? "newsnow-" + articleId : guid ? "newsnow-" + guid : null;
    if (!id) return null;

    return {
      id: id,
      source: "NewsNow",
      title: title,
      articleUrl: articleUrl,
      imageUrl: normalizeHeadlineImageUrl(item.imageUrl || item.mediaUrl),
      type: "headline",
    };
  }

  function normalizeOutletHeadlineItem(item, outletConfig) {
    var title = String(item.title || "").trim();
    var articleUrl = String(item.link || "").trim();
    if (!title || !articleUrl) return null;

    var timestamp = headlineTimestampIso(item.pubDate);
    if (!timestamp) return null;

    var id = headlineItemId(outletConfig.key, item, articleUrl);
    if (!id) return null;

    return {
      id: id,
      source: outletConfig.label,
      title: title,
      timestamp: timestamp,
      articleUrl: articleUrl,
      imageUrl: normalizeHeadlineImageUrl(item.imageUrl),
      type: "headline",
    };
  }

  function dedupeSocialPosts(posts) {
    var byId = Object.create(null);
    var byUrl = Object.create(null);
    var out = [];

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      if (!post || !post.id) continue;
      if (byId[post.id] || (post.postUrl && byUrl[post.postUrl])) continue;
      byId[post.id] = true;
      if (post.postUrl) byUrl[post.postUrl] = true;
      out.push(post);
    }

    return out;
  }

  function dedupeHeadlines(headlines) {
    var byId = Object.create(null);
    var byUrl = Object.create(null);
    var out = [];

    for (var i = 0; i < headlines.length; i++) {
      var item = headlines[i];
      if (!item || !item.id) continue;
      if (byId[item.id] || (item.articleUrl && byUrl[item.articleUrl])) continue;
      byId[item.id] = true;
      if (item.articleUrl) byUrl[item.articleUrl] = true;
      out.push(item);
    }

    return out;
  }

  function sortSocialNewestFirst(posts) {
    return dedupeSocialPosts(posts).sort(function (a, b) {
      return Date.parse(b.timestamp) - Date.parse(a.timestamp);
    });
  }

  function sortNewsNowNewestFirst(headlines) {
    return dedupeHeadlines(headlines);
  }

  function sortOutletNewestFirst(headlines) {
    return dedupeHeadlines(headlines).sort(function (a, b) {
      var aMs = Date.parse(a.timestamp);
      var bMs = Date.parse(b.timestamp);
      if (Number.isNaN(bMs) && Number.isNaN(aMs)) return 0;
      if (Number.isNaN(bMs)) return -1;
      if (Number.isNaN(aMs)) return 1;
      return bMs - aMs;
    });
  }

  function nextSocialRunLength(lastRunLength) {
    var choices = [];
    for (var n = SOCIAL_RUN_MIN; n <= SOCIAL_RUN_MAX; n++) {
      if (n !== lastRunLength) choices.push(n);
    }
    if (!choices.length) return SOCIAL_RUN_MIN;
    return choices[Math.floor(Math.random() * choices.length)];
  }

  /**
   * Merge headline sources into one queue. Each source stays newest-first internally;
   * sources are round-robin merged so no single outlet dominates the pool.
   */
  function buildCombinedHeadlineQueue(newsNowHeadlines, outletHeadlines) {
    var queues = [];

    var newsNow = sortNewsNowNewestFirst(newsNowHeadlines);
    if (newsNow.length) queues.push(newsNow);

    var bySource = Object.create(null);
    var sourceKeys = [];
    for (var i = 0; i < outletHeadlines.length; i++) {
      var item = outletHeadlines[i];
      var key = item.source || "Unknown";
      if (!bySource[key]) {
        bySource[key] = [];
        sourceKeys.push(key);
      }
      bySource[key].push(item);
    }

    sourceKeys.sort();
    for (var s = 0; s < sourceKeys.length; s++) {
      var sorted = sortOutletNewestFirst(bySource[sourceKeys[s]]);
      if (sorted.length) queues.push(sorted);
    }

    if (!queues.length) return [];

    var combined = [];
    var indices = new Array(queues.length);
    for (var j = 0; j < indices.length; j++) indices[j] = 0;

    var hasMore = true;
    while (hasMore) {
      hasMore = false;
      for (var q = 0; q < queues.length; q++) {
        if (indices[q] < queues[q].length) {
          combined.push(queues[q][indices[q]]);
          indices[q] += 1;
          hasMore = true;
        }
      }
    }

    return combined;
  }

  function verifyFeedInterleaving(items) {
    var socialUsed = 0;
    var headlineUsed = 0;
    var maxConsecutiveSocial = 0;
    var maxConsecutiveHeadline = 0;
    var consecutiveSocial = 0;
    var consecutiveHeadline = 0;

    for (var i = 0; i < items.length; i++) {
      if (isHeadlinePost(items[i])) {
        headlineUsed += 1;
        consecutiveHeadline += 1;
        consecutiveSocial = 0;
        maxConsecutiveHeadline = Math.max(maxConsecutiveHeadline, consecutiveHeadline);
        if (consecutiveHeadline > 1) {
          console.error(
            LOG_PREFIX,
            "Interleaving violation: consecutive headlines at index",
            i,
            items[i]
          );
        }
      } else {
        socialUsed += 1;
        consecutiveSocial += 1;
        consecutiveHeadline = 0;
        maxConsecutiveSocial = Math.max(maxConsecutiveSocial, consecutiveSocial);
      }
    }

    console.log(LOG_PREFIX, "Consecutive headline count", maxConsecutiveHeadline);
    console.log(LOG_PREFIX, "Consecutive social count", maxConsecutiveSocial);
    console.log(LOG_PREFIX, "Interleaving summary", {
      socialItemsUsed: socialUsed,
      headlineItemsUsed: headlineUsed,
      maximumConsecutiveSocial: maxConsecutiveSocial,
      maximumConsecutiveHeadline: maxConsecutiveHeadline,
    });

    return {
      socialItemsUsed: socialUsed,
      headlineItemsUsed: headlineUsed,
      maximumConsecutiveSocial: maxConsecutiveSocial,
      maximumConsecutiveHeadline: maxConsecutiveHeadline,
    };
  }

  /**
   * Two-group block mix: SOCIAL x N (2–6) then HEADLINE x 1.
   * Returns oldest → newest (top → bottom in the terminal scroll).
   */
  function mixFeedBlocks(socialPosts, newsNowHeadlines, outletHeadlines) {
    var social = sortSocialNewestFirst(socialPosts);
    var headlines = buildCombinedHeadlineQueue(newsNowHeadlines, outletHeadlines);
    var out = [];
    var si = 0;
    var hi = 0;
    var lastRunLength = null;

    while (out.length < MAX_ITEMS && si < social.length) {
      var runLength = nextSocialRunLength(lastRunLength);
      lastRunLength = runLength;

      for (var r = 0; r < runLength && si < social.length && out.length < MAX_ITEMS; r++) {
        out.push(social[si++]);
      }

      if (out.length >= MAX_ITEMS) break;
      if (hi >= headlines.length) continue;

      out.push(headlines[hi++]);
    }

    // Terminal chronology: oldest at index 0, newest at end (bottom of scroll).
    out.reverse();
    return out;
  }

  function mergeCombinedFeed(socialPosts, newsNowHeadlines, outletHeadlines) {
    var combined = mixFeedBlocks(socialPosts, newsNowHeadlines, outletHeadlines);
    verifyFeedInterleaving(combined);
    return combined;
  }

  function normalizeSocialFeed(xmlDoc) {
    var rawItems = parseRssItems(xmlDoc);
    var posts = [];

    for (var i = 0; i < rawItems.length; i++) {
      var normalized = normalizeSocialItem(rawItems[i]);
      if (normalized) posts.push(normalized);
    }

    return dedupeSocialPosts(posts);
  }

  function normalizeOutletFeed(xmlDoc, outletConfig) {
    var rawItems = parseRssItems(xmlDoc);
    var headlines = [];

    for (var i = 0; i < rawItems.length; i++) {
      var normalized = normalizeOutletHeadlineItem(rawItems[i], outletConfig);
      if (normalized) headlines.push(normalized);
    }

    return dedupeHeadlines(headlines);
  }

  function fetchOutletFeed(outletConfig) {
    return fetchRssDocument(outletConfig.url).then(function (xmlDoc) {
      return normalizeOutletFeed(xmlDoc, outletConfig);
    });
  }

  function normalizeHeadlineFeed(xmlDoc) {
    var rawItems = parseRssItems(xmlDoc);
    var headlines = [];

    for (var i = 0; i < rawItems.length; i++) {
      var normalized = normalizeHeadlineItem(rawItems[i]);
      if (normalized) headlines.push(normalized);
    }

    return dedupeHeadlines(headlines);
  }

  function fetchSocialFeed() {
    return fetchRssDocument(SOCIAL_FEED_URL).then(normalizeSocialFeed);
  }

  function fetchHeadlineFeed() {
    return fetchRssDocument(HEADLINE_FEED_URL).then(normalizeHeadlineFeed);
  }

  var lastIngestCounts = null;

  function fetchUnifiedFeed() {
    var tasks = [
      { key: "x", label: "X", run: fetchSocialFeed },
      { key: "newsnow", label: "NewsNow", run: fetchHeadlineFeed },
    ];

    for (var i = 0; i < OUTLET_FEEDS.length; i++) {
      (function (config) {
        tasks.push({
          key: config.key,
          label: config.label,
          run: function () {
            return fetchOutletFeed(config);
          },
        });
      })(OUTLET_FEEDS[i]);
    }

    return Promise.allSettled(
      tasks.map(function (task) {
        return fetchWithTimeout(task.run(), task.label + " feed", RSS_FETCH_TIMEOUT_MS);
      })
    ).then(function (results) {
      var social = [];
      var newsNow = [];
      var outletHeadlines = [];
      var outletStatus = {};

      for (var i = 0; i < results.length; i++) {
        var task = tasks[i];
        var result = results[i];

        if (result.status === "fulfilled") {
          if (task.key === "x") {
            social = result.value;
          } else if (task.key === "newsnow") {
            newsNow = result.value;
          } else {
            outletStatus[task.key] = { ok: true, count: result.value.length };
            outletHeadlines = outletHeadlines.concat(result.value);
          }
          continue;
        }

        console.warn(LOG_PREFIX, task.label + " feed failed:", result.reason);
        if (task.key !== "x" && task.key !== "newsnow") {
          outletStatus[task.key] = { ok: false, error: String(result.reason) };
        }
      }

      if (!social.length && !newsNow.length && !outletHeadlines.length) {
        throw new Error("All feeds failed");
      }

      var combined = mergeCombinedFeed(social, newsNow, outletHeadlines);
      lastIngestCounts = {
        xPosts: social.length,
        newsNowHeadlines: newsNow.length,
        espnHeadlines: outletStatus.espn && outletStatus.espn.ok ? outletStatus.espn.count : 0,
        yahooHeadlines: outletStatus.yahoo && outletStatus.yahoo.ok ? outletStatus.yahoo.count : 0,
        cbsHeadlines: outletStatus.cbs && outletStatus.cbs.ok ? outletStatus.cbs.count : 0,
        foxHeadlines: outletStatus.fox && outletStatus.fox.ok ? outletStatus.fox.count : 0,
        totalCombined: combined.length,
        outletStatus: outletStatus,
      };
      console.log(LOG_PREFIX, "Counts", {
        xPosts: lastIngestCounts.xPosts,
        newsNowHeadlines: lastIngestCounts.newsNowHeadlines,
        espnHeadlines: lastIngestCounts.espnHeadlines,
        yahooHeadlines: lastIngestCounts.yahooHeadlines,
        cbsHeadlines: lastIngestCounts.cbsHeadlines,
        foxHeadlines: lastIngestCounts.foxHeadlines,
        totalCombined: lastIngestCounts.totalCombined,
      });
      return combined;
    });
  }

  function logIngestSummary(items) {
    var counts = lastIngestCounts;
    var social = items.filter(isSocialPost);
    var headlines = items.filter(isHeadlinePost);

    console.log(LOG_PREFIX, "Unified FeedItem[]", items);
    if (counts) {
      console.log(LOG_PREFIX, "Counts", {
        xPosts: counts.xPosts,
        newsNowHeadlines: counts.newsNowHeadlines,
        espnHeadlines: counts.espnHeadlines,
        yahooHeadlines: counts.yahooHeadlines,
        cbsHeadlines: counts.cbsHeadlines,
        foxHeadlines: counts.foxHeadlines,
        totalCombined: counts.totalCombined,
      });
      if (counts.outletStatus) {
        console.log(LOG_PREFIX, "Outlet feed status", counts.outletStatus);
      }
    } else {
      console.log(LOG_PREFIX, "Summary", {
        total: items.length,
        social: social.length,
        headlines: headlines.length,
      });
    }
  }

  var api = {
    fetchUnifiedFeed: fetchUnifiedFeed,
    fetchSocialFeed: fetchSocialFeed,
    fetchHeadlineFeed: fetchHeadlineFeed,
    fetchAndNormalizeFeed: fetchUnifiedFeed,
    logIngestSummary: logIngestSummary,
    isVideoMediaUrl: isVideoMediaUrl,
    isHeadlinePost: isHeadlinePost,
    isSocialPost: isSocialPost,
    SOCIAL_FEED_URL: SOCIAL_FEED_URL,
    HEADLINE_FEED_URL: HEADLINE_FEED_URL,
    OUTLET_FEEDS: OUTLET_FEEDS,
    FEED_URL: SOCIAL_FEED_URL,
  };

  window.LiveTrackIngest = api;
  window.LiveTrackSocialIngest = api;
})();
