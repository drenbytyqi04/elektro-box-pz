# Images

Photography is optimized (max 1600px, JPEG q=88) before being committed.

- `hero.jpg`, `about-home.jpg` — homepage hero and about section
- `services/<slug>.jpg` — service detail pages
- `projects/<slug>.jpg` — project cards and project detail pages
- `blog/<slug>.jpg` — blog cards and blog post pages
- `projects/gallery/<slug>-1..3.jpg` — project detail galleries
- `services/gallery/<slug>-1..3.jpg` — service detail galleries
- `before-after/before.jpg`, `after.jpg` — homepage before/after slider
- `smart-home-showcase.jpg` — interactive smart-home diagram background
- `instagram/<shortcode>.jpg` — real posts from instagram.com/elektroboxllc (homepage feed)
- `security-systems.jpg` — Security Systems page hero

Images are resolved by slug, so a new project/post/service needs a matching file here.
`MediaPlaceholder` (`src/components/shared/media-placeholder.tsx`) is kept as a fallback component
but is no longer used anywhere on the site.
