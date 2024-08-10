import Button from "../layouts/Button";
import SectionTitle from "../layouts/SectionTitle";
import CustomerItem from "./CustomerItem";

const CustomerSection = ({ data }) => {
  return (
    <section className="section customer wrapper">
      <div className="container-flouid px-4 px-lg-5">
        <SectionTitle
          title={`برخی از مشتریان ما`}
          subTitle={`و اعتماد بیش از ۲۰۰۰ مشتری دیگر...`}
        />
        <div className="row align-items-center justify-content-center">
          {data.map((customer) => (
            <div className="col-xl-3 col-lg-4 col-md-4 col-6 mb-3" key={customer.id}>
              <CustomerItem
                logoUrl={customer.acf.logo}
                name={customer.acf.name}
                desc={customer.acf.desc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerSection;
