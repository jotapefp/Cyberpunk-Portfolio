import { useLanguage } from "../i18n/LanguageContext.tsx";

const button =
  "mr-[0.6rem] inline-flex cursor-pointer items-center gap-[0.45em] border-0 bg-transparent px-[0.1rem] py-[0.3rem] " +
  "text-[0.9rem] font-bold tracking-[0.06em] text-secondary " +
  "focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary";

/* triângulo ao lado do código */
const arrow =
  "h-0 w-0 border-y-[0.26em] border-l-[0.38em] border-y-transparent border-l-current opacity-60";

export default function LanguageSelect() {
  const { t, toggleLang } = useLanguage();

  return (
    <button
      type="button"
      className={button}
      aria-label={t.lang.switchTo}
      title={t.lang.switchTo}
      onClick={toggleLang}
    >
      <span>{t.lang.code}</span>
      <span className={arrow} aria-hidden="true" />
    </button>
  );
}
