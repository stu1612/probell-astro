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

## Building it with AI: what I learned

I built Probell with Claude Code, and it's the project where I got the approach wrong first.

- **One big spec didn't work.** I started by writing a long, detailed spec and asking the agent to build from it. The result worked but looked generic, and the spec went out of date as soon as real decisions were made during the build.
- **Words are a poor way to describe a design.** The UI only started to feel like the brand once I gave the agent visual references (a vision board of images) and pinned the design down as tokens: colours, type, spacing. Adjectives like "bold" or "premium" got me generic output.
- **Rules beat instructions.** What lasted was a short `CLAUDE.md` with the rules that actually matter on this project, like how images must be loaded and where content lives, plus a note of the gotchas I'd already hit so they didn't happen twice.

Those lessons shaped how I set up my next project, a [basketball club site rebuild](https://github.com/stu1612/team4q).

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
