import { useState } from "react";
import { Routes, Route } from "react-router-dom";


import Home from "./routes/Home";
import SectionPage from "./routes/SectionPage";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onFinish={() => setShowIntro(false)} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:secao" element={<SectionPage />} />
      </Routes>
    </>
  );
}
