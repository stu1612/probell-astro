# Probell Nutrition

A B2B brand site for an American-directed supplement brand (a
kettlebell-shaped protein container). The audience is gyms, retailers,
distributors and sales partners, in the US only. **The single goal is to
get the right people to make contact. It isn't an ecommerce store.** The
homepage follows that story: feel the brand, see the product, find your
route in, then make contact.

## How to work with Stu

- Use your judgement. Propose ideas and alternatives, challenge docs and
  specs, and give opinions when asked.
- Docs and specs describe intent, not law. When code and docs disagree,
  trust the code and flag the doc.
- When a decision is Stu's (scope, design direction, anything external),
  ask before solving it.
- Do small, clear tasks directly. For larger ones, show a short plan
  first.
- If you need information from Vercel, DNS or any external service, ask
  Stu. Don't propose installing tools or widening permissions to get it.

## Stack and deploy

- Astro 7, static output, with `@astrojs/sitemap`. Plain CSS and no
  frameworks (no React, Vue, Svelte or Tailwind).
- Commands: `npm run dev`, `npm run build`, `npm run lint`.
- Hosted on Vercel. Production builds from `main`. Day-to-day work
  happens on `dev`. `course/*` branches come off `dev` (temporary).
- DNS and email are at one.com. Don't touch them.
- Path aliases: `@components`, `@layouts`, `@data`, `@constants`, `@lib`,
  `@assets`.

## Code rules

- **Images:** always `<Image />` with an imported file from
  `src/assets/`, never `<img>` or a `/public` string path, because those
  skip optimisation. `public/images/` holds only `og-image.jpg` and the
  Contact CSS background.
- **CSS values:** use the custom properties in `src/styles/global.css`
  for colours, type, spacing and transitions. A one-off component value
  can stay in that component's scoped styles.
- **Content:** lists and repeated content live in `src/data/` (uppercase
  named exports with an interface), not hardcoded in components.
  `catalog.ts` (`PRODUCTS`) is the single product source.
- **Components:** homepage sections each have a folder with an
  `index.astro` and their sub-components. Page-specific groups such as
  `ProductDetail/` are a folder of parts. Shared pieces live in
  `src/components/ui/`.
- **Forms:** the partner forms (`/sales`, `/retail`, `/distributor`) post
  to HubSpot through `src/lib/hubspot.ts`. Each page reads `HUBSPOT_*`
  env vars and **falls back to `""` if one is missing, so the build
  passes and leads are lost silently.** The fix is planned; see "Later"
  in `src/docs/context-audit.md`.
- **Comments:** leave commented-out code in place unless asked to
  remove it.
- **Changes:** keep them minimal, with no unrelated refactors. Stop
  after 2 failed attempts at the same fix, and don't install packages to
  get around a problem.

## Where to look

| Need | Read |
|---|---|
| Copy, imagery, audience, go-to-market | `src/docs/brand.md` |
| A new section or a visual change | `src/docs/design.md` |
| A new page, or changes to `<head>` or meta | `src/docs/seo.md` |
| What's in progress, next, open or buggy, and project history | Ask the `tracker-historian` agent. Don't read `progress-tracker.md` directly |
| The original intent behind the partner pages | `src/features/*-page.md`, `partner-crm-integration.md` |
