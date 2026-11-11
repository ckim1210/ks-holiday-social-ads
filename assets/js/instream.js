(function () {
  "use strict";

  var cfg = (window.KS_CONFIG && window.KS_CONFIG.instream) || {};
  var AD_LENGTH = cfg.adLength || 15;
  var SKIP_AFTER = cfg.skippableAfter == null ? 5 : cfg.skippableAfter;

  var player = document.getElementById("player");
  var video = player.querySelector("video");
  var skip = document.getElementById("skip");
  var skipLabel = document.getElementById("skip-label");
  var remaining = document.getElementById("ad-remaining");
  var bar = document.getElementById("ad-bar");
  var contentBar = document.getElementById("content-bar");
  var contentTime = document.getElementById("content-time");

  var elapsed = 0;
  var last = performance.now();
  var done = false;

  function fmt(s) {
    s = Math.max(0, Math.ceil(s));
    return Math.floor(s / 60) + ":" + String(s % 60).padStart(2, "0");
  }

  function finishAd() {
    if (done) return;
    done = true;
    if (video) video.pause();
    player.querySelector(".tap").style.display = "none";
    player.classList.remove("is-paused");
    player.classList.add("is-content");
    var t = 0;
    setInterval(function () {
      t += 1;
      contentTime.textContent = fmt(t) + " / 18:42";
      contentBar.style.width = Math.min(100, 2 + (t / 1122) * 100) + "%";
    }, 1000);
  }

  function tick(now) {
    var dt = (now - last) / 1000;
    last = now;
    if (!done && !player.classList.contains("is-paused")) elapsed += dt;

    if (!done) {
      bar.style.width = Math.min(100, (elapsed / AD_LENGTH) * 100) + "%";
      remaining.textContent = fmt(AD_LENGTH - elapsed);
      if (elapsed >= SKIP_AFTER) {
        if (!skip.classList.contains("is-ready")) {
          skip.classList.add("is-ready");
          skipLabel.textContent = "Skip";
        }
      } else {
        skipLabel.textContent = String(Math.ceil(SKIP_AFTER - elapsed));
      }
      if (elapsed >= AD_LENGTH) finishAd();
    }
    requestAnimationFrame(tick);
  }

  skip.addEventListener("click", function (e) {
    e.stopPropagation();
    if (skip.classList.contains("is-ready")) finishAd();
  });

  requestAnimationFrame(tick);
})();
