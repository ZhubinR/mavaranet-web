import "@/app/styles/styles.scss";
import { reqUrl } from "@/app/config";
// import Image from "next/image";
import PortfolioTitle from "../../../../public/components/portfolio/portfolioTitle";
import PortfolioPageContent from "../../../../public/components/portfolio/PortfolioPageContent";
import HtmlRenderComponent from "../../../../public/components/layouts/HtmlRenderComponent";
export const ignoredUrls = ["هومن-عشقی", "کلینیک-مهرافروز"];
// import FsLightbox from "fslightbox-react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const portfolios = await fetch(
    `${reqUrl}/portfolios?_fields=slug&per_page=100`
  ).then((res) => res.json());

  if (!portfolios) {
    console.error("Failed to fetch portfolio data");
    return []; // Return an empty array to avoid build errors
  }

  // Filter out invalid or ignored portfolios
  const validPortfolios = portfolios.filter(
    (portfolio) =>
      portfolio &&
      portfolio.slug &&
      !ignoredUrls.includes(encodeURIComponent(portfolio.slug))
  );

  return validPortfolios.map((portfolio) => ({
    slug: decodeURIComponent(portfolio.slug),
  }));
}

export async function generateMetadata({ params }) {
  // fetch data for meta data
  const seoPortfolios = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&slug=${params.slug}`
  ).then((res) => res.json());
  const seoPortfolio = seoPortfolios[0];

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${seoPortfolio.yoast_head_json.title}`,
    description: seoPortfolio.yoast_head_json.description,
    openGraph: {
      title: `${seoPortfolio.yoast_head_json.og_title} - ماورانت`,
      description: seoPortfolio.yoast_head_json.og_description,
      images: [
        {
          url: seoPortfolio.acf.portfolio_thumbnail,
        },
      ],
      url: `https://mavaranet.net/portfolio/${seoPortfolio.slug}`,
      locale: seoPortfolio.yoast_head_json.og_locale,
      type: seoPortfolio.yoast_head_json.og_type,
      siteName: seoPortfolio.yoast_head_json.og_site_name,
      twitter: {
        card: "summary_large_image",
      },
    },
    alternates: {
      canonical: `https://mavaranet.net/portfolio/${params.slug}`,
    },
  };
}

const PortfolioSingle = async ({ params }) => {
  const { slug } = params;
  console.log(slug);
  // fetching api datas for page content
  const req = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&slug=${slug}`,
    { keepalive: true }
  );
  const portfolios = await req.json();
  const portfolio = portfolios[0];

  return (
    <main>
      <section className="portfolio_hero mb-4">
        <div className="container">
          <PortfolioTitle
            title={portfolio.acf.portfolio_name}
            subTitle={portfolio.acf.portfolio_name_subtitle}
            desc={portfolio.acf.portfolio_description}
            backText={portfolio.acf.name_eng}
          />
        </div>
      </section>

      <PortfolioPageContent portfolio={portfolio} />

      {portfolio.content.rendered.length > 0 && (
        <div className="container">
          <HtmlRenderComponent htmlContent={portfolio.content.rendered} />
        </div>
      )}
    </main>
  );
};

export default PortfolioSingle;
