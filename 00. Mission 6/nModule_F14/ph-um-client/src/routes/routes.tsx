import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminRoutes } from "./admin.routes";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/student",
    element: <App></App>,
    children: adminRoutes,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
