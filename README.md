Personal portfolio site built with [Next.js](https://nextjs.org) (App Router) and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Editing content

All placeholder content (name, bio, experience, skills, projects) lives in one place: [lib/data.ts](lib/data.ts). Edit that file to replace it with your real information — every section (`Hero`, `About`, `Experience`, `Skills`, `Projects`, `Resume`, `Contact`) reads from it.

## Resume PDF

The "Download PDF" button in the Resume section links to `/resume.pdf`. Add your real resume PDF at `public/resume.pdf` — there's no placeholder file included, so the link will 404 until you add one.

## Deploy on Vercel

The easiest way to deploy is via the [Vercel Platform](https://vercel.com/new). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
