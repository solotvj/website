import es from './es';
import en from './en';

// Spanish is the reference dictionary: every other language must define the same keys.
export type Dict = Record<keyof typeof es, string>;

export const ui = { es, en } satisfies Record<string, Dict>;
export type Lang = keyof typeof ui;
export const defaultLang: Lang = 'es';
export const langs = Object.keys(ui) as Lang[];

// Legal details for business verification (Meta). Same text in every language, so not translated.
export const legal = {
  brand: 'Solotvj',
  note: 'Solotvj es un servicio comercializado por Tomás Villanueva Jousset',
  noteLang: 'es-AR',
  email: 'ventas@solotvj.com.ar',
  address: 'Comandante Luis Piedrabuena 318, Argentina',
};

export function getLangFromUrl(url: URL): Lang {
  const [first] = url.pathname.slice(import.meta.env.BASE_URL.length).split('/').filter(Boolean);
  return first && first in ui ? (first as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: keyof Dict) => ui[lang][key];
}
