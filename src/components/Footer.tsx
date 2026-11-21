import { useLanguage } from "../i18n/LanguageContext.tsx";

const wrapper = "relative flow-root bg-main";

const footer =
  "font-navbar mx-3 mb-3 flex items-center justify-center border-t border-line px-[0.85rem] pt-[calc(0.55rem+12px)] pb-[0.55rem] text-secondary transition-colors duration-250 " +
  "home:mx-[clamp(12px,2vw,32px)] home:mb-[clamp(12px,2.2vh,24px)] " +
  "xl:px-[1.1rem] xl:pb-[0.7rem]";

const text =
  "px-2 py-[0.3rem] text-center text-sm font-normal tracking-[0.06em] text-secondary uppercase xl:py-[0.2rem] xl:text-[clamp(0.8rem,0.9vw,1rem)]";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <div className={wrapper}>
      <footer className={footer}>
        <p className={text}>
          {t.footer.credit}
          <br className="home:hidden" /> &copy; 2026
        </p>
      </footer>
    </div>
  );
}
