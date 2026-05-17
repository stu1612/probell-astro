# Probell Nutrition — Trending Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Product grid section. Four products. Responsive grid — 4 / 2 / 1.
Swipeable carousel on mobile. Coming Soon tags throughout.

---

## Reference

`docs/page-structure.md` — Section 4: Trending
`docs/design.md` — Component Rules: Product cards

---

## Design Tokens

- Background: `var(--color-black)`
- Section heading: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Extra top padding: `160px` — accommodates Identity product breakout
- Section padding bottom: `var(--space-xl)`

---

## Tasks

### 1. Create ProductCard.astro

File: `src/components/ui/ProductCard.astro`

Props:
```ts
interface Props {
  image: string;
  imageAlt: string;
  name: string;
  descriptor: string;
  tag?: string;
}
```

Structure uses `.product-card`, `.product-card__image`,
`.product-card__content`, `.product-card__name`,
`.product-card__descriptor` classes from `globals.css`.

Tag rendered as `.tag--coming-soon` when `tag` prop provided.

### 2. Create Trending.astro

File: `src/components/Trending.astro`

### 3. Section heading

```
"Trending"
```

- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase
- Margin bottom: `var(--space-md)`

### 4. Product grid — desktop and tablet

`.grid-4` class — collapses to `.grid-2` at tablet via globals.css.

Four product cards:

```
1. Name: "Whey 100 Protein"
   Image: /public/images/products/whey-cpb.png
   Alt: "Probell Whey 100 Protein — Chocolate Peanut Butter"
   Descriptor: "25g protein. Blue collar formula."
   Tag: "Coming Soon"

2. Name: "Whey 100 Protein"
   Image: /public/images/products/whey-cookies-cream.png
   Alt: "Probell Whey 100 Protein — Cookies and Cream"
   Descriptor: "25g protein. No days off formula."
   Tag: "Coming Soon"

3. Name: "Whey 100 Protein"
   Image: /public/images/products/whey-salted-caramel.png
   Alt: "Probell Whey 100 Protein — Salted Caramel"
   Descriptor: "25g protein. Built for the grind."
   Tag: "Coming Soon"

4. Name: "More Coming Soon"
   Image: placeholder div — var(--color-surface), aspect-ratio 1/1
   Alt: ""
   Descriptor: "New products launching soon."
   Tag: "Coming Soon"
```

If product images not yet available — use placeholder divs with
correct aspect ratio and `var(--color-surface)` background.

### 5. Mobile carousel

On mobile (< 768px) replace grid with horizontal scroll carousel.
CSS only — no JavaScript required.

Add `.product-carousel` class to wrapper on mobile.
Use CSS from `docs/page-structure.md` — Section 4 carousel rules.

Implement via media query — grid on desktop, carousel on mobile:

```css
@media (max-width: 767px) {
  .trending-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: var(--space-sm);
    padding-bottom: var(--space-sm);
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .trending-grid::-webkit-scrollbar { display: none; }
  .trending-grid .product-card {
    scroll-snap-align: start;
    min-width: 80vw;
    flex-shrink: 0;
  }
}
```

### 6. Border breaker out

No explicit border breaker element — Brand Story section opens
immediately below with full bleed image. Technique C is the
arrival of the image itself. Ensure no gap or padding between
Trending and Brand Story sections.

### 7. Import into index.astro

Add Trending below Identity in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Extra top padding accommodates product breakout from Identity
- [ ] Section heading correct copy and style
- [ ] Four product cards render correctly
- [ ] Product images or placeholders — correct aspect ratio
- [ ] Coming Soon tags on all cards
- [ ] Desktop: 4 column grid
- [ ] Tablet: 2 column grid
- [ ] Mobile: horizontal swipe carousel
- [ ] No scrollbar visible on carousel
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No product detail links — Coming Soon only
- No pricing
- No add to cart
- No filter or sort
