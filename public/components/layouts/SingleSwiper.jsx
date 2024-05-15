
'use client'
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';
import 'swiper/css';

const SingleSwiper = ({ imageUrls, noBack }) => {
    return (
        <div className="singleSwiper">

            <Image
                className={`back ${noBack}`}
                src={`/images/teb-back.png`}
                width={460}
                height={460}
                alt="background"
            />
            <div className={`shine ${noBack}`}></div>
            <Swiper
                loop={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    setTimeout: 4000,
                }}
                observer={true}
                observeParents={true}
                navigation={false}
                slidesPerView={1}
                pagination={true}
            >
                {imageUrls.map((imageUrl, index) => (

                    <SwiperSlide key={index}>
                        <Image
                            className="mb-3"
                            src={imageUrl}
                            width={264}
                            height={540}
                            alt={`Slide ${index + 1}`}
                        />
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
    )
}

export default SingleSwiper
