# Hero video

No stock or AI-generated footage is bundled with this build.

To use a real cinematic hero video:

1. Add `hero.mp4` (H.264, ~10–20s loop, no audio needed, ideally under 8MB — compress with
   `ffmpeg -i input.mov -vcodec h264 -crf 24 -an hero.mp4`) to this folder.
2. Add a `hero-poster.jpg` first-frame still for instant paint before the video loads.
3. In `src/components/sections/hero-background.tsx`, uncomment the `<video>` block and remove
   (or keep as a `poster`/no-JS fallback) the animated CSS/SVG backdrop below it.

Good source footage: electrical panel installs, smart home devices lighting up, security camera
close-ups, architectural interiors — matching the shots called out in the design brief.
