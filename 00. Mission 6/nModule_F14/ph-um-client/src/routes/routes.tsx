import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import { adminPaths } from "./admin.routes";
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
    children: adminPaths,
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: adminPaths,
  },
  {
    path: "/student",
    element: <App></App>,
    children: adminPaths,
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
