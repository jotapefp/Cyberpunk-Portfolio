import { useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "dark" ? "dark" : "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {}

    setTheme(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Modo escuro"
      onClick={toggle}
      className="group relative mr-[0.4rem] flex h-[calc(var(--nb-box,1.9rem)*1.2)] w-[calc(var(--nb-box,1.9rem)*2.3)] cursor-pointer items-center justify-between rounded-[3px] border border-secondary px-2 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary xl:mr-[clamp(1rem,5vw,6.5rem)]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0.75 left-0.75 w-[calc(50%-3px)] rounded-xs bg-secondary transition-transform duration-200 group-aria-checked:translate-x-full motion-reduce:transition-none"
      />

      <Sun
        aria-hidden="true"
        className="relative z-10 size-(--nb-icon,0.875rem) text-main transition-colors duration-200 group-aria-checked:text-secondary motion-reduce:transition-none"
      />
      <Moon
        aria-hidden="true"
        className="relative z-10 size-(--nb-icon,0.875rem) text-secondary transition-colors duration-200 group-aria-checked:text-main motion-reduce:transition-none"
      />
    </button>
  );
}
