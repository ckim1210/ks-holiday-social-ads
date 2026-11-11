/*
 * Kate Spade social ad prototype — the one file to edit.
 *
 * - siteUrl: where every CTA, profile and "visit site" tap goes (opens in the same tab).
 *   Add UTM parameters here if the study needs click attribution.
 * - video: swap the placeholder files for the real campaign assets.
 *   "vertical" (9:16) is used by TikTok, Instagram Reels and YouTube Shorts.
 *   "landscape" (16:9) is used by the YouTube in-stream (pre-roll) ad.
 *   Set a source to "" to show the animated CSS placeholder instead.
 */
window.KS_CONFIG = {
  siteUrl: "https://www.katespade.com/content/holiday-campaign",

  video: {
    vertical: "assets/video/ks-holiday-vertical.mp4?v=1",
    verticalPoster: "assets/video/ks-holiday-vertical.jpg?v=1",
    landscape: "assets/video/placeholder-landscape.mp4?v=5",
    landscapePoster: "assets/video/placeholder-landscape.jpg?v=5"
  },

  brand: {
    name: "kate spade new york",
    handle: "katespadeny",
    domain: "katespade.com"
  },

  copy: {
    headline: "The Holiday Shop",
    caption: "Gifts that sparkle, wrapped and ready. Find something for everyone on your list.",
    hashtags: ["katespade", "holidaygifts", "giftguide"],
    cta: "Shop now",
    music: "Promoted music · kate spade new york"
  },

  // YouTube in-stream ad timing, in seconds.
  instream: {
    adLength: 15,
    skippableAfter: 5
  }
};
