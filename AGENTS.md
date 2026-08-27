# Repository Guide

- This is a single-package React 18 + TypeScript + Vite app; run commands from the repository root with npm.
- Install with `npm install`; keep `package-lock.json` in sync when dependency versions change.
- Use `npm run dev` for local development, `npm run host` for network access, and `npm run preview` to serve a production build.
- There is no test script or test suite. The required focused checks are `npm run lint` and then `npm run build` (`tsc -b` runs before `vite build`).
- The runtime entrypoint is `src/main.tsx`: React Router mounts `Root` at `/`, with `Index` as the index route.
- `src/components/sections.tsx` composes the one-page portfolio; `src/components/projects.tsx` renders project cards; `src/Root.tsx` owns the theme provider and router outlet.
- Portfolio content is maintained in `src/constants.ts` and exposed through `src/data/portfolio.ts`; change those data structures rather than duplicating copy in components.
- Most visual styling and responsive behavior is in `src/index.css`; Tailwind is configured for `index.html` and `src/**/*.{ts,tsx,js,jsx}` through `tailwind.config.js` and PostCSS.
- Use the configured `@/*` alias for `src/*` imports. Assets in `public/` are served from the site root, so use paths such as `/profile.jpg`, `/cv.pdf`, or `/thumbnails/vertex.png`.
