import Image from "next/image";
import Faq from "../layouts/Faq";
import SharedServiceTitle1 from "../shared/SharedServiceTitle1";

const ServiceFaq = ({ data }) => {

  const half = Math.ceil(data.length / 2);
  const firstHlaf = data.slice(0, half);
  const secondHalf = data.slice(half);

  return (
    <section className="service_faq pb-0 wrapper">
      <Image
        className="faqBg"
        src={`/images/Vector-service-bg.webp`}
        width={1426}
        height={674}
        alt="bg"
      />
      <div className="container">
        <SharedServiceTitle1
          title={`سوالات متداول`}
          eng={`FAQs`}
        />
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6">
            {firstHlaf.map((faq, index) => (
              <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="col-lg-4 col-md-6">
            <Image
              className="service_faq_image"
              src={`/images/faq-globe.webp`}
              width={400}
              height={400}
              alt="faq golbe"
            />
          </div>
          <div className="col-lg-4 col-md-6">
          {secondHalf.map((faq, index) => (
              <Faq key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFaq;
