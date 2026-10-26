# Probell Nutrition

The website for Probell Nutrition, a supplement brand known for its kettlebell-shaped protein container. Live at **[probellnutrition.com](https://probellnutrition.com)**.

It's a B2B brand site, not a shop. The audience is US gyms, retailers, distributors and sales partners, and the site has one job: get the right people to make contact. The homepage follows that order. Feel the brand, see the product, find your route in, then get in touch.

## Stack

- **Astro**, static output, with `@astrojs/sitemap`
- **Plain CSS** with custom properties for colour, type, spacing and motion. No UI framework.
- **HubSpot** forms for the three partner routes (sales, retail, distributor)
- **Vercel** hosting. `main` deploys to production, day-to-day work happens on `dev`.
- TypeScript, ESLint and Prettier

## Decisions worth knowing about

- **No framework on the front end.** The site is almost entirely static content. Shipping React or Vue for a menu and a few forms would add weight without adding anything for the user.
- **Images go through Astro's pipeline.** Mobile performance dropped after launch. I traced it to images served from `public/`, which skips optimisation, and moved them into `src/assets/` so Astro resizes and compresses them at build time. The rule is now written into the project: always `<Image />` with an imported file.
- **Content lives in data files.** Products, partner routes and other repeated content sit in `src/data/` as typed exports, with one product catalogue as the single source of truth. Components only render.
- **Forms fail visibly.** If a HubSpot submit fails, the user sees an error and a direct email address instead of a silent failure.

## Structure

```
src/
  components/   one folder per homepage section, shared pieces in ui/
  data/         typed content: product catalogue, HubSpot form IDs
  layouts/      base and legal page layouts
  lib/          HubSpot submit helper
  pages/        routes
  styles/       global tokens
```

## Running it

```sh
npm install
npm run dev     # localhost:4321
npm run build
npm run lint
```
