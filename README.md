# NEXIATA — Coming Soon Page

A game-style dark themed coming soon page for nexiata.com.

## Files
- `index.html` — The full page (all CSS & JS embedded, no dependencies)
- `vercel.json` — Vercel deployment config

## Deploy to Vercel (Free)

### Option 1 — Drag & Drop (Easiest)
1. Go to https://vercel.com and sign up / log in
2. Click **"Add New Project"**
3. Choose **"Deploy without a Git repository"** → drag this folder in
4. Click **Deploy** — done ✅

### Option 2 — Vercel CLI
```bash
npm i -g vercel
cd nexiata
vercel
```
Follow the prompts, then connect your domain `nexiata.com` in the dashboard.

### Option 3 — GitHub
1. Push this folder to a GitHub repo
2. Import it on https://vercel.com/new
3. Vercel auto-detects it as a static site

## Connect Your Domain (nexiata.com)
1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `nexiata.com` and `www.nexiata.com`
3. Point your domain's DNS to the records Vercel provides

## Customise
- **Launch date**: In `index.html`, find `const LAUNCH = new Date('2026-09-15T00:00:00Z');` and change to your actual date
- **Email**: Change `hello@nexiata.com` in the footer
- **Notify form**: To actually collect emails, sign up at https://formspree.io (free) and replace `doNotify()` with a Formspree POST
