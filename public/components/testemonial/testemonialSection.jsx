import TestemonialContent from "./testemonialContent"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'

import SectionTitle from "../layouts/SectionTitle"


const TestemonialSection = ({ data }) => {
    // const testimonials = await getData()

    return (
        <div className="section testemonial wrapper">


            <div className="container">
                <SectionTitle
                    title={`نظرات مشتریان`}
                />

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

                        1300: {
                            slidesPerView: 2,
                        }
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    speed={750}
                >
                    {data.map(testimonial => (
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
        </div>
    )
}

export default TestemonialSection