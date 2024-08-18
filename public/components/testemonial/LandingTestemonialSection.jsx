"use client";
import TestemonialContent from "./testemonialContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/scss/navigation";
import "swiper/scss/autoplay";

const LandingTestemonialSection = ({ data }) => {
  // const testimonials = await getData()

  return (
    <section className="section testemonial wrapper pb-0 nationaDoctorsDay_testemonial">
      <div className="container px-4 px-lg-5">
      <div className="titleWrapper mb-4">
            <h3 className="title">
              <span>نظرات پزشکان</span>
              درباره خدمات طراحی سایت ماورانت
            </h3>
          </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            setTimeout: 4000,
          }}
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            578: {
              slidesPerView: 1.25,
            },
            768: {
              slidesPerView: 1.75,
            },

            1200: {
              slidesPerView: 2,
            },
            1366: {
              slidesPerView: 2.5,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          speed={750}
        >
          {data.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <TestemonialContent
                name={testimonial.acf.name}
                job={testimonial.acf.job}
                desc={testimonial.acf.text}
                imageUrl={testimonial.acf.res_image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="d-flex align-items-center mt-5 justify-content-center relative">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </div>
    </section>
  );
};

export default LandingTestemonialSection;
