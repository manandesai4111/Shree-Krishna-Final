"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password")
      })
    });

    setIsLoading(false);

    if (!response.ok) {
      setError("Please use the demo email and password shown on this page.");
      return;
    }

    router.push("/dashboard");
    router.refresh();
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

      {error && <p className="mt-4 rounded-md bg-neutral-100 p-3 text-sm text-neutral-700">{error}</p>}

      <Button className="mt-5 w-full" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
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
