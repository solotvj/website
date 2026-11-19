Solotvj designs, builds and operates software, today mostly WhatsApp agents for businesses. The brand should feel like a small, senior engineering studio: precise, calm and accountable. Mostly black, a warm off-white, and one blue that is used sparingly and always means something.

## Principles

- Quiet by default. Dark surfaces and ink carry the page; `accent` is the only colour that asks for attention.
- One blue, one job. Use `accent` for the next action, the active state or the single number that matters, never as decoration.
- Whitespace is confidence. Separate sections with `space-16`; don't fill space to look busy.
- Show the work, not the person. Lead with outcomes, architecture and uptime, not with a founder story.
- Calm everywhere, expressive only on the public site. Dashboards, product screens and legal pages are always calm. The marketing pages (home, pricing) may use Expressive mode (see the Expressive mode section). The two never mix on one page.

## Voice and content

- Write as **we** and address the reader as **you**. "We deploy your agent within two weeks", never "I". Sign emails and proposals as "The Solotvj team" or with a role ("Engineering, Solotvj").
- Plain, specific and unhurried. Prefer "Replies in under 3 seconds, 24/7" to "Blazing-fast AI magic". No exclamation marks, no emoji, no hype words (revolutionary, cutting-edge, seamless).
- Sentence case for headings and buttons ("Book a call", "View the architecture"). Uppercase only in `label`.
- Write the name as **Solotvj**: capital S, the rest lowercase, in running text and in the wordmark.
- Describe capacity by process, not headcount: "our engineering process", "your delivery lead", "our support rotation".
- In Argentine Spanish write in voseo: *vos*, *contanos*, *escribinos*, *calculá tu precio*. Same plain tone, sentence case, no exclamation marks.
- Fixed customer-facing terms: *conversación* (each customer who writes; if they come back another day it counts again), *pasada a tu equipo* (the assistant hands the chat to a person), *modo prueba* (the assistant prepares replies but sends none).

## Colour

- Dark is the primary theme. Set pages on `surface-000`, cards on `surface-100`, and inset areas on `surface-200`, all with `ink` for text and `ink-muted` for secondary text.
- Use `bone` with `ink-on-bone` for one contrasting band per page (a quote, a pricing block, a case study), never for whole pages in the dark theme. On bone use `ink-muted-on-bone` for secondary text, `line-on-bone` for dividers and `accent-on-bone` for blue.
- Primary buttons: `accent-fill` with `on-accent`; hover is `accent-fill-hover`. Links and focus: `accent`; link hover is `link-hover`. One primary action per view: the same primary button may repeat (a hero and a closing call to action), but never two different primary actions.
- `success` and `danger` are for system status (message delivered, channel disconnected). Always pair them with a word or icon.
- Separate with `line` hairlines rather than shadows; controls use `border-control` so their edges hold 3:1. Only Expressive mode uses shadows (hard offset ones).
- In a chart, the non-accent series uses `chart-neutral` with a 1px `border-control` outline; the accent series uses `accent-fill`. `highlight` belongs to Expressive mode only.

## Type

- Headlines in `display-xl` and `display` (Barlow Condensed, bold) give the brand its voice; use them for hero lines, section openers and slide titles only.
- Everything functional is Barlow: `heading`, `subheading`, `body`, `small`. Dashboard figures use `stat` and `stat-sm`.
- Long reading (privacy policy, terms) uses `reading` and `heading-legal`, in `ink`, never `ink-muted`.
- JetBrains Mono for `label` (eyebrows, tags, dates, set uppercase) and `code`. The mono touch signals engineering; keep it to small sizes.
- All three families are served from Google Fonts: `Barlow Condensed` 600 (roman and italic; display rules ask for 400 and get the 600), `Barlow` 400 to 600, `JetBrains Mono` 400 to 500.

## Shape and layout

- Corners are nearly square: `radius-sm` for inputs and tags, `radius-md` for buttons and cards. `radius-full` only for status dots and avatars (and the round sticker in Expressive mode).
- Spacing steps: `space-1`, `space-2`, `space-3`, `space-4`, `space-5`, `space-6`, `space-10`, `space-16`. Nothing in between. Expressive mode adds `space-24` and `space-32` for large sections.
- No gradients, glows or glassmorphism. Flat surfaces, hairlines and a single blue.

## Logo and imagery

- There is no logo mark yet. Set the wordmark as "Solotvj" in `display` or `display-xl`, `ink` on dark or `ink-on-bone` on bone; add a small `accent` full stop after it ("Solotvj.") when a signature mark is needed.
- A compact mark for small sizes (favicon, avatar) is still to be drawn; the candidates are "tvj." and "S." in the same serif with the blue full stop.
- Prefer diagrams, interface screenshots and conversation transcripts over photography. Avoid stock photos of people and team shots.

## Components

- Build screens from the `Solotvj` components (React 18): `Wordmark`, `NavBar`, `SectionHeader`, `Button`, `Input`, `Badge`, `Alert`, `Card`, `Stat`, `Table`, `CodeBlock`, `ChatBubble`, `Conversation`.
- `ChatBubble` and `Conversation` are the brand's signature: show real, anonymised transcripts instead of stock imagery. The blue `agent` bubble always means the business speaking.
- One primary `Button` action per view; one `bone` `Card` per page; one highlighted `Stat` per row.
- Patterns that are not components yet (toggles, accordion, price card, legal page layout and more) are described in the Patterns section.
- Icons are simple 1.5px-stroke line icons drawn inline in the components; there is no icon set yet.

## Accessibility

- Every text token reads at 4.5:1 or better on all three surfaces in both themes; `ink-subtle` is for labels and metadata, not sentences.
- Focus ring: a solid 2px `accent` outline with 2px offset, on every interactive element.
- Status never relies on colour alone: `success` and `danger` always carry a word or icon.
- Touch targets are at least 44px; primary buttons 48px.
- A non-text fill (a chart series) reaches 3:1 against its surface, or carries an outline that does.
- Every animation stops under `prefers-reduced-motion`.
