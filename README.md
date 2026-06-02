# Shree Krishna

Commercial multi-tenant SaaS starter for hostel, PG, and rental room management.

## Built Phases

- Phase 1: Next.js App Router project scaffold with TypeScript, Tailwind CSS, modular folders, and environment template.
- Phase 2: Premium authentication UI shell with login, signup placeholder, forgot-password placeholder, role-aware auth API structure.
- Phase 3: Dashboard and room management with 3-room demo data and mobile-first cards.
- Phase 4: Tenant profiles and protected document vault architecture.
- Phase 5: Manual rent payment workflow, deposit tracking, and activity ledger.
- Phase 6: Starter reports for monthly collection, pending rent, deposit, and occupancy.

## Run

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

Open `http://localhost:3000`.

## Demo Login

- Email: `owner@shreekrishna.test`
- Password: `password123`

## Architecture Notes

- Every business entity has `tenantId` and owner/property links for SaaS data isolation.
- Prisma schema targets PostgreSQL and includes users, tenants, properties, rooms, payments, deposits, documents, and activity logs.
- File storage is abstracted through metadata and a future cloud object key, so tenant documents can move to S3 or another provider without changing UI contracts.
