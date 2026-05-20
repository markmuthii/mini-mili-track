import { Logo } from "../components/Logo";
import { RegisterForm } from "../components/RegisterForm";

export function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-slate-50">
      <div className="mb-8 flex items-center justify-center">
        <Logo />
      </div>
      <RegisterForm />
    </div>
  );
}
