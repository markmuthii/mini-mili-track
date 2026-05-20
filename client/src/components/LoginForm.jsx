import { Link } from "react-router";

export function LoginForm() {
  return (
    <div className="max-w-md mx-auto bg-white rounded-[32px] shadow-[0_24px_80px_rgba(31,41,55,0.08)] border border-slate-200 overflow-hidden">
      <div className="p-8 sm:p-10">
        <h1 className="text-2xl font-semibold text-slate-900">Welcome Back</h1>
        <p className="mt-2 text-sm text-slate-500">
          Login to get back to monitor your games progress.
        </p>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 cursor-pointer px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Log in
          </button>
        </form>

        <div className="mt-7 flex items-center gap-3 text-sm text-slate-500">
          <span className="h-px flex-1 bg-slate-200"></span>
          <span>Or continue with</span>
          <span className="h-px flex-1 bg-slate-200"></span>
        </div>

        <button
          type="button"
          className="mt-6 inline-flex w-full items-center justify-center cursor-pointer gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M21.35 11.1h-9.36v2.92h5.4c-.23 1.24-.94 2.29-2 2.99v2.49h3.24c1.89-1.74 2.98-4.3 2.98-7.4 0-.62-.05-1.22-.15-1.8z"
              fill="#4285F4"
            />
            <path
              d="M12 22c2.7 0 4.96-.9 6.62-2.45l-3.24-2.49c-.9.6-2.03.95-3.38.95-2.6 0-4.8-1.76-5.59-4.13H2.99v2.59C4.61 19.98 8.02 22 12 22z"
              fill="#34A853"
            />
            <path
              d="M6.41 13.88a5.99 5.99 0 0 1 0-3.76V7.53H2.99a9.98 9.98 0 0 0 0 8.95l3.42-2.6z"
              fill="#FBBC05"
            />
            <path
              d="M12 6.18c1.47 0 2.79.5 3.83 1.48l2.88-2.88C16.95 3.1 14.7 2 12 2 8.02 2 4.61 4.02 2.99 7.53l3.42 2.59C7.2 7.94 9.4 6.18 12 6.18z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        <p className="mt-6 text-center text-sm text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
