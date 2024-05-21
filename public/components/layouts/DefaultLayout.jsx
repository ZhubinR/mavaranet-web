import '@/app/styles/globals.scss'
import '@/app/styles/styles.scss'
import PagesHeader from './PagesHeader'
import HeaderMenu from './HeaderMenu'
import Footer from './Footer'
export const metadata = {
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

const DefaultLayout = ({ children }) => {
    
    return (
           
            <>
                <PagesHeader />
                <HeaderMenu />
                {children}
                <Footer />

            </>
        
    )
}

export default DefaultLayout