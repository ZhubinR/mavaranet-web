"use client";
import BlogItem from "./blogItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";
import SectionTitle from "../layouts/SectionTitle";

const BlogSection = ({ data }) => {
  return (
    <section className="section blog wrapper">
      <div className="container-flouid px-4 px-lg-5">
        <SectionTitle title={`آخرین مقالات`} />
      </div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 4000,
          setTimeout: 6000,
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        spaceBetween={24}
        breakpoints={{
          0: {
            slidesPerView: 1.25,
          },
          576: {
            slidesPerView: 1.85,
          },
          768: {
            slidesPerView: 2.5,
          },
          1366: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 4.5,
          },
        }}
      >
        <SwiperSlide key={61985}>
          <BlogItem
            slug={`/blog/national-doctors-day`}
            imageUrl={`/images/natinal-dr-thumbnail.webp`}
            title={`روز پزشک مبارک`}
            description={`روز پزشک که مصادف با اول شهریور ماه و سالروز تولد بوعلی سینا، بزرگ‌ترین پزشک و دانشمند ایرانی است، فرصتی است برای تجلیل از خدمات ارزنده‌ی پزشکان و تقدیر از تلاش‌های بی‌وقفه‌ی آنان در راستای حفظ و ارتقاء سلامت جامعه.`}
            updatedAt={`1403/05/24`}
            readingTime={`8 دقیقه`}
            tag={`سایر`}
          />
        </SwiperSlide>
        {data.map((blog) => (
          <SwiperSlide key={blog.id}>
            <BlogItem
              slug={`/blog/${blog.slug}`}
              imageUrl={blog.acf.thumbnail_url}
              title={blog.title.rendered}
              description={blog.acf.desc}
              updatedAt={blog.date}
              readingTime={blog.acf.readingtime}
              tag={blog.categoryName}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BlogSection;
