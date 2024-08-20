import "@/app/styles/globals.scss";
import "@/app/styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PagesHeader from "../../../public/components/layouts/PagesHeader";
import HeaderMenu from "../../../public/components/layouts/HeaderMenu";
import Footer from "../../../public/components/layouts/Footer";

export const metadata = {
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
