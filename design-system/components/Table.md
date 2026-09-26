# Table

Rows of records in the product: conversations, numbers, deployments, invoices.

**Provide:** `columns` (`{key, label, align, mono, render}`), `rows` (objects keyed by column), optional `caption`.

- Right-align numbers; set IDs, phone numbers and times in `mono`.
- Put status in a `Badge` via `render`.
- Header labels are short nouns; the table scrolls sideways on narrow screens instead of squashing.
