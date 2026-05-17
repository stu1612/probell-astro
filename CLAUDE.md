# Probell Nutrition — Claude Code Context

**Project:** Probell Nutrition website
**Stack:** Astro (static output) · Plain CSS · Google Fonts · No frameworks
**Deploy:** Static `/dist/` upload to one.com via FTP
**Purpose:** B2B brand presentation — gyms, distributors, retailers. Single conversion goal: get the right people to make contact. Not an ecommerce store.

---

## Session Start Protocol

Read these files at the start of every session, in order:

1. `src/docs/brand.md` — brand principles, voice, photography rules
2. `src/docs/design.md` — tokens, components, layout rules
3. `src/docs/coding-standards.md` — Astro rules, file structure, naming
4. `src/docs/ai-interaction.md` — working process and responsibilities
5. `src/docs/page-structure.md` — per-section build blueprint (read the relevant section before building it)
6. `src/docs/progress-tracker.md` — current status and next action

After reading, state: current build status · next section to build · one specific check before writing code. Do not proceed until developer confirms.

---

## Stack Rules — Non-Negotiable

- **No React, Vue, Svelte, or any UI framework**
- **No Tailwind, Bootstrap, or any CSS framework**
- **No `<img>` tags** — always `<Image />` from `astro:assets`
- **No raw hex, px, or rem values** — always CSS custom property tokens
- **No animations** — only permitted: button hover (opacity/bg, 0.2s), nav link hover (color, 0.15s), form focus (border-color, 0.15s)
- **No features not in `page-structure.md`**
- **No auto-commits or git operations** — always ask first
- **No gradients** — anywhere, ever
- **No `any` types** in TypeScript
- Astro islands (`client:load`) only for: contact form, mobile nav toggle, Instagram feed (if JS-based)

---

## File Structure

```
probell-astro/
├── public/
│   ├── images/
│   │   ├── hero/hero-main.jpg
│   │   ├── brand-story/gym-interior.jpg
│   │   ├── bold-statement/discipline.jpg
│   │   └── products/whey-cpb.png · whey-cookies-cream.png · whey-salted-caramel.png
│   ├── logo.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Nav.astro · Hero.astro · Identity.astro · Trending.astro
│   │   ├── BrandStory.astro · BuiltForStrength.astro · BoldStatement.astro
│   │   ├── BuiltForEndurance.astro · Instagram.astro · Contact.astro · Footer.astro
│   │   └── ui/
│   │       ├── Button.astro · ProductCard.astro · Tag.astro
│   │       ├── TornEdge.astro · FormField.astro
│   ├── docs/           ← spec documents — read only, never edit without approval
│   ├── layouts/Layout.astro
│   ├── styles/global.css
│   └── pages/
│       ├── index.astro
│       └── supplements.astro
├── astro.config.mjs
└── package.json
```

### Path Aliases

Defined in `tsconfig.json` and active via `astro.config.mjs`:

| Alias | Resolves to |
|-------|-------------|
| `@components/*` | `src/components/*` |
| `@layouts/*` | `src/layouts/*` |

Use these in all imports — never use relative paths that traverse directories.

```astro
// ✓ Correct
import Nav from '@components/Nav.astro';
import Layout from '@layouts/Layout.astro';

// ✗ Wrong
import Nav from '../../components/Nav.astro';
```

---

## Design System — Quick Reference

### Colors (all via CSS custom properties — no raw hex ever)

| Token             | Value     | Use                                          |
| ----------------- | --------- | -------------------------------------------- |
| `--color-black`   | `#000000` | Primary background                           |
| `--color-red`     | `#C0392B` | CTAs, highlights, active states              |
| `--color-gold`    | `#C9A84C` | Built for Endurance accent, secondary labels |
| `--color-white`   | `#FFFFFF` | Headlines, primary text                      |
| `--color-grey`    | `#A0A0A0` | Body copy, secondary text, captions          |
| `--color-border`  | `#222222` | Dividers, card borders                       |
| `--color-surface` | `#111111` | Cards, form backgrounds                      |

Dark overlay on photography only: `rgba(0,0,0,0.X)` — only permitted rgba not from a token.

### Typography

| Token              | Font                                    | Use                             |
| ------------------ | --------------------------------------- | ------------------------------- |
| `--font-display`   | Anton (default) or Barlow Condensed 900 | Headlines                       |
| `--font-body`      | Space Grotesk (default) or DM Sans      | Body, labels, buttons           |
| `--text-hero`      | `clamp(4rem, 10vw, 9rem)`               | Hero headline                   |
| `--text-statement` | `clamp(3rem, 7vw, 6rem)`                | Bold statement section          |
| `--text-section`   | `clamp(2rem, 5vw, 3.5rem)`              | Section headings                |
| `--text-product`   | `clamp(1.5rem, 3vw, 2rem)`              | Product names                   |
| `--text-body`      | `1rem`                                  | Body copy                       |
| `--text-label`     | `0.75rem`                               | Labels, eyebrows, tags, buttons |

Display text: always `text-transform: uppercase`, `letter-spacing: -0.02em`, `line-height: 0.95`.
Labels/eyebrows: always `text-transform: uppercase`, `letter-spacing: 0.15em`.

### Spacing

`--space-xs` 0.5rem · `--space-sm` 1rem · `--space-md` 2rem · `--space-lg` 4rem · `--space-xl` 6rem · `--space-2xl` 10rem

### Key Global Classes (in `src/styles/global.css`)

**Layout:** `.container` (max 1400px, auto margins) · `.section` (lg padding) · `.section--lg` · `.section--hero` · `.section--full-bleed`
**Grids:** `.grid-2` · `.grid-3` · `.grid-4` (all collapse to 1 col at ≤768px, 4→2 at ≤1024px)
**Flex:** `.flex` · `.flex-center` · `.flex-between` · `.flex-col`
**Buttons:** `.btn-primary` (red pill) · `.btn-secondary` (gold outline)
**Cards:** `.product-card` · `.product-card__image` · `.product-card__content` · `.product-card__name` · `.product-card__descriptor`
**Forms:** `.form-group` · `.form-label` · `.form-input` · `.form-select` · `.form-textarea`
**Typography:** `.display-text` · `.label-text` · `.label-text--red` · `.label-text--gold`
**Images:** `.img-overlay` (dark overlay via ::after) · `.img-full-bleed`
**Border breakers:** `.torn-edge` · `.torn-edge-bottom` · `.clip-diagonal-bottom` · `.product-breakout`
**Tags:** `.tag` · `.tag--coming-soon` (gold) · `.tag--red`
**Utils:** `.text-red/gold/grey/white` · `.divider` · `.sr-only`

---

## Page Structure — Section Map

| #   | Section             | Component                 | Border Breaker Out                          | id                    |
| --- | ------------------- | ------------------------- | ------------------------------------------- | --------------------- |
| 1   | Nav                 | `Nav.astro`               | —                                           | —                     |
| 2   | Hero                | `Hero.astro`              | **Torn ink edge** → Identity                | —                     |
| 3   | Identity            | `Identity.astro`          | **Product PNG breakout** → Trending         | `identity`            |
| 4   | Trending            | `Trending.astro`          | **Full bleed image edge** → Brand Story     | `trending`            |
| 5   | Brand Story         | `BrandStory.astro`        | **Diagonal clip-path** → Built for Strength | `brand-story`         |
| 6   | Built for Strength  | `BuiltForStrength.astro`  | **Hard cut** → Bold Statement               | `built-for-strength`  |
| 7   | Bold Statement      | `BoldStatement.astro`     | **Torn ink edge** → Built for Endurance     | `bold-statement`      |
| 8   | Built for Endurance | `BuiltForEndurance.astro` | Clean                                       | `built-for-endurance` |
| 9   | Instagram           | `Instagram.astro`         | Clean                                       | `instagram`           |
| 10  | Contact             | `Contact.astro`           | Clean                                       | `contact`             |
| 11  | Footer              | `Footer.astro`            | —                                           | —                     |

**Border breaker implementations** are in `src/docs/design.md` Section 5. Each technique is assigned to a specific transition — do not substitute without approval.

---

## Component Rules

Every `.astro` file structure:

```astro
---
// 1. Imports
// 2. interface Props {}
// 3. const { prop = default } = Astro.props;
---
<!-- Template -->
<style>
  /* Component-specific layout/positioning only.
     Never redefine tokens. Never override globals. */
</style>
```

- Props interface required for every component that accepts props
- No logic in the template — compute in frontmatter
- One component per file
- PascalCase component names, kebab-case everything else

---

## Image Rules

```astro
import { Image } from 'astro:assets';

<Image
  src="/images/section/filename.jpg"
  alt="Descriptive alt text"
  width={1440}
  height={810}
  format="webp"
  loading="lazy"  // "eager" for hero only
/>
```

If an image doesn't exist yet: use a placeholder `<div>` with `background: var(--color-surface)` and the correct dimensions. Add a comment. Never reference a non-existent file path.

---

## CSS Scoped Styles — What Belongs Where

**In scoped `<style>`:** component-specific layout, positioning, sizing.
**In `global.css`:** colors, spacing, typography, all shared utility classes.

If a needed value isn't in the token system → flag it → add to `global.css` → then use the token. Never improvise.

---

## Current Build Status

**As of Session 1 (14 May 2026):** All spec documents written and confirmed. Project initialised with basic Astro scaffold. `global.css` is complete with all tokens and primitives. `Layout.astro` exists but is minimal (no `output: 'static'` in config yet).

**Nothing built yet:** All 11 sections are `Not started`.

**Next action:** Build `Nav.astro`.

**Pending decisions (decide in browser):**

- Active display font: Anton or Barlow Condensed (switch via `--font-display` in `global.css`)
- Active body font: Space Grotesk or DM Sans (switch via `--font-body`)
- Active hero headline: Option A / B / C / D

**Pending assets:**

- Logo PNG — client to supply
- Product PNGs (3 flavours) — client to supply
- Favicon — pending

**Confirmed assets:**

- `/public/images/hero/hero-main.jpg` ✓
- `/public/images/brand-story/gym-interior.jpg` ✓
- `/public/images/bold-statement/discipline.jpg` ✓

---

## Section Complete Checklist

Before marking any section done in `src/docs/progress-tracker.md`:

- [ ] Component created in `src/components/`
- [ ] Imported and used in `src/pages/index.astro`
- [ ] All copy matches `page-structure.md` exactly
- [ ] All colors use `var(--color-*)` — zero raw values
- [ ] All spacing uses `var(--space-*)` — zero raw values
- [ ] Image referenced exists in `/public/images/` (or placeholder used correctly)
- [ ] Border breaker implemented if assigned
- [ ] Responsive behaviour per spec
- [ ] No unused imports or dead code
- [ ] `npm run build` passes — zero errors

---

## What Claude Code Never Does

- Auto-commits or runs git commands - unless requested by the developer
- Adds features not in `page-structure.md`
- Uses raw hex, rem, or px values (except `rgba()` overlays on photography)
- Uses `<img>` instead of `<Image />`
- Installs Tailwind, React, or any unapproved package
- Adds animations beyond the three permitted hover transitions
- Adds gradients
- Uses centered text blocks as a default layout
- Proceeds without developer confirmation after session start summary
- Leaves unused imports, components, or dead code

---

## Commit Conventions

`feat:` new section/component · `fix:` bug · `chore:` config/deps · `style:` CSS only · `docs:` documentation
One section or fix per commit. Never include "Generated with Claude" in commit messages.
