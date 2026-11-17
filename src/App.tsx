import { useState } from "react";
import { Outlet } from "react-router-dom";

/* Components */
import CursorGlitch from "./components/CursorGlitch.tsx";
import IntroAnimation from "./components/IntroAnimation.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

const SHOW_INTRO = false;

export default function App() {
  const [showIntro, setShowIntro] = useState(SHOW_INTRO);

  return (
    <>
      <CursorGlitch />
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}

      <div className="flex min-h-dvh flex-col">
        <Navbar />
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
