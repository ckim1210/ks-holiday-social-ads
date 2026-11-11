(function () {
  "use strict";

  var CFG = window.KS_CONFIG || {};

  var MOCKUPS = [
    { href: "tiktok.html", label: "TikTok · In-feed ad" },
    { href: "instagram.html", label: "Instagram · Reels ad" },
    { href: "youtube-shorts.html", label: "YouTube · Shorts ad" },
    { href: "youtube-instream.html", label: "YouTube · In-stream ad" }
  ];

  // Hand-drawn approximations; no platform logo files are used anywhere.
  var S = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  var ICONS = {
    "heart": '<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>',
    "heart-outline": '<path ' + S + ' d="M12 20.5l-1.2-1.1C6 15 3 12.2 3 8.8 3 6.1 5.1 4 7.7 4c1.6 0 3.2.8 4.3 2 1.1-1.2 2.7-2 4.3-2C18.9 4 21 6.1 21 8.8c0 3.4-3 6.2-7.8 10.6L12 20.5z"/>',
    "bubble-dots": '<path fill-rule="evenodd" d="M12 3C6.48 3 2 6.92 2 11.5c0 2.2 1.03 4.2 2.71 5.69L4 21.5l4.43-2.2c1.12.32 2.32.5 3.57.5 5.52 0 10-3.92 10-8.5S17.52 3 12 3zM7.5 10.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm4.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>',
    "bookmark": '<path d="M6.5 2h11A1.5 1.5 0 0 1 19 3.5V22l-7-4.6L5 22V3.5A1.5 1.5 0 0 1 6.5 2z"/>',
    "bookmark-outline": '<path ' + S + ' d="M6.5 3h11a.5.5 0 0 1 .5.5V21l-6-4-6 4V3.5a.5.5 0 0 1 .5-.5z"/>',
    "share-arrow": '<path d="M13.5 4.2v4.6C6.9 9.3 3.6 13.9 3 20.2c2.1-3.6 5.6-5.2 10.5-5.2v4.8l8.3-7.8-8.3-7.8z"/>',
    "send": '<path ' + S + ' d="M21.5 3L2.5 10.2l7.7 3.1 3.1 7.7L21.5 3zM10.2 13.3L21.5 3"/>',
    "comment-outline": '<path ' + S + ' d="M20.6 16.3A9 9 0 1 0 17.4 19.6L21.5 21l-.9-4.7z"/>',
    "music": '<path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z"/>',
    "search": '<circle ' + S + ' stroke-width="2.3" cx="10.5" cy="10.5" r="6.5"/><path ' + S + ' stroke-width="2.3" d="M20 20l-4.6-4.6"/>',
    "home": '<path d="M12 2.8l9.5 8.3h-2.8v9.6h-5.2v-6.2h-3v6.2H5.3v-9.6H2.5z"/>',
    "home-outline": '<path ' + S + ' d="M4 10.4L12 3.5l8 6.9V20.5h-5.3v-6h-5.4v6H4z"/>',
    "friends": '<circle ' + S + ' cx="9" cy="8" r="3.5"/><path ' + S + ' d="M2.5 20c.6-3.6 3.2-6 6.5-6s5.9 2.4 6.5 6"/><path ' + S + ' d="M15.5 4.8a3.5 3.5 0 0 1 0 6.4M18 14.4c2 .8 3.2 2.9 3.5 5.6"/>',
    "inbox": '<path ' + S + ' d="M4 5.5h16v11H10l-5 3.5v-3.5H4z"/><path ' + S + ' d="M8.5 11h7"/>',
    "user": '<circle ' + S + ' cx="12" cy="8" r="4"/><path ' + S + ' d="M4 21c.8-4.2 4-6.5 8-6.5s7.2 2.3 8 6.5"/>',
    "plus": '<path ' + S + ' stroke-width="2.6" d="M12 5v14M5 12h14"/>',
    "plus-square": '<rect ' + S + ' x="3" y="3" width="18" height="18" rx="5"/><path ' + S + ' d="M12 8v8M8 12h8"/>',
    "dots-h": '<circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/>',
    "dots-v": '<circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/>',
    "camera": '<path ' + S + ' d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.7L9 4.5h6L16.8 7h2.7A1.5 1.5 0 0 1 21 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5z"/><circle ' + S + ' cx="12" cy="13" r="3.8"/>',
    "reels": '<rect ' + S + ' x="3" y="3" width="18" height="18" rx="5"/><path ' + S + ' d="M3 8.5h18M8.5 3l3 5.5M14 3l3 5.5"/><path d="M10 11.5v6l5-3z"/>',
    "messenger": '<path ' + S + ' d="M12 3C7 3 3 6.7 3 11.4c0 2.6 1.2 4.9 3.2 6.5V21l2.9-1.6c.9.3 1.9.4 2.9.4 5 0 9-3.7 9-8.4S17 3 12 3z"/><path ' + S + ' d="M7.5 13.5l3-3.2 2.4 2 3.6-2.8-3 3.3-2.4-2z"/>',
    "thumb-up": '<path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>',
    "thumb-down": '<path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"/>',
    "thumb-up-outline": '<path ' + S + ' stroke-width="1.8" d="M7 10v10H3V10zM7 10l4.5-7c1.6 0 2.6 1.2 2.3 2.8L13.2 9H19a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7"/>',
    "thumb-down-outline": '<path ' + S + ' stroke-width="1.8" d="M17 14V4h4v10zM17 14l-4.5 7c-1.6 0-2.6-1.2-2.3-2.8l.6-3.2H5a2 2 0 0 1-2-2.3l1.2-7A2 2 0 0 1 6.2 4H17"/>',
    "chat": '<path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>',
    "share-yt": '<path d="M14 8.6V4.5l7.5 7.2L14 19v-4.2c-5.3 0-8.8 1.7-11.5 5.3 1-5.3 4.3-10.4 11.5-11.5z"/>',
    "share-outline": '<path ' + S + ' stroke-width="1.8" d="M14 8.6V5l6.5 6.7L14 18.3v-3.5c-5 0-8.2 1.4-10.5 4.7 1-5 4-9.6 10.5-10.9z"/>',
    "remix": '<path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>',
    "shorts": '<path ' + S + ' stroke-width="1.8" d="M15.6 2.9l-8.3 4.4a4.1 4.1 0 0 0 .3 7.4l-.6.3a4.1 4.1 0 1 0 3.9 7.2l8.3-4.4a4.1 4.1 0 0 0-.3-7.4l.6-.3a4.1 4.1 0 1 0-3.9-7.2z"/><path d="M10 9.2v5.6l4.8-2.8z"/>',
    "subs": '<rect ' + S + ' stroke-width="1.8" x="3" y="8" width="18" height="13" rx="2"/><path ' + S + ' stroke-width="1.8" d="M6 5h12M8.5 2.5h7"/><path d="M10 11.5v6l5-3z"/>',
    "cast": '<path d="M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z"/>',
    "bell": '<path ' + S + ' stroke-width="1.8" d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.8 2H4.2zM10 21h4"/>',
    "volume-off": '<path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>',
    "volume-on": '<path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>',
    "play": '<path d="M8 5v14l11-7z"/>',
    "pause": '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>',
    "skip": '<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/>',
    "chevron-right": '<path ' + S + ' stroke-width="2.4" d="M9 5.5l6.5 6.5L9 18.5"/>',
    "chevron-down": '<path ' + S + ' stroke-width="2.2" d="M6 9l6 6 6-6"/>',
    "back": '<path ' + S + ' stroke-width="2.4" d="M15 5.5L8.5 12l6.5 6.5"/>',
    "external": '<path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3zM5 5h5v2H5v12h12v-5h2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z"/>',
    "info": '<path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>',
    "bag": '<path ' + S + ' d="M5 8h14l-1.1 12.1a1 1 0 0 1-1 .9H7.1a1 1 0 0 1-1-.9zM9 8V6.5a3 3 0 0 1 6 0V8"/>',
    "fullscreen": '<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>',
    "verified": '<path d="M12 1.5l2.6 1.9 3.2-.1 1 3 2.6 1.9-1 3.1 1 3.1-2.6 1.9-1 3-3.2-.1L12 22.5l-2.6-1.9-3.2.1-1-3L2.6 15.8l1-3.1-1-3.1 2.6-1.9 1-3 3.2.1z"/><path fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" d="M7.8 12.2l2.8 2.8 5.6-5.8"/>',
    "signal": '<rect x="2" y="15" width="3.5" height="6" rx="1"/><rect x="7.5" y="11.5" width="3.5" height="9.5" rx="1"/><rect x="13" y="8" width="3.5" height="13" rx="1"/><rect x="18.5" y="4" width="3.5" height="17" rx="1"/>',
    "wifi": '<path d="M12 20.5l3.6-4.4a5.6 5.6 0 0 0-7.2 0zM12 9.6c2.9 0 5.5 1 7.5 2.8l2-2.4A15 15 0 0 0 12 6.4 15 15 0 0 0 2.5 10l2 2.4c2-1.8 4.6-2.8 7.5-2.8zm0 3.7c1.9 0 3.6.7 4.9 1.8l2-2.4A10.7 10.7 0 0 0 12 10.3c-2.6 0-5 .9-6.9 2.4l2 2.4A7.6 7.6 0 0 1 12 13.3z"/>',
    "film": '<path ' + S + ' stroke-width="1.8" d="M4 6h16v12H4zM4 9.5h16M4 14.5h16"/>',
    "tag": '<path ' + S + ' stroke-width="1.8" d="M3.5 12.5V4.5a1 1 0 0 1 1-1h8l8 8-9 9z"/><circle cx="8" cy="8" r="1.5"/>'
  };

  function injectSprite() {
    var symbols = Object.keys(ICONS).map(function (k) {
      return '<symbol id="i-' + k + '" viewBox="0 0 24 24">' + ICONS[k] + "</symbol>";
    }).join("");
    var holder = document.createElement("div");
    holder.setAttribute("aria-hidden", "true");
    // Not display:none. Firefox will not paint <use> icons that point into a display:none sprite.
    holder.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
    holder.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + symbols + "</svg>";
    document.body.insertBefore(holder, document.body.firstChild);
  }

  // Copy each icon's shapes into the SVG. Firefox often drops <use href> references,
  // which leaves the rails and nav looking empty.
  function hydrateIcons(root) {
    (root || document).querySelectorAll("svg.icon").forEach(function (svg) {
      var use = svg.querySelector("use");
      if (!use) return;
      var id = (use.getAttribute("href") || use.getAttribute("xlink:href") || "").replace(/^#/, "");
      var symbol = id && document.getElementById(id);
      if (!symbol) return;
      svg.setAttribute("viewBox", symbol.getAttribute("viewBox") || "0 0 24 24");
      Array.prototype.forEach.call(symbol.childNodes, function (node) {
        svg.appendChild(node.cloneNode(true));
      });
      svg.removeChild(use);
    });
  }

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, CFG);
  }

  function applyText() {
    document.querySelectorAll("[data-ks-text]").forEach(function (el) {
      var v = get(el.getAttribute("data-ks-text"));
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-ks-caption]").forEach(function (el) {
      var copy = CFG.copy || {};
      el.textContent = (copy.caption || "") + " ";
      (copy.hashtags || []).forEach(function (h) {
        var tag = document.createElement("b");
        tag.className = "hashtag";
        tag.textContent = "#" + h + " ";
        el.appendChild(tag);
      });
    });
  }

  function applyLinks() {
    var url = CFG.siteUrl || "https://www.katespade.com/content/holiday-campaign";
    function openSite(e) {
      e.preventDefault();
      e.stopPropagation();
      window.open(url, "_blank", "noopener,noreferrer");
    }
    document.querySelectorAll("[data-ks-link]").forEach(function (a) {
      // No href, so the browser status bar does not reveal the destination.
      a.removeAttribute("href");
      a.setAttribute("role", "link");
      a.tabIndex = 0;
      a.style.cursor = "pointer";
      a.addEventListener("click", openSite);
      a.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") openSite(e);
      });
    });
  }

  function fallbackMarkup() {
    var d = document.createElement("div");
    d.className = "ks-fallback";
    d.innerHTML =
      '<div class="wordmark">kate spade</div><div class="sub">NEW YORK</div>' +
      '<div class="tag">THE HOLIDAY SHOP</div><div class="note">Animated placeholder · set a video in config.js</div>';
    return d;
  }

  function setupVideos() {
    document.querySelectorAll("video[data-ks-video]").forEach(function (v) {
      var kind = v.getAttribute("data-ks-video");
      var media = v.closest(".media") || v.parentNode;
      media.appendChild(fallbackMarkup());

      var src = get("video." + kind);
      var poster = get("video." + kind + "Poster");
      if (!src) { media.classList.add("is-fallback"); return; }

      v.muted = true;
      v.loop = v.hasAttribute("data-ks-noloop") ? false : true;
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("muted", "");
      if (poster) v.poster = poster;
      v.addEventListener("error", function () { media.classList.add("is-fallback"); });
      v.addEventListener("loadeddata", function () { media.classList.remove("is-fallback"); });
      if (v.getAttribute("src") !== src) v.src = src;
      if (!v.hasAttribute("data-ks-manual")) {
        var p = v.play();
        if (p && p.catch) p.catch(function () {});
      }
    });
  }

  function firstVideo(scope) {
    return (scope && scope.querySelector("video[data-ks-video]")) || document.querySelector("video[data-ks-video]");
  }

  function setupTapToPause() {
    document.querySelectorAll("[data-ks-tap-pause]").forEach(function (zone) {
      var v = firstVideo(zone);
      var host = zone.closest("[data-ks-pause-host]") || zone;
      zone.addEventListener("click", function () {
        if (!v) return;
        if (v.paused) { v.play(); host.classList.remove("is-paused"); }
        else { v.pause(); host.classList.add("is-paused"); }
      });
    });
  }

  function setupMute() {
    document.querySelectorAll("[data-ks-mute]").forEach(function (btn) {
      var v = firstVideo();
      var use = btn.querySelector("use");
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        if (!v) return;
        v.muted = !v.muted;
        if (use) use.setAttribute("href", v.muted ? "#i-volume-off" : "#i-volume-on");
      });
    });
  }

  function setupProgress() {
    var bars = document.querySelectorAll("[data-ks-progress]");
    if (!bars.length) return;
    var v = firstVideo();
    (function tick() {
      if (v && v.duration) {
        var pct = (v.currentTime / v.duration) * 100;
        bars.forEach(function (b) { b.style.width = pct + "%"; });
      }
      requestAnimationFrame(tick);
    })();
  }

  function setupToggles() {
    document.querySelectorAll("[data-ks-toggle]").forEach(function (btn) {
      var count = btn.querySelector("[data-count]");
      var onLabel = btn.getAttribute("data-on-label");
      var offLabel = btn.textContent;
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        var on = btn.classList.toggle("is-on");
        if (onLabel) btn.textContent = on ? onLabel : offLabel;
        if (count && count.hasAttribute("data-raw")) {
          var raw = parseInt(count.getAttribute("data-raw"), 10) + (on ? 1 : 0);
          count.textContent = formatCount(raw);
        }
      });
    });
  }

  function formatCount(n) {
    if (n >= 1e6) return (n / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    if (n >= 1e4) return (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K";
    return n.toLocaleString("en-US");
  }

  function setupDelayedCta() {
    document.querySelectorAll("[data-ks-cta-delay]").forEach(function (el) {
      var s = parseFloat(el.getAttribute("data-ks-cta-delay")) || 0;
      setTimeout(function () { el.classList.add("is-active"); }, s * 1000);
    });
  }

  function injectChrome() {
    document.querySelectorAll(".screen").forEach(function (screen) {
      var dark = screen.hasAttribute("data-light-ui") ? " is-dark" : "";
      screen.insertAdjacentHTML("afterbegin",
        '<div class="island"></div>' +
        '<div class="statusbar' + dark + '"><span>9:41</span><span class="sb-right">' +
        '<svg class="icon"><use href="#i-signal"/></svg><svg class="icon"><use href="#i-wifi"/></svg>' +
        '<span class="battery"></span></span></div>');
      screen.insertAdjacentHTML("beforeend", '<div class="home-indicator' + dark + '"></div>');
    });

    document.querySelectorAll("[data-ks-nav]").forEach(function (nav) {
      var here = location.pathname.split("/").pop();
      var html = '<a class="back" href="index.html">&larr; All mockups</a>';
      MOCKUPS.forEach(function (m) {
        html += '<a href="' + m.href + '"' + (m.href === here ? ' aria-current="page"' : "") + ">" + m.label + "<span>&rsaquo;</span></a>";
      });
      nav.innerHTML = html;
    });
  }

  function fitDevice() {
    /* Intentionally empty. Scaling the phone with zoom or transform makes
       Firefox skip painting the video and the icons. The page scrolls instead. */
  }

  injectSprite();
  injectChrome();
  applyText();
  applyLinks();
  setupVideos();
  setupTapToPause();
  setupMute();
  setupProgress();
  setupToggles();
  setupDelayedCta();
  hydrateIcons();
  fitDevice();

  window.KS = { config: CFG, formatCount: formatCount };
})();
