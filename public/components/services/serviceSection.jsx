import ServiceItem from "./serviceItem";

const ServiceSection = ({ data }) => {
  return (
    <section className="section services wrapper">
      <div className="container">
        <div className="row justify-content-between align-items-center pb-5">
          {data.map((service) => (
            <div className="col-lg-4 col-md-6" key={service.id}>
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
  );
};
export default ServiceSection;
