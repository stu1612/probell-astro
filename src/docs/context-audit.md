# Context Audit

## Snapshot 1

**Model:** claude-opus-5-5
**Usage:** 28.7k / 1.0M tokens (3%)

### Context Usage by Category

| Category                | Tokens | Usage |
| ----------------------- | -----: | ----: |
| System prompt           |   3.7k |  0.4% |
| System tools            |  14.6k |  1.5% |
| MCP tools               |    647 | <0.1% |
| MCP server instructions |   1.6k |  0.2% |
| Custom agents           |    104 | <0.1% |
| Memory files            |   2.1k |  0.2% |
| Skills                  |   6.0k |  0.6% |
| Messages                |     10 | <0.1% |
| Autocompact buffer      |  33.0k |  3.3% |
| Free space              | 938.3k | 93.8% |

### Memory Files (`/memory`)

| File                                                                          | Tokens |
| ----------------------------------------------------------------------------- | -----: |
| `~/Documents/Apps/probell-astro/CLAUDE.md`                                    |   1.2k |
| `~/.claude/rules/context7.md`                                                 |    428 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |    377 |

### Custom Agents (`/agents`)

| Agent             | Tokens |
| ----------------- | -----: |
| tracker-historian |    104 |

---

## Snapshot 2

**Model:** claude-opus-5-5
**Usage:** 136.5k / 1.0M tokens (14%)

### Context Usage by Category

| Category                | Tokens | Usage |
| ----------------------- | -----: | ----: |
| System prompt           |   3.7k |  0.4% |
| System tools            |  15.3k |  1.5% |
| MCP server instructions |   1.6k |  0.2% |
| Custom agents           |    104 | <0.1% |
| Memory files            |   2.1k |  0.2% |
| Skills                  |   6.0k |  0.6% |
| Messages                | 107.8k | 10.8% |
| Autocompact buffer      |  33.0k |  3.3% |
| Free space              | 830.5k | 83.1% |

### Memory Files (`/memory`)

| File                                                                          | Tokens |
| ----------------------------------------------------------------------------- | -----: |
| `~/Documents/Apps/probell-astro/CLAUDE.md`                                    |   1.2k |
| `~/.claude/rules/context7.md`                                                 |    428 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |    377 |

### Custom Agents (`/agents`)

| Agent             | Tokens |
| ----------------- | -----: |
| tracker-historian |    104 |

---

## File Line Counts (`wc -l`)

Measured 17 Oct 2026.

### Loaded at session start (Memory files)

| File                                                                          |   Lines |
| ----------------------------------------------------------------------------- | ------: |
| `CLAUDE.md`                                                                   |      81 |
| `~/.claude/rules/context7.md`                                                 |      10 |
| `~/.claude/projects/-Users-stu-Documents-Apps-probell-astro/memory/MEMORY.md` |       9 |
| `~/.claude/CLAUDE.md`                                                         |     n/a |
| **Subtotal**                                                                  | **100** |

`~/.claude/CLAUDE.md` does not exist.

### Loaded by `/kickoff` (Messages)

| File                              |     Lines |
| --------------------------------- | --------: |
| `.claude/skills/kickoff/SKILL.md` |        61 |
| `src/docs/brand.md`               |       186 |
| `src/docs/design.md`              |       407 |
| `src/docs/coding-standards.md`    |       383 |
| `src/docs/ai-interaction.md`      |       310 |
| `src/docs/page-structure.md`      |       220 |
| `src/docs/progress-tracker.md`    | **1,825** |
| **Subtotal**                      | **3,392** |

Plus one `src/features/*.md` spec when `/kickoff` is given a feature name.

### @ imports

`CLAUDE.md` uses no `@` imports. The core docs are referenced by path
only and read explicitly by `/kickoff`, which is why they count under
Messages rather than Memory files.

### Observations

- `progress-tracker.md` is ~54% of the lines `/kickoff` loads, and
  likely accounts for most of the Messages jump (10 → 107.8k tokens)
  between Snapshot 1 and Snapshot 2.

---

## Clean-up decisions (Oct 2026)

Agreed with Stu over 17–19 Oct 2026 on `course/module-3`.

### Why

This was the first project, built with heavy spec-driven development.
When the direction changed, the specs and guidelines conflicted with
it, so the Deviation convention and hard confirm stops were added to
work around them. The working model now is lean docs: key concepts
only. Claude uses judgement, proposes ideas and gives opinions, and
Stu confirms, rejects or redirects.

The brief has four parts:

1. Remove anything not required, including inactive skills, agents and
   MCP servers.
2. Collapse duplicated rules. If the same rule lives in several docs,
   the docs have failed.
3. Remove docs that aren't needed.
4. Fix stale data that misleads Claude's judgement.

### Confirmed facts

| Fact | Evidence |
| ---- | -------- |
| The site is served by Vercel | `curl -sI` returns `server: Vercel` |
| DNS is managed at one.com, and email (MX) is intact at one.com | `dig` (see DNS proof below) |
| The apex domain redirects to `www` | `curl -sI` returns 308 to `https://www.probellnutrition.com/` (noted only, not acted on) |
| Vercel project `probell-astro`. The MCP gets 403 on the team scope, and there's no CLI | MCP `list_projects` works, other calls are forbidden |
| HubSpot env vars are set in Vercel and tested | Stu |
| Partner forms fall back to `""` if a `HUBSPOT_*` var is missing | `src/pages/sales.astro:11-12` and its siblings |
| Vercel production builds from `main`. Day-to-day work is on `dev`; `course/*` branches are children of `dev`, used for now | Stu; `git merge-base` |
| Fonts are Anton (display) and Space Grotesk (body), confirmed final | `global.css:38-46`; Stu |
| `TornEdge.astro` isn't used in the code | Referenced only in docs and specs |
| Playwright MCP is configured at project scope and fails to connect | `~/.claude.json`; 2 allow rules in `settings.local.json` |

### DNS proof (19 Oct 2026, read-only)

```
$ dig +short probellnutrition.com A
216.198.79.1
$ dig +short probellnutrition.com NS
ns01.one.com.
ns02.one.com.
$ dig +short probellnutrition.com MX
10 mx1.mailpod16-cph3.g1i.one.com.
10 mx2.mailpod16-cph3.g1i.one.com.
10 mx3.mailpod16-cph3.g1i.one.com.
10 mx4.mailpod16-cph3.g1i.one.com.
$ curl -sI https://probellnutrition.com | grep -i server
server: Vercel
```

The stale DNS/MX line was deleted from the tracker, and nothing was
added in its place.

### Decisions

1. **DNS/MX tracker item:** deleted, nothing added in its place.
2. **External services:** "If you need information from Vercel, DNS
   or any external service, ask Stu. Don't propose installing tools or
   widening permissions to get it." This goes into CLAUDE.md as an
   example of a good rule.
3. **HubSpot silent failure:** no code change now. It's logged under
   Later.
4. **Approach:** a lean reset.
5. **CLAUDE.md:** about 50 lines covering the project, stack, hard
   code rules, deploy facts, the HubSpot `""` fact, the
   external-services rule, working style and a doc map.
6. **Retired:** the Deviation convention, the mandatory confirm stop
   and the mandatory Playwright checks.
7. **Completed specs:** the site is published and the code is the
   source, so all of `src/features/` was deleted (git history keeps it). Non-obvious intent
   moved to `brand.md` (Partner pages) and the `hubspot.ts` header; the
   pending confirmation-email sender swap went to the tracker board.
8. **Design docs:** they describe intent and aren't rulebooks. Claude
   proposes ideas within that intent.
   - Gradients: the code wins. Dark overlays go where text sits on
     images; no decorative gradients.
   - Motion: restrained, and Claude proposes anything beyond hover.
9. **Progress tracker:** it's the project record and is never read at
   session start. It's read on demand through `tracker-historian`.
   - Structure: a board (Now / Next / Open / Known bugs / Closed)
     above the full session log.
   - `/wrap` moves finished jobs into the log and promotes Next to
     Now.
10. **`/start` and `/wrap`:** they run only when Stu types them.
    Nothing runs automatically at session start.
11. **Git, delete and attribution rules** go into settings and
    permissions, not CLAUDE.md.
12. **Fonts:** the ones in use are confirmed.
13. **`TornEdge.astro`:** delete it, since it's unused.
14. **Playwright MCP:** remove the server and its allow rules.

### Plan

1. Audit baseline: this section and the Later entries.
2. Tracker restructure.
3. Fix stale data in the docs that are kept.
4. Remove what isn't needed.
5. Archive the completed specs.
6. Write the new CLAUDE.md.
7. Add settings and permissions.
8. Add `/start` and `/wrap`, and update memory.
9. Re-measure: target well under 1,099 lines (baseline 1,648).

---

## Later

### HubSpot partner forms: missing config fails silently

- Problem: sales/retail/distributor pages fall back to "" when a
  HUBSPOT_* value is missing (sales.astro:11-12 and siblings).
  The build passes and leads are lost without anyone knowing.
- Decision (Stu): forms must never fail silently.
  - Missing config = catch at build. Production build fails
    (Vercel keeps the last good deploy live). Dev/preview: warn and
    show a visible "form unavailable, email us" fallback.
  - HubSpot errors at submit time: show a clear error plus a
    mailto fallback.
- First check when this is picked up: are the portal ID and GUIDs
  public anyway (grep dist/ after a build)? If so, move them to a
  typed file in src/data/ instead of guarding env vars.
- Preview env vars: Stu checks in the Vercel dashboard. No Vercel
  access needed.
- Planned for: Module 4 (spec + build), test in Module 5.

### Payment gateway

- Possible, not decided. The site isn't ecommerce today, so this would
  change its single goal. Stu decides scope before any work.

### Security headers

- There's no `vercel.json`, so the site ships without HSTS,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` or
  a CSP. A CSP would need to allow `api-eu1.hsforms.com`, the HubSpot
  embed and Google Fonts.
- Not urgent for a static site with no logins, but worth doing.

### Vercel access

- The Vercel MCP gets 403 on the `boldersonstu-5986s-projects` team
  scope, and there's no CLI.
- Until then, Claude asks Stu for any Vercel, DNS or external
  information.
- Parked until Module 6.
