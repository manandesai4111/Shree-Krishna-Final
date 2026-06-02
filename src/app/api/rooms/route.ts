import { NextResponse } from "next/server";
import { rooms } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({
    tenantId: "tenant_shree_krishna_demo",
    data: rooms
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      message: "Room creation endpoint is wired for Prisma persistence.",
      tenantId: "tenant_shree_krishna_demo",
      data: body
    },
    { status: 201 }
  );
}
