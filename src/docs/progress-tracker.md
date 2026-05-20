# Probell Nutrition — Progress Tracker

**Last updated: 20 May 2026 — Session 10**

---

## Current Status

**Phase:** Active build
**Active section:** Built for Endurance — Complete
**Next action:** Build Instagram.astro

---

## Pre-Build Checklist

These items must be confirmed before Claude Code begins building.

### Spec documents

- [x] `brand.md` — complete
- [x] `design.md` — complete
- [x] `globals.css` — complete
- [x] `coding-standards.md` — complete
- [x] `ai-interaction.md` — complete
- [x] `page-structure.md` — complete
- [x] `progress-tracker.md` — complete

### Assets

- [x] Logo PNG — single asset supplied `/public/images/icons/probell-logo.png` — light/dark structure in place, awaiting two-variant assets
- [x] Hero image — `hero-main.png` — generated and confirmed
- [x] Brand story image — `gym-interior.png` — generated and confirmed
- [x] Bold statement image — `discipline.png` — client supplied
- [ ] Whey CPB PNG — pending
- [ ] Whey Cookies & Cream PNG — pending
- [ ] Whey Salted Caramel PNG — pending
- [ ] Favicon — pending

### Decisions pending

- [ ] Active display font — Anton or Barlow Condensed
      Decide in browser against real photography
- [ ] Active body font — Space Grotesk or DM Sans
      Decide in browser against real content
- [ ] Active hero headline — A, B, C, or D
      Decide in browser against hero image
- [ ] Footer design — visual references to be confirmed
- [ ] Contact form email address — confirm with client
- [ ] Instagram account URL — confirm with client
- [ ] Formspree account setup — confirm before building Contact section

---

## Build Sections

| #   | Section             | Status      | Completed   | Notes                                                                                      |
| --- | ------------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------ |
| —   | Project init        | Complete    | 17 May 2026 |                                                                                            |
| —   | globals.css import  | Complete    | 17 May 2026 |                                                                                            |
| —   | BaseLayout          | Complete    | 17 May 2026 |                                                                                            |
| 1   | Nav                 | Complete    | 17 May 2026 | Single logo asset used for both states — swap when two-variant PNGs arrive                 |
| 2   | Hero                | Complete    | 17 May 2026 | margin-top: -72px applied to compensate body padding-top; headline--active on first option |
| 3   | Identity            | Complete    | 17 May 2026 | Text only — product breakout omitted per developer instruction                             |
| 4   | Trending            | Complete    | 17 May 2026 | Product PNGs confirmed (strawberry, cookies-cream, salted-caramel); 4th card placeholder   |
| 5   | Brand Story         | Complete    | 17 May 2026 | Image uses .png (not .jpg per spec); diagonal clip via existing .clip-diagonal-bottom global class |
| 6   | Built for Strength  | Complete    | 17 May 2026 | Placeholder Creatine card; whey-cookies-cream.png used for Whey 100; large={true} prop added to ProductCard |
| 7   | Bold Statement      | Complete    | 17 May 2026 | discipline.png used (spec says .jpg); TornEdge fill=black into Built for Endurance         |
| 8   | Built for Endurance | Complete    | 20 May 2026 | Both cards placeholder — no images available yet; gold eyebrow, clean bottom, no border breaker |
| 9   | Instagram           | Not started | —           | Placeholder grid at launch                                                                 |
| 10  | Contact             | Not started | —           | Confirm email + Formspree                                                                  |
| 11  | Footer              | Not started | —           | Placeholder — design deferred                                                              |
| —   | Supplements page    | Not started | —           | Placeholder only at launch                                                                 |

---

## Session Log

### Session 10 — 20 May 2026

**What was done:**

- Built `BuiltForEndurance.astro` — mirrors `BuiltForStrength.astro` structure exactly
- Gold eyebrow (`.label-text--gold`) instead of red; headline, sub-line, and product copy per spec
- Two placeholder product cards: "Pre-Workout" and "Creatine" — both `large={true}`, `tag="Coming Soon"`, no image props
- No border breaker — clean transition to Instagram
- Imported `BuiltForEndurance` into `index.astro` after `BoldStatement`
- `npm run build` passes — zero errors

**Decisions made this session:**

- None — all spec-driven, no deviations

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 9 — 17 May 2026

**What was done:**

- Built `BoldStatement.astro` — full viewport, `discipline.png` full bleed, `rgba(0,0,0,0.55)` overlay, centered headline
- Reused `TornEdge.astro` at bottom, `fill="var(--color-black)"` to match Built for Endurance background
- Imported `BoldStatement` into `index.astro` after `BuiltForStrength`
- `npm run build` passes — zero errors

**Decisions made this session:**

- Image path uses `.png` — spec listed `.jpg` but confirmed asset is `discipline.png`

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 8 — 17 May 2026

**What was done:**

- Built `BuiltForStrength.astro` — black background, red eyebrow, display headline, grey sub-line, 2-col large product grid
- Added `large?: boolean` prop to `ProductCard.astro` — applies `product-card--large` modifier class
- Added `.product-card--large` and `.product-card--large .product-card__image` to `global.css`
- Card 1: `whey-cookies-cream.png` with "Whey 100 Protein" / "Coming Soon" tag
- Card 2: placeholder div with "Creatine" / "Coming Soon" tag
- No border breaker — hard cut to Bold Statement per spec
- Imported `BuiltForStrength` into `index.astro` after `BrandStory`
- `npm run build` passes — zero errors

**Decisions made this session:**

- None — all spec-driven, no deviations

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 7 — 17 May 2026

**What was done:**

- Built `BrandStory.astro` — black background, 1fr 1fr grid, gym interior image left, content right
- Used `.clip-diagonal-bottom` global class (already defined) — no new CSS added to global.css
- Imported `BrandStory` into `index.astro` below Trending
- `npm run build` passes — zero errors

**Decisions made this session:**

- Image path uses `.png` — spec listed `.jpg` but confirmed asset is `gym-interior.png`
- Diagonal clip angle left at `85%` (global.css value) — adjust in browser if steeper angle preferred

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 6 — 17 May 2026

**What was done:**

- Built `ProductCard.astro` — optional `image` prop, placeholder div when absent, tag support
- Built `Trending.astro` — black background, `var(--space-2xl)` top padding (160px), 4-column grid, mobile carousel (CSS only, no JS)
- Imported `Trending` into `index.astro` below Identity
- `npm run build` passes — zero errors
- `page-structure.md` Section 4 product names and image paths synced to match feature spec and renamed assets

**Decisions made this session:**

- `var(--space-2xl)` used for 160px top padding — token match, no raw px value needed
- Alt text for card 1 corrected to "Strawberry" — spec had stale "Chocolate Peanut Butter" alt from before image rename
- Placeholder div for card 4 reuses `.product-card__image` class — aspect-ratio and background already defined globally, no scoped style needed

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 5 — 17 May 2026

**What was done:**

- Built `Identity.astro` — black background, two display text lines, max-width 800px container
- Product PNG breakout omitted per developer instruction — text only
- Imported into `index.astro` below Hero
- `npm run build` passes — zero errors

**Decisions made this session:**

- Product breakout removed from Identity — section is text only

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 4 — 17 May 2026

**What was done:**

- Built `TornEdge.astro` UI component — SVG path from feature spec, `fill` and `flipX` props
- Built `Hero.astro` to full spec — full viewport, image + overlay, four headlines, sub-line, CTA, torn edge
- Applied `margin-top: -72px` on hero section to compensate `body { padding-top: 72px }` so hero fills true 0→100vh with transparent nav overlaying the top
- Updated `index.astro` to import and render Hero
- `npm run build` passes — zero errors

**Decisions made this session:**

- `margin-top: -72px` on hero section — not in spec but required for correct full-viewport behaviour
- Used feature spec SVG path for TornEdge (slightly more organic than design.md Technique A path)
- Used DOM stacking order (not explicit z-index) for image/overlay/content layers; only `z-index: 2` on content div to guarantee it clears the overlay

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 3 — 17 May 2026

**What was done:**

- Built `Nav.astro` to full spec
- `global.css`: removed `@import` (fonts now loaded exclusively via `<link>` in BaseLayout for better performance), added `--transition-slow: 0.3s ease` token, added `body { padding-top: 72px }`
- `BaseLayout.astro`: added `Nav` import, `transparentNav?: boolean` prop, `<Nav transparent={transparentNav} />`
- `index.astro`: passes `transparentNav={true}`
- `npm run build` passes — zero errors

**Decisions made this session:**

- `define:vars` used to pass `transparent` prop to client script — scroll listener only attaches on homepage
- Single logo file used for both light/dark states — CSS toggle structure kept intact for when two-variant assets arrive
- Google Fonts `@import` removed from `global.css` in favour of `<link>` in BaseLayout (faster: preconnect hints + parallel fetch vs. render-blocking @import)

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 2 — 17 May 2026

**What was done:**

- Rebuilt `BaseLayout.astro` to spec: Props interface, default title, Google Fonts link tags, global.css import
- Updated `index.astro`: uses `@layouts/BaseLayout.astro` alias, scaffold removed, wraps empty `<main>`
- Confirmed `@components/` and `@layouts/` path aliases active via tsconfig.json
- `npm run build` passes — zero errors, 1 page built
- Progress tracker updated

**Decisions made this session:**

- None — all structural, no design decisions required

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 1 — 14 May 2026

**What was done:**

- Full project scoped and confirmed in Claude Chat
- Brand direction confirmed — Americana, image-led, B2B contact focus
- Page structure confirmed — 11 sections
- Copy confirmed per section
- Color tokens confirmed
- Typography confirmed — four fonts imported, decisions deferred to browser
- Hero image generated and confirmed
- Brand story image generated and confirmed
- Bold statement image confirmed — client supplied
- All 7 spec documents written and confirmed

**Decisions made this session:**

- Stack: Astro static, hosted on one.com
- No animations — photography and typography carry the energy
- Border breaker techniques assigned per section transition
- Waitlist replaced with B2B contact form — GDPR consideration
- Footer design deferred pending visual references

**Decisions still open:**

- Active display font
- Active body font
- Active hero headline
- Footer design
- Contact form email address
- Instagram URL
- Product PNG assets

---

## Known Issues

None.

---

## Deferred Items

| Item                        | Reason                                | Owner              |
| --------------------------- | ------------------------------------- | ------------------ |
| Footer design               | Needs visual reference review         | Developer          |
| Product PNGs                | Client assets not yet finalised       | Client / Developer |
| Logo transparent PNG        | Client to supply                      | Client             |
| Instagram live feed         | Account URL not confirmed             | Client             |
| Font decisions              | Must be made in browser               | Developer          |
| Hero headline               | Must be made in browser               | Developer          |
| Supplements page full build | Deferred to phase 2                   | Developer          |
| CMS integration (Hygraph)   | Deferred until core UI stable         | Developer          |
| Payment gateway             | Deferred — business decisions pending | Client / Developer |

---

## How Claude Code Updates This File

At the start of every session:

- Read current status and next action
- Confirm with developer before proceeding

At the end of every section:

- Update section status to `Complete`
- Add completion date
- Add any notes — deviations from spec, decisions made, issues found
- Update `Current Status` and `Next action` at the top of this file

At the end of every session:

- Add a session entry to the Session Log
- List what was built
- List any open decisions
- Update `Next action` at the top of this file
