
// export const metadata = {
//   title: 'آژانس برندینگ ماورانت',
//   description: 'اولین آژانس برندینگ پزشکی در خاورمیانه',
// }
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
      card: 'summary_large_image',
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}
export const viewport = {
  themeColor: '#e1b453',
}
export default function RootLayout({ children }) {
  
  return (
    <html lang="fa" dir="rtl">
      
      {children}
      
    </html>
  )}