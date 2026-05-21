# Dhanushree R — Portfolio

A clean, minimal, recruiter-focused portfolio built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Before Deploying

1. **Add your resume** — Export as PDF, rename to `resume.pdf`, place in `public/` folder:
   ```
   c:\Users\dhanu\Portfolio\portpolio\public\resume.pdf
   ```
   See `public/HOW_TO_ADD_RESUME.txt` for step-by-step help.
2. **Update site URL** — Edit `src/data/site.ts` and set `url` to your Vercel domain.
3. **Project GitHub links** — Add per-repo URLs in `src/data/projects.ts` when available.
4. **OG image** — Add `public/og-image.png` (1200×630) for social previews.

## Deploy to Vercel

1. Push this repo to GitHub: [github.com/Dhanu-06/portpolio](https://github.com/Dhanu-06/portpolio)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import your repository
4. Framework preset: **Next.js** (auto-detected)
5. Click **Deploy**

Custom domain: Project Settings → Domains → add your domain.

## Folder Structure

```
src/
├── app/              # Next.js App Router (layout, page, SEO)
├── components/
│   ├── layout/       # Navbar, Footer, LoadingScreen
│   ├── sections/     # Hero, About, Skills, Projects, etc.
│   ├── seo/          # JSON-LD structured data
│   └── ui/           # Button, Card, Badge, SectionHeading
├── data/             # Content (projects, skills, achievements)
└── lib/              # Utilities
public/               # Static assets (resume.pdf, og-image.png)
legacy/               # Old HTML portfolio (archived)
```

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide Icons

## Performance

- Uses `next/font` for optimized Inter loading
- Subtle animations with `viewport={{ once: true }}`
- No heavy 3D or particle libraries

## License

Personal portfolio — © Dhanushree R
