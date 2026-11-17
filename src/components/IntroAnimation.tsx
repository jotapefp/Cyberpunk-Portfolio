import { useEffect, useRef, useState } from "react";

type Phase = "gate" | "night" | "arasaka" | "leaving";

type IntroAnimationProps = {
  onFinish: () => void;
};

const ANIMATION_1 = "/ImageIcons/Cyberpunk.mp4";
const ANIMATION_2 = "/ImageIcons/SamuraiLogo.gif";

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

  useEffect(() => {
    const img = new Image();
    img.src = ANIMATION_2;
  }, []);

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
        src={ANIMATION_1}
        preload="auto"
        playsInline
        onEnded={() => setPhase("arasaka")}
        onError={() => {
          console.error(`Intro: não foi possível carregar ${ANIMATION_1}`);
          setPhase("arasaka");
        }}
      />

      <div className={`intro-stage ${showStage ? "visible" : ""}`}>
        {logoOn && (
          <img
            className="intro-arasaka"
            src={ANIMATION_2}
            alt=""
            onError={() => {
              console.error(`Intro: não foi possível carregar ${ANIMATION_2}`);
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
