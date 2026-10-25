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

`Dockerfile` builds the static export (`out/`) and serves it with nginx — the same output GitHub Pages serves:

```bash
docker build -t raybon-main-site .
docker run -p 3000:80 raybon-main-site      # http://localhost:3000
```

## Deploy to GitHub Pages

The site is configured for **static export** (`output: "export"` in `next.config.ts`). Every push to `main` is built and published automatically by [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

**One-time setup (requires repo admin):**

1. Go to **Settings → Pages** in the GitHub repo
2. Under **Build and deployment → Source**, select **GitHub Actions**
3. Done — the next push to `main` (or a manual **Run workflow** trigger) publishes the site

**Live URL:** `https://raybontechsolutions-droid.github.io/main-site/`

> The workflow builds with `NEXT_PUBLIC_BASE_PATH=/main-site` so all asset URLs resolve under the project-site subpath. Local builds have no base path and run at the root — no configuration needed. To test the exact CI output locally:
>
> ```bash
> npm run build                                  # or with the base path set, like CI
> npx serve out
> ```

> **Note:** GitHub Pages serves static files only. When the contact form gets a backend later, it must talk to an external API (e.g., Supabase) directly from the browser, or the site should move to a host with Next.js server support (e.g., Vercel).

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
