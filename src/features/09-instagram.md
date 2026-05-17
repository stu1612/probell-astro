# Probell Nutrition — Instagram Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

Instagram feed section. Tight image grid. Handle label above.
Placeholder squares at launch if live feed not configured.
Clean transitions in and out.

---

## Reference

`docs/page-structure.md` — Section 9: Instagram

---

## Design Tokens

- Background: `var(--color-black)`
- Handle: `.label-text`, `var(--color-grey)`
- Grid: no gap or 1px gap — images touch
- id: `instagram`

---

## Tasks

### 1. Create Instagram.astro

File: `src/components/Instagram.astro`

### 2. Handle label

```
"@probellnutrition"
```

- Class: `.label-text`
- Color: `var(--color-grey)`
- Uppercase, `letter-spacing: 0.15em`
- Links to Instagram profile — `href="#"` placeholder
- Margin bottom: `var(--space-md)`

### 3. Placeholder grid — launch version

At launch use placeholder squares.
Six squares desktop, responsive grid.

```css
.instagram-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2px;
}

.instagram-placeholder {
  aspect-ratio: 1 / 1;
  background: var(--color-surface);
  width: 100%;
}

@media (max-width: 1024px) {
  .instagram-grid { grid-template-columns: repeat(4, 1fr); }
}

@media (max-width: 768px) {
  .instagram-grid { grid-template-columns: repeat(3, 1fr); }
}
```

Six placeholder divs with `.instagram-placeholder` class.

### 4. Live feed — deferred

Live Instagram feed via Basic Display API or lightweight embed
service is deferred until client confirms:
- Instagram account URL
- API access token

Note in component with comment:
```astro
<!-- TODO: Replace placeholder grid with live Instagram feed
     when client confirms account and API token -->
```

### 5. Import into index.astro

Add Instagram below BuiltForEndurance in `src/pages/index.astro`.

---

## Confirmed Working ✓

- [ ] Handle label correct — links to `href="#"` placeholder
- [ ] Placeholder grid renders — 6 columns desktop
- [ ] Grid responsive — 4 columns tablet, 3 columns mobile
- [ ] 2px gap between squares — images touch
- [ ] TODO comment in component for live feed
- [ ] Clean transitions in and out — no border breakers
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No live Instagram feed at launch — placeholder only
- No captions on images
- No lightbox or modal
- No like counts or engagement metrics
