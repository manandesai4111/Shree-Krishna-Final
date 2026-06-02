import { NextResponse } from "next/server";
import { tenants } from "@/lib/demo-data";

export async function GET() {
  return NextResponse.json({
    tenantId: "tenant_shree_krishna_demo",
    data: tenants
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      message: "Tenant creation endpoint is wired for Prisma persistence and document vault linking.",
      tenantId: "tenant_shree_krishna_demo",
      data: body
    },
    { status: 201 }
  );
}
