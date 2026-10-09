# Images

Photography is optimized (max 1600px, JPEG q=88) before being committed.

- `hero.jpg`, `about-hq.jpg` — homepage hero and about section
- `services/<slug>.jpg` — service detail pages
- `projects/<slug>.jpg` — project cards and project detail pages
- `blog/<slug>.jpg` — blog cards and blog post pages
- `security-systems.jpg` — Security Systems page hero

Images are resolved by slug, so a new project/post/service needs a matching file here.
`MediaPlaceholder` (`src/components/shared/media-placeholder.tsx`) is still used where no real
photography exists yet (e.g. project galleries, team).
