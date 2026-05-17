# Probell Nutrition — Hero Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Full viewport hero. Full bleed photography. Four headline options
switchable via CSS class. Torn ink edge border breaker at bottom.

---

## Reference

`docs/page-structure.md` — Section 2: Hero
`docs/design.md` — Border Breaker Technique A

---

## Design Tokens

- Background: full bleed image + `rgba(0,0,0,0.35)` overlay
- Headline: `var(--font-display)`, `var(--text-hero)`, `var(--color-white)`
- Sub-line: `var(--font-body)`, `var(--text-label)`, `var(--color-grey)`
- CTA: `.btn-primary`
- Section height: `100vh`

---

## Image Asset

- File: `/public/images/hero/hero-main.jpg`
- Must exist before building — confirm in asset checklist
- `loading="eager"`, `format="webp"`, `object-fit: cover`

---

## Tasks

### 1. Create Hero.astro

File: `src/components/Hero.astro`

Structure:
- Full viewport section, `position: relative`, `overflow: hidden`
- Astro `<Image />` — full bleed, `object-fit: cover`, `position: absolute`
- Dark overlay div — `rgba(0,0,0,0.35)`, `position: absolute`, `inset: 0`
- Content div — `position: absolute`, bottom-left, `var(--space-xl)` from
  bottom, `var(--space-md)` from left, `max-width: 800px`

### 2. Four headline options

All four in markup simultaneously.
One active via `.headline--active` class.
Inactive headlines: `display: none`.

```astro
<h1 class="headline headline--active">Built for the Grind.</h1>
<h1 class="headline">The Only Protein You Can Actually Lift.</h1>
<h1 class="headline">No Days Off.</h1>
<h1 class="headline">Fuel the Grind.</h1>
```

Developer switches `.headline--active` in browser to compare.
Do not hard-delete the inactive options.

### 3. Sub-line

```
"Probell Nutrition. Coming soon."
```

Below active headline. `.label-text` class.

### 4. CTA button

```
"Join the Waitlist"
```

`.btn-primary` class. Links to `/#contact`.
Margin top: `var(--space-md)`.

### 5. Torn ink edge — border breaker

`TornEdge.astro` UI component at bottom of Hero section.
SVG fill: `var(--color-black)`.

Create `src/components/ui/TornEdge.astro`:

```astro
---
interface Props {
  fill?: string;
  flipX?: boolean;
}
const { fill = 'var(--color-black)', flipX = false } = Astro.props;
---
<div class="torn-edge-bottom" style={flipX ? 'transform: scaleX(-1)' : ''}>
  <svg viewBox="0 0 1440 80" preserveAspectRatio="none"
       xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0,35 C120,65 240,10 380,45 C520,75 600,15 720,40
         C840,65 960,20 1080,50 C1200,75 1320,25 1440,45 L1440,80 L0,80 Z"
      fill={fill}
    />
  </svg>
</div>
```

Use `<TornEdge fill="var(--color-black)" />` at bottom of Hero.

### 6. Import into index.astro

Add Hero below Nav in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Hero image fills full viewport
- [ ] Dark overlay visible — image readable beneath
- [ ] Active headline displays correctly — correct font and size
- [ ] Inactive headlines hidden
- [ ] Sub-line visible below headline
- [ ] CTA button correct style — links to `/#contact`
- [ ] Content positioned bottom-left
- [ ] Torn ink edge visible at section bottom
- [ ] Responsive — headline scales on mobile
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No scroll-driven animations
- No video background
- No parallax effect
- Headline font decision deferred to browser review
