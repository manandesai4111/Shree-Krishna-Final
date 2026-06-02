import { Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { demoProperty } from "@/lib/demo-data";

export function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase text-neutral-500">{demoProperty.city}</p>
          <h1 className="text-base font-semibold text-neutral-950 sm:text-lg">{demoProperty.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" className="h-10 w-10 px-0" aria-label="Notifications">
            <Bell className="h-4 w-4" />
          </Button>
          <Button className="hidden sm:inline-flex">
            <Plus className="h-4 w-4" />
            Add Tenant
          </Button>
        </div>
      </div>
    </header>
  );
}
