# Probell Nutrition — Progress Tracker

**Last updated: 17 May 2026**

---

## Current Status

**Phase:** Active build
**Active section:** Nav — Complete
**Next action:** Build Hero.astro

---

## Pre-Build Checklist

These items must be confirmed before Claude Code begins building.

### Spec documents
- [x] `brand.md` — complete
- [x] `design.md` — complete
- [x] `globals.css` — complete
- [x] `coding-standards.md` — complete
- [x] `ai-interaction.md` — complete
- [x] `page-structure.md` — complete
- [x] `progress-tracker.md` — complete

### Assets
- [x] Logo PNG — single asset supplied `/public/images/icons/probell-logo.png` — light/dark structure in place, awaiting two-variant assets
- [x] Hero image — `hero-main.jpg` — generated and confirmed
- [x] Brand story image — `gym-interior.jpg` — generated and confirmed
- [x] Bold statement image — `discipline.jpg` — client supplied
- [ ] Whey CPB PNG — pending
- [ ] Whey Cookies & Cream PNG — pending
- [ ] Whey Salted Caramel PNG — pending
- [ ] Favicon — pending

### Decisions pending
- [ ] Active display font — Anton or Barlow Condensed
        Decide in browser against real photography
- [ ] Active body font — Space Grotesk or DM Sans
        Decide in browser against real content
- [ ] Active hero headline — A, B, C, or D
        Decide in browser against hero image
- [ ] Footer design — visual references to be confirmed
- [ ] Contact form email address — confirm with client
- [ ] Instagram account URL — confirm with client
- [ ] Formspree account setup — confirm before building Contact section

---

## Build Sections

| # | Section | Status | Completed | Notes |
|---|---------|--------|-----------|-------|
| — | Project init | Complete | 17 May 2026 | |
| — | globals.css import | Complete | 17 May 2026 | |
| — | BaseLayout | Complete | 17 May 2026 | |
| 1 | Nav | Complete | 17 May 2026 | Single logo asset used for both states — swap when two-variant PNGs arrive |
| 2 | Hero | Not started | — | |
| 3 | Identity | Not started | — | |
| 4 | Trending | Not started | — | Needs product PNGs |
| 5 | Brand Story | Not started | — | |
| 6 | Built for Strength | Not started | — | Placeholder products |
| 7 | Bold Statement | Not started | — | |
| 8 | Built for Endurance | Not started | — | Placeholder products |
| 9 | Instagram | Not started | — | Placeholder grid at launch |
| 10 | Contact | Not started | — | Confirm email + Formspree |
| 11 | Footer | Not started | — | Placeholder — design deferred |
| — | Supplements page | Not started | — | Placeholder only at launch |

---

## Session Log

### Session 3 — 17 May 2026
**What was done:**
- Built `Nav.astro` to full spec
- `global.css`: removed `@import` (fonts now loaded exclusively via `<link>` in BaseLayout for better performance), added `--transition-slow: 0.3s ease` token, added `body { padding-top: 72px }`
- `BaseLayout.astro`: added `Nav` import, `transparentNav?: boolean` prop, `<Nav transparent={transparentNav} />`
- `index.astro`: passes `transparentNav={true}`
- `npm run build` passes — zero errors

**Decisions made this session:**
- `define:vars` used to pass `transparent` prop to client script — scroll listener only attaches on homepage
- Single logo file used for both light/dark states — CSS toggle structure kept intact for when two-variant assets arrive
- Google Fonts `@import` removed from `global.css` in favour of `<link>` in BaseLayout (faster: preconnect hints + parallel fetch vs. render-blocking @import)

**Decisions still open:**
- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 2 — 17 May 2026
**What was done:**
- Rebuilt `BaseLayout.astro` to spec: Props interface, default title, Google Fonts link tags, global.css import
- Updated `index.astro`: uses `@layouts/BaseLayout.astro` alias, scaffold removed, wraps empty `<main>`
- Confirmed `@components/` and `@layouts/` path aliases active via tsconfig.json
- `npm run build` passes — zero errors, 1 page built
- Progress tracker updated

**Decisions made this session:**
- None — all structural, no design decisions required

**Decisions still open:**
- Active display font (Anton or Barlow Condensed)
- Active body font (Space Grotesk or DM Sans)
- Active hero headline (A, B, C, or D)
- Footer design
- Contact form email address
- Instagram URL

---

### Session 1 — 14 May 2026
**What was done:**
- Full project scoped and confirmed in Claude Chat
- Brand direction confirmed — Americana, image-led, B2B contact focus
- Page structure confirmed — 11 sections
- Copy confirmed per section
- Color tokens confirmed
- Typography confirmed — four fonts imported, decisions deferred to browser
- Hero image generated and confirmed
- Brand story image generated and confirmed
- Bold statement image confirmed — client supplied
- All 7 spec documents written and confirmed

**Decisions made this session:**
- Stack: Astro static, hosted on one.com
- No animations — photography and typography carry the energy
- Border breaker techniques assigned per section transition
- Waitlist replaced with B2B contact form — GDPR consideration
- Footer design deferred pending visual references

**Decisions still open:**
- Active display font
- Active body font
- Active hero headline
- Footer design
- Contact form email address
- Instagram URL
- Product PNG assets

---

## Known Issues

None.

---

## Deferred Items

| Item | Reason | Owner |
|------|--------|-------|
| Footer design | Needs visual reference review | Developer |
| Product PNGs | Client assets not yet finalised | Client / Developer |
| Logo transparent PNG | Client to supply | Client |
| Instagram live feed | Account URL not confirmed | Client |
| Font decisions | Must be made in browser | Developer |
| Hero headline | Must be made in browser | Developer |
| Supplements page full build | Deferred to phase 2 | Developer |
| CMS integration (Hygraph) | Deferred until core UI stable | Developer |
| Payment gateway | Deferred — business decisions pending | Client / Developer |

---

## How Claude Code Updates This File

At the start of every session:
- Read current status and next action
- Confirm with developer before proceeding

At the end of every section:
- Update section status to `Complete`
- Add completion date
- Add any notes — deviations from spec, decisions made, issues found
- Update `Current Status` and `Next action` at the top of this file

At the end of every session:
- Add a session entry to the Session Log
- List what was built
- List any open decisions
- Update `Next action` at the top of this file
