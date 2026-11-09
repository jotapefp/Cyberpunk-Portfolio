import { useState } from "react";
import { Moon, Sun } from "lucide-react";

import "./ThemeToggle.css";

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
      className="yh-theme"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Modo escuro"
      onClick={toggle}
    >
      <span className="yh-theme-knob" aria-hidden="true" />
      <Sun
        className="yh-theme-icon yh-theme-sun"
        size={14}
        aria-hidden="true"
      />
      <Moon
        className="yh-theme-icon yh-theme-moon"
        size={14}
        aria-hidden="true"
      />
    </button>
  );
}
