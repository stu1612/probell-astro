# Probell Nutrition — Page Structure

The current state of each page: what it's for and anything that isn't
obvious from the code. For the exact markup, read the page file. Design
intent is in `design.md`.

Every page uses `BaseLayout.astro`, which renders Nav, the page content
and Footer. Footer sits outside each page's `<main>`.

## Home (`src/pages/index.astro`)

The order follows the brand story: feel the brand, see the product,
find your route in, then make contact.

1. **Hero:** full-bleed photo with the headline "Built For The Grind".
   `HeroDesktop` and `HeroMobile` are both rendered and swapped with CSS
   at 768px.
2. **Black `SectionWrapper`:**
   - **Identity:** the B2B pitch to gyms. A props-driven, centred
     statement layout.
   - **ProductStrips:** alternating product strips with ghost numbers.
     Data comes from `catalog.ts`.
   - **AudienceCards:** four routes in (Shop → `/supplements`, Retailer
     → `/retail`, Distributor → `/distributor`, Partner → `/sales`).
     Data comes from `audience-cards.ts`.
3. **White `SectionWrapper`:** BrandStory (`id="emotion"`), a social
   proof and stats section. Data comes from `stats.ts`.
4. **Contact:** `ContactRouter.astro` sends each visitor type to the
   right page or a mailto. It sits outside any wrapper.
5. **Empty black `SectionWrapper`:** a deliberate spacer before the
   Footer, not leftover code.

## Partner pages: `/sales`, `/retail`, `/distributor`

Each page recruits one audience and ends with a HubSpot form submitted
through `src/lib/hubspot.ts`, which uses a honeypot and a time-trap
instead of a CAPTCHA.

- **Sales:** commission-based Sales Partners.
- **Retail:** stores stocking Probell.
- **Distributor:** deliberately minimal. A short pitch and a short
  form, with a gold eyebrow instead of the red used on the other two.

The portal and form IDs come from the `HUBSPOT_*` env vars. If one is
missing, the form falls back to `""` and fails silently. That's a known
issue, logged under "Later" in `context-audit.md`.

The original intent for these pages is in `src/features/*-page.md` and
`partner-crm-integration.md`, as reference.

## Supplements

- **`/supplements`:** dark, full-bleed alternating rows
  (`SupplementRow.astro`) with the same gym photography as
  ProductStrips. It has no hero: it opens straight into the rows under
  a screen-reader-only `<h1>`.
- **`/supplements/[slug]`:** built from the components in
  `src/components/ProductDetail/`, in this order:
  - a photo hero with a ghost stat
  - a stat strip
  - an overview and ingredients section
  - a "How to use it" section
  - a red CTA block
- **Data:** `src/data/catalog.ts` (`PRODUCTS`) is the single product
  source for these pages and for ProductStrips.

## Legal: `/legal`, plus privacy, terms, returns and shipping

These pages use `LegalLayout.astro` and `LegalSections.astro`. Their
content comes from `LEGAL_PAGES` in `src/data/legal.ts`.

## 404

A dark, centred statement page with a ghost "404". It has two buttons:
Back to Home and Browse Supplements.
