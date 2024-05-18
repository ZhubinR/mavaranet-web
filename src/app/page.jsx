'use client'
import TestemonialSection from '../../public/components/testemonial/testemonialSection'
import ServiceSection from '../../public/components/services/serviceSection'
import AboutSection from '../../public/components/about/aboutSection'
import RoadmapSection from '../../public/components/roadmap/roadmapSection'
import MavaratebSection from '../../public/components/mavarateb/mavaratebSection'
import HeroSection from '../../public/components/heroSection'
import RatingSection from '../../public/components/rating/ratingSection'
import BlogSection from '../../public/components/blog/blogSection'
import PortfolioSection from '../../public/components/portfolio/portfolioSection'
import ContactSection from '../../public/components/contact/contactSection'
import HomeLayout from '../../public/components/layouts/HomeLayout'
import { reqUrl } from './config'
import { useEffect, useState } from 'react'
import moment from "jalali-moment"
import '@/app/styles/styles.scss'
import Fullpage from '../../public/components/Fullpage'
import Footer from '../../public/components/layouts/Footer'
import CustomerSection from '../../public/components/customer/CustomerSection'
import Cta from '../../public/components/layouts/Cta'
import LoadingHome from './loading'

export default function Home() {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
    const [data5, setData5] = useState([])
    const [SmallScreen, setSmallScreen] = useState(false)

    useEffect(() => {
        // fetching all datas
        const getDatas = async () => {
            const res = await Promise.all([
                fetch(`${reqUrl}/user_testimonial?acf_format=standard&per_page=100`, { next: { revalidate: 1800 } }),
                fetch(`${reqUrl}/portfolios?acf_format=standard&per_page=100`, { next: { revalidate: 1800 } }),
                fetch(`${reqUrl}/posts?acf_format=standard&per_page=100`, { next: { revalidate: 1800 } }),
                fetch(`${reqUrl}/categories`, { next: { revalidate: 1800 } }),
                fetch(`${reqUrl}/customers?acf_format=standard&per_page=100`, { next: { revalidate: 1800 } })])

            const [data1, data2, data3, data4 , data5] = res

            setData1(await data1.json())
            setData2(await data2.json())
            setData3(await data3.json())
            setData4(await data4.json())
            setData5(await data5.json())

        }
        getDatas()

        // remove fullpage in responsive
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 700)
        }

        // initial check
        handleResize()

        // listen for window resize events
        window.addEventListener('resize', handleResize)
        // clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize)
        }
        // end remove fullpage in responsive

    }, [])

    const blogPostsWithCategories = data3.map(post => {
        // find the category
        const postCategory = data4.find(category => category.id === post.categories[0]) // Assuming only one category per post
        // coverting default date to jalali date
        const gregorianDate = data3.map(post => post.date)
        const jalaliDate = moment(gregorianDate, 'YYYY-MM-DDTHH:mm:ss').locale('fa').format('YYYY/MM/DD HH:mm:ss')

        // return the post object with the category name
        return {
            ...post,
            categoryName: postCategory ? postCategory.name : 'Uncategorized', // Provide a default category name if no category found
            date: jalaliDate.slice(0, 10)
        }
    })

    return (
        <HomeLayout>
            <main className='homeMain'>
                <Cta
                    slug={`tel:+989125441048`}
                    imgUrl={`/images/contact/phone.svg`}
                    />
                {SmallScreen ? (
                    <>
                    <LoadingHome/>
                        <HeroSection />
                        <ServiceSection />
                        <AboutSection />
                        <RoadmapSection />
                        <CustomerSection data={data5.slice(0,20)}/>
                        <TestemonialSection data={data1} />
                        <PortfolioSection data={data2.slice(0, 12)} />
                        <MavaratebSection />
                        <RatingSection />
                        <BlogSection data={blogPostsWithCategories.slice(0, 12)} />
                        <ContactSection />
                        <Footer />
                    </>

                ) : (

                    <Fullpage>
                    <LoadingHome/>

                        <HeroSection />
                        <ServiceSection />
                        <AboutSection />
                        <RoadmapSection />
                        <CustomerSection data={data5.slice(0,20)}/>
                        <TestemonialSection data={data1} />
                        <PortfolioSection data={data2.slice(0, 12)} />
                        <MavaratebSection />
                        <RatingSection />
                        <BlogSection data={blogPostsWithCategories.slice(0, 12)} />
                        <ContactSection />
                    </Fullpage>
                )}

            </main>
        </HomeLayout>
    )
}