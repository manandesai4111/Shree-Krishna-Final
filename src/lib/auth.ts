import jwt from "jsonwebtoken";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export type SessionUser = {
  id: string;
  tenantId: string | null;
  name: string;
  email: string;
  role: "SUPER_ADMIN" | "PROPERTY_OWNER" | "STAFF";
};

export function signSession(user: SessionUser) {
  const secret = process.env.JWT_SECRET ?? "development-only-secret";

  return jwt.sign(user, secret, {
    expiresIn: "7d",
    audience: "shree-krishna-app",
    issuer: "shree-krishna"
  });
}

export function getDemoUser(): SessionUser {
  return {
    id: "owner_demo",
    tenantId: "tenant_shree_krishna_demo",
    name: "Demo Owner",
    email: "owner@shreekrishna.test",
    role: "PROPERTY_OWNER"
  };
}
