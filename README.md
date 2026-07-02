# Maryam Hassan — Premium Developer Portfolio

A production-ready personal portfolio built with **React (Vite)**, **Tailwind CSS**,
and **Framer Motion**, in a purple-pink gradient, glassmorphic aesthetic.

## Quick Start

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Where to edit content

Every section pulls its content from small files in `src/data/` — edit these
first, you rarely need to touch the components themselves:

| File | Powers |
|---|---|
| `src/data/navLinks.js` | Navbar links |
| `src/data/socials.js` | Social icons (Hero, Contact, Footer) |
| `src/data/skills.js` | Skills section categories + progress bars |
| `src/data/projects.js` | Projects grid + filter tags |
| `src/data/experience.js` | Experience timeline, education, stats |

Your name, title, and bio live directly in `src/components/Hero/Hero.jsx`
(look for "Ayesha Khan" and the `TypeAnimation` sequence).

## Component map (modular by section)

```
src/components/
  Navbar/        Sticky glass navbar, active-section highlight, mobile menu
  Hero/           Landing section, typing effect, floating profile card
  About/          Journey, education, animated stat counters
  Skills/         Categorized skill cards with animated progress bars
  Projects/       Filterable project grid + tilt hover cards
  Experience/     Animated vertical timeline
  Contact/        EmailJS-powered form with validation + toast
  Footer/         Gradient divider + social links
  ThemeToggle/    Sun/moon animated dark-mode switch
  BackgroundFX/   Gradient mesh, blobs, particles, dark-mode stars, optional snow
  CursorGlow/     Mouse-following ambient glow (desktop only)
  Loader/         Initial page load screen
  UI/             ScrollProgress bar, BackToTop button, SEO (Helmet)
```

## Resume download

Replace `public/Maryam Hassan Resume.pdf` with your real resume — the "Download Resume"
buttons in the Navbar and Hero already point to `/Maryam Hassan Resume.pdf`.

## Theme system

- Toggle button lives in the Navbar (and mirrors in mobile menu)
- Preference is saved to `localStorage` and respects system preference on first visit
- Implemented via `src/context/ThemeContext.jsx` + Tailwind's `class` dark mode strategy

## Snowfall / winter mode (optional)

`src/components/BackgroundFX/SnowfallFX.jsx` is built but not mounted by default.
To enable it, import it into `App.jsx` and render `<SnowfallFX enabled={true} />`,
or wire `enabled` to a toggle/state of your choice.

## Deployment

This is a standard Vite app — deploy the `dist/` folder (after `npm run build`)
to Vercel, Netlify, Cloudflare Pages, or any static host.

## Tech stack

React 18 · Vite · Tailwind CSS · Framer Motion · React Icons · Lucide React ·
React Type Animation · React Scroll · React Helmet Async · EmailJS · React Hot Toast ·
Lenis (smooth scroll) · React Snowfall (optional)
