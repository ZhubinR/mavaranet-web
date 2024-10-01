// import "@/app/styles/globals.scss";
import "@/app/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PagesHeader from "../../../public/components/layouts/PagesHeader";
import HeaderMenu from "../../../public/components/layouts/HeaderMenu";
import Footer from "../../../public/components/layouts/Footer";

export async function generateMetadata() {
  // optionally access and extend (rather than replace) parent metadata

  return {
    title: `اخبار و مقالات ماورانت  - ماورانت`,
    description: `وبلاگ ما به عنوان یک منبع برجسته اطلاعاتی در زمینه تبلیغات و برندینگ کسب و کارهای مختلف شناخته می‌شود.`,
    openGraph: {
      title: `اخبار و مقالات ماورانت  - ماورانت`,
      description: `وبلاگ ما به عنوان یک منبع برجسته اطلاعاتی در زمینه تبلیغات و برندینگ کسب و کارهای مختلف شناخته می‌شود.`,
      url: `https://mavaranet.net/blog/`,
      locale: `fa_IR`,
      type: `article`,
      siteName: `ماورانت`,
      twitter: {
        card: "summary_large_image",
      },
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

const Layout = ({ children }) => {
  return (
    
      <>
        <PagesHeader />
        <HeaderMenu />
        {children}
        <Footer />
      </>
    
  );
};

export default Layout;
