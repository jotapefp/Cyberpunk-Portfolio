import { useEffect, useRef } from "react";
import "./CursorGlitch.css";

// alcance do efeito ao redor do cursor, em px
const RADIUS = 80;

// O filtro trabalha numa área maior que o círculo visível. Sem essa margem, a
// borda da área deixava aparecer uma faixa verde (o canal vermelho é deslocado
// para o lado e falta na ponta). Com a margem, a ponta fica fora do círculo.
const PAD = 48;
const BOX = RADIUS * 2 + PAD * 2;
const FEATHER = `radial-gradient(circle ${RADIUS}px at 50% 50%, #000 40%, transparent 100%)`;

// Chrome, Edge e Opera distorcem tudo que está sob o cursor (imagens inclusive).
// Nos outros navegadores, só estes elementos tremem quando o cursor chega perto.
const isChromium =
  typeof navigator !== "undefined" && navigator.userAgent.includes("Chrome");
const FALLBACK_TARGETS = "[data-glitch], h1, h2, h3, p, nav a, button, li";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

export default function CursorGlitch() {
  const lensRef = useRef<HTMLDivElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const redRef = useRef<SVGFEOffsetElement>(null);
  const blueRef = useRef<SVGFEOffsetElement>(null);

  useEffect(() => {
    // só em mouse de verdade e sem "reduzir movimento" ligado
    const fineMouse = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lens = lensRef.current;
    const turb = turbRef.current;
    const disp = dispRef.current;
    const red = redRef.current;
    const blue = blueRef.current;
    if (!fineMouse || calm || !lens || !turb || !disp || !red || !blue) return;

    let x = 0;
    let y = 0;
    let active = false;
    let frame = 0;
    let timer = 0;

    // a cada ~90ms sorteia um novo "quadro" de glitch: faixas, força e divisão RGB
    const tick = () => {
      turb.setAttribute("seed", String(Math.floor(rand(0, 1000))));
      turb.setAttribute("baseFrequency", `0 ${rand(0.03, 0.12).toFixed(3)}`);
      disp.setAttribute("scale", rand(30, 70).toFixed(0));
      const split = rand(3, 8);
      red.setAttribute("dx", split.toFixed(1));
      blue.setAttribute("dx", (-split).toFixed(1));
    };

    const clearHits = () => {
      document.querySelectorAll<HTMLElement>(".cg-hit").forEach((el) => {
        el.classList.remove("cg-hit");
        el.style.removeProperty("--cg-i");
      });
    };

    // fallback: treme os elementos próximos, mais forte quanto mais perto
    const update = () => {
      frame = 0;
      if (!active) return;

      document.querySelectorAll<HTMLElement>(FALLBACK_TARGETS).forEach((el) => {
        const r = el.getBoundingClientRect();
        const dx = Math.max(r.left - x, 0, x - r.right);
        const dy = Math.max(r.top - y, 0, y - r.bottom);
        const d = Math.hypot(dx, dy);

        if (d < RADIUS) {
          el.classList.add("cg-hit");
          el.style.setProperty("--cg-i", (1 - d / RADIUS).toFixed(2));
        } else if (el.classList.contains("cg-hit")) {
          el.classList.remove("cg-hit");
          el.style.removeProperty("--cg-i");
        }
      });
    };

    const schedule = () => {
      if (!isChromium && !frame) frame = requestAnimationFrame(update);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      x = e.clientX;
      y = e.clientY;

      if (isChromium) {
        lens.style.transform = `translate3d(${x - BOX / 2}px, ${y - BOX / 2}px, 0)`;
        lens.classList.add("on");
        if (!active) {
          tick();
          timer = window.setInterval(tick, 90);
        }
      }

      active = true;
      schedule();
    };

    const onLeave = () => {
      active = false;
      lens.classList.remove("on");
      window.clearInterval(timer);
      clearHits();
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("scroll", schedule, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", schedule);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.clearInterval(timer);
      cancelAnimationFrame(frame);
      clearHits();
    };
  }, []);

  return (
    <>
      {/* filtro: desloca faixas horizontais e separa os canais R e B.
          Não muda nenhuma cor, então o fundo amarelo liso fica igual. */}
      <svg
        className="cg-defs"
        width="0"
        height="0"
        aria-hidden="true"
        focusable="false"
      >
        <filter
          id="cg-glitch"
          x="0"
          y="0"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0 0.07"
            numOctaves="1"
            seed="1"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0.5  0 0 0 0 0.5  0 0 0 0 1"
            result="map"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="map"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
            result="shifted"
          />
          <feColorMatrix
            in="shifted"
            type="matrix"
            values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="r"
          />
          <feOffset ref={redRef} in="r" dx="5" dy="0" result="r2" />
          <feColorMatrix
            in="shifted"
            type="matrix"
            values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0"
            result="g"
          />
          <feColorMatrix
            in="shifted"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0"
            result="b"
          />
          <feOffset ref={blueRef} in="b" dx="-5" dy="0" result="b2" />
          <feBlend in="r2" in2="g" mode="screen" result="rg" />
          <feBlend in="rg" in2="b2" mode="screen" />
        </filter>
      </svg>

      {/* lente invisível: só distorce o que passa por baixo dela */}
      <div
        ref={lensRef}
        className="cg-lens"
        aria-hidden="true"
        style={{
          width: BOX,
          height: BOX,
          clipPath: `circle(${RADIUS}px at 50% 50%)`,
          WebkitMaskImage: FEATHER,
          maskImage: FEATHER,
        }}
      />
    </>
  );
}
