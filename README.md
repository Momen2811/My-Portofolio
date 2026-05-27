# Momen Mohamed — Portfolio

A modern, animated portfolio website built with React, Vite, and plain CSS. Features a custom cursor, scroll-triggered animations, 3D card tilts, and a fully responsive layout.

**Live demo:** _(deploy and add the URL here)_

## Tech Stack

- **React 18** + **Vite 5**
- Plain CSS (no Tailwind) with CSS variables
- IntersectionObserver for scroll animations
- Custom hooks: `useScrollAnimation`, `useCountUp`

## Features

- Custom animated cursor (desktop)
- Scroll progress indicator
- Staggered hero entrance animations
- Floating particles + ambient gradient orbs
- Animated gradient text
- Count-up statistics
- 3D project card tilt + mouse spotlight
- Shimmer sweep on skill cards
- Timeline draw animation
- Fully responsive (375px → 1440px+)

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/      # Section components + Cursor + ScrollProgress
├── hooks/           # useScrollAnimation, useCountUp
├── App.jsx
├── main.jsx
└── index.css        # Global styles + CSS variables
public/
├── cv.pdf           # Resume download
└── favicon.svg
```

## Contact

- **Email:** Momenmoussa7@gmail.com
- **LinkedIn:** [momen-moussa](https://www.linkedin.com/in/momen-moussa)
- **GitHub:** [Momen2811](https://github.com/Momen2811)

---

© Momen Mohamed
