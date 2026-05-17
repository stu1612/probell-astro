# Probell Nutrition — Coding Standards

**Last updated: 14 May 2026**

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Astro 4.x — static output |
| Styling | Plain CSS — `globals.css` + scoped component styles |
| Images | Astro built-in `<Image />` component |
| Fonts | Google Fonts — imported in `globals.css` |
| Deployment | Static file export — hosted on one.com via FTP |
| Package manager | npm |

No React. No Tailwind. No CSS frameworks. No UI component libraries.
No backend. No server-side rendering. No Node server.

---

## Astro Fundamentals

### Output mode

This project uses fully static output. `astro.config.mjs` must include:

```js
export default defineConfig({
  output: 'static',
});
```

Never change this to `server` or `hybrid` without explicit approval.

### Component types

Astro components (`.astro`) are the default for everything.
No React, Vue, or Svelte components unless explicitly approved.

### Islands — use sparingly

Astro islands (`client:load`, `client:visible`) are only permitted for:
- The contact form — requires JS for submission handling
- The mobile nav — requires JS for toggle behaviour
- The Instagram feed — if using a JS-based embed

Everything else is static HTML. No client-side JavaScript without a
specific reason documented in the component.

### No unnecessary JavaScript

If something can be done in CSS — do it in CSS.
If something can be done in HTML — do it in HTML.
JavaScript is the last resort, not the first tool.

---

## File Structure

```
probell-nutrition/
├── public/
│   ├── images/
│   │   ├── hero/
│   │   │   └── hero-main.jpg
│   │   ├── brand-story/
│   │   │   └── gym-interior.jpg
│   │   ├── bold-statement/
│   │   │   └── discipline.jpg
│   │   └── products/
│   │       ├── whey-cpb.png
│   │       ├── whey-cookies-cream.png
│   │       ├── whey-salted-caramel.png
│   │       └── [additional-products].png
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Identity.astro
│   │   ├── Trending.astro
│   │   ├── BrandStory.astro
│   │   ├── BuiltForStrength.astro
│   │   ├── BoldStatement.astro
│   │   ├── BuiltForEndurance.astro
│   │   ├── Instagram.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   └── ui/
│   │       ├── Button.astro
│   │       ├── ProductCard.astro
│   │       ├── Tag.astro
│   │       ├── TornEdge.astro
│   │       └── FormField.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── styles/
│   │   └── globals.css
│   └── pages/
│       ├── index.astro
│       └── supplements.astro
├── astro.config.mjs
└── package.json
```

### Rules

- One component per file — no exceptions
- Components named in PascalCase — `Nav.astro`, `ProductCard.astro`
- Image files named in kebab-case — `hero-main.jpg`, `whey-cpb.png`
- No test pages, no playground pages — build directly in components
- Public images go in `/public/images/` — organised by section
- No unused files — remove immediately if a component is replaced

---

## Astro Component Structure

Every `.astro` file follows this structure:

```astro
---
// 1. Imports
import { Image } from 'astro:assets';
import ProductCard from './ui/ProductCard.astro';

// 2. Props interface
interface Props {
  title?: string;
}

// 3. Props destructuring
const { title = 'Default' } = Astro.props;
---

<!-- 4. Template -->
<section class="section">
  <div class="container">
    <h2>{title}</h2>
  </div>
</section>

<!-- 5. Scoped styles -->
<style>
  /* Component-specific styles only */
  /* Never override globals here */
  /* Use CSS custom properties from globals.css */
</style>
```

### Rules

- Props interface defined for every component that accepts props
- Default values provided for all optional props
- No logic in the template — compute in the frontmatter
- Scoped styles for component-specific rules only
- Never redefine a global token in scoped styles — reference it

---

## CSS Rules

### Source of truth

`globals.css` is the single source of truth for:
- All color tokens
- All spacing tokens
- All typography tokens
- All layout helpers
- All component primitives

### Scoped styles

Component `<style>` blocks are for layout and positioning specific
to that component only. Never for color, typography, or spacing
that duplicates or overrides globals.

### What goes in scoped styles

```css
/* ✓ Component-specific layout */
.hero-content {
  position: absolute;
  bottom: var(--space-xl);
  left: var(--space-md);
}

/* ✓ Component-specific sizing */
.hero-image {
  height: 100vh;
  width: 100%;
}
```

### What does not go in scoped styles

```css
/* ✗ Color — use globals */
.headline { color: #ffffff; }

/* ✗ Redefining tokens */
.section { padding: 4rem 0; } /* use .section from globals */

/* ✗ Raw values for anything in the token system */
.label { font-size: 12px; letter-spacing: 2px; }
```

### No raw values

```
✓ color: var(--color-white)
✓ padding: var(--space-md)
✓ font-size: var(--text-label)

✗ color: #ffffff
✗ padding: 2rem
✗ font-size: 0.75rem
```

If a value is not in the token system — add it to `globals.css` first.

---

## Images

### Always use Astro's Image component

```astro
---
import { Image } from 'astro:assets';
---

<Image
  src="/images/hero/hero-main.jpg"
  alt="Athlete in gym with Probell kettlebell"
  width={1440}
  height={810}
  format="webp"
  loading="eager"
  class="img-full-bleed"
/>
```

### Rules

- All images use `format="webp"` for automatic optimisation
- Hero image: `loading="eager"` — all others: `loading="lazy"`
- Always provide meaningful `alt` text — never empty for content images
- Product PNGs: `object-fit: contain`, transparent background preserved
- Photography: `object-fit: cover`
- Never use `<img>` tags directly — always `<Image />`

---

## Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Components | PascalCase | `ProductCard.astro` |
| Pages | kebab-case | `supplements.astro` |
| CSS classes | kebab-case | `.product-card__name` |
| Image files | kebab-case | `whey-cpb.png` |
| Folders | kebab-case | `brand-story/` |
| Props | camelCase | `productName` |
| Constants | SCREAMING_SNAKE | `MAX_PRODUCTS` |

---

## TypeScript

Astro supports TypeScript in frontmatter by default.

- Define `interface Props` for all components with props
- No `any` types
- Use type inference where obvious
- Explicit types for all function parameters and return values

---

## Accessibility

- Semantic HTML — use correct elements (`nav`, `main`, `section`, `article`)
- All images have meaningful `alt` text
- Nav has `aria-label="Main navigation"`
- Form inputs have associated `<label>` elements
- Buttons have descriptive text or `aria-label`
- Color contrast — white on black always passes, check red on black
- Focus states visible — do not remove outline without replacement

---

## Performance Rules

- No render-blocking scripts — all JS deferred or module
- No external CSS frameworks or libraries
- Google Fonts loaded with `display=swap`
- Images lazy loaded except hero
- No unused CSS — scoped styles keep this manageable
- No third-party scripts without explicit approval

---

## Contact Form

The contact form submits via `mailto:` or a simple form service
(Netlify Forms, Formspree, or similar) — no backend required.

If using Formspree:
```astro
<form action="https://formspree.io/f/[form-id]" method="POST">
```

If using mailto fallback:
```astro
<form action="mailto:contact@probell.com" method="POST"
      enctype="text/plain">
```

No database. No server. No stored form data.
GDPR exposure is minimised — form goes directly to client email.

---

## Build and Deploy

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

Output goes to `/dist/` — this folder is what gets uploaded to one.com.

### Deploy

Upload contents of `/dist/` to one.com via FTP.
No CI/CD pipeline at this stage — manual deploy.

### Pre-deploy checklist

- [ ] `npm run build` passes with zero errors
- [ ] All images present in `/public/images/`
- [ ] Logo PNG with transparent background in `/public/`
- [ ] Contact form tested and submitting correctly
- [ ] Nav links all resolve correctly
- [ ] Site tested on mobile — 375px minimum width
- [ ] No console errors in browser

---

## What Not To Do

- Do not install Tailwind, Bootstrap, or any CSS framework
- Do not install React, Vue, or any UI framework
- Do not create API routes — this is a static site
- Do not add animations beyond the permitted hover transitions
- Do not use `<img>` tags — always use Astro `<Image />`
- Do not add features not in `page-structure.md`
- Do not commit the `/dist/` folder — build output only
- Do not use `any` types in TypeScript
- Do not leave unused components or images in the project
