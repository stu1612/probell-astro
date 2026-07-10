# Probell Nutrition — Market Strategy

**Version 1 · 9 July 2026**
**Status: Confirmed**

---

## Market

**US market only.** No Swedish or EU market entry is planned.

Note for context: earlier project discussion referenced a Sweden-first
proof-of-concept strategy. That is no longer the plan and should be
disregarded in any historical notes or summaries that mention it. This
document is the current source of truth on market direction.

---

## Why this doesn't require a brand or architecture change

The brand identity, voice, and visual direction defined in `brand.md` were
already written as American-directed — "an American-directed supplement
brand built around strength, performance, and blue-collar identity." No
copy, photography direction, or design token changes are required as a
result of this market confirmation. The site was always positioned for a
US audience; what's changed is the go-to-market sequencing, not the brand.

The current site architecture (fully static, no ecommerce, no payment
gateway, no backend) also remains correct for the US-only direction — see
`partner-crm-integration.md` for how partner/retailer/distributor
recruitment is handled without new infrastructure.

---

## Go-to-Market Plan

Per the client's Sales & Launch Strategy:

**Phase 1 — Market Validation**
- First production run: ~300–400 units
- Arnold Sports Festival — premium booth, physical product, brochures,
  marketing material
- Goal: qualified leads, not immediate sales
- Follow-up: California gym and retailer visits, in person

**Phase 2 — Sales Network**
- Independent, commission-based Sales Partners (not employees)
- Target states: California, Texas, Florida, Arizona, Nevada, New York
- Criteria: fluent English, US-based, gym/retail sales experience,
  fitness industry background preferred
- Supported by the Sales Partner page and application flow — see
  `sales-partner-page.md`

---

## Open Items

- [ ] **Arnold Expo date** — not yet confirmed. This is the one hard
  external deadline in the project and should be requested from the
  client explicitly; current site work (mobile audit, hero redesign,
  partner pages) should be prioritized against it once known.
- [ ] Confirm with client whether any prior Sweden-related planning
  (if it exists in their own notes, outside this project's docs) should
  be formally closed out on their end too.

---

## Document Map Addition

Add this row to the Document Map table in `design.md`:

| File | Purpose |
|---|---|
| `market-strategy.md` | Current market direction and go-to-market phasing — read before any market-facing copy or feature decision |
