import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import your pages
import HappyDiwali from "./Pages/HappyDiwali.jsx";

// ✅ Define all routes correctly using createBrowserRouter()
const AllRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HappyDiwali />, // 'element', not 'Element'
  },
]);

// ✅ Render your app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AllRoutes} />
  </StrictMode>
);
