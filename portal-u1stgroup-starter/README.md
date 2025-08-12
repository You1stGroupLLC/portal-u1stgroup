# You 1st Group Portal (Starter)

This is a minimal Next.js 14 + Tailwind + Prisma scaffold designed for Render.

## Local Dev
```bash
npm install
cp .env.example .env.local
# set DATABASE_URL to a local Postgres or skip Prisma for now
npm run dev
```

## Render Deploy (Web Service)
- **Build Command:** `npm ci && npm run build`
- **Start Command:** `npm run start`
- **Runtime:** Node 20

### Environment Variables
```
NODE_ENV=production
APP_BASE_URL=https://portal.u1stgroup.com
NEXTAUTH_URL=https://portal.u1stgroup.com
NEXTAUTH_SECRET=...
DATABASE_URL=... (Render Postgres Internal Connection String)
ENCRYPTION_KEY=...
```

### Health Check
`GET /api/health` → `{ ok: true }`

## First Tools
- `/tools/assessor-permits`
- `/tools/renewals`

## Prisma
After setting `DATABASE_URL`:
```
npx prisma migrate deploy
```
(Or run locally with `npx prisma migrate dev`)
