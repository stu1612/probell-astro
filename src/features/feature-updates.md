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

## Task 05 — White Layout Wrapper Component + Global Reset

**Status:** Complete — 26 May 2026

---

### Context

The site design has reset to a clean white background with
black text. globals.css has already been updated to reflect
this. A temporary div has been added in index.astro wrapping
Identity, Trending and BrandStory — this needs to be replaced
with a proper reusable component.

---

### Task 1 — Create SectionWrapper component

Create: `src/components/SectionWrapper.astro`

Requirements:

- Accepts children via <slot />
- Accepts a prop: `fullBleed?: boolean` — defaults to false
- When fullBleed is false: applies container padding and
  max-width constraint
- When fullBleed is true: no container constraint,
  content runs edge to edge
- No background color set on the component itself —
  background is inherited from globals.css
- This component is the standard wrapper for all sections
  going forward

---

### Task 2 — Update index.astro

- Remove the temporary div with Tailwind classes currently
  wrapping Identity, Trending and BrandStory
- Tailwind classes are not used in this project —
  remove any that were added
- Do not wrap sections in SectionWrapper yet —
  that happens per section as each is rebuilt
- Keep all existing component imports and order unchanged

---

### Task 3 — Audit and fix globals.css

globals.css has been updated to white background and black
text. Claude Code must:

- Confirm `body` background is `var(--color-white)`
  or `#ffffff`
- Confirm `body` default text color is `var(--color-black)`
- Check for any hardcoded dark background values on
  generic elements that would conflict with the new
  white direction
- Do not touch section-specific styles — only global
  body-level defaults

---

### Awareness — design direction has changed

The site is moving to a clean white background with black
text and strong typography. All decorative elements added
in previous sessions — grunge textures, ink edge assets,
dark overlays on non-hero sections — are being removed
section by section as each is rebuilt.

Claude Code should not re-introduce any of these elements.
The Hero remains full bleed and dark — everything after
it is being rebuilt on white.

---

### What must not change

- Hero component — untouched
- Nav component — untouched
- Any component not explicitly mentioned above
- Existing component import order in index.astro

---

### Verify

- SectionWrapper renders correctly with and without
  fullBleed prop
- No Tailwind classes remain in index.astro
- globals.css body defaults are white background,
  black text
- Build passes with zero errors

## Task 06 — Identity Section Redesign

**Status:** Complete — 26 May 2026
**Component:** `src/components/Identity.astro`

---

### Context

Identity is being fully rebuilt. White background,
clean typography, mosaic two-column layout.
All previous styling, textures, gradients and
decorative elements are removed entirely.

---

### Background

White — inherited from globals.css body default.
No background image. No gradient. No overlay.

---

### Layout — Mosaic pattern

**Row 1 — two columns:**

- Left: large display headline
- Right: supporting body text

**Row 2 — three equal stat columns**

- Separated from Row 1 by a thin
  `var(--color-border)` top border

**Row 3 — CTAs**

---

### Content

**Headline:**
"Stock the brand that belongs in your gym."

**Supporting text:**
"We're looking for the right gyms, distributors,
and retailers to bring Probell to market. If your
members train hard, this is the product they've
been waiting for."

**Stats:**

- 25g — Protein per serve
- 3 — Flavors launching
- 0 — Compromises

**CTAs:**

- Primary: "Partner With Us" → `/#contact`
- Secondary: "View Products" → `/#trending`

---

### Typography

- Headline: display font, large, black, uppercase
- Supporting text: body font, `var(--color-grey)`
- Stat values: display font, large, black
- Stat labels: body font, small, `var(--color-grey)`,
  uppercase, wide letter spacing

---

### Remove everything from previous build

- Grunge background image
- Top gradient fade
- Both previous display text lines
- Ink edge PNG and container
- Any commented out InkEdge references
- Any padding or spacing added for ink edge

---

### What must not change

- Section id `identity`
- Any other section or component

---

### Verify

- White background, no texture visible
- Two column layout at 1440px
- Three stats in a row below
- Both CTAs render correctly
- Build passes with zero errors

## Task 07 — Trending Section Redesign

**Status:** Complete — 26 May 2026
**Component:** `src/components/Trending.astro`

---

### Context

Trending is being fully rebuilt with a mosaic alternating
layout on a white background. Three products, three rows,
alternating image and content columns. All previous card
styling, dark backgrounds and grid structure are removed.

---

### Background

White — inherited from globals.css body default.
No background image. No dark card containers.

---

### Layout — Mosaic alternating rows

**Banner row — full width**
Large display headline left aligned:
"Performance Series."
Eyebrow label above: "TRENDING"
in `var(--color-red)`, uppercase, wide letter spacing

**Row 1 — two columns, equal width**

- Left: product image
- Right: product content

**Row 2 — two columns, equal width, reversed**

- Left: product content
- Right: product image

**Row 3 — two columns, equal width**

- Left: product image
- Right: product content

Generous padding between rows — `var(--space-xl)`
A thin `var(--color-border)` line separates each row.

---

### Images

Each image fills its column fully — no card border,
no border radius, edge to edge within the column.
Aspect ratio: 4/3 landscape — enough to show
the product with presence.

Row 1: `/public/images/trending/trending-strawberry.png`
Row 2: `/public/images/trending/trending-chocolate.png`
Row 3: `/public/images/trending/trending-pineapple.png`

---

### Content — per product

**Row 1 — Whey Strawberry**
Tag: COMING SOON
Name: Whey 100 Protein — Strawberry
Descriptor: 25g protein per serve.
Blue collar formula. No fillers, no shortcuts.
Detail line: Gluten free · Non GMO · Made in the USA

**Row 2 — Whey Cookies & Cream**
Tag: COMING SOON
Name: Whey 100 Protein — Cookies & Cream
Descriptor: 25g protein per serve.
No days off formula. Built for consistency.
Detail line: Gluten free · Non GMO · Made in the USA

**Row 3 — Creatine**
Tag: COMING SOON
Name: Creatine
Descriptor: Power output. Recovery.
More reps, faster recovery, no ceiling.
Detail line: Pure creatine monohydrate ·
Unflavored · Mixes clean

---

### Content column typography

- Tag: `var(--color-red)`, uppercase,
  `var(--text-label)`, wide letter spacing
- Product name: display font, large, black, uppercase
- Descriptor: body font, `var(--color-grey)`,
  comfortable line height
- Detail line: body font, small, `var(--color-grey)`,
  uppercase, wide letter spacing
- All content vertically centered within its column

---

### Remove everything from previous build

- All dark card backgrounds
- Four column grid structure
- Fourth placeholder card
- Any `var(--color-surface)` references
  within this component

---

### What must not change

- Section id `trending`
- Any other section or component

---

### Verify

- White background, no dark elements
- Three rows alternating correctly at 1440px
- All three product images load
- Content readable and correctly styled
- Build passes with zero errors

## Task 07 — Trending Section Redesign (Updated)

**Status:** Complete — 26 May 2026
**Component:** `src/components/Trending.astro`

---

### Context

Trending has a two part layout — a full width image
banner at the top, followed by a three column modular
grid for the three products. Each column has a different
internal rhythm breaking up uniformity and allowing
images to maintain their natural proportions.

---

### Part 1 — Banner row

Full width image with text overlaid.
Temporary image: `/public/images/hero/hero-main.png`
Overlay: dark gradient so text is legible.

Text overlaid on image:

- Eyebrow: "TRENDING" — white, uppercase,
  `var(--text-label)`, wide letter spacing
- Headline: "Performance Series." — white,
  display font, large

Banner height: approximately 50vh

---

### Part 2 — Three column modular grid

Three equal columns separated by thin
`1px solid var(--color-border)` vertical dividers.
No horizontal dividers.
Generous padding within each column.

**Column 1 — Whey Strawberry**

- Top: content block
  - Tag: "COMING SOON" in `var(--color-red)`
  - Product name: "Whey 100 Protein — Strawberry"
  - Descriptor: "25g protein per serve.
    Blue collar formula. No fillers, no shortcuts."
  - Detail: "Gluten Free · Non GMO · Made in the USA"
- Bottom: product image
  - `/public/images/trending/trending-strawberry.png`
  - Natural aspect ratio — no forced crop
  - `border-radius: 8px`

**Column 2 — Whey Cookies & Cream**

- Top: product image
  - `/public/images/trending/trending-chocolate.png`
  - Natural aspect ratio — no forced crop
  - `border-radius: 8px`
- Bottom: content block
  - Tag: "COMING SOON" in `var(--color-red)`
  - Product name: "Whey 100 Protein — Cookies & Cream"
  - Descriptor: "25g protein per serve.
    No days off formula. Built for consistency."
  - Detail: "Gluten Free · Non GMO · Made in the USA"

**Column 3 — Creatine**

- Top: content block
  - Tag: "COMING SOON" in `var(--color-red)`
  - Product name: "Creatine"
  - Descriptor: "Power output. Recovery.
    More reps, faster recovery, no ceiling."
  - Detail: "Pure creatine monohydrate ·
    Unflavored · Mixes clean"
- Bottom: product image
  - `/public/images/trending/trending-pineapple.png`
  - Natural aspect ratio — no forced crop
  - `border-radius: 8px`

---

### Typography — all content blocks

- Tag: `var(--color-red)`, uppercase,
  `var(--text-label)`, wide letter spacing
- Product name: display font, black, uppercase
- Descriptor: body font, black, 18px
- Detail line: body font, black,
  `var(--text-label)`, uppercase, wide letter spacing

---

### Remove everything from previous build

- Alternating row layout
- All horizontal dividers
- Any dark backgrounds or card containers

---

### What must not change

- Section id `trending`
- Any other section or component

---

### Verify

- Banner renders with image and overlaid text
- Three column grid renders correctly at 1440px
- Column 1 and 3: content top, image bottom
- Column 2: image top, content bottom
- Thin vertical dividers between columns
- All three product images load at natural proportions
- Build passes with zero errors

## Task 08 — Built for Strength Section Redesign

**Status:** Complete — 26 May 2026
**Component:** `src/components/BuiltForStrength.astro`

---

### Context

Built for Strength is being rebuilt using the same
mosaic alternating two column pattern as Trending.
Three products, three rows, image and content
alternating sides. Use existing images as placeholders.
No black borders anywhere in this component.

---

### Layout

Wrap in `<SectionWrapper>` — not full bleed.
White background inherited from globals.

**Banner row — full width**

- Eyebrow: "PERFORMANCE SERIES" in `var(--color-red)`
- Headline: "Built for Strength."
- Display font, black, large, uppercase

**Three alternating rows:**

Row 1 — image left, content right
Row 2 — content left, image right
Row 3 — image left, content right

Generous padding between rows: `var(--space-xl)`
No dividers. No borders. No dark backgrounds.

---

### Placeholder images

Use any existing product images from
`/public/images/trending/` until strength-specific
assets are available.

Row 1: `trending-strawberry.png`
Row 2: `trending-chocolate.png`
Row 3: `trending-pineapple.png`

Images: `border-radius: 8px`, natural aspect ratio,
`object-fit: contain`

---

### Content — three rows

**Row 1 — Whey 100 Protein**
Tag: STRENGTH
Name: Whey 100 Protein
Body: "The foundation of every serious stack.
25g of pure protein per serve. No fillers,
no shortcuts. Built for people who train
like their results depend on it — because they do."

**Row 2 — Creatine**
Tag: POWER
Name: Creatine
Body: "More reps. Heavier lifts. Faster recovery
between sets. Pure creatine monohydrate —
nothing added, nothing hidden. The most
researched supplement in sport. Now in
the only container worth lifting."

**Row 3 — Pre-Workout**
Tag: INTENSITY
Name: Pre-Workout
Body: "Explosive energy without the crash.
Dialled-in focus from the first rep to the last.
Coming soon — built to the same standard
as everything else Probell makes."

---

### Typography

- Tag: `var(--color-red)`, uppercase,
  `var(--text-label)`, wide letter spacing
- Name: display font, black, uppercase, large
- Body: body font, black, 18px,
  comfortable line height
- No grey text — all content black

---

### What must not change

- Section id `built-for-strength`
- Any other section or component
- No black borders anywhere

---

### Verify

- Three alternating rows correct at 1440px
- Banner renders above the rows
- All placeholder images load
- No borders, no dark backgrounds
- Wrapped in SectionWrapper
- Build passes with zero errors

---

## Task 09 — Built for Endurance Section Redesign

**Status:** Ready to implement
**Component:** `src/components/BuiltForEndurance.astro`

---

### Context

Identical pattern to Built for Strength.
Same mosaic alternating layout, different
products and content angle.
No black borders anywhere in this component.

---

### Layout

Wrap in `<SectionWrapper>` — not full bleed.
White background inherited from globals.

**Banner row — full width**

- Eyebrow: "PERFORMANCE SERIES" in `var(--color-gold)`
- Headline: "Built for Endurance."
- Display font, black, large, uppercase

**Three alternating rows:**
Row 1 — image left, content right
Row 2 — content left, image right
Row 3 — image left, content right

No dividers. No borders. No dark backgrounds.

---

### Placeholder images

Row 1: `trending-pineapple.png`
Row 2: `trending-strawberry.png`
Row 3: `trending-chocolate.png`

Images: `border-radius: 8px`, natural aspect ratio,
`object-fit: contain`

---

### Content — three rows

**Row 1 — Pre-Workout**
Tag: ENDURANCE
Name: Pre-Workout
Body: "Fuel longer. Sustained energy without
the spike and crash. Built for athletes who
train for time, not just weight.
Coming soon — worth the wait."

**Row 2 — Creatine**
Tag: RECOVERY
Name: Creatine
Body: "Recovery is where endurance is built.
Pure creatine monohydrate replenishes
what hard training takes. Go again
tomorrow because you did the work today."

**Row 3 — Whey 100 Protein**
Tag: CONSISTENCY
Name: Whey 100 Protein
Body: "Show up every day. Recover every night.
25g protein per serve keeps the engine
running. No compromise on formula,
no compromise on results."

---

### Typography

Same as Task 08 — all content black,
body text 18px, tags in `var(--color-gold)`
No grey text. No borders.

---

### What must not change

- Section id `built-for-endurance`
- Any other section or component
- No black borders anywhere

---

### Verify

- Three alternating rows correct at 1440px
- Banner renders above the rows
- Gold eyebrow not red
- All placeholder images load
- No borders, no dark backgrounds
- Wrapped in SectionWrapper
- Build passes with zero errors
