import React from "react";
import ServiceDetailItem from "../../../../public/components/services/serviceDetailItem";
import PortfolioArchiveItem from "../../../../public/components/portfolio/portfolioArchiveItem";
import { reqUrl } from "../../config";
import "@/app/styles/styles.scss";
import SharedServiceTitle from "../../../../public/components/shared/SharedServiceTitle";
import SharedImage from "../../../../public/components/shared/SharedImage";
import SharedContent1 from "../../../../public/components/shared/SharedContent1";
import Button from "../../../../public/components/layouts/Button";
import Image from "next/image";
import ServiceOptionBox from "../../../../public/components/services/serviceOptionBox";
import PortfolioSection from "../../../../public/components/portfolio/portfolioSection";
import ServiceSharedPortfolio from "../../../../public/components/services/serviceSharedPortfolio";
import Accordion from "../../../../public/components/layouts/Accordion";
import ServiceFaq from "../../../../public/components/services/serviceFaq";
export const ignoredUrls = ["هومن-عشقی", "کلینیک-مهرافروز"];

export async function generateStaticParams() {
  const services = await fetch(
    `${reqUrl}/services?_fields=slug&per_page=100`
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
    `${reqUrl}/services?acf_format=standard&slug=${params.slug}&_fields=yoast_head_json`
  ).then((res) => res.json());
  const seoService = seoServices[0];

  // optionally access and extend (rather than replace) parent metadata

  return {
    title: seoService.yoast_head_json.title,
    description: seoService.yoast_head_json.description,
    openGraph: {
      title: seoService.yoast_head_json.og_title,
      description: seoService.yoast_head_json.og_description,
      // images: [
      //   {
      //     url: seoService.yoast_head_json.og_image.url,
      //   },
      // ],
      url: `https://mavaranet.net/Service/${params.slug}`,
      locale: seoService.yoast_head_json.og_locale,
      type: seoService.yoast_head_json.og_type,
      siteName: seoService.yoast_head_json.og_site_name,
      twitter: {
        card: "summary_large_image",
      },
    },
  };
}

const serviceSingle = async ({ params }) => {
  const { slug } = params;
  const Preq = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&_fields=slug,id,title,acf.portfolio_thumbnail&per_page=100`
  );

  const portfolios = await Preq.json();

  const serviceData = await fetch(
    `${reqUrl}/services?acf_format=standard&slug=${slug}&_fields=slug,id,title,acf`,
    {
      next: { revalidate: 604800 },
    }
  ).then((res) => res.json());

  const service = serviceData[0];

  const faq = service.acf.faq

  

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
              <ServiceSharedPortfolio
                data={portfolios}
                titleData={service}
                key={`${index}-portfolio`}
              />
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

      <ServiceFaq
        data={faq}
      />
      <section className="service_team wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`متخصصین ما در ${service.acf.title}`}
            eng={`our staff`}
          />
          <div className="row justify-content-center align-items-center">
            <div className="row p-0">
              <div className="col-xxl-4 col-xl-5 col-lg-6">
                <div className="service_team_manager">
                  <Image
                    src={service.acf.manager_img}
                    width={224}
                    height={332}
                    alt={service.acf.manager_name}
                    loading="lazy"
                  />
                  <div className="text">
                    <span className="name">{service.acf.manager_name}</span>
                    <span className="jobTitle">{service.acf.manage_job}</span>
                    <p>{service.acf.manager_massage}</p>
                  </div>
                </div>
              </div>
              {service.acf.team.map((team) => (
                <div
                  key={team.index}
                  className="col-xxl-2 col-xl-3 col-sm-4 col-6"
                >
                  <div className="service_team_staff">
                    <Image
                      src={team.person_img}
                      width={224}
                      height={200}
                      alt={team.name}
                      loading="lazy"
                    />
                    <div className="text">
                      <span className="name">{team.name}</span>
                      <span className="jobTitle">{team.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default serviceSingle;
