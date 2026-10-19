# Data & Content Architecture

## /src/data/

Component-driven content. Arrays and objects that map directly to UI components.
Import with `@data/` alias.

Examples:

- `src/data/catalog.ts` — `PRODUCTS`, the single product source
- `src/data/audience-cards.ts`, `stats.ts`, `navigation.ts`, `legal.ts`

Convention:

- Named exports, uppercase — `export const STATS = [...]`
- TypeScript interfaces defined in the same file
- Every data file has a corresponding interface

## /src/constants/

Truly static values that never change.
Site name, copyright text, fixed brand strings.

## Rule

If a component renders a list or repeating pattern, the data lives in `/src/data/`.
If it could be replaced by a CMS fetch in future, it belongs in `/src/data/`.
Never hardcode content arrays directly inside component files.
