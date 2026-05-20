# AntiXSS Docs

Production-ready Vite documentation site for [`voku/anti-xss`](https://github.com/voku/anti-xss).

- Live site: https://voku.github.io/anti-xss_docs/
- Package: https://packagist.org/packages/voku/anti-xss
- Source library: https://github.com/voku/anti-xss

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- GitHub Pages + GitHub Actions

## Local development

### Prerequisites

- Node.js 20+
- npm 10+

### Install

```bash
npm install
```

### Start the dev server

```bash
npm run dev
```

The site runs at `http://localhost:3000`.

## Available scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

## Production deployment

This repository is configured for GitHub Pages deployment from GitHub Actions.

- Push to `main`
- GitHub Actions runs lint + build
- The generated `dist/` artifact is deployed to GitHub Pages automatically

The Vite production build uses the repository base path:

```text
/anti-xss_docs/
```

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml
├── public/
│   ├── favicon.svg
│   └── social-preview.svg
├── src/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── components/CodeBlock.tsx
├── index.html
├── package.json
└── vite.config.ts
```

## Key files

- `/src/App.tsx` — landing page content and section layout
- `/src/components/CodeBlock.tsx` — reusable code snippet renderer
- `/src/index.css` — theme tokens and global styling
- `/index.html` — SEO, Open Graph, favicon, and social metadata
- `/vite.config.ts` — Vite build config and GitHub Pages base path
- `/.github/workflows/deploy-pages.yml` — automated GitHub Pages deployment

## Key Files Detector helper prompt

Use this prompt when onboarding another agent or reviewing the repo:

```text
Act as a Key Files Detector for this repository.

Goal:
- Identify the smallest set of files needed to understand, modify, build, and deploy the AntiXSS docs site safely.

Focus on:
- Entry points
- Main UI composition
- Shared UI components
- Global styling/theme files
- Build and deployment configuration
- Static assets affecting SEO or social previews

Expected output:
1. A short prioritized list of key files
2. One sentence per file explaining why it matters
3. Any risky files where changes could affect deployment, metadata, or production output
```

## SEO and social metadata

The site includes:

- favicon support
- description metadata
- canonical URL
- Open Graph tags
- Twitter summary card metadata
- a repository-hosted social preview asset

## Notes

- No runtime API keys or secrets are required for the current site
- The project is a static frontend build with no server component
- `dist/` is generated output and should not be edited manually
