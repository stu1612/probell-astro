# Probell — Distributor Program Page Spec

**Version 2 · 18 July 2026**
**Status: Ready for development**
**Supersedes:** earlier draft based on client's Website Vision doc
(full distributor kit, MOQs, supply chain detail). This version
reflects a deliberately minimal scope, worked out in session — see
Core Positioning.

---

## Core Positioning

A Distributor is structurally distinct from a Retailer: they don't sell
to the end consumer at all — they sell *to* retailers (or smaller
distributors), buying in bulk and handling regional/national logistics.
Their question isn't "will this sell on my shelf," it's "can you supply
me reliably at volume, and is this worth building a business
relationship around."

**Honest scale assessment (session decision):** Probell cannot credibly
pitch itself to enterprise-scale distributors (e.g. Costco-tier) — that
kind of relationship isn't built through a website contact form
regardless of copy quality; it comes through trade shows, broker
introductions, or direct outbound. Trying to write copy that
overclaims scale or manufactures success stories that don't exist would
undermine trust, not build it — a distributor evaluating a new brand
treats overselling as a bigger red flag than honestly being early-stage.

**The realistic, correct audience for this page is a regional or
mid-size distributor** — someone actively scouting new brands (often at
events like expos), for whom an early-stage brand can be genuinely
attractive: less competition, room to negotiate territory, first-mover
upside if the brand grows. The page is framed toward this person, not
toward proving a track record that doesn't exist yet.

**Deliberately no manufactured success stories, no inflated capability
claims, no specific unit/production numbers** (client confirmed:
300–400 unit initial run stays private). No "why partner with us"
stat-chip section pretending at scale.

Tone: open, direct, genuinely inviting a two-way conversation — not a
pitch deck. Example framing agreed in session:
```
"We're early, and we're serious about growing right. If you see an 
opportunity here, we want to hear how you see it — not just sell you 
a pitch deck."
```

---

## Position in Page

New route: `/partners/distributor` (final URL pending nav/IA
confirmation).

---

## Page Structure — Deliberately Minimal

Per session decision: this page does not need a full stat-chip "why
partner" section, a manufactured proof section, or extensive content.
The realistic buyer for this page (see Core Positioning) is evaluating
based on genuine opportunity and direct conversation, not on-page
credentials. Over-building this page risks looking like it's
compensating for a lack of track record — better to be short and
honest than long and unconvincing.

## 1. Hero / Intro

**Eyebrow:** `"Distributor Program"` — `.label-text--gold` (to
differentiate from Retailer's red, consistent with existing site
pattern of gold = secondary/endurance-adjacent accent)

**Headline (draft):**
```
"Building the Network. Looking for the Right People."
```

**Sub-line:**
```
"We're early, and we're serious about growing right. If you see an 
opportunity here, we want to hear how you see it."
```

## 2. Short Positioning Statement

One short paragraph, no stat chips, no numbers:

```
"Probell is a US-made kettlebell-shaped protein brand, currently 
building distribution from the ground up. We're not pretending to be 
bigger than we are — we're looking for distributors who see the same 
opportunity we do, and want to build something real together."
```

## 3. Contact Form

That's the page. No FAQ section, no "how it works" step list — per the
"small distributor" persona exercise in session, this audience doesn't
want structured process explanation, they want a direct, low-friction
way to start a real conversation.

---

## 4. Application / Contact Form

**Confirmed fields (session-locked, deliberately the shortest of the
three partner forms):**

| Field label | Maps to | Type | Required? |
|---|---|---|---|---|
| Business Name | Business Name (custom) | Text | **Required** |
| Your Name | Firstname/Lastname (standard, via Full Name field) | Text | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Contact Email | Email (standard) | Email | **Required** |
| *(hidden)* Partner Type | Partner Type (custom), fixed value "Distributor" | Text | N/A — hidden field |

**Deliberately no Message/textarea field, no region field, no company
background field.** Session reasoning: distributors build relationships
through direct conversation, not web forms — asking for business
details, volume, or existing territory up front would be premature and
mismatched to how this audience actually operates. The form's only job
is to get a name, a business, and a way to make contact — everything
else happens on a call.

**Required copy near the form** (not a form field — placed as
supporting text):
```
"We'll be in touch personally to learn about your business. This 
isn't something we handle through automated forms — building the 
relationship starts with a real conversation."
```
This pre-empts the "why is this form so short" question and reinforces
the open-conversation positioning rather than reading as an oversight.

---

## HubSpot Integration

Confirmed, built and published this session:

```
Portal ID:  148924644
Region:     eu1
Form GUID:  7aaa6c4f-7540-43d6-b396-a50a06fa257a
```

**⚠️ Region-specific endpoint required.** This portal is on HubSpot's
EU data center — the generic US endpoint (`api.hsforms.com`) will not
work. Use:

```
POST https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/7aaa6c4f-7540-43d6-b396-a50a06fa257a
```

Same client-side fetch pattern as the existing Contact form and other
partner pages — no API key required for this endpoint.

**Lead source tagging:** hidden field `partner_type` set to fixed value
`"Distributor"` on this form specifically.

**Status tracking — why Deals were NOT used (session reasoning, applies
to all three partner forms):** free tier includes exactly one Deal
pipeline. A "Deal" in HubSpot represents a specific transaction with a
dollar value and expected close date — that's not what's being tracked
here. What's actually needed is "where is this application/inquiry in
our review process," which is a status on the Contact itself, not a
transaction. Using the Deal pipeline for this would also have burned
the one free-tier pipeline on the wrong job, leaving nothing available
for when a real dollar-value order or contract eventually needs
tracking.

Instead: custom `Application Status` property (dropdown: New /
Reviewing / In Discussion / Active) on the Contact record, updated
manually. Session-confirmed as the right fit specifically because the
client wants to personally engage with and manually progress each
inquiry — a manual property update supports that; an automated Deal
pipeline would work against it.

**Automated confirmation email:** not built. Given this page's entire
positioning is "this isn't handled through automated forms," an
automated email response would directly undercut the page's own
stated promise. Rely on inline form success message + genuine personal
follow-up only.

---

## Component Location

- Playground first: per `kickoff-spec.md` Step 4
- Production: `src/components/partners/DistributorPage.astro` (or
  route-based equivalent per current stack conventions)
- Requires client-side island for form submission (`client:load`)

---

## What Is Not In This Section

- No MOQs, supply chain detail, or manufacturing capacity figures —
  formally deferred per original spec, reaffirmed this session
- No published production run numbers — client-confirmed private
- No stat-chip "why partner" section — deliberate, see Core Positioning
- No FAQ or "how it works" section — deliberate, see Page Structure
- No Message/textarea form field — deliberate, see Section 4
- No automated confirmation email — deliberate, see HubSpot Integration

---

## What Is Not Yet Built

- Component not yet created
- Final route/URL pending nav-IA confirmation
- Distributor Kit (PDF collateral: company profile, market analysis,
  MOQs, supply chain) — tracked as a design/content deliverable for a
  future stage, not part of this build; the current page does not
  reference or link to it
