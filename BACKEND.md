# Athletix Gym — Backend Setup

This document explains how to set up Supabase and Resend to power the contact form and trial booking features.

## 1. Supabase Setup

### Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Once created, go to **Project Settings → API** and copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

### Run the database migration

1. Open your Supabase project's **SQL Editor**.
2. Copy the contents of `supabase/migrations/001_init.sql`.
3. Paste and run it. This creates the `contact_submissions` and `trial_bookings` tables with Row Level Security (RLS).

### Tables created

| Table | Purpose |
|---|---|
| `contact_submissions` | Stores messages from the contact form |
| `trial_bookings` | Stores free trial booking requests |

Both tables have RLS enabled:
- **Anyone** (including anonymous users) can **insert** rows.
- Only **authenticated users** can **select** rows (useful for an admin dashboard).

## 2. Resend Setup

### Create a Resend account

1. Go to [resend.com](https://resend.com) and sign up.
2. Go to **API Keys** and create a new key.
3. Copy the key → `RESEND_API_KEY`.
4. Verify a sender domain (e.g., `athletix.com`) or use the default `onboarding@resend.dev` for testing.
5. Set `CONTACT_EMAIL` to the email address where you want to receive contact form notifications.

## 3. Environment Variables

Copy these into your `.env.local` file:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# Resend
RESEND_API_KEY=re_...
CONTACT_EMAIL=hello@athletix.com
```

## 4. File Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    POST /api/contact  — Submit contact form
│   │   └── trial/route.ts      POST /api/trial    — Book a free trial
├── emails/
│   ├── contact-notification.ts  — HTML email builder for admin notifications
│   └── trial-confirmation.ts    — HTML email builder for user confirmations
├── lib/
│   ├── supabase/
│   │   ├── client.ts           — Supabase browser client
│   │   ├── server.ts           — Supabase server client (Read/Write)
│   │   └── admin.ts            — Supabase admin client (service role, bypasses RLS)
│   └── resend.ts               — Resend client init
supabase/
└── migrations/
    └── 001_init.sql            — Database schema
```

## 5. API Routes

### POST /api/contact

Accepts `{ name, email, phone, interest, message }`.
- Validates required fields (name, email, message).
- Inserts into `contact_submissions` table.
- Sends notification email to `CONTACT_EMAIL` (best-effort, doesn't fail request).
- Returns `{ success: true, id }` on success.

### POST /api/trial

Accepts `{ name, email, phone, preferred_date, preferred_time, notes }`.
- Validates required fields (name, email, phone, preferred_date).
- Inserts into `trial_bookings` table.
- Sends confirmation email to the user (best-effort).
- Returns `{ success: true, id }` on success.

## 6. Usage

The contact form on `/contact` and the trial booking modal on the homepage are already wired up. The modal triggers when clicking "Book Your Free First Week" buttons on the Hero and Final CTA sections.

### Testing locally

```bash
npm run dev
```

Then fill in the contact form or open the trial booking modal — the API calls will go to the running Next.js dev server.

## 7. Troubleshooting

**Build errors about missing env vars:** The app builds even without env vars, but API routes will throw at runtime if Supabase env vars are missing. Set them before deploying.

**Email sending fails:** Check that your Resend domain is verified and API key is correct. The API routes log email errors to the console but don't fail the request.

**CORS issues:** Next.js API routes handle CORS natively for same-origin requests. If you need cross-origin access, add CORS headers to the route handlers.
