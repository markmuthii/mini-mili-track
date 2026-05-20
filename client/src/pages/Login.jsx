import { LoginForm } from "../components/LoginForm";
import { Logo } from "../components/Logo";

export function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-slate-50">
      <div className="mb-8 flex items-center justify-center">
        <Logo />
      </div>
      <LoginForm />
    </div>
  );
}
