# Cloudflare Doorway Buddy — Project Context

**Live site:** https://agapes.us  
**GitHub:** https://github.com/agapess/cloudflare-doorway-buddy  
**Deploy:** Push to `main` → Cloudflare auto-deploys

## Stack

React 19 · TanStack Start (SSR) · TanStack Router · Tailwind CSS v4 · Lucide Icons · Vite 7 · Bun · Cloudflare Workers

## Key Files

| File | Purpose |
|---|---|
| `src/routes/index.tsx` | Entire portal UI — services, animations, clock, status dots, footer |
| `src/routes/__root.tsx` | Root shell, global SEO meta, JSON-LD schema |
| `src/styles.css` | Tailwind v4 theme + `pulse-glow` / `spin-cw` / `spin-ccw` keyframes |
| `wrangler.jsonc` | Cloudflare Worker config |

## Services (planets)

| Planet label | Host | Icon |
|---|---|---|
| Local LLM | chat.agapes.us | Bot |
| Downloader | dl.agapes.us | Download |
| AI Music | music.agapes.us | Music |
| n8n | n8n.agapes.us | Workflow |
| Nostalogy Chat | nosta.agapes.us | Sparkles |
| AI Photo | photo.agapes.us | Camera |
| AI Planner | planner.agapes.us | CalendarCheck |
| AI Studio | studio.agapes.us | Clapperboard |
| Remote | remote.agapes.us | Monitor |

## Features

- Solar-system orbit UI — 9 planet buttons around a center orb
- Rings counter-rotate (CSS `spin-cw` / `spin-ccw`)
- Center orb glow pulses (`pulse-glow`)
- Clicking a planet fades center content and shows service info + Open link
- Center orb idle: "Your AI Universe" · "Agapes Ai" · "9 AI tools · one portal"
- Live clock below orbit (en-GB locale, SSR-safe)
- Per-service status dots — HEAD fetch, `mode: no-cors`, 5s timeout, re-checks every 60s
- Visitor badge: `https://hits.sh/agapes.us.svg`
- Contact footer: `ali_venus@yahoo.com` · `https://t.me/agapes`
- Full SEO: title, description, keywords, OG, Twitter Card, canonical, JSON-LD WebSite schema

## Common Tasks

**Add/edit a service:** Edit the `services` array in `src/routes/index.tsx`  
**Add an animation:** Add keyframe in `src/styles.css` → register `--animate-*` in `@theme inline`  
**Change center orb welcome text:** Search for `Your AI Universe` in `index.tsx`  
**Dev server:** `bun run dev`  
**Deploy:** `git push origin main`

## Owner

- Email: ali_venus@yahoo.com  
- Telegram: @agapes  
- GitHub: agapess
