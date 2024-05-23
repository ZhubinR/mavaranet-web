
const cspHeader = `
    default-src 'self' back.mavaranet.net;
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' back.mavaranet.net blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
    `
/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['back.mavaranet.net'],
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

}

module.exports = nextConfig



