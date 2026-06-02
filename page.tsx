import { LoginForm } from "./login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <section className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-2xl font-semibold text-neutral-950">Shree Krishna</p>
          <p className="mt-2 text-sm text-neutral-600">Cloud rent management for PGs, hostels, and rental rooms.</p>
        </div>

        <LoginForm />
      </section>
    </main>
  );
}
