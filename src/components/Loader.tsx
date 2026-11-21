import { useEffect, useRef, useState, type CSSProperties } from "react";

const DURATION = 3000;

const STEPS = [
  { at: 0, text: "INICIANDO SISTEMA" },
  { at: 30, text: "CARREGANDO MÓDULOS" },
  { at: 65, text: "SINCRONIZANDO INTERFACE" },
  { at: 98, text: "ACESSO LIBERADO" },
];

const cut =
  "[clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,14px_100%,0_calc(100%-14px))]";

const easeInOut = (p: number) =>
  p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

export default function Loader({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const doneRef = useRef(onDone);
  useEffect(() => {
    doneRef.current = onDone;
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const step = (now: number) => {
      const p = Math.min(Math.max((now - start) / DURATION, 0), 1);
      setProgress(easeInOut(p) * 100);

      if (p < 1) {
        raf = requestAnimationFrame(step);
      } else {
        setLeaving(true);
        timeout = setTimeout(() => doneRef.current(), 500);
      }
    };

    raf = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timeout);
    };
  }, []);

  const status =
    [...STEPS].reverse().find((s) => progress >= s.at)?.text ?? STEPS[0].text;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-main px-6 text-secondary transition-opacity duration-500 ${
        leaving ? "opacity-0" : "opacity-100"
      }`}
      role="progressbar"
      aria-label="Carregando"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, var(--secondary) 0 1px, transparent 1px 4px)",
        }}
        aria-hidden="true"
      />

      <h1
        className="font-title animate-glitch text-[clamp(2.2rem,8vw,4.5rem)] tracking-[0.04em] uppercase"
        style={{ "--a": "3px", "--m": "2px" } as CSSProperties}
      >
        Carregando
      </h1>

      <div className={`w-[min(86%,460px)] bg-secondary p-0.75 ${cut}`}>
        <div className={`h-5 bg-main p-0.75 ${cut}`}>
          <div
            className="h-full bg-secondary mask-[repeating-linear-gradient(90deg,#000_0_10px,transparent_10px_14px)]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="font-navbar flex w-[min(86%,460px)] items-center justify-between text-xs tracking-widest uppercase sm:text-sm">
        <span className="text-hot">
          {status}
          <span
            className="animate-glitch ml-1 inline-block"
            style={{ "--a": "2px", "--m": "1px" } as CSSProperties}
          >
            _
          </span>
        </span>
        <span>{String(Math.round(progress)).padStart(3, "0")}%</span>
      </div>
    </div>
  );
}
