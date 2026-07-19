# Probell — Audience Cards Spec

**Version 1 · 9 July 2026**
**Status: Ready for development**
**DEVIATION:** New section, not in the original 11-section `page-structure.md` list. Added in response to client's Website Vision & Sales Strategy doc — site now needs to route 5 distinct audiences (Shop, Retailer, Distributor, Sales Partner, Investors/Media — this spec covers the first 4; Investors/Media held back for now). `page-structure.md` should be updated with this as Section 2.5 once the section is confirmed working.

---

## Purpose

A 4-card image-led grid that sits between Hero and Identity. Its job is to
make the "this is a business platform, not just a shop" statement
immediately after the hero, before any brand-story copy — proving the
platform claim in the first scroll rather than burying it in nav.

This does not replace the nav dropdown (separate, already planned) — it's
the visual/scannable version of the same routing decision for people who
scroll past the hero without touching the nav.

---

## Position in Page

```
Hero (full viewport, unchanged)
↓
Audience Cards (this section)          ← new
↓
Identity
↓
Trending
...
```

---

## Section Container

- Background: `var(--color-black)`
- Padding: `var(--space-xl)` top and bottom
- `.container` wrapped, `max-width: 1400px`

---

## Grid

- Desktop (lg): 4 columns, equal width — extend `.grid-4` from `design.md`
- Tablet (md): 2 columns
- Mobile (sm): single column stack — **no carousel**. Unlike Trending,
  these are 4 distinct destinations a visitor should be able to scan
  fully, not swipe past. Full-width stacked cards.

---

## Card Structure

Each card:

- Aspect ratio: `4:5` (portrait, image-forward)
- Image: `object-fit: cover`, full card
- Dark gradient overlay bottom-to-transparent-top (reuse `.img-overlay`
  pattern from `design.md` Section 7, adjusted to gradient rather than
  flat 0.4 opacity — matches Goals section overlay technique)
- Numbered tag, top-left: `01` / `02` / `03` / `04`
  - `.label-text` style, `var(--color-gold)`, `var(--space-sm)` inset
- Bottom content block, over the gradient:
  - Headline — `.font-display`, `var(--text-product)`, uppercase,
    `var(--color-white)`
  - One-line descriptor — `.font-body`, `var(--text-label)`,
    `var(--color-grey)`, margin-top `var(--space-xs)`

### Hover behaviour — desktop only

Reuse the existing Goals section hover pattern exactly (title fades out,
description + CTA fade in) rather than building a new interaction:

- Default state: headline + descriptor visible
- Hover state: headline fades out, descriptor + a text-link CTA
  ("Learn More →") fade in
- Mobile: CTA always visible (same rule as Goals mobile behaviour) —
  no hover state to replicate

---

## Card Content

```
01 — SHOP
Headline: "Shop"
Descriptor: "Premium protein, built for people who train hard."
Links to: /supplements

02 — BECOME A RETAILER
Headline: "Become a Retailer"
Descriptor: "Stock Probell. Gyms, stores, and studios welcome."
Links to: /partners/retail  [placeholder route — confirm once IA locked]

03 — BECOME A DISTRIBUTOR
Headline: "Become a Distributor"
Descriptor: "Wholesale and national distribution opportunities."
Links to: /partners/distributor  [placeholder route — confirm once IA locked]

04 — SALES PARTNERS
Headline: "Sales Partners"
Descriptor: "Independent reps. Real commission. Real product."
Links to: /partners/sales  [placeholder route — confirm once IA locked]
```

Copy above is a first-pass draft — swap freely, not final per brand voice
review.

---

## Images — PLACEHOLDER STATE

**DEVIATION — explicit, temporary:** all 4 cards currently use the same
single image (`card-placeholder-audience.jpg`) while real per-audience
photography is sourced. This is intentional, not an error — do not flag
or attempt to source 4 distinct images automatically.

To prevent 4 identical cards from reading as a broken/unloaded grid, apply
a distinct CSS overlay tint per card using existing color tokens only:

```
Card 01 (Shop):        no tint — base dark gradient only
Card 02 (Retailer):    var(--color-gold) overlay, low opacity (~0.15)
Card 03 (Distributor): var(--color-grey) overlay, low opacity (~0.15),
                        slightly increased contrast
Card 04 (Sales Partner): var(--color-red) overlay, low opacity (~0.15)
```

File naming: `/audience/card-placeholder-audience.jpg` — deliberately NOT named
`retailer.jpg` etc., so it can't be mistaken for a confirmed final asset.
Add code comment at the image reference:
`<!-- TODO: placeholder image, shared across all 4 cards — swap per audience-cards.md when real photography is sourced -->`

When real images arrive: swap the `src` per card, remove the tint
overlays (or keep them as a permanent stylistic choice — developer
decision at that point, not implied here).

---

## Component Location

- Playground first: per `kickoff-spec.md` Step 4
- Production: `src/components/AudienceCards.astro` (or equivalent per
  current stack conventions)
- Page import: `src/pages/index.astro` — between Hero and Identity
- Update `page-structure.md` to add this as Section 2.5 once confirmed
  working (per deviation-logging convention in `ai-interaction.md`)

---

## What Is Not In This Section

- No slider/carousel on any breakpoint
- No 5th card for Investors/Media (deliberately held back this round)
- No new animation/interaction pattern — hover reuses Goals section
  mechanism exactly

---

## What Is Not Yet Built

- Component not yet created
- Final routes for `/partners/*` pages pending IA/nav decision
- Real per-audience photography pending — see Images section above
- Nav dropdown ("Partner With Us ▾") is a related but separate piece of
  work, not covered by this spec
