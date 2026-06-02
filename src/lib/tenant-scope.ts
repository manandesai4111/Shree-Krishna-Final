import type { SessionUser } from "@/lib/auth";

export function requireTenantScope(user: SessionUser) {
  if (user.role === "SUPER_ADMIN") {
    return null;
  }

  if (!user.tenantId) {
    throw new Error("Tenant scope is required for this operation.");
  }

  return user.tenantId;
}

export function whereTenant<T extends Record<string, unknown>>(tenantId: string, filters?: T) {
  return {
    ...filters,
    tenantId
  };
}
