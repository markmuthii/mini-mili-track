import { useState } from "react";
import { Link, useNavigate } from "react-router";

export function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("0");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      username,
      email,
      phone,
      dob,
      gender,
      password,
      confirmPassword,
    };

    try {
      const response = await fetch(
        "https://charity-minds-backend.onrender.com/api/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log("Registration successful:", data);

        if (data.success) {
          navigate("/auth/login");
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-[32px] shadow-[0_24px_80px_rgba(31,41,55,0.08)] border border-slate-200 overflow-hidden">
      <div className="p-8 sm:p-10">
        <h1 className="text-2xl font-semibold text-slate-900">
          Create account
        </h1>
        <p className="mt-2 text-sm text-slate-500">
          Start building your account and join us today.
        </p>

        <form onSubmit={handleFormSubmit} className="mt-8 space-y-5">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-slate-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-slate-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Wick"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="johnwick"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="flex gap-4">
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
                placeholder="john@wick.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-slate-700"
              >
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                placeholder="+254712345678"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-slate-700"
              >
                Date of birth
              </label>
              <input
                id="dob"
                name="dob"
                type="date"
                placeholder="01/01/1970"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 appearance-none h-11 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-slate-700"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 pr-10 py-3 text-sm text-slate-900 appearance-none h-11 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="0">--Select gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-slate-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-blue-600 cursor-pointer px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create account
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
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
