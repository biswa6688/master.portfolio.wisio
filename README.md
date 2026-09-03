# Cinematic 3D Developer Portfolio

Portfolio site for **Biswaranjan Nayak** — Fullstack Developer, 14+ years building web applications, enterprise software, communication systems, SDKs, and real-time technologies.

Built as a scroll-driven "engineering universe": nine cinematic scenes combining React Three Fiber 3D scenes with CSS/SVG-driven sequences.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 7** — build tooling
- **Tailwind CSS 4**
- **@react-three/fiber** + **@react-three/drei** + **three.js** — 3D scenes
- `vite-plugin-singlefile` — single-file production build

## Scenes

| # | Section | File |
|---|---------|------|
| 01 | Home / Workstation | [src/sections/Hero.tsx](src/sections/Hero.tsx), [src/components/three/HeroScene.tsx](src/components/three/HeroScene.tsx) |
| 02 | Engineering DNA | [src/sections/EngineeringDNA.tsx](src/sections/EngineeringDNA.tsx) |
| 03 | Tech Universe | [src/sections/TechUniverse.tsx](src/sections/TechUniverse.tsx), [src/components/three/TechConstellation.tsx](src/components/three/TechConstellation.tsx) |
| 04 | Career Journey | [src/sections/Career.tsx](src/sections/Career.tsx) |
| 05 | Education Pathway | [src/sections/Education.tsx](src/sections/Education.tsx) |
| 06 | Projects | [src/sections/Projects.tsx](src/sections/Projects.tsx) |
| 07 | Products | [src/sections/Products.tsx](src/sections/Products.tsx) |
| 08 | Architecture | [src/sections/Architecture.tsx](src/sections/Architecture.tsx) |
| 09 | Contact | [src/sections/Contact.tsx](src/sections/Contact.tsx) |

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build     # production build
npm run preview   # preview the production build
```

## Project Structure

```
src/
  components/       # shared UI (nav, cursor) and three.js scene components
  sections/         # one file per scroll scene
  data/content.ts   # profile, tech clusters, career, education, project data
  lib/              # theme context, scroll/parallax hooks
```
