---
name: Solotvj website
description: A small, senior engineering studio's public site; calm by default, loud only in Expressive mode on the marketing pages.
# Mirror only. The source of truth is design-system/tokens.css (and src/styles/loca.css for the three
# Expressive-only colours). If a value here disagrees with those files, the files win; fix this mirror.
colors:
  accent-fill: "#2f5fe8"
  accent: "#5b8cff"
  on-accent: "#ffffff"
  highlight: "#ffe14d"
  bone: "#ecebe6"
  ink-on-bone: "#0d0f12"
  ink-on-bone-muted: "#3b4048"
  paper: "#ffffff"
  surface-000: "#0a0b0d"
  surface-100: "#111317"
  surface-200: "#181b21"
  ink: "#ecebe6"
  ink-muted: "#9ba1aa"
  line: "#272b33"
typography:
  display:
    fontFamily: "Instrument Serif, Iowan Old Style, Georgia, serif"
    fontSize: "clamp(48px, 8vw, 112px)"
    fontWeight: 400
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  display-calm:
    fontFamily: "Instrument Serif, Iowan Old Style, Georgia, serif"
    fontSize: "44px"
    fontWeight: 400
    lineHeight: 1.05
  title:
    fontFamily: "Instrument Serif, Iowan Old Style, Georgia, serif"
    fontSize: "36px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: "32px"
  body:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: "28px"
  body-calm:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: "26px"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, Menlo, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: "16px"
    letterSpacing: "0.08em"
rounded:
  none: "0"
  sm: "2px"
  md: "6px"
  full: "9999px"
spacing:
  space-1: "4px"
  space-2: "8px"
  space-3: "12px"
  space-4: "16px"
  space-5: "20px"
  space-6: "24px"
  space-10: "40px"
  space-16: "64px"
  space-24: "96px"
  space-32: "128px"
components:
  button-blue:
    backgroundColor: "{colors.accent-fill}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    height: "64px"
  button-ink:
    backgroundColor: "{colors.ink-on-bone}"
    textColor: "{colors.bone}"
    rounded: "{rounded.none}"
    padding: "0 32px"
    height: "64px"
  paper-card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-on-bone}"
    rounded: "{rounded.none}"
  index-entry:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink-on-bone}"
    typography: "{typography.title}"
    padding: "20px"
  index-entry-hover:
    backgroundColor: "{colors.accent-fill}"
    textColor: "{colors.on-accent}"
  bubble-business:
    backgroundColor: "{colors.accent-fill}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
  bubble-customer:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.ink-on-bone}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Solotvj website

This file records the system as it ships on this site. It is not the rulebook. The binding source is `design-system/`: `README.md` (brand, voice, colour, type, layout), `tokens.css` (every value), `expressive.md` (the loud mode), `patterns.md` (markup not yet in the bundle), `components/*.md`. Project rules are in `CLAUDE.md`. Where this file and those disagree, they win.

## Overview

**Creative North Star: "The Studio Workbench"**

The site has two modes and never mixes them on one page. Calm mode is the brand at rest: dark surfaces, warm off-white ink, hairlines, one blue that always means something. Legal pages and anything product-like use it. Expressive mode is for the public marketing pages, and on this site that means the homepage, `/asistente`, `/precios` and `/alquileres`. It is the same brand at full voice: a bone page, black, blue and yellow bands, 2px ink edges, square corners, hard offset shadows with no blur, and Instrument Serif at poster scale with an italic punchline.

Expressive mode is loud in scale and tone, not in claims. What fills the frames is the work itself: a real example conversation, a screenshot of the rental system with demo data, a price you can calculate. Paper cards and screenshots sit on the bone as objects on a bench, tilted a degree or two and casting a hard shadow. Everything functional stays in Instrument Sans, and the mono label is kept for status words, card headers and captions.

**Key Characteristics:**
- Bone ground with full-width ink, blue and yellow bands.
- 2px ink strokes, square corners, hard offset shadows (no blur, no gradient, no glow).
- Serif headlines at 40 to 232px with one italic phrase in a contrasting colour.
- White paper cards, tilted at most 2 degrees, holding the real product.
- Several strong buttons per view are allowed; the copy stays plain.
- Everything that moves stops under `prefers-reduced-motion`.

## Colors

One blue and one yellow on bone and ink; calm pages drop the yellow and the bone ground.

### Primary
- **Working Blue** (`accent-fill`): the action colour. Primary buttons, the blue band, the business's chat bubble, the hover flood of an index row, the italic punchline on bone and yellow, the focus ring on bone.
- **Signal Blue** (`accent`): the lighter blue for links, focus and the italic punchline on the black band, where `accent-fill` would be too dark.

### Secondary
- **Highlighter Yellow** (`highlight`, Expressive only, defined in `loca.css`): a band ground, the one odd row in a card (custom software in the homepage index), the sticker, the shadow under the ink button on the blue band, the punchline on the blue band, text selection.

### Neutral
- **Bone** (`bone`): the Expressive page ground; text and outlines on the black band.
- **Ink on Bone** (`ink-on-bone`): text, every 2px stroke, the default hard shadow, the black band.
- **Muted Ink on Bone** (`ink-on-bone-muted`, defined in `loca.css`): secondary text on bone and paper.
- **Paper** (`paper`, defined in `loca.css`): cards and inputs that sit on bone.
- **Calm surfaces** (`surface-000`, `surface-100`, `surface-200`), **Ink** (`ink`), **Muted Ink** (`ink-muted`) and **Hairline** (`line`): the calm dark theme, as `design-system/README.md` describes.

### Named Rules
**The Ground Decides Rule.** Colour follows the band. On bone and yellow: ink text, ink shadow, `accent-fill` punchline. On blue: white text, yellow punchline, white focus ring. On black: bone text and outlines, `accent` punchline.

**The Three Extras Rule.** Expressive mode may use only `highlight`, `paper` and `ink-on-bone-muted` beyond `tokens.css`. A new colour is a design-system change, not a page decision.

## Typography

**Display Font:** Instrument Serif (with Iowan Old Style, Georgia), regular and italic
**Body Font:** Instrument Sans (with Helvetica Neue, Arial)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, Menlo)

**Character:** A composed book serif blown up to poster size, against a plain, slightly technical sans. The mono is the engineering accent and stays small.

### Hierarchy
- **Display** (400, `clamp(48px, 8vw, 112px)`, 0.95, -0.02em): Expressive headlines. Pages push it further where the line is the page (homepage promises up to 132px on a phone-to-tablet range and 114px beside the index card; heroes on sibling pages up to 168px; prices up to 232px). Never below 40px.
- **Title** (400 serif, 36px, 1; 30px under 640px): product names inside the homepage index card.
- **Lead** (500, 22px/32px, max 46ch): the paragraph under a band headline.
- **Body** (400, 18px/28px in Expressive, 16px/26px in Calm): running copy, max about 40 to 52ch.
- **Label** (500 mono, 13px in Expressive and 12px in Calm, 0.08em, uppercase): card headers, status words, field labels, captions.
- Calm pages use the type classes in `tokens.css` unchanged.

### Named Rules
**The Italic Punchline Rule.** A display headline carries at most one italic phrase, and it is the point of the line ("Y respondemos."). The italic takes the band's contrast colour.

## Layout

Content sits in a 1200px column with a fluid side gutter of `clamp(16px, 4vw, 32px)`. Expressive sections are full-bleed colour bands with `space-32` vertical padding on wide screens and `space-16` under 640px. Inside a band, copy and object split into two equal columns from 900px and stack below it, copy first. The homepage opening is its own grid: from 1000px the serif promises take the flexible column and the index card a 440px column on the right; below 1000px the card comes first, capped at 480px. Spacing uses only the `tokens.css` steps. Nothing scrolls sideways at 320px: rotated or offset objects stay inside the screen, and shadows step down to 6px on phones.

## Elevation & Depth

Calm mode is flat: depth comes from the three surface steps and `line` hairlines, never shadows. Expressive mode uses hard offset shadows with zero blur, so objects read as cut paper on a board. The shadow is a solid copy of the object's outline shifted down and right. Its colour follows the ground.

### Shadow Vocabulary
- **Press** (`box-shadow: 6px 6px 0`): buttons at rest; screenshots and cards on phones.
- **Lift** (`box-shadow: 8px 8px 0`): paper cards and the index card on smaller screens.
- **Pin** (`box-shadow: 12px 12px 0`): the hero object of a band (chat card, screenshot, index card on desktop).
- **Pressed** (`box-shadow: 2px 2px 0` with `translate(4px, 4px)`): a button on hover, pushed into its own shadow over 120ms.

### Named Rules
**The No Blur Rule.** Every shadow has zero blur and zero spread. A soft shadow, glow or gradient is outside this system in both modes.

## Shapes

Expressive corners are square (`radius-none`); the only round thing is the sticker (`radius-full`). Every Expressive object has a 2px `ink-on-bone` stroke, and stacked rows inside a card are split by the same stroke. Calm mode keeps the nearly square `radius-sm` and `radius-md`. Tilts are small and fixed: paper cards and screenshots at 1 to 2 degrees, the sticker at 12 degrees.

**The Two Degrees Rule.** Only objects tilt (a paper card, a screenshot, the sticker), never text columns or bands, and nothing but the sticker passes 2 degrees.

## Components

### Buttons
- **Shape:** square, 2px ink stroke, 64px tall, 32px side padding, 20px/26px sans at 600.
- **Blue:** `accent-fill` with white text and the Press shadow in ink.
- **Ink:** `ink-on-bone` with bone text and a blue Press shadow; on the blue band its shadow turns yellow.
- **On black:** outline and shadow turn bone.
- **Hover / Focus:** the button moves 4px into its shadow, which shrinks to 2px (120ms; off under reduced motion). Focus is a 3px `accent-fill` outline with 3px offset on bone, white on the blue band.
- **Text link beside a button:** 600 sans, underlined at a 4px offset, at least 44px to tap.

### Cards / Containers
- **Corner Style:** square.
- **Background:** `paper` on bone; `highlight` for the one card or row that is not a standard product.
- **Shadow Strategy:** Lift or Pin, in ink.
- **Border:** 2px ink.
- **Internal Padding:** `space-5` to `space-6`.

### Navigation
- **Header:** a 72px bar on bone with a 2px ink bottom stroke. The wordmark at 36px (44px target), then text links in 15px sans, underlined, and one ink contact pill. The price link stays on phones.

### Index card (signature)
A white paper card, tilted 1.5 degrees on desktop (1 degree below), with a black mono header and numbered rows split by 2px ink strokes. Each row is a link: mono number, serif product name, drawn arrow in `accent-fill`, one sans line beneath. On hover and focus the whole row floods `accent-fill`, its text turns white and the arrow slides 6px right (250ms ease-out; off under reduced motion). One row may sit on yellow.

### Example conversation (signature)
A paper card tilted 2 degrees with the Pin shadow: a mono header with the title and a black time chip, then square bubbles with a 2px stroke. The customer bubble is bone, the business bubble `accent-fill` with white text. A centred mono caption says it is an example.

### Product screenshot
A real screen with demo data, framed by a 2px ink stroke, tilted 1.5 degrees with the Pin shadow (Press on phones), with a plain caption beneath saying what it shows. Phones get their own crop rather than a scaled-down desktop.

## Do's and Don'ts

### Do:
- **Do** take every value from `design-system/tokens.css`, plus only `highlight`, `paper` and `ink-on-bone-muted` from `src/styles/loca.css`.
- **Do** reuse the `.loca-*` classes (wrap, header, display, label, button variants, sticker) before writing page CSS.
- **Do** let the ground set text, shadow and punchline colours (The Ground Decides Rule).
- **Do** fill frames with the real product: example conversations, screenshots with demo data, the calculator.
- **Do** keep the mono label to card headers, status words, field labels and captions.
- **Do** stop every hover lift, ticker and slide under `prefers-reduced-motion`, and check 320px for sideways scroll.

### Don't:
- **Don't** mix Calm and Expressive on one page; legal and product screens stay Calm.
- **Don't** use gradients, glows, blurred shadows or rounded corners in Expressive mode.
- **Don't** tilt anything past 2 degrees except the sticker, or tilt text and bands.
- **Don't** put more than one italic phrase in a headline.
- **Don't** invent numbers, logos, testimonials or customers to fill a frame.
