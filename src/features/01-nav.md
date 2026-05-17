# Probell Nutrition — Nav Spec

**Version 2 · 17 May 2026**
**Status: Not started**

---

## Goal

Fixed navigation bar. Logo and nav links left, CTA and social icons right.
Transparent on homepage hero, transitions to white after 50vh scroll.
White background on all other pages from load.

---

## Reference

`docs/page-structure.md` — Section 1: Nav
`docs/design.md` — Component Rules: Nav

---

## Design Tokens

### Transparent state (homepage default)
- Background: `transparent`
- Nav links: `var(--color-white)`
- Nav links hover: `var(--color-red)`
- Social icons: `var(--color-white)`
- Social icons hover: `var(--color-red)`
- Logo: light version — `logo-light.png`
- CTA: `.btn-primary` — red, stays consistent in both states

### Scrolled state (homepage after 50vh) + all other pages
- Background: `#ffffff`
- Nav links: `var(--color-black)`
- Nav links hover: `var(--color-red)`
- Social icons: `var(--color-black)`
- Social icons hover: `var(--color-red)`
- Logo: dark version — `logo-dark.png`
- CTA: `.btn-primary` — red, unchanged

### Transition
```css
transition: background 0.3s ease, color 0.3s ease;
```

---

## Layout

```
[ Logo  Supplements · About · Contact ]     [ Join the Waitlist  f  ig ]
  ←————————————— left ——————————————         ————————— right —————————→
```

- Full width, no container constraint on nav background
- Inner content inside `.container` with `flex-between`
- Nav height: `72px`
- Position: `fixed`, top 0, full width
- z-index: `100`
- `backdrop-filter: blur(8px)` — applied in both states

---

## Logo Assets

Two logo versions required:

| File | Usage |
|------|-------|
| `/public/logo-light.png` | Transparent nav state — light version for dark backgrounds |
| `/public/logo-dark.png` | White nav state — dark version for light backgrounds |

- Height: `40px` — width auto
- Both link to `/`
- Toggle via `.nav--scrolled` class:
  - Default: `logo-light` visible, `logo-dark` hidden
  - Scrolled: `logo-dark` visible, `logo-light` hidden

```css
.nav .logo-light { display: block; }
.nav .logo-dark  { display: none; }

.nav--scrolled .logo-light { display: none; }
.nav--scrolled .logo-dark  { display: block; }
```

---

## Tasks

### 1. Create Nav.astro

File: `src/components/Nav.astro`
Requires `client:load` for scroll detection and mobile toggle.

### 2. Left side — logo + nav links

**Logo:**
- Two `<img>` elements — `logo-light.png` and `logo-dark.png`
- Toggle via CSS class as above
- Both wrapped in `<a href="/">`

**Nav links — left to right:**
- `Supplements` → `/supplements`
- `About` → `/#brand-story`
- `Contact` → `/#contact`

Styles:
- Font: `var(--font-body)`, `var(--text-label)`, weight 500
- Uppercase, `letter-spacing: 0.1em`
- Transition: `color var(--transition-fast)`
- Gap between logo and links: `var(--space-md)`
- Gap between links: `var(--space-md)`

### 3. Right side — CTA + social icons

**CTA pill:**
- Text: `Join the Waitlist`
- Class: `.btn-primary`
- Links to `/#contact`
- Stays red in both nav states

**Social icons — left to right after CTA:**
- Facebook SVG icon — 20px
- Instagram SVG icon — 20px
- Both `href="#"` placeholder until client supplies URLs
- Color inherits from nav state — white or black
- Hover: `var(--color-red)`
- Transition: `color var(--transition-fast)`
- Gap between CTA and icons: `var(--space-md)`
- Gap between icons: `var(--space-sm)`

Use simple inline SVG for icons — no icon library required:

**Facebook SVG:**
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
</svg>
```

**Instagram SVG:**
```svg
<svg width="20" height="20" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round">
  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
  <circle cx="12" cy="12" r="4"/>
  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
</svg>
```

### 4. Scroll behaviour — homepage only

JavaScript scroll listener toggles `.nav--scrolled` class:

```javascript
const nav = document.querySelector('.nav');
const threshold = window.innerHeight * 0.5;

function handleScroll() {
  if (window.scrollY > threshold) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
```

### 5. Page-specific nav state

Nav component accepts a prop to control default state:

```astro
---
interface Props {
  transparent?: boolean;
}
const { transparent = false } = Astro.props;
---
```

- Homepage: `<Nav transparent={true} />` — starts transparent, scroll triggers white
- All other pages: `<Nav transparent={false} />` — white from load, no scroll listener needed

When `transparent={false}`:
- Apply `.nav--scrolled` class on render — no JS scroll listener
- Logo dark, black links, white background from the start

### 6. Mobile nav

Hamburger icon right on mobile (< 768px).
Logo remains left — nav links and right side items move into overlay.

Full screen overlay on open:
- Background: `var(--color-black)`
- Links stacked, centered, `var(--space-md)` gap
- Social icons below links
- CTA below social icons, full width
- Close button top right — `×`, `var(--color-white)`

Toggle via JS:

```javascript
const hamburger = document.querySelector('.nav-hamburger');
const overlay = document.querySelector('.nav-overlay');

hamburger.addEventListener('click', () => {
  overlay.classList.toggle('nav-overlay--open');
  document.body.classList.toggle('nav-open');
});
```

Mobile overlay CSS:
```css
.nav-overlay {
  position: fixed;
  inset: 0;
  background: var(--color-black);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-md);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.nav-overlay--open {
  opacity: 1;
  pointer-events: all;
}

body.nav-open {
  overflow: hidden;
}
```

### 7. Body offset

Add to `globals.css`:
```css
body {
  padding-top: 72px;
}
```

Hero section must account for this — use negative margin or
adjust hero height calculation so it still feels full viewport.

### 8. Import into BaseLayout

```astro
---
import Nav from '@components/Nav.astro';
interface Props {
  title?: string;
  transparentNav?: boolean;
}
const { title = 'Probell Nutrition — Built for the Grind',
        transparentNav = false } = Astro.props;
---
```

Pass `transparentNav` prop through to Nav component.

Homepage `index.astro`:
```astro
<BaseLayout transparentNav={true}>
```

All other pages:
```astro
<BaseLayout>
```

---

## Scoped Styles

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  z-index: 100;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: background 0.3s ease, color 0.3s ease;
}

.nav--transparent {
  background: transparent;
  color: var(--color-white);
}

.nav--scrolled,
.nav--solid {
  background: #ffffff;
  color: var(--color-black);
}

.nav-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav-right {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

.nav-link {
  font-family: var(--font-body);
  font-size: var(--text-label);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: color var(--transition-fast);
}

.nav-link:hover { color: var(--color-red); }

.nav-social {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  transition: color var(--transition-fast);
}

.nav-social a:hover { color: var(--color-red); }

.nav-hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--space-xs);
}

@media (max-width: 768px) {
  .nav-links,
  .nav-right { display: none; }
  .nav-hamburger { display: block; }
}
```

---

## Confirmed Working ✓

- [ ] Logo light version visible on transparent nav
- [ ] Logo dark version visible on white nav
- [ ] Nav links left — correct order and spacing
- [ ] CTA pill rightmost — correct style
- [ ] Social icons right of CTA — correct order
- [ ] Homepage: nav transparent on load
- [ ] Homepage: nav transitions to white after 50vh scroll
- [ ] Homepage: nav returns to transparent on scroll back up
- [ ] Other pages: nav white from load — no scroll listener
- [ ] Hover states correct in both nav states
- [ ] Mobile hamburger opens overlay
- [ ] Mobile overlay closes correctly
- [ ] Body padding-top prevents content hiding behind nav
- [ ] Hero still feels full viewport despite body offset
- [ ] `npm run build` passes with zero errors

---

## What Is Not In This Spec

- No dropdown menus
- No active link highlighting — deferred
- No search
- No cart icon — no ecommerce at launch
- No real social URLs — placeholder `href="#"` only
