import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown } from "lucide-react";

type Option<T extends string> = { value: T; label: string };

type Props<T extends string> = {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  /* nome do campo para leitores de tela (ex.: "Filtrar por tipo") */
  ariaLabel: string;
  className?: string;
};

/* Botão que abre uma lista para escolher uma opção (no lugar das abas, no mobile) */
export default function TypeSelect<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className = "",
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  /* fecha ao clicar fora ou apertar Esc */
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const current = options.find((o) => o.value === value);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${ariaLabel}: ${current?.label ?? ""}`}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex cursor-pointer items-center gap-[0.45rem] border border-line bg-transparent px-[0.8rem] py-[0.4rem] text-[clamp(0.72rem,0.8vw,0.9rem)] font-semibold tracking-[0.06em] text-secondary uppercase transition-colors duration-150 hover:border-secondary focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-secondary"
      >
        <span>{current?.label}</span>
        <ChevronDown
          size={16}
          aria-hidden="true"
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={ariaLabel}
          className="absolute top-full left-0 z-10 mt-1 w-max max-w-[80vw] min-w-full border border-secondary bg-main"
        >
          {options.map((o) => {
            const selected = o.value === value;
            return (
              <li key={o.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={selected}
                  onClick={() => {
                    onChange(o.value);
                    setOpen(false);
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between gap-4 border-0 bg-transparent px-[0.8rem] py-[0.55rem] text-left text-[clamp(0.72rem,0.8vw,0.9rem)] font-semibold tracking-[0.06em] uppercase transition-colors duration-150 hover:bg-line focus-visible:bg-line focus-visible:outline-none ${
                    selected ? "text-secondary" : "text-fg"
                  }`}
                >
                  {o.label}
                  {selected && <Check size={14} aria-hidden="true" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
