# Tharaka Dilshan — Senior DevOps Engineer

Premium portfolio website built with Next.js 15 App Router, TypeScript, Tailwind CSS, Framer Motion, and shadcn-style primitives.

## Quick start

```bash
cd tharaka-portfolio
npm install
npm run dev
```

Then open <http://localhost:3000>.

```bash
npm run build && npm run start
```

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS 3.4 + `tailwindcss-animate`
- Framer Motion 11 for animations
- lucide-react icons
- next-themes for dark/light mode
- Custom shadcn-style primitives (no extra Radix deps)
- Google Fonts via `next/font`: Bricolage Grotesque (display), Manrope (body), Instrument Serif (editorial italic), JetBrains Mono (terminal)

## Structure

```
tharaka-portfolio/
├── app/
│   ├── layout.tsx        # Fonts, metadata, theme provider
│   ├── page.tsx          # Section composition
│   └── globals.css       # Tokens, glass, grid, gradients
├── components/
│   ├── ui/               # Button, Card, Badge, Separator
│   ├── sections/         # All 14 section blocks
│   ├── animated-architecture.tsx
│   ├── animated-counter.tsx
│   ├── grid-background.tsx
│   ├── magnetic-button.tsx
│   ├── navbar.tsx
│   ├── scroll-progress.tsx
│   ├── section-heading.tsx
│   ├── terminal-card.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── data/                 # site, skills, experience, projects, services, …
├── lib/utils.ts
├── types/index.ts
└── public/               # Drop your CV here as Tharaka-Dilshan-CV.pdf
```

## Customizing

- **Content** — edit files under `data/`. Everything is typed.
- **Theme tokens** — `app/globals.css` (`:root`, `.dark`).
- **Section composition** — `app/page.tsx`.
- **CV** — place `public/Tharaka-Dilshan-CV.pdf` and the download buttons will pick it up automatically.

## Deploy to Vercel

The project is configured for Vercel out of the box (`vercel.json` included with security headers + immutable asset caching).

### Option A — Git-based deploy (recommended, ~2 min)

1. **Push to GitHub** (create a new repo, then):
   ```bash
   cd tharaka-portfolio
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to <https://vercel.com/new>, sign in with GitHub, import the repo.
3. Framework preset auto-detects **Next.js**. Leave everything default → **Deploy**.
4. You'll get `<project>.vercel.app` in ~60 seconds.

Every push to `main` redeploys automatically. PRs get preview URLs.

### Option B — One-shot CLI deploy (no GitHub)

```bash
npm i -g vercel
cd tharaka-portfolio
vercel              # interactive setup, first deploy
vercel --prod       # promote to production
```

### Custom domain

In the Vercel dashboard: **Project → Settings → Domains → Add**. Point your DNS:
- Apex (`tharaka.com`): A record → `76.76.21.21`
- Subdomain (`www`, `portfolio`): CNAME → `cname.vercel-dns.com`

### Update site URL for SEO

Before going live, set the canonical URL in `app/layout.tsx`:

```ts
const SITE_URL = "https://your-domain.com";
```

This drives `metadataBase`, Open Graph, and Twitter card URLs.

### Optional: contact form backend

The form in `components/sections/contact.tsx` is UI-only. To make it work on Vercel, the cleanest path is a server action + [Resend](https://resend.com):

```bash
npm i resend
```

Add `RESEND_API_KEY` in **Vercel → Settings → Environment Variables**, then wire `onSubmit` to a server action that calls `resend.emails.send(...)`.

## Notes

- Dark mode is the default; light mode is fully wired via `next-themes`.
- The contact form is UI-only — wire it to your preferred backend (Resend, Formspree, etc.) in `components/sections/contact.tsx`.
- `prefers-reduced-motion` is respected globally.
- All sections use scroll-triggered Framer Motion reveals with sensible margins.
- The animated architecture orbit in the hero is hand-coded SVG + motion components — no external libs.
