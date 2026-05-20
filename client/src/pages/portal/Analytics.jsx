import { Footer } from "../../components/portal/Footer";
import { Header } from "../../components/portal/Header";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const scoreData = [
  { game: "1", score: 92 },
  { game: "2", score: 100 },
  { game: "3", score: 82 },
  { game: "4", score: 96 },
  { game: "5", score: 90 },
  { game: "6", score: 108 },
  { game: "7", score: 102 },
];

const winLossData = [
  { month: "Jan", wins: 2, losses: 1 },
  { month: "Feb", wins: 3, losses: 1 },
  { month: "Mar", wins: 4, losses: 2 },
  { month: "Apr", wins: 2, losses: 3 },
  { month: "May", wins: 5, losses: 1 },
];

export const AnalyticsPage = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto pb-28 py-10 px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Analytics
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              Insights into your gaming performance
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700">
            Export Report
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-4">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">12</p>
            <p className="mt-2 text-sm text-slate-500">Games Played</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">78%</p>
            <p className="mt-2 text-sm text-slate-500">Win Rate</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">215</p>
            <p className="mt-2 text-sm text-slate-500">Avg Score</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">3</p>
            <p className="mt-2 text-sm text-slate-500">Disputes</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Score Trend
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Performance over the past 7 games
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                Last 7 days
              </span>
            </div>

            <div className="mt-8 h-[260px] rounded-[1.75rem] bg-slate-950 p-6 text-white">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={scoreData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="#334155"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="game"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      border: "none",
                    }}
                    itemStyle={{ color: "#38bdf8" }}
                    cursor={{ stroke: "#38bdf8", strokeDasharray: "3 3" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#22d3ee"
                    strokeWidth={4}
                    dot={{ r: 4, fill: "#22d3ee" }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Wins vs Losses
                </p>
                <p className="mt-3 text-sm text-slate-500">
                  Monthly comparison
                </p>
              </div>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                2026
              </span>
            </div>

            <div className="mt-8 h-[260px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={winLossData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 10 }}
                >
                  <CartesianGrid
                    stroke="#e2e8f0"
                    strokeDasharray="3 3"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#64748b", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#94a3b8", fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                    }}
                  />
                  <Legend
                    verticalAlign="top"
                    align="right"
                    iconType="circle"
                    wrapperStyle={{ paddingBottom: 16 }}
                  />
                  <Bar dataKey="wins" fill="#22c55e" radius={[12, 12, 0, 0]} />
                  <Bar
                    dataKey="losses"
                    fill="#f43f5e"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <section className="mt-8 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
                Top Games by Participation
              </p>
              <p className="mt-3 text-sm text-slate-500">
                Highest participation rates across your recent tournaments
              </p>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              Participation Rate
            </span>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Weekend Pool Tournament",
                rate: 95,
                rounds: 10,
                accent: "bg-emerald-500",
              },
              {
                title: "Monthly Chess League",
                rate: 88,
                rounds: 8,
                accent: "bg-sky-500",
              },
              {
                title: "Bowling Championship",
                rate: 100,
                rounds: 12,
                accent: "bg-violet-500",
              },
            ].map((game) => (
              <div
                key={game.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-semibold text-slate-900">{game.title}</p>
                    <p className="mt-2 text-sm text-slate-500">
                      {game.rounds} rounds
                    </p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-slate-900 ring-1 ring-slate-200">
                    {game.rate}%
                  </span>
                </div>
                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div
                    className={`${game.accent} h-full rounded-full`}
                    style={{ width: `${game.rate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
