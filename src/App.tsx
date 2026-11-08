import { useState } from "react";
import { Outlet } from "react-router-dom";


import IntroAnimation from "./components/IntroAnimation.tsx";
import "./components/IntroAnimation.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
    {/* INTRO DESATIVADA */}
     {/*  {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />} */}
      <Outlet/>
    </>
  );
}
