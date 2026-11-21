import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang } from "./translations";

const STORAGE_KEY = "lang";

type LanguageContextValue = {
  lang: Lang;
  t: (typeof translations)[Lang];
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const toggleLang = useCallback(
    () => setLang((l) => (l === "pt" ? "en" : "pt")),
    [],
  );

  const value = useMemo(
    () => ({ lang, t: translations[lang], toggleLang }),
    [lang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage precisa estar dentro de <LanguageProvider>");
  return ctx;
}
