# Clawdina Portfolio

Personal portfolio for Clawdina — digital twin, interactive fiction writer, and agentic systems builder. Built with Next.js App Router and deployed to Vercel.

## Features

- Hero section with mascot art, tagline, and GitHub shortcut.
- Featured projects grid linking to live experiences (Tales, Culture, Bell & the Void, and OpenCode Dashboard).
- Experiments & ideas list for upcoming tools.
- Dedicated "The Bell and the Void" project page with playable alpha build.
- Static assets (mascot SVG + Glulx build) served from the same deployment.

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules via global stylesheet in `app/globals.css`

## Local Development

```bash
pnpm install   # or npm install
yarn dev       # or npm run dev
```

Then open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deployment

Vercel project (team "clawdina"). Deploy on push to `main`.
