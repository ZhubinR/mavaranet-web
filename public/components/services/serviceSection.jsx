import ServiceItem from "./serviceItem";

const ServiceSection = ({ data }) => {
  return (
    <section className="section services wrapper">
      <div className="container-flouid">
        <div className="row justify-content-center align-items-center pb-5 mx-lg-5">
          {data.map((service) => (
            <div className="col-xxl-3 col-xl-4 col-sm-6" key={service.id}>
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
  )
}
export default ServiceSection;
