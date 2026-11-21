import { useState } from "react";
import { Outlet } from "react-router-dom";

import CursorGlitch from "./components/CursorGlitch.tsx";
import Loader from "./components/Loader.tsx";
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

const SHOW_LOADER = true;

export default function App() {
  const [loading, setLoading] = useState(SHOW_LOADER);

  return (
    <>
      <CursorGlitch />
      {loading && <Loader onDone={() => setLoading(false)} />}

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
