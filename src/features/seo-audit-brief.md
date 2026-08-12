# Probell — Pre-Launch SEO Audit Brief

**Date: 12 August 2026**
**Type: Audit — read/report only, no changes without separate approval**

---

## Purpose

Full codebase audit of on-page SEO fundamentals before launch. This is a
review pass — report findings, do not fix anything yet. Once findings are
reviewed, fixes will be scoped as a separate follow-up task.

---

## Scope

### 1. Page-level structure

For every route in `src/pages/` (including dynamic routes — check actual
rendered output for `[slug]` pages, not just the template):

- Exactly one `<h1>` per page — confirm presence, confirm it's not
  duplicated, confirm it's not missing (known past issue: `/supplements`
  index had its `<h1>` accidentally removed with a hero section — verify
  it's still present and correctly using `sr-only` or visible styling)
- Logical heading hierarchy — no skipped levels (h1 → h3 with no h2),
  no heading level used purely for visual styling where a lower level
  would be semantically correct
- `<title>` tag present and unique per page — flag any page using a
  default/generic title or duplicating another page's title
- Meta description present and unique per page — flag any page missing
  one, using a default fallback, or duplicating another page's description
- Canonical tag present and correct — especially check dynamic
  `[slug]` routes for correct self-referencing canonicals

### 2. Images

- Every `<img>` / `<Image />` has meaningful `alt` text — flag any empty,
  missing, or placeholder alt text (e.g. `alt=""` on meaningful images,
  or generic alt like `"image"` / `"photo"`)
- Decorative images (background/overlay images with no content meaning)
  correctly use empty `alt=""` — flag any decorative image with
  unnecessary alt text, and any meaningful image incorrectly marked
  decorative
- Images have explicit width/height attributes to prevent layout shift
- Confirm lazy loading is applied appropriately (`loading="lazy"` on
  below-the-fold images, `loading="eager"` only on above-the-fold /
  first-visible images — check this pattern is consistent, not just
  present on one page)

### 3. Favicon / webmanifest

- Confirm `favicon.ico`, PNG icon set, and `apple-touch-icon.png` are
  correctly linked in `BaseLayout.astro` `<head>`
- Confirm `site.webmanifest` exists, is linked, and contains correct
  `name`, `short_name`, icon references, `theme_color`, `background_color`
  matching brand tokens (`--color-black`)
- Flag if webmanifest or icon links are missing entirely, broken, or only
  partially implemented

### 4. Structured data / discoverability

- `robots.txt` present and not accidentally blocking pages that should
  be indexed
- `sitemap.xml` present and includes all live routes, including dynamic
  `[slug]` pages — flag if dynamic routes are missing from the sitemap
- Check for any accidental `noindex` meta tags left over from
  development/staging
- Flag whether structured data (JSON-LD — Organization, Product schema
  for `[slug]` pages) is present. Not required for launch, but report
  whether it's absent so it can be a deliberate decision, not an oversight

### 5. Technical

- Confirm no broken internal links remain from the partner route flatten
  (`/partners/*` → `/*`) or the Contact router change — grep for any
  leftover hardcoded old paths
- Flag any pages returning unexpected status codes if this can be
  checked locally/in build output
- Confirm language attribute (`lang="en"` or appropriate) is set on
  `<html>` in `BaseLayout.astro`

---

## Output format

Report findings as a checklist, grouped by section above. For each
finding:

- **Status**: Pass / Missing / Incorrect
- **Location**: file path or route
- **What's wrong**: one line, specific
- **Suggested fix**: one line — do not implement yet

Flag anything uncertain (e.g. "cannot verify sitemap generation without
a build") rather than guessing.

---

## What this brief does NOT cover

- Off-page SEO (backlinks, domain authority) — not applicable pre-launch
- Core Web Vitals / performance — being checked separately via
  PageSpeed Insights against the live/preview URL, not this audit
- Content quality / keyword strategy — separate discussion, not a
  codebase audit item
