# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Owners of small businesses in Argentina, usually reading on a phone, who have a concrete problem: messages they cannot answer at all hours, or a rental shop run on paper and spreadsheets. On the site they should recognise their problem, choose the product that solves it, and write to Solotvj on WhatsApp. A second, smaller audience is a business that wants software built to order.

## Product Purpose

The public website of Solotvj, a small studio that designs, builds and operates software. It presents what Solotvj sells and turns a visitor into a WhatsApp conversation. Success is a business owner writing to Solotvj about one of the products.

## Positioning

Solotvj builds and operates its own products, so what a visitor sees working is what they get. Today it sells two products and takes custom work:

- the WhatsApp assistant, which answers a business's usual questions at any hour and hands the chat to a person when needed;
- the rental system, for rental shops in Argentina: a booking site, stock, payments with Mercado Pago and invoices through ARCA;
- software built to order for a client.

## Operating Context

- Static Astro site at solotvj.com.ar, deployed to GitHub Pages on every push to `main`.
- Spanish (Argentine voseo) is the default language; English mirrors the homepage. `/precios` and `/alquileres` are Spanish only.
- The contact channel is WhatsApp, with email as the alternative. There is no sign-up on the site.
- The homepage becomes the studio's page; the WhatsApp assistant's current homepage moves whole to `/asistente` (decided 2026-11-16).

## Capabilities and Constraints

- The assistant's pricing and its calculator live at `/precios`; prices are in US dollars.
- The rental system has no public sign-up address and no published price yet.
- Upcoming for the rental system, not available today: the WhatsApp assistant taking bookings, and an MCP connector.
- Legal pages (privacy, terms, data processing, cancellation) must keep working and keep the site's header and footer.

## Brand Commitments

- The name is written **Solotvj**; the wordmark is the name in Instrument Serif with a blue full stop. There is no logo mark yet.
- The Solotvj design system (`design-system/`) is binding: its tokens, its voice (we and you, sentence case, no emoji, no exclamation marks, no hype words) and its two modes. Marketing pages may use Expressive mode; legal pages stay calm.
- Fixed customer-facing terms: *conversación*, *pasada a tu equipo*, *modo prueba*.

## Evidence on Hand

- The products themselves: the assistant's example conversation and hour slider on the current homepage, the rental system's demo video and poster (`public/alquileres/`), and screens of both.
- How Solotvj works: it builds and operates what it sells, prices are published, and a person takes over a chat when needed.
- There are no customer names, logos, testimonials or usage figures to show. Future work must not invent any.

## Product Principles

- Show the product working instead of describing it.
- One next step everywhere: write to us on WhatsApp.
- Claim only what a product does today; mark what is coming as coming.
- A visitor with one problem should find their product in one screen.
