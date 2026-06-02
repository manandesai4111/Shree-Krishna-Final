import Link from "next/link";
import { Eye, Plus, Trash2, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { tenants } from "@/lib/demo-data";
import { cn, formatCurrency, formatDate } from "@/lib/utils";

export default function TenantsPage() {
  return (
    <>
      <PageHeading
        title="Tenant Management"
        description="Complete tenant profiles with identity, stay, deposit, room assignment, and document status."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Tenant
          </Button>
        }
      />

      <div className="grid gap-4 xl:grid-cols-3">
        {tenants.map((tenant) => (
          <Card key={tenant.id}>
            <CardContent>
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-neutral-100">
                  <UserRound className="h-5 w-5 text-neutral-700" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-semibold">{tenant.fullName}</h3>
                  <p className="text-sm text-neutral-500">{tenant.mobileNumber}</p>
                </div>
              </div>
              <div className="mt-5 grid gap-3 text-sm">
                <div className="flex justify-between gap-3">
                  <span className="text-neutral-500">Room</span>
                  <span className="font-medium">{tenant.assignedRoom}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-neutral-500">Move-in</span>
                  <span className="font-medium">{formatDate(tenant.moveInDate)}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-neutral-500">Monthly rent</span>
                  <span className="font-medium">{formatCurrency(tenant.monthlyRent)}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-neutral-500">Deposit balance</span>
                  <span className="font-medium">{formatCurrency(tenant.depositBalance)}</span>
                </div>
              </div>
              <div className="mt-5 flex gap-2">
                <Link
                  href={`/tenants/${tenant.id}`}
                  className={cn(
                    "inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-md border border-neutral-200 bg-white px-4 text-sm font-medium text-neutral-950 transition hover:bg-neutral-50"
                  )}
                >
                  <Eye className="h-4 w-4" />
                  View
                </Link>
                <Button variant="ghost" className="h-10 w-10 px-0" aria-label={`Delete ${tenant.fullName}`}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
