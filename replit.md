# The Haunted Hallway of Doom

An offline-friendly choose-your-laugh comedy horror novel for the web and Android, with 320 pages of branching hallway nonsense.

## Run & Operate

- `pnpm --filter @workspace/goosebumps-comedy-cyoa run dev` — run the paperback web app
- `pnpm --filter @workspace/goosebumps-comedy-cyoa-mobile run dev` — run the Expo Android companion
- `pnpm --filter @workspace/api-server run dev` — run the shared API server when needed
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- The story apps are frontend-only and do not require network access to play.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/goosebumps-comedy-cyoa/src/App.tsx` — web game shell, save state, panels, settings, and short/long route presentation.
- `artifacts/goosebumps-comedy-cyoa/src/storyPages.ts` — source of truth for the generated 320-page long route.
- `artifacts/goosebumps-comedy-cyoa-mobile/app/index.tsx` — native touch-first Android screen and offline save/profile/settings experience.
- `artifacts/goosebumps-comedy-cyoa-mobile/storyPages.ts` — self-contained mobile copy of the story generator for offline bundles.
- `artifacts/goosebumps-comedy-cyoa/src/index.css` and `artifacts/goosebumps-comedy-cyoa-mobile/constants/colors.ts` — synchronized paperback palette.

## Architecture decisions

- The web app and Android app are companion frontends for the same product; the Android bundle owns its story data so reading works without an API or connection.
- Progress, inventory, stats, profile naming, achievements, and accessibility preferences use local persistence rather than authentication.
- The native app uses AsyncStorage and Expo Go-compatible libraries only; no database or server dependency is required for the game loop.
- The visual language intentionally stays close to a haunted paperback: parchment, ink navy, lime bookmark green, coral margin notes, and serif display copy.

## Product

The game opens as a 320-page choose-your-own-adventure comedy horror novel. Players choose routes through eight school rooms, collect absurd objects, build laugh/nerve/wit/chaos stats, unlock achievements, revisit choices, view a room map, change reading settings, and resume from a local save. The Android companion mirrors those capabilities with touch-friendly cards, haptic feedback, bottom sheets, and no-signal operation.

## User preferences

Keep the existing haunted-library paperback identity. Extend the comedy, consequences, replayability, collectibles, and endings instead of replacing the product with a generic game UI.

## Gotchas

- When changing story data, update both `storyPages.ts` copies so Android remains fully offline and content-parity is preserved.
- Restart the exact managed workflow after dependency, toolchain, or run-command changes; normal Expo code edits use HMR.
- Replit's Expo publishing flow is for iOS App Store submission, not Google Play; Android can be tested from the Expo QR/dev URL and built outside that flow.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
