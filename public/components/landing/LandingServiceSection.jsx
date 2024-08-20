'use client'
import LandingServiceItem from "./LandingServiceItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/scss/autoplay";
import "swiper/scss/navigation";
import "swiper/css";
const LandingServiceSection = ({services}) => {
    return (
        <section className="nationaDoctorsDay_service">
        <div className="container">
          <div className="titleWrapper">
            <h3 className="title">
              خدمات
              <span>ماورانت</span>
            </h3>
            <div className="navi">
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 4000,
              setTimeout: 6000,
            }}
            centeredSlides={true}
            modules={[Autoplay, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={24}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1.85,
              },
              768: {
                slidesPerView: 2.5,
              },
              1366: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 3.5,
              },
            }}
          >
            {services.map((service) => (
              <SwiperSlide key={service.id}>
                <LandingServiceItem
                  img={service.imageUrl}
                  name={service.title}
                  desc={service.description}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
};



export default LandingServiceSection;
