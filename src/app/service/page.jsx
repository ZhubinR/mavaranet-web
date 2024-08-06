import ServiceDetailItem from "../../../public/components/services/serviceDetailItem";
import PortfolioArchiveItem from "../../../public/components/portfolio/portfolioArchiveItem";
import { reqUrl } from "../config";
import "@/app/styles/styles.scss";
import SharedServiceTitle from "../../../public/components/shared/SharedServiceTitle";
import SharedImage from "../../../public/components/shared/SharedImage";
import SharedContent1 from "../../../public/components/shared/SharedContent1";
import Button from "../../../public/components/layouts/Button";
import Image from "next/image";
import ServiceOptionBox from "../../../public/components/services/serviceOptionBox";

export const metadata = {
  // optionally access and extend (rather than replace) parent metadata
  title: `خدمات ما`,
  description: `ما با تیمی مجرب و متخصص در زمینه‌های طراحی سایت، سوشال مدیا، سئو، تدوین، مارکتینگ، گرافیک و تولید محتوا آماده‌ایم تا به شما کمک کنیم برند قدرتمندی را ایجاد کنید.`,
  openGraph: {
    title: `خدمات ما`,
    description: `ما با تیمی مجرب و متخصص در زمینه‌های طراحی سایت، سوشال مدیا، سئو، تدوین، مارکتینگ، گرافیک و تولید محتوا آماده‌ایم تا به شما کمک کنیم برند قدرتمندی را ایجاد کنید.`,

    url: `https://mavaranet.net/service/`,
    locale: `fa_IR`,
    type: `article`,
    siteName: `ماورانت`,
    twitter: {
      card: "summary_large_image",
    },
  },
};

const serviceSingle = async () => {
  const Preq = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&_fields=slug,id,title,acf.portfolio_thumbnail&per_page=100`
  );
  const portfolios = await Preq.json();

  const serviceData = await fetch(`${reqUrl}/services?acf_format=standard`, {
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
                alt={`طراحی سایت`}
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb1.svg`}
                title={service.acf.mytitle1}
                desc={`با تمرکز بر رابط کاربری اختصاصی، ما در ماورانت به ارائه خدمات طراحی سایتی متمایز و شگفت‌انگیز می‌پردازیم. هدف ما ایجاد یک تجربه استثنایی برای کاربران است، که همچنین باعث افزایش تعامل و رضایت آن‌ها می‌شود.`}
              />
            </div>
            <div className="col-xl-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb2.svg`}
                title={`استاندارد سئو در طراحی سایت`}
                desc={`با بهره‌گیری از بهینه‌سازی محتوا، ساختار سایت، استفاده از کلمات کلیدی مناسب و بهبود سرعت بارگیری، ماورانت به شما کمک می‌کند تا رتبه بالاتری در نتایج جستجو کسب کنید و بر جذب ترافیک کاربران متمرکز شوید.`}
              />
            </div>
            <div className="col-12 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb3.svg`}
                title={`طراحی سایت با کدنویسی اختصاصی`}
                desc={`با استفاده از کدنویسی اختصاصی، ما قادر به ارائه طراحی‌های سفارشی، انعطاف‌پذیر و دقیق هستیم که کاملاً با نیازها و محتوای شما هماهنگ می‌شوند. این رویکرد به ما امکان می‌دهد تا بهترین راهکارها را برای شما ارائه دهیم و وبسایتی را ایجاد کنیم که علاوه بر جذابیت بصری، در نتایج جستجو نیز موثر و قابل مشاهده باشد.`}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb4.svg`}
                title={`طراحی سایت با نسخه واکنشگرا`}
                desc={` با استفاده از تکنولوژی‌های مدرن و رویکردهای طراحی نوین، وبسایت‌های واکنشگرا را به شکلی زیبا، کارآمد و سریع ارائه می‌دهیم تا کاربران شما از تجربه یکنواخت و لذت‌بخشی برخوردار شوند. از طراحی واکنشگرا در ماورانت استفاده کنید و به وبسایت خود یک نگاه تازه و جذاب ببخشید.`}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb5.svg`}
                title={`طراحی قالب اختصاصی وردپرس`}
                desc={`با استفاده از آخرین تکنولوژی‌ها و بهینه‌سازی‌های مدرن، قالب‌های اختصاصی وردپرس را به شکلی منحصر به فرد و جذاب طراحی می‌کنیم که به نیازهای شما و توانایی‌های وبسایتتان واکنش نشان می‌دهد.`}
              />
            </div>
            <div className="col-xl-4 col-lg-6 mb-4">
              <ServiceDetailItem
                imageUrl={`/images/services/numb6.svg`}
                title={`طراحی سایت با بارگذاری سریع`}
                desc={`در ماورانت، ما به طراحی سایت‌های با بارگذاری سریع و عملکرد بی‌نظیر اهمیت می‌دهیم. با بهره‌گیری از بهترین روش‌های بهینه‌سازی و بهبود کارایی، وبسایت‌هایی را طراحی می‌کنیم که به سرعت بالا، زمان بارگذاری کمتر، و تجربه کاربری بهتری دست می‌دهند. `}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="service_options wrapper">
        <div className="container">
          <SharedServiceTitle
            title={`ویژگی های طراحی سایت در ماورانت`}
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
            title={`متخصصین ما در طراحی سایت`}
            eng={`our staff`}
          />
          <div className="row justify-content-center">
            <div className="col-xxl-4 col-xl-5 col-lg-6">
              <div className="service_team_manager">
                <Image
                  src={service.acf.manager_img}
                  width={224}
                  height={332}
                  alt="manager"
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
                        alt="manager"
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
