# NEXIATA — Coming Soon Page

A game-style dark themed coming soon page for nexiata.com.

## Files
- `index.html` — The full page (all CSS & JS embedded, no dependencies)
- `api/notify.js` — Serverless function: emails owners + sends subscriber a thank-you (Resend)
- `og-image.png` — 1200×630 social share image
- `favicon.svg`, `site.webmanifest` — Favicon + PWA manifest
- `robots.txt`, `sitemap.xml`, `llms.txt` — SEO + AI crawler discoverability
- `vercel.json` — Vercel deployment config (SPA rewrite, caching + security headers)

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
- **Launch date**: In `index.html`, find `const LAUNCH = new Date('2026-08-01T00:00:00Z');` and change to your actual date
- **Footer email**: Change `hello@nexiata.com` in the footer

## Notify form (Resend)
The "Notify Me" form posts to `api/notify.js`, which emails the owners and sends the
subscriber a themed thank-you via [Resend](https://resend.com).

**Setup:**
1. Verify `nexiata.com` in Resend → Domains (add the DNS records to Cloudflare)
2. In Vercel → Settings → Environment Variables, add `RESEND_API_KEY`
3. Redeploy

Recipient inboxes are set in the `to:` array in `api/notify.js`.

**Spam protection** is built in: a hidden honeypot field, a timing check (rejects
submits faster than 2.5s), and per-IP rate limiting (5 / 10 min).
