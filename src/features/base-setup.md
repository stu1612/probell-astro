# Probell Nutrition — Base Setup Spec

**Version 1 · 14 May 2026**
**Status: Complete — 17 May 2026**

---

## Goal

Establish the project foundation before any section is built.
Every subsequent feature depends on this being correct.

---

## Tasks

### 1. BaseLayout.astro

Create `src/layouts/BaseLayout.astro`.

Must include:
- `<html lang="en">`
- `<head>` with charset, viewport meta, title slot
- Google Fonts import link — Anton, Barlow Condensed, Space Grotesk, DM Sans
- `globals.css` import
- `<body>` with `<slot />`
- Default title: `Probell Nutrition — Built for the Grind`

```astro
---
interface Props {
  title?: string;
}
const { title = 'Probell Nutrition — Built for the Grind' } = Astro.props;
---
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Anton&family=Barlow+Condensed:wght@700;900&family=Space+Grotesk:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 2. globals.css — confirm import

Confirm `src/styles/globals.css` is imported correctly in BaseLayout.
All token variables must resolve — test with `npm run dev`.

### 3. index.astro

Set up `src/pages/index.astro` with BaseLayout imported and wrapping
an empty `<main>`. No content yet — scaffold only.

### 4. Path aliases — confirm

Confirm `@components/` and `@layouts/` aliases resolve correctly.
Test by importing BaseLayout using `@layouts/BaseLayout.astro`.

### 5. npm run build

Run build and confirm zero errors before marking complete.

---

## Confirmed Working ✓

- [x] BaseLayout renders in browser
- [x] globals.css tokens resolve — test with a red background on body, remove after
- [x] Google Fonts loading — confirm in browser network tab
- [x] Path aliases working
- [x] `npm run build` passes with zero errors

---

## What Is Not In This Spec

- No section components
- No content
- No images
