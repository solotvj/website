# NavBar

The top bar of the website and product: wordmark on the left, a few text links, one action on the right.

**Provide:** `links` (`{label, href, active}`; four at most), `action` (normally one primary `Button size="sm"`), `homeHref`.

- The active link is marked with an `accent` underline and `aria-current="page"`.
- Below 640px the links hide; put them in a menu of your own if the page needs them.
- Don't add a second button; secondary destinations are links.
