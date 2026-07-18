# Fairway Frame

Fairway Frame is a mobile-friendly Next.js MVP that lets a golfer upload a swing video, extract representative frames, and receive a concise AI-generated visual critique focused on visible movement patterns rather than launch-monitor numbers.

## Owner actions required

1. Create a Supabase project and apply `supabase/migrations/001_initial_schema.sql`.
2. Confirm the private `swing-media` bucket exists after the migration.
3. Add the environment variables listed below in `.env.local` and in Vercel.
4. Create an OpenAI API key and set `OPENAI_API_KEY` before turning `DEMO_MODE=false`.
5. Configure Supabase Auth email redirect URL to your deployed `NEXT_PUBLIC_APP_URL`.

## Technology

Next.js App Router, TypeScript, Tailwind CSS, Supabase database/storage/auth, OpenAI vision analysis, browser canvas video frame extraction, Zod validation, Vitest tests, Vercel-compatible deployment.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Leave `DEMO_MODE=true` to navigate the complete UI without external credentials.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/migrations/001_initial_schema.sql`.
3. The migration creates `profiles`, `swing_uploads`, `extracted_frames`, `analyses`, `comparison_reports`, Row Level Security policies, and a private `swing-media` bucket.
4. Storage paths should be under the authenticated user id, for example `<user-id>/<swing-id>/video.mp4`, so storage policies can enforce ownership.

## OpenAI setup

Create an API key in the OpenAI dashboard, add it as `OPENAI_API_KEY`, and choose a vision-capable model with `OPENAI_VISION_MODEL`. The model receives compressed selected frames only, not the raw video.

## Environment variables

- `NEXT_PUBLIC_APP_URL` - local or deployed app URL.
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL.
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase browser anon key.
- `SUPABASE_SERVICE_ROLE_KEY` - server-only key for private storage/database actions.
- `OPENAI_API_KEY` - server-only OpenAI API key.
- `OPENAI_VISION_MODEL` - configurable vision model, default `gpt-4.1-mini`.
- `MAX_VIDEO_SIZE_MB` - default `100`.
- `MAX_VIDEO_DURATION_SECONDS` - default `30`.
- `MAX_ANALYSIS_FRAMES` - default `9`.
- `DEMO_MODE` - `true` for sample data, `false` for live analysis.

## Deploy to Vercel

Import the repository in Vercel, add the environment variables, deploy, then set Supabase Auth redirects to the Vercel URL. Keep service-role and OpenAI keys server-only.

## Test the workflow

Run `npm run dev`, open `/`, choose **Analyse a new swing**, upload a short MP4/MOV, review extracted frames, open the report, annotate a frame, visit history, and compare two sample swings. In live mode, confirm records and private files are created for only the signed-in user.

## Current limitations

- Automatic frame extraction uses browser temporal sampling of the active middle section; it labels frames conservatively as approximate.
- Demo mode uses placeholder frames and sample analysis.
- Authentication UI is intentionally low-friction but may need Supabase project redirect tuning.
- Server-side rate limiting is an in-memory MVP guard; production should use durable per-user limits.

## Recommended future improvements

Add pose-based frame selection, richer Supabase auth flows, durable queue processing, manual replacement persistence for setup/top/impact frames, and coach-reviewed prompt tuning.
