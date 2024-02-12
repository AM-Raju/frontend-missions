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

// For route
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

// For MainLayout sidebar
const result2 = adminPaths.reduce((acc, item) => {
  if (item.path && item.name) {
    acc.push({
      key: item.name,
      label: "NavLink",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NavLink",
      })),
    });
  }

  return acc;
}, []);

console.log(result);
console.log(JSON.stringify(result2));
