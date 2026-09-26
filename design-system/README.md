Solotvj designs, builds and operates software, today mostly WhatsApp agents for businesses. The brand should feel like a small, senior engineering studio: precise, calm and accountable. Mostly black, a warm off-white, and one blue that is used sparingly and always means something.

## Principles

- Quiet by default. Dark surfaces and ink carry the page; `accent` is the only colour that asks for attention.
- One blue, one job. Use `accent` for the next action, the active state or the single number that matters, never as decoration.
- Whitespace is confidence. Separate sections with `space-16`; don't fill space to look busy.
- Show the work, not the person. Lead with outcomes, architecture and uptime, not with a founder story.

## Voice and content

- Write as **we** and address the reader as **you**. "We deploy your agent within two weeks", never "I". Sign emails and proposals as "The Solotvj team" or with a role ("Engineering, Solotvj").
- Plain, specific and unhurried. Prefer "Replies in under 3 seconds, 24/7" to "Blazing-fast AI magic". No exclamation marks, no emoji, no hype words (revolutionary, cutting-edge, seamless).
- Sentence case for headings and buttons ("Book a call", "View the architecture"). Uppercase only in `label`.
- Write the name as **Solotvj**: capital S, the rest lowercase, in running text and in the wordmark.
- Describe capacity by process, not headcount: "our engineering process", "your delivery lead", "our support rotation".

## Colour

- Dark is the primary theme. Set pages on `surface-000`, cards on `surface-100`, and inset areas on `surface-200`, all with `ink` for text and `ink-muted` for secondary text.
- Use `bone` with `ink-on-bone` for one contrasting band per page (a quote, a pricing block, a case study), never for whole pages in the dark theme.
- Primary buttons: `accent-fill` with `on-accent`. Links and focus: `accent`. Only one primary button per view.
- `success` and `danger` are for system status (message delivered, channel disconnected). Always pair them with a word or icon.
- Separate with `line` hairlines rather than shadows; controls use `border-control` so their edges hold 3:1.

## Type

- Headlines in `display-xl` and `display` (Instrument Serif) give the brand its composure; use them for hero lines, section openers and slide titles only.
- Everything functional is Instrument Sans: `heading`, `subheading`, `body`, `small`.
- JetBrains Mono for `label` (eyebrows, tags, dates, set uppercase) and `code`. The mono touch signals engineering; keep it to small sizes.
- All three families are served from Google Fonts: `Instrument Serif` 400, `Instrument Sans` 400 to 600, `JetBrains Mono` 400 to 500.

## Shape and layout

- Corners are nearly square: `radius-sm` for inputs and tags, `radius-md` for buttons and cards. `radius-full` only for status dots and avatars.
- Spacing steps: `space-1`, `space-2`, `space-4`, `space-6`, `space-10`, `space-16`. Nothing in between.
- No gradients, glows or glassmorphism. Flat surfaces, hairlines and a single blue.

## Logo and imagery

- There is no logo mark yet. Set the wordmark as "Solotvj" in `display` or `display-xl`, `ink` on dark or `ink-on-bone` on bone; add a small `accent` full stop after it ("Solotvj.") when a signature mark is needed.
- Prefer diagrams, interface screenshots and conversation transcripts over photography. Avoid stock photos of people and team shots.

## Components

- Build screens from the `Solotvj` components (React 18): `Wordmark`, `NavBar`, `SectionHeader`, `Button`, `Input`, `Badge`, `Alert`, `Card`, `Stat`, `Table`, `CodeBlock`, `ChatBubble`, `Conversation`.
- `ChatBubble` and `Conversation` are the brand's signature: show real, anonymised transcripts instead of stock imagery. The blue `agent` bubble always means the business speaking.
- One primary `Button` per view; one `bone` `Card` per page; one highlighted `Stat` per row.
- Icons are simple 1.5px-stroke line icons drawn inline in the components; there is no icon set yet.

## Accessibility

- Every text token reads at 4.5:1 or better on all three surfaces in both themes; `ink-subtle` is for labels and metadata, not sentences.
- Focus ring: a solid 2px `accent` outline with 2px offset, on every interactive element.
- Status never relies on colour alone: `success` and `danger` always carry a word or icon.
