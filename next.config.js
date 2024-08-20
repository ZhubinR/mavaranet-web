
const cspHeader = `
    default-src 'self' back.mavaranet.net;
    frame-src https://www.google.com/;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' back.mavaranet.net blob: data:;
    font-src 'self' data:;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `
/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'back.mavaranet.net',
            port: '',
          },
        ],
      },

    i18n: {
        locales: ['en', 'fa'],
        defaultLocale: 'en',
    },
    async headers() {
        return [
            {
                source: '/',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                ],
            },

            {
                source: '/:path*',
                headers: [
                    {
                        key: 'HSTS',
                        value: 'there',
                    },
                ],
            },

            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                ],
            },
            {
                source: '/(.*)',
                headers: [
                  {
                    key: 'Content-Security-Policy',
                    value: cspHeader.replace(/\n/g, ''),
                  },
                ],
              },
        ]
    },
    async redirects() {
        return [
          {
            source: '/wp-json',
            destination: '/',
            permanent: true,
          },
          {
            source: '/portfolios/test01',
            destination: '/',
            permanent: true,
          },
          {
            source: '/service/%D8%B3%D8%A6%D9%88-%D8%B3%D8%A7%DB%8C%D8%AA',
            destination: '/',
            permanent: true,
          },
          {
            source: '/testimonial/%D9%87%D9%88%D9%85%D9%86-%D8%B9%D8%B4%D9%82%DB%8C',
            destination: '/',
            permanent: true,
          },
          {
            source: '/categories/dental',
            destination: '/',
            permanent: true,
          },
          {
            source: '/portfolios/pouya-lab',
            destination: '/',
            permanent: true,
          },
          {
            source: '/team',
            destination: '/',
            permanent: true,
          },
          {
            source: '/wp-content/uploads/2023/06/img-mavaranet.webp',
            destination: '/',
            permanent: true,
          },
          {
            source: '/wp-content/uploads/2021/09/hendesi-darmane-varis.webp',
            destination: '/',
            permanent: true,
          },
          {
            source: '/mavaranet',
            destination: '/',
            permanent: true,
          },
          {
            source: '/author/mavaranet',
            destination: '/',
            permanent: true,
          },
          {
            source: '/careers',
            destination: '/',
            permanent: true,
          },
          {
            source: '/comments/feed',
            destination: '/',
            permanent: true,
          },
          {
            source: '/wp-content/uploads/2022/06/%D8%A7%D9%85%D9%86%DB%8C%D9%88%D8%B3%D9%86%D8%AA%D8%B2.webp',
            destination: '/',
            permanent: true,
          },
          {
            source: '/portfolio/%D9%87%D9%88%D9%85%D9%86-%D8%B9%D8%B4%D9%82%DB%8C',
            destination: '/',
            permanent: true,
          },
          {
            source: '/portfolio/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%D9%85%D9%87%D8%B1%D8%A7%D9%81%D8%B1%D9%88%D8%B2',
            destination: '/',
            permanent: true,
          },
        ];
      },
}

module.exports = nextConfig



