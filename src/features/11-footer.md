# Probell Nutrition — Footer Spec

**Version 2 · 17 May 2026**
**Status: Not started**

---

## Goal

Dark, considered footer. Not an afterthought — the last thing a visitor
sees and should feel as intentional as the hero. Clean four column layout,
logo left, navigation and product links centre, social icons right.
Hard edges — no border radius. Copyright bar at bottom.

---

## Reference

Visual reference: NutsDev footer structure — adapted for Probell brand.
`docs/brand.md` — Brand principles
`docs/design.md` — Color tokens, typography

---

## Design Tokens

- Background: `var(--color-black)`
- Border top: `1px solid var(--color-border)`
- Text primary: `var(--color-white)`
- Text secondary: `var(--color-grey)`
- Links hover: `var(--color-red)`
- Social icon border: `var(--color-border)`
- Social icon hover background: `var(--color-red)`
- Font: `var(--font-body)`, `var(--text-label)`
- Logo height: `40px`

---

## Layout

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [ Logo ]          [ Links ]    [ Products ]   [ Follow Us ]   │
│  Built for                                     [ fb ]  [ ig ]  │
│  the Grind.                                                     │
│                                                                 │
│ ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  © 2026 Probell Nutrition. All rights reserved.  Privacy Policy │
└─────────────────────────────────────────────────────────────────┘
```

- Four columns: Logo · Links · Products · Follow Us
- Logo column wider — approximately 2fr, others 1fr each
- Hard edges — no border radius anywhere
- No background texture — pure `var(--color-black)`

---

## Tasks

### 1. Create Footer.astro

File: `src/components/Footer.astro`

### 2. Top section — four columns

**Column 1 — Logo + tagline**

- Logo: `/public/logo-light.png`, height `40px`, links to `/`
- Tagline below logo: `"Built for the Grind."`
- Tagline: `.label-text`, `var(--color-grey)`
- Margin top between logo and tagline: `var(--space-sm)`
- Column has more width than others — logo needs breathing room

**Column 2 — Links**

Column label: `"Links"` — `.label-text`, `var(--color-white)`

Links — each on its own line:
- `Home` → `/`
- `Supplements` → `/supplements`
- `About` → `/#brand-story`
- `Contact` → `/#contact`

Link styles:
- Font: `var(--font-body)`, `var(--text-label)`
- Color: `var(--color-grey)`
- Uppercase, `letter-spacing: 0.1em`
- Hover: `var(--color-red)`, `transition: var(--transition-fast)`
- Display block, `margin-top: var(--space-xs)`

**Column 3 — Products**

Column label: `"Products"` — `.label-text`, `var(--color-white)`

Links — each on its own line:
- `Whey 100` → `/supplements`
- `Creatine` → `/supplements`
- `Pre-Workout` → `/supplements`
- `Mass Gainer` → `/supplements`

Same link styles as column 2.
All link to `/supplements` for now — individual product pages deferred.

**Column 4 — Follow Us**

Column label: `"Follow Us"` — `.label-text`, `var(--color-white)`

Two social icon boxes side by side:

- Facebook icon — boxed
- Instagram icon — boxed

Icon box styles:
- Size: `40px × 40px`
- Border: `1px solid var(--color-border)`
- Border radius: `0` — hard corners
- Icon: SVG, `var(--color-white)`, centered
- Hover: background `var(--color-red)`, border color `var(--color-red)`
- Transition: `var(--transition-base)`
- Both `href="#"` placeholder until client supplies URLs
- Gap between boxes: `var(--space-xs)`

### 3. Divider

Full width `1px solid var(--color-border)` between top section
and copyright bar. Margin: `var(--space-lg)` top and bottom.

### 4. Copyright bar

Single row — copyright left, legal right.

**Left:**
```
"© 2026 Probell Nutrition. All rights reserved."
```
- `.label-text`, `var(--color-grey)`

**Right:**
- `Privacy Policy` → `/legal`
- Same label text style
- Hover: `var(--color-white)`

### 5. Section padding

- Top padding: `var(--space-xl)`
- Bottom padding: `var(--space-lg)`

### 6. Import into BaseLayout

Footer imported in `src/layouts/BaseLayout.astro` below `<slot />`.
Appears on all pages automatically.

---

## Responsive

- Tablet: collapse to two columns — logo + tagline top full width,
  Links and Products side by side, Follow Us below
- Mobile: single column stack, all sections centered
  Logo centered, tagline centered, links centered
  Social icons centered, copyright centered

---

## Confirmed Working ✓

- [ ] Logo light version renders — links to `/`
- [ ] Tagline correct copy and style
- [ ] Four columns render correctly on desktop
- [ ] Links column — correct links and hover states
- [ ] Products column — correct links and hover states
- [ ] Social icon boxes — correct size, border, hover state
- [ ] Divider renders correctly
- [ ] Copyright correct — correct year, left aligned
- [ ] Privacy Policy link right aligned
- [ ] No border radius anywhere — hard corners throughout
- [ ] Tablet: two column layout
- [ ] Mobile: single column, centered
- [ ] Footer appears on all pages via BaseLayout
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No newsletter signup
- No background texture or photography
- No border radius — hard edges only
- No real social URLs — placeholder only
- No individual product page links — all go to `/supplements`
- No phone number or address — not confirmed
