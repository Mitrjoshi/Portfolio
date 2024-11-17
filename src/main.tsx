import { createRoot } from "react-dom/client";
import "@/index.css";
import { Root } from "@/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Index } from "@/pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
