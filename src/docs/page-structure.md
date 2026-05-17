# Probell Nutrition — Page Structure

**Last updated: 14 May 2026**

---

## Purpose

This document is the build blueprint for every section on the homepage.
Claude Code reads the relevant section entry before writing any code.
Copy is exact — do not paraphrase or rewrite.
Layout decisions are confirmed — do not substitute without approval.

---

## Page Overview

| # | Section | Component | Border Breaker Out |
|---|---------|-----------|-------------------|
| 1 | Nav | `Nav.astro` | — |
| 2 | Hero | `Hero.astro` | Torn ink edge → Identity |
| 3 | Identity | `Identity.astro` | Product PNG breakout → Trending |
| 4 | Trending | `Trending.astro` | Full bleed image edge → Brand Story |
| 5 | Brand Story | `BrandStory.astro` | Diagonal clip-path → Built for Strength |
| 6 | Built for Strength | `BuiltForStrength.astro` | Hard cut → Bold Statement |
| 7 | Bold Statement | `BoldStatement.astro` | Torn ink edge → Built for Endurance |
| 8 | Built for Endurance | `BuiltForEndurance.astro` | Clean → Instagram |
| 9 | Instagram | `Instagram.astro` | Clean → Contact |
| 10 | Contact | `Contact.astro` | Clean → Footer |
| 11 | Footer | `Footer.astro` | — |

---

## Section 1 — Nav

**Component:** `src/components/Nav.astro`
**Position:** Fixed, full width, z-index above all content

### Layout

```
[ Logo ]                    [ Supplements · About · Contact  f  ig  | Join the Waitlist ]
  left                                                                         right
```

### Behavior

- Fixed position — stays at top on scroll
- Background: `rgba(0,0,0,0.9)` with `backdrop-filter: blur(8px)`
- Full width, no container constraint on background
- Inner content inside `.container` with `flex-between`

### Elements

**Logo**
- Asset: `/public/logo.png` — transparent background
- Height: `40px` — width auto
- Links to `/`

**Nav links**
- Font: `var(--font-body)`, `var(--text-label)`, weight 500
- Color: `var(--color-white)`
- Text: uppercase, `letter-spacing: 0.1em`
- Hover: `color: var(--color-red)`, `transition: var(--transition-fast)`
- Links: `Supplements` → `/supplements` · `About` → `/#brand-story` ·
  `Contact` → `/#contact`

**Social icons**
- Facebook icon — SVG, 20px, `var(--color-white)`, hover `var(--color-red)`
- Instagram icon — SVG, 20px, `var(--color-white)`, hover `var(--color-red)`
- Links: placeholder `href="#"` until client supplies URLs

**CTA**
- Text: `Join the Waitlist`
- Style: `.btn-primary`
- Links to `/#contact`

### Responsive

- Mobile (< 768px): hamburger menu icon right, logo left
- Mobile menu: full screen overlay, black background, links stacked centered
- Social icons and CTA inside mobile menu
- Hamburger toggle requires `client:load` island

---

## Section 2 — Hero

**Component:** `src/components/Hero.astro`
**Full bleed — no container on image**

### Layout

Full viewport height. Background image fills screen. Content overlaid
bottom-left. Dark gradient overlay on right side for text legibility.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│  [Full bleed photography — athlete + product]   │
│                                                 │
│                                                 │
│  HEADLINE                     [dark zone]       │
│  Sub-line                                       │
│  [ Join the Waitlist ]                          │
└─────────────────────────────────────────────────┘
         ~~~~~~~~ torn ink edge ~~~~~~~~
```

### Image

- File: `/public/images/hero/hero-main.jpg`
- Full viewport: `width: 100vw`, `height: 100vh`, `object-fit: cover`
- `loading="eager"`
- Dark overlay: `rgba(0,0,0,0.35)` — preserves image but ensures text reads

### Headline — four options

All four loaded in markup. One active via CSS class `.headline--active`.
Developer switches active class in browser to compare.

```
Option A: "Built for the Grind."
Option B: "The Only Protein You Can Actually Lift."
Option C: "No Days Off."
Option D: "Fuel the Grind."
```

- Font: `var(--font-display)`, `var(--text-hero)`
- Class: `.font-display-anton` or `.font-display-barlow` — match active display font
- Color: `var(--color-white)`
- Uppercase, `letter-spacing: -0.02em`, `line-height: 0.95`
- Position: bottom-left, `var(--space-xl)` from bottom, `var(--space-md)` from left

### Sub-line

```
"Probell Nutrition. Coming soon."
```

- Font: `var(--font-body)`, `var(--text-label)`
- Color: `var(--color-grey)`
- Uppercase, `letter-spacing: 0.15em`
- Margin top: `var(--space-sm)`

### CTA

- Text: `Join the Waitlist`
- Style: `.btn-primary`
- Margin top: `var(--space-md)`
- Links to `/#contact`

### Border breaker out

Torn ink edge at bottom of section.
SVG fill: `var(--color-black)` — matches Identity section background.
See Technique A in `design.md`.

### Responsive

- Mobile: headline scales via `clamp` automatically
- Content repositions to bottom-center on mobile
- CTA full width on mobile

---

## Section 3 — Identity

**Component:** `src/components/Identity.astro`
**Background:** `var(--color-black)`
**id:** `identity`

### Layout

Centered. Single column. Maximum width `800px`. Text only — no images
in the section itself. Product breakout sits at the bottom boundary.

### Copy — exact

```
"Fuel for people who already show up.
No shortcuts. No fillers. No compromise."
```

- Line 1: `var(--font-display)`, `var(--text-statement)`
- Line 2: `var(--font-display)`, `var(--text-section)`
- Both: uppercase, `var(--color-white)`, `letter-spacing: -0.02em`
- Line 2 color: `var(--color-red)` — accent the commitment line
- No CTA — section stands alone
- Padding: `var(--space-2xl)` top, `var(--space-xl)` bottom
  (extra bottom for product breakout)

### Border breaker out

Product PNG breakout — Probell Americana kettlebell PNG centered,
`position: absolute`, `bottom: -120px`.
See Technique B in `design.md`.

Product image: `/public/images/products/whey-cpb.png`
Adjust `bottom` offset in browser — target: product feels like it's
emerging from the section into Trending below.

### Responsive

- Mobile: text scales via `clamp`
- Product breakout: `width: 200px`, `bottom: -80px` on mobile
- Section padding reduced: `var(--space-xl)` top on mobile

---

## Section 4 — Trending

**Component:** `src/components/Trending.astro`
**Background:** `var(--color-black)`
**id:** `trending`

### Layout

Section heading left-aligned. Product grid below.
Extra top padding to accommodate product breakout from Identity above.

### Section heading

```
"Trending"
```

- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase
- Margin bottom: `var(--space-md)`

### Product grid

- Desktop (lg): 4 columns — `.grid-4`
- Tablet (md): 2 columns — `.grid-2`
- Mobile (sm): 1 column — swipeable horizontal carousel

Each card uses `.product-card` component.

### Products — 4 items

```
1. Whey Strawberry
   Image: /public/images/products/whey-strawberry.png
   Descriptor: "25g protein. Blue collar formula."
   Tag: Coming Soon

2. Whey Cookies
   Image: /public/images/products/whey-cookies-cream.png
   Descriptor: "25g protein. No days off formula."
   Tag: Coming Soon

3. Whey Caramel
   Image: /public/images/products/whey-salted-caramel.png
   Descriptor: "25g protein. Built for the grind."
   Tag: Coming Soon

4. [Fourth product — placeholder]
   Image: placeholder div, bg: var(--color-surface)
   Descriptor: "New products launching soon."
   Tag: Coming Soon
```

### Mobile carousel

Horizontal scroll, snap-scroll behaviour, no JS required:

```css
.product-carousel {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: var(--space-sm);
  padding-bottom: var(--space-sm);
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.product-carousel::-webkit-scrollbar { display: none; }

.product-carousel .product-card {
  scroll-snap-align: start;
  min-width: 80vw;
  flex-shrink: 0;
}
```

### Border breaker out

Full bleed image edge — Brand Story section opens immediately below
with no padding or divider. The transition is the image arriving.
See Technique C in `design.md`.

---

## Section 5 — Brand Story

**Component:** `src/components/BrandStory.astro`
**Background:** full bleed image, dark overlay
**id:** `brand-story`

### Layout

Two column. Image left (full bleed, fills column height).
Content right, vertically centered, inside container.

```
┌──────────────────┬──────────────────────────────┐
│                  │                              │
│   [Full bleed    │  Eyebrow label               │
│    gym interior  │  HEADLINE                    │
│    image]        │  Body copy                   │
│                  │                              │
└──────────────────┴──────────────────────────────┘
```

### Image

- File: `/public/images/brand-story/gym-interior.jpg`
- Left column: `width: 100%`, `height: 100%`, `object-fit: cover`
- No overlay on image — image is the visual anchor

### Eyebrow

```
"Our Story"
```

- Class: `.label-text--gold`
- Margin bottom: `var(--space-sm)`

### Headline

```
"Built in the Gym.
Designed for It."
```

- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase, `letter-spacing: -0.02em`

### Body copy

```
"Probell started with one idea — protein that performs as hard
as you do. Kettlebell-shaped. Uncompromising formula. Made in the USA."
```

- Font: `var(--font-body)`, `var(--text-body)`
- Color: `var(--color-grey)`
- `line-height: 1.6`
- Margin top: `var(--space-md)`

### Section padding

- Right column: `var(--space-xl)` padding all sides
- Minimum section height: `70vh`

### Border breaker out

Diagonal clip-path on section bottom.
See Technique D in `design.md`.

### Responsive

- Mobile: single column, image top (fixed height `300px`), content below
- Content padding reduces to `var(--space-lg)` on mobile

---

## Section 6 — Built for Strength

**Component:** `src/components/BuiltForStrength.astro`
**Background:** `var(--color-black)`
**id:** `built-for-strength`

### Layout

Section header full width. Product grid below — curated, 2 to 3 products.
Large imagery. Purpose-led, not a product catalogue.

### Eyebrow

```
"Performance Series"
```

- Class: `.label-text--red`
- Margin bottom: `var(--space-sm)`

### Headline

```
"Built for Strength"
```

- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase

### Sub-line

```
"25g protein per serve. Everything you need. Nothing you don't."
```

- Font: `var(--font-body)`, `var(--text-body)`
- Color: `var(--color-grey)`
- Margin top: `var(--space-sm)`

### Products — 2 to 3 items

Large format cards. Two column grid desktop, single column mobile.

```
1. Whey 100 Protein
   Image: /public/images/products/whey-cpb.png
   Descriptor: "The foundation. 25g protein, zero compromise."
   Tag: Coming Soon

2. [Creatine — placeholder]
   Image: placeholder div, bg: var(--color-surface)
   Descriptor: "Power output. Recovery. Built in."
   Tag: Coming Soon
```

Cards are larger than Trending — `min-height: 400px` on desktop.

### Border breaker out

Hard cut — no border breaker element.
Bold Statement arrives immediately.
See Technique E in `design.md`.

### Responsive

- Mobile: single column, cards full width

---

## Section 7 — Bold Statement

**Component:** `src/components/BoldStatement.astro`
**Full bleed — no container on image**
**id:** `bold-statement`

### Layout

Full viewport height. Background image fills screen.
Dark overlay. Single headline centered.

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         [Full bleed gym photography]            │
│                                                 │
│     "You Already Know Why You're Here."         │
│                                                 │
│                                                 │
└─────────────────────────────────────────────────┘
         ~~~~~~~~ torn ink edge ~~~~~~~~
```

### Image

- File: `/public/images/bold-statement/discipline.jpg`
- Full viewport: `width: 100vw`, `height: 100vh`, `object-fit: cover`
- Dark overlay: `rgba(0,0,0,0.55)` — heavier than hero, text must dominate
- `loading="lazy"`

### Headline — exact copy

```
"You Already Know Why You're Here."
```

- Font: `var(--font-display)`, `var(--text-statement)`
- Color: `var(--color-white)`
- Uppercase, `letter-spacing: -0.02em`, `line-height: 0.95`
- Position: centered — both horizontal and vertical
- Maximum width: `900px`
- No sub-line. No CTA. Nothing else.

### Border breaker out

Torn ink edge at bottom of section.
SVG fill: `var(--color-black)` — matches Built for Endurance background.
See Technique A in `design.md`.

### Responsive

- Headline scales via `clamp` automatically
- Overlay opacity stays consistent — do not reduce on mobile

---

## Section 8 — Built for Endurance

**Component:** `src/components/BuiltForEndurance.astro`
**Background:** `var(--color-black)`
**id:** `built-for-endurance`

### Layout

Mirror of Built for Strength — same structure, different products and accent.
Gold accent instead of red to differentiate visually.

### Eyebrow

```
"Performance Series"
```

- Class: `.label-text--gold`
- Margin bottom: `var(--space-sm)`

### Headline

```
"Built for Endurance"
```

- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase

### Sub-line

```
"Fuel longer. Recover faster. Go again."
```

- Font: `var(--font-body)`, `var(--text-body)`
- Color: `var(--color-grey)`
- Margin top: `var(--space-sm)`

### Products — 2 to 3 items

```
1. Pre-Workout — placeholder
   Image: placeholder div, bg: var(--color-surface)
   Descriptor: "Explosive energy. Dialled-in focus."
   Tag: Coming Soon

2. Creatine — placeholder
   Image: placeholder div, bg: var(--color-surface)
   Descriptor: "More reps. Faster recovery. No ceiling."
   Tag: Coming Soon
```

### Border breaker out

Clean transition — no border breaker.
Instagram section follows directly.

### Responsive

- Mobile: single column, cards full width

---

## Section 9 — Instagram

**Component:** `src/components/Instagram.astro`
**Background:** `var(--color-black)`
**id:** `instagram`

### Layout

Handle label above grid. Tight image grid below. No captions.

### Handle

```
"@probellnutrition"
```

- Font: `var(--font-body)`, `var(--text-label)`
- Color: `var(--color-grey)`
- Uppercase, `letter-spacing: 0.15em`
- Links to Instagram profile
- Margin bottom: `var(--space-md)`

### Grid

- Desktop: 6 columns, square images, `object-fit: cover`
- Tablet: 4 columns
- Mobile: 3 columns
- No gap or 1px gap — tight grid, images touch
- Images from Instagram embed or placeholder squares

### Implementation note

At launch use placeholder squares (`var(--color-surface)`) if
Instagram embed is not yet configured.

For live feed — use a lightweight Instagram embed service or
the Instagram Basic Display API. No heavy third-party widgets.

### Border breaker out

Clean transition — no border breaker.

---

## Section 10 — Contact

**Component:** `src/components/Contact.astro`
**Background:** `var(--color-surface)`
**id:** `contact`

### Layout

Two column. Content left — heading and context. Form right.

```
┌─────────────────────┬──────────────────────────┐
│                     │                          │
│  Eyebrow            │  [ Form fields ]         │
│  HEADLINE           │                          │
│  Sub-line           │  [ Submit button ]       │
│                     │                          │
└─────────────────────┴──────────────────────────┘
```

### Left column — content

**Eyebrow**
```
"Partner with Probell"
```
- Class: `.label-text--red`

**Headline**
```
"Stock Probell.
Be First."
```
- Font: `var(--font-display)`, `var(--text-section)`
- Color: `var(--color-white)`
- Uppercase

**Sub-line**
```
"Whether you're a gym, distributor, or retailer —
we want to hear from you."
```
- Font: `var(--font-body)`, `var(--text-body)`
- Color: `var(--color-grey)`
- Margin top: `var(--space-md)`

### Right column — form

Five fields. Uses `.form-group`, `.form-label`, `.form-input` classes.

```
Field 1: Full Name        — text input, required
Field 2: Business Name    — text input, required
Field 3: Email            — email input, required
Field 4: Interest         — select dropdown, required
          Options: Gym / Distributor / Retailer / Other
Field 5: Message          — textarea, optional
          Placeholder: "Tell us about your business and 
                        how you'd like to work with Probell."
```

**Submit button**
- Text: `Get in Touch`
- Style: `.btn-primary`
- Full width on mobile

**Form submission**
- Method: Formspree (preferred) or mailto fallback
- On success: inline success message replaces form
- Success message:
  ```
  "Thanks for reaching out. We'll be in touch soon."
  ```
- Success message: `var(--color-gold)`, `.label-text` style

**Client email:** confirm with developer before building

### Requires island

```astro
<Contact client:load />
```

Form submission handling requires client-side JavaScript.

### Responsive

- Mobile: single column, content top, form below
- All inputs full width on mobile

---

## Section 11 — Footer

**Component:** `src/components/Footer.astro`
**Background:** `var(--color-black)`
**Status:** Design to be confirmed with visual references

### Placeholder structure

Until footer design is confirmed, implement a minimal version:

**Top row**
- Logo left — `/public/logo.png`, height `32px`
- Tagline: `"Built for the Grind."` — `var(--color-grey)`, `var(--text-label)`

**Middle row — three columns**
- Column 1: Nav links — Supplements · About · Contact
- Column 2: Social — Facebook · Instagram (text labels, not icons)
- Column 3: Legal — Privacy Policy · Terms

**Bottom row**
- Copyright: `"© 2026 Probell Nutrition. All rights reserved."`
- `var(--color-grey)`, `var(--text-label)`

**Note:** Footer will be redesigned with visual references before
launch. This placeholder ensures the page is complete end to end.

### Responsive

- Mobile: single column stack, all rows centered

---

## Supplements Page

**Page:** `src/pages/supplements.astro`
**Status:** Deferred — structure to be specced separately

The supplements page will list all products in full.
It is linked from the nav but not built in this phase.

For launch: create a minimal placeholder page with:
- Nav component
- Heading: `"Supplements — Coming Soon"`
- Sub-line: `"Full range launching soon. Get in touch to find out more."`
- Link back to `/#contact`
- Footer component

---

## Asset Checklist

| Asset | File path | Status |
|-------|-----------|--------|
| Logo transparent | `/public/logo.png` | Pending — client to supply |
| Hero image | `/public/images/hero/hero-main.jpg` | ✓ Generated |
| Brand story image | `/public/images/brand-story/gym-interior.jpg` | ✓ Generated |
| Bold statement image | `/public/images/bold-statement/discipline.jpg` | ✓ Client supplied |
| Whey CPB PNG | `/public/images/products/whey-cpb.png` | Pending |
| Whey Cookies & Cream PNG | `/public/images/products/whey-cookies-cream.png` | Pending |
| Whey Salted Caramel PNG | `/public/images/products/whey-salted-caramel.png` | Pending |
| Favicon | `/public/favicon.ico` | Pending |
