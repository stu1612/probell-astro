# Mobile Audit Findings — Sections 1–6

**Viewport:** 375px × 812px  
**Date:** 2026-07-02  
**Scope:** Nav · Hero · Identity · Trending · Brand Story · Built for Strength  
**Method:** Playwright MCP — screenshot + DOM/computed-style inspection  

---

## Critical — Broken or missing

### C1 · Hero: sub-line and CTA absent from DOM
Spec requires `"Probell Nutrition. Coming soon."` sub-line and `"Join the Waitlist"` `.btn-primary` below the headline. Neither element exists in `#hero` — not hidden, not in the DOM. A visitor on mobile sees only the headline and no action to take.

### C2 · Hero → Identity: torn ink edge (Technique A) missing
No SVG border breaker exists at this transition. The section cuts hard from the hero photo straight into the Identity block. `querySelector('.torn-edge, svg')` inside `#hero` returns nothing.

### C3 · Identity → Trending: product PNG breakout (Technique B) missing
No kettlebell PNG is positioned at the bottom of `#identity`. `querySelector('[class*="breakout"], [class*="product"]')` returns nothing. The section boundary is a hard black cut.

### C4 · #emotion: off-spec background colour — raw cream value
`#emotion` computed background: `rgb(249, 246, 238)` — a hardcoded cream/off-white not in the token system. The only permitted background is `var(--color-black)`. This inverts the entire brand palette for the bottom third of the homepage.

### C5 · #emotion: off-spec text colour — raw near-black value
`#emotion` computed text and H2 colour: `rgb(18, 18, 19)`. Neither `--color-white` nor `--color-grey` — raw value, not a token. Combined with C4 this makes the section read as a different brand entirely.

### C6 · #emotion: H2 font-size fixed at 64px — no clamp()
`getComputedStyle(h2).fontSize` returns `64px`. Spec token `--text-section` is `clamp(2rem, 5vw, 3.5rem)` — at 375px that resolves to ~32px. The 64px fixed value makes the headline `"JUST THE PRODUCT YOUR SERIOUS MEMBERS HAVE BEEN WAITING FOR SOMEONE TO STOCK."` stack to 7 lines on mobile, consuming ~580px of vertical space.

### C7 · Brand Story (S5) section entirely absent
No `#brand-story` element exists in the DOM. Spec: two-column layout, `gym-interior.jpg` full-bleed left, "Built in the Gym. Designed for It." headline right, gold eyebrow, diagonal clip-path transition out. Neither the component nor its border breaker (Technique D) has been built.

### C8 · Built for Strength (S6) section entirely absent
No `#built-for-strength` element exists. Spec: "Performance Series" red eyebrow, "Built for Strength" heading, sub-line, 2–3 large-format product cards (min-height 400px desktop), single column on mobile. Entirely unbuilt.

---

## Moderate — Visual roughness or spec deviation

### M1 · Identity: copy and layout don't match spec
Spec: `"Fuel for people who already show up. / No shortcuts. No fillers. No compromise."` — display text only, no CTA, centered single column (max 800px).  
Built: `"Stock the brand that belongs in your gym."` headline + body paragraph + `"View Products"` CTA button, left-aligned at full width. Copy, alignment, and structure all differ from spec.

### M2 · Trending: grid + carousel replaced by editorial strips
Spec: `"Trending"` heading, 4-card product grid, mobile snap-scroll horizontal carousel.  
Built: full-bleed editorial banner (`"THREE FORMULAS. ONE STANDARD. NO COMPROMISE."`) followed by 3 alternating `.ps__strip` feature layouts (Whey 100, Creatine, Pre-Workout). No card grid, no snap-scroll carousel, no fourth product slot.

### M3 · Mobile nav overlay: links vertically low
The full-screen nav overlay has the close button top-right but the links (`Supplements · Learn · Contact`), social icons, and CTA occupy only the lower ~40% of the 812px overlay. The top 60% is empty. Spec: `"full screen overlay … links stacked centered"` implies vertical centring, which is absent.

### M4 · #emotion CTA block: large empty dead zone
After the `"Give your members what they've been asking for."` copy, ~300–400px of empty cream space follows before the Contact section begins. No CTA link or button is present in this block to bridge the gap.

---

## Polish

### P1 · Nav: "About" link replaced by "Learn"
Spec nav links: `Supplements · About · Contact` (About → `/#brand-story`). Built: `Supplements · Learn · Contact`. The `/#brand-story` anchor is gone (section C7 above explains why). May be intentional but worth confirming — if Brand Story is built, the About link needs restoring.

### P2 · Product strip 3 (Pre-Workout): excess bottom padding
~100px of empty dark space sits below the Pre-Workout lifestyle image before transitioning into `#emotion`. Minor visual gap that softens the otherwise tight density of the strip sequence.

### P3 · Console error on page load
Playwright reported 1 console error on every page load. Not yet diagnosed — should be checked in DevTools before next session.

---

## Notes on structure

The built page collapses the 11-section spec into a shorter sequence:

| Spec section | Built equivalent |
|---|---|
| S1 Nav | ✓ `header.nav` |
| S2 Hero | ✓ `#hero` (missing sub-line + CTA + torn edge) |
| S3 Identity | `#identity` (different copy + layout) |
| S4 Trending | `.banner` + `.ps` (editorial strips, not card grid) |
| S5 Brand Story | ✗ absent |
| S6 Built for Strength | ✗ absent |
| — | `#emotion` (unspecced section, cream bg) |

Sections 7–11 (Bold Statement, Built for Endurance, Instagram, Contact, Footer) are out of scope for this audit pass.
