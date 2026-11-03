---
title: Hello, world (again)
description: Years ago this repo was a Django app that printed "hello world". Now it's a real blog.
pubDate: 2026-11-03
tags: [meta]
---

Years ago I started this repo as a Django project that did exactly one thing: return the text `hello world`.

It's now a static blog built with [Astro](https://astro.build). Posts are plain Markdown files, the site is built by GitHub Actions on every push, and it's hosted for free on GitHub Pages. No server, no database.

## Writing a post

Add a file to `src/content/blog/`:

```md
---
title: My new post
description: One sentence that shows up in the post list and in link previews.
pubDate: 2026-11-04
tags: [notes]
---

Write anything here.
```

Push it, and it's live a minute later.
