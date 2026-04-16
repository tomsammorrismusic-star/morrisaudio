# Sound Recordist Portfolio

A professional portfolio website for a sound recordist, built with TanStack Start and deployed on Netlify.

## Features

- **Hero landing page** with stats, services overview, and call-to-action
- **Revolving 3D video wheel** showcasing featured productions — hover to pause
- **Contact page** with direct email button, phone/location details, and a Netlify-powered contact form
- **Experience & CV page** with full work history, skills, and education
- **Productions page** listing notable film and documentary credits

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) |
| Router | TanStack Router v1 (file-based routing) |
| Frontend | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Content | Content Collections (type-safe markdown) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Getting Started

```bash
# Install dependencies
npm install

# Start local dev server (uses Netlify CLI for full feature parity)
npm run dev

# Build for production
npm run build
```

The dev server runs at `http://localhost:8888`.

## Content

All portfolio content lives in the `content/` directory as markdown files with frontmatter:

- `content/jobs/` — work experience entries
- `content/education/` — education history
- `content/projects/` — notable productions

Edit these files to update the CV and productions pages without touching any code.

## Customisation

- **Name & branding** — update `src/components/Header.tsx` and `src/routes/__root.tsx`
- **Contact details** — update email/phone in `src/routes/contact.tsx` and `src/components/Header.tsx`
- **Video wheel items** — edit the `videoItems` array in `src/components/VideoWheel.tsx`
- **Services** — edit the `services` array in `src/routes/index.tsx`
