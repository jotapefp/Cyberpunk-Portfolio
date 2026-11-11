import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./routes/Home.tsx";
import App from "./App.tsx";
import AboutMe from "./routes/AboutMe.tsx";
import Experience from "./routes/Experience.tsx";
import Projects from "./routes/Projects.tsx";
import Certificates from "./routes/Certificates.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AboutMe", element: <AboutMe /> },
      { path: "/Experience", element: <Experience /> },
      { path: "/Projects", element: <Projects /> },
      { path: "/Certificates", element: <Certificates /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
