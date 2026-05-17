# Probell Nutrition — Contact Spec

**Version 1 · 14 May 2026**
**Status: Not started**

---

## Goal

B2B contact form. Two column layout — brand statement left, form right.
Submits directly to client email via Formspree.
No consumer waitlist language — this is a business enquiry form.

---

## Reference

`docs/page-structure.md` — Section 10: Contact

---

## Design Tokens

- Background: `var(--color-surface)`
- Eyebrow: `.label-text--red`
- Headline: `var(--font-display)`, `var(--text-section)`, `var(--color-white)`
- Sub-line: `var(--font-body)`, `var(--text-body)`, `var(--color-grey)`
- Form inputs: `.form-input`, `.form-label`, `.form-group` from globals.css
- CTA: `.btn-primary`
- id: `contact`

---

## Pre-Build Confirmation Required

Before building this section confirm with developer:
- [ ] Client email address for form submissions
- [ ] Formspree account created — form ID available
- [ ] Fallback: mailto if Formspree not ready

---

## Tasks

### 1. Create Contact.astro

File: `src/components/Contact.astro`

Requires `client:load` for form submission handling.
Add to `src/pages/index.astro` as:
```astro
<Contact client:load />
```

### 2. Two column layout

```css
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  align-items: center;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
}
```

### 3. Left column — brand statement

**Eyebrow:**
```
"Partner with Probell"
```
Class: `.label-text--red`

**Headline:**
```
"Stock Probell.
Be First."
```
Font: `var(--font-display)`, `var(--text-section)`
Color: `var(--color-white)`
Class: `display-text`

**Sub-line:**
```
"Whether you're a gym, distributor, or retailer —
we want to hear from you."
```
Font: `var(--font-body)`, `var(--text-body)`
Color: `var(--color-grey)`
Margin top: `var(--space-md)`

### 4. Right column — form

Five fields using globals.css form classes.

```
Field 1: Full Name
  type="text", required
  label: "Full Name"
  placeholder: "Your name"

Field 2: Business Name
  type="text", required
  label: "Business Name"
  placeholder: "Your business"

Field 3: Email
  type="email", required
  label: "Email Address"
  placeholder: "your@email.com"

Field 4: Interest
  type="select", required
  label: "I am a..."
  Options:
    - "Select one..." (disabled, default)
    - "Gym"
    - "Distributor"
    - "Retailer"
    - "Other"

Field 5: Message
  type="textarea", optional
  label: "Message (optional)"
  placeholder: "Tell us about your business and
                how you'd like to work with Probell."
  min-height: 120px
```

### 5. Submit button

```
"Get in Touch"
```
Class: `.btn-primary`
Full width on mobile.
Margin top: `var(--space-md)`.

### 6. Form submission — Formspree

```astro
<form action="https://formspree.io/f/[FORM-ID]" method="POST">
```

Replace `[FORM-ID]` with actual Formspree form ID when available.

Fallback if Formspree not ready:
```astro
<form action="mailto:[CLIENT-EMAIL]" method="POST" enctype="text/plain">
```

### 7. Success state

On successful submission replace form with inline message:

```
"Thanks for reaching out. We'll be in touch soon."
```

- Color: `var(--color-gold)`
- Class: `.label-text`
- Implemented via JS — toggle `display: none` on form,
  show success message div

```html
<div class="contact-success" style="display: none;">
  Thanks for reaching out. We'll be in touch soon.
</div>
```

### 8. Import into index.astro

```astro
import Contact from '@components/Contact.astro';
---
<Contact client:load />
```

---

## Confirmed Working ✓

- [ ] Two column layout — content left, form right
- [ ] Eyebrow correct — red label style
- [ ] Headline correct copy and style
- [ ] Sub-line correct copy and color
- [ ] All five fields render with correct labels and placeholders
- [ ] Select dropdown has correct options
- [ ] Submit button correct style and label
- [ ] Form submits to Formspree or mailto fallback
- [ ] Success message displays on submission
- [ ] Mobile: single column, inputs full width
- [ ] `npm run build` passes

---

## What Is Not In This Spec

- No consumer waitlist language
- No newsletter signup
- No GDPR consent checkbox — form goes direct to client email
- No database storage of submissions
- No file upload
