# Satheesh K. — Portfolio (React)

An editorial, data-driven single-page portfolio for an operator who works across
three tracks: **Engineering · Equity Research · Content & SEO**. Built from
scratch in React — no template, no UI kit, no external CDN, everything local.

## Stack & principles

- **React 18 + Vite** (plain JavaScript, no TypeScript, no Next.js)
- **No component library** (no shadcn / MUI / Bootstrap / Tailwind). One
  hand-written stylesheet using CSS variables.
- **Local fonts only** — a system serif (display) + system sans (body). No
  Google Fonts / CDN requests.
- **Everything maps from one data file.** The JSX has almost no hardcoded copy.

## Run it

```bash
npm install
npm run dev       # local dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # preview the production build
```

The build uses `base: './'` (relative asset paths), so you can drop the contents
of `dist/` into any folder — including under XAMPP `htdocs` — and it just works.

## How to edit the site — one file

**`src/data/content.js`** is the single source of truth. You almost never touch
the components. Common edits:

| Want to…                | Do this in `src/data/content.js`                          |
| ----------------------- | --------------------------------------------------------- |
| Add / edit a project    | Add an object to `projects.items` (keep the same keys)    |
| Add a service           | Add an item to a track in `services.tracks`               |
| Add a new service track | Add a new object to `services.tracks` (auto-creates a tab)|
| Add a skill             | Add `{ name }` to a group in `stack.groups`               |
| Add a skill group       | Add a new key under `stack.groups` (auto-creates a column)|
| Change metrics          | Edit `hero.metrics` / `impact.items`                      |
| Update contact links    | Edit `profile` and `contact.channels`                     |
| Hide testimonials       | Set `features.testimonials = false`                       |

Each array drives its section via `.map()`, so the layout updates itself — add a
project and a new card appears, add a track and a new tab appears.

## Structure

```
src/
  data/content.js              # ← ALL content lives here (edit this)
  hooks/
    useReveal.js               # reveal-on-scroll (IntersectionObserver, no lib)
    useTheme.js                # dark/light, synced to localStorage + <html>
  components/
    primitives/                # reusable, props-only building blocks
      Section.jsx              # section shell: anchor, numbered header, reveal
      Card.jsx                 # generic surface
      Pill.jsx                 # tag chip (skills / tech)
    sections/                  # one component per page section, each maps data
      Header.jsx  Hero.jsx  Impact.jsx  Stack.jsx  Projects.jsx
      Services.jsx  Trust.jsx  Process.jsx  Testimonials.jsx
      Contact.jsx  Footer.jsx
  styles/global.css            # the entire design system
  App.jsx                      # composes the sections in order
  main.jsx                     # React entry
```

## Design notes (why it doesn't read as "AI-generated")

- Serif display type + a single terracotta accent (no purple→blue gradient hero).
- Numbered sections (01–07), mono eyebrows, hairline rules — an editorial system.
- Subtle CSS paper grain and an off-center hero glow for a hand-made feel.
- Services use a three-track tab toggle, turning the dual identity into a feature.
- Respects `prefers-reduced-motion` and `prefers-color-scheme`.

## Theme

Dark by default; users can toggle to light (persisted in `localStorage`). The
initial theme is set by a tiny inline script in `index.html` to avoid a flash.
