import { useState } from "react";

import { useLanguage } from "../i18n/LanguageContext.tsx";
import Breadcrumb from "../components/Breadcrumb.tsx";
import { skills, icons, type Tab } from "../types/AboutMe.ts";

/* Dados do Card */
const PHOTO = "/ImageIcons/eu.png";

const NAME = "João Paulo Pinheiro";

const edge =
  "absolute top-1/2 hidden h-[2.8rem] w-0.5 -translate-y-1/2 bg-cool min-[1100px]:block";

const tabButton =
  "-mb-px cursor-pointer border-b-2 border-transparent bg-transparent py-[0.7rem] text-[0.78rem] font-semibold tracking-[0.06em] text-secondary/45 uppercase transition-colors duration-150 hover:text-secondary aria-pressed:border-b-secondary aria-pressed:text-secondary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary";

export default function AboutMe() {
  const [tab, setTab] = useState<Tab>("icons");
  const { t, lang } = useLanguage();

  const average = Math.round(
    skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length,
  );

  return (
    <div className="flex flex-1 flex-col bg-main font-sans text-fg transition-colors duration-250">
      <main className="flex flex-1 flex-col px-[clamp(1rem,3vw,2.5rem)] pt-4 pb-6">
        <Breadcrumb current={t.nav.about} />

        <div className="relative m-auto w-[min(100%,1180px)]">
          <span className={`${edge} left-0`} aria-hidden="true" />
          <span className={`${edge} right-0`} aria-hidden="true" />

          <section
            className="cut-panel grid grid-cols-1 home:min-h-148 home:grid-cols-[52fr_48fr] min-[1100px]:mx-auto min-[1100px]:w-[80%]"
            aria-labelledby="ab-name"
          >
            <div className="relative m-px min-h-68 overflow-hidden bg-secondary/10 home:m-[1px_0_1px_1px] home:min-h-0 dark:bg-transparent dark:bg-[linear-gradient(160deg,rgba(25,211,218,0.12),transparent_55%)]">
              <img
                className="pointer-events-none absolute inset-0 size-full origin-bottom scale-100 object-cover object-center select-none home:scale-135"
                src={PHOTO}
                alt={`${t.about.photoAlt} ${NAME}`}
              />
            </div>

            <div className="relative z-1 flex flex-col border-t border-secondary home:border-t-0 home:border-l">
              <header className="px-11 pt-[1.1rem] pb-4 text-center home:pt-6 home:pb-[1.1rem]">
                <span className="text-[0.75rem] font-semibold tracking-widest text-cool uppercase">
                  {t.about.nameLabel}
                </span>
                <h1
                  id="ab-name"
                  className="mt-[0.15rem] mb-2 text-[clamp(1.8rem,7vw,2.4rem)] leading-[1.1] font-medium tracking-[0.02em] text-hot uppercase home:text-[clamp(1.8rem,3.4vw,2.7rem)]"
                >
                  {NAME}
                </h1>
                <p className="m-0 text-[1rem] leading-[1.45] home:text-[clamp(0.72rem,0.95vw,0.85rem)]">
                  {t.about.description}
                </p>
              </header>

              <div className="flex gap-7 border-b border-secondary px-5 home:px-6">
                <button
                  type="button"
                  className={tabButton}
                  aria-pressed={tab === "icons"}
                  onClick={() => setTab("icons")}
                >
                  {t.about.tools}
                </button>
                <button
                  type="button"
                  className={tabButton}
                  aria-pressed={tab === "skills"}
                  onClick={() => setTab("skills")}
                >
                  {t.about.skills}
                </button>
              </div>

              <div className="grid flex-1">
                {/* Ferramentas */}
                <ul
                  className={`col-start-1 row-start-1 m-0 grid list-none content-start grid-cols-[repeat(auto-fill,minmax(5.6rem,1fr))] gap-x-3 gap-y-[1.4rem] p-5 home:p-6 home:pr-8 home:pb-10 ${
                    tab === "icons" ? "" : "invisible"
                  }`}
                >
                  {icons.map(({ name, Icon, color }) => (
                    <li
                      key={name}
                      className="grid justify-items-center gap-2 text-center text-[color-mix(in_srgb,var(--c)_55%,#000)] dark:text-(--c)"
                      style={{ "--c": color } as React.CSSProperties}
                    >
                      <Icon size={38} strokeWidth={1.5} aria-hidden="true" />
                      <span className="text-[0.72rem] font-semibold tracking-widest uppercase">
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Habilidades */}
                <div
                  className={`col-start-1 row-start-1 grid grid-cols-[1fr_auto] ${
                    tab === "skills" ? "" : "invisible"
                  }`}
                >
                  <ul className="m-0 grid list-none content-start gap-[1.4rem] p-5 home:p-6">
                    {skills.map(({ name, level, note }) => (
                      <li key={name.pt}>
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="text-[0.72rem] font-bold tracking-[0.08em] text-hot uppercase">
                            {name[lang]}
                          </span>
                          {note && (
                            <span className="text-[0.7rem] tracking-[0.06em] text-cool uppercase">
                              {note[lang]}
                            </span>
                          )}
                        </div>
                        <div className="mt-[0.35rem] flex items-center gap-[0.8rem]">
                          <span
                            className="relative block h-[0.32rem] flex-1 bg-line"
                            role="progressbar"
                            aria-label={name[lang]}
                            aria-valuenow={level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          >
                            {tab === "skills" && (
                              <span
                                className="absolute inset-y-0 left-0 animate-bar-fill bg-hot motion-reduce:animate-none"
                                style={{ width: `${level}%` }}
                              />
                            )}
                          </span>
                          <span className="text-[0.75rem] whitespace-nowrap text-secondary">
                            <b className="font-semibold text-hot">{level}</b> /
                            100
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* losango com a média */}
                  <div className="grid min-w-30 content-center justify-items-center gap-[0.9rem] border-l border-secondary px-5 py-4">
                    <span className="grid size-[3.4rem] rotate-45 place-items-center border-[1.5px] border-secondary">
                      <b className="-rotate-45 text-[1.3rem] font-semibold text-secondary">
                        {average}
                      </b>
                    </span>
                    <span className="text-[0.7rem] font-semibold tracking-widest text-secondary uppercase">
                      {t.about.average}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
