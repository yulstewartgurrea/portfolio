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
| All text, links, projects, work history          | `src/data/portfolio.ts`                  |
| Colors and font                                 | `src/app/globals.css`, `src/app/layout.tsx` |
| Order of sections on the page                   | `src/app/page.tsx`                       |
| Top navigation bar                              | `src/components/Header.tsx`              |
| Each section                                    | `src/components/<Name>Section.tsx`       |
| Icons                                           | `src/components/Icons.tsx`               |
| Images / resume PDF                             | `public/images/`, `public/docs/`         |

## Adding a project

Add an entry to the `projects` list in `src/data/portfolio.ts`.
To make its "View project" link jump to the matching job in "Professional experience",
give that job (or engagement) in the `experiences` list the same `id`.
Without a matching `id`, the card simply has no "View project" link.
A new `category` value automatically becomes a new filter button.
To show a screenshot or workflow diagram, put the image in `public/images/projects/`
and set `image: "/images/projects/your-file.png"` (16:10 works best).
Leave `image` out for confidential work and the card stays text-only.

## Deploy

Push to GitHub and import the repo on Vercel. Every push to `main` redeploys automatically.
