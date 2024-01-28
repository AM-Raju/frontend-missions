import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-5">
      <nav className="flex flex-col gap-1">
        <NavLink
          to={"/admin"}
          className="bg-gray p-3 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/admin/add-service"}
          className="bg-gray p-3 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate"
        >
          Add Service
        </NavLink>
        <NavLink
          to={"/admin/service-list"}
          className="bg-gray p-3 rounded-md hover:bg-dark-gray hover:text-white transition-all truncate"
        >
          Service List
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
