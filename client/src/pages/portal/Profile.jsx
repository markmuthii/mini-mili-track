import { Footer } from "../../components/portal/Footer";
import { Header } from "../../components/portal/Header";

export const ProfilePage = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto pb-28 py-10 px-4 sm:px-6">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Profile
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Manage your account and view your stats
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-[2rem] bg-orange-500 text-3xl font-semibold text-white shadow-sm">
                  AJ
                </div>
                <div>
                  <p className="text-xl font-semibold text-slate-900">
                    Alex Johnson
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    alex.johnson@example.com
                  </p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-700">
                Edit Profile
              </button>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-50 p-5 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-3xl font-semibold text-slate-900">7</p>
                <p className="mt-2 text-sm text-slate-500">Wins</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-3xl font-semibold text-slate-900">12</p>
                <p className="mt-2 text-sm text-slate-500">Total Games</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-5 text-center shadow-sm ring-1 ring-slate-200">
                <p className="text-3xl font-semibold text-slate-900">58%</p>
                <p className="mt-2 text-sm text-slate-500">Win Rate</p>
              </div>
            </div>

            <div className="mt-6 rounded-[1.75rem] bg-slate-50 p-5 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    Average Score
                  </p>
                  <p className="mt-3 text-4xl font-semibold text-slate-900">
                    215
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Your average performance across games
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-sky-100 text-3xl text-sky-600">
                  🏆
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Account details
              </p>
              <div className="mt-6 space-y-4 text-sm text-slate-600">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-slate-900 font-medium">Role</p>
                  <p className="mt-1">Game coordinator</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-slate-900 font-medium">Member since</p>
                  <p className="mt-1">January 2025</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-slate-900 font-medium">Location</p>
                  <p className="mt-1">Los Angeles, CA</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Activity overview
                  </p>
                  <p className="mt-3 text-sm text-slate-500">
                    A quick look at your recent performance.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Stable
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Matches this month</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    8
                  </p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="text-sm text-slate-500">Best streak</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900">
                    5 wins
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">
                Recent Games
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Track your latest tournaments and results.
              </p>
            </div>
            <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700">
              View all games
            </button>
          </div>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Weekend Pool Tournament
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Active · Ongoing competition
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 sm:mt-0">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Active
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  🏆
                </span>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Monthly Chess League
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Active · 2nd place
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 sm:mt-0">
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                  Active
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  #2
                </span>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Bowling Championship
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Completed · Final result
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 sm:mt-0">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Completed
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                  🏆
                </span>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Tennis Round Robin
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Completed · Final ranking
                </p>
              </div>
              <div className="mt-4 flex items-center gap-3 sm:mt-0">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                  Completed
                </span>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-sm font-semibold text-slate-700">
                  #3
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
