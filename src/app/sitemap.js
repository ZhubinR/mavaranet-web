
// export default function sitemap() {

//   return [
//     {
//       url: 'https://mavaranet.net',
//       lastModified: new Date(),
//       changeFrequency: 'yearly',
//       priority: 1,
//     },
//     {
//       url: 'https://mavaranet.net/about',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://mavaranet.net/contact',
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: 'https://mavaranet.net/blog',
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.5,
//     },
//     {
//       url: `https://mavaranet.net/portfolio`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.25,
//     },
//   ]
// }
// const fs = require('fs');
// const fetch = require('node-fetch');

import { reqUrl } from "./config";

const fetchPosts = async () => {
  const res = await fetch(`${reqUrl}/posts?_fields=slug,date&per_page=100`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

const fetchServices = async () => {
  const res = await fetch(`${reqUrl}/services?_fields=slug,date&per_page=100`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

const fetchPortfolio = async () => {
  const res = await fetch(`${reqUrl}/portfolios?_fields=slug,date&per_page=100`);
  if (!res.ok) {
    throw new Error('Failed to fetch portfolios');
  }
  return res.json();
};
const fetchEvent = async () => {
  const res = await fetch(`${reqUrl}/events?_fields=slug,date&per_page=100`);
  if (!res.ok) {
    throw new Error('Failed to fetch portfolios');
  }
  return res.json();
};

export default async function sitemap() {
  const blogs = await fetchPosts()
  const portfolios = await fetchPortfolio()
  const events = await fetchEvent()
  const services = await fetchServices()


  return [
    {
      url: 'https://mavaranet.net',
      lastModified: new Date().toISOString(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mavaranet.net/about',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mavaranet.net/contact',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mavaranet.net/blog',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: 'https://mavaranet.net/portfolio',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...blogs.map(post => ({
      url: `https://mavaranet.net/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.25,
    })),
    ...portfolios.map(portfolio => ({
      url: `https://mavaranet.net/portfolio/${portfolio.slug}`,
      lastModified: new Date(portfolio.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.25,
    })),
    ...services.map(service => ({
      url: `https://mavaranet.net/service/${service.slug}`,
      lastModified: new Date(service.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.25,
    })),
    ...events.map(event => ({
      url: `https://mavaranet.net/event/${event.slug}`,
      lastModified: new Date(event.date).toISOString(),
      changeFrequency: 'weekly',
      priority: 0.25,
    }))
  ];
}


// const buildSitemap = async () => {
//     try {
//         const blogs = await fetchPosts();
//         const portfolios = await fetchPortfolio();
//         const sitemap = generateSitemap(blogs, portfolios);

//         fs.writeFileSync('public/sitemap.xml', sitemap, 'utf8');
//         console.log('Sitemap generated successfully');
//     } catch (error) {
//         console.error('Error generating sitemap:', error);
//     }
// };

// buildSitemap();
