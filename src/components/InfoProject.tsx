import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import { FolderGit2, GraduationCap, type LucideIcon } from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext.tsx";

import { getContent, type Kind } from "../types/InfoProject.ts";

/* Tempo de tela */
const INTERVAL_MS = 5000;
const kinds: Kind[] = ["project", "certificate"];

const meta: Record<Kind, { to: string; Icon: LucideIcon }> = {
  project: { to: "/Projects", Icon: FolderGit2 },
  certificate: { to: "/Certificates", Icon: GraduationCap },
};

export default function InfoProject() {
  const { t, lang } = useLanguage();
  const content = useMemo(() => getContent(lang), [lang]);

  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setStep((s) => s + 1), INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  const kind = kinds[step % kinds.length];
  const list = content[kind];
  const item = list[Math.floor(step / kinds.length) % list.length];
  const { to, Icon } = meta[kind];
  const label = t.info[kind];

  const background: CSSProperties = {
    backgroundImage: `${
      item.image ? `url(${item.image}), ` : ""
    }linear-gradient(135deg, hsl(${item.hue} 85% 38%), hsl(calc(${item.hue} + 50) 80% 14%))`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Link
      to={to}
      className="group relative block w-[clamp(11rem,19vw,17rem)] text-fg no-underline after:absolute after:top-[calc(clamp(11rem,19vw,17rem)-1.5rem)] after:left-[-1.15rem] after:border-y-[0.35rem] after:border-l-[0.55rem] after:border-y-transparent after:border-l-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div key={step} className="animate-fade-up motion-reduce:animate-none">
        <span
          style={background}
          className="block aspect-square transition-[filter] duration-150 [clip-path:polygon(0_0,100%_0,100%_100%,26%_100%,0_74%)] group-hover:brightness-[1.12]"
        />

        <span className="mt-2 flex flex-col items-center gap-1 text-center">
          <span className="flex items-center justify-center gap-2">
            <Icon
              size={18}
              aria-hidden="true"
              className="shrink-0 opacity-90"
            />
            <small className="text-[0.65rem] font-semibold tracking-wide uppercase opacity-80 dark:text-cool dark:opacity-100">
              {label}
            </small>
          </span>
          <strong className="text-[1.15rem] leading-[1.1] font-bold">
            {item.title}
          </strong>
          <span className="text-[0.72rem] leading-tight opacity-90">
            {item.description}
          </span>
        </span>
      </div>
    </Link>
  );
}
