import ContactBoxItem from "../../../public/components/contact/ContactBoxItem"
import GoogleMap from "../../../public/components/contact/GoogleMap"
import DefaultLayout from "../../../public/components/layouts/DefaultLayout"
import InsidePageTitle from "../../../public/components/shared/SharedPageTitle"
import '@/app/styles/styles.scss'

const Contact = () => {
    return (
        <html lang="fa" dir="rtl">
            <DefaultLayout
                title={`تماس با ماورانت`}
                description={`ماورانت، اولین آژانس برندینگ پزشکی در ایران`}
                ogTitle={`تماس با ماورانت`}
                ogDescription={`ماورانت، اولین آژانس برندینگ پزشکی در ایران`}
                ogUrl={`https://mavaranet.net/contact`}
                ogLocale={`fa_IR`}
                ogType={`article`}
                ogSiteName={`ماورانت`}
                twitterCard={"summary_large_image"}
            >
                <main>
                    <div className="pageMain contactPage">
                        <div className="container">
                            <div className="contactPage_wrapper">
                                <InsidePageTitle
                                    title={`تماس با ما`}
                                    desc={`برای بهتر دیده شدن برند شخصی یا کسب و کار تان، تنها یک تماس با ماورانت فاصله دارید.`}
                                    backText={`CONTACT US`}
                                />

                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <ContactBoxItem
                                            last={``}
                                            title={`شماره تماس`}
                                            imageUrl={`../images/contact/phone.svg`}
                                            content={`09125441048`}
                                            slug={`tel:+989125441048`}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <ContactBoxItem
                                            last={``}
                                            title={`آدرس ایمیل`}
                                            imageUrl={`../images/contact/mail.svg`}
                                            content={`info@mavaranet.net`}
                                            slug={`mailto:info@mavaranet.net`}
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <ContactBoxItem
                                            last={`last`}
                                            title={`آدرس شرکت`}
                                            imageUrl={`../images/contact/phone.svg`}
                                            content={`تهران، آیت الله کاشانی، ساختمان راز بلوک A، طبقه سوم`}
                                            slug={`https://maps.app.goo.gl/xCmMNMLzty9FRKwi9`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <GoogleMap />
                        </div>
                    </div>
                </main>
            </DefaultLayout>
        </html>
    )
}

export default Contact