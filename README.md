# Pranjal Lokhande Portfolio

A personal portfolio website showcasing game design, full-stack development, and creative projects—complete with an interactive galaxy background, sparkly highlights, and smooth 3D-like scene transitions.

---

## 🌟 Story

I’m Pranjal Lokhande, a creative technologist at the crossroads of storytelling, design, and code. After studying Computer Science & Engineering and earning a Master’s in Video Game Design, I’ve spent 3+ years building games, apps, websites, and tools. This portfolio captures my journey—from crafting pipelines in Unreal Engine to designing immersive web experiences—and serves as both a resume and a living demo of the interactive techniques I love.

---

## 🚀 Tech Stack

- **Framework & Build**  
  - React (with [Vite](https://vitejs.dev/) for lightning-fast dev & build)  
  - TypeScript  
- **Styling**  
  - Tailwind CSS  
  - CSS variables & `@keyframes` for subtle text glows  
- **Animations & Effects**  
  - Framer Motion for page transitions & staggered reveals  
  - p5.js (via [`@p5-wrapper/react`](https://github.com/and-who/react-p5-wrapper)) for the galaxy, aurora, and sparkle canvases  
  - Custom canvas effects in plain Canvas 2D (About-card sparkles)  
- **Icons & Images**  
  - Icons8 (self-hosted & optimized to WebP)  
  - Tailwind’s `bg-[url()]` for dynamic backgrounds  
- **Deployment**  
  - Hosted on Vercel  
  - CI/CD via GitHub Actions (if applicable)  

---

## ✨ Features

- **Home Scene**  
  - Interactive galaxy background that reacts to mouse movement  
  - Pulsing, olive-green aurora waves  
  - Typewriter-style, staggered text reveals with sparkling highlights  
- **Projects**  
  - Filterable game & web projects with live video thumbnails (auto-play only in view via Intersection Observer)  
  - Detailed modal for each project: video/iframe, overview, tools, features, responsibilities  
- **About**  
  - Profile image with parallax hover  
  - Scrollable “About Me” card with custom sparkle canvas overlay  
- **Skills**  
  - Three-column, scrollable skill categories  
  - Animated entry via Framer Motion  
- **Contact**  
  - Custom themed form (powered by FormSubmit.co)  
  - Contact links using icon buttons  
- **Responsive & Accessible**  
  - Fully responsive Tailwind layout across mobile/tablet/desktop  
  - Lazy-loaded images, code-split scenes, and canceled canvas loops to optimize performance  
  - Semantic HTML, ARIA labels on nav, and keyboard-focusable controls  

---

## 📦 Installation & Local Dev

1. **Clone & Install**  
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   npm install
2. **Run locally**
   ```bash
   npm run dev]

## Built with ❤️ by Pranjall
