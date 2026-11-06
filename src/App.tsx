import { useState } from "react";
import { Outlet } from "react-router-dom";


import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      <Outlet/>
    </>
  );
}
