import type { APIRoute } from 'astro';
import { projects } from '@/data/projects';

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://example.github.io');
  const routes = ['','work/','about/','resume/', ...projects.map((project) => `projects/${project.id}/`)];
  const urls = ['zh', 'en'].flatMap((lang) => routes.map((route) => new URL(`${lang}/${route}`, base).href));
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
