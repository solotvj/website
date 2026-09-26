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
