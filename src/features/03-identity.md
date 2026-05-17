# Probell Nutrition — Identity Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Bold brand statement section. Text only. No images in the section.
Product PNG breakout at the bottom boundary into Trending below.

---

## Reference

`docs/page-structure.md` — Section 3: Identity
`docs/design.md` — Border Breaker Technique B

---

## Design Tokens

- Background: `var(--color-black)`
- Line 1: `var(--font-display)`, `var(--text-statement)`, `var(--color-white)`
- Line 2: `var(--font-display)`, `var(--text-section)`, `var(--color-red)`
- Padding top: `var(--space-2xl)`
- Padding bottom: `var(--space-xl)` + extra for product breakout

---

## Tasks

### 1. Create Identity.astro

File: `src/components/Identity.astro`

Structure:
- `<section>` with `id="identity"`, `position: relative`
- `.container` centered, `max-width: 800px`
- Two lines of display text
- Product PNG positioned absolutely at bottom boundary

### 2. Copy — exact

```
Line 1: "Fuel for people who already show up."
Line 2: "No shortcuts. No fillers. No compromise."
```

Line 1:
- Font: `var(--font-display)`, `var(--text-statement)`
- Color: `var(--color-white)`
- Class: `display-text`

Line 2:
- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-red)`
- Class: `display-text`
- Margin top: `var(--space-sm)`

### 3. Product PNG breakout

Image: `/public/images/products/whey-cpb.png`

If image not yet available — placeholder div:
```html
<div style="width:280px; height:350px; background:var(--color-surface);" />
```

Positioning:
```css
.product-breakout {
  position: absolute;
  bottom: -120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: 280px;
  filter: drop-shadow(0 20px 60px rgba(0,0,0,0.8));
}
```

Adjust `bottom` offset in browser — product should feel like it is
emerging from the section into Trending below.

Section must have `overflow: visible` and enough bottom padding
to prevent product overlapping section content.

### 4. Trending section top padding

The Trending section must have extra top padding to accommodate
the product breakout. Add `padding-top: 160px` to Trending section.
This is coordinated between Identity and Trending specs.

### 5. Import into index.astro

Add Identity below Hero in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Section background `var(--color-black)`
- [ ] Line 1 correct copy, white, display font, correct size
- [ ] Line 2 correct copy, red, display font, correct size
- [ ] Product PNG centered at bottom boundary
- [ ] Product overlaps into Trending section below
- [ ] No clipping of product PNG
- [ ] Responsive — product breakout adjusts on mobile
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No CTA
- No background image or texture
- No animation
