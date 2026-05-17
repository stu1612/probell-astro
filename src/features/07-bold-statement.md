# Probell Nutrition — Bold Statement Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Full viewport palate cleanser. One headline. Full bleed photography.
No product. No CTA. No UI. Pure brand voice.
Torn ink edge border breaker at bottom into Built for Endurance.

---

## Reference

`docs/page-structure.md` — Section 7: Bold Statement
`docs/design.md` — Border Breaker Technique A

---

## Design Tokens

- Background: full bleed image + `rgba(0,0,0,0.55)` overlay
- Headline: `var(--font-display)`, `var(--text-statement)`, `var(--color-white)`
- Section height: `100vh`
- id: `bold-statement`

---

## Image Asset

- File: `/public/images/bold-statement/discipline.jpg`
- Must exist before building — confirm in asset checklist
- `loading="lazy"`, `object-fit: cover`, full viewport
- Overlay heavier than hero — `rgba(0,0,0,0.55)`

---

## Tasks

### 1. Create BoldStatement.astro

File: `src/components/BoldStatement.astro`

Structure mirrors Hero but centered and with heavier overlay:
- Full viewport section, `position: relative`, `overflow: hidden`
- Astro `<Image />` — full bleed, absolute, `object-fit: cover`
- Dark overlay — `rgba(0,0,0,0.55)`, absolute, `inset: 0`
- Content — `position: absolute`, centered both axes
  `top: 50%`, `left: 50%`, `transform: translate(-50%, -50%)`

### 2. Headline — exact copy

```
"You Already Know Why You're Here."
```

- Font: `var(--font-display)`, `var(--text-statement)`
- Color: `var(--color-white)`
- Class: `display-text`
- `text-align: center`
- `max-width: 900px`
- Nothing else — no sub-line, no CTA, no supporting copy

### 3. Torn ink edge — border breaker

Reuse `TornEdge.astro` component at bottom of section.
SVG fill: `var(--color-black)` — matches Built for Endurance background.

### 4. Import into index.astro

Add BoldStatement below BuiltForStrength in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Image fills full viewport
- [ ] Overlay heavier than hero — `rgba(0,0,0,0.55)`
- [ ] Headline centered — correct copy, font, and size
- [ ] No other elements present — nothing else in the section
- [ ] Torn ink edge visible at section bottom
- [ ] Responsive — headline scales correctly on mobile
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No sub-line
- No CTA
- No product image
- No supporting copy
- Nothing other than the headline and background image
