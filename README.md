# Electro Box LLC

Premium marketing site for Electro Box LLC — electrical installations, smart home automation,
and security systems in Prishtina, Kosovo.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4
- Framer Motion + GSAP (ScrollTrigger) for motion
- Radix UI primitives styled as shadcn/ui-pattern components (`src/components/ui`)
- Lucide icons (brand/social glyphs hand-drawn in `src/components/shared/social-icons.tsx`
  and `whatsapp-icon.tsx`, since lucide-react no longer ships them)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app` — routes (Home, About, Services + `[slug]`, Projects + `[slug]`, Smart Home,
  Security Systems, Blog + `[slug]`, Contact), plus `sitemap.ts` / `robots.ts`
- `src/components/sections` — homepage sections
- `src/components/shared` — reusable page building blocks (cards, forms, CTA banners)
- `src/components/layout` — navbar, mega menu, footer, floating actions
- `src/components/ui` — design-system primitives
- `src/lib/data` — all site content (services, projects, testimonials, blog, brands, team)
- `src/lib/constants.ts` — site-wide config (contact info, nav, business hours)

## Media

No stock or AI-generated photography/video is bundled. Visual placeholders (`MediaPlaceholder`)
render on-brand gradient/circuit artwork instead. To drop in real assets:

- Hero video: see `public/videos/README.md`
- Photography: replace `MediaPlaceholder` usages with `next/image` once real photos/renders
  of installations, the team, and projects are available.

## Notes

- Dark mode only, per brand (`#FF9900` / `#111111` / `#1A1A1A` / `#FFFFFF`).
- The contact/quote forms are client-only (no backend) — submission opens a pre-filled
  `mailto:` to `electroboxshpk@gmail.com`. Wire up a real endpoint (e.g. Resend, Formspree)
  before relying on this in production.
- Language switcher UI is present but not wired to i18n yet (English content only).
