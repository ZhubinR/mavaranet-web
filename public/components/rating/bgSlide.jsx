import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/scss/autoplay';
import 'swiper/css';
import Image from 'next/image';


const BackgroundSlide = ({ rightClass }) => {
    

    const slideData = [
        {
            id: 1,
            imageUrl: '/images/slide1.jpg'
        },
        {
            id: 2,
            imageUrl: '/images/slide2.jpg'
        },
        {
            id: 3,
            imageUrl: '/images/slide3.jpg'
        },
        {
            id: 4,
            imageUrl: '/images/slide4.jpg'
        },
        {
            id: 5,
            imageUrl: '/images/slide5.jpg'
        },
        {
            id: 6,
            imageUrl: '/images/slide6.jpg'
        },
        {
            id: 7,
            imageUrl: '/images/slide7.jpg'
        },
        {
            id: 8,
            imageUrl: '/images/slide8.jpg'
        },
        {
            id: 9,
            imageUrl: '/images/slide9.jpg'
        },
        {
            id: 10,
            imageUrl: '/images/slide10.jpg'
        },
        {
            id: 11,
            imageUrl: '/images/slide11.jpg'
        },
        {
            id: 12,
            imageUrl: '/images/slide12.jpg'
        },
        {
            id: 13,
            imageUrl: '/images/slide13.jpg'
        },
        {
            id: 14,
            imageUrl: '/images/slide14.jpg'
        },
        {
            id: 15,
            imageUrl: '/images/slide15.jpg'
        },
        
    ]

    return (
        <div className={`bgSlide ${rightClass}`}>

            <Swiper
                loop= {true}
                modules={[ Autoplay]}
                autoplay= {{
                    delay: 5000,
                    disableOnInteraction: false,
                    setTimeout: 6000,
                }}
    
                freeMode= {true}
                parallax= {true}
                navigation= {false}
                pagination= {false}
                spaceBetween= {32}
                breakpoints= {{
                    0: {
                        slidesPerView: 4,
                    }
                }}
            >
                {slideData.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <Image
                            src={slide.imageUrl}
                            width={490}
                            height={370}
                            priority
                        />
                    </SwiperSlide>

                ))}


            </Swiper>


        </div>
    )
}

export default BackgroundSlide