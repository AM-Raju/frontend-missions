export const adminPaths = [
  {
    name: "dashboard",
    path: "dashboard",
    element: "ADMIN DASHBOARD",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CREATE ADMIN",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "CREATE FACULTY",
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Offered Course",
        path: "offered-course",
        element: "OFFERED COURSE",
      },
    ],
  },
];

const result = adminPaths.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return acc;
}, []);

console.log(result);
