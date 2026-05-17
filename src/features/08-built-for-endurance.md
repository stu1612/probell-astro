# Probell Nutrition — Built for Endurance Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Purpose-led product section focused on endurance supplements.
Mirrors Built for Strength structure — gold accent instead of red.
Curated — 2 products maximum. Clean transition to Instagram below.

---

## Reference

`docs/page-structure.md` — Section 8: Built for Endurance

---

## Design Tokens

- Background: `var(--color-black)`
- Eyebrow: `.label-text--gold`
- Headline: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Sub-line: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Card min-height: `400px` desktop
- id: `built-for-endurance`

---

## Tasks

### 1. Create BuiltForEndurance.astro

File: `src/components/BuiltForEndurance.astro`

Structure mirrors `BuiltForStrength.astro` exactly.
The only differences are:
- Eyebrow class: `.label-text--gold` instead of `.label-text--red`
- Different headline, sub-line, and product copy
- No border breaker at bottom — clean transition

### 2. Section header

**Eyebrow:**
```
"Performance Series"
```
Class: `.label-text--gold`
Margin bottom: `var(--space-sm)`

**Headline:**
```
"Built for Endurance"
```
Font: `var(--font-display)`, `var(--text-section)`
Color: `var(--color-white)`
Class: `display-text`

**Sub-line:**
```
"Fuel longer. Recover faster. Go again."
```
Font: `var(--font-body)`, `var(--text-body)`
Color: `var(--color-grey)`
Margin top: `var(--space-sm)`
Margin bottom: `var(--space-lg)`

### 3. Product cards — large format

Two column grid desktop, single column mobile.
Cards `min-height: 400px` on desktop.
Both placeholder — assets not yet confirmed.

```
1. Name: "Pre-Workout"
   Image: placeholder div — var(--color-surface), min-height 400px
   Alt: ""
   Descriptor: "Explosive energy. Dialled-in focus."
   Tag: "Coming Soon"

2. Name: "Creatine"
   Image: placeholder div — var(--color-surface), min-height 400px
   Alt: ""
   Descriptor: "More reps. Faster recovery. No ceiling."
   Tag: "Coming Soon"
```

Use `ProductCard.astro` with `.product-card--large` modifier.

### 4. Clean transition out

No border breaker element. Standard section bottom padding.
Instagram section follows directly.

### 5. Import into index.astro

Add BuiltForEndurance below BoldStatement in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Eyebrow gold label style — correct copy
- [ ] Headline correct copy and style
- [ ] Sub-line correct copy and color
- [ ] Two large placeholder cards render correctly
- [ ] Gold accent — visually distinct from Built for Strength red
- [ ] Coming Soon tags present
- [ ] Clean bottom — no border breaker
- [ ] Mobile: single column
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No more than 2 products
- No real product images — placeholder only at this stage
- No border breaker element
- No pricing or add to cart
