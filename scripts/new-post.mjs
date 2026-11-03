#!/usr/bin/env node
// Usage: npm run new -- "My post title"
import { existsSync, writeFileSync } from 'node:fs';

const title = process.argv.slice(2).join(' ').trim();
if (!title) {
  console.error('Usage: npm run new -- "My post title"');
  process.exit(1);
}

const slug = title.toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-');
const file = `src/content/blog/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  file,
  `---\ntitle: ${JSON.stringify(title)}\ndescription: ""\npubDate: ${today}\ntags: []\ndraft: true\n---\n\nStart writing here.\n`,
);
console.log(`Created ${file}`);
