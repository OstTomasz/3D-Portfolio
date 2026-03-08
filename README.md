# 3D Developer Portfolio

An interactive 3D portfolio built with React 19, Three.js, and GSAP. Started as a follow-along with a [JavaScript Mastery tutorial](https://www.youtube.com/watch?v=E-fdPfRxkzQ&t=1s) — then adapted to match my own standards and learning goals.

🔗 **[Live Demo](https://tomasz-ostaszewski-portfolio.vercel.app/)**

---

## From Tutorial to My Own Project

The original tutorial uses JavaScript throughout. I used it as a foundation to learn the 3D stack, then rebuilt key parts of the project with changes I cared about:

| What changed                                    | Why                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| JavaScript (83%) → TypeScript (80%)             | Wanted type safety for Three.js objects — silent runtime errors inside render loops are hard to debug |
| Babel → SWC (`@vitejs/plugin-react-swc`)        | Faster Hot Module Replacement when working with heavy 3D assets                                       |
| Single `tsconfig` → split into 3 files          | Separates build environment types (Node/Vite) from app types — avoids type leaks                      |
| Added `gltfjsx` + Draco compression             | Reduced model size from ~486 KB to ~40 KB; converted `.glb` files to typed React components           |
| Custom hooks (`useScrolled`, `useGlowingCards`) | Pulled interaction logic out of components to keep them focused and testable                          |
| Added full favicon set + `site.webmanifest`     | Small thing, but makes it feel like a finished product                                                |

> **React Compiler** — supported in React 19 but intentionally left out. It noticeably slowed down dev builds with heavy 3D dependencies. I'd rather have a fast feedback loop during development.

---

## What the Portfolio Actually Does

This isn't just a "landing page with a 3D model" — the 3D layer is woven throughout the experience:

- **Interactive developer room** — a 3D scene with layered lighting: ambient, directional, spot, and `RectAreaLight` for soft, realistic shadows. An invisible `PlaneGeometry` acts as a shadow catcher so models don't appear to float
- **Selective Bloom** — post-processing effect applied only to monitor screens, so they emit a glow without affecting the rest of the scene
- **3D tech icons** — floating, orbit-controllable icons for each technology I use
- **Scroll-driven career timeline** — GSAP `ScrollTrigger` animates the timeline as you scroll through the experience section
- **Cursor-tracking glow cards** — uses `Math.atan2` to calculate the angle between the cursor and each card's center, then maps it to a CSS gradient border that follows the mouse
- **Animated hero text** — CSS keyframes cycle through _ideas / code / designs_ in the hero section
- **Contact form** — integrated with EmailJS; no backend needed

---

## Tech Stack

**Core:** React 19 · TypeScript · Vite + SWC · Tailwind CSS v4

**3D:** Three.js · React Three Fiber · Drei · React Three Postprocessing

**Animation:** GSAP + ScrollTrigger

**Other:** EmailJS · React CountUp · React Responsive

---

## Getting Started

```bash
git clone https://github.com/OstTomasz/3D-Portfolio.git
cd 3D-Portfolio
npm install
npm run dev
```

App runs at **http://localhost:3000**

To enable the contact form, create a `.env` file with your [EmailJS](https://www.emailjs.com/) keys:

```env
VITE_APP_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_APP_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_APP_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxx
```

---

## Project Structure

```
src/
├── components/   # Reusable UI and 3D components
├── constants/    # All content in one place — easy to update
├── hooks/        # useScrolled, useGlowingCards
└── sections/     # Hero, About, Projects, Experience, Contact
```

---

_Tutorial by [JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery) — this is my own adaptation, not a fork._
