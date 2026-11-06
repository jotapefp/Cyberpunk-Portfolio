import { useEffect, useRef, useState } from "react";

type Phase = "gate" | "night" | "arasaka" | "leaving";

type IntroAnimationProps = {
  onFinish: () => void;
};

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
  const nightRef = useRef<HTMLVideoElement>(null);
  const arasakaRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<Phase>("gate");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
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
    const timer = setTimeout(() => {
      arasakaRef.current?.play().catch(() => setPhase("leaving"));
    }, 1000);

    return () => clearTimeout(timer);
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

  const showArasaka = phase === "arasaka" || phase === "leaving";

  return (
    <div
      className={`intro ${phase === "leaving" ? "intro-leaving" : ""}`}
      onClick={phase === "night" ? () => setPhase("arasaka") : undefined}
    >
      <video
        ref={nightRef}
        className="intro-video"
        src="/Good-morning-Night-City-Cyberpunk-2077-Intro_001_2160p.mp4"
        preload="auto"
        playsInline
        onEnded={() => setPhase("arasaka")}
        onError={() => setPhase("arasaka")}
      />
      <div className={`intro-stage ${showArasaka ? "visible" : ""}`}>
        <video
          ref={arasakaRef}
          className="intro-arasaka"
          src="/Arasaka.mp4"
          preload="auto"
          muted
          playsInline
          onEnded={() => setPhase("leaving")}
          onError={() => setPhase("leaving")}
        />
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
