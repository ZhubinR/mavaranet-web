
import 'fullpage.js/vendors/scrolloverflow';
import 'fullpage.js/dist/fullpage.css';
import DefaultLayout from '../../public/components/layouts/DefaultLayout';
import '@/app/styles/globals.scss'
import '@/app/styles/styles.scss'
function MyApp({ Component, pageProps }) {
    return (
        <DefaultLayout>
            <Component {...pageProps} />
        </DefaultLayout>
    )
}

export default MyApp