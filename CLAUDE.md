# Design system

This project uses the Solotvj design system in `design-system/`.

- Before any UI work, read `design-system/README.md` (brand rules, voice, colour, type, layout).
- Before using a component, read its note in `design-system/components/<Name>.md`; props are in `design-system/index.d.ts`.
- Load `design-system/tokens.css` first, then `design-system/bundle.css` (it also loads the Google Fonts).
- Never hard-code colours, spacing, radii or font stacks: use the CSS variables from `tokens.css`
  (e.g. `var(--ink)`, `var(--surface-100)`, `var(--accent)`, `var(--space-6)`, `var(--radius-md)`, `var(--font-display)`)
  and the type classes (`.display-xl`, `.display`, `.heading`, `.body`, `.label`, …).
- Dark theme by default: `<html data-theme="dark">`. Light is `data-theme="light"`.
- Components: with React, load React 18 UMD then `design-system/bundle.js` and use `window.Solotvj.*`.
  Without React, reproduce the same markup and `.stv-*` classes from `bundle.css`; don't invent new buttons, cards or badges.
- Copy follows the README's voice: write as "we", address "you"; sentence case; no emoji, no exclamation marks, no hype words.
- One primary button per view, one `bone` card per page, one highlighted stat per row.
- No gradients, glows or heavy shadows. Flat surfaces, hairlines (`--line`) and a single blue.
- Treat `design-system/` as read-only; if something is missing, add it in the project's own CSS using the tokens.

## Homepage exception

The homepage (`src/pages/[...lang]/index.astro`) has its own, bolder look. There, these rules replace the ones above that they contradict; every other page follows the design system as written.

- Styles live in `src/styles/loca.css` (`.loca-*` classes); reuse them rather than adding new one-offs.
- Bone page (`--bone`, `--ink-on-bone`) with full-width bands in ink, `--accent-fill` and `--highlight` (yellow).
- 2px ink borders (`--stroke`) and hard offset shadows with no blur (`6px 6px 0`, up to `12px 12px 0`). Still no gradients, glows or blurred shadows.
- Extra colours are only the ones defined in `loca.css`: `--highlight`, `--paper`, `--ink-on-bone-muted`. Everything else comes from `tokens.css`.
- Big Instrument Serif headlines, often with an italic half in the accent as the punchline.
- Several strong buttons per view are fine (`.loca-btn-blue`, `.loca-btn-ink`), and small tilts (stickers, the chat card, hover lifts).
- The voice can be playful ("Tu negocio nunca duerme. Vos sí.", "Quiero dormir tranquilo"), but the rest still applies: "we" and "you", sentence case, no emoji, no exclamation marks, no hype words.
- Motion stays optional: everything that moves stops under `prefers-reduced-motion`.
- No horizontal scrolling at 320px: rotated or offset decorations must stay inside the screen.

When a step does not need my input, keep going, and put status notes in the same message as your next action. Stop and ask only when you cannot continue without me, or before anything that cannot be undone, such as deleting files, overwriting other people's work or changing anything outside this folder.