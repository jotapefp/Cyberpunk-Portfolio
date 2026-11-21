import { useState } from "react";
import { ArrowDown, ArrowUp, Award } from "lucide-react";

/* Idioma */
import { useLanguage } from "../i18n/LanguageContext.tsx";

/* Components */
import Breadcrumb from "../components/Breadcrumb.tsx";
import CardHead from "../components/CardHead.tsx";
import CardThumb from "../components/CardThumb.tsx";
import TabButton from "../components/TabButton.tsx";
import TypeSelect from "../components/TypeSelect.tsx";
import {
  courses,
  courseTypes,
  type CourseType,
} from "../types/Certificates.ts";

/* valor interno da aba "todos" (o texto mostrado vem do dicionário) */
const ALL = "__all__" as const;
type Tab = typeof ALL | CourseType;
const tabs: Tab[] = [ALL, ...Array.from(new Set(courses.map((c) => c.type)))];

const pad = (n: number) => String(n).padStart(2, "0");

type Order = "newest" | "oldest";

const dateKey = (date?: string) => {
  if (!date) return null;
  const parts = date.split("/").map(Number);
  const year = parts[parts.length - 1];
  const month = parts.length >= 2 ? parts[parts.length - 2] : 0;
  if (!year) return null;
  return year * 100 + (month || 0);
};

export default function Certificates() {
  const { t, lang } = useLanguage();
  const [tab, setTab] = useState<Tab>(ALL);
  const [order, setOrder] = useState<Order>("newest");

  const visible = tab === ALL ? courses : courses.filter((c) => c.type === tab);

  const sorted = [...visible].sort((a, b) => {
    const ka = dateKey(a.date);
    const kb = dateKey(b.date);
    if (ka === null && kb === null) return 0;
    if (ka === null) return 1;
    if (kb === null) return -1;
    return order === "newest" ? kb - ka : ka - kb;
  });

  return (
    <div className="flex flex-1 flex-col bg-main font-sans text-fg transition-colors duration-250">
      <main className="flex flex-1 flex-col px-[clamp(1rem,3vw,2.5rem)] pt-4 pb-10">
        <div className="flex items-baseline justify-between gap-4 text-[clamp(0.8rem,0.9vw,1rem)] font-semibold tracking-[0.08em] uppercase">
          <Breadcrumb current={t.nav.certificates} />
          <span
            aria-label={t.certificates.counter(visible.length, courses.length)}
          >
            {pad(visible.length)} / {pad(courses.length)}
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-x-8 border-b border-line max-[699px]:pb-3">
          {/* celular: um botão que abre a lista de tipos */}
          <TypeSelect
            className="min-[700px]:hidden"
            ariaLabel={t.certificates.typeLabel}
            value={tab}
            onChange={setTab}
            options={tabs.map((name) => ({
              value: name,
              label: name === ALL ? t.common.all : courseTypes[name][lang],
            }))}
          />

          {/* telas maiores: abas com todos os tipos */}
          <div className="hidden min-[700px]:contents">
            {tabs.map((name) => (
              <TabButton
                key={name}
                pressed={tab === name}
                onClick={() => setTab(name)}
              >
                {name === ALL ? t.common.all : courseTypes[name][lang]}
              </TabButton>
            ))}
          </div>

          {/* ordem por data, no canto direito da linha das abas */}
          <button
            type="button"
            className="ml-auto inline-flex cursor-pointer items-center gap-[0.45rem] self-center border border-line bg-transparent px-[0.8rem] py-[0.4rem] text-[clamp(0.72rem,0.8vw,0.9rem)] font-semibold tracking-[0.06em] text-secondary uppercase transition-colors duration-150 hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary"
            aria-label={t.certificates.sortLabel(order === "newest")}
            onClick={() =>
              setOrder((current) =>
                current === "newest" ? "oldest" : "newest",
              )
            }
          >
            {order === "newest" ? t.certificates.newest : t.certificates.oldest}
            {order === "newest" ? (
              <ArrowDown size={16} aria-hidden="true" />
            ) : (
              <ArrowUp size={16} aria-hidden="true" />
            )}
          </button>
        </div>

        <h1 className="sr-only">{t.certificates.heading}</h1>

        <ul className="mx-auto mt-7 grid w-[min(100%,1180px)] grid-cols-1 gap-4 min-[700px]:grid-cols-2 min-[1100px]:grid-cols-3 min-[1100px]:gap-[1.1rem]">
          {sorted.map((course) => (
            // cartão só de exibição: não abre e não leva a lugar nenhum
            <li
              key={course.title.pt}
              className="flex flex-col border border-line"
            >
              <CardHead
                label={courseTypes[course.type][lang]}
                title={course.title[lang]}
                thumb={
                  <CardThumb hue={course.hue} image={course.image}>
                    {!course.image && <Award size={44} strokeWidth={1.5} />}
                  </CardThumb>
                }
                foot={
                  <>
                    {course.issuer && (
                      <span className="text-[0.7rem] tracking-wider uppercase">
                        {course.issuer[lang]}
                      </span>
                    )}
                    {/* a data fica sempre à direita, mesmo sem emissor */}
                    {course.date && (
                      <span className="ml-auto text-[0.72rem] font-semibold tracking-[0.08em] text-cool">
                        {course.date}
                      </span>
                    )}
                  </>
                }
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
