# Cyberpunk 3D Portfolio — Lakshit Pareek

A responsive portfolio built with React, Vite, Three.js / React Three Fiber, GSAP ScrollTrigger, and Lucide icons.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- VS Code

## Run locally
1. Extract the ZIP file.
2. Open the extracted `cyberpunk-3d-portfolio` folder in VS Code.
3. Open Terminal → New Terminal.
4. Install packages:

   ```bash
   npm install
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open the local URL Vite prints, usually `http://localhost:5173`.

## Customize before publishing
Search in `src/App.jsx` and replace:
- `lakshitpareek@example.com` with your real email.
- `https://www.linkedin.com/` with your actual LinkedIn profile URL.
- Placeholder GitHub URLs for Email Spam Detection and Cloud Web App with the real repositories, or remove those project cards until the repos exist.
- Project descriptions and achievements so they accurately reflect finished work.
- Add your resume PDF to `public/resume.pdf` and change the resume button in `src/App.jsx` to:

  ```jsx
  <a className="button button-primary" href="/resume.pdf" download>
    <Download size={16} /> DOWNLOAD MY RESUME
  </a>
  ```

## Production build
```bash
npm run build
npm run preview
```
The production site is output to `dist/`.

## Deploy to Vercel
1. Create a GitHub repository and push this project.
2. Sign in to Vercel and choose **Add New → Project**.
3. Import the repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

You can also deploy the `dist/` folder to Netlify. For Netlify, use build command `npm run build` and publish directory `dist`.

## Notes
- The 3D orb is rendered locally with Three.js. Google Fonts are loaded from Google Fonts, so the font appearance falls back if offline.
- The contact form is represented by email and social links, so no backend is needed. Replace the placeholder email before going live.
- Animation timing respects reduced-motion preferences at the CSS level; GSAP motion can be further disabled for users who prefer reduced motion if desired.
- This starter is intended to be customized. Do not claim that placeholder project links or contact details are real.
