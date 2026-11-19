import type { Lang } from "./translations.ts";

/* texto que existe nos dois idiomas: { pt: "...", en: "..." } */
export type Localized = Record<Lang, string>;

/* mesmo texto nos dois idiomas (nomes próprios, marcas, tecnologias) */
export const same = (text: string): Localized => ({ pt: text, en: text });
