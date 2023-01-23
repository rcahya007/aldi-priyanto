import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import UiUxDesign from "./pages/ui-ux-design/UiUxDesign";
import Videography from "./pages/videography/Videography";
import GraphicDesign from "./pages/graphic-design/GraphicDesign";
import About from "./pages/about/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <>Anjas Salah</>,
  },
  {
    path: "/ui-ux-design",
    element: <UiUxDesign />,
  },
  {
    path: "/videography",
    element: <Videography />,
  },
  { path: "/graphic-design", element: <GraphicDesign /> },
  { path: "/about", element: <About /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
