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
    `;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "back.mavaranet.net",
        port: "",
      },
    ],
  },

  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },

      {
        source: "/:path*",
        headers: [
          {
            key: "HSTS",
            value: "there",
          },
        ],
      },

      {
        source: "/(.*)",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },

      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: cspHeader.replace(/\n/g, ""),
          },
        ],
      },

      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/wp-json",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolios/test01",
        destination: "/",
        permanent: true,
      },
      {
        source: "/service/%D8%B3%D8%A6%D9%88-%D8%B3%D8%A7%DB%8C%D8%AA",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/testimonial/%D9%87%D9%88%D9%85%D9%86-%D8%B9%D8%B4%D9%82%DB%8C",
        destination: "/",
        permanent: true,
      },
      {
        source: "/categories/dental",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolios/pouya-lab",
        destination: "/",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2023/06/img-mavaranet.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/2021/09/hendesi-darmane-varis.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/mavaranet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/author/mavaranet",
        destination: "/",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/wp-content/uploads/2022/06/%D8%A7%D9%85%D9%86%DB%8C%D9%88%D8%B3%D9%86%D8%AA%D8%B2.webp",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/%D9%87%D9%88%D9%85%D9%86-%D8%B9%D8%B4%D9%82%DB%8C",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/portfolio/%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9-%D9%85%D9%87%D8%B1%D8%A7%D9%81%D8%B1%D9%88%D8%B2",
        destination: "/",
        permanent: true,
      },
      {
        source:
          "/portfolio/%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B3%D8%AA-%D9%88-%D8%A7%D8%B3%D8%AA%D9%88%D8%B1%DB%8C-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85",
        destination: "/portfolio/%d8%b7%d8%b1%d8%a7%d8%ad%db%8c-%d9%be%d8%b3%d8%aa-%d9%88-%d8%a7%d8%b3%d8%aa%d9%88%d8%b1%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%87%D8%A7%DB%8C-%D9%84%D9%88%DA%AF%D9%88%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9",
        destination: "/portfolio/%d8%b7%d8%b1%d8%a7%d8%ad%db%8c-%d9%84%d9%88%da%af%d9%88%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%AC%D9%84%D9%88%D9%87%D9%87%D8%A7%DB%8C-%D8%A8%D8%B5%D8%B1%DB%8C-vfx",
        destination: "/portfolio/%d9%86%d9%85%d9%88%d9%86%d9%87-%d8%ac%d9%84%d9%88%d9%87-%d9%87%d8%a7%db%8c-%d8%a8%d8%b5%d8%b1%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%BE%D8%B1-%D8%A8%D8%A7%D8%B2%D8%AF%DB%8C%D8%AF-%D8%AA%D8%B1%DB%8C%D9%86-%D9%88%DB%8C%D8%AF%DB%8C%D9%88%D9%87%D8%A7%DB%8C-%D8%A7%DB%8C%D9%86%D8%B3%D8%AA%D8%A7%DA%AF%D8%B1%D8%A7%D9%85",
        destination: "/portfolio/%d9%be%d8%b1-%d8%a8%d8%a7%d8%b2%d8%af%db%8c%d8%af-%d8%aa%d8%b1%db%8c%d9%86-%d9%88%db%8c%d8%af%db%8c%d9%88%d9%87%d8%a7%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c-%d8%a7%db%8c%d9%86%d8%b3%d8%aa%d8%a7%da%af",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%B7%D8%B1%D8%A7%D8%AD%DB%8C-%D9%87%D8%A7%DB%8C-%DA%A9%D8%A7%D8%B1%D8%AA-%D9%88%DB%8C%D8%B2%DB%8C%D8%AA-%D9%88-%D8%B3%D8%AA-%D8%A7%D8%AF%D8%A7%D8%B1%DB%8C",
        destination: "/portfolio/%d9%86%d9%85%d9%88%d9%86%d9%87-%d8%b7%d8%b1%d8%a7%d8%ad%db%8c-%da%a9%d8%a7%d8%b1%d8%aa-%d9%88%db%8c%d8%b2%db%8c%d8%aa-%d9%88-%d8%b3%d8%aa-%d8%a7%d8%af%d8%a7%d8%b1%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:"/portfolio/%D8%B3%D8%A6%D9%88-%D8%B3%D8%A7%DB%8C%D8%AA-%D9%87%D8%A7%DB%8C-%DA%A9%D9%84%DB%8C%D9%86%DB%8C%DA%A9",
        destination: "/portfolio/%d8%b3%d8%a6%d9%88-%d8%b3%d8%a7%db%8c%d8%aa-%da%a9%d9%84%db%8c%d9%86%db%8c%da%a9",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%A7%D9%86%DB%8C%D9%85%DB%8C%D8%B4%D9%86-%D9%87%D8%A7%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C",
        destination: "/portfolio/%d8%a7%d9%86%db%8c%d9%85%db%8c%d8%b4%d9%86-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:"/portfolio/%D9%86%D9%85%D9%88%D9%86%D9%87-%D8%AA%DB%8C%D8%B2%D8%B1-%D9%87%D8%A7%DB%8C-%D8%AA%D8%A8%D9%84%DB%8C%D8%BA%D8%A7%D8%AA%DB%8C-%D9%BE%D8%B2%D8%B4%DA%A9%DB%8C",
        destination: "/portfolio/%d9%86%d9%85%d9%88%d9%86%d9%87-%d8%aa%db%8c%d8%b2%d8%b1-%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa%db%8c-%d9%be%d8%b2%d8%b4%da%a9%db%8c",
        permanent: true,
      },
      {
        source:
          "/blog/medical-website-design",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/medical-website-seo",
        destination: "/service/سئو-سایت-پزشکی",
        permanent: true,
      },
      
      {
        source: '/service/' + encodeURIComponent('محتوا-و-سئو-پزشکی'),
        destination: '/service/' + encodeURIComponent('سئو-سایت-پزشکی'),
        permanent: true,
      },
      {
        source: '/blog/' + encodeURIComponent('چرا-استفاده-از-سوشال-مدیا-برای-پزشکان-ض'),
        destination: '/blog/' + encodeURIComponent('چرا-استفاده-از-سوشال-مدیا-برای-پزشکان'),
        permanent: true,
      },
      {
        source: '/blog/' + encodeURIComponent('marketing-necessity-for-doctors')  ,
        destination: '/service/' + encodeURIComponent('دیجیتال-مارکتینگ-پزشکی') ,
        permanent: true,
      },
      {
        source: '/blog/' + encodeURIComponent('آژانس-مارکتینگ-پزشکی'),
        destination: '/service/' + encodeURIComponent(' دیجیتال-مارکتینگ-پزشکی'),
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
