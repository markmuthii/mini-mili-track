import { Footer } from "../../components/portal/Footer";
import { Header } from "../../components/portal/Header";

export function DashboardPage() {
  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto pb-28 py-10">
        <div className="sm:flex sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Your Games
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              Track scores and compete with friends
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700">
            + Create New Game
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">2</p>
            <p className="mt-2 text-sm text-slate-500">Active Games</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">3</p>
            <p className="mt-2 text-sm text-slate-500">Total Games</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">78%</p>
            <p className="mt-2 text-sm text-slate-500">Win Rate</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="grid gap-6">
            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-600">
                    Weekend Pool Tournament
                  </p>
                  <p className="mt-3 text-sm text-slate-500">Active · Points</p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Active
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    👥
                  </span>
                  <span>4 players</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    💠
                  </span>
                  <span>Points</span>
                </div>
              </div>

              <div className="mt-6 flex -space-x-3">
                <div className="h-10 w-10 rounded-full bg-slate-900 text-center text-xs font-semibold leading-10 text-white">
                  AJ
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-500 text-center text-xs font-semibold leading-10 text-white">
                  SS
                </div>
                <div className="h-10 w-10 rounded-full bg-fuchsia-500 text-center text-xs font-semibold leading-10 text-white">
                  JL
                </div>
                <div className="h-10 w-10 rounded-full bg-cyan-500 text-center text-xs font-semibold leading-10 text-white">
                  CB
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                  <span>Progress</span>
                  <span>3/5 rounds</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-3/5 rounded-full bg-sky-600"></div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                    Monthly Chess League
                  </p>
                  <p className="mt-3 text-sm text-slate-500">
                    Active · Position
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Active
                </span>
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    👥
                  </span>
                  <span>6 players</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                    🏅
                  </span>
                  <span>Position</span>
                </div>
              </div>

              <div className="mt-6 flex -space-x-3">
                <div className="h-10 w-10 rounded-full bg-orange-500 text-center text-xs font-semibold leading-10 text-white">
                  AJ
                </div>
                <div className="h-10 w-10 rounded-full bg-rose-500 text-center text-xs font-semibold leading-10 text-white">
                  TS
                </div>
                <div className="h-10 w-10 rounded-full bg-emerald-500 text-center text-xs font-semibold leading-10 text-white">
                  CE
                </div>
                <div className="h-10 w-10 rounded-full bg-cyan-500 text-center text-xs font-semibold leading-10 text-white">
                  EW
                </div>
                <div className="h-10 w-10 rounded-full bg-slate-300 text-center text-xs font-semibold leading-10 text-slate-900">
                  +2
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                  <span>Progress</span>
                  <span>2/8 rounds</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-full w-1/4 rounded-full bg-emerald-500"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                  Bowling Championship
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Completed · Points
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Completed
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  👥
                </span>
                <span>5 players</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700">
                  💠
                </span>
                <span>Points</span>
              </div>
            </div>

            <div className="mt-6 flex -space-x-3">
              <div className="h-10 w-10 rounded-full bg-orange-500 text-center text-xs font-semibold leading-10 text-white">
                AJ
              </div>
              <div className="h-10 w-10 rounded-full bg-sky-500 text-center text-xs font-semibold leading-10 text-white">
                MR
              </div>
              <div className="h-10 w-10 rounded-full bg-fuchsia-500 text-center text-xs font-semibold leading-10 text-white">
                RZ
              </div>
              <div className="h-10 w-10 rounded-full bg-violet-500 text-center text-xs font-semibold leading-10 text-white">
                HS
              </div>
              <div className="h-10 w-10 rounded-full bg-slate-300 text-center text-xs font-semibold leading-10 text-slate-900">
                +1
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm text-slate-500">
                <span>Progress</span>
                <span>10/10 rounds</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div className="h-full w-full rounded-full bg-violet-600"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
