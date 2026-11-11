# Kate Spade holiday social ad prototype

Static HTML/CSS/JS mockups of the holiday campaign video running as ads on TikTok, Instagram Reels, YouTube Shorts and YouTube in-stream (pre-roll). There's no build step. Open `index.html` through any static server:

```bash
cd docs/social-ad-prototype
python3 -m http.server 8000
# then open http://localhost:8000
```

On a desktop each mockup is shown in a phone frame (scaled to fit the window). At 520px wide or less it fills the screen, so you can open it on a phone during a session.

## Phone links

Hosted on GitHub Pages. Send each participant only the link for their platform.

| Platform | Link |
| --- | --- |
| TikTok | https://ckim1210.github.io/ks-holiday-social-ads/tiktok.html |
| Instagram Reels | https://ckim1210.github.io/ks-holiday-social-ads/instagram.html |
| YouTube Shorts | https://ckim1210.github.io/ks-holiday-social-ads/youtube-shorts.html |
| YouTube pre-roll | https://ckim1210.github.io/ks-holiday-social-ads/youtube-instream.html |

The index of all four is https://ckim1210.github.io/ks-holiday-social-ads/

## Files

| File | What it is |
| --- | --- |
| `index.html` | Landing page that links all four mockups |
| `tiktok.html`, `instagram.html`, `youtube-shorts.html`, `youtube-instream.html` | The mockups |
| `config.js` | **The one file to edit:** destination URL, video files, brand and ad copy, pre-roll timing |
| `assets/video/` | Placeholder videos and poster frames |
| `assets/css/`, `assets/js/` | Shared phone frame, platform styles, icons and behavior |

## Swap in the campaign video

1. Export two cuts of the campaign video as H.264 MP4 files (they autoplay muted, so no audio track is needed):
   - **Vertical 9:16**, for example 1080×1920. Used by TikTok, Reels and Shorts.
   - **Landscape 16:9**, for example 1920×1080. Used by the YouTube pre-roll.
2. Copy them into `assets/video/`.
3. In `config.js`, point the paths at the new files:

   ```js
   video: {
     vertical: "assets/video/holiday-vertical.mp4",
     verticalPoster: "",            // optional still frame shown before playback
     landscape: "assets/video/holiday-landscape.mp4",
     landscapePoster: ""
   },
   ```

4. Reload. Every mockup picks up the change.

If you only have one cut, use it for both: it's center-cropped to fill each frame. If a path is empty or the file fails to load, the mockup shows an animated CSS placeholder instead.

For the pre-roll, set `instream.adLength` to the real ad length in seconds and `instream.skippableAfter` to when "Skip" appears (YouTube's default is 5).

## Change where taps go

`siteUrl` in `config.js` (default `https://www.katespade.com/content/holiday-campaign`) is used by every CTA, profile, avatar, caption and advertiser link, which open in a new tab. Add UTM parameters there if you need to attribute clicks, for example `https://www.katespade.com/content/holiday-campaign?utm_source=uxr&utm_medium=tiktok-mock`.

Brand handle, domain, headline, caption, hashtags, CTA label and the music line are also set in `config.js`.

## Notes

- Platform logos are approximated with text, CSS shapes and hand-drawn SVG icons. No logo image files are included.
- Engagement counts, the creator video under the pre-roll and the "up next" items are fictional sample content.
- The placeholder videos were generated with ffmpeg and are labeled "PLACEHOLDER VIDEO" on screen.
