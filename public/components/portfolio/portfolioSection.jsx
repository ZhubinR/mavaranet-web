// import TitleCont from '../layouts/TitleCont'
import PortfolioItem from './portfolioItem'
// import Button from '../layouts/Button'
import SectionTitle from '../layouts/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/autoplay';

const PortfolioSection = ({ data }) => {

    return (
        <div className="section portfolio wrapper">
            <div className="container">
                <SectionTitle
                    title={`نمونه کارها`}
                />
            </div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    setTimeout: 4000,
                }}
                centeredSlides={true}
                modules={[Pagination, Autoplay]}
                speed={750}
                pagination={true}
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
                        slidesPerView: 4,
                    },
                    1600: {
                        slidesPerView: 5,
                    }
                }}
            >
                {data.map(portfolio => (
                    <SwiperSlide key={portfolio.id}>
                        <PortfolioItem
                            url={`/portfolio/${portfolio.slug}`}
                            imageAlt={portfolio.title.rendered}
                            imageUrl={portfolio.acf.portfolio_thumbnail}
                            title={portfolio.title.rendered}
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default PortfolioSection