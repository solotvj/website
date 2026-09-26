# Alert

An inline message about the state of the system or of what the person just did.

**Provide:** `tone` (`info`, `success`, `danger`), `title` (what happened, one line), `children` (what it means or what to do), `action` (an optional small button).

- Each tone has its own icon, so meaning never rests on colour.
- `danger` announces itself to screen readers (`role="alert"`); use it only for things that need action now.
- Write calmly and specifically: "The WhatsApp number was disconnected at 14:02. Reconnect it to resume replies."
