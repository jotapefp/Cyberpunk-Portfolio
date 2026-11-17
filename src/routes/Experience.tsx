import { experiences } from "../types/Experiences.ts";

/* Components */
import Breadcrumb from "../components/Breadcrumb.tsx";

type Tone = (typeof experiences)[number]["tone"];

/* Cores de cada cartão (card) e da barra de data (bar).
   No tema claro o cartão amarelo ficaria invisível no fundo, então ele vira escuro. */
const tones: Record<Tone, { card: string; bar: string }> = {
  cyan: {
    card: "bg-[linear-gradient(135deg,#1c7d92_0%,#1c7d92_55%,#0e5d73_100%)] text-[#111]",
    bar: "bg-[#0a4254] text-white",
  },
  yellow: {
    card: "bg-[#16161c] text-yellow dark:bg-yellow dark:text-[#111]",
    bar: "bg-yellow text-black dark:bg-[#9f890e] dark:text-white",
  },
  red: {
    card: "bg-[linear-gradient(135deg,#5e0c1c_0%,#8f1a30_55%,#b3223a_100%)] text-[#111]",
    bar: "bg-[#4d0a13] text-white",
  },
};

export default function Experience() {
  return (
    <div className="flex flex-1 flex-col bg-main font-sans text-fg transition-colors duration-250 [--xp-bar-h:2.5rem] [--xp-gutter:2.25rem] sm:[--xp-bar-h:2.9rem] sm:[--xp-gutter:3rem]">
      <main className="flex flex-1 flex-col px-[clamp(1rem,3vw,2.5rem)] pt-4 pb-10">
        <Breadcrumb current="Experiência" />

        <h1 className="sr-only">Experiência</h1>

        {/* linha do tempo: a linha vertical é o ::before da lista */}
        <ol className="relative mx-auto mt-[clamp(3rem,8vh,5rem)] grid w-[min(100%,980px)] gap-[clamp(2.5rem,6vh,3.5rem)] before:absolute before:inset-y-0 before:left-[0.6rem] before:w-0.5 before:bg-fg">
          {experiences.map((item) => {
            const tone = tones[item.tone];

            return (
              <li
                key={`${item.period}-${item.title}`}
                className="relative pl-(--xp-gutter)"
              >
                {/* bolinha na linha, alinhada com o meio da barra de data */}
                <span
                  className="absolute bottom-[calc(var(--xp-bar-h)/2)] left-[0.6rem] size-[0.95rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-fg shadow-[0_0_0_0.3rem_var(--color-black)]"
                  aria-hidden="true"
                />
                {/* tracejado da bolinha até a barra de data */}
                <span
                  className="absolute bottom-[calc(var(--xp-bar-h)/2)] left-[0.6rem] w-[calc(var(--xp-gutter)_-_0.6rem)] translate-y-1/2 border-t-[3px] border-dotted border-fg"
                  aria-hidden="true"
                />

                <article
                  className={`relative min-h-[clamp(13rem,22vw,16rem)] rounded-[14px] px-[1.1rem] pt-5 pb-[calc(var(--xp-bar-h)_+_1rem)] sm:px-7 sm:pt-6 sm:pb-[calc(var(--xp-bar-h)_+_1.25rem)] ${tone.card} ${item.image ? "pr-[40%] sm:pr-[42%]" : ""}`}
                >
                  <span className="text-[0.72rem] font-bold tracking-[0.12em] uppercase opacity-85">
                    {item.kind}
                  </span>
                  <h2 className="mt-1 mb-[0.15rem] text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.1] font-semibold">
                    {item.title}
                  </h2>
                  <p className="m-0 text-[clamp(0.95rem,1.3vw,1.15rem)] font-semibold opacity-90">
                    {item.org}
                  </p>
                  <p className="mt-[0.6rem] max-w-[34rem] text-[clamp(0.85rem,1.05vw,1rem)] leading-[1.45] opacity-90">
                    {item.description}
                  </p>

                  {item.image && (
                    <img
                      className="pointer-events-none absolute top-1/2 right-[3%] z-1 h-[46%] w-[34%] -translate-y-1/2 object-contain object-center select-none sm:right-[4.5%] sm:h-[62%] sm:w-[36%]"
                      src={item.image}
                      alt=""
                    />
                  )}

                  {/* barra de data no canto de baixo */}
                  <p
                    className={`absolute bottom-0 left-0 m-0 flex h-(--xp-bar-h) w-[68%] items-center rounded-bl-[14px] px-[1.1rem] text-[clamp(1.4rem,2.4vw,2rem)] font-bold tracking-[0.02em] sm:w-[min(62%,26rem)] sm:px-7 ${tone.bar}`}
                  >
                    {item.period}
                  </p>
                </article>
              </li>
            );
          })}
        </ol>
      </main>
    </div>
  );
}
