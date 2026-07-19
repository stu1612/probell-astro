# Probell Nutrition — Page Structure

**Last updated: 19 Jul 2026 — reconciled against progress-tracker.md through Session 33 and live `index.astro`**

---

## ⚠️ Superseded Content Warning

The previous version of this document described an 11-section homepage
(Nav → Hero → Identity → Trending → Brand Story → Built for Strength →
Bold Statement → Built for Endurance → Instagram → Contact → Footer).
**That structure no longer exists.** Session 24 (11 Jun 2026) collapsed
the homepage and deleted `Trending.astro`, `BuiltForStrength.astro`,
`BoldStatement.astro`, `Instagram.astro`, and `InkEdge.astro` outright.

This version reflects the site as currently built, confirmed directly
against `index.astro`.

---

## Homepage — Current Section Map

Confirmed structure, from `index.astro`:

```astro
<main>
  <Hero />
  <SectionWrapper bg="black">
    <AudienceCards />
    <Identity headline="..." body="..." primaryCta={{ ... }} />
    <Banner eyebrow="..." headline1="..." headline2="..." headline3="..." 
            description="..." image="/images/..." />
    <ProductStrips />
  </SectionWrapper>
  <SectionWrapper bg="white">
    <BrandStory />
  </SectionWrapper>
  <Contact />
  <SectionWrapper bg="black">
    <!-- deliberate empty placeholder block, added by developer — 
         reserved for a future section, no spec assigned yet -->
  </SectionWrapper>
</main>
```

| # | Section | Component | Background | Notes |
|---|---------|-----------|------------|-------|
| 1 | Nav | `Nav/index.astro` | transparent → solid on scroll | Internals refactored into `NavLogo.astro`, `NavHamburger.astro`, `NavOverlay.astro`, `ui/SocialIcons.astro` (Session 28) |
| 2 | Hero | `Hero/index.astro` | full-bleed `hero-main.jpg` | Single headline "Built For The Grind" (Session 24); dual gradient overlay; mobile sub-line/CTA restored (Session 31) |
| 3 | **AudienceCards** | `AudienceCards/index.astro` + `AudienceCard.astro` | inside black wrapper | **Confirmed position: first item inside the black `SectionWrapper`, immediately after Hero, before Identity.** 4-card grid — Shop, Retailer, Distributor, Partners — from `src/data/audience-cards.ts`. Overlay gradient currently commented out, not deleted (Session 33) — flag to developer whether that's permanent |
| 4 | Identity | `Identity/index.astro` | black (via wrapper) | Props-driven (`headline`, `body`, `primaryCta`) |
| 5 | Banner | `ui/Banner.astro` | image, decorative | 80vh, `grid-template-columns: 1fr 1fr`, content right |
| 6 | ProductStrips | `ProductStrips/index.astro` + `ProductStrip.astro` | black (via wrapper) | Replaces Trending + Built for Strength. 3 alternating strips: Whey 100 Protein, Creatine, Pre-Workout |
| 7 | BrandStory ("Emotion") | `BrandStory/index.astro` + sub-components | **white** (own wrapper) | Rebuilt Session 24 as social-proof section, `id="emotion"`. No longer uses `gym-interior` image or diagonal clip-path |
| 8 | Contact | `Contact/index.astro` + `ContactForm.astro` | `var(--color-surface)` | Sits **outside** any `SectionWrapper` (Session 31 fix) |
| — | (empty placeholder block) | — | — | Added deliberately by developer as an empty block after Contact, before </main> — reserved space for a future section, not yet assigned. No content to build against; not an error, not leftover from a prior edit. Revisit when there's a spec for what goes here |
| 9 | Footer | `Footer/index.astro` | black | Per `BaseLayout.astro`, Footer is typically rendered outside `<main>` — confirm whether that's still the case or whether it's now the contents of the unclear wrapper above |

**Removed entirely (Session 24) — do not reference or rebuild without an
explicit new spec:** `Trending.astro`, `BuiltForStrength.astro`,
`BoldStatement.astro`, `Instagram.astro`, `InkEdge.astro`.

---

## Border Breakers — Status

`design.md` Section 5 (Techniques A–E) describes transitions between
sections that mostly no longer exist. See `design.md`'s own updated
notes on this — needs a dedicated cleanup pass there, not duplicated
here.

---

## Other Pages — Current State

### Supplements
**Routes:** `src/pages/supplements/index.astro` (listing),
`src/pages/supplements/[slug].astro` (detail) —
**Complete, Session 30 (14 Jun 2026)**

- Listing: dark hero → editorial alternating product rows, whole row
  links to detail page
- Detail: dark product hero → white body (4-stat row, description,
  ingredients, usage grid) → black CTA block
- Data: `src/data/supplements.ts`, exported as `SUPPLEMENTS`

### Learn
**Routes:** `src/pages/learn.astro`, `src/pages/learn/[category].astro`
— **Complete, Session 30 (13 Jun 2026)**

- 4 tabs (Whey, Creatine, Pre-Workout, Mass Gainer), content from
  `CATEGORY_PAGES` in `src/data/categories.ts`
- Tab switching via vanilla JS, no npm packages

### Legal
**Routes:** `src/pages/legal/index.astro`, `privacy.astro`,
`terms.astro`, `returns.astro`, `shipping.astro` —
**Complete, Session 29 (13 Jun 2026)**

- `LegalLayout.astro` + `LegalSections.astro`, content from `LEGAL_PAGES`

### Partners (Sales / Retailer / Distributor)
**Routes:** `src/pages/partners/index.astro`, `distributor.astro`,
`retail.astro`, `sales.astro` — **Scaffolded as empty files only.
Not built.**

Specs live in `src/features/`: `sales-partner-page.md`,
`retailer-program-page.md`, `distributor-program-page.md`,
`partner-crm-integration.md`. **These have already been updated
directly in the project** — read them fresh from `src/features/`
before building, don't rely on any version described in a chat session.

---

## Data & Content Architecture

Since Session 27, content lives in `src/data/` and `src/constants/`,
imported via `@data/*` and `@constants/*` aliases:

| File | Exports | Used by |
|---|---|---|
| `src/data/stats.ts` | `STATS`, `Stat` | BrandStory |
| `src/data/products.ts` | `PRODUCTS`, `Product`/`ProductStat` | ProductStrips |
| `src/data/supplements.ts` | `SUPPLEMENTS`, `Product` | Supplements pages |
| `src/data/navigation.ts` | `NAV_LINKS`, `FOOTER_SITE_LINKS`, `FOOTER_PRODUCT_LINKS`, `FOOTER_LEARN_LINKS` | Nav, Footer |
| `src/data/categories.ts` | `CATEGORY_PAGES` | Learn pages |
| `src/data/audience-cards.ts` | audience card content | AudienceCards |
| `src/constants/site.ts` | `SITE_NAME`, `COPYRIGHT`, `CONTACT_SUBJECT` | Footer, Contact |

Page-level config (Identity props, Banner headlines, Contact select
options) stays inline in `index.astro` / the component — not extracted,
per Session 27's explicit decision.

---

## Component File Structure

Since Session 28, section-level components use folder/`index.astro`,
with sub-components extracted only where responsibility is clearly
separate:

```
src/components/
├── Nav/ (index.astro, NavLogo.astro, NavHamburger.astro, NavOverlay.astro)
├── Hero/index.astro
├── Identity/index.astro
├── BrandStory/ (index.astro, BrandStatsBlock.astro, BrandCtaBlock.astro)
├── ProductStrips/ (index.astro, ProductStrip.astro)
├── AudienceCards/ (index.astro, AudienceCard.astro)
├── Contact/ (index.astro, ContactForm.astro)
├── Footer/index.astro
├── SectionWrapper/index.astro
└── ui/ (Banner.astro, Button.astro, Tag.astro, TornEdge.astro, 
         FormField.astro, SocialIcons.astro)
```

`ui/` stays flat — the folder is its own namespace.
`ProductCard.astro` was deleted (Session 28, dead code) — do not
reference it.

---

## Asset Checklist — Current

| Asset | Path | Status |
|-------|------|--------|
| Logo | `/public/images/icons/probell-logo.png` | ✓ single asset, swap when 2-variant PNGs arrive |
| Hero image | `/public/images/hero/hero-main.jpg` | ✓ current |
| Lifestyle image | `/public/images/lifestyle/man-holding-kettlebell.jpg` | ✓ added Session 24 |
| `gym-interior.png` / `discipline.png` | — | No longer used — components deleted/redesigned |
| Whey CPB / Cookies & Cream / Salted Caramel PNGs | `/public/images/products/` | Pending |
| Audience card images | `/public/images/audience/` (7 files) | ✓ added Session 32 |
| Favicon | `/public/favicon.ico` | Pending |

---

## Open Decisions (unresolved as of Session 33)

- Active display font — Anton or Barlow Condensed
- Active body font — Space Grotesk or DM Sans
- Contact form email + `WEB3FORMS_KEY` env var
- Instagram URL / whether `Instagram.astro` will be rebuilt
- Facebook URL
- Logo light variant PNG
- Arnold Expo date — see `market-strategy.md`
- AudienceCards overlay gradient — remove permanently or re-enable
- The unclear `SectionWrapper` after Contact — confirm its contents
  directly against source
