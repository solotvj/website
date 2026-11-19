# Expressive mode

A second mode for the public marketing pages only (home and pricing). A visitor decides in seconds, so these pages may be loud. Dashboards, product screens and legal pages stay calm. The two modes never mix on one page.

## What it changes

- **Ground**: a `bone` page, with full-width bands in `ink-on-bone` black, `accent-fill` blue or `highlight` yellow. Text on bone is `ink-on-bone`; on black it is `ink`; on blue it is `on-accent`.
- **Edges**: 2px `ink-on-bone` borders, `radius-none`, and the hard shadows `shadow-hard-sm`, `shadow-hard-md` and `shadow-hard-lg`. On a black ground the shadow colour becomes bone or `accent-fill`.
- **Type**: `display-mega` for headlines, `display-mega-italic` for one phrase, `display-price` for the price, `lead` for the intro, 18px for body. Everything functional is still Barlow and `label`.
- **Space**: `space-24` and `space-32` for section padding.

## Components

- **Ticker**: a black band with a mono label scrolling at 40 seconds a loop, hidden from assistive tech.
- **Sticker**: a round `radius-full` badge on `highlight` or `accent-fill`, rotated 12°, one per screen, decoration only.
- **Tilted card**: a card rotated by up to 2° with `shadow-hard-md`. On hover it lifts 6px and turns 1°.
- **Primary button**: 64px tall with `shadow-hard-sm`; pressed it moves 4px toward the shadow (120ms).
- **Chunky preset button**: 96px tall, the number in a serif at 56px, selected is `accent-fill` with `shadow-hard-sm`.
- **Interactive demo**: one live interaction per page that shows real behaviour (for example an hour slider showing what the owner is doing while the assistant answers). It must mean something, not just move.

## Limits

- The hype lives in scale and tone, not in claims. No invented numbers, no fake logos, no testimonials, no hype words. Every claim is one the product can back up.
- Plain, factual body copy, same voice as the rest of the brand.
- Reduced motion turns off the ticker, the hover lift and the button movement.
