// import "@/app/styles/globals.scss";
import LayoutStatics from "./LayoutStatics";

export const metadata = {
  // optionally access and extend (rather than replace) parent metadata
  title: `آژانس برندینگ ماورانت`,
  description: `اولین آژانس برندینگ پزشکی در خاورمیانه.`,
  openGraph: {
    title: `آژانس برندینگ ماورانت`,
    description: `اولین آژانس برندینگ پزشکی در خاورمیانه.`,

    url: `https://mavaranet.net/`,
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
const HomeLayout = ({ children }) => {
  return (
    <body>
      <LayoutStatics />
      {children}
    </body>
  );
};

export default HomeLayout;
