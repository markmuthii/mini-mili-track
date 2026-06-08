import { use, useEffect, useState } from "react";
import { Footer } from "../../components/portal/Footer";
import { Header } from "../../components/portal/Header";

export function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://charity-minds-backend.onrender.com/api/v1/users",
      );
      const { data: users, success } = await response.json();
      console.log(users);

      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-100 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto pb-28 py-10">
        <div className="sm:flex sm:items-end sm:justify-between sm:gap-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Users
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              Review and manage all user accounts in your community.
            </p>
          </div>
          <button className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:bg-sky-700">
            + Add New User
          </button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">23</p>
            <p className="mt-2 text-sm text-slate-500">Total Users</p>
          </div>
          <div className="rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-3xl font-semibold text-slate-900">21</p>
            <p className="mt-2 text-sm text-slate-500">New This Month</p>
          </div>
        </div>

        <section className="mt-10 overflow-hidden rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-200">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                Users List
              </p>
              <h2 className="text-2xl font-semibold text-slate-900">
                Active accounts
              </h2>
            </div>
            <div className="rounded-3xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
              Updated just now
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    First Name
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    Last Name
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    Username
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    Email
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    Phone
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    DOB
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    Gender
                  </th>
                  <th className="px-4 py-3 font-semibold uppercase tracking-[0.12em]">
                    CreatedAt
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                {users.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-3">{user.firstName}</td>
                    <td className="px-4 py-3">{user.lastName}</td>
                    <td className="px-4 py-3">{user.username}</td>
                    <td className="px-4 py-3">{user.email}</td>
                    <td className="px-4 py-3">{user.phone}</td>
                    <td className="px-4 py-3">{user.dob}</td>
                    <td className="px-4 py-3">{user.gender}</td>
                    <td className="px-4 py-3">{user.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
