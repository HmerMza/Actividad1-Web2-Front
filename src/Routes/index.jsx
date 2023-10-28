import { createBrowserRouter } from "react-router-dom";

//importo las paginas
import PageLogin from "/src/Pages/PageLogin";
import PageRegister from "/src/Pages/PageRegister";
import PageDashboard from "../Pages/PageDashboard";
import LayoutPrincipal from "../Layouts/LayoutPrincipal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPrincipal />,
    children: [
      {
        path: "/login",
        index: true,
        element: <PageLogin />,
      },
      {
        path: "/register",
        element: <PageRegister />,
      },
      {
        path: "/dashboard",
        element: <PageDashboard />,
      },
    ],
  },
]);
