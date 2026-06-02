import Link from "next/link";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 py-10">
      <section className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-6 shadow-soft">
        <Building2 className="mb-5 h-8 w-8 text-neutral-900" />
        <h1 className="text-2xl font-semibold">Start with Shree Krishna</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          Signup is ready for owner onboarding, property creation, and payment plan wiring in the next commercial phase.
        </p>
        <div className="mt-6 grid gap-3">
          <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder="Owner name" />
          <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder="Business email" />
          <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder="Property name" />
        </div>
        <Button className="mt-5 w-full">Request account</Button>
        <Link href="/login" className="mt-5 block text-center text-sm text-neutral-600 hover:text-black">
          Back to login
        </Link>
      </section>
    </main>
  );
}
