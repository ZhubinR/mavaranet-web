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
export const ignoredUrls = [
  'هومن-عشقی',
  'کلینیک-مهرافروز'
]

export async function generateStaticParams() {

  const services = await fetch(`${reqUrl}/services?_fields=slug&per_page=100`).then((res) => res.json());

  if (!services) {
      console.error('Failed to fetch service data');
      return []; // Return an empty array to avoid build errors
  }

  // Filter out invalid or ignored services
  const validServices = services.filter(service =>
      service && service.slug && !ignoredUrls.includes(encodeURIComponent(service.slug))
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

const serviceSingle = async ({params}) => {
  const { slug } = params;
  const Preq = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&_fields=slug,id,title,acf.portfolio_thumbnail&per_page=100`
  );
  const portfolios = await Preq.json();

  const serviceData = await fetch(`${reqUrl}/services?acf_format=standard&slug=${slug}&_fields=slug,id,title,acf`, {
    next: { revalidate: 604800 },
  }).then((res) => res.json());
  const service = serviceData[0];

  return (
    <main>
      <section className="service_intro wrapper">
        <SharedServiceTitle
          title={service.acf.title}
          tagline={service.acf.tagline}
          eng={service.acf.title_eng}
        />
      </section>

      <section className="service_description wrapper pt-0">
        <div className="container">
          <div className="row justify-content-center align-items-center wrapper">
            <div className="col-md-7">
              <SharedContent1 desc={service.acf.description} />
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <SharedImage
                imageUrl={service.acf.image}
                alt={service.acf.title}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb1.svg`}
                title={service.acf.mytitle1}
                desc={service.acf.desc1}
              />
            </div>
            <div className="col-xl-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb2.svg`}
                title={service.acf.mytitle2}
                desc={service.acf.desc2}
              />
            </div>
            <div className="col-12 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb3.svg`}
                title={service.acf.mytitle3}
                desc={service.acf.desc3}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb4.svg`}
                title={service.acf.mytitle4}
                desc={service.acf.desc4}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb5.svg`}
                title={service.acf.mytitle5}
                desc={service.acf.desc5}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb6.svg`}
                title={service.acf.mytitle6}
                desc={service.acf.desc6}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service_options wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`ویژگی های ${service.acf.title} در ماورانت`}
            eng={`WEB DESIGN FEATURES`}
          />
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 mb-5 mb-lg-0">
              <div className="service_options_box">
                <ServiceOptionBox
                  imageUrl={service.acf.icon_1}
                  text={service.acf.special_1}
                />
                <ServiceOptionBox
                  imageUrl={service.acf.icon_2}
                  text={service.acf.special_2}
                />
                <ServiceOptionBox
                  imageUrl={service.acf.icon_3}
                  text={service.acf.special_3}
                />
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0">
              <SharedImage
                imageUrl={service.acf.special_img}
                alt={service.acf.title}
              />
            </div>
            <div className="col-lg-4">
              <div className="service_options_box">
                <ServiceOptionBox
                  imageUrl={service.acf.icon_4}
                  text={service.acf.special_4}
                />
                <ServiceOptionBox
                  imageUrl={service.acf.icon_5}
                  text={service.acf.special_5}
                />
                <ServiceOptionBox
                  imageUrl={service.acf.icon_6}
                  text={service.acf.special_6}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_team wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`متخصصین ما در ${service.acf.title}`}
            eng={`our staff`}
          />
          <div className="row justify-content-center align-items-center">
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
            <div className="col-xxl-8 col-xl-7 col-lg-6">
              <div className="row p-0">
                {service.acf.team.map((team) => (
                  <div key={team.index} className="col-xxl-2 col-xl-3 col-sm-4 col-6">
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
        </div>
      </section>

      <section className="shared_otherPortfolio service wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`نمونه کار های طراحی سایت`}
            eng={`portfolio`}
          />
          <div className="row align-items-center justify-content-center">
            {portfolios.slice(0, 3).map((portfolioArchive) => (
              <div
                key={portfolioArchive.id}
                className="col-lg-4 col-md-6 mb-4"
              >
                <PortfolioArchiveItem
                  slug={`/portfolio/${portfolioArchive.slug}`}
                  imageUrl={portfolioArchive.acf.portfolio_thumbnail}
                  name={portfolioArchive.title.rendered}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 d-flex align-items-center justify-content-center">
            <Button text={`مشاهده بیشتر`} slug={`/portfolio`} />
          </div>
        </div>
      </section>
    </main>
  );
};

export default serviceSingle;
