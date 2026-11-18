# Patterns

Patterns drawn in markup in the Solotvj design files that are not in the component bundle yet. Each uses only the tokens in this system. When one is used on a second screen, it should become a component.

## Controls

- **Segmented toggle** (period, currency, demo tabs): 44px tall, `border-control` outline, `radius-md`. Selected is `accent-fill` with `on-accent`; on a bone card it is `ink-on-bone` with bone text. Native `button` with `aria-pressed`.
- **Preset chip**: 44px minimum, `border-control` outline. Selected is `accent` border and text on `surface-200`. A row of chips can be followed by a free number input ("Otro número").
- **Radio card**: a native radio inside a `line`-bordered card with a title and two short lines. Selected is an `accent` border on `surface-200`.
- **Accordion**: native `details`, a 64px summary in `subheading`, a chevron that turns when open. Used for FAQs and for fine print.

## Status and progress

- **Status strip**: a `radius-full` dot plus a word, never colour alone ("Nadie está esperando" with `success`). Sits above the numbers it summarises.
- **Mode tag**: `label` text, 1px `accent` outline, `radius-sm`. Example: "MODO PRUEBA".
- **Progress segments**: equal 6px bars, `accent` for done and `line` for pending, always with a text count next to them ("3 de 9 temas con datos").
- **Empty state**: a box with a `line` outline that says what will appear and what to do next. An empty figure shows "—" with an `aria-label` that says there is no data yet.

## Dashboard

- **Stat tile**: `label` on top, a `stat` figure (one per row highlighted in `accent`), one line of helper text in `small` and `ink-muted`. Say what the number means in plain words, not the metric's name.
- **Topic rail**: a list grouped under `label` headers (for example "Imprescindible" and "Para completar"). Each row is 48px with a dot for the current one and status text on the right: "Sin datos", "3 datos", or a `success` check when filled.
- **Checklist steps**: three cards in a row. The current step has an `accent` border and the one primary button; the others have a `line` border and no button.
- **Operator table**: `label` column headers, `th scope`, rows highlighted with `surface-200` on hover. A small "Operador" tag marks operator pages.

## Conversation extras

- Timestamps sit inside the bubble in mono at 11px.
- A handoff divider, centred, in `label` style: "PASADA A TU EQUIPO".
- The business bubble is always `accent-fill`; the customer bubble is `surface-200` with a `line` outline.

## Price card and chart

- **Price card** (on `bone`): "Tu precio" label with a currency toggle, the monthly figure at `display-xl` scale, "Después: price" struck through underneath, then rows. In each row a 14px square marker says who is paid: `ink-on-bone` for Solotvj and `accent-fill` for a third party such as Meta. One primary button closes the card.
- **Chart**: stacked area or bars. `chart-neutral` (outlined) for Solotvj's fixed share, `accent-fill` for the variable share, a dashed rule where the variable share starts, and an `ink` dot with a vertical line for "you are here". A sentence above the chart states the reading in words, and a legend with swatches sits below. Axis labels are `ink-subtle`.

## Legal pages

- Body in `reading`, headings in `heading-legal` with numbers, all in full `ink`.
- **"In short" callout**: `surface-100`, `accent` border, a `label` heading, at most five bullets, each linking to its section, and a line saying it does not replace the full text.
- **Table of contents**: 260px, sticky, the current section marked by an `accent` bar on the left. Below 900px it becomes a "Jump to a section" disclosure above the text.
- **Version block**: Last updated, Version and What changed, as a definition list under the title.
- **Heading anchors**: a "#" link next to each heading, visible on hover and focus, and always visible on mobile.
- **Print**: white ground, black text, no navigation or table of contents.
- The public site's header and footer stay on legal pages.
