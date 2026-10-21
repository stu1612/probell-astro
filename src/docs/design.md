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
  Contact, AudienceCard, ProductHero). These are scrims, not decoration.
  No decorative or colourful gradients.
- **Ghost numbers** (ProductStrips, SupplementRow, ProductHero, 404) use
  a colour token with low opacity.
- **Nav** is transparent over the hero and turns solid off-white on
  scroll. It has square buttons and no dropdowns. The social links are
  commented out until the accounts are refreshed.
- **Forms** use `ui/FormField.astro`.

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
