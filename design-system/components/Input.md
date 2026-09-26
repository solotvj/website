# Input

A labelled text field, single-line or multi-line, with hint and error text.

**Provide:** `label` (always; a short noun), `hint` for format help, `error` to show a validation message (it replaces the hint and sets `aria-invalid`), `multiline` for a textarea, plus any native input attribute (`placeholder`, `type`, `value`, `onChange`).

- Placeholders show an example, never the label.
- Error messages say how to fix it: "Enter a number with country code, like +54 9 2901 123456".
- Borders use `border-control` so they hold 3:1; focus turns them `accent` with the ring.
