import { useEffect, useRef, useState } from "react";
import "./IntroAnimation.css";

type Phase = "gate" | "night" | "arasaka" | "leaving";

type IntroAnimationProps = {
  onFinish: () => void;
};

// Arquivos da pasta public/ são servidos na raiz do site: sem "/public" no caminho.
const NIGHT_VIDEO = "/Cyberpunk.mp4";
const LOGO_GIF = "/SamuraiLogo.gif";

// Um GIF não avisa quando termina, então a duração precisa ser informada.
// Para descobrir a duração real (em segundos), rode no terminal:
//   ffprobe -v error -show_entries format=duration -of csv=p=0 public/SamuraiLogo.gif
const LOGO_DURATION_MS = 4000;

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const nightRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("gate");
  const [logoOn, setLogoOn] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  // baixa o GIF em segundo plano: quando ele aparecer, já está pronto e começa do primeiro quadro
  useEffect(() => {
    const img = new Image();
    img.src = LOGO_GIF;
  }, []);

  // Espaço pula SÓ o primeiro vídeo
  useEffect(() => {
    if (phase !== "night") return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        setPhase("arasaka");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [phase]);

  // fase do GIF: para o vídeo, espera o fade do palco (1s), mostra o GIF
  // (montado só agora para começar do início) e segue quando a duração acabar
  useEffect(() => {
    if (phase !== "arasaka") return;

    nightRef.current?.pause();
    const show = setTimeout(() => setLogoOn(true), 1000);
    const end = setTimeout(() => setPhase("leaving"), 1000 + LOGO_DURATION_MS);

    return () => {
      clearTimeout(show);
      clearTimeout(end);
    };
  }, [phase]);

  // fase final: espera o fade-out do CSS (1.2s) e desmonta a intro
  useEffect(() => {
    if (phase !== "leaving") return;
    const timer = setTimeout(onFinish, 1200);
    return () => clearTimeout(timer);
  }, [phase, onFinish]);

  const handleStart = () => {
    setPhase("night");
    nightRef.current?.play().catch(() => setPhase("arasaka"));
  };

  const showStage = phase === "arasaka" || phase === "leaving";

  return (
    <div
      className={`intro ${phase === "leaving" ? "intro-leaving" : ""}`}
      onClick={phase === "night" ? () => setPhase("arasaka") : undefined}
    >
      <video
        ref={nightRef}
        className="intro-video"
        src={NIGHT_VIDEO}
        preload="auto"
        playsInline
        onEnded={() => setPhase("arasaka")}
        onError={() => {
          console.error(`Intro: não foi possível carregar ${NIGHT_VIDEO}`);
          setPhase("arasaka");
        }}
      />

      <div className={`intro-stage ${showStage ? "visible" : ""}`}>
        {logoOn && (
          <img
            className="intro-arasaka"
            src={LOGO_GIF}
            alt=""
            onError={() => {
              console.error(`Intro: não foi possível carregar ${LOGO_GIF}`);
              setPhase("leaving");
            }}
          />
        )}
      </div>

      {phase === "gate" && (
        <div className="intro-gate">
          <button className="intro-enter" onClick={handleStart} autoFocus>
            Entrar em Night City
          </button>
        </div>
      )}
    </div>
  );
}
