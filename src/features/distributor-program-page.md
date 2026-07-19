# Probell — Distributor Program Page Spec

**Status: Ready for development**
**Route:** `src/pages/partners/distributor.astro` (already scaffolded)

---

## Core Positioning

A Distributor doesn't sell to the end consumer — they sell *to*
retailers, buying in bulk and handling regional/national logistics.
Distinct from a Retailer (see `retailer-program-page.md`).

**Honest scale assessment:** Probell cannot credibly pitch itself to
enterprise-scale distributors — that relationship isn't built through
a website form regardless of copy quality; it comes through trade
shows, broker introductions, or direct outbound. Overclaiming scale or
manufacturing success stories that don't exist would undermine trust
faster than honestly being early-stage.

**The realistic audience for this page is a regional or mid-size
distributor** scouting new brands — for whom an early-stage brand can
be genuinely attractive (less competition, room to negotiate territory,
first-mover upside). The page is framed toward this person.

No manufactured success stories, no inflated capability claims, no
specific unit/production numbers (client confirmed: initial run
quantity stays private). No "why partner with us" stat-chip section.

Tone: open, direct, genuinely inviting a two-way conversation — not a
pitch deck.
```
"We're early, and we're serious about growing right. If you see an 
opportunity here, we want to hear how you see it — not just sell you 
a pitch deck."
```

---

## Page Structure — Deliberately Minimal

This page does not need a full stat-chip "why partner" section, a
manufactured proof section, or extensive content. The realistic buyer
here is evaluating based on genuine opportunity and direct
conversation, not on-page credentials. Over-building this page risks
looking like it's compensating for a lack of track record.

### 1. Hero / Intro

**Eyebrow:** `"Distributor Program"` — `.label-text--gold`

**Headline (draft):**
```
"Building the Network. Looking for the Right People."
```

**Sub-line:**
```
"We're early, and we're serious about growing right. If you see an 
opportunity here, we want to hear how you see it."
```

### 2. Short Positioning Statement

One short paragraph, no stat chips, no numbers:
```
"Probell is a US-made kettlebell-shaped protein brand, currently 
building distribution from the ground up. We're not pretending to be 
bigger than we are — we're looking for distributors who see the same 
opportunity we do, and want to build something real together."
```

### 3. Contact Form

That's the page. No FAQ, no "how it works" step list — this audience
wants a direct, low-friction way to start a real conversation, not
structured process explanation.

---

## Contact Form

| Field label | Maps to | Type | Required? |
|---|---|---|---|
| Business Name | Business Name (custom) | Text | **Required** |
| Your Name | Firstname/Lastname (standard, via Full Name field) | Text | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Contact Email | Email (standard) | Email | **Required** |
| *(hidden)* Partner Type | Partner Type (custom), fixed value "Distributor" | Text | N/A |

**No Message/textarea field, no region field, no company background
field.** Distributors build relationships through direct conversation,
not web forms — asking for business details up front is premature.
The form's only job is a name, a business, and a way to make contact.

**Required copy near the form**, not a field:
```
"We'll be in touch personally to learn about your business. This 
isn't something we handle through automated forms — building the 
relationship starts with a real conversation."
```

---

## HubSpot Integration

See `src/docs/partner-crm-integration.md` for the full shared pattern.
This page's specifics:

```
Form GUID: 7aaa6c4f-7540-43d6-b396-a50a06fa257a
Endpoint:  https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/7aaa6c4f-7540-43d6-b396-a50a06fa257a
Hidden field: partner_type = "Distributor"
```

**Automated confirmation email:** deliberately not built. This page's
entire positioning is "this isn't handled through automated forms" —
an automated email would directly contradict that.

---

## What Is Not In This Page

- No MOQs, supply chain detail, or manufacturing capacity figures
- No published production run numbers — client confirmed private
- No stat-chip "why partner" section
- No FAQ or "how it works" section
- No Message/textarea form field
- No automated confirmation email

---

## What Is Not Yet Built

- Distributor Kit (PDF collateral) — design/content deliverable for a
  future stage; this page does not reference or link to it
