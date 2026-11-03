export const SITE_TITLE = 'My Blog';
export const SITE_DESCRIPTION = 'Notes, ideas and things I am learning.';
export const AUTHOR = 'AutoIndent';

/** Prefix a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
