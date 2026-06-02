import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50",
        variant === "primary" && "bg-black text-white hover:bg-neutral-800",
        variant === "secondary" && "border border-neutral-200 bg-white text-neutral-950 hover:bg-neutral-50",
        variant === "ghost" && "bg-transparent text-neutral-700 hover:bg-neutral-100",
        className
      )}
      {...props}
    />
  );
}
