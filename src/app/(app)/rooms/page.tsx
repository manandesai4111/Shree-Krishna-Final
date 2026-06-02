import { Edit3, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PageHeading } from "@/components/app/page-heading";
import { StatusPill } from "@/components/ui/status-pill";
import { rooms } from "@/lib/demo-data";
import { formatCurrency } from "@/lib/utils";

export default function RoomsPage() {
  return (
    <>
      <PageHeading
        title="Room Management"
        description="Track capacity, vacancy, rent amount, and notes for each room under this owner account."
        action={
          <Button>
            <Plus className="h-4 w-4" />
            Add Room
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {rooms.map((room) => (
          <Card key={room.id}>
            <CardContent>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-neutral-500">Room Number</p>
                  <h3 className="mt-1 text-2xl font-semibold">Room {room.number}</h3>
                </div>
                <StatusPill status={room.status} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="text-neutral-500">Capacity</p>
                  <p className="mt-1 font-semibold">{room.capacity}</p>
                </div>
                <div className="rounded-md bg-neutral-50 p-3">
                  <p className="text-neutral-500">Occupied</p>
                  <p className="mt-1 font-semibold">{room.occupied}</p>
                </div>
                <div className="col-span-2 rounded-md bg-neutral-50 p-3">
                  <p className="text-neutral-500">Rent Amount</p>
                  <p className="mt-1 font-semibold">{formatCurrency(room.rentAmount)}</p>
                </div>
              </div>
              <p className="mt-4 min-h-10 text-sm leading-6 text-neutral-600">{room.notes}</p>
              <div className="mt-5 flex gap-2">
                <Button variant="secondary" className="flex-1">
                  <Edit3 className="h-4 w-4" />
                  Edit
                </Button>
                <Button variant="ghost" className="h-10 w-10 px-0" aria-label={`Delete room ${room.number}`}>
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
