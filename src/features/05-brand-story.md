# Probell Nutrition — Brand Story Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Two column editorial section. Full bleed gym interior image left.
Brand origin copy right. Diagonal clip-path border breaker at bottom.

---

## Reference

`docs/page-structure.md` — Section 5: Brand Story
`docs/design.md` — Border Breaker Technique D

---

## Design Tokens

- Background: `var(--color-black)`
- Eyebrow: `.label-text--gold`
- Headline: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Body: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Min height: `70vh`
- id: `brand-story`

---

## Image Asset

- File: `/public/images/brand-story/gym-interior.jpg`
- Must exist before building — confirm in asset checklist
- Left column, full height, `object-fit: cover`
- No overlay — image is the anchor

---

## Tasks

### 1. Create BrandStory.astro

File: `src/components/BrandStory.astro`

Structure:
- `<section>` with `id="brand-story"`, `position: relative`
- Two column grid — image left, content right
- Image column: no container, full bleed to left edge
- Content column: inside `.container` padding, vertically centered

Two column layout:
```css
.brand-story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 70vh;
}
```

### 2. Image column

Astro `<Image />`:
- `src="/images/brand-story/gym-interior.jpg"`
- `width={800}`, `height={900}`
- `object-fit: cover`, `width: 100%`, `height: 100%`
- `loading="lazy"`
- `alt="Raw gym interior — iron plates, concrete walls, hard lighting"`

### 3. Content column

Padding: `var(--space-xl)` all sides. Vertically centered.

**Eyebrow:**
```
"Our Story"
```
Class: `.label-text--gold`
Margin bottom: `var(--space-sm)`

**Headline:**
```
"Built in the Gym.
Designed for It."
```
Font: `var(--font-display)`, `var(--text-section)`
Color: `var(--color-white)`
Class: `display-text`

**Body copy:**
```
"Probell started with one idea — protein that performs as hard
as you do. Kettlebell-shaped. Uncompromising formula. Made in the USA."
```
Font: `var(--font-body)`, `var(--text-body)`
Color: `var(--color-grey)`
`line-height: 1.6`
Margin top: `var(--space-md)`

### 4. Diagonal clip-path border breaker

Applied to the section itself:

```css
section.brand-story {
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0 100%);
  padding-bottom: calc(var(--space-xl) + 6rem);
}
```

Adjust percentage in browser — diagonal should feel deliberate,
not too steep or too shallow.

### 5. Import into index.astro

Add BrandStory below Trending in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Two column layout — image left, content right
- [ ] Image fills full column height
- [ ] Eyebrow correct — gold label style
- [ ] Headline correct copy and style
- [ ] Body copy correct and readable
- [ ] Diagonal clip-path visible at section bottom
- [ ] No gap between Trending and Brand Story — full bleed arrival
- [ ] Mobile: single column, image top fixed height, content below
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No CTA in this section
- No animation
- No background texture
