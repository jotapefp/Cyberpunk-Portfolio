import { Fragment } from "react";
import { Link } from "react-router-dom";

/* Idioma */
import { useLanguage } from "../i18n/LanguageContext.tsx";

/* Components */
import InfoProject from "../components/InfoProject.tsx";

const stack = ["React", "TS", "JS", "CSS", "HTML"];

/* afastamento da moldura: 12px no mobile, cresce a partir de 900px */
const inset =
  "inset-3 home:inset-x-[clamp(12px,2vw,32px)] home:inset-y-[clamp(12px,2.2vh,24px)]";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[max(100dvh,620px)] overflow-hidden bg-main text-secondary transition-colors duration-250">
      {/* camadas: linhas < moldura < personagem < conteúdo */}
      <span
        className="absolute inset-x-0 top-[32%] z-0 h-px bg-fg/12 dark:bg-fg/7"
        aria-hidden="true"
      />
      <span
        className="absolute inset-x-0 top-[67.8%] z-0 h-px bg-fg/12 dark:bg-fg/7"
        aria-hidden="true"
      />
      <div
        className={`absolute z-1 border border-line bg-main transition-colors duration-250 ${inset}`}
        aria-hidden="true"
      />

      <div className={`absolute z-3 grid grid-rows-1 ${inset}`}>
        <div className="relative flex h-full flex-col px-4 pt-[clamp(1.5rem,8dvh,3rem)] pb-5 home:grid home:grid-cols-[minmax(0,31%)_minmax(0,1fr)_minmax(0,22%)] home:px-[4.5%] home:pt-[clamp(2rem,11dvh,7rem)] home:pb-[clamp(1.5rem,7dvh,4.5rem)]">
          <img
            className="pointer-events-none absolute right-0 bottom-0 z-0 h-[min(55%,100vw)] w-auto select-none home:right-auto home:left-[51%] home:h-[min(100%,56vw)] home:-translate-x-1/2"
            src="/ImageIcons/jp.png"
            alt=""
            decoding="async"
          />

          <div className="relative z-1 flex flex-col items-start home:col-start-1">
            <h1 className="font-title m-0 text-[clamp(2.2rem,12vw,3.6rem)] leading-[1.12] font-medium tracking-[0.015em] uppercase home:text-[clamp(2.1rem,3.9vw,4.8rem)] home:whitespace-nowrap">
              {t.home.titleLines.map((line, i) => (
                <Fragment key={line}>
                  {i > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </h1>

            <span
              className="mt-[1.1rem] mb-4 block h-0.5 w-[2.4rem] bg-secondary"
              aria-hidden="true"
            />

            <p className="m-0 max-w-72 text-[0.9rem] leading-[1.35] font-semibold tracking-[0.03em] uppercase home:max-w-88home:text-[clamp(0.72rem,0.85vw,0.95rem)]">
              {t.home.description}
            </p>

            <Link
              to="/Projects"
              className="mt-[1.4rem] bg-cta px-[2.1rem] py-[0.85rem] text-[0.85rem] font-bold tracking-wider text-white uppercase no-underline transition-colors duration-150 [clip-path:polygon(0_0,93%_0,100%_30%,100%_100%,0_100%)] hover:bg-secondary hover:text-main focus-visible:bg-secondary focus-visible:text-main focus-visible:outline-none"
            >
              {t.home.cta}
            </Link>

            <ul
              className="mt-auto flex list-none flex-wrap gap-[clamp(0.4rem,0.8vw,0.7rem)] p-0 pt-6 home:pt-0"
              aria-label={t.home.stackLabel}
            >
              {stack.map((tech) => (
                <li
                  key={tech}
                  className="cut-box aspect-square w-[clamp(2.3rem,3.3vw,2.9rem)] text-[0.58rem] font-bold tracking-[0.03em] uppercase"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-1 hidden home:col-start-3 home:flex home:flex-col home:items-end">
            <InfoProject />
          </div>
        </div>
      </div>
    </section>
  );
}
