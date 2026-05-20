import logo from "../assets/images/logo.webp";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src={logo}
        alt="Mini Mili Track logo"
        className="h-12 w-12 rounded-full object-cover"
      />

      <div className="flex flex-col">
        <span className="text-lg font-bold text-slate-900">
          Mini Mili Track
        </span>

        <span className="text-sm">Group game score tracker</span>
      </div>
    </div>
  );
}
