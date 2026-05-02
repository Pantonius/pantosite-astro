import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  const projects = await getCollection('projects');

  let unifiedItems = posts.map((post) => ({
    ...post.data,
    link: `/blog/${post.id}/`,
  })).concat(projects.map((project) => ({
    ...project.data,
    link: `/projects/${project.id}/`
  })));
  unifiedItems = unifiedItems.sort((a, b) => b.pubDate - a.pubDate);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: unifiedItems,
  });
}
