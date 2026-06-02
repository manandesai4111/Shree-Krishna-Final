import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <section className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="text-2xl font-semibold text-neutral-950">Shree Krishna</p>
          <p className="mt-2 text-sm text-neutral-600">Cloud rent management for PGs, hostels, and rental rooms.</p>
        </div>

        <form className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft" action="/dashboard">
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-neutral-800" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue="owner@shreekrishna.test"
                className="mt-2 h-11 w-full rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-neutral-800" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                defaultValue="password123"
                className="mt-2 h-11 w-full rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black"
              />
            </div>
          </div>

          <Button className="mt-5 w-full" type="submit">
            Login
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div className="mt-5 flex items-center justify-between text-sm text-neutral-600">
            <Link href="/signup" className="hover:text-black">
              Create account
            </Link>
            <Link href="/login?forgot=true" className="hover:text-black">
              Forgot password
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}
