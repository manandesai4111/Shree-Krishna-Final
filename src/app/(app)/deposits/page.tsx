import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { deposits } from "@/lib/demo-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function DepositsPage() {
  return (
    <>
      <PageHeading
        title="Deposit Management"
        description="Track security deposit received, returned, balance, and full audit history per tenant."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Entry
          </Button>
        }
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {deposits.map((deposit) => (
          <Card key={deposit.id}>
            <CardContent>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-neutral-500">{deposit.type}</p>
                  <h3 className="mt-1 font-semibold">{deposit.tenantName}</h3>
                </div>
                <p className="text-lg font-semibold">{formatCurrency(deposit.amount)}</p>
              </div>
              <div className="mt-5 rounded-md bg-neutral-50 p-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Balance</span>
                  <span className="font-semibold">{formatCurrency(deposit.balance)}</span>
                </div>
                <div className="mt-2 flex justify-between">
                  <span className="text-neutral-500">Recorded</span>
                  <span className="font-semibold">{formatDate(deposit.date)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
