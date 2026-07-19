# Probell — Sales Partner Page Spec

**Status: Ready for development**
**Route:** `src/pages/partners/sales.astro` (already scaffolded)

---

## Core Positioning

The applicant pool is unknown and mixed — could be a gym-floor trainer,
an independent sales rep, or someone with no sales background who
simply believes in the product. Rather than guess at one persona, the
page qualifies on **belief and vision, not credentials.** This is the
single filtering criterion, stated directly.

No persona-specific language, no assumed sales background, no
resume-shaped qualification anywhere on the page or in the form.

---

## 1. Hero / Intro

**Eyebrow:** `"Sales Partner Program"` — `.label-text--red`

**Headline (draft):**
```
"We're Not Looking for Salespeople."
```

**Sub-line:**
```
"Probell partners aren't chosen for experience — they're chosen for 
conviction. If you already live this, we want to hear from you."
```

No CTA in hero — single CTA lives with the form.

---

## 2. Why Probell

3–4 short stat/value callouts, reusing the `BuiltForStrength` stat-chip
visual pattern. Honest to current stage — no invented traction numbers.

```
- US-made, no compromise formula
- Kettlebell-shaped container — the product is the conversation starter
- Ground-floor opportunity — early partners shape the network
- Built for people who already show up
```

---

## 3. How It Works

```
1. Apply — a short form, a few minutes
2. We review — every application read personally, including any 
   region or event opportunities you've flagged
3. Conversation — commission structure and territory discussed 1:1
4. Onboarding — [materials/kit TBD]
```

---

## 4. FAQ

Reuse the existing FAQ accordion component (`src/components/`) — same
interaction pattern already built for the homepage FAQ section.

```
- Is there a cost to apply?
- Do I need prior sales experience?
- What territories are currently available?
- What happens after I apply?
```

Answers reinforce belief-first positioning, not just logistics — e.g.
"No — we're not looking for a resume, we're looking for someone who
already believes in what we're building."

---

## 5. Application Form

| Field label | Maps to | Type | Required? |
|---|---|---|---|
| Full Name | Firstname/Lastname (standard, via Full Name field) | Text | **Required** |
| Email | Email (standard) | Email | **Required** |
| Phone | Phone (standard) | Text | Optional |
| Where do you want to sell? | Region Interest (custom) | Text | **Required** |
| Any event you'd like to sell at? | Event Interest (custom) | Text | Optional |
| Why Probell? | Inquiry Message (custom) | Multi-line text | **Required** |
| How did you hear about us? | How Heard (custom) | Text | Optional |
| *(hidden)* Partner Type | Partner Type (custom), fixed value "Sales Partner" | Text | N/A |

**No "relevant experience" field, no resume upload.** "Why Probell?" is
the single qualifying input.

**No dropdowns anywhere on this form.** Region and event are free text
— Probell doesn't have a fixed list of valid territories or events yet,
and free text also surfaces opportunities (a specific gym, a regional
expo) a dropdown would miss.

**Territories are not a separate page section** — folded into the
region/event form fields instead of a static claim about current
coverage, since Probell has no established territory to publish yet.
If a short framing line is wanted near the form:
```
"We're building our partner network from the ground up. Tell us where 
you want to sell — you could be the first Probell partner in your area."
```

---

## HubSpot Integration

See `src/docs/partner-crm-integration.md` for the full shared pattern
(endpoint, region requirement, property map). This page's specifics:

```
Form GUID: f2569cec-521e-41db-957f-88b3793241c4
Endpoint:  https://api-eu1.hsforms.com/submissions/v3/integration/submit/148924644/f2569cec-521e-41db-957f-88b3793241c4
Hidden field: partner_type = "Sales Partner"
```

**Automated confirmation email:** built. Currently sends from a
temporary placeholder address (`boldersonstu@gmail.com`) — swap to
`info@probellnutrition.com` once that domain email is confirmed
working.

---

## What Is Not In This Page

- No territory map or static coverage claim — see Section 5
- No published commission percentages or payout terms
- No "relevant experience" / resume-style form fields
- No dropdown/predefined list for region or event
- No Arnold Expo reference — event date unverified, may have passed;
  kept fully evergreen instead

---

## What Is Not Yet Built

- Info Sheet PDF download — cut from this build entirely (depends on
  commission data existing in written form; no dead download link)
- Onboarding materials/kit content (Step 4 of "How It Works") — content
  TBD, placeholder label acceptable at build time
