export const SITE_TITLE = "Auto Indent's Blog";
export const SITE_TAGLINE = 'Notes on software, tools and the things I am learning.';
export const SITE_DESCRIPTION = SITE_TAGLINE;
export const AUTHOR = 'Auto Indent';

/** Visual theme, defined in src/styles/themes/technical.css. */
export const THEME = 'technical';

/** Prefix a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
