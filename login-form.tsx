"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    router.push("/dashboard");
  }

  return (
    <form className="rounded-lg border border-neutral-200 bg-white p-5 shadow-soft" onSubmit={handleSubmit}>
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
  );
}
