# Raybon Tech Solutions — Main Site

Company website for **Raybon Tech Solutions** — built with Next.js, Tailwind CSS, and heavy animation polish (Framer Motion + Lenis smooth scroll), following the "Verdant Tech Precision" design system in `../Design/DESIGN.md`.

## Tech Stack

- **Next.js 16** (App Router, Turbopack) + TypeScript
- **Tailwind CSS v4** with design tokens from the design system
- **Framer Motion** — scroll reveals, count-up stats, hero stagger, chat simulator
- **Lenis** — buttery smooth scrolling with anchor support
- **lucide-react** — icon set

## Local Testing with Docker (recommended)

The `docker-compose.yml` spins up an isolated dev container ("testing machine") on port 3000:

```bash
docker compose up -d --build     # start the testing environment
docker compose logs -f web       # follow logs
docker compose down              # stop it
```

Open **http://localhost:3000**.

> **Hot reload note (Windows):** Docker Desktop's host→VM file-sharing layer does not propagate file-change events from `C:\` bind mounts, so edits are **not** auto-detected inside the container. Two ways to deal with it:
>
> 1. After editing files, refresh the container: `docker compose restart web` (verified working).
> 2. Enable **Settings → Resources → File Sharing → Synchronized file shares** in Docker Desktop for automatic (slightly delayed) propagation.
>
> For the smoothest edit-run loop you can also run the dev server natively (`npm run dev`) since Node 20+ is installed; keep Docker for full-environment testing.

## Production image

`Dockerfile` builds a multi-stage standalone production image:

```bash
docker build -t raybon-main-site .
docker run -p 3000:3000 raybon-main-site
```

## Native development (without Docker)

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (Turbopack)
```

## Project Structure

```
src/
├── app/
│   ├── globals.css        # Design tokens (Tailwind v4 @theme) + animation keyframes
│   ├── layout.tsx         # Fonts (Plus Jakarta Sans + Space Grotesk), metadata
│   └── page.tsx           # Landing page composition
└── components/
    ├── SmoothScroll.tsx   # Lenis smooth scrolling
    ├── Reveal.tsx         # Reusable scroll-triggered reveal animation
    ├── CountUp.tsx        # Animated number counter
    ├── Logo.tsx           # Inline SVG brand mark
    ├── Navbar.tsx         # Fixed nav → glass pill on scroll + mobile menu
    ├── Hero.tsx           # Staggered hero, gradient blobs, metrics bar
    ├── Services.tsx       # 6 service cards with tech badges
    ├── Synergy.tsx        # WhatsApp AI chat simulator + Lighthouse score bars
    ├── Process.tsx        # 4-stage stepped framework
    ├── Estimator.tsx      # Interactive scope calculator + lead form
    ├── Pricing.tsx        # 3 engagement tiers
    ├── Testimonials.tsx   # Client feedback cards
    └── Footer.tsx         # Links, newsletter, legal bar
```
