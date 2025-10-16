## Happy Diwali – Personalized Greeting Page

A festive, animated Diwali greeting built with React + Vite and Tailwind CSS. It asks for the recipient’s name once, then shows an immersive Diwali scene with fireworks, sparkles, and rotating wishes. Includes a fixed footer credit link.

### Highlights
- Personalized greeting with name prompt (stored in sessionStorage to avoid repeated prompts)
- Animated background: starfield, ambient glows, sparkles, and ground “bomb” bursts
- Rotating set of wishes that changes every few seconds
- Fully responsive layout: extra‑small to ultra‑wide screens
- Modern glass/gradient styling and a fixed footer credit link

## Tech Stack
- React (Vite)
- Tailwind CSS

## Prerequisites
- Node.js 18+ (recommended)
- npm (bundled with Node)

## Getting Started
1) Install dependencies
```bash
npm install
```

2) Start the dev server
```bash
npm run dev
```
- Open the printed local URL (usually `http://localhost:5173`).
- On first load, you’ll be prompted for a name. It is saved in `sessionStorage` under `diwali-user-name`. To test again, clear site data or run in a private window.

## Build for Production
```bash
npm run build
```
The production build will be output to the `dist` folder.

To preview the production build locally:
```bash
npm run preview
```

## Deploy
- Vercel: Import the repository; framework preset “Vite”. Default build command `npm run build`, output directory `dist`.
- Netlify: New site from Git, build `npm run build`, publish directory `dist`.
- GitHub Pages: Use a static hosting action to publish `dist`.

## Project Structure (key files)
- `src/Pages/HappyDiwali.jsx`: Main page with all animations and the wishes rotator
- `src/Pages/Footer.jsx`: Fixed footer with the “Made by Shavu Parmar” link
- `src/index.css`: Tailwind import and custom keyframes/utilities for animations
- `src/main.jsx`: Router and app entry
- `index.html`: Vite HTML entry

## Customization
- Change wishes: edit the `wishes` array in `src/Pages/HappyDiwali.jsx`.
- Change rotation speed: adjust the `setInterval` delay (ms) where `wishIndex` is updated.
- Tweak colors/contrast: update gradients or overlay in `src/index.css` (e.g., `.diwali-overlay`, background gradients).
- Adjust animation density: modify array lengths creating stars, sparkles, or bombs in `HappyDiwali.jsx`.
- Footer link/text: edit `src/Pages/Footer.jsx`.

## How To Copy/Reuse This Template
1) Copy the entire repository folder to a new location, or click “Use this template” in your Git hosting.
2) Update `package.json` name, and the footer link/text as needed.
3) Run `npm install` and `npm run dev` to verify.

## Troubleshooting
- I’m prompted twice for my name: We store the name in `sessionStorage`. If you still see a prompt again, ensure your browser isn’t clearing storage on refresh or disable React Strict Mode double‑invoke in development.
- Blank screen or Tailwind classes not applying: Confirm `src/index.css` is imported in `src/main.jsx`. Ensure Node 18+ is used.
- Animations are heavy on low‑end devices: Reduce the counts in arrays for stars, sparkles, and bombs.

## Scripts
- `npm run dev`: Start Vite dev server with HMR
- `npm run build`: Build production bundle
- `npm run preview`: Preview the build locally

---
Made with ❤️ by shavuparmar
