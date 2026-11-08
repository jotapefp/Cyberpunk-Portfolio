import { useState } from "react";
import { Outlet } from "react-router-dom";

import CursorGlitch from "./components/CursorGlitch";
import IntroAnimation from "./components/IntroAnimation.tsx";
import "./components/IntroAnimation.css";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    // dentro do return do App, antes da intro:
<>
  <CursorGlitch />
  {/* INTRO DESATIVADA */}
  {/* {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />} */}
  <Outlet/>
</>
  );
}




