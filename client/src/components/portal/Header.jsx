import { Logo } from "../Logo";
import { NavLink } from "react-router";
import { HeaderProfile } from "./HeaderProfile";

export const Header = () => {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-500 sm:flex">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `transition ${isActive ? "text-slate-900" : "hover:text-slate-900"}`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `transition ${isActive ? "text-slate-900" : "hover:text-slate-900"}`
            }
          >
            Users
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `transition ${isActive ? "text-slate-900" : "hover:text-slate-900"}`
            }
          >
            Analytics
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `transition ${isActive ? "text-slate-900" : "hover:text-slate-900"}`
            }
          >
            Profile
          </NavLink>
        </nav>

        <HeaderProfile />
      </div>
    </header>
  );
};
