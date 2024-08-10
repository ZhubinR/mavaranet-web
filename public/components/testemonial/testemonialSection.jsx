"use client";
import TestemonialContent from "./testemonialContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import SectionTitle from "../layouts/SectionTitle";

const TestemonialSection = ({ data }) => {
  // const testimonials = await getData()

  return (
    <section className="section testemonial wrapper">
      <div className="container-flouid px-4 px-lg-5">
        <SectionTitle title={`نظرات مشتریان`} />
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
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView:2,
            },

            1200: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView:4 ,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
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
      </div>
    </section>
  );
};

export default TestemonialSection;
