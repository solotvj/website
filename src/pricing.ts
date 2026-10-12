// Our prices and Meta's, in US$. The homepage and the calculator (src/pages/calculadora.astro) both read them from here.
export const pricing = {
  setup: 150, // once
  intro: 60, // per month during the first months
  introMonths: 3,
  fee: 120, // per month after that
  metaRate: 0.026, // Meta, per reply after the free ones (Argentina, from 1 October 2026; confirm on the first bill)
  free: 1000, // replies free per number per month
};
