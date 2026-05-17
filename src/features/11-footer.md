# Probell Nutrition — Footer Spec

**Version 1 · 14 May 2026**
**Status: Deferred — placeholder only at launch**

---

## Goal

A considered, on-brand footer — not an afterthought.
Final design requires visual reference review before building.
At launch: implement clean placeholder that completes the page.
Full redesign in phase 2 once visual references are confirmed.

---

## Reference

`docs/page-structure.md` — Section 11: Footer
`docs/brand.md` — Brand principles

---

## Design Tokens

- Background: `var(--color-black)`
- Border top: `1px solid var(--color-border)`
- Text: `var(--color-grey)`, `var(--text-label)`
- Links hover: `var(--color-white)`
- Logo height: `32px`

---

## Phase 1 — Placeholder (build now)

### Tasks

#### 1. Create Footer.astro

File: `src/components/Footer.astro`

#### 2. Top row

Two column — logo + tagline left, nothing right.

**Logo:**
- Asset: `/public/logo.png`, height `32px`
- Links to `/`

**Tagline below logo:**
```
"Built for the Grind."
```
- Class: `.label-text`
- Color: `var(--color-grey)`
- Margin top: `var(--space-xs)`

#### 3. Divider

```html
<div class="divider" style="margin: var(--space-md) 0;"></div>
```

#### 4. Middle row — three columns

```css
.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
}
```

**Column 1 — Navigate**

Label: `"Navigate"` — `.label-text`

Links:
- `Supplements` → `/supplements`
- `About` → `/#brand-story`
- `Contact` → `/#contact`

**Column 2 — Follow**

Label: `"Follow"` — `.label-text`

Links:
- `Facebook` → `#` placeholder
- `Instagram` → `#` placeholder

**Column 3 — Legal**

Label: `"Legal"` — `.label-text`

Links:
- `Privacy Policy` → `/legal`
- `Terms of Use` → `/legal`

All links:
- Color: `var(--color-grey)`
- Hover: `var(--color-white)`, `transition: var(--transition-fast)`
- Font: `var(--font-body)`, `var(--text-label)`
- Uppercase, `letter-spacing: 0.1em`
- Display block, `margin-top: var(--space-xs)`

#### 5. Divider

Second divider below middle row.

#### 6. Bottom row

Single row — copyright left.

```
"© 2026 Probell Nutrition. All rights reserved."
```

- Color: `var(--color-grey)`
- Class: `.label-text`
- Padding bottom: `var(--space-md)`

#### 7. Import into BaseLayout

Add Footer to `src/layouts/BaseLayout.astro` below `<slot />`.
Footer appears on all pages automatically.

#### 8. Responsive

Mobile: all columns stack single column, centered.

```css
@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr; text-align: center; }
}
```

---

## Phase 2 — Full Design (deferred)

The following is deferred until visual references are confirmed
with the developer:

- Editorial dark footer with stronger visual hierarchy
- Large brand statement or wordmark treatment
- Potential background texture or photography element
- Social icons as SVG rather than text labels
- More considered column layout and spacing
- Possible accent color usage

**Before phase 2 begins:**
- Developer reviews footer references from comparable brand sites
- Developer saves reference screenshots
- New footer spec written based on confirmed direction
- Footer component rebuilt — not patched

---

## Confirmed Working ✓ (Phase 1)

- [ ] Logo visible — links to `/`
- [ ] Tagline correct copy and style
- [ ] Dividers render correctly
- [ ] Three column grid — Navigate, Follow, Legal
- [ ] All links correct — placeholders where noted
- [ ] Copyright correct — correct year
- [ ] Mobile: single column stack
- [ ] Footer appears on all pages via BaseLayout
- [ ] `npm run build` passes

---

## What Is Not In This Spec (Phase 1)

- No editorial design — placeholder only
- No background texture or photography
- No large typographic treatment
- No newsletter signup
- No real social URLs — placeholder only
