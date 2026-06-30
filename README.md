# Nanniland — Landing Page

Static, RTL Hebrew landing page for Nanniland (nanny services in Koh Samui), built with Next.js (App Router), React, TypeScript, and Tailwind CSS. No backend, database, auth, or server actions — `next build` produces a fully static export.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build (static export)

```bash
npm run build
```

This generates a static site in the `out/` directory (configured via `output: "export"` in `next.config.mjs`).

## Deploy to Vercel

Push this repo to GitHub/GitLab/Bitbucket and import it in Vercel — no special configuration needed (Vercel auto-detects Next.js). Alternatively, run `npx vercel` from this folder.

## Changing the registration URL

All CTA buttons read from a single constant. To point them at the real registration page, edit:

```
lib/constants.ts
```

```ts
export const REGISTRATION_URL = "https://example.com/register";
```

## /instagram route

A second, dedicated landing page lives at `/instagram` for visitors arriving from the Instagram bio link. It reuses the same design system, color tokens, and several existing section components (`Highlights`, `MatchingChecklist`, `PaymentAndPolicy`, `Footer`, `Pricing`, `FinalCTA`) rather than duplicating them — only the hero is a separate component (`InstagramHero`), since its layout and copy are intentionally different for that audience.

Its CTA buttons point at a second constant, also in `lib/constants.ts`:

```ts
export const INSTAGRAM_CTA_URL = "https://nanniland.netlify.app/";
```

`Pricing` and `FinalCTA` accept optional `ctaHref` / `ctaLabel` / `ctaSubtitle` props so the same components can render either the main page's CTA (default) or the Instagram page's two-line "NANNILAND / להרשמה" CTA, without any duplicated markup. `CTAButton` itself gained matching optional `href` and `subtitle` props for the same reason. None of this changes how the main `/` page renders.

## Project structure

- `app/layout.tsx` — root layout, RTL (`dir="rtl"`, `lang="he"`), SEO metadata, self-hosted Heebo font.
- `app/page.tsx` — assembles the main landing page sections.
- `app/instagram/page.tsx` — assembles the Instagram landing page sections.
- `components/` — one component per section (Hero, InstagramHero, Highlights, MatchingChecklist, Pricing, Payment, CancellationPolicy, FinalCTA, Footer) plus the shared `CTAButton`.
- `lib/constants.ts` — registration URLs and site metadata strings.
- `public/images/` — optimized JPEGs used across both pages.

## Notes

- Fonts (Heebo) are self-hosted via `@fontsource/heebo` — no runtime or build-time calls to Google Fonts.
- Images are served via `next/image` with `unoptimized: true` (required for static export).
