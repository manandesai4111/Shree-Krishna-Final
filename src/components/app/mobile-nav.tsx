"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BedDouble, CreditCard, Gauge, Landmark, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Home", icon: Gauge },
  { href: "/rooms", label: "Rooms", icon: BedDouble },
  { href: "/tenants", label: "Tenants", icon: Users },
  { href: "/payments", label: "Rent", icon: CreditCard },
  { href: "/deposits", label: "Deposit", icon: Landmark }
];

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-neutral-200 bg-white lg:hidden">
      <div className="grid grid-cols-5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-h-16 flex-col items-center justify-center gap-1 text-xs font-medium text-neutral-500",
                active && "text-black"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
