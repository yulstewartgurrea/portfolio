# Portfolio

A one-page portfolio built with Next.js, TypeScript and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where things are

| What you want to change                         | File                                     |
| ----------------------------------------------- | ---------------------------------------- |
| All text, links, services, projects             | `src/data/portfolio.ts`                  |
| Colors and font                                 | `src/app/globals.css`, `src/app/layout.tsx` |
| Order of sections on the page                   | `src/app/page.tsx`                       |
| Top navigation bar                              | `src/components/Header.tsx`              |
| Each section                                    | `src/components/<Name>Section.tsx`       |
| Icons                                           | `src/components/Icons.tsx`               |
| Images / resume PDF                             | `public/images/`, `public/docs/`         |

## Adding a project

Add an entry to the `projects` list in `src/data/portfolio.ts`.
It automatically shows up in both "Selected projects" and "Project milestones".
A new `category` value automatically becomes a new filter button.
For `icon`, pick one of the names at the bottom of `src/components/Icons.tsx`.

## Deploy

Push to GitHub and import the repo on Vercel. Every push to `main` redeploys automatically.
