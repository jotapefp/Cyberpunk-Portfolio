import type { Lang } from "./translations.ts";

export type Localized = Record<Lang, string>;

export const same = (text: string): Localized => ({ pt: text, en: text });
