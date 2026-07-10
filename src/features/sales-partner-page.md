# Probell — Sales Partner Page Spec

**Version 1 · 9 July 2026**
**Status: Partially blocked — see Open Items**

---

## Overview

New page, `src/pages/partners/sales.astro` (or `/become-a-partner` — confirm
URL with client). Recruits independent, commission-based sales
representatives per the Sales & Launch Strategy doc — targeting people who
speak fluent English, live in the USA, have gym/retail sales experience,
ideally a fitness/bodybuilding background.

Purpose: give the client something to point to at the Arnold Expo and in
direct outreach, and collect qualified applications.

**Integration:** see `partner-crm-integration.md` for the HubSpot form
pattern this page uses.

---

## Page Sections

### 1. Intro / Who We're Looking For

Reuse brand voice and identity content from `brand.md` — same tone, same
principles (earned not aspirational, confidence over hype), reframed for a
recruitment audience rather than a retailer audience. Emphasis shifts from
"why stock this" to "why sell this."

- Font: `var(--font-display)`, `var(--text-section)` headline
- Body copy: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Criteria list (English fluency, USA-based, gym/retail sales background,
  fitness industry background) as a simple bulleted or icon-row list —
  reuse `.tag` styling pattern from design.md for compact criteria chips

### 2. Commission Structure

**Blocked on client.** No commission percentage, tier structure, or payout
terms exist in either source document. Do not write this section's copy
until the client supplies real numbers.

Layout placeholder: reserve a card/panel component sized for a short
structured summary (e.g. 3–4 stat callouts, similar pattern to the stat
callouts already used in `range-section.md`). Do not build final content
until data is confirmed.

### 3. Available Territories

Simple text list, not an interactive map (see Section 1 discussion —
decision made 9 July 2026: no real territory carve-up exists yet, so a map
would visualize nothing). List target states from the Sales & Launch
Strategy doc:

```
Currently recruiting in: California · Texas · Florida ·
Arizona · Nevada · New York
```

- Font: `var(--font-body)`, `var(--text-label)`, uppercase,
  `letter-spacing: 0.1em`
- Frame as "currently recruiting in" not "available territories" — more
  accurate to the actual state (no partners exist yet to have claimed
  exclusivity) and avoids implying a formal territory system that doesn't
  exist yet

### 4. Apply Online — Form

Fields:

```
Full Name          — text, required
Email               — email, required
Phone                — text, optional
Location (State)     — text or select, required
Sales/Gym Industry Experience — textarea, required
                        Placeholder: "Tell us about your experience
                        selling to gyms, retailers, or in the fitness
                        industry."
Confirm US-based, fluent English — checkbox, required
```

- Submits to HubSpot Sales Partner form (GUID per
  `partner-crm-integration.md`)
- Fetch-based, no page reload — same UX pattern as `Contact.astro`
- Success message: `var(--color-gold)`, `.label-text` style, matching
  existing Contact success state
- Styling: reuse existing `.form-group`, `.form-label`, `.form-input`
  classes — no new form component needed

### 5. Download Info Sheet

**Blocked** — depends on commission structure (Section 2) being finalized
and client approving final PDF content/design. Link/button can be built
now with a placeholder or hidden until asset exists.

---

## Design Tokens

Standard site tokens per `design.md` — `--color-black` background,
`--color-red` primary CTA, `--color-gold` for the commission stat panel to
differentiate from the general red-accented site CTAs (mirrors the
gold/red split already used between Built for Strength and Built for
Endurance).

---

## Component Location

- Playground first: `src/app/(pages)/playground/page.tsx` equivalent for
  Astro — `src/pages/playground/` if that pattern exists, otherwise build
  directly per standard Astro workflow in `ai-interaction.md`
- Production: `src/pages/partners/sales.astro`
- Nav: add "Partners" or "Become a Partner" link — confirm placement with
  client, likely alongside existing nav links

---

## Open Items — Blocked on Client

- [ ] Commission structure and payout terms
- [ ] Confirmed page URL/slug and nav placement
- [ ] Sales Partner information sheet — final content and design approval
- [ ] HubSpot Form GUID (see `partner-crm-integration.md` client checklist)

## What Is Not Yet Built

- Everything in this document — page does not exist yet
- Interactive territory map (explicitly deferred, not planned for this
  phase — see Section 3)
