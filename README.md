
# Vida Digital - Immersive Tech Store

Landing page for Vida Digital (Ibarra, Ecuador) with animated hero, services, stats, brands marquee, and contact section.

## Features
- Animated hero with particle canvas and parallax motion
- Smooth section navigation from the navbar
- Services cards with motion and hover effects
- Brands marquee loop with continuous scroll
- Stats counters and contact footer

## Tech Stack
- React 19 + Vite
- Tailwind via CDN config in `index.html`
- Framer Motion for animations
- Lucide icons

## Getting Started
1. Install dependencies:
   `npm install`
2. Run the dev server:
   `npm run dev`

## Scripts
- `npm run dev` - start dev server
- `npm run build` - build for production
- `npm run preview` - preview the production build

## Project Structure
- `index.html` - Tailwind config, global styles
- `index.tsx` - app entry
- `App.tsx` - main layout and sections
- `components/` - UI sections (Hero, About, Services, Stats, Brands, Footer)
- `constants.ts` - shared content and data

## Notes
- Navbar links to external store for "Productos" and "Tienda".
- Section anchors use smooth scrolling and scroll offset.
