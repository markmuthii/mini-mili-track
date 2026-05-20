export const Footer = () => {
  return (
    <footer className="absolute bottom-0 left-0 right-0 border-t border-slate-200 bg-white px-6 py-4 text-sm text-slate-500">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Mini Mili Track. Built for gaming groups.</p>
        <div className="flex flex-wrap gap-4 text-slate-500">
          <a href="#" className="hover:text-slate-900">
            Support
          </a>
          <a href="#" className="hover:text-slate-900">
            Terms
          </a>
          <a href="#" className="hover:text-slate-900">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};
