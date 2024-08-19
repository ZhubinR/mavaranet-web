import "@/app/styles/styles.scss";
import { reqUrl } from "@/app/config";
import Image from "next/image";
import PortfolioTitle from "../../../../public/components/portfolio/portfolioTitle";
export const ignoredUrls = ["هومن-عشقی", "کلینیک-مهرافروز"];

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
    title: seoPortfolio.yoast_head_json.title,
    description: seoPortfolio.yoast_head_json.description,
    openGraph: {
      title: seoPortfolio.yoast_head_json.og_title,
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
  };
}

const PortfolioSingle = async ({ params }) => {
  const { slug } = params;
  console.log(slug);
  // fetching api datas for page content
  const req = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&slug=${slug}`
  );
  const portfolios = await req.json();
  const portfolio = portfolios[0];
  const portfolioContent = portfolio.acf.files;

  // function for recognizing the format of the returned url
  const getResourceType = (url) => {
    if (url.endsWith(".mp4") || url.endsWith(".webm")) {
      return "video";
    } else if (
      url.endsWith(".jpg") ||
      url.endsWith(".jpeg") ||
      url.endsWith(".png") ||
      url.endsWith(".webp")
    ) {
      return "picture";
    } else {
      // default to 'picture' if the type cannot be determined
      return "picture";
    }
  };
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

      <section className="portfolio_content">
        <div className="container">
          <div className="row justify-content-center">
            {/* map through the fetched data and render each item */}
            {portfolioContent.map((item, index) => {
              // determine the type of the resource for the current item
              const resourceType = getResourceType(item.medi);

              return (
                <>
                  {/* conditional rendering based on the inferred resource type */}
                  {resourceType === "video" && (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <video className="portfolio_content_video" controls>
                        <source src={item.medi} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {resourceType === "picture" && (
                    <div className="col-lg-4 col-md-6 mb-4" key={index}>
                      <Image
                        width={840}
                        height={582}
                        className="portfolio_content_pic"
                        src={item.medi}
                        alt="Picture"
                      />
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioSingle;
