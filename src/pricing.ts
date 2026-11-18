// Our prices and Meta's, in US$. The homepage, the assistant's page and the calculator (src/pages/precios.astro) read them from here.
export const pricing = {
  setup: 150, // once
  fee: 99, // per month
  metaRate: 0.026, // Meta, per reply after the free ones (Argentina, from 1 October 2026; confirm on the first bill)
  free: 1000, // replies free per number per month
};

// The rental system: one monthly fee, in US$.
export const rentals = {
  fee: 39,
};
