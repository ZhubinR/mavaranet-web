import React from "react";
import ServiceFeature from "../../../../public/components/services/serviceFeature";
import { reqUrl } from "../../config";
import "@/app/styles/styles.scss";
import SharedServiceTitle from "../../../../public/components/shared/SharedServiceTitle";
import SharedImage from "../../../../public/components/shared/SharedImage";
import SharedContent1 from "../../../../public/components/shared/SharedContent1";
import ServiceSharedPortfolio from "../../../../public/components/services/serviceSharedPortfolio";
import Accordion from "../../../../public/components/layouts/Accordion";
import ServiceFaq from "../../../../public/components/services/serviceFaq";
import ServiceTeamSection from "../../../../public/components/services/serviceTeamSection";
export const ignoredUrls = ["هومن-عشقی", "کلینیک-مهرافروز"];

export async function generateStaticParams() {
  const services = await fetch(
    `${reqUrl}/services?_fields=slug&per_page=100`,{next: { revalidate: 60 }}
  ).then((res) => res.json());

  if (!services) {
    console.error("Failed to fetch service data");
    return []; // Return an empty array to avoid build errors
  }

  // Filter out invalid or ignored services
  const validServices = services.filter(
    (service) =>
      service &&
      service.slug &&
      !ignoredUrls.includes(encodeURIComponent(service.slug))
  );

  return validServices.map((service) => ({
    slug: decodeURIComponent(service.slug),
  }));
}

export async function generateMetadata({ params }) {
  // fetch data
  const seoServices = await fetch(
    `${reqUrl}/services?acf_format=standard&slug=${params.slug}&_fields=yoast_head_json`,{next: { revalidate: 60 }}
  ).then((res) => res.json());
  const seoService = seoServices[0];

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `${seoService.yoast_head_json.title} `,
    description: seoService.yoast_head_json.description,
    openGraph: {
      title: `${seoService.yoast_head_json.og_title} - ماورانت`,
      description: seoService.yoast_head_json.og_description,
      // images: [
      //   {
      //     url: seoService.yoast_head_json.og_image.url,
      //   },
      // ],
      url: `https://mavaranet.net/service/${params.slug}`,
      locale: seoService.yoast_head_json.og_locale,
      type: seoService.yoast_head_json.og_type,
      siteName: seoService.yoast_head_json.og_site_name,
      twitter: {
        card: "summary_large_image",
      },
    },
    alternates: {
      canonical: `https://mavaranet.net/service/${params.slug}`,
    },
  };
}

const serviceSingle = async ({ params }) => {
  const { slug } = params;
  const Preq = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&_fields=slug,id,title,acf.portfolio_thumbnail,acf.catergory&per_page=100`,{next: { revalidate: 60 }}
  );

  const portfolios = await Preq.json();

  const serviceData = await fetch(
    `${reqUrl}/services?acf_format=standard&slug=${slug}&_fields=slug,id,title,acf`,
    {
      next: { revalidate: 60 },
    }
  ).then((res) => res.json());

  const service = serviceData[0];

  const faq = service.acf.faq;
  // Filter the portfolios based on the current page title
  const portfolioData = portfolios.filter(
    (portfolioShow) => service.title.rendered === portfolioShow.acf.catergory.name
  );
  const team = service.acf.team

  return (
    <main>
      <section className="service_intro wrapper">
        <SharedServiceTitle
          title={service.acf.title}
          eng={service.acf.title_eng}
        />
      </section>

      <section className="service_character wrapper">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6">
              <SharedImage
                imageUrl={service.acf.image}
                alt={service.title.rendered}
              />
            </div>
            <div className="col-lg-6">
              <SharedContent1
                title={service.acf.maintitle}
                desc={service.acf.description}
              />
            </div>
          </div>
        </div>
      </section>

      {service.acf.box.length > 0 && <ServiceFeature data={service}/>}

      {service.acf.sections.map((item, index) => {
        if (index === 1) {
          return (
            <React.Fragment key={index}>
              <section
                key={`${index}-section`}
                className={`service_content  py-4 `}
              >
                <div className="container">
                  <div
                    className={`${
                      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    } row align-items-center justify-content-center `}
                  >
                    <div className="col-lg-6">
                      <SharedContent1 title={item.title} desc={item.desc} />
                      <Accordion item={item} />
                    </div>
                    <div className="col-lg-6">
                      <SharedImage imageUrl={item.pic} alt={item.title} />
                    </div>
                  </div>
                </div>
              </section>
              {index === 1 && portfolioData.length > 0 && (
                <ServiceSharedPortfolio
                  data={portfolioData}
                  titleData={service}
                  key={`${index}-portfolio`}
                />
              )}
            </React.Fragment>
          );
        } else {
          return (
            <section key={index} className={`service_content py-4 `}>
              <div className="container">
                <div
                  className={`${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } row align-items-center justify-content-center `}
                >
                  <div className="col-lg-6">
                    <SharedContent1 title={item.title} desc={item.desc} />
                    <Accordion item={item} />
                  </div>
                  <div className="col-lg-6">
                    <SharedImage imageUrl={item.pic} alt={item.title} />
                  </div>
                </div>
              </div>
            </section>
          );
        }
      })}

      {faq.length > 0 && <ServiceFaq data={faq} />}

      {team.length > 0 && <ServiceTeamSection data={service}/>}
      
    </main>
  );
};

export default serviceSingle;
