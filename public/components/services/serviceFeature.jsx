"use client"
import ServiceFeatureItem from "./serviceFeatureItem";
import SharedContent1 from "../shared/SharedContent1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/autoplay";

const ServiceFeature = ({ data }) => {
  return (
    <section className="wrapper service_feature service_content">
      <div className="container">
        <SharedContent1 title={data.acf.feature} desc={data.acf.feature_text} />
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            setTimeout: 6000,
          }}
          centeredSlides={true}
          modules={[Autoplay]}
          spaceBetween={24}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 4,
            },
            1600: {
              slidesPerView: 5,
            },
          }}
        >
          {data.acf.box.map((item , index) => (
            <SwiperSlide key={index}>
              <ServiceFeatureItem 
                imgUrl={item.icon}
                text={item.text}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceFeature;
