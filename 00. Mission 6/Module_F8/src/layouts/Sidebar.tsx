import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto p-4 lg:p-5">
      <nav className="flex flex-col gap-1">
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all truncate rounded-md flex gap-2 ",
              {
                " bg-dark-gray text-white transition-all": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate"> Dashboard</span>
        </NavLink>
        <NavLink
          to={"/admin/service-list"}
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all truncate rounded-md flex gap-2 ",
              {
                " bg-dark-gray text-white transition-all": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate"> Service List</span>
        </NavLink>
        <NavLink
          to={"/admin/add-service"}
          className={({ isActive }) =>
            cn(
              "bg-gray p-3 hover:bg-dark-gray hover:text-white transition-all truncate rounded-md flex gap-2 ",
              {
                " bg-dark-gray text-white transition-all": isActive,
              }
            )
          }
        >
          <LayoutDashboard className="shrink-0"></LayoutDashboard>
          <span className="truncate"> Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
