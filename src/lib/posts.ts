import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Published posts, newest first. Drafts show up in `npm run dev` only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Posts grouped by year, newest year first. */
export function byYear(posts: Post[]): [number, Post[]][] {
  const groups = new Map<number, Post[]>();
  for (const p of posts) {
    const y = p.data.pubDate.getUTCFullYear();
    groups.set(y, [...(groups.get(y) ?? []), p]);
  }
  return [...groups];
}

export function formatDate(date: Date, style: 'long' | 'short' = 'long') {
  return date.toLocaleDateString('en-US', {
    year: style === 'long' ? 'numeric' : undefined,
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function readingTime(body = '') {
  const words = body.trim().split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}
