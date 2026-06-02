import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { dashboardMetrics, deposits, rooms } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

const reportCards = [
  { title: "Monthly Collection", value: formatCurrency(dashboardMetrics.monthlyRentCollection), detail: "Paid rent for current cycle" },
  { title: "Pending Rent", value: formatCurrency(dashboardMetrics.pendingRent), detail: "Manual follow-up required" },
  { title: "Deposit Report", value: formatCurrency(deposits.reduce((sum, deposit) => sum + deposit.balance, 0)), detail: "Current held balance" },
  { title: "Occupancy Report", value: `${dashboardMetrics.occupiedRooms}/${dashboardMetrics.totalRooms}`, detail: "Fully occupied rooms" }
];

export default function ReportsPage() {
  return (
    <>
      <PageHeading title="Reports" description="Starter mobile-readable reports for collections, rent dues, deposits, and occupancy." />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reportCards.map((report) => (
          <Card key={report.title}>
            <CardContent>
              <p className="text-sm text-neutral-500">{report.title}</p>
              <p className="mt-2 text-2xl font-semibold">{report.value}</p>
              <p className="mt-2 text-sm text-neutral-600">{report.detail}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-5">
        <CardHeader>
          <h3 className="font-semibold">Occupancy by Room</h3>
        </CardHeader>
        <CardContent className="space-y-4">
          {rooms.map((room) => {
            const percent = Math.round((room.occupied / room.capacity) * 100);
            return (
              <div key={room.id}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium">Room {room.number}</span>
                  <span className="text-neutral-500">{percent}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-neutral-100">
                  <div className="h-full rounded-full bg-black" style={{ width: `${percent}%` }} />
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
