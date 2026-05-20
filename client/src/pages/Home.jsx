import { Link } from "react-router";
import { Button } from "../components/Button";
import { Logo } from "../components/Logo";

export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm sticky top-0 z-20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <Logo />
            <p className="text-sm text-slate-500 mt-2">
              Group game score tracking for your crew and match history
            </p>
          </div>
          <nav className="flex items-center gap-4 text-slate-700">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#about" className="hover:text-slate-900">
              About
            </a>
            <Link
              to="/dashboard"
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 inline-flex rounded-full bg-cyan-100 px-3 py-1 text-sm font-semibold text-cyan-800">
              Scoreboard for game nights and tournament sessions
            </p>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Keep every match result, player stat, and game summary in one
              place
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Mini Mili Track helps gaming groups record wins, losses, high
              scores, and team performance across the games you play together.
              Perfect for casual nights, league play, and long-term group
              leaderboards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to={"/auth/register"}
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-700"
              >
                Register
              </Link>
              <Link
                to="/auth/login"
                className="rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-cyan-700 to-blue-600 p-10 text-white shadow-xl shadow-slate-900/15">
            <h3 className="text-2xl font-semibold">Why Mini Mili Track?</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-100">
              <li>
                • Keep a game-by-game history for every player and session.
              </li>
              <li>• Track top performers, averages, and win streaks.</li>
              <li>• Compare results across titles and game nights.</li>
            </ul>
          </div>
        </section>

        <section
          id="features"
          className="mt-16 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-slate-900">What you can do</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">Log matches</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Record scores, winners, and team lineups for every game session.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">Track players</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Save individual player stats so your crew can review performance
                over time.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50 p-6 shadow-sm">
              <h4 className="font-semibold text-slate-900">Compare games</h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                See how your group performs across different games and match
                types.
              </p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mt-16 rounded-3xl bg-slate-900 p-10 text-slate-100"
        >
          <h3 className="text-2xl font-bold">About this app</h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Mini Mili Track is a game score tracking app built for groups who
            play together regularly. It makes it easy to keep match records,
            compare player standings, and preserve your gaming history across
            every session.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
            Whether you're tracking board game nights, esports scrims, or casual
            multiplayer sessions, Mini Mili Track helps your team remember who
            won, who improved, and which games were the most competitive.
          </p>
        </section>
      </main>
    </div>
  );
}
