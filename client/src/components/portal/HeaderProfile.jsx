import { useEffect, useRef, useState } from "react";

export const HeaderProfile = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex cursor-pointer items-center gap-3"
        onClick={() => setOpen((current) => !current)}
      >
        <div className="hidden text-right sm:block">
          <p className="text-sm font-semibold text-slate-900">Alex Johnson</p>
          <p className="text-xs text-slate-500">Game coordinator</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 text-sm font-semibold text-white shadow-sm">
          AJ
        </div>
      </div>

      <div
        className={`absolute right-0 top-full z-10 mt-3 w-52 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/5 transition duration-200 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <a
          href="#"
          className="block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
        >
          My Profile
        </a>
        <a
          href="#"
          className="mt-1 block rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
        >
          Settings
        </a>
        <div className="my-2 h-px bg-slate-200" />
        <button className="w-full rounded-2xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
          Sign Out
        </button>
      </div>
    </div>
  );
};
