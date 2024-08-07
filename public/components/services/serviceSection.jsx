import Image from "next/image";
import Button from "../layouts/Button";

const ServiceSection = ({ data }) => {
  return (
    <section className="section services wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center pb-5">
          {data.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
              <div className="service-item">
                <Image
                  src={service.acf.image}
                  width={392}
                  height={536}
                  alt={service.acf.title}
                  loading="lazy"
                />
                <div className="content">
                  <h2>{service.acf.title}</h2>
                  <p>{service.acf.description}</p>
                  <Button text={`مشاهده`} slug={`service/${service.slug}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceSection;
