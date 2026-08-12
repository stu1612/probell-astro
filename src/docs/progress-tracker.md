# Probell Nutrition — Progress Tracker

**Last updated: 12 Aug 2026 — Session 55**


**Pending/Deferred items**

- [ ] DNS/hosting split: confirm probellnutrition.com's MX records are 
  preserved when pointing DNS to Vercel. Screenshot current MX records 
  before any DNS change. Do not conflate SMTP/mail settings with 
  web-hosting DNS records — they're separate.

---

## Current Status

**Phase:** Post-build structural redesign
**Active section:** Sales Partner, Retailer, and Distributor pages all built, now live at flat routes `/sales`, `/retail`, `/distributor` (moved out of `/partners/*` in Session 41 — see below; the `/partners/index` hub-page scaffold this note used to mention was deleted as part of the same move, not left pending). Retailer and Distributor were developer-confirmed complete (visual check + working submission) prior to Session 40; Session 40 added a photographic hero background to all three pages, so Retailer/Distributor's prior visual sign-off predates that change and is worth a quick re-look. Sales Partner's visual verification is still outstanding. Session 42: mobile nav overlay (`Nav/NavOverlay.astro`, `Nav/NavHamburger.astro`) reworked — link list, toggle button, layout, and colors all revised across several in-session rounds of feedback — see Session 42 log; not yet developer-signed-off in-browser.
**Next action:** `/sales` visual sign-off still outstanding — developer to review in-browser directly when ready (Playwright verification is opt-in only, not a blocker — see Session 41 process note). Mobile nav overlay changes (Session 42) also still need an in-browser look. Contact router and footer/nav social links (both Session 41) have since been developer-confirmed working. Session 44: `/supplements/[slug]` rebuilt on the Session 43 playground design via new `src/components/ProductDetail/*` components; the playground route/components have since been deleted. Visual sign-off still needed on Creatine/PWO/Mass Gainer specifically (only Whey was reviewed before adoption). Session 51 (07 Aug 2026): **DEVIATION** — `/supplements` listing page rebuilt again, replacing the Session 48 `ProductCard` grid entirely (component deleted) with dark full-bleed alternating rows (`SupplementRow.astro`) using the same gym photography as the homepage `ProductStrips` — Session 48's mobile-card sign-off item is superseded, not still open. Visual sign-off needed on this new listing layout, plus a re-look at `/supplements/[slug]` now that its data source changed (see Session 51 log). All product data now lives in one consolidated `src/data/catalog.ts` (`products.ts`/`supplements.ts` deleted); `page-structure.md` updated to match. The listing page's old hero block (title/subtitle over `partner-sales.jpg`) has been removed outright, confirmed by developer — the page now opens straight into the product rows under a screen-reader-only heading. Session 52 (11 Aug 2026): mobile-only polish/bugfix pass across `HeroMobile`, `ProductStrips`/`SupplementRow` (fixed a CSS Grid bug hiding the Creatine flip-row image), and the three `ProductDetail` components — see Session 52 log. Visual sign-off on all of it still outstanding; no headless-browser tooling is available in this environment to verify automatically. Session 53 (12 Aug 2026): asset-only housekeeping (unused-image audit, `public/images/` folder/naming cleanup) — see Session 53 log; no visual or functional change, doesn't affect any outstanding sign-off item above. Session 54 (12 Aug 2026): pre-launch SEO audit against `src/features/seo-audit-brief.md` — four findings (duplicate homepage `<h1>`, skipped heading level in `Identity`, webmanifest color mismatch, missing structured data) all developer-approved and fixed — see Session 54 log. No layout/visual change, doesn't affect any outstanding sign-off item above. Session 55 (12 Aug 2026): PageSpeed Insights flagged product images shipping as unconverted `.jpg` despite going through `<Image />` — root cause was every photographic `src` sitewide being a `/public/images/...` string path rather than an `src/assets/` import, which Astro's `<Image />` can't optimize (it passes strings straight through, ignoring `format`/`width`/`height`). Fixed sitewide: all photography (products, audience cards, both hero variants, both partner-page images, the site logo) moved into `src/assets/` and imported; `coding-standards.md`'s Images section corrected since its own example documented the broken pattern. No visual change — same files, now WebP at ~55-60% smaller. See Session 55 log.

**Note on Sessions 31–33:** this work was carried out by the developer directly, without running through Claude Code sessions — logged here retroactively per developer request, sole-authorship, "off script." See entries below.

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
- [x] Hero image — `hero-main.jpg` — replaced `hero-main-v2.png` (Jun 2026); now .jpg format
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
- [x] Contact form email address — resolved Session 41: Contact section no longer has a form (replaced by the router, see Session 41 log); `mailto:info@probellnutrition.com` is the fallback contact point
- [x] Instagram account URL — resolved Session 41: `https://www.instagram.com/probellnutrition/`
- [x] Formspree account setup — moot; project used Web3Forms instead of Formspree, and Web3Forms itself was removed entirely in Session 41 (Contact section replaced with a partner router + mailto fallback)

---

## Build Sections

| #   | Section                     | Status      | Completed   | Notes                                                                                      |
| --- | --------------------------- | ----------- | ----------- | ------------------------------------------------------------------------------------------ |
| —   | Project init                | Complete    | 17 May 2026 |                                                                                            |
| —   | globals.css import          | Complete    | 17 May 2026 |                                                                                            |
| —   | BaseLayout                  | Complete    | 17 May 2026 |                                                                                            |
| 1   | Nav                         | Complete    | 17 May 2026 | Single logo asset used for both states — swap when two-variant PNGs arrive. Session 42: mobile overlay refactored, see below — not yet developer-signed-off in-browser |
| 2   | Hero                        | Complete    | 26 Jul 2026 | Session 38: split into `HeroDesktop.astro` + `HeroMobile.astro` (CSS `display` swap at 768px, `index.astro` now just the orchestrator) so mobile can be designed independently. Desktop: `hero_v2.png`, single-tier headline, bottom gradient. Mobile: `hero_v2_mobile.png`, two-tier headline layout + icon CTA row (currently commented out, developer WIP), still in active visual iteration — not yet developer-signed-off |
| 3   | Identity                    | Complete    | 11 Jun 2026 | Session 24: refactored to accept headline/body/primaryCta props; secondary CTA removed; stats row removed; CTA points to #trending. Session 50 (06 Aug 2026): rebuilt as a single centered "statement" layout — deliberate exception per `design.md` §4 — replacing the two-column split. Headline split into `headline`/`accentText`/`highlightText` props so "One Standard." (dimmed white) and "No Compromise." (accent color) render as separate spans. Below `--bp-xl` (1280px) each of the three segments stacks on its own line |
| 4   | Banner (ui)                 | Removed     | —           | Built Session 24 (80vh; grid 1fr 1fr, empty left cell, content right; background-image from prop). Removed 06 Aug 2026 — `ui/Banner.astro` deleted along with its (already-commented-out) usage in `index.astro`; see below |
| 5   | ProductStrips               | Complete    | 11 Jun 2026 | Session 24: NEW component replacing Trending + BuiltForStrength; 3 alternating full-width strips — Whey 100 Protein (image right), Creatine (image left, gold), Pre-Workout (muted/coming soon); ghost number watermark; stat callout on strip 01. Session 50 (06 Aug 2026): 4th entry (Mass Gainer, id:04) added to `src/data/products.ts` — layout is fully data-driven off `flip`/`overlay`/`imageMuted` flags, no changes needed in `ProductStrip.astro` itself; the `overlay: true` it was initially given (which put it on the full-bleed pattern) was removed so it matched id:01's standard split layout as requested. Session 51 (07 Aug 2026): data source repointed from `src/data/products.ts` to the new consolidated `src/data/catalog.ts` — see below |
| 6   | Brand Story / Emotion       | Complete    | 11 Jun 2026 | Session 24: fully redesigned as white-bg social proof section (`#emotion`); large display headline; 4-stat list (1fr 2fr grid, sticky left anchor); image + CTA below; no longer uses gym-interior image or diagonal clip |
| 7   | Trending                    | Removed     | —           | Removed Session 24 — replaced by Banner + ProductStrips                                    |
| 8   | Built for Strength          | Removed     | —           | Removed Session 24 — product content merged into ProductStrips                             |
| 9   | Bold Statement              | Removed     | —           | Removed Session 24 — component deleted                                                     |
| 10  | Built for Endurance         | Removed     | —           | Removed Session 24 — Pre-Workout strip in ProductStrips serves as placeholder               |
| 11  | Instagram                   | Removed     | —           | Removed Session 24 — component deleted; can be reinstated when account URL confirmed       |
| 12  | Contact                     | Complete    | 30 Jul 2026 | Session 41: Web3Forms form removed entirely (form markup, `WEB3FORMS_KEY`, hCaptcha, `CONTACT_SUBJECT` constant) and replaced with a 3-option partner router (`ContactRouter.astro`, renamed from `ContactForm.astro`) linking to `/sales`, `/distributor`, `/retail`, plus a plain `mailto:info@probellnutrition.com` fallback — no form, no JS, no third-party service. `WEB3FORMS_KEY` also removed from `.env`. Per `src/features/contact-router-route-flatten.md` |
| 13  | Footer                      | Complete    | 30 Jul 2026 | 4-col grid; probell-logo.png used (swap when logo-light.png arrives). Session 41: social icons now point to real URLs (`facebook.com/probellnutrition`, `instagram.com/probellnutrition`) and open in a new tab (`target="_blank" rel="noopener noreferrer"`) — same change applied to `ui/SocialIcons.astro` (used in the mobile nav overlay). Footer background switched from `var(--color-black)` to new `var(--color-black-true)` token — developer confirmed the pure-`#000` background is intentional, not a mistake; see `design.md` Section 1 |
| —   | Supplements page            | Complete    | 14 Jun 2026 | Listing + detail pages built (Task 14). Session 44 (03 Aug 2026): detail page (`[slug].astro`) rebuilt on the bold full-bleed-hero design trialled in Session 43's playground — see Session 44 log; the "dark hero + white 4-stat body" layout this row originally described is superseded, not additive. Session 48 (03 Aug 2026): listing page's product card given a dedicated mobile layout and consolidated out of the page into `src/components/ui/ProductCard.astro` (also removed `global.css`'s dead, unused `.product-card` primitive) — see Session 48 log. Session 51 (07 Aug 2026): **DEVIATION** — listing page rebuilt again on new gym-photography product images; `ProductCard.astro` and its grid layout deleted entirely, replaced by dark full-bleed alternating rows (`SupplementRow.astro`). Both listing and detail pages now read from the new consolidated `src/data/catalog.ts` — see Session 51 log |
| —   | AudienceCards                | Complete    | 10 Jul 2026 | Solo dev session (not run through Claude Code) — new homepage section, 4-card grid linking to `/supplements` and the three partner routes; see Session 32 |
| —   | Sales Partner page (`/sales`) | Built — pending visual verification | 19 Jul 2026 | Hero, Why Probell, How It Works, application form; FAQ cut (deviation, see Session 34). `src/lib/hubspot.ts` created as shared submission utility for all three partner forms. HubSpot submission functionally confirmed working. Session 40: hero switched from text-only to photographic background (`partner-sales.jpg`, flat `rgba(0,0,0,0.5)` scrim). Session 41: route moved from `/partners/sales` to `/sales` (see below). Visual sign-off still outstanding — developer to review in-browser when ready, not tooling-blocked (see Session 41 process note) |
| —   | Retailer page (`/retail`)     | Complete    | 19 Jul 2026 | Hero, short "Why Stock Probell" list (deliberately not a stat-chip grid per spec), pricing-is-request-not-publish framing, How It Works, request form (Business Name, Your Name, Email, Phone, Message; no Business Type dropdown, no location field, both deliberate per spec). No automated confirmation email (per spec — inline success only). Reuses `src/lib/hubspot.ts`. Developer-confirmed: visual check done, submission working. Session 40: hero switched from text-only to photographic background (`partner-retail.jpg`, flat `rgba(0,0,0,0.5)` scrim). Session 41: route moved from `/partners/retail` to `/retail` |
| —   | Distributor page (`/distributor`) | Complete | 19 Jul 2026 | Deliberately minimal per spec — hero (gold eyebrow, distinct from red on the other two), one short positioning paragraph (no stat chips, no numbers), minimal contact form (Business Name, Your Name, Contact Email, Phone; no message field, no FAQ, no how-it-works). No automated confirmation email (spec: would contradict the page's "not automated forms" positioning). Reuses `src/lib/hubspot.ts`. Developer-confirmed: visual check done, submission working (3/3 pass). Session 40: hero switched from text-only to photographic background (`distributor.jpg`, flat `rgba(0,0,0,0.5)` scrim). Session 41: route moved from `/partners/distributor` to `/distributor` |
| —   | Partner index page (`/partners/index`) | Removed | 30 Jul 2026 | Session 41: deleted along with the `/partners/` directory as part of the route flatten — no spec had been written for it, and per `src/features/contact-router-route-flatten.md` nothing links to `/partners` itself, so the nested segment was unused taxonomy. Developer confirmed deletion (not a deferral) when asked |

---

## Session Log

### Session 55 — 12 Aug 2026

**What was done:**

- Developer ran a PageSpeed Insights report and flagged that product images (`whey.jpg`, `creatine.jpg`, `pre-workout.jpg`) were shipping as large, unconverted `.jpg` files with "use a modern format" warnings, despite `ProductStrip.astro`/`SupplementRow.astro` correctly using `<Image />` from `astro:assets` with `format="webp"` set.
- **Root cause:** `src/data/catalog.ts`'s `image`/`slugImage` fields were `/public/images/...` string paths, not `src/assets/` imports. Astro's `<Image />` can only run its build-time Sharp pipeline (WebP conversion, resizing) on imported assets — a string path is passed straight through as a plain `<img src="...">`, silently ignoring `format`, `width`, and `height`. Confirmed via `npx astro build`: before the fix, product photography built with zero `_astro/*.webp` output for these files; after, all converted (e.g. `whey.jpg` 187KB → 74KB webp, ~60% smaller).
- Checked whether this was product-only or sitewide — it was sitewide. Every `<Image />` consumer in the project (`AudienceCard.astro`, `HeroDesktop.astro`, `HeroMobile.astro`, `BrandCtaBlock.astro`, `NavLogo.astro`, and the three partner-page heroes in `distributor.astro`/`sales.astro`/`retail.astro`) had the same string-path bug, because `coding-standards.md`'s own "Images" section documented exactly this broken pattern as the example to follow.
- Fixed sitewide: created `src/assets/{products,audience,hero,partners,icons}/`, moved every photographic asset and the site logo there via `git mv`, added an `@assets/*` path alias to `tsconfig.json` (matching the existing `@components`/`@data`/etc. convention), and updated every consumer to import the asset and pass the imported module to `<Image src={...}>` instead of a string.
- Two consumers referenced the moved logo file as a plain URL string outside of `<Image />` and would have 404'd once the file moved: `Footer/index.astro` (a raw `<img>` tag — itself a pre-existing `coding-standards.md` violation, fixed to use `<Image />` while touching this file) and `BaseLayout.astro`'s `Organization` JSON-LD `logo` field (updated to `new URL(probellLogo.src, Astro.site).href`, matching the pattern already used for the `Product` schema's `image` field on `/supplements/[slug]`).
- Deleted `AudienceCard.astro`'s `placeholderImage` fallback (`card.image ?? placeholderImage`) — `audience-cards.ts`'s `image` field is required and always set, so the fallback (and the 424KB `placeholder.jpg` behind it) was unreachable dead code, surfaced while migrating that file's images.
- Left two files in `public/images/` deliberately: `og-image.jpg` (must stay a static URL for social-share meta tags) and `man-holding-kettlebell.jpg` (used as a CSS `url()` background in `Contact/index.astro`, which `<Image />` can't touch).
- Corrected `coding-standards.md`'s "Images" section — its own `<Image src="/images/hero/hero-main.jpg">` example was the exact anti-pattern that caused this bug. Replaced with an import-based example and an explicit rule against string `src` paths, so the mistake doesn't get reintroduced.
- Verified with `npx astro check` (0 errors) and `npx astro build` (14 pages, 16 images optimized to WebP, confirmed via `grep` on built HTML that both webp asset paths and the hashed logo/schema URLs resolve correctly) after every stage of the migration, including after the Footer/BaseLayout fix.
- Ran a full image-size/dimension audit across `public/images/` + `src/assets/` at the developer's request (for manual JPG compression) — reported separately in-conversation, not duplicated here since the file sizes will change once the developer compresses the sources.

**Decisions made this session:**

- Fixed the bug sitewide in one pass rather than product-only, once it was clear the same broken pattern was baked into `coding-standards.md`'s own documented example — developer confirmed sitewide scope before proceeding.
- Removed `AudienceCard.astro`'s dead placeholder fallback rather than migrating it alongside the real images — it was provably unreachable, not a judgment call.
- `og-image.jpg` and `man-holding-kettlebell.jpg` deliberately left in `public/images/` — architecturally can't go through `<Image />` (static meta URL / CSS background), not an oversight.

**Decisions still open:**

- Developer to manually compress source JPGs (see in-conversation size audit — `retailer.jpg` 408KB, `partner-pages-hero.jpg` 404KB, and the other audience/hero/partner images are the largest remaining) and re-supply them; `<Image />` will re-optimize whatever's dropped into `src/assets/` on the next build.

---

### Session 54 — 12 Aug 2026

**What was done:**

- Ran the pre-launch SEO audit specified in `src/features/seo-audit-brief.md` (page-level structure, images, favicon/webmanifest, structured data, technical/route-flatten checks) across all 14 routes, checking findings against actual `npm run build` output rather than source alone. Reported findings first, per the brief's "read/report only" instruction; all four fixes below were applied only after developer approval, one at a time.
- **Duplicate `<h1>` on homepage:** `HeroDesktop.astro` and `HeroMobile.astro` both render unconditionally into the DOM — only CSS `display` toggles visibility per breakpoint — so two `<h1>` elements existed in the same page source, confirmed in built `dist/index.html`. Fixed by keeping the semantic `<h1>` on `HeroMobile.astro` (Google's default crawl/indexing behavior is mobile-first) and demoting `HeroDesktop.astro`'s to a `<div>`. No visual change — all styling is class-based (`.headline`), not tag-based.
- **Skipped heading level:** homepage went `<h1>` (Hero) straight to `<h4>` (`Identity/index.astro`), skipping `<h2>`/`<h3>`. Changed to `<h2>` — no visual change, font-size comes entirely from `.identity__headline`/`.display-text` classes. `Identity` is only used on the homepage, so no other page's hierarchy was affected. Rebuilt and confirmed the full homepage heading order is now clean: h1 → h3 (mobile hero subline) → h2 (Identity) → h3 (product strips) → h2 → h3 → h2 → h2 → h2, no skips.
- **Webmanifest color mismatch:** `site.webmanifest`'s `theme_color`/`background_color` were `#000000` (`--color-black-true`) where the brief specified they should match `--color-black`. Updated both to `#121213`.
- **Missing structured data:** no JSON-LD existed anywhere on the site. Added an `Organization` schema (name, legal name, URL, logo, brand description reused verbatim from the homepage meta description, email, address sourced from `legal.ts`) sitewide in `BaseLayout.astro`, and a `Product` schema (name, description, image, brand) on each of the 4 `/supplements/[slug]` pages. Deliberately no `offers`/price fields — the site is B2B enquiry-based, not ecommerce.
- Verified with `npm run build` after each fix (14 pages, zero errors) and direct inspection of the built HTML/JSON-LD output, not just source.
- Developer also asked to close out the long-standing `favicon-48x48.png` gap (file existed on disk since Session 46 but was linked nowhere, flagged again in Sessions 47/49): added a `<link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />` to `BaseLayout.astro` and a matching `48x48` entry to `site.webmanifest`'s `icons` array. Rebuilt and confirmed the link tag renders in the built HTML.

**Decisions made this session:**

- Mobile hero variant (`HeroMobile.astro`) holds the canonical `<h1>`, desktop variant demoted to a `<div>` — chosen over the reverse because Google's default crawl/indexing behavior is mobile-first.
- Product structured data intentionally omits `offers`/pricing — matches the site's no-ecommerce, enquiry-only positioning already established elsewhere (`legal.ts`'s "not an ecommerce store" language, Retailer/Distributor page copy).
- Organization schema's `description` field reuses the homepage's existing approved meta description rather than new marketing copy, per standing "no unrequested copy" rule.
- `favicon-48x48.png`'s multi-session "flagged, not fixed" status resolved — developer confirmed it should be wired in, closing out the item carried since Session 46/47.

**Decisions still open:**

- None.

---

### Session 53 — 12 Aug 2026

**What was done:**

- **Unused-image audit:** cross-referenced every file in `public/images/` (and `src/assets/`) against actual `image`/`src` references across `.astro`/`.ts` source. Found and removed, across a few rounds as the audit went deeper:
  - Superseded originals left behind by the recent audience-cards rework: `audience/distributor.jpg`, `audience/retailer.jpg`, `audience/partners.jpg`, `audience/shop_2.jpg`.
  - Long-orphaned assets already flagged as loose ends in earlier sessions but never deleted: `hero/hero_img.jpg` (replaced by `hero_v2.jpg` back in an earlier session), `bold-statement/discipline.png` (orphaned since Creatine's image swapped to `creatine_bg.jpg`; Session 51 had explicitly left the delete decision open), `lifestyle/athlete-walking.jpg` (not referenced by current `catalog.ts`), `partners/partner-retail.jpg` (belonged to the old `/partners/retail.astro` route, moved/replaced in Session 41), `lifestyle/cpb-gym.jpg` and `lifestyle/three-flavours.jpg` (both fully superseded per Session 51's log but not removed at the time).
  - Default Astro starter-template assets, never referenced: `src/assets/astro.svg`, `src/assets/background.svg`.
  - `src/data/categories.ts` — not imported anywhere; its `trending/*.jpg` paths pointed at a `public/images/trending/` folder that no longer exists on disk. Dead file from before the `catalog.ts` consolidation, removed.
- **Folder/naming cleanup**, developer-requested once the audit was done: kept the existing folder-per-purpose structure (`hero/`, `products/`, `audience/`, `partners/`, `lifestyle/`, `icons/`) rather than flattening — judged easier to navigate at this asset count, and folder segments don't meaningfully affect SEO (filename does more work than path). Within that:
  - Removed the now-stale `bold-statement/` folder (that homepage section was deleted in the Session 24 redesign; the one file left in it, `focus.jpg`, is actually the shared `/supplements/[slug]` detail-page hero) — moved to `products/supplement-detail-hero.jpg`.
  - Moved `audience/audience_bg.jpg` → `partners/partner-pages-hero.jpg`: it's the shared hero background for the `/sales`, `/retail`, `/distributor` pages, not a homepage audience-card image, so it belongs with the other partner-program asset (`partner-sales.jpg`, itself renamed to `partner-cta.jpg` to disambiguate the two).
  - Dropped version/variant suffixes (`_v2`, `_v3`, `_bg`) sitewide in favor of names describing content: `audience/shop_v2.jpg`→`supplements.jpg`, `retailer_v3.jpg`→`retailer.jpg`, `distributor_v2.jpg`→`distributor.jpg`, `sales_v2.jpg`→`sales.jpg`, `card-placeholder-audience.jpg`→`placeholder.jpg`; `products/creatine_bg.jpg`→`creatine.jpg`, `pwo_bg.jpg`→`pre-workout.jpg`, `gainer.jpg`→`mass-gainer.jpg` (now matches the product's actual name rather than its internal slug); `hero/hero_v2.jpg`/`hero_v2_mobile.jpg`→`homepage-hero.jpg`/`homepage-hero-mobile.jpg`.
  - Updated every reference across `src/data/audience-cards.ts`, `src/data/catalog.ts` (4 `image` + 4 `slugImage` fields), `src/pages/sales.astro`/`retail.astro`/`distributor.astro`, `src/components/AudienceCards/AudienceCard.astro`, `src/components/BrandStory/BrandCtaBlock.astro`, `src/components/Hero/HeroDesktop.astro`/`HeroMobile.astro`.
- Verified with a stale-path grep (no old filenames/paths left anywhere in `src/`) and a full-path existence check (every `/images/...` reference in source resolves to a real file on disk), then `npx astro check` — 0 errors, 0 warnings, 1 pre-existing unrelated hint.
- Purely an asset/housekeeping pass — no component logic, layout, or copy changed. All changes left unstaged for developer review/commit, per standing no-auto-commit rule.

**Decisions made this session:**

- Folder-per-purpose (`hero/`, `products/`, `audience/`, `partners/`, etc.) confirmed as the preferred `public/images/` structure over a single flat folder, given the current asset count.
- File-naming convention going forward: name for content/purpose, not version (no `_v2`/`_v3`), and match a product's real name over its internal slug where they differ (e.g. `mass-gainer.jpg`, not `gainer.jpg`).
- `discipline.png`'s fate (left open as a question in Session 51) resolved: deleted, confirmed orphaned.

**Decisions still open:**

- None new. Doesn't touch any of the outstanding visual sign-off items from Sessions 40/42/44/51/52.

---

### Session 52 — 11 Aug 2026

**What was done:**

- **Hero (mobile):** `HeroMobile.astro`'s `.hero__overlay-bottom` gradient endpoint changed from pure `rgba(0,0,0,1)` to `rgba(18,18,19,1)` (the RGB value of `--color-black`) — matches the technique `HeroDesktop.astro` already used, so the gradient fades into the same color as the `SectionWrapper bg="black"` section that follows instead of leaving a visible seam against the section's actual `#121213` background.
- Renamed `HeroMobile.astro`'s headline classes for clarity — `.headline`/`.headline-2`/`.headline__line--1`/`.headline__line--2` (a scheme where the child element names didn't actually reference their own parent block) replaced with self-referential `.hero-headline`/`.hero-headline__accent`/`.hero-subheadline`/`.hero-subheadline__accent`.
- Font sizes for the accent words switched from raw `clamp()` values to plain `rem` — developer feedback: this is a mobile-only component (bounded viewport range), so the `vw`-scaling clamp was unnecessary; also confirmed these are component-scoped one-off values and should live in the component's own `<style>` block, not be promoted to new `global.css` tokens (a token was tried first, then reverted per developer correction — see `[[feedback-scoped-vs-global-tokens]]` memory).
- Gave the previously-unstyled secondary headline spans ("the Grind", "the only"/"you can lift") explicit sizes instead of inheriting default browser heading sizes, and added the `drop-shadow(0px 4px 4px rgba(0,0,0,0.25))` filter already used on `HeroDesktop.astro`'s headline — both aimed at the developer's "make text more prominent, image still center stage" request from a screenshot review.
- **ProductStrips / SupplementRow — mobile image-column bug:** developer reported the `ps__strip--flip` image disappearing on mobile for the Creatine strip specifically (Mass Gainer, also flipped, was fine). Root cause: CSS Grid items default to `min-width: auto`, so a grid item won't shrink below its content's intrinsic size — "Creatine" is a single unbreakable word at a large display font-size (`--text-statement`), and on mobile the image track is only `1fr` of `4fr` total, so the text forced the content column past its share and squeezed the image column, in Creatine's case down to nothing (Mass Gainer's two-word name could wrap, so it only lost a thin sliver). Fixed by adding `min-width: 0` to `.ps__content`/`.ps__img-wrap` in `ProductStrip.astro`, letting the grid actually honor its `fr` proportions regardless of content length.
- Audited the rest of the codebase for the same grid/flex `min-width:auto` pattern. Found one live duplicate — `SupplementRow.astro` (`/supplements` listing page) is structurally identical to `ProductStrip.astro` (same asymmetric mobile grid, same `--text-statement` product name, same missing `min-width: 0`) and got the same fix. Everything else checked (`BrandStatsBlock.astro`, `ProductUsage.astro`, `ProductStats.astro` at the time of the audit, `BrandCtaBlock.astro`, `Contact/index.astro`, `ProductOverview.astro`, `Footer/index.astro`) was judged low/no risk — either already using the `auto 1fr` pattern that sidesteps the bug, collapses to a single column before the risk width, or only ever holds short/wrapping text. (`ProductStats.astro` was revisited and did need the fix — see below, raised separately by the developer later in the session.)
- **ProductDetail — mobile hero (`ProductHero.astro`):**
  - `.pd-hero__inner` changed to `position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;` on mobile (developer-authored change, applied from their live DevTools edit) — centers the content block instead of bottom-aligning it via the parent's flex layout. Padding value taken from the same DevTools edit (`10px`) was swapped for the closest token, `var(--space-xs)`, per developer follow-up request to use the spacing scale rather than a raw value.
  - `.pd-hero__scrim` given a mobile-only override: two directional gradients (left edge and bottom edge, fading to transparent by the 55% mark) layered over a lighter flat wash, replacing the old uniform `rgba(0,0,0,0.5)` — keeps the text corner legible without dimming the whole photo evenly, per developer request.
  - The hero CTA (`.btn-secondary` in markup) recolored to `.btn-primary`'s red/white palette via a mobile-only scoped override (`.pd-hero__actions .btn-secondary`), rather than swapping the markup class — desktop keeps the existing ghost-button look.
- **ProductDetail — mobile stats (`ProductStats.astro`):**
  - Fixed asymmetric top/bottom spacing: `.pd-stats`'s mobile `margin-top: calc(var(--space-lg) * -1)` (−4rem, meant to overlap the hero image) exceeded each item's own `padding-top` (`var(--space-md)`, 2rem), so the overlap fully consumed the padding and the stat numbers ended up flush against (or past) the image edge, while the untouched bottom padding rendered at its full value. Set `margin-top: 0` on mobile — drops the overlap effect specifically at this breakpoint in favor of genuinely equal `var(--space-md)` padding top and bottom.
  - Added `min-width: 0` to `.pd-stats__item` — same Grid `min-width:auto` bug as above; a wide value like "100%" could force its column past its `1fr` share. Also reduced `.pd-stats__value`'s mobile font-size from `--text-stat-value` to `--text-statement-md` per developer request, now that the columns split evenly regardless.
  - Removed the mobile border logic entirely (`.pd-stats__item { border-left: none; border-top: none; }`) rather than fix the inverted `nth-child` selectors that had been stripping the intended divider from item 2 while leaving a stray one on item 3 — items are now separated by padding/whitespace alone. The container's gold `border-top` accent line (unconditional, unaffected by the bug) was left as-is.
- **ProductDetail — mobile overview (`ProductOverview.astro`):** `.pd-content-grid`'s `padding-block` reduced from `var(--space-xl)` to `var(--space-md)` inside its existing `@media (max-width: 1024px)` block, per developer request.
- No headless browser/Playwright tooling is available in this environment (`chromium-cli`, Playwright not installed) — all of the above was implemented from developer-supplied screenshots and CSS reasoning, not visually verified in-session. Per the standing Session 41 process note, this isn't treated as a blocker; developer to review in-browser at mobile widths.

**Decisions made this session:**

- Component-scoped, single-use font-size values (Hero's mobile headline sizes) stay as raw values in the component's own `<style>` block rather than being promoted to `global.css` tokens — the "no raw values" rule in `coding-standards.md` is for values reused across components, not one-off numbers.
- `min-width: 0` established as the fix for the CSS Grid content-overflow pattern (unbreakable long text forcing a track past its `fr` share) — applied wherever it was an active bug (`ProductStrip.astro`, `SupplementRow.astro`, `ProductStats.astro`), not applied defensively where content is short/wrapping and there's no real risk.
- `ProductStats.astro`'s mobile stat-strip no longer overlaps the hero image (`margin-top: 0`) — the "breaks out over the hero's bottom edge" design intentionally scoped to desktop only now, since the overlap amount couldn't coexist with equal top/bottom padding at mobile widths.

**Decisions still open:**

- Visual sign-off on all of this session's mobile changes (Hero, ProductStrips/SupplementRow flip fix, and the three ProductDetail components) — developer to check in-browser at mobile widths; no automated screenshot verification was possible in this environment.

---

### Session 51 — 07 Aug 2026

**What was done:**

- **DEVIATION:** `/supplements` listing page redesigned per developer direction — moved away from single isolated kettlebell product cutouts to the same full-bleed gym-photography direction already used by the homepage `ProductStrips` (e.g. the athlete gripping the Whey kettlebell tub). Since that photography carries its own environment/lighting rather than being an isolated cutout, the white `ProductCard` grid it previously used no longer fit — replaced with a dark, full-bleed, alternating editorial layout (new `src/components/SupplementRow.astro`), matching `page-structure.md`'s original (pre-Session-48) description of the listing page more than it diverges from current spec.
- Along the way, developer raised a broader question: with only 4 launch products, was it worth collapsing the two parallel data files (`src/data/products.ts` for the homepage strips, `src/data/supplements.ts` for the listing/detail pages) into one source, to stop them drifting apart? Confirmed worth doing — live proof of the drift risk surfaced immediately: `products.ts`'s `whey` image had already been updated to the new photography (`whey.jpg`) while `supplements.ts`'s listing image still pointed at an old placeholder cutout (`whey_new.png`).
- New `src/data/catalog.ts` built as the single source of truth for all 4 products, replacing both old files. Migrated component by component, developer-reviewed and confirmed at each stage: `ProductStrips`/`ProductStrip.astro` (homepage) first, then the new `/supplements` listing, then `src/components/ProductDetail/*` + `[slug].astro` (detail pages) last. `src/data/products.ts`, `src/data/supplements.ts`, and `src/components/ui/ProductCard.astro` deleted once nothing referenced them.
- Merge decisions, confirmed with developer along the way:
  - Dropped dead/unused fields rather than carrying them forward: `label`/`labelAccent` (never read — `ProductStrip` hardcodes the eyebrow color), `backgroundImage` (never read — `ProductHero` uses `slugImage`), `href` (now derived as `/supplements/${slug}`).
  - `category` conflict resolved in favor of `products.ts`'s branded pillar names ("Foundation", "Power", "Ignite", "Surplus") over `supplements.ts`'s plain slug-echo ("whey", "creatine"...).
  - New `status: "available" | "removed"` field added, explicitly as a visibility safeguard only — developer clarified this is not a "coming soon" marketing state (rejected that framing outright). All 4 products, including Pre-Workout and Mass Gainer, are `"available"` — they're recognised as fully live products, not pending launch. `ProductStrips`, the `/supplements` listing, and `[slug].astro`'s `getStaticPaths` all filter on this field, so setting a product to `"removed"` pulls it from all three surfaces at once.
  - New `bestFor` field added per developer request — one-sentence athlete-fit line per product, shown on the new listing rows.
  - `description` (canonical long-form detail-page copy) initially reused as-is for the homepage strip's body text; developer flagged the result as too heavy for the strip's narrow column. Added a separate hand-written `excerpt` field — a short key-message version, not a mechanical first-sentence slice — used by both the homepage strips and the new listing rows.
- Verified with `npx astro check` (0 errors) and a full `npm run build` (all 14 pages, including all 4 `/supplements/[slug]` routes) after each migration step, plus spot-rendered `/`, `/supplements`, and `/supplements/whey` to confirm content and stat/eyebrow values matched expectations.
- `page-structure.md` updated to match: Supplements section rewritten for the Session 51 listing rebuild and the `catalog.ts` data source; data-files reference table's `products.ts`/`supplements.ts` rows replaced with a single `catalog.ts` row; component file tree updated to include `ProductDetail/` and `SupplementRow.astro`, and the `ProductCard.astro` deletion note extended to cover both the Session 28 file and the Session 48 `ui/ProductCard.astro` this session also deleted.
- Developer made several further edits directly in the IDE alongside this session's work (not run through this Claude Code session) — reviewed the full working-tree diff and logging retroactively, per the pattern established in Session 49:
  - `src/pages/supplements/index.astro`: the page's `#supplements-hero` block (dark hero, "Supplements." headline) commented out, not deleted; a screen-reader-only `<h1>Supplements</h1>` added so the page still has a real heading now that the hero's own `<h1>` isn't rendered. Reflected in `page-structure.md`'s Supplements section.
  - `src/data/stats.ts`: `STATS` content rewritten from protein-specific figures ("25g protein", "100% whey isolate", "0g fillers", "3 products") to brand-standard figures ("0 proprietary blends", "4 formulations... one standard", "100% label accuracy", "GMP" manufacturing) — consistent with this session's confirmation that all 4 products, not 3, are live.
  - `src/components/Hero/HeroMobile.astro`: headline markup changed from `<p>`/`<p>` to `<h1>`/`<h3>` for correct heading semantics; the `headline__line--1` accent class moved from the second headline's "supplement" line to the first headline's "Built for" line.
  - `src/components/BrandStory/BrandCtaBlock.astro`: CTA image swapped from `cpb-gym.jpg` to `partner-sales.jpg`; the CTA link markup was also reformatted (single-line vs. multi-line) with no functional change.
- Once the developer confirmed the above was reconciled, did a final cleanup pass: the commented-out `#supplements-hero` block and its now-dead CSS (`.sup-hero__image`, `.sup-hero__overlay`, `.sup-hero`, `.sup-hero__eyebrow`, `.sup-hero__title`, `.sup-hero__sub`, and their responsive rule) removed from `src/pages/supplements/index.astro` outright rather than left commented. Also removed two leftovers from the `catalog.ts` merge: `public/images/products/whey_new.png` (the old isolated-cutout image, superseded by the new gym photography and no longer referenced anywhere) and the dead `DEFAULT_PRODUCT_BACKGROUND` export in `catalog.ts` (pointed at `products/backgrounds/default-product-bg.jpg`, a file that never existed on disk and wasn't used by any product entry). Re-verified with `npx astro check` (0 errors) and `npm run build` (all 14 pages) after removal.

**Decisions made this session:**

- **DEVIATION:** `/supplements` listing page's visual direction and layout changed (gym-photography full-bleed rows replacing the white card grid) — diverges from the page's current build-section entry, per explicit developer instruction; not treated as an error to correct.
- Single consolidated `src/data/catalog.ts` confirmed as the ongoing single source of truth for all product data — `products.ts` and `supplements.ts` are gone, not just deprecated.
- `status` field's meaning is locked as a pure visibility safeguard (`available`/`removed`) — no "coming soon" value exists or should be added; that distinction, if ever needed again, will need a different mechanism.

**Decisions still open:**

- Visual sign-off on the new `/supplements` listing layout and a re-look at `/supplements/[slug]` (data source only changed, but worth a pass given the migration).

---

### Session 50 — 06 Aug 2026

**What was done:**

- Identity section (`src/components/Identity/index.astro`) redesigned from the original two-column split (headline/CTA one side, body text the other) into a single centered "statement" layout — a deliberate exception to `design.md` §4's "left-align by default" rule, chosen specifically because Identity sits between Hero and the (then-still-present) Banner, both of which anchor their headline left; centering it was the clearest way to break the repeated pattern.
- Headline copy split into three props — `headline`, `accentText`, `highlightText` — so the tagline "Stock the brand that belongs in your gym. One Standard. No Compromise." can style its trailing phrases differently: `accentText` ("One Standard.") renders dimmed (`color: var(--color-white)` at `opacity: 0.5`, the token-based-opacity pattern already established in `design.md` for ghost numbers), `highlightText` ("No Compromise.") renders in an accent color. Mirrors `Banner.astro`'s existing pattern of passing headline text as separate props rather than embedding markup in a single string.
- Responsive behavior: below `--bp-xl` (1280px — chosen over an initial 1040px guess per developer feedback that 1040 didn't hold up on modern laptop widths) the three headline segments each stack onto their own line via `display: flex; flex-direction: column` on the parent, rather than wrapping naturally mid-sentence; applies down through tablet and mobile since it's a `max-width` query. Same breakpoint also governs the section's mobile padding and CTA stacking, consolidated into one query.
- Per developer instruction, the original two-column markup/CSS was initially kept as comments (not deleted) during active iteration on the new layout, then removed outright once the developer signed off on the centered design — `Identity/index.astro` now contains only the current layout.
- `src/data/products.ts`: developer added a 4th product entry (`id: "04"`, Mass Gainer) but it initially had `overlay: true`, which put it on `ProductStrip.astro`'s full-bleed background-image pattern (shared with id:03) instead of the standard split layout id:01 uses. Removed the flag — confirmed `ProductStrip.astro` needed no changes since its layout is already fully driven by the `flip`/`overlay`/`imageMuted` data flags, not by id.
- `ui/Banner.astro` removed from the project entirely, per developer instruction (the component and its usage in `index.astro` had already been commented out ahead of this). Deleted the component file; removed the dead import and commented-out usage block from `src/pages/index.astro`; updated `page-structure.md` (section-map code sample, section table — renumbered rows 5–8, `ui/` folder tree, page-level-config note) and this file's Build Sections table to reflect the removal. `progress-tracker.md`/`feature-updates.md` entries from earlier sessions that mention Banner were left untouched as historical record, consistent with how other removed components (Trending, BuiltForStrength, etc.) are handled.

**Decisions made this session:**

- Centered "statement" layout for Identity confirmed by developer as the intended direction (not just explored) — implemented and iterated on directly (headline color/opacity treatment, breakpoint tuning) rather than left as a proposal.
- Original two-column Identity code deleted outright once the new layout was signed off — no longer kept for revert.
- `ui/Banner.astro` confirmed removed, not deferred — deleted along with every reference found in code and in the "current state" docs (`page-structure.md`, this file's Build Sections table).

---

### Session 49 — 06 Aug 2026

**What was done:**

- Developer made a round of image-asset edits directly (outside a Claude Code session, similar to Sessions 31–33) before this session started; reviewed the working-tree diff and logged it here retroactively per developer request.
- Two new dedicated product photos added: `public/images/bold-statement/focus.jpg` and `public/images/products/gainer_bg.jpg`.
- `src/data/products.ts` (homepage product strips): Creatine's `image` swapped from `discipline.png` to `creatine_bg.jpg`; Pre-Workout's `image` swapped from the reused `hero_img.jpg` to its own `pwo_bg.jpg`.
- `src/data/supplements.ts` (`/supplements/[slug]` hero images): Whey, Pre-Workout, and Mass Gainer had all three incorrectly shared the same `slugImage` placeholder (`creatine_bg.jpg`, left over from earlier work). Now each has distinct imagery — Whey → `athlete-walking.jpg`, Pre-Workout → `pwo_bg.jpg`, Mass Gainer → `gainer_bg.jpg` (new asset). The standalone `creatine` supplement entry was untouched and still correctly uses `creatine_bg.jpg`.
- `src/pages/index.astro`: the "Trending" `Banner` component's `image` swapped from `three-flavours.jpg` to the new `focus.jpg`.
- Also reviewed, at developer request, which files under `public/images/` had no code references at all (checked against `.astro`/`.ts` source, not docs). Developer had already deleted seven of them from the working tree prior to this session: `audience/shop.jpg`, `audience/shop_1.jpg`, `hero/hero-main.jpg` (superseded by `hero_v2.jpg`/`hero_v2_mobile.jpg` when `Hero.astro` was replaced by `HeroDesktop`/`HeroMobile`), `icons/favicon-logo.png` (superseded by `probell-logo.png`), and all three `trending/*.jpg` files (only ever referenced by `src/data/categories.ts`, which nothing imports — dead data file, presumably left over from the Session 24 homepage redesign that removed the Trending section).
- Confirmed all edits are functionally sound: `Banner.astro` renders `image` as a plain CSS `background-image` (no `alt` requirement to update), and every new/repointed path exists on disk.

**Newly orphaned by this session's edits — not deleted, flagging for a decision:**

- `public/images/bold-statement/discipline.png` — was Creatine's only reference in `products.ts`; now unreferenced anywhere in `src/`.
- `public/images/hero/hero_img.jpg` — was Pre-Workout's only reference in `products.ts`; now unreferenced anywhere in `src/`.

**Still unused, not part of this session's edits (carried over, developer's call whether to delete):**

- `public/images/products/pwo_bg.jpg` was unused before this session's edits — now resolved, it's live in both files above.
- `public/favicon-48x48.png` — remains unwired into `BaseLayout`/`site.webmanifest` (flagged since Session 46/47).
- `src/data/categories.ts` — the dead data file itself, not just its images; nothing imports it.

**Decisions made this session:**

- None requiring a spec update — asset swaps and cleanup only, no markup/structural changes.

**Decisions still open:**

- Whether to delete `discipline.png` and `hero_img.jpg` now that they're orphaned, or hold onto them.
- Whether `categories.ts` (and its Trending-section data) should be deleted outright or is being kept for a future revival of that section.

---

### Session 48 — 03 Aug 2026

**What was done:**

- Reviewed a developer-supplied screenshot of the `/supplements` listing page's product card at mobile width — the product image ran near full-bleed/oversized, the "View Product" CTA had no visual definition at rest (color only changed on `.sup-card:hover`, which never fires on touch), the gap between image and text felt too loose, and the text block felt cramped against the viewport edge.
- Fixed entirely inside the existing `@media (max-width: 768px)` block in `src/pages/supplements/index.astro` — no new component created, no changes to the desktop grid or to the shared `SectionWrapper` component:
  - `.sup-card__image-wrap` capped to `max-width: 60%` and centered (`margin-inline: auto`) so the product photo reads as a contained shot rather than a full-width banner.
  - `.sup-card` gap reduced from `--space-md` to `--space-sm`, tightening the image-to-content margin.
  - `padding-inline: var(--space-sm)` added to `.sup-grid` and `var(--space-xs)` to `.sup-card__content`, compensating for `SectionWrapper`'s side padding dropping from `--container-pad-lg` (desktop) to the much smaller `--container-pad` below 1024px.
  - `.sup-card__link` ("View Product") now `var(--color-red)` and `font-weight: 700` by default, with a trailing `→` via `::after` — reusing the arrow-CTA pattern already established in the homepage hero's "View Products →" copy, and no longer relying on a `:hover` state that touch devices can't trigger.
- All new values are existing tokens (`--space-*`, `--color-red`) or plain layout sizing (`%`, flex) — nothing added to the token system, per `coding-standards.md`'s "no raw values" rule.
- Flagged, then consolidated same session per developer follow-up instruction: this card's markup/styles previously lived inline in `supplements/index.astro` (class prefix `sup-card`) instead of a standalone component, and `global.css` separately defined an unused, competing `.product-card` primitive (dark-surface themed). Resolved:
  - Created `src/components/ui/ProductCard.astro` — the intended location per `coding-standards.md`'s file-structure example. Takes `product: Product` and an optional `loading` prop; owns the `firstSentence` editorial-descriptor helper (moved from the page) and all card markup/styles, including the mobile treatment above. Classes renamed `sup-card__*` → `product-card__*` (matches `coding-standards.md`'s own naming example, `.product-card__name`).
  - `src/pages/supplements/index.astro` rewritten to render `<ProductCard product={product} loading={...} />` per item; all `.sup-card*` styles and the `firstSentence` helper removed from the page, leaving only the grid layout (`.sup-grid`) in its scoped styles.
  - Removed the dead `.product-card`/`.product-card__*`/`.product-card--large` block from `global.css` (confirmed via grep it had zero references anywhere in `src/`) — this cleared the name collision risk before the new scoped component started using the same class names.
  - `astro check` (0 errors, 0 warnings, 1 pre-existing unrelated hint) and `npm run build` (14 pages, zero errors) both re-run clean after the consolidation.

**Decisions made this session:**

- None requiring a spec update — CSS-only mobile fix, followed by a same-session structural consolidation into a proper component, both confined to the supplements listing card. No data/markup changes elsewhere.
- Card component's `firstSentence` helper and the "first sentence of description" display convention moved into `ProductCard.astro` itself rather than staying page-local, since it's part of how the card renders, not something the page needs to know about.

**Decisions still open:**

- Visual sign-off on the mobile card layout and the consolidated component — developer to review in-browser directly at 375–390px widths (Playwright verification opt-in only, not run here, per Session 41 process note).

---

### Session 47 — 03 Aug 2026

**What was done:**

- Investigated developer report that `/images/products/whey_new.png` wasn't rendering on Vercel despite working locally and the path being correct in `src/data/supplements.ts`.
- Root cause found in `.gitignore`: a blanket `*.png` rule (added under a "audit screenshots" comment, alongside `.playwright-mcp/`) was silently excluding every PNG in the repo from version control, not just screenshots. Since Vercel builds from git rather than the local filesystem, any PNG that only existed on disk never reached the deploy.
- Confirmed via `git ls-files` that this had untracked: `public/images/products/whey_new.png`, all six favicon PNGs (`favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `favicon-192x192.png`, `apple-touch-icon.png`, `favicon-512x512.png`), and `public/images/snippets/*.png`. Only PNGs added before the ignore rule existed (`discipline.png`, `favicon-logo.png`, `probell-logo.png`) had survived.
- This also means Session 46's commit (`d2435cc`, "fix: correct favicon/manifest asset set...") did not actually ship the favicon PNGs its message describes — `git show --stat` on that commit confirms none of the six favicon files were included, only `favicon.ico`, `site.webmanifest`, and code changes. The favicon set was live locally but not on Vercel until this session's fix.
- Fix: removed the `*.png` line from `.gitignore` (`.playwright-mcp/` ignore left in place). No directory-scoped replacement was added — developer confirmed there's no fixed location for audit screenshots, so the rule was dropped rather than narrowed.
- Developer deleted `public/images/snippets/*.png` (Session 37's UI-refresh reference screenshots, no longer needed) before staging.
- Developer committed the fix directly: `295040d` — `.gitignore` change plus `whey_new.png` and the six favicon PNGs now tracked (snippets excluded, per the deletion above).

**Decisions made this session:**

- `.gitignore`'s `*.png` rule removed outright rather than replaced with a scoped path — developer doesn't have a fixed location for audit screenshots, so a blanket rule of any granularity risked repeating this failure mode.

---

### Session 46 — 03 Aug 2026

**What was done:**

- Reviewed developer-supplied favicon asset upload (`public/favicon.ico` replaced; `favicon-16x16.png`, `favicon-32x32.png`, `favicon-48x48.png`, `favicon-192x192.png`, `favicon-512x512.png`, `apple-touch-icon.png` added to `public/`) plus new icon `<link>` tags and a `site.webmanifest` added to `BaseLayout.astro`.
- Found `site.webmanifest` had been created at the project root instead of `public/` — Astro only copies `public/` into the build output, so the `<link rel="manifest">` tag would have 404'd. Moved it to `public/site.webmanifest`; no other changes needed, rest of the implementation (icon tag set, `.ico` multi-resolution, apple-touch-icon size, manifest content) was correct as supplied.
- `public/favicon-48x48.png` remains unreferenced (not wired into `BaseLayout` or the manifest) — left as-is, flagged to developer, not treated as an error.
- Per developer instruction, did not touch the uncommitted `AudienceCards` reorder/padding change in `index.astro` / `AudienceCards/index.astro` — confirmed intentional, out of scope for this review.

**Decisions made this session:**

- `favicon.svg` (pre-existing, has a built-in `prefers-color-scheme: dark` variant) remains unlinked in `BaseLayout.astro` — not part of this asset upload, left alone rather than opportunistically wired in.

---

### Session 45 — 03 Aug 2026

**What was done:**

- Removed the `/learn` route entirely, per direct developer instruction ("no longer required").
  - Deleted `src/pages/learn.astro`.
  - `src/data/navigation.ts`: removed the `{ label: "Learn", href: "/learn" }` entry from `NAV_LINKS`, `MOBILE_NAV_LINKS`, and `FOOTER_SITE_LINKS`. Deleted the `FOOTER_LEARN_LINKS` export outright — all four of its entries pointed at `/learn`, and it turned out to already be dead code (`Footer/index.astro` never actually imported it; its "Column 4: Learn" comment was stale — the column it labels has rendered `FOOTER_PARTNER_LINKS` under a "Partners" heading for a while, unrelated to this change, left as-is).
  - `src/components/BrandStory/BrandCtaBlock.astro`: its CTA button (`href="/learn"`, label "Learn") was the one other link in the app pointing at the route. Repointed to `/supplements` with label "See Supplements" (matching the wording already used by `ProductHero`'s equivalent CTA) since that's the closest surviving destination for "browse the products." Also added `white-space: nowrap` to `.em__cta-btn` — the existing `width: min-content` was fine for the single word "Learn" but would have wrapped "See Supplements" onto two lines.
  - Deleted `public/images/lifestyle/shelf-display.jpg` — was only used by `learn.astro`'s hero background, confirmed via grep not referenced anywhere else; removed per `coding-standards.md`'s "no unused files" rule.
  - **`src/data/categories.ts` (`CATEGORY_PAGES`) deliberately NOT deleted** — kept per explicit developer instruction even though nothing currently imports it. Don't treat it as dead code to clean up in a future session without checking back.
  - Updated `page-structure.md`'s Learn entry and the data-architecture table to match.
- `npm run build` passes clean — 14 pages generated (down from 15; `/learn` no longer exists). Confirmed via grep that no `.astro`/`.ts` file references `/learn` or `FOOTER_LEARN_LINKS` anymore.

**Decisions made this session:**

- `BrandCtaBlock`'s orphaned CTA repointed to `/supplements` rather than removed outright — the section still needs a CTA, and Supplements is the nearest live equivalent to what Learn offered.

---

### Session 44 — 03 Aug 2026

**What was done:**

- Resolved Session 43's open deviation. Developer reviewed the `supplements/playground.astro` layout trial in-browser and signed off on adopting it as the real `/supplements/[slug]` design.
- Built a permanent component set at `src/components/ProductDetail/` (`ProductHero.astro`, `ProductStats.astro`, `ProductOverview.astro`, `ProductUsage.astro`, `ProductCta.astro`) — same visual layout as the playground version, but fully data-driven per product (no hardcoded Whey values) and scoped with a `pd-` class prefix to keep it distinct from the playground's `pg-` prefix. Hero background now reads from `product.slugImage` per product, rather than a hardcoded image path.
- `src/pages/supplements/[slug].astro` fully rewritten to compose these five components; `getStaticPaths` logic unchanged, still generates all four products (Whey, Creatine, PWO, Mass Gainer). Also fixed a stray leading-space typo in the page `<title>` template string while rewriting it (no visual/behavioral effect).
- Per developer instruction, deleted `src/pages/supplements/playground.astro` and the entire `src/components/playground/` directory (5 files) now that the design has been carried into production — confirmed via grep that nothing else in `src/` referenced either before removing.
- `npm run build` passes clean post-deletion — 15 pages generated (down from 16; the `/supplements/playground` route no longer exists). All four `/supplements/[slug]` routes (`whey`, `creatine`, `pwo`, `gainer`) confirmed returning 200 in dev.

**Decisions made this session:**

- The bold full-bleed-hero / breakout-stat-strip / BrandStory-style usage section design (originated in the Session 43 playground) is now the live `/supplements/[slug]` design — Session 43's older split-image hero layout is fully replaced, not kept as an alternate.
- New production components kept in a dedicated `src/components/ProductDetail/` folder rather than reusing/renaming the playground files directly, per developer instruction to maintain clean separation.

**Decisions still open:**

- Visual sign-off on the new `/supplements/[slug]` pages across all four products (only Whey's underlying design was reviewed pre-adoption) — developer to review Creatine/PWO/Mass Gainer in-browser, particularly since all four currently share the same placeholder `slugImage`/`backgroundImage` asset.
- Same outstanding items as Session 42/43 (`/sales` visual sign-off, mobile nav overlay in-browser check).

---

### Session 43 — 03 Aug 2026

**What was done:**

- **DEVIATION:** built `src/pages/supplements/playground.astro` — a standalone route (not a `getStaticPaths` dynamic page, not linked from nav) to trial a bolder visual direction for `/supplements/[slug]` against real Whey data before deciding whether to carry any of it back into the live template. `coding-standards.md` explicitly bans playground/test pages ("build directly in components") — flagged by the developer as a knowing deviation, proceeded per `ai-interaction.md`'s `Deviation:` convention.
- Layout, using only existing tokens/components (no new global primitives):
  - Full-bleed photographic hero (`creatine_bg.jpg`, per developer instruction — not `product.backgroundImage`/`slugImage`) with the standard `rgba(0,0,0,0.5)` scrim exception, a large low-opacity ghost stat number (pattern borrowed from `ProductStrip.astro`'s `.ps__ghost`), and left-aligned statement-scale product name.
  - A stat strip that breaks out over the hero's bottom edge via negative `margin-top` (bold "card overlapping photography" moment, no new token needed).
  - Two-column overview/ingredients section on white, with ingredients pulled into a black card for contrast against the white section — the one deliberately bold structural choice with no existing precedent in `[slug].astro`.
  - Numbered (01/02/03) usage section on black, red display-font numerals at reduced opacity.
  - Full-bleed red CTA block closing the page.
- `npm run dev` started and route confirmed returning 200; visual/browser sign-off left to the developer (Playwright/chromium-cli automation wasn't available in this environment, and is opt-in only per Session 41 process note regardless).

**Decisions still open:**

- Whether any part of this layout gets carried back into the real `/supplements/[slug].astro` template, or the playground route gets deleted outright once reviewed — developer to decide after an in-browser look.
- This file should not be left in the repo long-term per the standing "no playground pages" rule — delete once the layout decision is made either way.

---

### Session 42 — 30 Jul 2026

**What was done:**

- Mobile nav overlay (`Nav/NavOverlay.astro`) refactored, per direct developer task (not a `page-structure.md` spec item):
  - **Link list:** overlay previously reused the shared `NAV_LINKS` array (Supplements, Learn, Contact — same as desktop nav). Added a new `MOBILE_NAV_LINKS` export in `src/data/navigation.ts` (Home, Supplements, Learn, Contact, Legal) scoped to mobile only — desktop `Nav/index.astro` still uses `NAV_LINKS`, unchanged. Developer confirmed this split over updating the shared array.
  - Removed the "Join the Waitlist" `btn-primary` CTA from the overlay, and the now-dead `.nav-overlay__cta` style rule.
  - **Layout:** overlay background changed from full-bleed (`inset: 0`) to `width: 80%` anchored to the right edge (`top/right/bottom: 0`), so it reads as a right-side drawer rather than a full-screen takeover. No new transition added — existing opacity fade (`--transition-slow`) reused as-is.
- Follow-up, same session, per direct developer feedback after first review:
  - **Toggle button repositioning fix:** the overlay's separate `.nav-overlay__close` (×) button was positioned independently of the hamburger button, so it visibly jumped position on open. Replaced the two-button pattern with a single persistent toggle: `NavHamburger.astro` now renders both a hamburger-lines SVG and an X SVG in the same button, swapped instantly via an `[aria-expanded]` CSS attribute selector (no transition/animation added — instant swap only, consistent with `design.md` Section 8's no-new-animation rule). `Nav/index.astro`'s script collapsed `openOverlay`/`closeOverlay` into a `toggleOverlay` handler on the hamburger itself (also updates `aria-label` between "Open menu"/"Close menu"); removed the now-obsolete `closeBtn` reference. `.nav`'s `z-index` raised from `100` to `250` (above `.nav-overlay`'s `200`, confirmed via grep no other component uses a z-index in that range) so the header bar — and the hamburger button inside it — stays visually on top and in place while the overlay is open, instead of being covered and replaced by a separately-positioned close control. Added `body.nav-open .nav { background: var(--color-white); color: var(--color-black); }` so the header bar reads correctly against the (now white, see below) overlay rather than picking up its scroll-based transparent/scrolled state. Removed `.nav-overlay__close` markup and styles from `NavOverlay.astro` entirely.
  - **Color swap:** `.nav-overlay` background changed from `var(--color-black)` to `var(--color-white)`, text from `var(--color-white)` to `var(--color-black)`, per direct developer request. `SocialIcons` inside the overlay inherits `color` from `.nav-overlay` (no explicit color of its own), so icons followed automatically — no change needed there.
  - **Second follow-up:** developer manually commented-out (not deleted, per [[feedback-commented-code]]) the dedicated X-shaped `<svg>` added above and asked to reuse the single hamburger-lines icon for both states instead of swapping to a second icon. Reworked `NavHamburger.astro`: the three `<line>` elements now carry `--top`/`--middle`/`--bottom` classes; when `[aria-expanded="true"]`, `--top`/`--bottom` are transformed (`translateY` + `rotate(±45deg)`, `transform-box: fill-box`/`transform-origin: center` so each line rotates about its own midpoint) into an X shape and `--middle` fades via `opacity: 0` — no `transition` property set, so the change is instant, not an animation, keeping this within `design.md` Section 8's default-no-animation rule. Removed the now-dead `.nav__hamburger-icon--menu`/`--close` display-toggle rules (they targeted the two-SVG version). The commented-out X `<svg>` block itself was left in place in the markup, not deleted, matching [[feedback-commented-code]].
  - **Third follow-up:** developer reviewed the CSS-morph X and asked to drop the cross entirely — icon should stay the identical hamburger-lines glyph in both open and closed states, no visual change at all on toggle. Removed the `--top`/`--middle`/`--bottom` classes and their transform/opacity rules from `NavHamburger.astro`; the three `<line>` elements are now plain, unstyled by open/closed state. State is communicated via the drawer itself plus the button's `aria-label` (still toggled "Open menu"/"Close menu" in `Nav/index.astro`'s script) rather than the icon shape. The commented-out X `<svg>` remains in the markup, untouched.
  - **Fourth follow-up:** developer had also hand-edited `NavOverlay.astro` directly in the IDE between turns (drawer `width` 80% → 70%, background/text reverted from the white/black swap above back to `var(--color-black)`/`var(--color-white)`, links restyled to `font-display` uppercase `1.3rem` with `text-decoration: none`) — those hand-edits were left as-is, not reverted, per the "don't touch changes you didn't just make" default. On top of that state, developer asked for the link list + social icons to sit directly under the header instead of vertically centered, nudged left rather than centered horizontally. Changed `.nav-overlay`: `justify-content`/`align-items` from `center` to `flex-start`, added `padding-top: calc(var(--nav-height) + var(--space-lg))` (clears the fixed header using the existing `--nav-height` token) and `padding-left: var(--space-lg)` (left inset instead of full-bleed-left or centered). Also fixed `.nav-overlay nav`'s `align-items: left` — not a valid CSS value for that property (silently no-ops, falls back to initial) — to `align-items: flex-start`, since it was directly relevant to the alignment being requested.
- `npm run build` passes — zero errors, 14 pages generated (re-verified after all four follow-up fixes).

**Decisions made this session:**

- `MOBILE_NAV_LINKS` kept as a separate export in `navigation.ts` rather than folding Home/Legal into the shared `NAV_LINKS` — developer's explicit call, avoids changing the desktop nav's link set as a side effect.
- Single toggle-button pattern (hamburger ↔ X) chosen over trying to reposition the separate close button to match — eliminates the positioning-drift class of bug entirely rather than patching coordinates.
- Toggle icon settled on a single, static hamburger-lines glyph for both states — no cross/X shape at all, developer's explicit call after reviewing both the two-SVG and CSS-morph versions. Open/closed state communicated via `aria-label` + the drawer's presence, not the icon.
- Overlay content top-aligned (under the header) and left-inset rather than centered — developer's explicit call; incidentally fixed an invalid `align-items: left` declaration encountered along the way.

**Decisions still open:**

- Visual sign-off on the mobile overlay refactor — developer to review in-browser directly (Playwright verification is opt-in only, declined for this task, per Session 41 process note).
- Same list as Session 41 (`/sales` visual sign-off still outstanding).

---

### Session 41 — 30 Jul 2026

**What was done:**

- Per `src/features/contact-router-route-flatten.md` (**DEVIATION: intentional structure simplification**, logged in the spec itself):
  - **Route flatten:** grepped the codebase for every `partners/` reference first, per the spec's requirement, and confirmed the full set with the developer before editing. Moved `src/pages/partners/{sales,retail,distributor}.astro` to `src/pages/{sales,retail,distributor}.astro` via `git mv` (history preserved); updated the three `href`s in `src/data/audience-cards.ts` from `/partners/*` to the flat paths. Developer confirmed the empty `src/pages/partners/index.astro` scaffold (previously logged as "not started, no spec written") should be deleted, not moved — deleted it along with the rest of the now-empty `partners/` directory.
  - **Contact section:** removed the Web3Forms form entirely — form markup/fields, `WEB3FORMS_KEY` env var reference, hCaptcha script/div, honeypot — from what was `Contact/ContactForm.astro`. Renamed the file to `Contact/ContactRouter.astro` (it no longer contains a form) and rebuilt it as 3 link options ("I'm a Gym" → `/sales`, "I'm a Distributor" → `/distributor`, "I'm a Retailer" → `/retail`) plus a plain `mailto:info@probellnutrition.com` fallback ("Something else? Reach out directly.") — no JS, no third-party service. `Contact/index.astro` updated to import/wrap the renamed component. Removed the now-unused `CONTACT_SUBJECT` constant from `src/constants/site.ts` (its only consumer was the deleted form's hidden `subject` field).
  - Developer subsequently hand-edited `ContactRouter.astro` directly in the IDE: router options switched from `.btn-primary` to `.btn-secondary`, added a `rgba(0,0,0,0.5)` background panel behind the options group, centered the fallback line.
  - `npm run build` verified clean after each step (route flatten, then contact router); confirmed via `curl` against the dev server that rendered HTML had zero remaining `web3forms`/`hcaptcha` references.
- Removed `WEB3FORMS_KEY` from `.env` (dead after the Contact section rewrite above; `HUBSPOT_*` vars untouched).
- Updated footer social links (`Footer/index.astro`) and the shared `ui/SocialIcons.astro` (used in the mobile nav overlay) from placeholder `href="#"` to `https://www.facebook.com/probellnutrition/` and `https://www.instagram.com/probellnutrition/`; both now open in a new tab (`target="_blank" rel="noopener noreferrer"`). This resolves two of the long-standing "Decisions pending" items (Instagram URL, and Footer's placeholder social icons).
- **Color token fix:** developer flagged that `Footer/index.astro`'s `background: #000;` was a deliberate raw-hex deviation (true black, not the site's off-black `--color-black` = `#121213`), not an oversight, and asked for a proper token rather than leaving the raw value or silently mapping it onto the wrong existing token. Added `--color-black-true: #000000` to `globals.css` and pointed the footer at it. While in `design.md`'s color table, also corrected a pre-existing (not introduced this session) documentation error: the table had listed `--color-black` as `#000000`, but the actual `globals.css` value has been `#121213` since the token was introduced — table now matches the real value, with `--color-black-true` added as its own row. Note: this token is unrelated to the Session 38 deviation still open on `HeroMobile.astro`'s raw `rgba(0,0,0,…)` gradient stops — that one is still unreconciled, see below.

**Decisions made this session:**

- **DEVIATION:** Route flatten and Contact-section rebuild — both pre-logged as deliberate in `src/features/contact-router-route-flatten.md`, not flagged as spec drift.
- `/partners/index.astro` deleted outright rather than moved/kept as a placeholder — explicit developer instruction, overriding this doc's prior note that it was just an unstarted future page.
- `--color-black-true` token added to formalize a developer-confirmed intentional true-black background (Footer) — not a fix-in-place of `--color-black` itself, since that token's existing off-black value is used correctly elsewhere.
- `design.md`'s `--color-black` hex corrected from `#000000` to `#121213` to match `globals.css` — a documentation correction, not a code change; flagging here in case the developer intended the doc's `#000000` as the target and the code as the drift, rather than the reverse (the code's value long predates this session, so it was treated as authoritative).

**Decisions still open:**

- Session 38's `HeroMobile.astro` raw-`rgba(0,0,0,…)` gradient-stop deviation is still open and unrelated to the `--color-black-true` addition above — not addressed this session.
- Same list as Session 40 (Sales Partner `/sales` visual verification still outstanding) — see note below, not currently an active blocker.

**Developer-confirmed working (visual check, in-browser):**

- Contact router (including the `.btn-secondary`/overlay hand-edits) and the footer/nav social icon links — both confirmed working.

**Process note:** developer confirmed Playwright-based visual verification is opt-in only ("ignore playwright verification — this will no longer be used until i ask for it"), consistent with `ai-interaction.md`'s existing "say 'use the Playwright MCP' explicitly" convention. This isn't a new rule, just a reaffirmation — future sessions should stop surfacing "pending Playwright verification" as an open action item (e.g. for `/sales`, still visually unverified but not blocked on any tooling decision) unless the developer asks for a Playwright pass specifically.

---

### Session 40 — 29 Jul 2026

**What was done:**

- Added photographic hero backgrounds to all three partner pages, replacing the dark text-only hero treatment used since their initial build (Sessions 34–36):
  - `src/pages/partners/retail.astro` — `/images/partners/partner-retail.jpg`
  - `src/pages/partners/distributor.astro` — `/images/audience/distributor.jpg`
  - `src/pages/partners/sales.astro` — `/images/partners/partner-sales.jpg`
- Same pattern applied to all three, matching `HeroDesktop.astro`'s established approach (`astro:assets` `<Image />`, `object-fit: cover`, absolutely positioned): the `<Image />` and a new overlay div sit inside the existing `#*-hero` wrapper alongside the `.container`; hero copy was moved into a new `.*-hero__content` class (`position: relative` so it sits above the image/overlay) and now carries the padding that used to live directly on `#*-hero`. Mobile breakpoint padding overrides retargeted to `.*-hero__content` for the same reason.
- Overlay uses flat `rgba(0, 0, 0, 0.5)` per `design.md`'s documented "dark overlays on photography" exception — not a gradient (the sitewide "no gradients" rule is intact here, unlike `HeroDesktop.astro`'s pre-existing gradient overlay, which predates this session and wasn't touched)
- Self-review caught one `coding-standards.md` violation before considering this done: all three `<Image />` tags were initially given `alt=""`, but the standard requires meaningful alt text on content images (empty alt is only for decorative images, and none of Probell's documented exceptions cover hero photography). Fixed with descriptive alt text per page (e.g. "Probell Nutrition retail display")
- `astro check` (0 errors) and `npm run build` (15 pages, zero errors) both re-run clean after the alt-text fix

**Decisions made this session:**

- None requiring a spec update — visual-only addition to already-built, developer-confirmed pages; no copy, form, or CRM-integration logic touched

**Decisions still open:**

- Same list as Session 39, plus: the three partner-page heroes' new photographic backgrounds have not yet had a developer visual check (this changes previously developer-confirmed "visual check done" pages for Retail and Distributor — worth a quick re-look, not just Sales Partner's still-outstanding one)

---

### Session 39 — 29 Jul 2026

**What was done:**

- Small mobile-styling pass across several existing components — developer-led, one consistent decision applied throughout: switch mobile content from centered to left-aligned, plus a couple of `AudienceCards` touch-specific fixes:
  - `AudienceCards/AudienceCard.astro`: mobile (`max-width: 768px`) card now `width: 100%; height: 280px` (fixed height replacing desktop's `aspect-ratio: 4/5`); `.ac__overlay` darkened to the same gradient used on desktop `:hover` (touch has no hover state, so the darker scrim is now permanent on mobile); `.ac__descriptor` opacity forced to `1` on mobile so the descriptor text is visible without a hover interaction; hover-state overlay-darkening rule also added under `@media (hover: hover)` for parity
  - `AudienceCards/index.astro`: `.ac__heading` left-aligned on mobile
  - `BrandStory/BrandCtaBlock.astro`: removed a redundant `text-align: center` inside the `max-width: 1024px` block — `display: flex; align-items: center` on the same rule already handles alignment, the text-align was leftover
  - `BrandStory/BrandStatsBlock.astro`: `text-align: left` moved onto the base `.em__anchor` rule; the now-redundant `text-align: center` mobile override removed (consolidation, not just a duplicate change)
  - `BrandStory/index.astro`: `text-align: left` added to the existing mobile (`max-width: 768px`) `.em__headline` rule
  - `Identity/index.astro`: `.identity__headline`/`.identity__row` text-align switched from center to left at the base/mobile level; the prior desktop-only (`min-width: 768px`) versions of the same two rules were initially commented out rather than deleted, per [[feedback-commented-code]] — since removed outright, see below
  - `ui/Banner.astro`: `gap: var(--space-md)` added to `.banner__headline-group` inside the existing mobile breakpoint block
- `npm run build` passes — zero errors, 15 pages generated
- Claude code-review pass on the above (not implemented by Claude, developer had already made the changes): no functional or build issues found. One thing flagged to developer, not fixed — developer's call:
  - `Identity/index.astro`'s `.identity__ctas` still has `align-items: center` inside `@media (max-width: 1040px)` — CTA buttons stay centered while the headline/body above them are now left-aligned; may be intentional, may have been missed
- **DEVIATION:** Per explicit developer instruction this session, [[feedback-commented-code]]'s "never remove without being asked" default was overridden — all commented-out code and the resulting empty style rule were deleted outright (normally this would just be flagged, not fixed):
  - `AudienceCards/AudienceCard.astro`: removed a commented-out `<div class="ac__overlay">` markup line, a commented-out `.ac__overlay { ... }` CSS block (dead duplicate of the live rule further down the file), and a commented-out `opacity: 0;` line inside the live `.ac__overlay` rule
  - `AudienceCards/index.astro`: removed a commented-out `padding-block: var(--space-xl);` line in `.ac`
  - `Identity/index.astro`: removed the commented-out `#identity`/`.identity__headline` rules inside `@media (min-width: 768px)` (flagged above), which left that media query block empty, so the empty block was removed too
  - Explanatory (non-code) comments left untouched — e.g. `ui/Banner.astro`'s `/* hide the empty spacer column on mobile */`
- `npm run build` re-run after cleanup — passes, zero errors, 15 pages generated

**Decisions made this session:**

- None requiring a spec update — CSS-only alignment/sizing adjustments to already-built components
- **DEVIATION:** commented-out code removed outright rather than left in place, on explicit developer instruction — see above; [[feedback-commented-code]] itself is unchanged as a default, this was a one-off override

**Decisions still open:**

- Same list as Session 38, plus the `Identity/index.astro` CTA-centering flag above

---

### Session 38 — 26 Jul 2026

**What was done:**

- Hero mobile image swap: desktop uses `hero_v2.png`, mobile uses `hero_v2_mobile.png` via a `<picture>`/`<source>` art-direction swap at 767px (later superseded by the full component split below).
- Adjusted `hero__overlay-top`/`hero__overlay-bottom` gradients (direction, breakpoint visibility) and hero height handling (`100dvh` explored, later reverted).
- **Structural refactor:** split `Hero/index.astro` into `HeroDesktop.astro` + `HeroMobile.astro`, both rendered and toggled via CSS `display: none`/`block` at the 768px breakpoint (no JS) — same pattern as the Nav sub-component split (Session 28). `index.astro` is now just the orchestrator. Done at developer's request so mobile can be designed independently of desktop without touching desktop's CSS.
- Mobile hero has since gone through several rounds of developer-led layout iteration in-session (headline positioning, a bordered/padded 2-col CTA+subline grid, then a 3-icon CTA row modeled on `ui/SocialIcons.astro`'s inline-SVG pattern, then a two-tier headline layout) — currently mid-iteration; the icon CTA row is commented out pending further design decisions.
- Code review pass on both new files: removed commented-out dead code (an unused `hero__overlay-right` markup+CSS pair on desktop, a commented alternate mobile height, commented-out flex properties), fixed a duplicate-`<h1>` issue (mobile had grown two `<h1>`s of its own on top of desktop's, all three rendered simultaneously in the DOM regardless of which is CSS-hidden — demoted mobile's two heading elements to `<p>`, leaving desktop's as the page's sole `<h1>`), and removed several dead/typo'd class references (`text-product` — not an actual class anywhere in the codebase, only `var(--text-product)` used inline elsewhere; a `text-produc` typo; `display-text` on mobile, whose properties were already being fully overridden by the more-specific scoped `.headline` rule). Added `font-size: var(--text-product)` directly to both `.hero__subline` rules where the dead class had left them unstyled.
- `astro check` and `astro build` both pass clean throughout (0 errors).

**Decisions made this session:**

- **DEVIATION:** Mobile hero (`HeroMobile.astro`) currently uses raw, non-token color/shadow values that `design.md`'s "no raw hex/px/rgba outside the two documented exceptions" rule would normally disallow — e.g. `rgba(0, 0, 0, ...)` gradient stops (vs. the brand near-black token value used on desktop) and an invalid `rgba(0, 0, 0, 100)` alpha (browsers clamp this to fully opaque; not a rendering bug, just malformed syntax). Flagged to developer; developer has confirmed this is intentional for now — a `#000` hex value is planned to be added to `design.md`/`globals.css` as a formal token in an upcoming change, at which point this should be reconciled. Left as-is per explicit instruction, not fixed in this session.
- Desktop's `hero__overlay-right` (a right-side fade gradient, previously kept commented-out "in case needed") was removed outright rather than kept commented, per explicit developer instruction this session to clean up commented-out code in the Hero files.

**Decisions still open:**

- Mobile hero layout (headline positions, whether the icon CTA row returns, final copy/hrefs) — developer still actively iterating, not yet signed off
- `#000` token addition to `design.md`/`globals.css`, to reconcile the raw-value deviation noted above
- Same list as Session 37

---

### Session 37 — 22 Jul 2026

**What was done:**

- **DEVIATION:** UI Refresh exploration per `src/features/ui-refresh.md` — built three new visual treatments of the existing `ProductStrips` sections (Whey 100 Protein, Creatine, Pre-Workout) inside a new `src/components/Playground/index.astro`, matching the reference screenshots at `public/images/snippets/`. Production `ProductStrips`/`ProductStrip.astro` and `index.astro` were not touched; playground code is not imported anywhere in production.
- **DEVIATION:** Added a temporary, unlinked `src/pages/playground.astro` route solely to render `<Playground />` for developer review — `coding-standards.md` prohibits test/playground pages; this is a deliberate, logged exception for review purposes only, to be removed (or its contents promoted) once reviewed.
- Reused product names/body copy from `@data/products` (unchanged) rather than the placeholder copy visible in the reference screenshots, to keep brand-voice copy authoritative; only the visual treatment was rebuilt.
- Per spec: `public/images/lifestyle/athlete-walking.jpg` used for all three sections regardless of the product imagery shown in the references; button styling in the references was ignored — existing `.btn-secondary` used as-is.
- Visual deviations from `design.md`/`coding-standards.md`, per the reference: square (non-rounded) full-bleed image edges instead of the current `border-radius: 22px`; a "◆ 01 / FOUNDATION"-style eyebrow (uniform red accent across all three, rather than the current alternating red/gold) replacing "01 — Strength"; a two-stat-with-divider row (current component supports only one stat); section 3 (Pre-Workout) rebuilt as a full-bleed image background with dark scrim and overlaid content, replacing the current split-panel layout.
- `npm run build` passes — zero errors, 16 pages generated (includes the new `/playground` route).
- Visual verification not done via Playwright MCP (not connected this session, consistent with prior sessions) — build confirmed clean; developer to review `/playground` directly in-browser at 375/768/1440px before any decision on production use.
- Developer revisions applied after initial build: section 1 desktop column order reversed (content left/image right; ghost-number anchor now follows content side via flip/overlay modifiers); section 3's `athlete-walking.jpg` zoomed (`transform: scale(1.45)`) to crop out the dark doorframe margins in the source photo that were reading as excess black background; mobile layout corrected from a stacked image-on-top pattern to the reference's actual side-by-side arrangement (narrow ~25% image column, same left/right side as desktop) for sections 1 & 2; whole-section hover added (image zoom 1.05x on sections 1/2, button color state on all three); each strip's data now carries its own `image`/`imageAlt` fields (still all pointing at `athlete-walking.jpg`) instead of one shared constant, so per-section images can be swapped later.
- **DEVIATION:** Added `.btn-skeleton` to `global.css` — a colorless, structural-only button base (padding/border-width/typography/transition list, including `border-color` in the transition, which `.btn-secondary` was missing). Added because the Playground CTA's hover state is driven by the parent `.pg-strip:hover`, not the button's own `:hover`, which doesn't fit `.btn-secondary`'s baked-in hover colors — diagnosed that `.btn-secondary:hover` sets `border-color` to the same value as its `background`, so the border-color change is real but invisually blends into the fill. Playground's CTA now uses `.btn-skeleton` plus locally-scoped colors (gold border/text at rest, gold fill with a contrasting **black** border on hover) so the border change actually reads. Developer confirmed this is the start of a broader button redesign and it's fine to go off-script for now — `.btn-primary`/`.btn-secondary` themselves were left untouched.
- Developer tested the Playground build wrapped in the real `SectionWrapper bg="black"` (matching production nesting) and confirmed the full-bleed treatment survives it, once `Playground`'s outer element cancels the wrapper's `padding-inline` via a negative-margin breakout (tracking `SectionWrapper`'s own 1024px breakpoint where it drops from `--container-pad-lg` to `--container-pad`). Also added `margin-top` between the three sections via `.pg-strip + .pg-strip` (previously stacked with zero gap).
- **DEVIATION — promoted to production:** developer signed off on the visual result and had this migrated into the live `ProductStrips` component (previously logged as pending review in the entries above):
  - `src/data/products.ts`: `Product` interface gained `category` (eyebrow term), `overlay?` (flags strip 03's full-bleed treatment), and `stats: ProductStat[]` replacing the old singular `stat?`. All three `PRODUCTS` entries updated with real `stats` pairs and `category` values. Original per-product images (`three-flavours.jpg`, `trending-creatine.jpg`, `discipline.png`) deliberately left as-is — not overwritten with the exploration's placeholder `athlete-walking.jpg`; images/hrefs/alt text are the developer's to finish.
  - `ProductStrip.astro`: fully rewritten — branches on `product.overlay` for split-panel (01/02) vs. full-bleed-with-scrim (03), uniform red diamond eyebrow (`labelAccent`'s red/gold alternation is no longer used, left in the interface rather than deleted), dual-stat row, flip-aware ghost position, whole-strip hover (image zoom on non-overlay strips, button color on all three), `.btn-skeleton`-based CTA. All classes renamed from the playground's `pg-strip__*` to `ps__strip`/`ps__*`. `margin-bottom: 5rem` (raw value) on the old `.ps__strip` replaced with a token-based `.ps__strip + .ps__strip { margin-top: var(--space-xl); }`. Left a code comment flagging that the `.ps__bg` image's `scale(1.45)` zoom was tuned specifically for `athlete-walking.jpg`'s framing and will likely need retuning once strip 03's real image is finalized.
  - `ProductStrips/index.astro`: added the same `SectionWrapper` padding-breakout margin confirmed in the Playground test, so the promoted component keeps its full-bleed edges without needing any change to `index.astro`'s homepage composition (`ProductStrips` is just one sibling inside the shared black `SectionWrapper` next to `AudienceCards`/`Identity`/`Banner` — the breakout only affects its own box).
  - `npm run build` passes — zero errors, 16 pages generated; homepage confirmed serving (200) with the new component live.
  - Per explicit instruction, `src/components/Playground/index.astro` and `src/pages/playground.astro` were **not** deleted — kept until final sign-off on the production result.
- Reversed the `SectionWrapper` padding breakout after developer review — final decision is that `ProductStrips` should stay within the wrapper's normal padded boundaries, not bleed to the viewport edge. Removed the negative-`margin-inline` rule from both `ProductStrips/index.astro` and `Playground/index.astro` (kept in sync since Playground is still live); no other markup/CSS changed — the strips' own images/overlay still fill their own column exactly as before, just inset like the rest of the black section now instead of reaching past it.
- Developer signed off on the production result. Deleted `src/components/Playground/index.astro` and `src/pages/playground.astro` — confirmed via grep that nothing else in `src/` referenced either before removing. `npm run build` passes clean post-deletion — 15 pages generated (down from 16; `/playground` route no longer exists). The UI Refresh task (`src/features/ui-refresh.md`) is complete.

**Decisions made this session:**

- **DEVIATION:** Entire task — see `src/features/ui-refresh.md`. Developer explicitly authorized working outside `design.md`/`coding-standards.md` boundaries for this exploration, including the otherwise-disallowed playground component and page.
- **DEVIATION:** `.btn-skeleton` added to shared `global.css` (not playground-scoped) ahead of a planned broader button redesign — flagged since this is the one change from this session that touches production CSS directly, even though no existing button's rendered output changed.
- **DEVIATION:** Playground treatment promoted into live `ProductStrips`/`ProductStrip.astro`/`products.ts` — see above. `design.md`'s Component Rules section (button system) and the ghost-number red/gold alternation are now stale against what's actually live and should be reconciled once the wider button redesign is scoped, rather than read as accidental drift.

**Decisions still open:**

- Images, CTA hrefs (currently `href="#"`), and alt text on the new `ProductStrips` are still to be finished by the developer
- Whether/when the broader button redesign happens (`.btn-skeleton` exists in `global.css` but `.btn-primary`/`.btn-secondary` are otherwise untouched, and `design.md`'s Component Rules section doesn't yet reflect any of this)
- Same list as Session 36

---

### Session 36 — 19 Jul 2026

**What was done:**

- Built `src/pages/partners/distributor.astro` — Distributor Program page: hero (gold eyebrow — the spec's one point of visual difference from Sales Partner/Retailer's red), one short positioning paragraph, minimal contact form (Business Name, Your Name, Contact Email, Phone, hidden Partner Type)
- Reused `src/lib/hubspot.ts` directly — third page to call the shared utility unchanged, no per-page submission logic duplicated
- Added `HUBSPOT_DISTRIBUTOR_FORM_GUID` to `.env`, reusing the existing `HUBSPOT_PORTAL_ID`
- Restarted the dev server proactively before testing (per the operational lesson from Session 35 — new env vars require a restart) and confirmed via `curl` that the form served the correct `data-portal-id`/`data-form-guid` before asking the developer to test, avoiding a repeat of the Session 35 404
- `npm run build` passes — zero errors, 15 pages generated
- Developer confirmed: visual check complete, form submission successful (3/3 pass across Sales Partner, Retailer, Distributor)

**Decisions made this session:**

- No Message/textarea field, no region/business-background field — deliberately excluded per spec; this audience's relationship is built through direct conversation, not form detail
- No automated confirmation email — spec is explicit this would directly contradict the page's stated positioning ("this isn't something we handle through automated forms")
- No FAQ, no "How It Works" section — spec calls this page "deliberately minimal," warning that over-building it risks looking like it's compensating for a lack of track record

**Decisions still open:**

- Same list as Session 35, plus:
- `/partners/index` has no feature spec yet — needs one written before it can be built. Likely a simple hub page linking to the three partner routes (Sales Partner, Retailer, Distributor), similar in spirit to `/legal/index.astro`'s pattern, but this hasn't been confirmed or scoped with the developer
- Visual verification of `/partners/sales` — still the one remaining open item from Session 34

---

### Session 35 — 19 Jul 2026

**What was done:**

- Built `src/pages/partners/retail.astro` — Retailer Program page: dark text-only hero, short "Why Stock Probell" list, pricing-is-request-not-publish framing section, "How It Works" 4-step list, request form (Business Name, Your Name, Email, Phone, Message, hidden Partner Type)
- Reused `src/lib/hubspot.ts` directly — no new submission utility created, per the shared-pattern instruction in `partner-crm-integration.md` and confirmed at kickoff before writing any code
- Added `HUBSPOT_RETAILER_FORM_GUID` to `.env`, reusing the existing `HUBSPOT_PORTAL_ID`; same frontmatter → `data-*` attribute → client script pattern as Sales Partner (see Session 34)
- `npm run build` passes — zero errors, 15 pages generated; confirmed built HTML carries the correct portal ID and form GUID
- Bug found and fixed: developer hit a 404 on submission testing. Root cause was not a code bug — the `npm run dev` process had been running continuously since earlier in the session, started before `HUBSPOT_PORTAL_ID`/`HUBSPOT_SALES_FORM_GUID`/`HUBSPOT_RETAILER_FORM_GUID` existed in `.env`. Vite/Node load `.env` once at process startup and don't hot-reload it on file changes, so the long-running dev server kept serving both `data-portal-id` and `data-form-guid` empty on **both** `/partners/sales` and `/partners/retail` — confirmed via `curl` against the live dev server before and after a restart. Fixed by restarting the dev server; confirmed both forms then served the correct values. Operational note for future sessions: **any new env var added mid-session requires a dev server restart to take effect** — a fresh `npm run build` always re-reads `.env` correctly, which is why this wasn't caught by the build-output check alone.
- Developer confirmed: visual check on `/partners/retail` complete, and a real submission after the restart lands correctly in HubSpot.

**Decisions made this session:**

- "Why Stock Probell" rendered as a plain left-bordered list (3 items), not a card/chip grid — spec explicitly calls for this section to stay light and avoid overclaiming scale the brand doesn't have yet, distinct from Sales Partner's 4-card "Why Probell" treatment
- No automated confirmation email built for this form, per spec — inline success message only, same UI pattern as Sales Partner but no email-sending behavior implied
- No Business Type dropdown, no location field — both deliberately excluded per spec (open Message field captures the real answer; logistics belong in the follow-up conversation, not the form)

**Decisions still open:**

- Same list as Session 34 (Retailer's own visual/functional verification items are resolved — see above)

---

### Session 34 — 19 Jul 2026

**What was done:**

- Built `src/pages/partners/sales.astro` — Sales Partner application page: dark text-only hero, "Why Probell" 4-card value grid, "How It Works" 4-step list, application form (Full Name, Email, Phone, Region, Event, Why Probell, How Heard, hidden Partner Type, GDPR consent checkbox)
- Created `src/lib/hubspot.ts` — shared HubSpot Forms API submission utility for all three partner forms per `partner-crm-integration.md`: `submitToHubSpot()` (POSTs to the EU endpoint with `fields`/`context`/`legalConsentOptions`), `isSpamSubmission()` (honeypot + 3s time-trap), `splitFullName()` helper
- Added `@lib/*` path alias to `tsconfig.json`, consistent with the existing `@data`/`@constants` pattern (Session 27)
- `npm run build` passes — zero errors, 15 pages generated
- Bug found (Claude investigation) and fixed (developer-applied): honeypot check read the checkbox's `.value` (always `"on"` regardless of checked state) instead of `.checked`, so `isSpamSubmission` returned `true` on every submission — silently blocking the fetch call before it ever reached HubSpot, with no error shown. Fixed by switching both the read (`sales.astro`) and `isSpamSubmission`'s signature (`hubspot.ts`) to a boolean `.checked` value. Confirmed working post-fix — payload lands in HubSpot.
- Moved HubSpot portal ID and the Sales Partner form GUID out of hardcoded source into `.env` (`HUBSPOT_PORTAL_ID`, `HUBSPOT_SALES_FORM_GUID`) — flagged during review since these were literal strings in `hubspot.ts`/`sales.astro`. Verified via Context7 (Astro docs) that `import.meta.env` vars are only exposed to client-side code when prefixed `PUBLIC_`; since `hubspot.ts` runs in the browser (imported by a client `<script>`), the values are instead resolved server-side in `sales.astro`'s frontmatter and threaded into the client script via `data-portal-id`/`data-form-guid` attributes on the form — same pattern already used for `WEB3FORMS_KEY`, no `PUBLIC_` prefix needed. `submitToHubSpot()` now takes `portalId` as a required parameter instead of importing a hardcoded constant. Confirmed the built HTML output carries the real values through.

**Decisions made this session:**

- **DEVIATION:** FAQ section (Section 4 of `sales-partner-page.md`) cut from this build — spec assumed reuse of an existing homepage FAQ accordion component that no longer exists (removed in the Session 24 redesign, never rebuilt). Building a new accordion was out of scope for this session. Revisit if applicant confusion becomes a real issue post-launch.
- `partner-crm-integration.md` was updated mid-session by the developer — reCAPTCHA removed entirely from all three HubSpot forms (confirmed incompatible with the raw `submissions/v3/integration/submit` API — HubSpot rejects API submissions outright when CAPTCHA is enabled on the form). Honeypot + time-trap is the confirmed, sole spam-protection layer; `hubspot.ts` reflects this — no reCAPTCHA site key dependency exists or is pending.
- One shared `src/lib/hubspot.ts` built now (with the Sales Partner page) rather than deferred — Retailer and Distributor should call into it rather than duplicating fetch/endpoint logic, per the spec's explicit instruction.
- Visual verification (Step 4.5) not performed by Claude Code this session — Playwright MCP was not connected. Developer opted to review `/partners/sales` in-browser directly rather than connect Playwright mid-session. Section is therefore logged as "Built — pending visual verification," not "Complete."

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Arnold Expo date — unconfirmed (per `market-strategy.md`)
- `info@probellnutrition.com` confirmation — needed before swapping the Sales Partner confirmation email's From address (per `partner-crm-integration.md`)
- Visual verification of `/partners/sales` at 375/768/1440px — outstanding, developer to confirm
- Whether the Sales Partner form's actual HubSpot form-builder configuration matches the field/consent shape assumed in `hubspot.ts` (e.g. consent type: process vs. communications) — not hit in practice since submission is confirmed landing, but worth a spot-check in the HubSpot portal

---

### Session 33 — 19 Jul 2026

**Session type:** Solo developer work, not run through a Claude Code session. Logged retroactively at developer request to bring this tracker back in sync with git history before resuming Claude Code-driven build sessions.

**What was done:**

- Revised all four partner-page specs in `src/features/` to v2: `distributor-program-page.md`, `retailer-program-page.md`, `sales-partner-page.md`, `partner-crm-integration.md` — each expanded significantly with session decisions on positioning, scope, and page structure (distributor spec alone grew from ~100 to ~215 lines)
- `AudienceCard.astro`: commented out the `.ac__overlay` gradient div and its style block (both the base and hover-state versions) rather than deleting them
- `audience-cards.ts`: all four card `tint` values changed from `"grey"` to `"gold"`
- These changes were sitting uncommitted in the working tree; committed and merged into `dev` as part of this session (see commit history for exact message)

**Decisions made this session:**

- **DEVIATION:** Partner-page specs rewritten to v2 with materially different scope than the versions Claude Code last built against — read the current `src/features/*-page.md` content fresh before starting the next partner-page build task; do not assume v1 scope
- **DEVIATION:** AudienceCard overlay gradient disabled via comment-out rather than removal — per [[feedback-commented-code]], left in place rather than deleted; flag to developer if intent was actually to remove it permanently

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Arnold Expo date — unconfirmed; per `market-strategy.md`, is the one hard external deadline in the project and should be requested from the client explicitly

---

### Session 32 — 10 Jul 2026

**Session type:** Solo developer work, not run through a Claude Code session. Logged retroactively — see Session 33 note above.

**What was done (commit `ed4dd82`):**

- Hero mobile audit fixes continued: sub-line and "Join the Waitlist" CTA restored on mobile, mobile-only display added, headline font-size clamp and image object-position adjusted
- New `AudienceCards` section built: `src/components/AudienceCards/index.astro` + `AudienceCard.astro`, driven by `src/data/audience-cards.ts` (4 cards — Shop, Retailer, Distributor, Partners); wired into `index.astro`
- New images added under `public/images/audience/` (7 files) and a new `public/images/hero/hero_img.jpg`
- Partner program routes scaffolded as empty files: `src/pages/partners/index.astro`, `distributor.astro`, `retail.astro`, `sales.astro` — no markup yet
- New spec docs written: `src/features/audience-cards.md`, `distributor-program-page.md`, `retailer-program-page.md`, `sales-partner-page.md`, `partner-crm-integration.md`, `src/docs/market-strategy.md`
- `src/docs/mobile-audit-findings.md` removed (83 lines) — superseded
- `src/docs/ai-interaction.md`: added a "Deviations from Spec" section defining the `Deviation:` task-prefix convention and the `**DEVIATION:**` session-log tagging pattern used in this and future entries

**Decisions made this session:**

- **DEVIATION:** Market direction confirmed as US-only (see `market-strategy.md`) — a prior Sweden-first proof-of-concept strategy referenced in earlier project discussion is explicitly superseded and should be disregarded in historical summaries
- **DEVIATION:** Partner program page routes added ahead of their content build — scaffolding only, intentionally sequenced before the full page-structure work

**Decisions still open:** same list as Session 33 above, minus the spec-v2 item (specs were still at v1 as of this session).

---

### Session 31 — 02 Jul 2026

**Session type:** Solo developer work, not run through a Claude Code session. Logged retroactively — see Session 33 note above.

**What was done (commit `bb1d70e`):**

- Mobile audit fixes applied across `Hero`, `Contact`, `BrandStory`, and layout components, per a new `mobile-audit.md` / `mobile-audit-findings.md` process (Playwright MCP-driven audit, documented in `src/docs/mobile-audit.md` and `src/features/mobile-audit.md`)
- `Hero/index.astro`: restored missing sub-line and "Join the Waitlist" CTA; mobile-only display rules added
- `Contact/index.astro`: removed `border-radius` from background image block; column order swapped on mobile (form first); padding corrected at breakpoints
- `BrandStory/BrandCtaBlock.astro`: CTA button width constraint fixed on desktop; text-align/flex alignment fixed for tablet
- `BrandStory/BrandStatsBlock.astro`: stat number font-size token reference corrected
- `BrandStory/index.astro`: headline font-size set to `var(--text-statement)` on mobile; `padding-bottom` breakpoint fixed
- `index.astro`: Contact moved outside `SectionWrapper` to correct background rendering
- `global.css`: minor grid token correction
- `src/docs/ai-interaction.md`: mobile-audit workflow section added (30 lines)
- `.gitignore` updated

**Decisions made this session:**

- **DEVIATION:** Mobile audit conducted via Playwright MCP as a dedicated audit-only session type (no code changes during the audit itself) — findings then applied in this same commit; establishes the audit-then-fix pattern referenced in `mobile-audit.md`

**Decisions still open:** same list as Session 33 above, minus the spec-v2 and Arnold Expo items (those postdate this session).

---

### Session 30 — 14 Jun 2026

**What was done (Task 14 — supplements pages):**

- Built `src/pages/supplements/index.astro` — listing page; dark hero ("Supplements.") under transparent nav, then editorial alternating product rows (ghost index number, contain-fit product image, category eyebrow, name, red flavour, first-sentence descriptor, "View Product" link). Whole row links to `/supplements/[slug]`. No prices, no coming-soon tags.
- Built `src/pages/supplements/[slug].astro` — dynamic detail page via `getStaticPaths()` from `SUPPLEMENTS`; section order per spec: dark product hero (image + name/flavour) → white body with 4-stat row (red values), full description, ingredients, three-item usage grid → black CTA block ("Interested in stocking Probell?" → `/#contact`). SEO: title `{flavour} {name} | Probell Nutrition`, description = first 155 chars of description.
- Renamed data export `PRODUCTS` → `SUPPLEMENTS` in `src/data/supplements.ts` (matches spec import; avoids clash with existing `products.ts`); corrected file header path comment
- Removed broken pages `whey.astro`, `creatine.astro`, `pre-workout.astro`, `mass-gainer.astro` — all imported a non-existent `@layouts/CategoryLayout.astro` (build was failing before this session's work); removal confirmed by developer
- Repointed `FOOTER_LEARN_LINKS` in `navigation.ts` from the deleted `/whey` etc. routes to `/learn` (the single tabbed learn page)
- `npm run build` passes — zero errors, 11 pages generated (incl. 3 supplement detail routes)

**What was done (earlier in session — Task 13 + SEO):**

- SEO meta tags added to `BaseLayout.astro` — `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:type`), Twitter card tags; `description` prop threaded through `LegalLayout`
- Task 13 complete: `/learn` page built at `src/pages/learn.astro`
  - Four product category tabs: Whey 100 Protein, Creatine, Pre-Workout, Mass Gainer
  - Content driven entirely by `CATEGORY_PAGES` from `src/data/categories.ts` — no hardcoded copy
  - Tab switching via vanilla JS, no npm packages; active state toggled via `data-tab` attributes
  - Focal image swaps per tab from `hero.image` field on each category record
  - `Nav` and `Footer` used; SEO title and description passed to `BaseLayout`
  - Category pages: `src/pages/learn/[category].astro` dynamic route via `getStaticPaths()`
- Footer: "Learn" column added — four links to category pages
- Created `src/data/supplements.ts` — data prep for supplements page; 3 products (Whey Strawberry, Whey CPB, Creatine Caribbean Fruits) with full `Product` interface, stats, ingredients, and usage; not yet committed

**Decisions made this session:**

- `/learn` page uses `BaseLayout` directly — page structure is unique enough not to warrant a new layout component
- Dynamic `[category].astro` route used for individual category pages via `getStaticPaths()`

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 29 — 13 Jun 2026

**What was done:**

- Task 11 complete: legal pages built
- Created `src/layouts/LegalLayout.astro` — wraps `BaseLayout`; accepts `title`, `description`, `lastUpdated`, `intro` props; 800px max-width container; `var(--space-2xl)` top / `var(--space-xl)` bottom padding; black background, white title, grey updated/intro text
- Created `src/components/ui/LegalSections.astro` — accepts `sections: LegalSection[]`; renders each section with `border-top`, white uppercase heading, grey body text, `white-space: pre-line` to preserve line breaks from data strings
- Created `src/pages/legal/index.astro` — hub page listing all four policies as arrow-linked rows
- Created `src/pages/legal/privacy.astro`, `terms.astro`, `returns.astro`, `shipping.astro` — each finds its record from `LEGAL_PAGES` via `.find(p => p.slug === '...')` and passes props to `LegalLayout` + `<LegalSections />`
- Updated `Footer/index.astro` — `/legal` → `/legal/privacy`; Terms & Conditions link added pointing to `/legal/terms`; `.footer__legal-links` flex wrapper added for two-link layout
- `npm run build` passes — zero errors, 6 pages generated

**Decisions made this session:**

- `LegalSections.astro` component used to centralise section rendering — one place to update styles across all four pages
- `white-space: pre-line` on section content — preserves bullet-list newlines in the data strings without requiring markdown parsing
- `LegalLayout` wraps `BaseLayout` (not Nav/Footer directly) — consistent with existing layout pattern

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 28 — 13 Jun 2026

**What was done:**

- Built `ui/SocialIcons.astro` — eliminates duplicate Facebook + Instagram SVG block inside `Nav.astro` (desktop header and mobile overlay both used identical markup); `Nav.astro` replaced both with `<SocialIcons />`; `body.nav-open { overflow: hidden }` moved to `global.css`
- Built `ui/FormField.astro` — renders `form-group` for `text`, `email`, `textarea`, `select` types; select options via `<slot />`; `Contact.astro` updated to use it (removed 5 repeated `<div class="form-group">` blocks)
- Deleted `ui/ProductCard.astro` — dead code since Session 24 redesign removed all consumers
- Converted all section-level components to folder/index.astro pattern; sub-components extracted where responsibility was clearly separate:
  - `Nav/` → `NavLogo.astro`, `NavHamburger.astro`, `NavOverlay.astro` + `index.astro`
  - `BrandStory/` → `BrandStatsBlock.astro`, `BrandCtaBlock.astro` + `index.astro`
  - `Contact/` → `ContactForm.astro` (owns web3forms key, script, hidden fields) + `index.astro`
  - `ProductStrips/` → `ProductStrip.astro` (single strip, `Product` prop) + `index.astro`
  - `Footer/`, `Hero/`, `Identity/`, `SectionWrapper/` → folder/index.astro only (no sub-components warranted)
- `npm run build` passes — zero errors

**Decisions made this session:**

- `ui/` components (Banner, TornEdge, FormField, SocialIcons) stay flat in `ui/` — the folder already provides their namespace
- Nav links stay inline in `Nav/index.astro` — 5-line `<nav>` with map, not worth a separate file
- Nav `<script>` stays in `Nav/index.astro` — coordinates all sub-components, cannot be split without a JS module

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 27 — 12 Jun 2026

**What was done:**

- Task 10 complete: data and content architecture migration
- Added `@data/*` and `@constants/*` path aliases to `tsconfig.json`
- Created `src/data/stats.ts` — `STATS` array + `Stat` interface; extracted from `BrandStory.astro`
- Created `src/data/products.ts` — `PRODUCTS` array + `Product` / `ProductStat` interfaces; extracted from `ProductStrips.astro` (3 hardcoded HTML blocks replaced with `.map()`)
- Created `src/data/navigation.ts` — `NAV_LINKS`, `FOOTER_SITE_LINKS`, `FOOTER_PRODUCT_LINKS` + `NavLink` interface; nav links now maintained in one place, shared between desktop and mobile nav
- Created `src/constants/site.ts` — `SITE_NAME`, `COPYRIGHT`, `CONTACT_SUBJECT`
- Updated `BrandStory.astro`, `ProductStrips.astro`, `Nav.astro`, `Footer.astro`, `Contact.astro` to import via `@data/` and `@constants/` aliases
- `npm run build` passes — zero errors

**Decisions made this session:**

- `index.astro` inline prop content (Identity headline/body, Banner headlines) left as-is — page-level configuration, not component-internal arrays
- Contact form select options (Gym, Distributor, Retailer, Other) left as-is — form structure, not content data

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Whether Built for Endurance section will be reinstated when product assets arrive

---

### Session 26 — 11 Jun 2026

**What was done:**

- CSS class naming audit and BEM standardisation across all scoped component styles
- Scope: scoped `<style>` blocks only — `global.css` conventions preserved (`btn-primary`, `grid-2`, `text-red`, `form-group`, etc.)
- `Nav.astro`: renamed `nav-inner/left/right/links/link/social/hamburger` → `nav__*`; `logo-light/dark` → `nav__logo--light/dark`; updated JS `querySelector` reference for `nav__hamburger`; updated cross-selectors in overlay styles
- `Hero.astro`: renamed `headline-1/2/3` → `headline__line--1/2/3` in template and style
- `Identity.astro`: renamed `identity__row1` → `identity__row` (numeric suffix removed — single row, no modifier needed)
- `Contact.astro`: renamed all `contact-*` elements → `contact__*` in template and style (8 classes)
- `Footer.astro`: renamed all `footer-*` elements → `footer__*` in template and style (13 classes)
- `ui/Banner.astro`: removed orphan classes `headline1/2/3` from template (no CSS definitions existed for them)
- `npm run build` passes — zero errors

**Decisions made this session:**

- `global.css` utility classes (`btn-primary`, `btn-secondary`, `grid-2`, `flex-center`, `text-red`, `form-group`, `torn-edge-bottom`, `img-overlay`, etc.) retain their existing naming convention — BEM enforcement applies to scoped component styles only
- `nav-overlay` kept as a standalone block name (not `nav__overlay`) — it is a separate DOM sibling to `<header class="nav">`, so treating it as its own block is correct BEM; `nav-overlay__close`, `nav-overlay__cta`, `nav-overlay--open` were already correct
- `nav-open` body state class retained — applying BEM modifiers to `<body>` is not standard practice; functional state class on body is an accepted pattern

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Whether Built for Endurance section will be reinstated when product assets arrive

---

### Session 25 — 11 Jun 2026

**What was done:**

- Codebase cleanup — removed all commented-out code from `src/`
- `Nav.astro`: removed 3 commented-out CSS properties in `.nav-link` (`font-size`, `text-transform`, `letter-spacing`)
- `Footer.astro`: removed commented-out `<div class="container">` opening tag; removed commented-out `padding-top`/`padding-bottom` CSS block
- `BrandStory.astro`: removed commented-out `<span>` eyebrow element; removed commented-out `.em__stats-section` CSS rule
- `ProductStrips.astro`: removed commented-out `color: var(--color-white)` in `.ps__ghost`
- `Identity.astro`: removed commented-out `background`, `padding`, and `border-radius` properties in `.identity__body`
- `Banner.astro`: removed commented-out `display: flex; align-items: flex-end` block; removed entire commented-out `.banner__text` rule; removed commented-out `position: absolute` and `top/left/transform` properties in `.banner__headline-group`
- No logic, structure, class names, or active code changed
- `npm run build` passes — zero errors

**Decisions made this session:**

- Explanatory comments retained throughout (TornEdge frontmatter docstring, section labels, `// Scroll behaviour — homepage only`, `/* hide the empty spacer column on mobile */`, etc.)
- `global.css` untouched — all comments there are structural section headers or explanatory labels

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Whether Built for Endurance section will be reinstated when product assets arrive

---

### Session 24 — 11 Jun 2026

**What was done:**

- Major structural redesign — page condensed from 11 sections to 4 core content blocks
- **Removed components:** `Trending.astro`, `BuiltForStrength.astro`, `BoldStatement.astro`, `Instagram.astro`, `InkEdge.astro`
- **New component:** `ProductStrips.astro` — 3 alternating full-width 2-col strips; strip 01 (Whey 100 Protein, image right, red ghost, stat callout); strip 02 (Creatine, image left, gold ghost); strip 03 (Pre-Workout, image right, muted/grayscale, "coming soon" treatment); ghost numbers use `opacity: 0.08` on colour tokens
- **Hero.astro:** swapped to `hero-main.jpg` (.jpg); simplified to single headline option "Built For The Grind"; replaced single overlay with two overlays (bottom gradient fade + right-side gradient fade)
- **BrandStory.astro:** fully rebuilt as `#emotion` section on white background; large display headline; 4-stat grid with sticky left anchor (eyebrow + statement + body) and stats list on right (1fr 2fr); image + CTA block below; no diagonal clip
- **Identity.astro:** props-driven (headline, body, primaryCta, secondaryCta); stat row and secondary CTA removed from current usage; simplified to 2-col headline + body
- **Banner.astro (ui):** 80vh; changed to `display: grid; grid-template-columns: 1fr 1fr`; empty first cell acts as spacer; text in right cell, vertically centered; margin-bottom added
- **SectionWrapper.astro:** added `bg` prop (`"black" | "white" | "surface"`); applies inline background-color and padding-block
- **index.astro:** restructured — Hero → SectionWrapper(black)[Identity + Banner + ProductStrips] → SectionWrapper(white)[BrandStory] → SectionWrapper(black)[Contact]
- **New assets:** `public/images/hero/hero-main.jpg`, `public/images/lifestyle/man-holding-kettlebell.jpg`; `hero-main-v2.png` deleted

**Decisions made this session:**

- Streamlined page structure chosen — removes sections that depend on product assets not yet available (BuiltForEndurance, Instagram) and sections that duplicated content already covered by ProductStrips
- `hero-main.jpg` adopted as permanent hero asset (.jpg format)
- Ghost numbers on ProductStrips use `color: var(--color-red/gold); opacity: 0.08` — photography exception not needed, pure CSS token approach
- BrandStory repurposed as a white-bg social proof / emotion anchor section, no longer a photography section

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL / whether Instagram section will be reinstated
- Facebook URL
- Logo light variant PNG (client to supply)
- Whether Built for Endurance section will be reinstated when product assets arrive

---

### Session 23 — 05 Jun 2026

**What was done:**

- `Trending.astro`: fully rebuilt as 3-act editorial layout
- Act 01 (Strawberry Whey): image left 55% / content right — ghost outline "01", red "Strength" label, display headline, grey body
- Act 02 (Creatine): content left / image right 55% — same ghost numbering pattern, reversed layout for visual rhythm
- Act 03 (Chocolate Peanut Butter): cinematic full-width panel — `grid-template-columns: 1fr 1fr`, image as absolute background, flat `rgba(0,0,0,0.62)` overlay (photography exception), content in right column
- All class names use `trending__` prefix; `id="trending"` nav anchor preserved
- `Playground.astro` used as design sandbox, content promoted to `Trending.astro`, Playground removed from `index.astro`
- `npm run build` passes — zero errors

**Decisions made this session:**

- Ghost numbers use `color: transparent; -webkit-text-stroke: 1px var(--color-border)` — CSS custom properties only, no raw values
- Panel 03 overlay: flat `rgba` not gradient — consistent with photography exception rule; same pattern as BrandStory
- Panel 03 grid follows Banner.astro pattern: `1fr 1fr`, empty left cell, content in right cell

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

### Session 22 — 04 Jun 2026

**What was done:**

- Installed `prettier` + `prettier-plugin-astro` as dev dependencies; `.prettierrc` config added
- `Trending.astro`: swapped all three product images from `.png` to `.jpg` (new real assets); reordered columns to Strawberry → Creatine → Chocolate; added `.trending__blockquote` quote block to each column; removed `.trending__content` wrapper; CSS refactored — columns now use `grid`, image wrap fixed at `280px` with `object-fit: cover`, tag colour changed to `var(--color-gold)`, responsive breakpoints updated (1040px → 2-col, 640px → 1-col)
- `Banner.astro`: height `50vh` → `60vh`; background position `center` → `50% 70%`; `.banner__text` repositioned to `absolute`, anchored top-right with `left: 50%`
- `index.astro`: first Banner headline updated to "Three formulas. One standard. No compromise."; description cleared; quote normalisation from Prettier

**Decisions made this session:**

- `.jpg` images used in Trending — new real photography assets supplied
- `font-size: 1rem` raw value used on `.trending__tag` — no matching token exists
- `font-size: 18px` raw value used on `.trending__descriptor` — per existing spec pattern

**Decisions still open:**

- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Contact form email + Web3Forms access key (`WEB3FORMS_KEY` in `.env`)
- Instagram URL
- Facebook URL
- Logo light variant PNG (client to supply)

---

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
| Instagram live feed         | Account URL confirmed (Session 41); component itself was removed Session 24 and hasn't been rebuilt | Developer |
| Font decisions              | Must be made in browser               | Developer          |
| Hero headline               | Must be made in browser               | Developer          |
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
