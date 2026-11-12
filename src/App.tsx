import { useState } from "react";
import { Outlet } from "react-router-dom";

/* Components */
import CursorGlitch from "./components/CursorGlitch.tsx";
import IntroAnimation from "./components/IntroAnimation.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

import "./components/IntroAnimation.css";

// Coloque true para ligar a animação de entrada
const SHOW_INTRO = false;

export default function App() {
  const [showIntro, setShowIntro] = useState(SHOW_INTRO);

  return (
    <>
      <CursorGlitch />
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <div className="site">
        <Navbar />
        <div className="site-main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
