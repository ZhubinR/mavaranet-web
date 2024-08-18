import TestemonialSection from "../../public/components/testemonial/testemonialSection";
import ServiceSection from "../../public/components/services/serviceSection";
import AboutSection from "../../public/components/about/aboutSection";
import RoadmapSection from "../../public/components/roadmap/roadmapSection";
import MavaratebSection from "../../public/components/mavarateb/mavaratebSection";
import HeroSection from "../../public/components/heroSection";
import RatingSection from "../../public/components/rating/ratingSection";
import BlogSection from "../../public/components/blog/blogSection";
import PortfolioSection from "../../public/components/portfolio/portfolioSection";
import ContactSection from "../../public/components/contact/contactSection";
import HomeLayout from "../../public/components/layouts/HomeLayout";
import { reqUrl } from "./config";
import moment from "jalali-moment";
import "@/app/styles/styles.scss";
import Fullpage from "../../public/components/Fullpage";
import Footer from "../../public/components/layouts/Footer";
import CustomerSection from "../../public/components/customer/CustomerSection";
import Cta from "../../public/components/layouts/Cta";
import SocialSection from "../../public/components/social/SocialSection";
import EventSection from "../../public/components/events/EventSection";

export default async function Home() {

  const data1 = await fetch(
    `${reqUrl}/user_testimonial?acf_format=standard`, { keepalive: true }
  ).then((res) => res.json());

  const data2 = await fetch(
    `${reqUrl}/portfolios?acf_format=standard&_fields=slug,id,title,acf.portfolio_thumbnail&per_page=100`, { keepalive: true }
  ).then((res) => res.json());

  const filteredData = data2.filter((item) => item.slug !== 'nilfouroush-clinic');

  const data3 = await fetch(
    `${reqUrl}/posts?acf_format=standard&_fields=slug,title,acf,date,id,categories`, { keepalive: true }
  ).then((res) => res.json());

  const data4 = await fetch(`${reqUrl}/categories`, { keepalive: true }).then((res) => res.json());

  const data5 = await fetch(
    `${reqUrl}/customers?acf_format=standard&per_page=100`, { keepalive: true }
  ).then((res) => res.json());

  const data6 = await fetch(
    `${reqUrl}/events?acf_format=standard&_fields=slug,id,acf.title,acf.date,acf.location,acf.thumbnail_img`, { keepalive: true }
  ).then((res) => res.json());

  const data7 = await fetch(
    `${reqUrl}/services?acf_format=standard&_fields=slug,id,acf.title,acf.image,acf.description`, { keepalive: true }
  ).then((res) => res.json());

  const blogPostsWithCategories = data3.map((post) => {
    // find the category
    const postCategory = data4.find(
      (category) => category.id === post.categories[0]
    ); // Assuming only one category per post
    // coverting default date to jalali date
    const gregorianDate = post.date;
    const jalaliDate = moment(gregorianDate, "YYYY-MM-DDTHH:mm:ss")
      .locale("fa")
      .format("YYYY/MM/DD HH:mm:ss");

    // return the post object with the category name
    return {
      ...post,
      categoryName: postCategory ? postCategory.name : "Uncategorized", // Provide a default category name if no category found
      date: jalaliDate.slice(0, 10),
    };
  });

  return (
    <HomeLayout>
      <main className="homeMain">
        <Cta slug={`tel:+989125441048`} imgUrl={`/images/contact/phone.svg`} />
        <Fullpage footer={<Footer />}>
          <HeroSection />
          <ServiceSection data={data7} />
          <RoadmapSection />
          <AboutSection />
          <CustomerSection data={data5.slice(0, 12)} />
          <TestemonialSection data={data1} />
          <PortfolioSection data={filteredData.slice(0, 12)} />
          <SocialSection />
          <EventSection data={data6.slice(0, 3)} />
          <MavaratebSection />
          <RatingSection />
          <BlogSection data={blogPostsWithCategories.slice(0, 12)} />
          <ContactSection />
        </Fullpage>
      </main>
    </HomeLayout>
  );
}
