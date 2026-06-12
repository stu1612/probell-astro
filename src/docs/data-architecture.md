# Data & Content Architecture

**Last updated: 12 June 2026**

---

## /src/data/

Component-driven content. Arrays and objects that map directly to UI components.
Import with `@data/` alias.

Examples:

- `src/data/stats.ts` — stats rows, performance numbers
- `src/data/products.ts` — product SKUs, names, descriptions
- `src/data/navigation.ts` — nav links, footer links

Convention:

- Named exports, uppercase — `export const STATS = [...]`
- TypeScript interfaces defined in the same file or in `src/types/`
- Every data file has a corresponding interface

## /src/constants/

Truly static values that never change.
Site name, copyright text, fixed brand strings.

## Rule

If a component renders a list or repeating pattern, the data lives in `/src/data/`.
If it could be replaced by a CMS fetch in future, it belongs in `/src/data/`.
Never hardcode content arrays directly inside component files.
