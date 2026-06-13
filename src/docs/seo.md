# SEO Standards

**Last updated: 13 June 2026**

---

## Purpose

Every page on this site must implement the full SEO
checklist defined in this document. Claude Code must
read this file before building any new page or feature
that affects the document head, routing, or page content.

---

## Required Meta Tags — Every Page

Every page must pass the following props to `BaseLayout.astro`:

```ts
interface Props {
  title: string;
  description: string;
  ogImage?: string;
  canonicalUrl?: string;
}
```

### Title

- Unique per page
- Format: `Page Name | Probell Nutrition`
- Under 60 characters
- Example: `Whey 100 Protein | Probell Nutrition`

### Description

- Unique per page
- Under 160 characters
- Written in brand voice — direct, no fluff
- Example: `25g pure protein per serve. No fillers,
no shortcuts. Built for people who already show up.`

### Defaults

- `ogImage` defaults to `/images/og-image.jpg`
- `canonicalUrl` defaults to `Astro.url`

---

## Open Graph Tags

Required on every page:

```html
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{ogImage}" />
<meta property="og:url" content="{canonicalUrl}" />
<meta property="og:type" content="website" />
```

---

## Twitter Tags

Required on every page:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{ogImage}" />
```

---

## Canonical URL

Required on every page:

```html
<link rel="canonical" href="{canonicalUrl}" />
```

---

## Robots

Required on every page:

```html
<meta name="robots" content="index, follow" />
```

---

## Sitemap

- Generated automatically via `@astrojs/sitemap`
- Site URL defined in `astro.config.mjs`
- Confirm `sitemap-index.xml` generates on every build
- Any new page added to `src/pages/` is automatically
  included — no manual update needed

---

## Robots.txt

Located at `public/robots.txt` — do not modify without
approval:

User-agent: \*

Allow: /

Sitemap: https://probellnutrition.com/sitemap-index.xml

---

## New Page Checklist

When building any new page, Claude Code must:

- [ ] Pass unique `title` prop to `BaseLayout`
- [ ] Pass unique `description` prop to `BaseLayout`
- [ ] Pass relevant `ogImage` if page has a hero image
- [ ] Confirm canonical URL resolves correctly
- [ ] Confirm page appears in sitemap after build
- [ ] Run `npm run build` and verify zero errors

---

## Page Title & Description Reference

| Page        | Title                                      | Description                                                                                           |
| ----------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Homepage    | `Probell Nutrition \| Built for the Grind` | `The kettlebell-shaped protein built for people who already show up. B2B enquiries welcome.`          |
| Supplements | `Supplements \| Probell Nutrition`         | `Whey protein, creatine, and pre-workout built to one standard. No fillers, no shortcuts.`            |
| Whey        | `Whey 100 Protein \| Probell Nutrition`    | `25g pure protein per serve. Gluten free, non GMO, made in the USA.`                                  |
| Creatine    | `Creatine \| Probell Nutrition`            | `Pure creatine monohydrate. More reps, faster recovery, no ceiling.`                                  |
| Pre-Workout | `Pre-Workout \| Probell Nutrition`         | `Explosive energy without the crash. Dialled-in focus from the first rep to the last.`                |
| Mass Gainer | `Mass Gainer \| Probell Nutrition`         | `Serious calories for serious training. Built to the same standard as everything else Probell makes.` |

Add new rows to this table as new pages are built.
