# Probell Nutrition — Design System

**Last updated: 19 Jul 2026 — reconciled against progress-tracker.md through Session 33**

---

## Purpose

This document defines every visual and layout rule for the Probell
Nutrition frontend. It is a strict contract, not a guideline.

Read this document in full before writing any UI code.
Do not deviate without explicit approval — or without a `Deviation:`
prefix per `ai-interaction.md`, logged accordingly.

---

## 0. Aesthetic Direction — Locked

Dark. Gritty. Americana. Image-led. Bold type. Minimal UI chrome.

The site feels built, not designed. Heavy photography, tight layouts,
aggressive typography, and deliberate section transitions. Nothing soft.
Nothing apologetic. Nothing that could belong to a different brand.

**Note:** the BrandStory ("Emotion") section was rebuilt Session 24 on
a **white** background as a social-proof/stats section — this is a
deliberate, confirmed exception to the otherwise-dark aesthetic, not a
drift. Treat it as locked, not as something to "fix" back to dark.

---

## 1. Color System

### Tokens

All colors are defined as CSS custom properties in `globals.css`.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#000000` | Primary background |
| `--color-red` | `#C0392B` | Primary accent — CTAs, highlights, active states |
| `--color-gold` | `#C9A84C` | Secondary accent — labels, ghost numbers |
| `--color-white` | `#FFFFFF` | Primary text |
| `--color-grey` | `#A0A0A0` | Secondary text, captions, labels |
| `--color-border` | `#222222` | Dividers, card borders, subtle separators |
| `--color-surface` | `#111111` | Slightly lifted surface — cards, form backgrounds |
| `--color-bg-warm` | `#F5F3EF` | **Added Session 16.** Warm off-white background — used for the light-treatment product section |

### Usage rules — STRICT

```
✓ var(--color-black)       background default
✓ var(--color-red)         CTAs, active borders, highlights
✓ var(--color-gold)        secondary labels, ghost numbers
✓ var(--color-white)       headlines, primary text
✓ var(--color-grey)        body copy, secondary text
✓ var(--color-border)      dividers, borders
✓ var(--color-surface)     card and form backgrounds
✓ var(--color-bg-warm)     warm off-white section backgrounds
```

```
✗ Any raw hex value in component code
✗ Any rgba() value not derived from a token, except the two exceptions below
✗ Any gradient — no gradients anywhere on the site
✗ Any color not in the token list above
```

If a color is needed that does not exist — add it to `globals.css`
first. Never improvise with a raw value.

### Overlay exceptions

Two permitted `rgba()`/raw-value uses not derived from a color token:

1. **Dark overlays on photography:**
   ```css
   background: rgba(0, 0, 0, 0.5); /* adjust opacity as needed */
   ```
2. **Ghost numbers (ProductStrips):** `color` set on a color token, with
   `opacity: 0.08` applied separately — this is a token-based approach,
   not a raw value, and is the confirmed pattern (Session 24). Do not
   use `-webkit-text-stroke` with a raw color for this — an earlier
   session (23) tried a stroke-based ghost number using
   `var(--color-border)`; the current, confirmed approach is the
   opacity-on-token method from Session 24.

---

## 2. Typography

### Font stack

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| Display A | Anton | 400 | Hero headlines, statement moments |
| Display B | Barlow Condensed | 700, 900 | Section titles, product names |
| Body A | Space Grotesk | 300, 400, 500 | Body copy — primary option |
| Body B | DM Sans | 300, 400, 500 | Body copy — comparison option |

Display and body font choice is still an **open decision** as of
Session 33 — decide in browser against real photography/content, per
`progress-tracker.md`.

### CSS classes

```css
.font-display-anton  { font-family: 'Anton', sans-serif; }
.font-display-barlow  { font-family: 'Barlow Condensed', sans-serif; font-weight: 900; }
.font-body-grotesk    { font-family: 'Space Grotesk', sans-serif; }
.font-body-dmsans     { font-family: 'DM Sans', sans-serif; }
```

### Scale

All headline sizes use `clamp()`. No fixed px font sizes for display
text.

| Token | Value | Usage |
|-------|-------|-------|
| `--text-hero` | `clamp(4rem, 10vw, 9rem)` | Hero headline |
| `--text-statement` | `clamp(3rem, 7vw, 6rem)` | Statement moments |
| `--text-section` | `clamp(2rem, 5vw, 3.5rem)` | Section headings |
| `--text-product` | `clamp(1.5rem, 3vw, 2rem)` | Product names |
| `--text-body` | `1rem` | Body copy |
| `--text-label` | `0.75rem` | Labels, eyebrows, tags |

**Known raw-value exceptions, confirmed and accepted (not violations
to fix):** `18px` body text and `1rem`/`18px` on specific ProductStrips
elements (Sessions 21, 22) — spec explicitly called for these where no
matching token existed. Don't "correct" these back to a token without
checking whether the exception is still intentional.

### Rules

- Display text: uppercase, `letter-spacing: -0.02em`, `line-height: 0.95`
- Body text: normal case, `line-height: 1.6`
- No centered text blocks as a default — left align unless layout demands otherwise
- No text decorations — no underlines on headings
- Labels/eyebrows: uppercase, `letter-spacing: 0.15em`

---

## 3. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `0.5rem` | Tight internal gaps |
| `--space-sm` | `1rem` | Component internal padding |
| `--space-md` | `2rem` | Between elements within a section |
| `--space-lg` | `4rem` | Section internal padding top/bottom |
| `--space-xl` | `6rem` | Large section padding |
| `--space-2xl` | `10rem` | Hero and statement-scale sections |

No arbitrary spacing values. If a value is needed that isn't in the
system, flag it and add it to `globals.css` first.

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
.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); }
.grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--space-md); }
.grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-md); }
```

### Rules

- All content inside `.container` unless explicitly full bleed
- Full bleed sections have no container — image or color runs edge to edge
- No max-width on full bleed photography sections
- Left-aligned layouts preferred — centred layouts only for statement moments

---

## 5. Section Transitions — ⚠️ Needs Verification Against Live Site

**This section is not currently reliable.** The original Techniques
A–E below were written against the 11-section homepage that existed
before Session 24. Since then, `Trending.astro`, `BuiltForStrength.astro`,
`BoldStatement.astro`, `Instagram.astro`, and `InkEdge.astro` — the
components these techniques were built for — have all been deleted.

The current homepage (see `page-structure.md`) uses `SectionWrapper`
black/white backgrounds as the primary transition mechanism, not the
torn-edge/clip-path techniques described below. **Before using any
technique in this section, check whether it's still actually
implemented anywhere in the live codebase** — it's plausible none of
them survive Session 24's redesign.

<details>
<summary>Original Techniques A–E (pre-Session 24, unverified as current)</summary>

**Technique A — Torn ink edge.** SVG mask with organic torn edge shape,
fill matching the lower section's background. Used at Hero→Identity
and Bold Statement→Built for Endurance in the old structure — both
target sections either deleted or restructured.

**Technique B — Product image breakout.** Product PNG positioned
absolutely with negative bottom offset, overlapping the section below.
Used at Identity→Trending in the old structure — Trending no longer
exists; Identity's product breakout was explicitly omitted per Session
5 developer instruction anyway (Identity is text-only).

**Technique C — Full bleed image edge.** No border/divider — the image
arriving at full width is the transition. Used at Trending→Brand Story
— Trending no longer exists.

**Technique D — Diagonal clip-path.** `clip-path: polygon(0 0, 100% 0,
100% 85%, 0 100%)`. Used at Brand Story→Built for Strength — Brand
Story's diagonal clip was explicitly removed in the Session 24 redesign,
and Built for Strength was merged into ProductStrips.

**Technique E — Hard cut.** No border breaker; background contrast
alone creates the break. Used at Built for Strength→Bold Statement —
both components no longer exist in this form.

</details>

If any of these techniques are still genuinely in use somewhere (e.g.
`TornEdge.astro` still exists in the component tree per
`page-structure.md`), confirm where and update this section to reflect
only what's real — don't restore the full original section from memory
of this document.

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

No other button styles without approval. One primary CTA per section
maximum.

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
.tag-coming-soon { border-color: var(--color-gold); color: var(--color-gold); }
```

### Nav

- Fixed position, full width
- Background: `rgba(0,0,0,0.9)` with backdrop blur
- Logo left — PNG asset
- Links right — uppercase, `var(--text-label)`
- Social icons via `ui/SocialIcons.astro` (Session 28 — single shared
  component, no longer duplicated between desktop/mobile markup)
- CTA pill rightmost — `btn-primary` style
- No dropdown menus
- Mobile: hamburger menu, full screen overlay

### Forms

- Input background: `var(--color-surface)`
- Input border: `1px solid var(--color-border)`, focus: `var(--color-red)`
- Input text: `var(--color-white)`, placeholder: `var(--color-grey)`
- No border radius on inputs — hard corners
- Label above input, uppercase, `var(--text-label)`, `var(--color-grey)`
- Use `ui/FormField.astro` (Session 28) rather than repeating
  `form-group` markup per field

---

## 7. Image Handling

- All images via Astro's `<Image />` component, output as WebP
- Hero/full-bleed images: `object-fit: cover`
- Product PNGs: transparent background, `object-fit: contain`
- Never `<img>` tags directly

---

## 8. Animation Rules

**Default: no animations, no load-in transitions, no scroll-driven
effects.** Permitted by default:

- Button hover — `opacity`/`background` — `0.2s ease` max
- Nav link hover — `color` — `0.15s ease` max
- Form input focus — `border-color` — `0.15s ease` max

**Confirmed exception (Session 16):** a `transform: scale(1.03)` hover
was explicitly approved as a spec override on product cards in the
light-treatment Trending redesign. This is a genuine, developer-approved
exception to the rule above — not an error to flag or revert. If this
pattern still exists in the current ProductStrips component (Trending
was later merged into it, Session 24), confirm it's carried forward
intentionally; if it was dropped in the redesign, note that here rather
than silently reintroducing it.

No other motion without explicit approval, logged as a `Deviation:` per
`ai-interaction.md` if it happens.

---

## 9. Responsive Breakpoints

| Token | Value |
|-------|-------|
| `--bp-sm` | `640px` |
| `--bp-md` | `768px` |
| `--bp-lg` | `1024px` |
| `--bp-xl` | `1280px` |

Mobile first.

---

## 10. Implementation Rule

Before implementing any UI:

1. Confirm which color tokens will be used — no raw values
2. Confirm which typography tokens apply
3. Check whether a section-transition technique from Section 5 above
   is actually still relevant — most no longer are, see the warning
4. Confirm the responsive behaviour from `page-structure.md`
5. Then implement

---

## Document Map

| File | Purpose |
|------|---------|
| `brand.md` | Brand principles, voice, photography rules |
| `design.md` | This document — tokens, components, layout |
| `globals.css` | CSS custom properties and imports |
| `coding-standards.md` | Astro rules, file structure, naming |
| `page-structure.md` | Current homepage/page build state |
| `ai-interaction.md` | Claude Code working process |
| `progress-tracker.md` | Current build state and session log |
| `market-strategy.md` | Current market direction and go-to-market phasing — read before any market-facing copy or feature decision |
