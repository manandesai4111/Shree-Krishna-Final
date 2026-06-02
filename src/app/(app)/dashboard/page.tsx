import { BedDouble, CreditCard, IndianRupee, Plus, UserPlus, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { dashboardMetrics, payments, rooms } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";
import { StatusPill } from "@/components/ui/status-pill";

const metrics = [
  { label: "Total Rooms", value: dashboardMetrics.totalRooms, icon: BedDouble },
  { label: "Occupied Rooms", value: dashboardMetrics.occupiedRooms, icon: BedDouble },
  { label: "Vacant Rooms", value: dashboardMetrics.vacantRooms, icon: BedDouble },
  { label: "Monthly Rent Collection", value: formatCurrency(dashboardMetrics.monthlyRentCollection), icon: IndianRupee },
  { label: "Pending Rent", value: formatCurrency(dashboardMetrics.pendingRent), icon: CreditCard },
  { label: "Total Tenants", value: dashboardMetrics.totalTenants, icon: Users }
];

export default function DashboardPage() {
  return (
    <>
      <PageHeading title="Dashboard" description="Your operational overview for rooms, collections, dues, and tenant activity." />

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <Card key={metric.label}>
              <CardContent className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-neutral-500">{metric.label}</p>
                  <p className="mt-2 text-2xl font-semibold text-neutral-950">{metric.value}</p>
                </div>
                <div className="rounded-md border border-neutral-200 p-2">
                  <Icon className="h-5 w-5 text-neutral-700" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.3fr_0.7fr]">
        <Card>
          <CardContent>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Room Snapshot</h3>
              <Button variant="secondary">
                <Plus className="h-4 w-4" />
                Add Room
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {rooms.map((room) => (
                <div key={room.id} className="rounded-md border border-neutral-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Room {room.number}</p>
                    <StatusPill status={room.status} />
                  </div>
                  <p className="mt-3 text-sm text-neutral-600">
                    {room.occupied}/{room.capacity} occupied
                  </p>
                  <p className="mt-1 text-sm font-medium">{formatCurrency(room.rentAmount)} monthly</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h3 className="font-semibold">Quick Actions</h3>
            <div className="mt-4 grid gap-3">
              <Button>
                <UserPlus className="h-4 w-4" />
                Add Tenant
              </Button>
              <Button variant="secondary">
                <CreditCard className="h-4 w-4" />
                Record Payment
              </Button>
              <Button variant="secondary">
                <BedDouble className="h-4 w-4" />
                Add Room
              </Button>
            </div>
            <div className="mt-5 border-t border-neutral-100 pt-4">
              <p className="text-sm font-medium">Recent rent activity</p>
              <div className="mt-3 space-y-3">
                {payments.slice(0, 2).map((payment) => (
                  <div key={payment.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-neutral-600">{payment.tenantName}</span>
                    <span className="font-medium">{formatCurrency(payment.amount)}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
