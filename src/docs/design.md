# Probell Nutrition — Design System

**Last updated: 14 May 2026**

---

## Purpose

This document defines every visual and layout rule for the Probell Nutrition
frontend. It is a strict contract, not a guideline.

Read this document in full before writing any UI code.
Do not deviate without explicit approval.

---

## 0. Aesthetic Direction — Locked

Dark. Gritty. Americana. Image-led. Bold type. Minimal UI chrome.

The site feels built, not designed. Heavy photography, tight layouts,
aggressive typography, and deliberate section transitions. Nothing soft.
Nothing apologetic. Nothing that could belong to a different brand.

---

## 1. Color System

### Tokens

All colors are defined as CSS custom properties in `globals.css`.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#000000` | Primary background |
| `--color-red` | `#C0392B` | Primary accent — CTAs, highlights, active states |
| `--color-gold` | `#C9A84C` | Secondary accent — Built for sections, labels |
| `--color-white` | `#FFFFFF` | Primary text |
| `--color-grey` | `#A0A0A0` | Secondary text, captions, labels |
| `--color-border` | `#222222` | Dividers, card borders, subtle separators |
| `--color-surface` | `#111111` | Slightly lifted surface — cards, form backgrounds |

### Usage rules — STRICT

```
✓ var(--color-black)       background default
✓ var(--color-red)         CTAs, active borders, highlights
✓ var(--color-gold)        secondary labels, Built for Endurance accent
✓ var(--color-white)       headlines, primary text
✓ var(--color-grey)        body copy, secondary text
✓ var(--color-border)      dividers, borders
✓ var(--color-surface)     card and form backgrounds
```

```
✗ Any raw hex value in component code
✗ Any Tailwind palette color if Tailwind is used
✗ Any rgba() value not derived from a token
✗ Any gradient — no gradients anywhere on the site
✗ Any color not in the token list above
```

If a color is needed that does not exist — add it to `globals.css` first.
Never improvise with a raw value.

### Overlay exception

Dark overlays on photography are permitted and use:

```css
background: rgba(0, 0, 0, 0.5); /* adjust opacity as needed */
```

This is the only permitted rgba() value not derived from a token.

---

## 2. Typography

### Font stack

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display A | Anton | 400 | Hero headlines, bold statements |
| Display B | Barlow Condensed | 700, 900 | Section titles, product names |
| Body A | Space Grotesk | 300, 400, 500 | Body copy — primary option |
| Body B | DM Sans | 300, 400, 500 | Body copy — comparison option |

Display font is decided in the browser against real photography.
Body font is decided in the browser against real content.
Both options are imported — one is activated per session decision.

### CSS classes

```css
.font-display-anton    { font-family: 'Anton', sans-serif; }
.font-display-barlow    { font-family: 'Barlow Condensed', sans-serif;
                     font-weight: 900; }
.font-body-grotesk         { font-family: 'Space Grotesk', sans-serif; }
.font-body-dmsans    { font-family: 'DM Sans', sans-serif; }
                   
```

### Scale

All headline sizes use clamp() for responsive scaling.
No fixed px font sizes for display text.

| Token | Value | Usage |
|-------|-------|-------|
| `--text-hero` | `clamp(4rem, 10vw, 9rem)` | Hero headline |
| `--text-statement` | `clamp(3rem, 7vw, 6rem)` | Bold statement section |
| `--text-section` | `clamp(2rem, 5vw, 3.5rem)` | Section headings |
| `--text-product` | `clamp(1.5rem, 3vw, 2rem)` | Product names |
| `--text-body` | `1rem` | Body copy |
| `--text-label` | `0.75rem` | Labels, eyebrows, tags |

### Rules

- All display text: uppercase
- All display text: tight letter spacing — `letter-spacing: -0.02em`
- Body text: normal case, comfortable line height — `line-height: 1.6`
- No centered text blocks as a default — left align unless layout demands otherwise
- No text decorations — no underlines on headings
- Labels and eyebrows: uppercase, wide letter spacing — `letter-spacing: 0.15em`

---

## 3. Spacing System

Simple scale. No arbitrary values.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight internal gaps |
| `--space-sm` | `1rem` | Component internal padding |
| `--space-md` | `2rem` | Between elements within a section |
| `--space-lg` | `4rem` | Section internal padding top/bottom |
| `--space-xl` | `6rem` | Large section padding |
| `--space-2xl` | `10rem` | Hero and statement sections |

### Rules

- Sections use `--space-lg` or `--space-xl` vertical padding minimum
- No arbitrary spacing values — e.g. `margin-top: 37px`
- Tighter than a typical minimal site — density is intentional
- Internal component spacing uses `--space-xs` to `--space-md` only

---

## 4. Layout

### Container

```css
.container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--space-md);
}
```

### Grid helpers

```css
.grid-2   { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
.grid-3   { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); }
.grid-4   { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); }
```

Responsive behaviour defined per section in `page-structure.md`.

### Rules

- All content inside `.container` unless explicitly full bleed
- Full bleed sections have no container — image or color runs edge to edge
- No max-width on full bleed photography sections
- Left-aligned layouts preferred — centred layouts only for statement moments

---

## 5. Border Breakers

Border breakers are the primary visual technique for section transitions.
They replace standard horizontal divides with deliberate design moments.

Each transition has an assigned technique — defined in `page-structure.md`.
Do not substitute techniques without approval.

### Technique A — Torn ink edge

Used at: Hero → Identity, Bold Statement → Built for Endurance

Implementation: SVG mask with organic torn edge shape positioned absolutely
at the bottom of the upper section. The SVG fill matches the lower section
background color, creating the illusion of a torn boundary.

```html
<div class="torn-edge-bottom">
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
    <path d="M0,40 C200,80 400,0 600,40 C800,80 1000,20 1200,50 
             C1350,70 1400,30 1440,40 L1440,80 L0,80 Z" 
          fill="var(--color-black)"/>
  </svg>
</div>
```

The SVG path should feel hand-drawn and irregular — not smooth or geometric.
Adjust the path control points to create a convincingly organic edge.

### Technique B — Product image breakout

Used at: Identity → Trending

Implementation: Product PNG positioned absolutely at the bottom of the
Identity section with a negative bottom offset, overlapping into the
Trending section below. The section below has matching top padding to
accommodate the breakout.

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

### Technique C — Full bleed image edge

Used at: Trending → Brand Story

Implementation: Brand Story section opens with a full-bleed image that
has no container padding — runs edge to edge. No border or divider between
sections. The visual break is the image itself arriving at full width.

### Technique D — Diagonal clip-path

Used at: Brand Story → Built for Strength

Implementation: CSS clip-path on the Brand Story section creating a
diagonal bottom edge rather than horizontal.

```css
.clip-diagonal-bottom {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
}
```

### Technique E — Hard cut

Used at: Built for Strength → Bold Statement

Implementation: No border breaker. The contrast between the product
section and the full-bleed statement section creates the break.
Black background both sides — the image is the transition.

---

## 6. Component Rules

### Buttons

Two styles only.

**Primary — Red pill:**
```css
.btn-primary {
  background: var(--color-red);
  color: var(--color-white);
  padding: 0.75rem 2rem;
  border-radius: 999px;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.btn-primary:hover { opacity: 0.85; }
```

**Secondary — Gold outline:**
```css
.btn-secondary {
  background: transparent;
  color: var(--color-gold);
  padding: 0.75rem 2rem;
  border-radius: 999px;
  border: 1px solid var(--color-gold);
  font-family: var(--font-body);
  font-weight: 500;
  font-size: var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}
.btn-secondary:hover {
  background: var(--color-gold);
  color: var(--color-black);
}
```

No other button styles without approval.
One primary CTA per section maximum.

### Tags

```css
.tag {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border: 1px solid var(--color-border);
  color: var(--color-grey);
  font-size: var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border-radius: 4px;
}

.tag-coming-soon {
  border-color: var(--color-gold);
  color: var(--color-gold);
}
```

### Product cards

- Black background — `var(--color-surface)`
- Border — `1px solid var(--color-border)`
- No border radius — hard corners only
- Product image top, content below
- One-line descriptor in `var(--color-grey)`
- `Coming Soon` tag always present at launch
- No price, no add to cart

### Nav

- Fixed position, full width
- Background: `rgba(0,0,0,0.9)` with backdrop blur
- Logo left — PNG asset
- Links right — uppercase, `var(--text-label)`, Space Grotesk 500
- Social icons right of links — simple SVG, `var(--color-white)`
- CTA pill rightmost — `btn-primary` style
- No dropdown menus
- Mobile: hamburger menu, full screen overlay

### Forms

- Input background: `var(--color-surface)`
- Input border: `1px solid var(--color-border)`
- Input border on focus: `1px solid var(--color-red)`
- Input text: `var(--color-white)`
- Input placeholder: `var(--color-grey)`
- No border radius on inputs — hard corners
- Label above input — uppercase, `var(--text-label)`, `var(--color-grey)`

---

## 7. Image Handling

- All images served via Astro's built-in `<Image />` component
- All images output as WebP with fallback
- Hero and full bleed images: `layout="fill"`, `object-fit="cover"`
- Product PNGs: transparent background, `object-fit="contain"`
- No images without explicit width and height attributes
- All photography has a dark overlay option via `.img-overlay` class

```css
.img-overlay {
  position: relative;
}
.img-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.4);
}
```

---

## 8. Animation Rules

No animations. No transitions on page load. No scroll-driven effects.

The only permitted transitions:

- Button hover — `opacity` or `background` — `0.2s ease` maximum
- Nav link hover — `color` — `0.15s ease` maximum
- Form input focus — `border-color` — `0.15s ease` maximum

No other motion without explicit approval.

---

## 9. Responsive Breakpoints

| Token | Value |
|-------|-------|
| `--bp-sm` | `640px` |
| `--bp-md` | `768px` |
| `--bp-lg` | `1024px` |
| `--bp-xl` | `1280px` |

Mobile first. All components built for small screen, scaled up.

---

## 10. Implementation Rule

Before implementing any UI:

1. Confirm which color tokens will be used — no raw values
2. Confirm which typography tokens apply
3. Confirm which border breaker technique is assigned to this section
4. Confirm the responsive behaviour from `page-structure.md`
5. Then implement

Do not jump straight to code.

---

## Document Map

| File | Purpose |
|------|---------|
| `brand.md` | Brand principles, voice, photography rules |
| `design.md` | This document — tokens, components, layout |
| `globals.css` | CSS custom properties and imports |
| `coding-standards.md` | Astro rules, file structure, naming |
| `page-structure.md` | Per-section build blueprint |
| `ai-interaction.md` | Claude Code working process |
| `progress-tracker.md` | Current build state and next actions |
