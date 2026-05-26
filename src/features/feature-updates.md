# Probell — Feature Updates

**Last updated: 20 May 2026**

> This file contains a prioritised list of visual and UI updates
> identified during the pre-launch review session.
> Each task is self-contained with everything Claude Code needs
> to implement without ambiguity.
> Tasks are numbered in implementation order.

---

## Task 01 — Update Hero Image

**Status:** Complete — 20 May 2026
**Component:** `src/components/Hero.astro`

### What to do

Replace the current hero background image with the new version.

### Asset

- New image saved as: `hero-main-v2.png` (developer to confirm
  exact filename and place in `/public/images/hero/`)
- Replace reference to `hero-main.png` with `hero-main-v2.png`
  in `Hero.astro`

### What must not change

- The headline, sub-line, CTA, and all text content
- The layout and composition
- The torn edge component at the bottom
- Any other component or page

### Verify

- Full viewport at 1440px wide — dark right zone visible and
  sufficient for headline text
- Image loads correctly, no broken reference
- Build passes with zero errors

## Task 02 — Identity Section Redesign

**Status:** Complete — 20 May 2026
**Component:** `src/components/Identity.astro`

### Context

The Identity section currently has dead space above the copy
and no transition into the section below. We are fixing the
spacing and adding a custom ink brush edge SVG at the bottom
to create a deliberate dark-to-light border break moment.
The Trending section light background is a separate task.

---

### What to change

**Vertical spacing:**

- Remove excess top padding — text should sit centered
  vertically with no dead space above it
- Section height: sized to contain the text comfortably
  plus the ink edge SVG — nothing more

**Typography fix:**

- Line 1: "FUEL FOR PEOPLE WHO ALREADY SHOW UP."
  Maximum two lines — never three
- Line 2: "NO SHORTCUTS. NO FILLERS. NO COMPROMISE."
  Must hold on one line at 1440px
  - Reduce font size until it holds — non-negotiable

**Bottom transition — Ink Brush Edge SVG:**
Build as: `src/components/InkEdge.astro`

The SVG must:

- Span 100% viewport width
- Sit at the bottom of Identity overlapping into
  the section below
- Fill: `var(--color-black)`
- Style: heavy horizontal brush stroke, thick in center,
  tapering toward edges
- Edge: irregular, organic, hand-painted — not geometric
- 4 to 6 ink drips hanging from bottom edge —
  varying lengths 20px to 60px, irregular spacing
- Subtle ink splatter dots — small, sparse
- Height: approximately 80px to 120px
- Must feel like a real ink stroke, not clip art

**SVG positioning:**

- `margin-bottom: -2px` to prevent any gap
- z-index above the section below

---

### What must not change

- Any copy or content
- Any other section or component

---

### Verify

- No dead space above text at 1440px
- Line 2 holds on one line
- Ink edge spans full width, no gaps at edges
- No visible gap between black background and SVG
- Build passes with zero errors

## Task 03 — Trending Section Redesign

**Status:** Complete — 22 May 2026
**Component:** `src/components/Trending.astro`

### Context

Trending is being redesigned from dark product cards on a dark
background to a light section with three large cinematic product
card images. The fourth placeholder card is removed entirely.
The product images are pre-composited — they already include
the flavor background, product, and atmospheric elements.
Claude Code just needs to display them correctly.

---

### Section background

Change from `var(--color-black)` to `#F5F3EF` — warm off-white

### Section header

- "TRENDING" heading: change color to `var(--color-black)`
- Add eyebrow label above: "PERFORMANCE SERIES"
  in `var(--color-red)`, uppercase, `var(--text-label)`,
  `letter-spacing: 0.15em`

---

### Grid

- Three columns only — remove fourth placeholder card entirely
- Gap: `var(--space-md)` between cards
- No change to mobile behaviour — single column stack

---

### Product cards — new treatment

Each card displays one pre-composited product image.
No dark card background. No inner image container.
The composited image IS the card.

**Card structure:**

```html
<article class="product-card">
  <div class="product-card__image-wrap">
    <img src="/images/trending/trending-strawberry.png" alt="Whey Strawberry" />
  </div>
  <div class="product-card__content">
    <span class="tag tag-coming-soon">Coming Soon</span>
    <h3 class="product-card__name">Whey Strawberry</h3>
    <p class="product-card__descriptor">25g protein. Blue collar formula.</p>
  </div>
</article>
```

**Card styles:**

```css
.product-card {
  background: transparent;
  border: none;
}

.product-card__image-wrap {
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  border-radius: 4px;
}

.product-card__image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.product-card__image-wrap img:hover {
  transform: scale(1.03);
}

.product-card__content {
  padding: var(--space-sm) 0;
}

.product-card__name {
  font-family: var(--font-display);
  font-size: var(--text-product);
  color: var(--color-black);
  margin: var(--space-xs) 0 0;
  text-transform: uppercase;
}

.product-card__descriptor {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-border);
  margin: var(--space-xs) 0 0;
}
```

---

### Three products — exact order

1. Whey Strawberry — `/images/trending/trending-strawberry.png`
2. Whey Cookies & Cream — `/images/trending/trending-chocolate.png`
3. Creatine — `/images/trending/trending-pineapple.png`

---

### Remove

- Fourth placeholder card — delete entirely
- All existing dark card background styles
- Any `var(--color-surface)` references within this component

---

### What must not change

- Section id `trending`
- Mobile single column behaviour
- Any other section or component
- The `tag-coming-soon` style from global CSS

---

### Verify

- Section background is warm off-white at 1440px
- Three cards only — no fourth card
- All three product images load correctly
- Product names and descriptors in black text, readable on
  light background
- Subtle scale on image hover working
- Build passes with zero errors

## Task 04 — Brand Story Section Redesign

**Status:** Complete — 22 May 2026
**Component:** `src/components/BrandStory.astro`

### Context

Brand Story is being redesigned from a two-column layout
to a full bleed image section with content overlaid on top.
Image has been updated to a new asset.

---

### Image

Replace current gym interior image with:
`/public/images/brand-story/gym-interior-v2.png`

---

### Layout

- Image must be full bleed — edge to edge, full viewport width
- No container constraint on the image
- Dark gradient overlay on the right side so text is legible
- Content sits on the right side overlaid on the image
- Minimum section height: 70vh

---

### Content

Keep all existing copy exactly as is:

- Eyebrow: "OUR STORY" in `var(--color-gold)`
- Headline: "BUILT IN THE GYM. DESIGNED FOR IT."
- Body copy unchanged

Add a stat row below the body copy with three stats:

- 25g — Protein per serve
- 100% — Made in the USA
- 0 — Compromises

Stats sit on one row, separated by `var(--space-lg)`,
with a `var(--color-border)` top border separating
them from the body copy above.

Stat number: display font, `var(--text-section)`, white
Stat label: body font, `var(--text-label)`, grey,
uppercase, wide letter spacing

---

### Remove

- The `.clip-diagonal-bottom` class from this section
- The two-column grid structure
- Hard cut at bottom is cleaner and more intentional

---

### Responsive

- Mobile: image stays full bleed
- Content goes full width on mobile
- Stats row maintained but with reduced gap

---

### What must not change

- Section id `brand-story`
- Any other section or component
- Existing copy

---

### Verify

- Image fills full viewport width edge to edge
- Content readable against gradient on right side
- Three stats visible below body copy
- Diagonal clip removed
- Build passes with zero errors
