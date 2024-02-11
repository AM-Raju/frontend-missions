import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

export const adminPaths2 = [
  {
    name: "dashboard",
    path: "/admin/dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "/admin/create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "/admin/create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "/admin/offered-course",
        element: <h1>Offered Course element</h1>,
      },
    ],
  },
];

export const adminPaths = [
  {
    index: true,
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    path: "create-admin",
    element: <CreateAdmin></CreateAdmin>,
  },
  {
    path: "create-faculty",
    element: <CreateFaculty></CreateFaculty>,
  },
];
