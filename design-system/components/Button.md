# Button

Triggers an action or navigates to the next step.

**Provide:** `children` (the label, a verb in sentence case), `variant`, `size`, and `href` to render a link that looks like a button. `iconRight` adds a forward arrow for "go somewhere" actions.

- `primary` (`accent-fill`): the single most important action in view. One per view.
- `secondary` (outlined in `border-control`): alternative actions next to a primary.
- `quiet`: low-emphasis actions in toolbars, tables and cards.
- `size="sm"` for navigation, tables and dense UI; `md` everywhere else.
- Labels say what happens: "Book a call", "Connect WhatsApp number", not "Submit" or "Click here".
