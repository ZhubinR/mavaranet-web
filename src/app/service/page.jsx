import { reqUrl } from "../config";
import Overlay from "../../../public/components/layouts/Overlay";
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle";
import ServiceItem from "../../../public/components/services/serviceItem";


const ServiceArchive = async () => {
  const req = await fetch(
    `${reqUrl}/services?acf_format=standard&per_page=100`,
    { next: { revalidate: 3200 } }
  );
  const serviceData = await req.json();

  return (
    <main className="pageMain">
      <section className="service_intro wrapper mb-5">
        <div className="container">
          <Overlay />
          <InsidePageTitle
            title={`خدمات`}
            desc={`آژانس ماورانت به عنوان اولین و تنها آژانس مدیکال برندینگ در ایران، با هدف ارائه خدمات تخصصی و منحصر به فرد در حوزه‌ی برندینگ و مارکتینگ پزشکی فعالیت می‌کند. ما با بهره‌گیری از تیمی متخصص و حرفه‌ای و تلفیق دانش پزشکی با هنر و اصول بازاریابی، به شما کمک می‌کنیم تا برندی قوی و متمایز برای کسب‌وکار خود ایجاد کنید.`}
            backText={`SERVICES`}
          />
        </div>
      </section>
      <section className="section services wrapper h-100">
      <div className="container mt-0 mb-0">
        <div className="row justify-content-center align-items-center pb-5 ">
          {serviceData.map((service) => (
            <div className=" col-xl-4 col-sm-6" key={service.id}>
              <ServiceItem
                imageUrl={service.acf.image}
                title={service.acf.title}
                desc={service.acf.description}
                slug={service.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

export default ServiceArchive;
