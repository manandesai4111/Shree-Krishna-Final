import { CreditCard, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { StatusPill } from "@/components/ui/status-pill";
import { payments } from "@/lib/demo-data";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function PaymentsPage() {
  return (
    <>
      <PageHeading
        title="Rent Management"
        description="Manual rent confirmation workflow with amount, payment date, type, status, notes, and immutable history."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Record Payment
          </Button>
        }
      />

      <Card className="mb-5">
        <CardContent>
          <h3 className="font-semibold">Record Payment</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-5">
            <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder="Tenant" />
            <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" placeholder="Amount" />
            <input className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black" type="date" />
            <select className="h-11 rounded-md border border-neutral-200 px-3 text-sm outline-none focus:border-black">
              <option>UPI</option>
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>Cheque</option>
            </select>
            <Button>
              <CreditCard className="h-4 w-4" />
              Save
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {payments.map((payment) => (
          <Card key={payment.id}>
            <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">{payment.tenantName}</p>
                <p className="mt-1 text-sm text-neutral-500">
                  {formatDate(payment.paymentDate)} - {payment.paymentType}
                </p>
                <p className="mt-1 text-sm text-neutral-600">{payment.notes}</p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <p className="text-lg font-semibold">{formatCurrency(payment.amount)}</p>
                <StatusPill status={payment.status} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
