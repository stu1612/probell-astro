# Probell Nutrition — Design Intent

Read this before designing a new section or page. It's an outline of
what we're aiming for, not a rulebook. Propose ideas within it, and
challenge it when you have a better idea.

**The code is the reference for values.** Colours, fonts, type scale,
spacing, breakpoints and button styles all live in
`src/styles/global.css`. Don't copy them into docs.

## Feel

Dark, gritty, Americana and image-led. Industrial, blue-collar strength.
It should feel heavy and built, not slick or designed. Off-black and
off-white with red as the main accent and gold as the secondary. Bold
condensed display type (Anton) over a clean body face (Space Grotesk).

## What we're aiming for

- **Photography carries the page.** UI is the frame, and the image is
  the subject.
- **One obvious next step per section.** Everything leads towards
  contact. Keep primary CTAs to one per section.
- **Hard contrast between sections** (black against light) rather than
  decorative dividers.
- **Tight, dense layouts.** Use negative space for contrast, not by
  default.
- **Mobile first.**

## Patterns in use

- **Square buttons.** The radius was removed on purpose, and the
  commented-out `border-radius` in `global.css` is intentional.
- **Dark overlays on photos** wherever text sits on an image (Hero,
  Contact, AudienceCard, ProductHero, PartnerHero). These are scrims, not
  decoration. No decorative or colourful gradients. PartnerHero also
  adds a faint grain texture over the scrim for grit.
- **Ghost numbers** (ProductStrips, SupplementRow, ProductHero, 404) use
  a colour token with low opacity.
- **Nav** is transparent over the hero and turns solid off-white on
  scroll. It has square buttons and no dropdowns. The social links are
  commented out until the accounts are refreshed.
- **Forms** use `ui/FormField.astro`. Fields are dark and square
  site-wide, with a gold focus border.

## Partner pages

`/sales`, `/retail` and `/distributor` are built from the shared parts
in `src/components/Partner/`, with their content in
`src/data/partners.ts`. Each page picks the parts it needs, in this
order:

- **PartnerHero:** full-bleed photo with scrim and grain, eyebrow,
  Anton headline, subline and an optional row of fact labels.
  `titleSize="statement"` is for headlines that would run past three
  lines.
- **PartnerReasons:** image beside a numbered list of reasons.
- **PartnerStatement:** a light band with one large statement. It gives
  the black-against-light contrast on an otherwise dark page.
- **PartnerSteps:** numbered "How it works" steps on true black.
- **PartnerApply:** sticky intro on the left and the page's own form in
  a dark panel on the right. The form, its script and its HubSpot
  mapping stay in the page and pass in through the slot.

Gold carries the detail (numbers, rules, the form panel's top edge,
field focus) and red stays on the primary CTA. Eyebrows are red on
`/sales` and `/retail` and gold on `/distributor`.
The distributor page uses only Hero, Statement and Apply, which keeps it
deliberately minimal (see `brand.md`).

## Deliberately different

These are context, not locked rules. Propose changes if they stop
working.

- **BrandStory** sits on a white background as a social-proof and stats
  section, breaking the dark run.
- **Identity** uses a centred layout, unlike the left-aligned default.

## Motion

Restrained. Hover and focus transitions only, using the `--transition-*`
tokens. Propose anything beyond that rather than adding it.

## Avoid

- Anything that reads as ecommerce, wellness-soft or SaaS.
- Pill shapes, pastels, glossy effects and gimmicky motion.
- Layouts that could belong to any other brand.
