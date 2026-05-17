# Probell Nutrition — Built for Strength Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Purpose-led product section focused on strength supplements.
Curated — 2 products maximum. Large imagery. Red accent throughout.
Hard cut into Bold Statement below — no border breaker element.

---

## Reference

`docs/page-structure.md` — Section 6: Built for Strength
`docs/design.md` — Border Breaker Technique E (hard cut — no element)

---

## Design Tokens

- Background: `var(--color-black)`
- Eyebrow: `.label-text--red`
- Headline: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Sub-line: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Card min-height: `400px` desktop
- id: `built-for-strength`

---

## Tasks

### 1. Create BuiltForStrength.astro

File: `src/components/BuiltForStrength.astro`

### 2. Section header

**Eyebrow:**
```
"Performance Series"
```
Class: `.label-text--red`
Margin bottom: `var(--space-sm)`

**Headline:**
```
"Built for Strength"
```
Font: `var(--font-display)`, `var(--text-section)`
Color: `var(--color-white)`
Class: `display-text`

**Sub-line:**
```
"25g protein per serve. Everything you need. Nothing you don't."
```
Font: `var(--font-body)`, `var(--text-body)`
Color: `var(--color-grey)`
Margin top: `var(--space-sm)`
Margin bottom: `var(--space-lg)`

### 3. Product cards — large format

Two column grid desktop, single column mobile.
Cards larger than Trending — `min-height: 400px` on desktop.

```
1. Name: "Whey 100 Protein"
   Image: /public/images/products/whey-cpb.png
   Alt: "Probell Whey 100 Protein — Chocolate Peanut Butter"
   Descriptor: "The foundation. 25g protein, zero compromise."
   Tag: "Coming Soon"

2. Name: "Creatine"
   Image: placeholder div — var(--color-surface), min-height 400px
   Alt: ""
   Descriptor: "Power output. Recovery. Built in."
   Tag: "Coming Soon"
```

Use `ProductCard.astro` component with additional size modifier class:

```css
.product-card--large {
  min-height: 400px;
}

.product-card--large .product-card__image {
  aspect-ratio: 3 / 4;
}
```

### 4. Hard cut — no border breaker

Do not add any border breaker element at the bottom of this section.
Bold Statement follows immediately — the contrast is the transition.
Ensure section has standard bottom padding only: `var(--space-xl)`.

### 5. Import into index.astro

Add BuiltForStrength below BrandStory in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Eyebrow red label style — correct copy
- [ ] Headline correct copy and style
- [ ] Sub-line correct copy and color
- [ ] Two large product cards render correctly
- [ ] Cards minimum height 400px desktop
- [ ] Coming Soon tags present
- [ ] No border breaker at bottom — hard cut to Bold Statement
- [ ] Mobile: single column
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No more than 2 products in this section
- No pricing
- No add to cart
- No border breaker element — hard cut only
