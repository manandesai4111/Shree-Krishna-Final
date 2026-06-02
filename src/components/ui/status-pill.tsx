import { cn } from "@/lib/utils";

type StatusPillProps = {
  status: string;
};

export function StatusPill({ status }: StatusPillProps) {
  const tone =
    status === "Paid" || status === "Vacant"
      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
      : status === "Pending" || status === "Partial"
        ? "border-amber-200 bg-amber-50 text-amber-700"
        : status === "Overdue" || status === "Occupied"
          ? "border-neutral-300 bg-neutral-100 text-neutral-800"
          : "border-neutral-200 bg-white text-neutral-600";

  return <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-medium", tone)}>{status}</span>;
}
