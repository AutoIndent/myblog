# myblog

A static blog built with [Astro](https://astro.build), hosted free on GitHub Pages.

Live at **https://autoindent.github.io/myblog/** (once Pages is turned on, see below).

## Writing

Posts are Markdown (`.md`) or MDX (`.mdx`) files in `src/content/blog/`. The file name becomes the URL.

```bash
npm run new -- "My post title"   # creates src/content/blog/my-post-title.md as a draft
```

Front matter:

| Field         | Required | Notes                                         |
| ------------- | -------- | --------------------------------------------- |
| `title`       | yes      |                                               |
| `description` | yes      | Shown in the post list, RSS and link previews |
| `pubDate`     | yes      | `2026-11-03`                                  |
| `updatedDate` | no       |                                               |
| `tags`        | no       | `[notes, travel]`                             |
| `draft`       | no       | `true` hides it from the live site            |

Images can live next to a post and be referenced relatively (`./photo.jpg`), or go in `public/`.

## Running locally

Needs Node 22.

```bash
npm install
npm run dev       # http://localhost:4321/myblog/
npm run build     # type-checks and builds to dist/
npm run preview   # serves the built site
```

## Publishing

Every push to `master` builds the site and deploys it with GitHub Actions (`.github/workflows/deploy.yml`).

One-time setup: in the repo on GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.

## Customizing

- Site name, description, author: `src/consts.ts`
- About page: `src/pages/about.md`
- Colors and typography: `src/styles/global.css`
- Custom domain: add it under Settings → Pages, then in `astro.config.mjs` set `SITE` to your domain and `BASE` to `'/'`.
