import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "./pages/Home.jsx";
import { LoginPage } from "./pages/Login.jsx";
import { RegisterPage } from "./pages/Register.jsx";
import { DashboardPage } from "./pages/portal/Dashboard.jsx";
import { AnalyticsPage } from "./pages/portal/Analytics.jsx";
import { ProfilePage } from "./pages/portal/Profile.jsx";
import { State } from "./pages/State.jsx";
import { UsersPage } from "./pages/portal/Users.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Nested routes */}
        <Route path="auth">
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
