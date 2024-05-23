
export default function sitemap() {

  return [
    {
      url: 'https://mavaranet.net',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://mavaranet.net/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mavaranet.net/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mavaranet.net/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    {
      url: `https://mavaranet.net/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.25,
    },
  ]
}