# ChatBubble

One message in a WhatsApp conversation: from the customer, from the agent, or a system note.

**Provide:** `from` (`customer` on the left on `surface-200`, `agent` on the right on `accent-fill`, `note` centred for events like "Handed over to staff"), `children` (the message), `time`, `status` for agent messages (`pending`, `sent`, `delivered`, `read`, `failed`; each has an icon and an accessible label), optional `author` when a human replies.

- The blue bubble is always "us", the business. Don't use it for anything else in a transcript.
- Use in a `Conversation`, or alone in marketing illustrations with real, anonymised transcripts.
