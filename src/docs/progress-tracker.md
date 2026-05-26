# Probell Nutrition — Progress Tracker

**Last updated: 26 May 2026 — Session 21**

---

## Current Status

**Phase:** Post-build feature updates
**Active section:** Feature updates — see `src/features/feature-updates.md`
**Next action:** Task 08 complete. Implement Task 09 — Built for Endurance Section Redesign

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
- [x] Hero image — `hero-main-v2.png` — updated 20 May 2026 (replaces `hero-main.png`)
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
| 2   | Hero                | Complete    | 17 May 2026 | margin-top: -72px applied to compensate body padding-top; headline--active on first option; hero-main-v2.png swapped in 20 May 2026 |
| 3   | Identity            | Complete    | 17 May 2026 | Text only — product breakout omitted per developer instruction                             |
| 4   | Trending            | Complete    | 22 May 2026 | Task 03: redesigned to light bg (--color-bg-warm), 3-col cinematic cards, composited product images, 4th placeholder removed |
| 5   | Brand Story         | Complete    | 17 May 2026 | Image uses .png (not .jpg per spec); diagonal clip via existing .clip-diagonal-bottom global class |
| 6   | Built for Strength  | Complete    | 26 May 2026 | Task 08: rebuilt as 3 alternating 2-col rows, SectionWrapper, white bg, all black text, placeholder trending images |
| 7   | Bold Statement      | Complete    | 17 May 2026 | discipline.png used (spec says .jpg); TornEdge fill=black into Built for Endurance         |
| 8   | Built for Endurance | Complete    | 20 May 2026 | Both cards placeholder — no images available yet; gold eyebrow, clean bottom, no border breaker |
| 9   | Instagram           | Complete    | 20 May 2026 | Placeholder grid — 6 cols desktop, 4 tablet, 3 mobile; TODO comment for live feed         |
| 10  | Contact             | Complete    | 20 May 2026 | Web3Forms; WEB3FORMS_KEY env var required before launch; hCaptcha included                 |
| 11  | Footer              | Complete    | 20 May 2026 | 4-col grid; probell-logo.png used (swap when logo-light.png arrives); social icons #placeholder |
| —   | Supplements page    | Not started | —           | Placeholder only at launch                                                                 |

---

## Session Log

### Session 21 — 26 May 2026

**What was done:**

- Task 08 complete: Built for Strength fully rebuilt
- Removed: dark background, ProductCard component, 2-col card grid, grey text
- Banner row: "PERFORMANCE SERIES" red eyebrow (`.label-text--red`), "Built for Strength." display headline, black
- Three alternating 2-column rows: Row 1 & 3 image left / content right; Row 2 content left / image right
- Rows separated by `var(--space-xl)` gap — no borders, no dividers
- Row 2: content first in DOM, image gets `.bfs__img-col--mobile-first` with `order: -1` on mobile to restore image-above-content
- Images: `<Image />` from astro:assets, `border-radius: 8px`, `object-fit: contain`, natural aspect ratio, placeholder trending images
- Tags: `.label-text--red` global class (STRENGTH / POWER / INTENSITY)
- Names: `.display-text` + `.bfs__name`, `--text-section`, black
- Body: 18px, black, 1.7 line height — per spec
- Wrapped in `<SectionWrapper>` (not full bleed)
- `npm run build` passes — zero errors

**Decisions made this session:**

- `18px` raw value used for body text — spec explicitly specifies it; no matching token exists
- `border-radius: 8px` raw value — spec explicitly specifies it
- Placeholder images from `/images/trending/` used — strength-specific assets not yet available

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 20 — 26 May 2026

**What was done:**

- Task 07 (Updated) complete: Trending section rebuilt with two-part layout
- Part 1 — Banner: `50vh`, CSS `background-image` (decorative), `rgba(0,0,0,0.5)` overlay via `::after`, text anchored bottom-left; eyebrow "TRENDING" (white, label style), headline "Performance Series." (white, display font, `--text-section`)
- Banner image: `hero-main-v2.png` used — spec referenced `hero-main.png` which was deleted in Task 01
- Part 2 — Three-column grid: `repeat(3, 1fr)`, no gap, vertical `var(--color-border)` dividers via `border-right` on cols 1 & 2
- Col 1 & 3: content top, image bottom; Col 2: image top, content bottom
- Images: `<Image />` from astro:assets, `width: 100%; height: auto` (natural proportions), `border-radius: 8px`
- Content: red tag, display name (`--text-product`), 18px black descriptor, black `--text-label` detail line
- Mobile: single column, horizontal dividers replace vertical, no padding on sides
- `npm run build` passes — zero errors

**Decisions made this session:**

- Banner constrained within SectionWrapper — confirmed by developer (no full-bleed needed)
- `hero-main-v2.png` used as banner temp image; original `hero-main.png` was deleted
- `border-radius: 8px` raw value used per explicit spec

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 19 — 26 May 2026

**What was done:**

- Task 07 complete: Trending section fully rebuilt as mosaic alternating layout
- Removed: dark card backgrounds, four-column grid, `var(--color-surface)` references, warm off-white section background
- Banner row: "TRENDING" red eyebrow, "Performance Series." display headline, left aligned
- Three product rows alternating: Row 1 & 3 image left / content right; Row 2 content left / image right
- Each row: `var(--space-xl)` padding, `var(--color-border)` top border separator
- Images: `<Image />` from astro:assets, 4/3 aspect ratio, full column width, no border/radius
- Content: red "Coming Soon" tag (`.label-text--red`), display name (`--text-section`), grey descriptor, grey detail line (`.label-text`)
- Mobile: single column, image always above content (Row 2 uses `order: -1` on image-col)
- `npm run build` passes — zero errors

**Decisions made this session:**

- Row 2 reversed via DOM order (content first, image second) — simpler than CSS `direction: rtl` trick; `order: -1` on image-col restores image-above-content on mobile

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 18 — 26 May 2026

**What was done:**

- Task 06 complete: Identity section fully rebuilt
- Removed: grunge background image, top gradient fade, both previous display text lines, ink edge references, all dark-section styling
- New layout: two-column mosaic (headline left, body text right), three-stat row with `var(--color-border)` top border, CTA row
- Headline: "Stock the brand that belongs in your gym." — display font, `--text-section`, black, uppercase via `.display-text`
- Supporting text: body font, `var(--color-grey)`
- Stats: 25g / 3 / 0 with `.label-text` labels
- CTAs: "Partner With Us" → `/#contact` (`.btn-primary`), "View Products" → `/#trending` (`.btn-secondary`)
- Mobile: row1 collapses to single column, stats grid retains 3 cols with reduced gap, CTAs stack vertically
- `npm run build` passes — zero errors

**Decisions made this session:**

- Stat row stays 3 columns on mobile (short content, consistent with Brand Story stats pattern)

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 17 — 26 May 2026

**What was done:**

- Task 05 complete: White layout wrapper component + global reset
- Created `SectionWrapper.astro` — `fullBleed?: boolean` prop (default false); false applies `.wrapper` (max-width + padding via tokens), true applies `.wrapper--full-bleed` (full width, no constraint); no background set on component
- Removed Tailwind `<div class="bg-white container mx-auto px-4">` from `index.astro` — Identity, Trending and BrandStory are now direct children of `<main>`; no sections wrapped in SectionWrapper yet (per spec)
- Audited `globals.css`: body already has `background-color: var(--color-white)` and `color: var(--color-black)` — no changes required; no hardcoded dark backgrounds on generic elements found
- `npm run build` passes — zero errors

**Decisions made this session:**

- No SectionWrapper usage introduced yet — sections will be wrapped individually as each is rebuilt per spec

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 16 — 22 May 2026

**What was done:**

- Task 03 complete: Trending section redesigned to light treatment
- Added `--color-bg-warm: #F5F3EF` token to `global.css`
- Rewrote `Trending.astro`: removed `ProductCard` import, inline `<article>` cards with `<Image />` from astro:assets
- Section background changed to `var(--color-bg-warm)`, "PERFORMANCE SERIES" red eyebrow added, "TRENDING" heading in `var(--color-black)`
- Three-column grid, `var(--space-md)` gap, fourth placeholder card removed
- Each card: composited product image in 3/4 aspect-ratio wrap, transparent card background, black product name, `var(--color-border)` descriptor
- Scale hover (`transform: scale(1.03)`) approved as spec override to CLAUDE.md animation rules
- Mobile: single column grid (removes previous CSS-only horizontal scroll carousel)
- `npm run build` passes — zero errors

**Decisions made this session:**

- `--color-bg-warm: #F5F3EF` added as a global token (raw hex never used directly)
- `<Image />` from astro:assets used in place of `<img>` per CLAUDE.md rule; `:global(img)` selector used in scoped styles to target the rendered element
- Creatine descriptor: "Micronised creatine. Maximum absorption." — confirmed by developer

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 15 — 20 May 2026

**What was done:**

- Task 02 complete: Identity section redesign
- Built `InkEdge.astro` — new component, organic ink-brush SVG (viewBox 1440×180), 5 ink drips (varying 30–62px), 8 splatter dots, `fill: var(--color-black)` via CSS
- Updated `Identity.astro`: swapped narrow `max-width: 800px` container for `.container` (1400px), reduced `padding-top` from `--space-2xl` to `--space-lg`, removed `padding-bottom`, set `overflow: visible`, imported and placed `<InkEdge />` at the bottom
- Trending section: background changed from `var(--color-black)` to `var(--color-white)`, heading colour changed to `var(--color-black)` — product cards retain `var(--color-surface)` dark background (self-contained)
- `npm run build` passes — zero errors

**Decisions made this session:**

- Container widened to 1400px (using global `.container`) — fixes line 2 wrapping that occurred at `max-width: 800px`; `--text-section` held without needing a size reduction
- InkEdge placed as a child of the Identity section (not absolutely positioned) — natural document flow, `overflow: visible` on section lets drips extend below the section boundary
- Trending `padding-top` changed from `--space-2xl` to `--space-xl` to account for InkEdge extending into the visual top of the section

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 14 — 20 May 2026

**What was done:**

- Feature updates workflow introduced — all post-build tasks tracked in `src/features/feature-updates.md`
- Task 01 complete: replaced `hero-main.png` with `hero-main-v2.png` in `Hero.astro`
- No layout, copy, or other component changes
- `npm run build` passes — zero errors

**Decisions made this session:**

- `src/features/feature-updates.md` is now the authoritative source for all post-build feature tasks

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 13 — 20 May 2026

**What was done:**

- Built `Footer.astro` — black background, 1px border-top, `var(--space-xl)` top / `var(--space-lg)` bottom padding
- Four columns: Logo+tagline (2fr), Links (1fr), Products (1fr), Follow Us (1fr)
- Logo uses `probell-logo.png` — swap when dedicated `logo-light.png` asset arrives
- Links and Products columns: grey label text, red hover, `letter-spacing: 0.1em`, uppercase
- Social icons: 40×40px, `1px solid var(--color-border)`, no border radius, red bg + border on hover; both `href="#"` placeholder
- Divider `var(--space-lg)` top and bottom margin
- Copyright bar: copy left, Privacy Policy right (links to `/legal`)
- Tablet (≤1024px): 2-col grid, brand spans full width
- Mobile (≤768px): single col, all centered
- Imported `Footer` into `BaseLayout.astro` below `<slot />` — appears on all pages
- `npm run build` passes — zero errors

**Decisions made this session:**

- `probell-logo.png` used in place of spec's `logo-light.png` — asset does not exist yet
- `href="/legal"` used for Privacy Policy — page not built yet (deferred)

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 12 — 20 May 2026

**What was done:**

- Built `Contact.astro` — `var(--color-surface)` background, 2-col grid (content left, form right), single col on mobile
- Red eyebrow, display headline "Stock Probell. Be First.", grey sub-line
- Five form fields: Full Name, Business Name, Email Address, I am a... (select), Message
- Web3Forms: POSTs to `https://api.web3forms.com/submit`, access key via `import.meta.env.WEB3FORMS_KEY`
- Hidden fields: `access_key`, `subject`, `redirect=false`, honeypot checkbox
- hCaptcha div + Web3Forms client script (loads hCaptcha automatically)
- Fetch-based submission — no page reload; success replaces form (gold label), error shown inline (red label)
- Imported `Contact` into `index.astro` after `Instagram`
- `npm run build` passes — zero errors

**Decisions made this session:**

- `novalidate` on form — JS handles submission; browser validation deferred to fetch response
- `WEB3FORMS_KEY` must be set in `.env` before launch — component renders with empty string if absent

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address (needed to generate Web3Forms access key)
- Instagram URL

---

### Session 11 — 20 May 2026

**What was done:**

- Built `Instagram.astro` — black background, `@probellnutrition` handle label (`.label-text`, `var(--color-grey)`), placeholder grid
- 6-column grid desktop, 4-column tablet (≤1024px), 3-column mobile (≤768px), 2px gap
- Six `.instagram-placeholder` divs — `aspect-ratio: 1/1`, `var(--color-surface)` background
- TODO comment in component for future live feed integration
- Imported `Instagram` into `index.astro` after `BuiltForEndurance`
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
